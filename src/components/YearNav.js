import React, { useRef, useState, useEffect } from 'react';
import { SkeletonBox } from './Skeleton';

/**
 * 연도 네비게이션 공용 컴포넌트
 * props:
 * - years: 연도 배열
 * - selectedYear: 현재 선택된 연도
 * - onSelect: 연도 클릭 시 콜백(year => void)
 * - loading: 로딩 상태일 때 스켈레톤 표시
 * - className: 추가 클래스
 */
const YearNav = ({ years, selectedYear, onSelect, loading = false, className = '' }) => {
  const yearsArray = Array.isArray(years) ? years : [];
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);

  // 선택된 연도가 화면 밖으로 나갔을 경우 중앙으로 스크롤
  useEffect(() => {
    if (selectedYear && scrollRef.current) {
      const activeElement = scrollRef.current.querySelector('.year.active');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [selectedYear]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setMoved(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = (e) => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 배율
    if (Math.abs(walk) > 5) setMoved(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleYearClick = (year) => {
    // 드래그 중에는 클릭 이벤트가 발생하지 않도록 방지
    if (!moved) {
      onSelect(year);
    }
  };

  const renderSkeleton = () => (
    <>
      <div className="year"><SkeletonBox width="40px" height="24px" /></div>
      <div className="year"><SkeletonBox width="40px" height="24px" /></div>
      <div className="year"><SkeletonBox width="40px" height="24px" /></div>
      <div className="year"><SkeletonBox width="40px" height="24px" /></div>
      <div className="year"><SkeletonBox width="40px" height="24px" /></div>
    </>
  );

  return (
    <nav 
      className={`year-nav ${className} ${isDragging ? 'grabbing' : ''}`.trim()}
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {loading || yearsArray.length === 0
        ? renderSkeleton()
        : yearsArray.map((year) => (
            <div
              key={year}
              className={`year ${selectedYear === year ? 'active' : ''}`}
              onClick={() => handleYearClick(year)}
            >
              {year}
            </div>
          ))}
    </nav>
  );
};

export default YearNav;

