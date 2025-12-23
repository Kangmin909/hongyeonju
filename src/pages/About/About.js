import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonText, SkeletonBox } from '../../components/Skeleton';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  const { about, loading, fetchAllData } = useAppData();
  // Home 화면에서 모든 데이터를 한 번에 fetch
  useEffect(() => {
    if (loading === true){
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackClick = () => {
    navigate('/menu');
  };

  // about이 null이거나 loading일 때 스켈레톤 표시
  if (loading || !about) {
    return (
      <div className="about-page">
        <div className="about-menu-button" onClick={handleBackClick}>
          <div className="about-menu-line"></div>
          <div className="about-menu-line"></div>
          <div className="about-menu-line"></div>
        </div>
        <h1 className="about-title">ABOUT</h1>

        <div className="skeleton-about-section">
          <SkeletonBox width="100px" height="24px" className="skeleton-about-title" />
          <SkeletonBox width="200px" height="17px" className="skeleton-about-content" />
        </div>

        <div className="skeleton-about-section">
          <SkeletonBox width="100px" height="24px" className="skeleton-about-title" />
          <SkeletonBox width="200px" height="17px" className="skeleton-about-content" />
        </div>

        <div className="skeleton-about-section">
          <SkeletonBox width="100px" height="24px" className="skeleton-about-title" />
          <div className="skeleton-about-text">
            <SkeletonText lines={3} width="100%" />
          </div>
        </div>
      </div>
    );
  }

  const mail = about?.mail || '';
  const instagram = about?.instagram || '';
  const aboutText = Array.isArray(about?.aboutText) ? about.aboutText : [];

  return (
    <div className="about-page">
      <div className="about-menu-button" onClick={handleBackClick}>
        <div className="about-menu-line"></div>
        <div className="about-menu-line"></div>
        <div className="about-menu-line"></div>
      </div>

      <h1 className="about-title">ABOUT</h1>

      <div>
        <h2 className="about-section-title">MAIL</h2>
        <a href={`mailto:${mail}`} className="about-contact-info">
          {mail}
        </a>
      </div>

      <div>
        <h2 className="about-section-title">INSTAGRAM</h2>
        {instagram && (
          <a 
            href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram.replace('@', '')}`} 
            className="about-contact-info"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {instagram}
          </a>
        )}
      </div>

      <div className="about-text-section">
        <h2 className="about-section-title">TEXT</h2>
        <div className="about-text-content">
          {aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
