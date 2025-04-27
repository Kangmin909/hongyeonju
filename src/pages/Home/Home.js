// src/pages/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const homeImage = 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/test%2F%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%B5%E1%84%83%E1%85%A1%E1%84%85%E1%85%B5%E1%86%AB%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%A8%E1%84%89%E1%85%A1%2C%2053x33.5(cm)%2C%20%EB%82%98%EB%AC%B4%20%ED%8C%90%EB%84%AC%EC%97%90%20%EC%98%A4%EC%9D%BC%ED%8C%8C%EC%8A%A4%ED%85%94%2C%20%EC%A0%AF%EC%86%8C%2C%20%EB%8F%8C%EB%B0%98%EC%A3%BD%2C%202025.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-name">HONG<br />YEONJU</div>
        <div className="menu-icon" onClick={() => navigate('/menu')}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <div className="image-placeholder">
        <img src={homeImage} alt="Can't find file" className="profile-image" />
      </div>
    </div>
  );
};

export default Home;
