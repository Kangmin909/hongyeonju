// src/pages/Menu.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import './Menu.css';

// 화살표 이미지를 import합니다.
import arrowIcon from '../../assets/icons/back-arrow.png'; // 실제 아이콘 경로에 맞게 수정

const Menu = () => {
  const navigate = useNavigate();
  const { isMenuOpen, toggleMenu, refreshData, loading } = useAppData();
  const touchStartPos = React.useRef(0);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, toggleMenu]);

  const handleTouchStart = (e) => {
    touchStartPos.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndPos = e.changedTouches[0].clientX;
    const distance = touchEndPos - touchStartPos.current;

    // 오른쪽으로 50px 이상 스와이프했을 때 메뉴 닫기
    if (distance > 50) {
      toggleMenu();
    }
  };

  const handleRefresh = async () => {
    await refreshData();
  };

  const handleNavigate = (path) => {
    navigate(path);
    toggleMenu(); // 페이지 이동 후 메뉴 닫기
  };

  if (!isMenuOpen) return null;

  return (
    <div 
      className="menu-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="back-arrow" onClick={toggleMenu}>
        <img src={arrowIcon} alt="Back Arrow" className="arrow-icon" />
      </div>

      <div className="menu-items">
        <button className="menu-button" onClick={() => handleNavigate('/')}>HOME</button>
        <button className="menu-button" onClick={() => handleNavigate('/works')}>WORKS</button>
        <button className="menu-button" onClick={() => handleNavigate('/exhibition')}>EXHIBITION</button>
        <button className="menu-button" onClick={() => handleNavigate('/cv')}>CV</button>
        <button className="menu-button" onClick={() => handleNavigate('/about')}>ABOUT</button>
      </div>

      <button 
        className="refresh-button" 
        onClick={handleRefresh}
        disabled={loading}
      >
        {loading ? 'REFRESHING...' : 'REFRESH'}
      </button>
    </div>
  );
};

export default Menu;
