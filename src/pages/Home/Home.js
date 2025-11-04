// src/pages/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import MediaDisplay from '../../components/MediaDisplay';

const homeImage = 'https://www.youtube.com/watch?v=l9D1HPb6kVA';

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
        <MediaDisplay src={homeImage} alt="Home image" className="profile-image" autoplay={true} />
      </div>
    </div>
  );
};

export default Home;
