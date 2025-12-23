import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  const { about } = useAppData();

  const handleBackClick = () => {
    navigate('/menu');
  };

  const mail = about?.mail;
  const instagram = about?.instagram;
  const aboutText = about?.aboutText || [];

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
        <a 
          href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram.replace('@', '')}`} 
          className="about-contact-info"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {instagram}
        </a>
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
