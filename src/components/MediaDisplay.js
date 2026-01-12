import React, { useState, useEffect } from 'react';
import './MediaDisplay.css';

// 한 번 로드된 이미지 URL을 기억하여 재방문 시 깜빡임을 방지합니다.
const loadedImageCache = new Set();

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
  // 캐시에 있으면 즉시 로드된 상태로 시작합니다.
  const [isLoaded, setIsLoaded] = useState(() => src ? loadedImageCache.has(src) : false);
  const imgRef = React.useRef(null);

  useEffect(() => {
    if (isLoaded && src) {
      loadedImageCache.add(src);
    }
  }, [isLoaded, src]);

  // 마운트 시 이미지가 이미 로드되어 있는지 확인 (브라우저 캐시 대응)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  // 로딩 상태 결정: 에러가 없고 아직 로드되지 않았을 때만 shimmer 표시
  const shouldShowShimmer = !isLoaded && !hasError && src;
  const wrapperClass = `media-placeholder-wrapper ${shouldShowShimmer ? 'loading-shimmer' : ''} ${isLoaded ? 'is-loaded' : ''} ${className || ''}`;

  if (hasError || !src) {
    return (
      <div 
        className={wrapperClass} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#f2f2f2',
          aspectRatio: '4 / 3', // 에러 시에도 비율 강제 유지
          width: '100%'
        }}
      >
        <div className="media-error-message">이미지를 불러오지 못했습니다.</div>
      </div>
    );
  }

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
        <div 
          className="media-container" 
          style={{ 
            opacity: isLoaded ? 1 : 0,
            position: isLoaded ? 'relative' : 'absolute', // 로딩 중엔 절대 위치로 숨김
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }}
        >
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
          {isLoaded && onClick && <div style={clickOverlayStyle} onClick={onClick} />}
        </div>
      </div>
    );
  }

  // Ensure src is a string before checking extension
  const srcString = String(src || "");

  if (srcString.toLowerCase().endsWith('.mp4')) {
    return (
      <div className={wrapperClass}>
        <video
          ref={imgRef}
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
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            position: isLoaded ? 'static' : 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            ...(onClick ? { cursor: 'pointer' } : {}) 
          }}
        />
        {isLoaded && onClick && !controls && <div style={clickOverlayStyle} onClick={onClick} />}
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <img 
        ref={imgRef}
        src={src} 
        alt={alt || "Media content"} 
        className="media-element"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        onClick={onClick}
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          position: isLoaded ? 'static' : 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...(onClick ? { cursor: 'pointer' } : {}) 
        }}
      />
    </div>
  );
};

export default MediaDisplay;