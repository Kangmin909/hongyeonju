import React, { useEffect, useState, useRef, useCallback } from 'react';
import './VideoModal.css';

const VideoModal = ({ src, alt, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [showControls, setShowControls] = useState(true); // 컨트롤 표시 여부
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const initialOffsetY = useRef(0);
  const hideTimerRef = useRef(null); // 자동 숨김 타이머

  // 컨트롤 자동 숨김 타이머 초기화
  const resetHideTimer = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2500);
  }, []);

  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Effect 1: History & Scroll Locking (Runs ONCE)
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // 뒤로가기 제어를 위한 히스토리 상태 추가
    const currentUrl = window.location.pathname + window.location.search;
    window.history.pushState({ modal: 'video' }, '', currentUrl);
    
    const handlePopState = () => {
      if (onCloseRef.current) onCloseRef.current();
    };
    
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      
      const savedScrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY || '0') * -1);
      }
    };
  }, []);

  // Effect 2: Event Listeners
  useEffect(() => {
    resetHideTimer();

    const handleKeyDown = (e) => {
      setShowControls(true);
      resetHideTimer();
      if (e.key === 'Escape') {
        if (onCloseRef.current) onCloseRef.current();
      }
    };
    
    const handleMouseMove = () => {
      setShowControls(true);
      resetHideTimer();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [resetHideTimer]);

  const handleStart = (e) => {
    setShowControls(true);
    resetHideTimer();
    isDragging.current = true;
    setIsDraggingState(true);
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    startY.current = clientY; // 현재 clientY 저장
    initialOffsetY.current = offsetY; // 현재 오프셋 저장
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    setShowControls(true);
    resetHideTimer();
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    const dy = clientY - startY.current;
    const newY = initialOffsetY.current + dy;
    
    if (newY >= 0) {
      setOffsetY(newY);
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