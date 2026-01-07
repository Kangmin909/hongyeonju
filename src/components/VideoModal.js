import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './VideoModal.css';

const VideoModal = ({ src, alt, onClose }) => {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startX = useRef(0);
  const initialOffsetY = useRef(0);
  const hideTimerRef = useRef(null);
  const hasMoved = useRef(false);
  const lastToggleTime = useRef(0);

  const resetHideTimer = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  const onCloseRef = useRef(onClose);
  const isPopStateRef = useRef(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Effect 1: History & Scroll Locking
  useEffect(() => {
    const scrollY = window.scrollY;
    const initialPath = window.location.pathname;
    const originalScrollRestoration = window.history.scrollRestoration;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'hidden';

    const historyTimer = setTimeout(() => {
      const currentUrl = window.location.pathname + window.location.search;
      window.history.pushState({ modal: 'video' }, '', currentUrl);
    }, 10);
    
    const handlePopState = () => {
      isPopStateRef.current = true;
      if (onCloseRef.current) onCloseRef.current();
    };
    
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(historyTimer);
      if (!isPopStateRef.current && window.history.state?.modal === 'video') window.history.back();

      const scrollPos = document.body.style.top;
      const currentPath = window.location.pathname;

      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = originalScrollRestoration || 'auto';
      }

      if (scrollPos && currentPath === initialPath) {
        const restoreY = Math.abs(parseInt(scrollPos, 10));
        requestAnimationFrame(() => window.scrollTo(0, restoreY));
      }
    };
  }, []);

  // Effect 2: Event Listeners
  useEffect(() => {
    resetHideTimer();
    const handleKeyDown = (e) => {
      setShowControls(true);
      resetHideTimer();
      if (e.key === 'Escape') onCloseRef.current?.();
    };
    const handleMouseMove = () => {
      if (isFinePointer) { setShowControls(true); resetHideTimer(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [resetHideTimer, isFinePointer]);

  const handleStart = (e) => {
    isDragging.current = true;
    setIsDraggingState(true);
    hasMoved.current = false;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    startY.current = clientY;
    startX.current = clientX;
    initialOffsetY.current = offsetY;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const dy = clientY - startY.current;
    const dx = clientX - startX.current;
    if (Math.abs(dy) > 20 || Math.abs(dx) > 20) {
      hasMoved.current = true;
      setShowControls(true);
      resetHideTimer();
    }
    const newY = initialOffsetY.current + dy;
    if (newY >= 0) setOffsetY(newY);
  };

  const handleContainerClick = useCallback((e) => {
    if (hasMoved.current || offsetY > 10 || isFinePointer) return;
    const now = Date.now();
    if (now - lastToggleTime.current < 300) return;
    lastToggleTime.current = now;
    setShowControls(prev => {
      const next = !prev;
      if (next) resetHideTimer();
      else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return next;
    });
  }, [resetHideTimer, offsetY, isFinePointer]);

  const handleEnd = useCallback((e) => {
    if (!isDragging.current) return;
    if (offsetY > 100) { onClose(); } 
    else {
      setOffsetY(0);
      if (!hasMoved.current) handleContainerClick(e);
    }
    isDragging.current = false;
    setIsDraggingState(false);
    startY.current = 0;
    startX.current = 0;
    setTimeout(() => { hasMoved.current = false; }, 150);
  }, [offsetY, onClose, handleContainerClick]);

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
      onMouseDown={handleStart} onTouchStart={handleStart} onMouseMove={handleMove} onTouchMove={handleMove}
      onMouseUp={handleEnd} onTouchEnd={handleEnd} onMouseLeave={handleEnd} onClick={handleContainerClick}
      style={{ backgroundColor: `rgba(0, 0, 0, ${1.0 * overlayOpacity})`, transform: `translate3d(0, ${offsetY}px, 0)` }}
    >
      <div className="video-modal-content-container">
        <button className={`video-modal-close-btn ${!showControls ? 'hidden' : ''}`} onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close" >&times;</button>
        <div className="video-modal-wrapper">
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
