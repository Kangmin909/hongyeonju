import React, { useEffect, useState, useRef } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  
  const pinchStartDist = useRef(0);
  const initialZoom = useRef(1);
  const initialOffset = useRef({ x: 0, y: 0 });
  const initialCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!src) return null;

  const isVideo = src.endsWith('.mp4');
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  const getDistance = (t1, t2) => Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
  const getCenter = (t1, t2) => ({
    x: (t1.clientX + t2.clientX) / 2,
    y: (t1.clientY + t2.clientY) / 2
  });

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      pinchStartDist.current = getDistance(e.touches[0], e.touches[1]);
      initialZoom.current = zoom;
      initialOffset.current = offset;
      initialCenter.current = getCenter(e.touches[0], e.touches[1]);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchStartDist.current > 0) {
      const currentDist = getDistance(e.touches[0], e.touches[1]);
      const currentCenter = getCenter(e.touches[0], e.touches[1]);
      
      const newZoom = Math.min(Math.max(initialZoom.current * (currentDist / pinchStartDist.current), 0.5), 5);
      
      // Zoom-to-point logic: 배율 변화에 따른 중심점 보정
      const zoomRatio = newZoom / initialZoom.current;
      
      // 중심점 이동 거리 및 배율 변화에 따른 상대 위치 보정
      const newOffsetX = currentCenter.x - initialCenter.current.x + initialOffset.current.x * zoomRatio;
      const newOffsetY = currentCenter.y - initialCenter.current.y + initialOffset.current.y * zoomRatio;

      // 이미지가 아닐 경우 확대/축소 제한 (선택 사항)
      if (!isVideo && !isYouTube) {
        setZoom(newZoom);
        // 복잡한 핀치 좌표 보정은 아래와 같이 이미지 요소의 오프셋을 조절함
        const dx = (currentCenter.x - initialCenter.current.x);
        const dy = (currentCenter.y - initialCenter.current.y);
        
        // 간단하면서 효과적인 방식: 이전 오프셋에 중심점 이동량 반영
        setOffset({
          x: initialOffset.current.x + dx,
          y: initialOffset.current.y + dy
        });
      }
    }
  };

  const handleTouchEnd = () => {
    pinchStartDist.current = 0;
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (isVideo || isYouTube) return;

    if (zoom > 1) {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      setOffset({ x: -x * 1.5, y: -y * 1.5 });
      setZoom(2.5);
    }
  };

  const renderContent = () => {
    const isPinching = pinchStartDist.current > 0;
    
    const style = {
      transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
      transition: isPinching ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
      transformOrigin: 'center center' // 중심 기준으로 계산된 offset 적용
    };

    const touchEvents = {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    };

    if (isYouTube) {
      const videoId = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
      return (
        <div className="media-wrapper-outer" style={style} {...touchEvents}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={alt || 'YouTube video'}
            className="media-modal-video"
            frameBorder="0"
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
        onClick={handleImageClick}
        {...touchEvents}
      />
    );
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <button className="modal-fixed-close-btn" onClick={onClose} aria-label="Close">
        &times;
      </button>

      <div className="image-modal-info">
        {isVideo || isYouTube ? 'Video View' : 'Image View'}
      </div>

      <div className="image-modal-wrapper">
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          {loading && <div className="modal-loader" />}
          {renderContent()}
        </div>
      </div>

      {!isVideo && !isYouTube && (
        <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => {
            const newZoom = Math.max(zoom - 0.5, 1);
            setZoom(newZoom);
            if(newZoom === 1) setOffset({x:0, y:0});
          }} className="control-btn-small">−</button>
          <span className="zoom-level-small" onClick={() => { setZoom(1); setOffset({x:0,y:0}); }} style={{ cursor: 'pointer' }}>
            {Math.round(zoom * 100)}%
          </span>
          <button onClick={() => setZoom(prev => Math.min(prev + 0.5, 5))} className="control-btn-small">+</button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;