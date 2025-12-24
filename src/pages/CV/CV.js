import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonCVItem } from '../../components/Skeleton';
import './CV.css';

const CV = () => {
  const navigate = useNavigate();
  const { cv1, cv2, fetchAllData } = useAppData();
  
  // cv1 또는 cv2 데이터가 없으면 fetchAllData 호출
  useEffect(() => {
    if (!cv1 || !cv2) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cv1, cv2, fetchAllData]);

  const handleBackClick = () => {
    navigate('/menu');
  };

  const education = cv1 || [];
  const exhibitions = cv2 || [];

  return (
    <div className="cv-page">
      <div className="cv-menu-button" onClick={handleBackClick}>
        <div className="cv-menu-line"></div>
        <div className="cv-menu-line"></div>
        <div className="cv-menu-line"></div>
      </div>

      <h1 className="cv-title">CV</h1>
      <h2 className="cv-name">홍연주 b.1999</h2>

      <div className="cv-section">
        <div className="cv-list">
          {!cv1 ? (
            <>
              <SkeletonCVItem />
              <SkeletonCVItem />
              <SkeletonCVItem />
            </>
          ) : (
            education.map((item, index) => (
              <div key={index} className="cv-list-item">
                <div className="cv-year">{item.year}</div>
                <div className="cv-content">{item.content}</div>
              </div>
            ))
          )}
        </div>
      </div>
      
      <h3 className="cv-section-title">전시이력</h3>
      <div className="cv-section">
        <div className="cv-list">
          {!cv2 ? (
            <>
              <SkeletonCVItem />
              <SkeletonCVItem />
              <SkeletonCVItem />
              <SkeletonCVItem />
            </>
          ) : (
            exhibitions.map((item, index) => (
              <div key={index} className="cv-list-item">
                <div className="cv-year">{item.year}</div>
                <pre className="cv-content">{item.content}</pre>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CV;
