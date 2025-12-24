import React, { useState } from 'react';

// 유튜브 URL에서 비디오 ID 추출
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

// 유튜브 URL인지 확인
const isYouTubeUrl = (url) => {
  return getYouTubeVideoId(url) !== null;
};

// MediaDisplay 컴포넌트
const MediaDisplay = ({ src, alt, className, autoplay = false, controls = false, onClick }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`media-error-placeholder ${className || ''}`}>
        <div className="media-error-message">이미지를 불러오지 못했습니다.</div>
      </div>
    );
  }

  if (isYouTubeUrl(src)) {
    const videoId = getYouTubeVideoId(src);
    const autoplayParams = 'autoplay=1&mute=1&loop=1&playlist=' + videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?${autoplayParams}`;
    
    return (
      <div className="media-container">
        <iframe
          src={embedUrl}
          title={alt || 'YouTube video'}
          className="media-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  if (src.endsWith('.mp4')) {
    return (
      <video
        src={src}
        className={className || ''}
        autoPlay={autoplay}
        muted={autoplay} // 자동 재생을 위해서는 음소거가 필수인 경우가 많음
        loop={autoplay}
        playsInline
        controls={controls}
        onError={() => setHasError(true)}
        onClick={onClick}
      />
    );
  }

  // 일반 이미지
  return (
    <img 
      src={src} 
      alt={alt || "Media content"} 
      className={className || ''}
      onError={() => setHasError(true)}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  );
};

export default MediaDisplay;

