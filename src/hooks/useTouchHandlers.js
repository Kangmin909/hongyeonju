import { useCallback } from 'react';

/**
 * Custom hook to handle touch gestures (Swipe & Pinch-to-Zoom) for the ImageModal.
 */
export const useTouchHandlers = ({
  zoom,
  setZoom,
  offset,
  setOffset,
  viewportRef,
  currentIndex,
  imagesLength,
  containerWidth,
  onClose,
  handlePrev,
  handleNext,
  resetHideTimer,
  setIsDraggingState,
  state, // External ref
  resetZoom, // External function
}) => {
  // state is passed from parent

  // Calculate clamped offset to keep image within viewport
  const getClampedOffset = useCallback((newX, newY, currentZoom) => {
    if (!viewportRef.current) return { x: newX, y: newY };

    const vWidth = viewportRef.current.offsetWidth;
    const vHeight = viewportRef.current.offsetHeight;
    const iWidth = vWidth * currentZoom;
    const iHeight = vHeight * currentZoom;

    let maxX = 0, maxY = 0;
    if (iWidth > vWidth) maxX = (iWidth - vWidth) / 2;
    if (iHeight > vHeight) maxY = (iHeight - vHeight) / 2;

    return {
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    };
  }, [viewportRef]);

  // Handle Touch Start
  const handleTouchStart = useCallback((e) => {
    resetHideTimer();

    // 1. Pinch Start (2 fingers)
    if (e.touches.length === 2) {
      state.current.isPinching = true;

      const t1 = e.touches[0];
      const t2 = e.touches[1];

      state.current.initialPinchDistance = Math.hypot(
        t1.clientX - t2.clientX,
        t1.clientY - t2.clientY
      );
      state.current.initialZoom = zoom;
      state.current.initialOffset = offset;

      // Calculate pinch center relative to viewport
      if (viewportRef.current) {
        const rect = viewportRef.current.getBoundingClientRect();
        const vCenterX = rect.left + rect.width / 2;
        const vCenterY = rect.top + rect.height / 2;
        state.current.initialPinchCenter = {
          x: (t1.clientX + t2.clientX) / 2 - vCenterX,
          y: (t1.clientY + t2.clientY) / 2 - vCenterY,
        };
      } else {
        state.current.initialPinchCenter = { x: 0, y: 0 };
      }
      return;
    }

    // 2. Swipe/Drag Start (1 finger)
    const touch = e.touches[0];
    // Prevent conflict with iOS back swipe (left edge)
    if (touch.clientX < 40) return;

    state.current.isDragging = true;
    setIsDraggingState(true);
    state.current.initialClient = { x: touch.clientX, y: touch.clientY };
    state.current.initialZoom = zoom;
    state.current.initialOffset = offset;
    state.current.hasMoved = false;
    state.current.dragType = null;
  }, [zoom, offset, resetHideTimer, setIsDraggingState, viewportRef, state]);

  // Handle Touch Move
  const handleTouchMove = useCallback((e) => {
    // 1. Pinch Move
    if (state.current.isPinching && e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];

      const dist = Math.hypot(
        t1.clientX - t2.clientX,
        t1.clientY - t2.clientY
      );
      const scale = dist / state.current.initialPinchDistance;
      const newZoom = Math.min(Math.max(state.current.initialZoom * scale, 1), 5);

      let newX = 0, newY = 0;
      if (viewportRef.current) {
        const rect = viewportRef.current.getBoundingClientRect();
        const vCenterX = rect.left + rect.width / 2;
        const vCenterY = rect.top + rect.height / 2;
        const currentPinchCenter = {
          x: (t1.clientX + t2.clientX) / 2 - vCenterX,
          y: (t1.clientY + t2.clientY) / 2 - vCenterY,
        };

        const ratio = newZoom / state.current.initialZoom;
        const dx = state.current.initialPinchCenter.x - state.current.initialOffset.x;
        const dy = state.current.initialPinchCenter.y - state.current.initialOffset.y;

        newX = currentPinchCenter.x - dx * ratio;
        newY = currentPinchCenter.y - dy * ratio;
      }

      setZoom(newZoom);
      setOffset(getClampedOffset(newX, newY, newZoom));
      return;
    }

    // 2. Swipe/Drag Move
    if (!state.current.isDragging || e.touches.length > 1) return;

    const touch = e.touches[0];
    const dx = touch.clientX - state.current.initialClient.x;
    const dy = touch.clientY - state.current.initialClient.y;

    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
      state.current.hasMoved = true;
    }

    if (zoom > 1) {
      // Pan when zoomed in
      setOffset(
        getClampedOffset(
          state.current.initialOffset.x + dx,
          state.current.initialOffset.y + dy,
          zoom
        )
      );
    } else {
      // Swipe or Dismiss when zoomed out
      if (!state.current.dragType) {
        if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
        else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
      }

      if (state.current.dragType === 'dismiss') {
        setOffset({ x: 0, y: Math.max(0, dy) });
      } else if (state.current.dragType === 'swipe') {
        let newX = state.current.initialOffset.x + dx;
        // Rubber-banding effect
        if (currentIndex === 0 && newX > 0) newX = newX * 0.3;
        if (currentIndex === imagesLength - 1 && newX < 0) newX = newX * 0.3;
        setOffset({ x: newX, y: 0 });
      }
    }
  }, [zoom, currentIndex, imagesLength, getClampedOffset, setOffset, setZoom, viewportRef, state]);

  // Handle Touch End
  const handleTouchEnd = useCallback((e) => {
    // 1. Pinch End
    if (state.current.isPinching && e.touches.length < 2) {
      state.current.isPinching = false;
      // Smooth transition to drag if 1 finger remains
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        state.current.isDragging = true;
        setIsDraggingState(true);
        state.current.initialClient = { x: touch.clientX, y: touch.clientY };
        state.current.initialOffset = offset;
        state.current.initialZoom = zoom;
        state.current.hasMoved = false;
        state.current.dragType = null;
      }
      return;
    }

    if (e.touches.length > 0) return;

    // 2. Drag End
    if (state.current.isDragging && zoom === 1) {
      if (state.current.dragType === 'dismiss' && offset.y > 100) {
        onClose();
        return;
      } else if (state.current.dragType === 'swipe') {
        const threshold = containerWidth * 0.2;
        if (offset.x > threshold) handlePrev();
        else if (offset.x < -threshold) handleNext();
      }
      setOffset({ x: 0, y: 0 });
    }

    state.current.isDragging = false;
    setIsDraggingState(false);
    state.current.dragType = null;
  }, [zoom, offset, containerWidth, onClose, handlePrev, handleNext, setIsDraggingState, setOffset, state]);

  // Double Tap Zoom logic
  const handleDoubleTapZoom = useCallback((clientX, clientY, target) => {
    if (zoom > 1) {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      state.current.dragType = null;
    } else {
      const rect = target.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      const targetZoom = 2.5;

      setZoom(targetZoom);
      setOffset(
                    getClampedOffset(
                  -x * (targetZoom - 1),
                  -y * (targetZoom - 1),
                  targetZoom
                )
              );
            }
          }, [zoom, setZoom, setOffset, getClampedOffset, state]);
  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleDoubleTapZoom,
    getClampedOffset,
    // state, // No need to return state
  };
};
