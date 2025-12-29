import React, { useEffect, useState, useRef } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // 드래그 관련 상태
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!src) return null;

  const isVideo = src.endsWith('.mp4');
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  // 드래그 시작 핸들러
  const handleStart = (e) => {
    if (zoom !== 1) return; // 확대 상태에서는 드래그 닫기 방지
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    dragStart.current = { x: clientX - dragOffset.x, y: clientY - dragOffset.y };
  };

  // 드래그 중 핸들러
  const handleMove = (e) => {
    if (!isDragging || zoom !== 1) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    
    setDragOffset({
      x: clientX - dragStart.current.x,
      y: clientY - dragStart.current.y
    });
  };

  // 드래그 종료 핸들러
  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const distance = Math.sqrt(dragOffset.x ** 2 + dragOffset.y ** 2);
    if (distance > 150) {
      onClose(); // 일정 거리 이상 드래그 시 닫기
    } else {
      setDragOffset({ x: 0, y: 0 }); // 원래 위치로 복귀
    }
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    if (!isVideo && !isYouTube) {
      if (zoom > 1) {
        setZoom(1);
        setDragOffset({ x: 0, y: 0 });
      } else {
        setZoom(2);
      }
    }
  };

  const renderContent = () => {
    // 드래그 및 투명도 스타일 계산
    const dragStyle = {
      transform: `scale(${zoom}) translate(${dragOffset.x / zoom}px, ${dragOffset.y / zoom}px)`,
      opacity: Math.max(1 - Math.sqrt(dragOffset.x ** 2 + dragOffset.y ** 2) / 600, 0.4),
      transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s'
    };

    const commonEvents = zoom === 1 ? {
      onMouseDown: handleStart,
      onMouseMove: handleMove,
      onMouseUp: handleEnd,
      onMouseLeave: handleEnd,
      onTouchStart: handleStart,
      onTouchMove: handleMove,
      onTouchEnd: handleEnd,
    } : {};

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
        <div className="media-wrapper-outer" style={dragStyle} {...commonEvents}>
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
        <div className="media-wrapper-outer" style={dragStyle} {...commonEvents}>
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
        style={dragStyle}
        onLoad={() => setLoading(false)}
        onClick={toggleZoom}
        {...commonEvents}
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
          {/* 미디어 우측 상단 닫기 버튼 */}
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
          <span className="zoom-level-small" onClick={() => { setZoom(1); setDragOffset({x:0,y:0}); }} style={{ cursor: 'pointer' }}>
            {Math.round(zoom * 100)}%
          </span>
          <button onClick={() => setZoom(prev => Math.min(prev + 0.25, 3))} className="control-btn-small">+</button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;