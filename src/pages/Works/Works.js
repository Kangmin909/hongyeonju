import React, { useState, useEffect } from 'react';
import './Works.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonWorkItem } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';
import YearNav from '../../components/YearNav';
import ImageModal from '../../components/ImageModal';
import VideoModal from '../../components/VideoModal';

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { works, fetchAllData, toggleMenu } = useAppData();
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
  const initialYear = queryParams.get('year') || wholeYears[0] || '2025';
  const [selectedYear, setSelectedYear] = useState(initialYear);

  useEffect(() => {
    setSelectedYear(initialYear);
  }, [initialYear]);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    navigate(`/works?year=${year}`);
  };

  const filteredWorks = worksArray.filter(work => work.year === selectedYear);

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

  useEffect(() => {
    setSelectedYear(initialYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, initialYear]); // URL이 바뀌면 selectedYear도 다시 세팅

  return (
    <div className="works-container">
      <header className="works-header">
        <h1 className="works-title">WORKS</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </header>

      <YearNav
        years={wholeYears}
        selectedYear={selectedYear}
        onSelect={handleYearClick}
        loading={!works}
      />

      <div className="works-list">
        {!works ? (
          <>
            <SkeletonWorkItem />
            <SkeletonWorkItem />
            <SkeletonWorkItem />
          </>
        ) : (
          filteredWorks.map((work) => (
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
          ))
        )}
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

export default Works;