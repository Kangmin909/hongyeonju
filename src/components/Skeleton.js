import React from 'react';
import './Skeleton.css';

// 기본 스켈레톤 박스
export const SkeletonBox = ({ width, height, className = '' }) => {
  return (
    <div 
      className={`skeleton-box ${className}`}
      style={{ width, height }}
    />
  );
};

// 텍스트 스켈레톤
export const SkeletonText = ({ lines = 1, width = '100%' }) => {
  return (
    <div className="skeleton-text-container">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="skeleton-text"
          style={{ 
            width: index === lines - 1 ? '80%' : width,
            marginBottom: index < lines - 1 ? '8px' : '0'
          }}
        />
      ))}
    </div>
  );
};

// 이미지 스켈레톤
export const SkeletonImage = ({ width = '100%', height = '200px', className = '' }) => {
  return (
    <div 
      className={`skeleton-image ${className}`}
      style={{ width, height }}
    />
  );
};

// 작품 아이템 스켈레톤
export const SkeletonWorkItem = () => {
  return (
    <div className="skeleton-work-item">
      <SkeletonImage height="auto" className="skeleton-work-image" />
      <div className="skeleton-work-info">
        <SkeletonText lines={1} width="60%" />
        <SkeletonText lines={1} width="80%" />
      </div>
    </div>
  );
};

// 전시 아이템 스켈레톤
export const SkeletonExhibitionItem = () => {
  return (
    <div className="skeleton-exhibition-item">
      <SkeletonImage height="183px" className="skeleton-exhibition-image" />
      <div className="skeleton-exhibition-info">
        <SkeletonText lines={1} width="70%" />
        <SkeletonText lines={1} width="50%" />
        <SkeletonText lines={1} width="60%" />
      </div>
    </div>
  );
};

// CV 리스트 아이템 스켈레톤
export const SkeletonCVItem = () => {
  return (
    <div className="skeleton-cv-item">
      <SkeletonBox width="34px" height="17px" />
      <SkeletonText lines={1} width="200px" />
    </div>
  );
};

// Home 이미지 스켈레톤
export const SkeletonHomeImage = () => {
  return (
    <div className="skeleton-home-image">
      <SkeletonImage width="100%" className="skeleton-exhibition-image"/>
    </div>
  );
};

