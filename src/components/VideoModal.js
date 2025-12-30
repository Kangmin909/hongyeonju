import React, { useEffect, useState, useRef } from 'react';
import './VideoModal.css';

const VideoModal = ({ src, alt, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const isDragging = useRef(false);
  const startY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!src) return null;

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  const handleStart = (e) => {
    isDragging.current = true;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    startY.current = clientY - offsetY;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    const currentY = clientY - startY.current;
    
    // 아래 방향으로만 드래그 허용
    if (currentY >= 0) {
      setOffsetY(currentY);
    }
  };

  const handleEnd = () => {
    if (isDragging.current) {
      if (offsetY > 100) {
        onClose();
      } else {
        setOffsetY(0);
      }
    }
    isDragging.current = false;
    startY.current = 0;
  };

  const getYouTubeVideoId = (url) => {
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

  const dragStyle = {
    transform: `translateY(${offsetY}px)`,
    opacity: Math.max(1 - offsetY / 400, 0.5),
    transition: isDragging.current ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s'
  };

  return (
    <div className="video-modal-overlay" onMouseUp={handleEnd} onTouchEnd={handleEnd} onMouseLeave={handleEnd}>
      <button className="video-modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
      
      <div 
        className="video-modal-wrapper" 
        style={dragStyle}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
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
  );
};

export default VideoModal;
