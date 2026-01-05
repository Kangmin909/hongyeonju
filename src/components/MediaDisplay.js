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
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`media-error-placeholder ${className || ''}`}>
        <div className="media-error-message">이미지를 불러오지 못했습니다.</div>
      </div>
    );
  }

  // 로딩 중이거나 에러가 아닐 때 공통으로 적용할 래퍼 스타일
  const wrapperClass = `media-placeholder-wrapper ${!isLoaded ? 'loading-shimmer' : ''} ${className || ''}`;

  const clickOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    zIndex: 10,
    background: 'transparent'
  };

  if (isYouTubeUrl(src)) {
    const videoId = getYouTubeVideoId(src);
    const autoplayParams = 'autoplay=1&mute=1&loop=1&playlist=' + videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?${autoplayParams}`;
    
    return (
      <div className={wrapperClass}>
        <div className="media-container">
          <iframe
            src={embedUrl}
            title={alt || 'YouTube video'}
            className="media-iframe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
          {onClick && <div style={clickOverlayStyle} onClick={onClick} />}
        </div>
      </div>
    );
  }

  if (src.endsWith('.mp4')) {
    return (
      <div className={wrapperClass}>
        <video
          src={src}
          className="media-element"
          autoPlay={autoplay}
          muted={autoplay}
          loop={autoplay}
          playsInline
          controls={controls}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          onClick={onClick}
          style={onClick ? { cursor: 'pointer' } : {}}
        />
        {onClick && !controls && <div style={clickOverlayStyle} onClick={onClick} />}
      </div>
    );
  }

  // 일반 이미지
  return (
    <div className={wrapperClass}>
      <img 
        src={src} 
        alt={alt || "Media content"} 
        className="media-element"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        onClick={onClick}
        style={onClick ? { cursor: 'pointer' } : {}}
      />
    </div>
  );
};

export default MediaDisplay;

