import React, { useState, useEffect } from 'react';
import './Works.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonWorkItem } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';
import YearNav from '../../components/YearNav';
import ImageModal from '../../components/ImageModal';
import VideoModal from '../../components/VideoModal';
import PageHeader from '../../components/PageHeader';

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { works, fetchAllData } = useAppData();
  const [selectedMedia, setSelectedMedia] = useState(null);

  // works 데이터가 없으면 fetchAllData 호출
  useEffect(() => {
    if (!works) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [works, fetchAllData]);

  const worksArray = Array.isArray(works) ? works : [];
  const wholeYears = [...new Set(worksArray.map(work => work.year))]
   .sort((a, b) => b - a);
  
  const queryParams = new URLSearchParams(location.search);
  const urlYear = queryParams.get('year');
  // URL에서 연도를 가져오거나, 없으면 최신 연도를 사용합니다.
  const selectedYear = urlYear || wholeYears[0] || '2025';

  const handleYearClick = (year) => {
    // replace: true를 사용하여 히스토리에 연도별로 쌓이지 않게 합니다.
    navigate(`/works?year=${year}`, { replace: true });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getNumColumns = () => {
    if (windowWidth < 532) return 1;
    if (windowWidth < 1080) return 2;
    return 3;
  };

  const numColumns = getNumColumns();
  const filteredWorks = worksArray.filter(work => work.year === selectedYear);
  
  // 데이터를 열 개수에 맞춰 분배 (좌->우 순서 유지)
  const columns = Array.from({ length: numColumns }, () => []);
  filteredWorks.forEach((work, index) => {
    columns[index % numColumns].push(work);
  });

  // 이미지들만 필터링 (네비게이션용)
  const imageItems = filteredWorks.filter(item => {
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

  const handleCloseImageModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="works-container">
      <PageHeader title="WORKS" />

      <YearNav
        years={wholeYears}
        selectedYear={selectedYear}
        onSelect={handleYearClick}
        loading={!works}
      />

      <div className="works-list">
        {!works ? (
          // 로딩 중일 때도 열 구조를 맞춰서 스켈레톤 표시 (3개 행 정도로 늘림)
          Array.from({ length: numColumns }).map((_, colIdx) => (
            <div key={colIdx} className="works-column">
              <SkeletonWorkItem />
              <SkeletonWorkItem />
              <SkeletonWorkItem />
            </div>
          ))
        ) : (
          columns.map((column, colIdx) => (
            <div key={colIdx} className="works-column">
              {column.map((work) => (
                <div className="work-item" key={work.id}>
                  <MediaDisplay 
                    src={work.link} 
                    alt={work.title} 
                    className="work-image" 
                    controls={true} 
                    onClick={() => handleMediaClick(work)}
                  />
                  <div className="work-info">
                    <div className="work-title">{work.title}</div>
                    <div className="work-meta">{work.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {selectedMedia?.type === 'image' && (
        <ImageModal 
          images={selectedMedia.items}
          initialIndex={selectedMedia.index}
          onClose={handleCloseImageModal} 
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

export default Works;