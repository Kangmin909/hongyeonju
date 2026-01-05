import React, { useEffect, useState, useRef, useCallback } from 'react';
import './ImageModal.css';

const ImageModal = ({ images = [], initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [showControls, setShowControls] = useState(true);
  
  const viewportRef = useRef(null);
  const lastTapTime = useRef(0);
  const hideTimerRef = useRef(null);
  const state = useRef({ 
    dragType: null, 
    isDragging: false, 
    hasMoved: false, 
    lastPos: { x: 0, y: 0 }, 
    initialZoom: 1, 
    initialOffset: { x: 0, y: 0 }, 
    initialCenter: { x: 0, y: 0 }, 
    pinchStartDist: 0 
  });

  const resetHideTimer = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    state.current.dragType = null;
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetZoom();
    }
  }, [currentIndex, images.length, resetZoom]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetZoom();
    }
  }, [currentIndex, resetZoom]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    resetHideTimer();
    
    const updateWidth = () => {
      if (viewportRef.current) {
        setContainerWidth(viewportRef.current.getBoundingClientRect().width);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }
    
    const handleKeyDown = (e) => {
      setShowControls(true);
      resetHideTimer();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      resizeObserver.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handleNext, handlePrev, resetHideTimer]);

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
      y: Math.max(-maxY, Math.min(maxY, newY))
    };
  }, []);

  const getTouchInfo = (e) => {
    if (!viewportRef.current) return { center: { x: 0, y: 0 }, dist: 0 };
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    if (e.touches.length >= 2) {
      return { 
        center: { 
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - centerX, 
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - centerY 
        }, 
        dist: Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) 
      };
    }
    return { center: { x: e.touches[0].clientX - centerX, y: e.touches[0].clientY - centerY }, dist: 0 };
  };

  const handleTouchStart = (e) => {
    resetHideTimer();
    const info = getTouchInfo(e);
    state.current.isDragging = true;
    state.current.lastPos = info.center;
    state.current.initialCenter = info.center;
    state.current.initialZoom = zoom;
    state.current.initialOffset = offset;
    state.current.pinchStartDist = info.dist;
    state.current.hasMoved = false;
    if (e.touches.length < 2) state.current.dragType = null;
  };

  const handleTouchMove = (e) => {
    if (!state.current.isDragging) return;
    setShowControls(true);
    resetHideTimer();
    const info = getTouchInfo(e);

    if (e.touches.length >= 2 && state.current.pinchStartDist > 0) {
      const newZoom = Math.min(Math.max(state.current.initialZoom * (info.dist / state.current.pinchStartDist), 1), 5);
      const ratio = newZoom / state.current.initialZoom;
      const newX = info.center.x - (state.current.initialCenter.x - state.current.initialOffset.x) * ratio;
      const newY = info.center.y - (state.current.initialCenter.y - state.current.initialOffset.y) * ratio;
      setZoom(newZoom);
      setOffset(getClampedOffset(newX, newY, newZoom));
    } else if (e.touches.length === 1) {
      const dx = info.center.x - state.current.lastPos.x;
      const dy = info.center.y - state.current.lastPos.y;
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) state.current.hasMoved = true;

      if (zoom > 1) {
        setOffset(prev => getClampedOffset(prev.x + dx, prev.y + dy, zoom));
      } else {
        if (!state.current.dragType) {
          if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
          else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
        }
        // Dismiss 드래그 시에는 y축만 이동
        if (state.current.dragType === 'dismiss') setOffset(prev => ({ x: 0, y: Math.max(0, prev.y + dy) }));
        else setOffset(prev => ({ x: prev.x + dx, y: 0 }));
      }
    }
    state.current.lastPos = info.center;
  };

  const handleDoubleTapZoom = useCallback((clientX, clientY, target) => {
    if (zoom > 1) {
      resetZoom();
    } else {
      const rect = target.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      const targetZoom = 2.5;
      setZoom(targetZoom);
      setOffset(getClampedOffset(-x * (targetZoom - 1), -y * (targetZoom - 1), targetZoom));
    }
  }, [zoom, resetZoom, getClampedOffset]);

  const handleTouchEnd = (e) => {
    if (e.touches.length > 0) { handleTouchStart(e); return; }

    if (state.current.isDragging && zoom === 1) {
      if (state.current.dragType === 'dismiss' && offset.y > 100) {
        onClose();
        return;
      }
      else if (state.current.dragType === 'swipe') {
        if (offset.x > 80) handlePrev();
        else if (offset.x < -80) handleNext();
      }
      setOffset({ x: 0, y: 0 });
    }
    state.current.isDragging = false;
  };

  const handleContainerClick = (e) => {
    if (state.current.hasMoved) return;
    setShowControls(true);
    resetHideTimer();
    const now = Date.now();
    if (now - lastTapTime.current < 300) {
      handleDoubleTapZoom(e.clientX, e.clientY, e.target);
    }
    lastTapTime.current = now;
  };

  const handleMouseDown = useCallback((e) => {
    resetHideTimer();
    state.current.isDragging = true;
    state.current.hasMoved = false;
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    state.current.lastPos = { 
      x: e.clientX - (rect.left + rect.width / 2), 
      y: e.clientY - (rect.top + rect.height / 2) 
    };
  }, [resetHideTimer]);

  const handleMouseMove = useCallback((e) => {
    setShowControls(true);
    resetHideTimer();
    
    if (!state.current.isDragging || e.touches) return;
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const currentPos = { 
      x: e.clientX - (rect.left + rect.width / 2), 
      y: e.clientY - (rect.top + rect.height / 2) 
    };
    const dx = currentPos.x - state.current.lastPos.x;
    const dy = currentPos.y - state.current.lastPos.y;
    
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) state.current.hasMoved = true;
    
    if (zoom > 1) {
      setOffset(prev => getClampedOffset(prev.x + dx, prev.y + dy, zoom));
    } else {
      // 마우스로도 아래로 당기기 가능하게 설정
      if (!state.current.dragType) {
        if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
        else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
      }
      if (state.current.dragType === 'dismiss') setOffset(prev => ({ x: 0, y: Math.max(0, prev.y + dy) }));
      else setOffset(prev => ({ x: prev.x + dx, y: 0 }));
    }
    state.current.lastPos = currentPos;
  }, [zoom, getClampedOffset, resetHideTimer]);

  const handleMouseUp = useCallback(() => {
    if (state.current.isDragging && zoom === 1) {
      if (state.current.dragType === 'dismiss' && offset.y > 100) {
        onClose();
        return;
      }
      else if (state.current.dragType === 'swipe') {
        if (offset.x > 80) handlePrev();
        else if (offset.x < -80) handleNext();
      }
      setOffset({ x: 0, y: 0 });
    }
    state.current.isDragging = false;
    state.current.dragType = null;
  }, [zoom, offset.y, offset.x, handleNext, handlePrev, onClose]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setShowControls(true);
    resetHideTimer();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newZoom = Math.min(Math.max(zoom + delta, 1), 5);
    if (newZoom === zoom) return;
    if (newZoom === 1) { resetZoom(); return; }
    
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);
    const ratio = newZoom / zoom;
    
    setZoom(newZoom);
    setOffset(getClampedOffset(mouseX - (mouseX - offset.x) * ratio, mouseY - (mouseY - offset.y) * ratio, newZoom));
  }, [zoom, offset, resetZoom, getClampedOffset, resetHideTimer]);

  // 드래그 거리에 따른 오버레이 불투명도 계산 (아래로 당길수록 투명해짐)
  const overlayOpacity = state.current.dragType === 'dismiss' 
    ? Math.max(1 - offset.y / 600, 0) 
    : 1;

  // 모달 전체 컨텐츠의 트랜스폼 (아래로 당길 때 전체가 같이 움직임)
  const modalTransform = state.current.dragType === 'dismiss'
    ? `translate3d(0, ${offset.y}px, 0)`
    : 'none';

  return (
    <div 
      className="image-modal-overlay" 
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${0.95 * overlayOpacity})`,
        transition: state.current.isDragging ? 'none' : 'background-color 0.3s ease'
      }}
    >
      <div 
        className="image-modal-content-container"
        style={{ 
          transform: modalTransform,
          transition: state.current.isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <button className={`modal-universal-close-btn ${!showControls ? 'hidden' : ''}`} onClick={onClose} aria-label="Close">&times;</button>
        <div className={`image-modal-info ${!showControls ? 'hidden' : ''}`}>{currentIndex + 1} / {images.length}</div>
        
        <button className={`modal-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handlePrev(); }} disabled={currentIndex === 0}>&#60;</button>
        <button className={`modal-nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handleNext(); }} disabled={currentIndex === images.length - 1}>&#62;</button>

        <div className="image-modal-wrapper fullscreen" onClick={(e) => e.stopPropagation()}>
          <div className="image-modal-viewport fullscreen" ref={viewportRef}>
            <div 
              className="slider-container"
              style={{
                transform: `translate3d(${-currentIndex * containerWidth + (state.current.dragType === 'swipe' ? offset.x : 0)}px, 0, 0)`,
                transition: state.current.isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp} 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleContainerClick}
            >
              {images.map((img, idx) => (
                <div key={idx} className="slide-item">
                  <div 
                    className="media-movable-content"
                    style={idx === currentIndex ? { 
                      transform: `translate(${zoom === 1 ? 0 : offset.x}px, ${zoom === 1 ? 0 : offset.y}px) scale(${zoom})`,
                      transition: (state.current.isDragging) ? 'none' : 'transform 0.25s ease-out' 
                    } : {}}
                    onWheel={idx === currentIndex ? handleWheel : null}
                  >
                    <img src={img.link} alt={img.title || ''} className="image-modal-img-internal fullscreen" draggable="false" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`image-modal-controls ${!showControls ? 'hidden' : ''}`} onClick={(e) => e.stopPropagation()}>
          <button onClick={() => { const nz = Math.max(zoom - 0.5, 1); if(nz === 1) resetZoom(); else { setZoom(nz); setOffset(o => getClampedOffset(o.x, o.y, nz)); } }} className="control-btn-small">−</button>
          <span className="zoom-level-small" onClick={resetZoom} style={{ cursor: 'pointer' }}>{Math.round(zoom * 100)}%</span>
          <button onClick={() => { const nz = Math.min(zoom + 0.5, 5); setZoom(nz); setOffset(o => getClampedOffset(o.x, o.y, nz)); }} className="control-btn-small">+</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
