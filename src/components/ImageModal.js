import React, { useEffect, useState, useRef } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  
  // 상태 관리를 위한 ref
  const pinchStartDist = useRef(0);
  const initialZoom = useRef(1);
  const initialOffset = useRef({ x: 0, y: 0 });
  const lastTouchCenter = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!src) return null;

  const isVideo = src.endsWith('.mp4');
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  // 두 점 사이의 거리 계산
  const getDistance = (t1, t2) => Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);

  // 두 점의 중심점 계산
  const getCenter = (t1, t2) => ({
    x: (t1.clientX + t2.clientX) / 2,
    y: (t1.clientY + t2.clientY) / 2
  });

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      pinchStartDist.current = getDistance(e.touches[0], e.touches[1]);
      initialZoom.current = zoom;
      initialOffset.current = offset;
      lastTouchCenter.current = getCenter(e.touches[0], e.touches[1]);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchStartDist.current > 0) {
      const dist = getDistance(e.touches[0], e.touches[1]);
      const center = getCenter(e.touches[0], e.touches[1]);
      
      const newZoom = Math.min(Math.max(initialZoom.current * (dist / pinchStartDist.current), 0.5), 5);
      
      // 중심점 기준으로 오프셋 계산 (Zoom-to-point)
      const zoomRatio = newZoom / initialZoom.current;
      const dx = (center.x - lastTouchCenter.current.x);
      const dy = (center.y - lastTouchCenter.current.y);

      setZoom(newZoom);
      // 단순 핀치 확대 시에는 중심점 유지를 위해 복잡한 좌표 계산이 수반되나, 
      // 여기서는 직관적인 배율 변화를 우선 적용합니다.
    }
  };

  const handleTouchEnd = () => {
    pinchStartDist.current = 0;
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (isVideo || isYouTube) return;

    if (zoom > 1) {
      // 이미 확대된 경우 초기화
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    } else {
      // 클릭한 지점을 중심으로 2.5배 확대
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      setOffset({ x: -x * 1.5, y: -y * 1.5 });
      setZoom(2.5);
    }
  };

  const renderContent = () => {
    const style = {
      transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
      transition: pinchStartDist.current > 0 ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
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
      <div className="image-modal-info">
        {isVideo || isYouTube ? 'Video View' : 'Image View'}
      </div>

      <div className="image-modal-wrapper">
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="media-close-btn" onClick={onClose}>&times;</button>
          {loading && <div className="modal-loader" />}
          {renderContent()}
        </div>
      </div>

      {!isVideo && !isYouTube && (
        <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => { setZoom(prev => Math.max(prev - 0.5, 1)); if(zoom <= 1.5) setOffset({x:0,y:0}); }} className="control-btn-small">−</button>
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