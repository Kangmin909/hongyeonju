import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CV.css';

const CV = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu');
  };

  const education = [
    { year: '2025', content: '홍익대학교 동양화과 석사 재학중' },
    { year: '2023', content: '한성대학교 동양화과 학사 졸업' },
    { year: '2018', content: '안양예술고등학교 졸업' }
  ];

  const exhibitions = [
    { year: '2024', content: '<아트그라운드 서울2024> , 노들섬 갤러리, 서울' },
    { year: '2023', content: '<이유없는 이후>, 홍익대학교, 서울\n<오픈스튜디오>, 홍익대학교, 서울' },
    { year: '2022', content: '<떠오르는 것 하강하는 것>, 홍익대학교, 서울' },
    { year: '2020', content: '<콘하스 팝업전>, 콘하스, 서울\n<The Ten> , prgm studio, 서울' },
    { year: '2019', content: '<세화전>, 갤러리 한옥, 서울\n<세모네모>, 동덕아트갤러리, 서울' },
    { year: '2018', content: '<쌩쇼>, 아트스페이스 지선, 서울' },
    { year: '2017', content: '<워크샵 단체전>, A&D 갤러리, 서울' }
  ];

  return (
    <div className="cv-page">
      <div className="cv-menu-button" onClick={handleBackClick}>
        <div className="cv-menu-line"></div>
        <div className="cv-menu-line"></div>
        <div className="cv-menu-line"></div>
      </div>

      <h1 className="cv-title">CV</h1>
      <h2 className="cv-name">홍연주 b.1999겠냐</h2>

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

      <div className="cv-section">
        <h3 className="cv-section-title">전시이력</h3>
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
