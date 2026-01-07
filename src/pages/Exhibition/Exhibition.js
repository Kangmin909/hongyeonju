import React, { useState, useEffect } from 'react';
import './Exhibition.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonExhibitionItem } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';
import YearNav from '../../components/YearNav';
import PageHeader from '../../components/PageHeader';

const Exhibitions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { exhibitions, fetchAllData } = useAppData();

  // exhibitions 데이터가 없으면 fetchAllData 호출
  useEffect(() => {
    if (!exhibitions) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exhibitions, fetchAllData]);

  const queryParams = new URLSearchParams(location.search);
  const urlYear = queryParams.get('year');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getNumColumns = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1080) return 2;
    return 3;
  };

  const numColumns = getNumColumns();
  const safeExhibitions = Array.isArray(exhibitions) ? exhibitions : [];
  
  const wholeYears = [...new Set(safeExhibitions.map(exhibition => exhibition.year))]
   .sort((a, b) => b - a);
  
  // URL에서 연도를 가져오거나, 없으면 최신 연도를 사용합니다. (상태 비저장형)
  const selectedYear = urlYear || wholeYears[0] || '2025';

  const handleYearClick = (year) => {
    // URL을 변경하면 컴포넌트가 자연스럽게 re-render 됩니다.
    // preventScrollReset: true를 사용하여 스크롤 위치 변화를 최소화합니다.
    navigate(`/exhibition?year=${year}`, { replace: true, preventScrollReset: true });
  };

  const filteredExhibitions = safeExhibitions.filter(exhibition => exhibition.year === selectedYear);

  // 데이터를 열 개수에 맞춰 분배
  const columns = Array.from({ length: numColumns }, () => []);
  filteredExhibitions.forEach((exhibition, index) => {
    columns[index % numColumns].push(exhibition);
  });

  const handleExhibitionClick = (exhibition) => {
    navigate(`/exhibition/${exhibition.id}`); // 전시 세부페이지로 이동
  };
  

  return (
    <div className="exhibitions-container">
      <PageHeader title="EXHIBITION" />

      <YearNav
        years={wholeYears}
        selectedYear={selectedYear}
        onSelect={handleYearClick}
        loading={!exhibitions}
      />

      <div className="exhibitions-list">
        {!exhibitions ? (
          // 로딩 중일 때도 열 구조를 맞춰서 스켈레톤 표시 (3개 행으로 늘림)
          Array.from({ length: numColumns }).map((_, colIdx) => (
            <div key={colIdx} className="exhibitions-column">
              <SkeletonExhibitionItem />
              <SkeletonExhibitionItem />
              <SkeletonExhibitionItem />
            </div>
          ))
        ) : (
          columns.map((column, colIdx) => (
            <div key={colIdx} className="exhibitions-column">
              {column.map((exhibition) => (
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
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Exhibitions;
