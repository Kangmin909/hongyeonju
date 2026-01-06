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

  const isPopStateRef = React.useRef(false);

  // 애니메이션을 동반한 닫기 함수
  const handleClose = React.useCallback(() => {
    // 만약 뒤로가기 제스처(popstate)로 인한 닫기라면, 
    // 브라우저가 이미 화면 이동을 처리 중일 수 있으므로 추가 애니메이션 없이 즉시 닫습니다.
    if (isPopStateRef.current) {
      toggleMenu();
      return;
    }

    setIsClosing(true);
    setOffsetX(window.innerWidth); // 오른쪽 화면 밖으로 이동
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
      setOffsetX(0);
    }, 300);
  }, [toggleMenu]);

  React.useEffect(() => {
    if (!isMenuOpen) {
      isPopStateRef.current = false; // 메뉴가 닫혀있을 때 초기화
      return;
    }

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // 뒤로가기 제어를 위한 히스토리 상태 추가
    window.history.pushState({ modal: 'menu' }, '');
    
    const handlePopState = () => {
      // 뒤로가기 발생 시 메뉴 닫기 (이미 애니메이션 효과가 포함된 handleClose 호출)
      isPopStateRef.current = true;
      handleClose();
    };
    
    window.addEventListener('popstate', handlePopState);
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      
      // UI를 통해 닫힌 경우에만 히스토리 백 수행
      if (!isPopStateRef.current && window.history.state?.modal === 'menu') {
        // 백 버튼을 누르기 전에 먼저 메뉴를 닫아 DOM에서 제거합니다 (플래시 방지)
        toggleMenu(); 
        window.history.back();
      }

      // 복구 로직
      const savedScrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY) * -1);
    };
  }, [isMenuOpen, handleClose]);

  const handleTouchStart = (e) => {
    if (isClosing) return;
    const startX = e.touches[0].clientX;
    
    // 아이폰의 시스템 뒤로가기 제스처(왼쪽 엣지 스와이프)와 충돌을 방지하기 위해 
    // 화면 왼쪽 끝(40px 이내)에서 시작되는 터치는 드래그 로직에서 제외합니다.
    if (startX < 40) return; 
    
    touchStartPos.current = startX;
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
