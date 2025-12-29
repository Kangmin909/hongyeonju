import React, { useEffect, useState, useRef } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // 핀치 줌 관련 상태
  const pinchStartDist = useRef(0);
  const initialZoom = useRef(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!src) return null;

  const isVideo = src.endsWith('.mp4');
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  // 핀치 줌 시작
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartDist.current = dist;
      initialZoom.current = zoom;
    }
  };

  // 핀치 줌 진행
  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchStartDist.current > 0) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const newZoom = initialZoom.current * (dist / pinchStartDist.current);
      // 최소 0.5배, 최대 4배 제한
      setZoom(Math.min(Math.max(newZoom, 0.5), 4));
    }
  };

  const handleTouchEnd = () => {
    pinchStartDist.current = 0;
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    if (!isVideo && !isYouTube) {
      setZoom(prev => (prev === 1 ? 2 : 1));
    }
  };

  const renderContent = () => {
    const style = {
      transform: `scale(${zoom})`,
      transition: pinchStartDist.current > 0 ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
    };

    const touchEvents = {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    };

    if (isYouTube) {
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
      const videoId = getYouTubeVideoId(src);
      return (
        <div className="media-wrapper-outer" style={style} {...touchEvents}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={alt || 'YouTube video'}
            className="media-modal-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setLoading(false)}
          />
        </div>
      );
    }

    if (isVideo) {
      return (
        <div className="media-wrapper-outer" style={style} {...touchEvents}>
          <video
            src={src}
            className="media-modal-video"
            controls
            autoPlay
            playsInline
            onLoadedData={() => setLoading(false)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      );
    }

    return (
      <img 
        src={src} 
        alt={alt || 'Full size'} 
        className={`image-modal-img ${zoom > 1 ? 'zoomed' : ''}`}
        style={style}
        onLoad={() => setLoading(false)}
        onClick={toggleZoom}
        {...touchEvents}
      />
    );
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-info">
        {isVideo || isYouTube ? 'Video View' : 'Image View'}
      </div>

      <div className="image-modal-wrapper">
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="media-close-btn" onClick={onClose} aria-label="Close">
            &times;
          </button>
          
          {loading && <div className="modal-loader" />}
          {renderContent()}
        </div>
      </div>

      {!isVideo && !isYouTube && (
        <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setZoom(prev => Math.max(prev - 0.25, 0.5))} className="control-btn-small">−</button>
          <span className="zoom-level-small" onClick={() => setZoom(1)} style={{ cursor: 'pointer' }}>
            {Math.round(zoom * 100)}%
          </span>
          <button onClick={() => setZoom(prev => Math.min(prev + 0.25, 4))} className="control-btn-small">+</button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
