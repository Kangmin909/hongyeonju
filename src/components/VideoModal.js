import React, { useEffect, useState, useRef, useCallback } from 'react';
import './VideoModal.css';

const VideoModal = ({ src, alt, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [showControls, setShowControls] = useState(true); // 컨트롤 표시 여부
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const hideTimerRef = useRef(null); // 자동 숨김 타이머

  // 컨트롤 자동 숨김 타이머 초기화
  const resetHideTimer = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2500);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    resetHideTimer(); // 초기 로드 시 타이머 시작

    const handleKeyDown = (e) => {
      setShowControls(true);
      resetHideTimer();
      if (e.key === 'Escape') onClose();
    };
    
    // 마우스 움직임 감지하여 컨트롤 표시
    const handleMouseMove = () => {
      setShowControls(true);
      resetHideTimer();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.overflow = 'unset';
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onClose, resetHideTimer]);

  const handleStart = (e) => {
    setShowControls(true);
    resetHideTimer();
    isDragging.current = true;
    setIsDraggingState(true);
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    startY.current = clientY - offsetY;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    setShowControls(true);
    resetHideTimer();
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    const currentY = clientY - startY.current;
    
    if (currentY >= 0) {
      setOffsetY(currentY);
    }
  };

  const handleEnd = useCallback(() => {
    if (isDragging.current) {
      if (offsetY > 100) {
        onClose();
        return;
      } else {
        setOffsetY(0);
      }
    }
    isDragging.current = false;
    setIsDraggingState(false);
    startY.current = 0;
  }, [offsetY, onClose]);

  const handleContainerClick = (e) => {
    // 클릭 시 컨트롤 토글
    setShowControls(true);
    resetHideTimer();
  };

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }
    return null;
  };

  const overlayOpacity = Math.max(1 - offsetY / 600, 0);

  if (!src) return null;

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  return (
    <div 
      className={`video-modal-overlay ${isDraggingState ? 'is-dragging' : ''}`}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseUp={handleEnd} 
      onTouchEnd={handleEnd} 
      onMouseLeave={handleEnd}
      onClick={handleContainerClick}
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${1.0 * overlayOpacity})`,
        transform: `translate3d(0, ${offsetY}px, 0)`
      }}
    >
      <div 
        className="video-modal-content-container"
      >
        <button className={`video-modal-close-btn ${!showControls ? 'hidden' : ''}`} onClick={onClose} aria-label="Close">&times;</button>
        
        <div 
          className="video-modal-wrapper" 
          onClick={(e) => e.stopPropagation()}
        >
          {loading && <div className="video-modal-loader" />}
          
          {isYouTube ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(src)}?autoplay=1`}
              title={alt || 'YouTube video'}
              className="video-modal-element"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setLoading(false)}
            />
          ) : (
            <video
              src={src}
              className="video-modal-element"
              controls
              autoPlay
              playsInline
              onLoadedData={() => setLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;