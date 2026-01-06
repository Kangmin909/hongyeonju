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
    
          initialClient: { x: 0, y: 0 }, // 절대 좌표 저장용
    
          initialZoom: 1,
    
          initialOffset: { x: 0, y: 0 }
    
        });
    
      
    
        const resetHideTimer = useCallback(() => {
    
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    
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
    
          
    
                if (e.key === 'Escape') onClose(currentIndex);
    
          
    
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
    
      
    
        const handleTouchStart = (e) => {
    
          resetHideTimer();
    
          const touch = e.touches[0];
    
          state.current.isDragging = true;
    
          setIsDraggingState(true);
    
          state.current.initialClient = { x: touch.clientX, y: touch.clientY };
    
          state.current.initialZoom = zoom;
    
          state.current.initialOffset = offset;
    
          state.current.hasMoved = false;
    
          state.current.dragType = null;
    
        };
    
      
    
        const handleTouchMove = (e) => {
    
          if (!state.current.isDragging || e.touches.length > 1) return;
    
          const touch = e.touches[0];
    
          const dx = touch.clientX - state.current.initialClient.x;
    
          const dy = touch.clientY - state.current.initialClient.y;
    
          
    
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
    if (e.touches.length > 0) { 
      // 다중 터치 시 처리
      return; 
    }

    if (state.current.isDragging && zoom === 1) {
      if (state.current.dragType === 'dismiss' && offset.y > 100) {
        onClose(currentIndex); // 인덱스 전달 확인
        return;
      }
      else if (state.current.dragType === 'swipe') {
        const threshold = containerWidth * 0.2; // 화면 너비의 20% 이상 스와이프해야 넘어가도록
        if (offset.x > threshold) handlePrev();
        else if (offset.x < -threshold) handleNext();
      }
    }
    setOffset({ x: 0, y: 0 });
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
    
            clearTimeout(clickTimerRef.current);
    
            clickTimerRef.current = null;
    
            handleDoubleTapZoom(clientX, clientY, target);
    
          } else {
    
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
    
          state.current.initialClient = { x: e.clientX, y: e.clientY };
    
          state.current.initialOffset = offset;
    
          state.current.hasMoved = false;
    
          state.current.dragType = null;
    
        }, [offset, resetHideTimer]);
    
      
    
        const handleMouseMove = useCallback((e) => {
    
          if (!state.current.isDragging || e.touches) return;
    
          
    
          const dx = e.clientX - state.current.initialClient.x;
    
          const dy = e.clientY - state.current.initialClient.y;
    
          
    
          if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
    
            state.current.hasMoved = true;
    
            setShowControls(true);
    
            resetHideTimer();
    
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
    
        }, [zoom, getClampedOffset, resetHideTimer]);
    
      

  const handleMouseUp = useCallback(() => {
    if (state.current.isDragging && zoom === 1) {
      if (state.current.dragType === 'dismiss' && offset.y > 100) {
        onClose(currentIndex);
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
          <button className="modal-universal-back-btn" onClick={(e) => { e.stopPropagation(); onClose(currentIndex); }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} aria-label="Back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <div className="image-modal-info">{currentIndex + 1} / {images.length}</div>
        </div>
        
        <button className={`modal-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handlePrev(); }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} disabled={currentIndex === 0}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button className={`modal-nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); handleNext(); }} onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} disabled={currentIndex === images.length - 1}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div className="image-modal-wrapper fullscreen">
          <div className="image-modal-viewport fullscreen" ref={viewportRef}>
            <div 
              className="slider-container"
              style={{
                transform: `translate3d(${-currentIndex * containerWidth + (state.current.dragType === 'swipe' ? offset.x : 0)}px, 0, 0)`,
                transition: isDraggingState ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)'
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
          <div className="image-modal-caption">
            <div className="caption-title">{images[currentIndex]?.title}</div>
            <div className="caption-meta">{images[currentIndex]?.meta}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;