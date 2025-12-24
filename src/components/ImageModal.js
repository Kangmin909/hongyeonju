import React, { useEffect, useState } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  const [zoom, setZoom] = useState(1);

  // 모달이 열려있을 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom(prev => Math.max(prev - 0.5, 1));
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setZoom(prev => (prev === 1 ? 2 : 1));
  };

  if (!src) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-wrapper" onClick={onClose}>
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <img 
            src={src} 
            alt={alt || 'Full size'} 
            className={`image-modal-img ${zoom > 1 ? 'zoomed' : ''}`}
            style={{ transform: `scale(${zoom})` }}
            onClick={toggleZoom}
          />
        </div>
      </div>

      {/* 하단 중앙 확대/축소 컨트롤러 */}
      <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleZoomOut} className="control-btn-small" title="Zoom Out">-</button>
        <span className="zoom-level-small">{Math.round(zoom * 100)}%</span>
        <button onClick={handleZoomIn} className="control-btn-small" title="Zoom In">+</button>
      </div>
    </div>
  );
};

export default ImageModal;
