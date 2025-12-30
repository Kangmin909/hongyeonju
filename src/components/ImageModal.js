import React, { useEffect, useState, useRef, useCallback } from 'react';
import './ImageModal.css';

const ImageModal = ({ images = [], initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loadingStates, setLoadingStates] = useState({});
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  const isDragging = useRef(false);
  const hasMoved = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const pinchStartDist = useRef(0);
  const initialZoom = useRef(1);
  const viewportRef = useRef(null);
  const state = useRef({ dragType: null, isDragging: false, hasMoved: false, lastPos: { x: 0, y: 0 }, initialZoom: 1, initialOffset: { x: 0, y: 0 }, initialCenter: { x: 0, y: 0 }, pinchStartDist: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetZoom();
    }
  }, [currentIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetZoom();
    }
  }, [currentIndex]);

  const resetZoom = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    state.current.dragType = null;
  };

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
      return { center: { x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - centerX, y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - centerY }, dist: Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) };
    }
    return { center: { x: e.touches[0].clientX - centerX, y: e.touches[0].clientY - centerY }, dist: 0 };
  };

  const handleTouchStart = (e) => {
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
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) state.current.hasMoved = true;

      if (zoom > 1) {
        setOffset(prev => getClampedOffset(prev.x + dx, prev.y + dy, zoom));
      } else {
        if (!state.current.dragType) {
          if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
          else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
        }
        if (state.current.dragType === 'dismiss') setOffset(prev => ({ x: 0, y: Math.max(0, prev.y + dy) }));
        else setOffset(prev => ({ x: prev.x + dx, y: 0 }));
      }
    }
    state.current.lastPos = info.center;
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length > 0) { handleTouchStart(e); return; }
    if (state.current.isDragging && zoom === 1) {
      if (state.current.dragType === 'dismiss' && offset.y > 100) onClose();
      else if (state.current.dragType === 'swipe') {
        if (offset.x > 80) handlePrev();
        else if (offset.x < -80) handleNext();
      }
      setOffset({ x: 0, y: 0 });
    }
    state.current.isDragging = false;
    state.current.dragType = null;
  };

  // PC 마우스 핸들러
  const handleMouseDown = (e) => {
    state.current.isDragging = true;
    state.current.hasMoved = false;
    const rect = viewportRef.current.getBoundingClientRect();
    state.current.lastPos = { x: e.clientX - (rect.left + rect.width / 2), y: e.clientY - (rect.top + rect.height / 2) };
  };

  const handleMouseMove = (e) => {
    if (!state.current.isDragging || e.touches) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const currentPos = { x: e.clientX - (rect.left + rect.width / 2), y: e.clientY - (rect.top + rect.height / 2) };
    const dx = currentPos.x - state.current.lastPos.x;
    const dy = currentPos.y - state.current.lastPos.y;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) state.current.hasMoved = true;
    if (zoom > 1) setOffset(prev => getClampedOffset(prev.x + dx, prev.y + dy, zoom));
    else setOffset(prev => ({ x: prev.x + dx, y: 0 }));
    state.current.lastPos = currentPos;
  };

  const handleMouseUp = () => {
    if (state.current.isDragging && zoom === 1) {
      if (offset.x > 80) handlePrev();
      else if (offset.x < -80) handleNext();
      setOffset({ x: 0, y: 0 });
    }
    state.current.isDragging = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newZoom = Math.min(Math.max(zoom + delta, 1), 5);
    if (newZoom === zoom) return;
    if (newZoom === 1) { setZoom(1); setOffset({ x: 0, y: 0 }); return; }
    const rect = viewportRef.current.getBoundingClientRect();
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);
    const ratio = newZoom / zoom;
    setZoom(newZoom);
    setOffset(getClampedOffset(mouseX - (mouseX - offset.x) * ratio, mouseY - (mouseY - offset.y) * ratio, newZoom));
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (state.current.hasMoved) return;
    if (zoom > 1) resetZoom();
    else {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const targetZoom = 2.5;
      setZoom(targetZoom);
      setOffset(getClampedOffset(-x * (targetZoom - 1), -y * (targetZoom - 1), targetZoom));
    }
  };

  return (
    <div className="image-modal-overlay">
      <button className="modal-universal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
      <div className="image-modal-info" onClick={(e) => e.stopPropagation()}>{currentIndex + 1} / {images.length}</div>
      
      <button className={`modal-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} onClick={(e) => { e.stopPropagation(); handlePrev(); }} disabled={currentIndex === 0}>&#60;</button>
      <button className={`modal-nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''}`} onClick={(e) => { e.stopPropagation(); handleNext(); }} disabled={currentIndex === images.length - 1}>&#62;</button>

      <div className="image-modal-wrapper fullscreen" onClick={(e) => e.stopPropagation()}>
        <div className="image-modal-viewport fullscreen" ref={viewportRef}>
          <div 
            className="slider-container"
            style={{
              // 정밀한 픽셀 기반 이동으로 변경
              transform: `translate3d(${-currentIndex * viewportWidth + (zoom === 1 ? offset.x : 0)}px, 0, 0)`,
              transition: state.current.isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} 
            onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
          >
            {images.map((img, idx) => (
              <div key={idx} className="slide-item">
                <div 
                  className="media-movable-content"
                  style={idx === currentIndex ? { 
                    transform: `translate(${zoom === 1 ? 0 : offset.x}px, ${offset.y}px) scale(${zoom})`,
                    opacity: state.current.dragType === 'dismiss' ? Math.max(1 - offset.y / 400, 0.3) : 1,
                    transition: (state.current.isDragging) ? 'none' : 'transform 0.25s ease-out, opacity 0.2s' 
                  } : {}}
                  onWheel={idx === currentIndex ? handleWheel : null}
                >
                  <img src={img.link} alt={img.title || ''} className="image-modal-img-internal fullscreen" onLoad={(e) => setLoadingStates(prev => ({ ...prev, [idx]: false }))} draggable="false" onClick={handleImageClick} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => { const nz = Math.max(zoom - 0.5, 1); setZoom(nz); if(nz === 1) setOffset({x:0,y:0}); else setOffset(o => getClampedOffset(o.x, o.y, nz)); }} className="control-btn-small">−</button>
        <span className="zoom-level-small" onClick={resetZoom} style={{ cursor: 'pointer' }}>{Math.round(zoom * 100)}%</span>
        <button onClick={() => { const nz = Math.min(zoom + 0.5, 5); setZoom(nz); setOffset(o => getClampedOffset(o.x, o.y, nz)); }} className="control-btn-small">+</button>
      </div>
    </div>
  );
};

export default ImageModal;