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
  const [isClosing, setIsClosing] = React.useState(false); // 닫히는 중인지 확인

  const isPopStateRef = React.useRef(false);

  // 메뉴 닫기 함수
  const handleClose = React.useCallback((immediate = false) => {
    // 뒤로가기 제스처(popstate) 혹은 즉시 닫기 요청인 경우 애니메이션 없이 처리
    if (immediate || isPopStateRef.current) {
      toggleMenu();
      setIsClosing(false);
      return;
    }

    setIsClosing(true);
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
    }, 300);
  }, [toggleMenu]);

  React.useEffect(() => {
    if (!isMenuOpen) {
      isPopStateRef.current = false;
      return;
    }

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    window.history.pushState({ modal: 'menu' }, '');
    
    const handlePopState = () => {
      isPopStateRef.current = true;
      handleClose(true); // 제스처 시 즉시 닫기
    };
    
    window.addEventListener('popstate', handlePopState);
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        window.history.back(); // Native back action
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (!isPopStateRef.current && window.history.state?.modal === 'menu') {
        toggleMenu(); 
        window.history.back();
      }

      const savedScrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY) * -1);
    };
  }, [isMenuOpen, handleClose]);

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
      className={`menu-container ${isClosing ? 'is-closing' : ''}`}
    >
      <div className="back-arrow" onClick={() => window.history.back()}>
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
