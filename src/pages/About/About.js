import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { SkeletonText, SkeletonBox } from '../../components/Skeleton';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  const { about, fetchAllData, toggleMenu } = useAppData();
  
  // about 데이터가 없으면 fetchAllData 호출
  useEffect(() => {
    if (!about) {
      fetchAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [about, fetchAllData]);

  const handleBackClick = () => {
    toggleMenu();
  };

  // about이 null일 때 스켈레톤 표시
  if (!about) {
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
          <SkeletonText lines={1} width="200px" />
        </div>

        <div>
          <h2 className="about-section-title">INSTAGRAM</h2>
          <SkeletonText lines={1} width="150px" />
        </div>

        <div className="about-text-section">
          <h2 className="about-section-title">TEXT</h2>
          <div className="about-text-content">
            <SkeletonText lines={5} />
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
