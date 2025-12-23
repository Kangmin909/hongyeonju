import React, { useState, useEffect } from 'react';
import './Works.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonWorkItem } from '../../components/Skeleton';
import YearNav from '../../components/YearNav';

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { works, loading, fetchAllData } = useAppData();

  // Home 화면에서 모든 데이터를 한 번에 fetch
  useEffect(() => {
    if (loading === true){
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  useEffect(() => {
    setSelectedYear(initialYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, initialYear]); // URL이 바뀌면 selectedYear도 다시 세팅

  const renderMedia = (src) => {
    if (!src) return null;

    // 🎥 유튜브 링크 처리
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      const embedUrl = src
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/");
      return (
        <iframe
          src={`${embedUrl}?autoplay=1&mute=1&loop=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="profile-image"
          title="Home video"
        ></iframe>
      );
    }

    // 🎬 mp4 (OCI 영상 등)
    if (src.endsWith(".mp4")) {
      return (
        <video
          src={src}
          className="work-image"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      );
    }

    // 🖼️ 이미지
    return <img src={src} alt="Home" className="work-image" />;
  };

  return (
    <div className="works-container">
      <header className="works-header">
        <h1 className="works-title">WORKS</h1>
        <div className="menu-icon" onClick={() => navigate('/menu')}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </header>

      <YearNav
        years={wholeYears}
        selectedYear={selectedYear}
        onSelect={handleYearClick}
        loading={loading || worksArray.length === 0}
      />

      <div className="works-list">
        {loading || worksArray.length === 0 ? (
          <>
            <SkeletonWorkItem />
            <SkeletonWorkItem />
            <SkeletonWorkItem />
          </>
        ) : (
          filteredWorks.map((work) => (
            <div className="work-item" key={work.id}>
              {renderMedia(work.link)}
              <div className="work-info">
                <div className="work-title">{work.title}</div>
                <div className="work-meta">{work.meta}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Works;
