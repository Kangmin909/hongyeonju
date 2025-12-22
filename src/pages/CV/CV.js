import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CV.css';

const CV = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu');
  };

  const [CV1, setCV1] = useState([]);
  const [CV2, setCV2] = useState([]);
  
  useEffect(() => {
    fetch("/api/getCV1")
      .then((res) => res.json())
      .then((data) => setCV1(data));
  }, []);

  useEffect(() => {
    fetch("/api/getCV2")
      .then((res) => res.json())
      .then((data) => setCV2(data));
  }, []);

  const education = CV1;
  const exhibitions = CV2;

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
          {education.map((item, index) => (
            <div key={index} className="cv-list-item">
              <div className="cv-year">{item.year}</div>
              <div className="cv-content">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
      
      <h3 className="cv-section-title">전시이력</h3>
      <div className="cv-section">
        <div className="cv-list">
          {exhibitions.map((item, index) => (
            <div key={index} className="cv-list-item">
              <div className="cv-year">{item.year}</div>
              <div className="cv-content">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
