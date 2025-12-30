import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ExhibitionDetail.css';
import { useAppData } from '../../context/AppDataContext';
import MediaDisplay from '../../components/MediaDisplay';
import { SkeletonImage, SkeletonText, SkeletonBox } from '../../components/Skeleton';
import ImageModal from '../../components/ImageModal';
import VideoModal from '../../components/VideoModal';

const ExhibitionDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { exhibitions, fetchAllData, toggleMenu } = useAppData();
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    // exhibitions 데이터가 없으면 fetchAllData 호출
    if (!exhibitions) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exhibitions, fetchAllData]);

  // exhibitions 데이터가 아직 로드되지 않았을 경우 스켈레톤 UI를 표시
  if (!exhibitions) {
    return (
      <div className="exhibition-detail-page">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        
        <div className="exhibition-detail-header">
          <h1 className="exhibition-detail-title">EXHIBITION</h1>
          <div className="exhibition-detail-subtitle" style={{ marginTop: '40px', marginBottom: '20px' }}>
            <SkeletonText lines={1} width="60%" />
          </div>
        </div>

        <div className="exhibition-detail-info" style={{ gap: '4px' }}>
          <SkeletonBox width="120px" height="19px" className="skeleton-badge" />
          <SkeletonBox width="150px" height="19px" className="skeleton-badge" />
        </div>
        <div style={{ marginTop: '20px', marginBottom: '38px' }}>
            <SkeletonText lines={4} />
        </div>

        <div className="exhibition-detail-images" style={{ gap: '30px' }}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="exhibition-detail-image-container">
              <SkeletonImage width="100%" height="226px" />
              <div className="exhibition-detail-work-info" style={{ marginTop: '12px' }}>
                <SkeletonText lines={1} width="70%" />
                <SkeletonText lines={1} width="50%" style={{ marginTop: '5px' }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // exhibitions 데이터가 로드된 후, id에 해당하는 exhibition을 찾음
  const exhibition = exhibitions.find(e => e.id === id);

  // id에 해당하는 exhibition이 없을 경우 "정보를 찾을 수 없음" 메시지를 표시
  if (!exhibition) {
    return <div>전시 정보를 찾을 수 없습니다.</div>;
  }

  const allMedia = Array.isArray(exhibition.images) ? exhibition.images : [];
  
  // 이미지들만 필터링 (네비게이션용)
  const imageItems = allMedia.filter(item => {
    const link = item.link?.toLowerCase() || "";
    return !link.endsWith('.mp4') && !link.includes('youtube.com') && !link.includes('youtu.be');
  });

  const handleMediaClick = (item) => {
    const link = item.link?.toLowerCase() || "";
    const isVideo = link.endsWith('.mp4') || link.includes('youtube.com') || link.includes('youtu.be');
    
    if (isVideo) {
      setSelectedMedia({ type: 'video', src: item.link, alt: item.title });
    } else {
      const index = imageItems.findIndex(img => img.link === item.link);
      setSelectedMedia({ type: 'image', items: imageItems, index: index });
    }
  };

  return (
    <div className="exhibition-detail-page">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="exhibition-detail-header">
        <h1 className="exhibition-detail-title">EXHIBITION</h1>
        <h2 className="exhibition-detail-subtitle">{exhibition.exhibitionTitle}</h2>
      </div>

      <div className="exhibition-detail-info">
        <div className="exhibition-detail-date">{exhibition.date}</div>
        <div className="exhibition-detail-location">{exhibition.location}</div>
        <p className="exhibition-detail-description">{exhibition.description}</p>
      </div>

      <div className="exhibition-detail-images">
        {allMedia.map((item) => (
          <div key={item.id} className="exhibition-detail-image-container">
            <MediaDisplay 
              src={item.link} 
              alt={item.label} 
              className="exhibition-detail-image" 
              onClick={() => handleMediaClick(item)}
            />
            <div className="exhibition-detail-work-info">
              <div className="exhibition-detail-work-title">{item.title}</div>
              <div className="exhibition-detail-work-meta">{item.meta}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedMedia?.type === 'image' && (
        <ImageModal 
          images={selectedMedia.items}
          initialIndex={selectedMedia.index}
          onClose={() => setSelectedMedia(null)} 
        />
      )}

      {selectedMedia?.type === 'video' && (
        <VideoModal 
          src={selectedMedia.src}
          alt={selectedMedia.alt}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default ExhibitionDetail;