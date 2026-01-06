import React, { useEffect, useState, useRef, useCallback } from 'react';
import './ImageModal.css';

const ImageModal = ({ images = [], initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const [showControls, setShowControls] = useState(true);
    const [isDraggingState, setIsDraggingState] = useState(false); // 드래그 중임을 알리는 상태
    
      const viewportRef = useRef(null);
    
      const clickTimerRef = useRef(null);
    
      const lastTapTime = useRef(0);
    
      const hideTimerRef = useRef(null);
    
      const state = useRef({
    
        dragType: null,
    
        isDragging: false,
    
        hasMoved: false,
    
        lastPos: { x: 0, y: 0 },
    
        initialZoom: 1,
    
        initialOffset: { x: 0, y: 0 },
    
        initialCenter: { x: 0, y: 0 }
    
      });
    
    
    
      const resetHideTimer = useCallback(() => {
    
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    
        // PC 뷰(마우스 포인터 사용)에서만 자동 숨김 작동
    
        if (window.matchMedia('(pointer: fine)').matches) {
    
          hideTimerRef.current = setTimeout(() => {
    
            setShowControls(false);
    
          }, 2500);
    
        }
    
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
    
    
    
        const handleGlobalMouseMove = () => {
    
          if (window.matchMedia('(pointer: fine)').matches) {
    
            setShowControls(true);
    
            resetHideTimer();
    
          }
    
        };
    
    
    
        window.addEventListener('keydown', handleKeyDown);
    
        window.addEventListener('mousemove', handleGlobalMouseMove);
    
        
    
        return () => {
    
          document.body.style.overflow = 'unset';
    
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    
          if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    
          resizeObserver.disconnect();
    
          window.removeEventListener('keydown', handleKeyDown);
    
          window.removeEventListener('mousemove', handleGlobalMouseMove);
    
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
    
        if (!viewportRef.current) return { center: { x: 0, y: 0 } };
    
        const rect = viewportRef.current.getBoundingClientRect();
    
        const centerX = rect.left + rect.width / 2;
    
        const centerY = rect.top + rect.height / 2;
    
        if (e.touches.length >= 2) {
    
          return { 
    
            center: { 
    
              x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - centerX, 
    
              y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - centerY 
    
            }
    
          };
    
        }
    
        return { center: { x: e.touches[0].clientX - centerX, y: e.touches[0].clientY - centerY } };
    
      };
    
    
    
      const handleTouchStart = (e) => {
    
        resetHideTimer();
    
        const info = getTouchInfo(e);
    
        state.current.isDragging = true;
    
        setIsDraggingState(true);
    
        state.current.lastPos = info.center;
    
        state.current.initialCenter = info.center;
    
        state.current.initialZoom = zoom;
    
        state.current.initialOffset = offset;
    
        state.current.hasMoved = false;
    
        state.current.dragType = null;
    
      };
    
    
    
      const handleTouchMove = (e) => {
    
        if (!state.current.isDragging) return;
    
        const info = getTouchInfo(e);
    
    
    
        if (e.touches.length >= 2) {
    
          // 핀치 줌 로직은 복잡성을 위해 제외하거나 나중에 보강
    
        } else if (e.touches.length === 1) {
    
          const dx = info.center.x - state.current.initialCenter.x;
    
          const dy = info.center.y - state.current.initialCenter.y;
    
          
    
          // 움직임이 감지되면 hasMoved만 설정 (모바일 자동 나타남 제거)
    
          if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
    
            state.current.hasMoved = true;
    
          }
    
    
    
          if (zoom > 1) {
    
            setOffset(getClampedOffset(state.current.initialOffset.x + dx, state.current.initialOffset.y + dy, zoom));
    
          } else {
    
            if (!state.current.dragType) {
    
              if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
    
              else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
    
            }
    
            if (state.current.dragType === 'dismiss') {
    
              setOffset({ x: 0, y: Math.max(0, dy) });
    
            } else if (state.current.dragType === 'swipe') {
    
              setOffset({ x: state.current.initialOffset.x + dx, y: 0 });
    
            }
    
          }
    
        }
    
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
    
        setIsDraggingState(false);
    
        state.current.dragType = null;
    
      };
    
    
    
      const handleContainerClick = (e) => {
    
        if (state.current.hasMoved) return;
    
        
    
        const clientX = e.clientX;
    
        const clientY = e.clientY;
    
        const target = e.target;
    
    
    
        if (clickTimerRef.current) {
    
          // 두 번째 클릭 발생: 더블 탭으로 처리
    
          clearTimeout(clickTimerRef.current);
    
          clickTimerRef.current = null;
    
          handleDoubleTapZoom(clientX, clientY, target);
    
        } else {
    
          // 첫 번째 클릭 발생: 잠시 대기
    
          clickTimerRef.current = setTimeout(() => {
    
            setShowControls(prev => {
    
              const next = !prev;
    
              if (next) resetHideTimer();
    
              else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    
              return next;
    
            });
    
            clickTimerRef.current = null;
    
          }, 250);
    
        }
    
      };
    
    

  const handleMouseDown = useCallback((e) => {
    resetHideTimer();
    state.current.isDragging = true;
    setIsDraggingState(true);
    state.current.hasMoved = false;
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const pos = { x: e.clientX - centerX, y: e.clientY - centerY };
    state.current.initialCenter = pos;
    state.current.initialOffset = offset;
    state.current.dragType = null;
  }, [offset, resetHideTimer]);

  const handleMouseMove = useCallback((e) => {
    if (!state.current.isDragging || e.touches) return;
    setShowControls(true);
    resetHideTimer();
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentPos = { x: e.clientX - centerX, y: e.clientY - centerY };
    
    const dx = currentPos.x - state.current.initialCenter.x;
    const dy = currentPos.y - state.current.initialCenter.y;
    
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) state.current.hasMoved = true;
    
    if (zoom > 1) {
      setOffset(getClampedOffset(state.current.initialOffset.x + dx, state.current.initialOffset.y + dy, zoom));
    } else {
      if (!state.current.dragType) {
        if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
        else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
      }
      if (state.current.dragType === 'dismiss') {
        setOffset({ x: 0, y: Math.max(0, dy) });
      } else if (state.current.dragType === 'swipe') {
        setOffset({ x: state.current.initialOffset.x + dx, y: 0 });
      }
    }
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
    setIsDraggingState(false);
    state.current.dragType = null;
  }, [zoom, offset.y, offset.x, handleNext, handlePrev, onClose]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
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
  }, [zoom, offset, resetZoom, getClampedOffset]);

  // 오버레이 불투명도 계산
  const overlayOpacity = state.current.dragType === 'dismiss' ? Math.max(1 - offset.y / 600, 0) : 1;

  return (
    <div 
      className={`image-modal-overlay ${isDraggingState ? 'is-dragging' : ''}`}
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${1.0 * overlayOpacity})`,
        transform: state.current.dragType === 'dismiss' ? `translate3d(0, ${offset.y}px, 0)` : 'none'
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
      <div 
        className="image-modal-content-container"
      >
        {/* 상단바 배경 및 컨트롤 */}
        <div className={`image-modal-header-bar ${!showControls ? 'hidden' : ''}`}>
          <div className="image-modal-info">{currentIndex + 1} / {images.length}</div>
          <button className="modal-universal-close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} aria-label="Close">&times;</button>
        </div>
        
        <button className={`modal-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handlePrev(); }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} disabled={currentIndex === 0}>&#60;</button>
        <button className={`modal-nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handleNext(); }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} disabled={currentIndex === images.length - 1}>&#62;</button>

        <div className="image-modal-wrapper fullscreen">
          <div className="image-modal-viewport fullscreen" ref={viewportRef}>
            <div 
              className="slider-container"
              style={{
                transform: `translate3d(${-currentIndex * containerWidth + (state.current.dragType === 'swipe' ? offset.x : 0)}px, 0, 0)`,
                transition: isDraggingState ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="slide-item">
                  <div 
                    className="media-movable-content"
                    style={idx === currentIndex ? { 
                      transform: `translate(${zoom === 1 ? 0 : offset.x}px, ${zoom === 1 ? 0 : offset.y}px) scale(${zoom})`,
                      transition: isDraggingState ? 'none' : 'transform 0.25s ease-out' 
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

        {/* 하단바 배경 및 컨트롤 */}
        <div className={`image-modal-footer-bar ${!showControls ? 'hidden' : ''}`}>
          <div className="image-modal-controls" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
            <button onClick={() => { const nz = Math.max(zoom - 0.5, 1); if(nz === 1) resetZoom(); else { setZoom(nz); setOffset(o => getClampedOffset(o.x, o.y, nz)); } }} className="control-btn-small">−</button>
            <span className="zoom-level-small" onClick={resetZoom} style={{ cursor: 'pointer' }}>{Math.round(zoom * 100)}%</span>
            <button onClick={() => { const nz = Math.min(zoom + 0.5, 5); setZoom(nz); setOffset(o => getClampedOffset(o.x, o.y, nz)); }} className="control-btn-small">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;