import React from 'react';
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

  const renderSkeleton = () => (
    <>
      <SkeletonBox width="48px" height="24px" />
      <SkeletonBox width="48px" height="24px" />
      <SkeletonBox width="48px" height="24px" />
      <SkeletonBox width="48px" height="24px" />
      <SkeletonBox width="48px" height="24px" />
    </>
  );

  return (
    <nav className={`year-nav ${className}`.trim()}>
      {loading || yearsArray.length === 0
        ? renderSkeleton()
        : yearsArray.map((year) => (
            <div
              key={year}
              className={`year ${selectedYear === year ? 'active' : ''}`}
              onClick={() => onSelect(year)}
            >
              {year}
            </div>
          ))}
    </nav>
  );
};

export default YearNav;

