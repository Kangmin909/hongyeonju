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

  if (!src) return null;

  // 미디어 타입 판별
  const isVideo = src.endsWith('.mp4');
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');

  const toggleZoom = (e) => {
    e.stopPropagation();
    if (!isVideo && !isYouTube) {
      setZoom(prev => (prev === 1 ? 2 : 1));
    }
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom(prev => Math.max(prev - 0.5, 1));
  };

  const renderContent = () => {
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
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={alt || 'YouTube video'}
          className="media-modal-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (isVideo) {
      return (
        <video
          src={src}
          className="media-modal-video"
          controls
          autoPlay
          playsInline
          onClick={(e) => e.stopPropagation()}
        />
      );
    }

    return (
      <img 
        src={src} 
        alt={alt || 'Full size'} 
        className={`image-modal-img ${zoom > 1 ? 'zoomed' : ''}`}
        style={{ transform: `scale(${zoom})` }}
        onClick={toggleZoom}
      />
    );
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-wrapper" onClick={onClose}>
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          {renderContent()}
        </div>
      </div>

      {/* 이미지가 아닐 때는 배율 조절기를 숨김 */}
      {!isVideo && !isYouTube && (
        <div className="image-modal-controls" onClick={(e) => e.stopPropagation()}>
          <button onClick={handleZoomOut} className="control-btn-small" title="Zoom Out">-</button>
          <span className="zoom-level-small">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="control-btn-small" title="Zoom In">+</button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
