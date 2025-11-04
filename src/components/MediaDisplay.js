import React from 'react';

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
const MediaDisplay = ({ src, alt, className, autoplay = false }) => {
  if (!src) return null;

  if (isYouTubeUrl(src)) {
    const videoId = getYouTubeVideoId(src);
    // autoplay가 true면 autoplay=1&mute=1 추가 (유튜브는 음소거 상태에서만 자동재생 가능)
    const autoplayParam = autoplay ? '?autoplay=1&mute=1' : '';
    const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplayParam}`;
    
    return (
      <div className="media-container">
        <iframe
          src={embedUrl}
          title={alt || 'YouTube video'}
          className="media-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // 일반 이미지
  return <img src={src} alt={alt || "Can't find file"} className={className || ''} />;
};

export default MediaDisplay;

