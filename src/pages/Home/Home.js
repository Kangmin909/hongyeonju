// src/pages/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const homeImage = 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/n/ax7gxa1iogyu/b/hongyoenju/o/home%2F%EB%82%99%ED%95%98.jpeg';

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
