import React, { useState, useEffect } from 'react';
import './Works.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonWorkItem } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';
import YearNav from '../../components/YearNav';

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { works, fetchAllData } = useAppData();

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

  useEffect(() => {
    setSelectedYear(initialYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, initialYear]); // URL이 바뀌면 selectedYear도 다시 세팅

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
              <MediaDisplay src={work.link} alt={work.title} className="work-image" controls={true} />
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
