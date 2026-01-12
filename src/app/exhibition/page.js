'use client';

import React, { useState, useEffect, Suspense } from 'react';
import './page.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonExhibitionItem } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';
import YearNav from '../../components/YearNav';
import PageHeader from '../../components/PageHeader';

const ExhibitionsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { exhibitions, fetchAllData } = useAppData();

  // exhibitions 데이터가 없으면 fetchAllData 호출
  useEffect(() => {
    if (!exhibitions) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exhibitions, fetchAllData]);

  const urlYear = searchParams.get('year');

  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getNumColumns = () => {
    if (windowWidth < 532) return 1;
    if (windowWidth < 1080) return 2;
    return 3;
  };

  const numColumns = isMounted ? getNumColumns() : 3;

  const safeExhibitions = Array.isArray(exhibitions) ? exhibitions : [];
  
  const wholeYears = [...new Set(safeExhibitions.map(exhibition => exhibition.year))]
   .sort((a, b) => b - a);
  
  // URL에서 연도를 가져오거나, 없으면 최신 연도를 사용합니다. (상태 비저장형)
  const selectedYear = urlYear || wholeYears[0] || '2025';

  const handleYearClick = (year) => {
    // URL을 변경하면 컴포넌트가 자연스럽게 re-render 됩니다.
    // preventScrollReset: true를 사용하여 스크롤 위치 변화를 최소화합니다.
    router.replace(`/exhibition?year=${year}`, { scroll: false });
  };

  const filteredExhibitions = safeExhibitions.filter(exhibition => exhibition.year === selectedYear);

  // 데이터를 열 개수에 맞춰 분배
  const columns = Array.from({ length: numColumns }, () => []);
  filteredExhibitions.forEach((exhibition, index) => {
    columns[index % numColumns].push(exhibition);
  });

  const handleExhibitionClick = (exhibition) => {
    sessionStorage.setItem('exhibition_scroll', window.scrollY.toString());
    router.push(`/exhibition/${exhibition.id}`); 
  };

  // 스크롤 복원 로직 (수동 복구)
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('exhibition_scroll');
    if (savedScroll) {
      const scrollY = parseInt(savedScroll, 10);
      window.scrollTo(0, scrollY);

      // 이미지 로딩 등으로 인한 레이아웃 변화에 대응
      const observer = new ResizeObserver(() => {
        if (Math.abs(window.scrollY - scrollY) > 10) {
          window.scrollTo(0, scrollY);
        }
      });
      observer.observe(document.body);

      const timer = setTimeout(() => {
        observer.disconnect();
        sessionStorage.removeItem('exhibition_scroll');
      }, 800); // 0.8초 동안 위치 고정 시도

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }
  }, []); // 마운트 시 1회 실행

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

export default function ExhibitionsPage() {
  return (
    <Suspense fallback={<div className="exhibitions-container"><PageHeader title="EXHIBITION" /><div className="exhibitions-list"><SkeletonExhibitionItem /></div></div>}>
      <ExhibitionsContent />
    </Suspense>
  );
}
