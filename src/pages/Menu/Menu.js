// src/pages/Menu.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

// 화살표 이미지를 import합니다.
import arrowIcon from '../../assets/icons/back-arrow.png'; // 실제 아이콘 경로에 맞게 수정

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <img src={arrowIcon} alt="Back Arrow" className="arrow-icon" />
      </div>
      <div className="menu-items">
        <button className="menu-button" onClick={() => navigate('/')}>HOME</button>
        <button className="menu-button" onClick={() => navigate('/works')}>WORKS</button>
        <button className="menu-button" onClick={() => navigate('/exhibition')}>EXHIBITION</button>
        <button className="menu-button" onClick={() => navigate('/cv')}>CV</button>
        <button className="menu-button" onClick={() => navigate('/about')}>ABOUT</button>
      </div>
    </div>
  );
};

export default Menu;
