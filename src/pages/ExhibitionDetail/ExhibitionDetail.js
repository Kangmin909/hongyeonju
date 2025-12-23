import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ExhibitionDetail.css';
import { useAppData } from '../../context/AppDataContext';
// import { SkeletonImage } from '../../components/Skeleton';
import MediaDisplay from '../../components/MediaDisplay';

const ExhibitionDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, fetchAllData } = useAppData();
  // Home 화면에서 모든 데이터를 한 번에 fetch
  useEffect(() => {
    if (loading === true){
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exhibition = location.state?.exhibition;

  if (!exhibition) {
    return <div>전시 정보를 찾을 수 없습니다.</div>;
  }

  const images = Array.isArray(exhibition.images) ? exhibition.images : [];

  return (
    <div className="exhibition-detail-page">
      {/* <div className="exhibition-detail-back-arrow" onClick={() => navigate(-1)}>
        <img src={arrowIcon} alt="Back Arrow" className="arrow-icon" />
      </div> */}
      
      <div className="menu-icon" onClick={() => navigate('/menu')}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="exhibition-detail-header">
        <h1 className="exhibition-detail-title">EXHIBITION</h1>
        <h2 className="exhibition-detail-subtitle">{exhibition.exhibitionTitle}</h2>
      </div>

      <div className="exhibition-detail-info">
        <div className="exhibition-detail-date">{exhibition.date}</div>
        <div className="exhibition-detail-location">{exhibition.location}</div>
        <p className="exhibition-detail-description">{exhibition.description}</p>
      </div>

      <div className="exhibition-detail-images">
        {/* {images.length === 0 ? (
          <>
            <SkeletonImage width="100%" height="400px" />
            <SkeletonImage width="100%" height="400px" />
            <SkeletonImage width="100%" height="400px" />
          </>
        ) : ( */}
{          images.map((image) => (
            <div key={image.id} className="exhibition-detail-image-container">
              <MediaDisplay src={image.link} alt={image.label} className="exhibition-detail-image" />
              <div className="exhibition-detail-work-info">
                <div className="exhibition-detail-work-title">{image.title}</div>
                <div className="exhibition-detail-work-meta">{image.meta}</div>
              </div>
            </div>
          ))}
        {/* )} */}
      </div>
    </div>
  );
};

export default ExhibitionDetail;
