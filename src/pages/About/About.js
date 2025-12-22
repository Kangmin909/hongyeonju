import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu');
  };

  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("/api/getAbout")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);

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
        <p className="about-contact-info">{mail}</p>
      </div>

      <div>
        <h2 className="about-section-title">INSTAGRAM</h2>
        <p className="about-contact-info">{instagram}</p>
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
