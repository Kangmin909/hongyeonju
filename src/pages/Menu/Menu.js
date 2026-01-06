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
  const [offsetX, setOffsetX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false); // 닫히는 중인지 확인
  const touchStartPos = React.useRef(0);

  // 애니메이션을 동반한 닫기 함수
  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setOffsetX(window.innerWidth); // 오른쪽 화면 밖으로 이동
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
      setOffsetX(0);
    }, 300);
  }, [toggleMenu]);

  React.useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // 복구 로직
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    };
  }, [isMenuOpen, handleClose]);

  const handleTouchStart = (e) => {
    if (isClosing) return;
    touchStartPos.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isClosing) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartPos.current;
    
    if (diff > 0) {
      setOffsetX(diff);
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging || isClosing) return;
    setIsDragging(false);
    
    if (offsetX > 100) {
      handleClose();
    } else {
      setOffsetX(0);
    }
  };

  const handleRefresh = async () => {
    await refreshData();
  };

  const handleNavigate = (path) => {
    navigate(path);
    toggleMenu(); 
  };

  if (!isMenuOpen) return null;

  return (
    <div 
      className={`menu-container ${isDragging ? 'is-dragging' : ''} ${isClosing ? 'is-closing' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translate3d(${offsetX}px, 0, 0)`,
        opacity: Math.max(1 - offsetX / (window.innerWidth * 0.8), 0),
        transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease'
      }}
    >
      <div className="back-arrow" onClick={handleClose}>
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
