import React, { useState, useEffect } from 'react';
import './Exhibition.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonExhibitionItem } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';
import YearNav from '../../components/YearNav';

const Exhibitions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { exhibitions, fetchAllData, toggleMenu } = useAppData();

  // exhibitions 데이터가 없으면 fetchAllData 호출
  useEffect(() => {
    if (!exhibitions) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exhibitions, fetchAllData]);

  const queryParams = new URLSearchParams(location.search);
  const [selectedYear, setSelectedYear] = useState(null);

  const safeExhibitions = Array.isArray(exhibitions) ? exhibitions : [];
  const wholeYears = [...new Set(safeExhibitions.map(exhibition => exhibition.year))]
   .sort((a, b) => b - a);
  
  const initialYear = queryParams.get('year') || wholeYears[0] || '2025';

  useEffect(() => {
    setSelectedYear(initialYear);
  }, [initialYear]);


  const handleYearClick = (year) => {
    setSelectedYear(year);
    navigate(`/exhibition?year=${year}`);
  };

  // exhibition이 null이거나 배열이 아닐 때 빈 배열로 처리
  const filteredExhibitions = safeExhibitions.filter(exhibition => exhibition.year === selectedYear);

  const handleExhibitionClick = (exhibition) => {
    navigate(`/exhibition/${exhibition.id}`); // 전시 세부페이지로 이동
  };

  useEffect(() => {
    setSelectedYear(initialYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, initialYear]); // URL이 바뀌면 selectedYear도 다시 세팅
  

  return (
    <div className="exhibitions-container">
      <header className="exhibitions-header">
        <h1 className="exhibitions-title">EXHIBITION</h1>
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
        loading={!exhibitions}
      />

      <div className="exhibitions-list">
        {!exhibitions ? (
          <>
            <SkeletonExhibitionItem />
            <SkeletonExhibitionItem />
            <SkeletonExhibitionItem />
          </>
        ) : (
          filteredExhibitions.map((exhibition) => (
            <div
              className="exhibition-item"
              key={exhibition.id}
              onClick={() => handleExhibitionClick(exhibition)}
            >
              <MediaDisplay src={exhibition.link} alt={exhibition.exhibitionTitle} className="exhibition-image" autoplay={true} />
              <div className="exhibition-info">
                <div className="exhibition-title">{exhibition.exhibitionTitle}</div>
                <div className="exhibition-date">{exhibition.date}</div>
                <div className="exhibition-location">{exhibition.location}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Exhibitions;
