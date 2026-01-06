// src/pages/Menu.js

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import './Menu.css';

// 화살표 이미지를 import합니다.
import arrowIcon from '../../assets/icons/back-arrow.png'; // 실제 아이콘 경로에 맞게 수정

const Menu = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { isMenuOpen, toggleMenu, refreshData, loading } = useAppData();

  const [isClosing, setIsClosing] = React.useState(false); // 닫히는 중인지 확인

  const [openingImmediate, setOpeningImmediate] = React.useState(false); // 애니메이션 없이 열기 여부



  const isPopStateRef = React.useRef(false);

  const isNavigatingRef = React.useRef(false);



  // 메뉴 닫기 함수

  const handleClose = React.useCallback((immediate = false) => {

    // 뒤로가기 제스처(popstate) 혹은 즉시 닫기 요청인 경우 애니메이션 없이 처리

    if (immediate || isPopStateRef.current) {

      if (isMenuOpen) toggleMenu();

      setIsClosing(false);

      setOpeningImmediate(false);

      return;

    }



    setIsClosing(true);

    setTimeout(() => {

      if (isMenuOpen) toggleMenu();

      setIsClosing(false);

    }, 300);

  }, [isMenuOpen, toggleMenu]);



  // Effect 1: 히스토리 감지 (컴포넌트 마운트 시 1회 등록)
  React.useEffect(() => {
    const handlePopState = (e) => {
      isPopStateRef.current = true;
      const isMenuState = e.state?.modal === 'menu';
      
      if (isMenuState && !isMenuOpen) {
        // 뒤로가기 해서 메뉴 상태로 왔는데 메뉴가 닫혀있으면 애니메이션 없이 엶
        setOpeningImmediate(true);
        toggleMenu();
      } else if (!isMenuState && isMenuOpen) {
        // 뒤로가기 해서 메뉴 없는 상태로 왔는데 메뉴가 열려있으면 즉시 닫음
        handleClose(true);
      }
      
      // 플래그 초기화
      setTimeout(() => { isPopStateRef.current = false; }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    
    // 초기 로드 시 히스토리 상태가 메뉴라면 복원
    if (window.history.state?.modal === 'menu' && !isMenuOpen) {
      setOpeningImmediate(true);
      toggleMenu();
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isMenuOpen, toggleMenu, handleClose]);

  // Effect 2: 메뉴 상태에 따른 부가 효과 (스크롤 잠금 등)
  React.useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // 메뉴 진입 시 히스토리 push (이미 메뉴 상태가 아닐 때만)
    if (window.history.state?.modal !== 'menu') {
      window.history.pushState({ modal: 'menu' }, '');
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        window.history.back();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      
      if (isMenuOpen && !isPopStateRef.current && !isNavigatingRef.current && window.history.state?.modal === 'menu') {
        toggleMenu(); 
        window.history.back();
      }

      if (isMenuOpen) {
        const savedScrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY) * -1);
      }
      isNavigatingRef.current = false;
    };
  }, [isMenuOpen, toggleMenu]);



  const handleRefresh = async () => {

    await refreshData();

  };



  const handleNavigate = (path) => {

    if (location.pathname === path) {

      window.history.back();

    } else {

      isNavigatingRef.current = true; // 네비게이션 시작 플래그 설정

      navigate(path);

      toggleMenu(); 

    }

  };



  if (!isMenuOpen) return null;



    return (



      <div 



        className={`menu-container ${isClosing ? 'is-closing' : ''} ${openingImmediate ? 'no-animation' : ''}`}



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
