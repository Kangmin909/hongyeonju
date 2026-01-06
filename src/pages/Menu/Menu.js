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



  React.useEffect(() => {

    // 메뉴가 열릴 때만 히스토리 상태 추가

    if (isMenuOpen) {

      const currentUrl = window.location.pathname + window.location.search;

      if (window.history.state?.modal !== 'menu') {

        window.history.pushState({ modal: 'menu' }, '', currentUrl);

      }

    } else {

      // 메뉴가 완전히 닫히면 즉시 열기 플래그 초기화

      setOpeningImmediate(false);

    }



    const handlePopState = (e) => {

      isPopStateRef.current = true;

      const isMenuState = e.state?.modal === 'menu';

      

      if (isMenuState && !isMenuOpen) {

        // 뒤로가기 해서 메뉴 상태로 왔는데 메뉴가 닫혀있으면 애니메이션 없이 엶

        setOpeningImmediate(true);

        toggleMenu();

      } else if (!isMenuState && isMenuOpen) {

        // 뒤로가기 해서 메뉴 없는 상태로 왔는데 메뉴가 열려있으면 닫음

        handleClose(true);

      }

      

      // 플래그 초기화

      setTimeout(() => { isPopStateRef.current = false; }, 100);

    };

    

    window.addEventListener('popstate', handlePopState);

    

    const handleKeyDown = (e) => {

      if (e.key === 'Escape' && isMenuOpen) {

        window.history.back();

      }

    };

    window.addEventListener('keydown', handleKeyDown);



    return () => {

      window.removeEventListener('popstate', handlePopState);

      window.removeEventListener('keydown', handleKeyDown);

      

      // 메뉴가 열린 상태에서 컴포넌트가 사라질 때 (페이지 이동 등)

      // UI를 통한 일반적인 닫기가 아니고, 뒤로가기도 아니며, 네비게이션 중도 아닐 때만 백 수행

      if (isMenuOpen && !isPopStateRef.current && !isNavigatingRef.current && window.history.state?.modal === 'menu') {

        window.history.back();

      }

      

      // 스크롤 및 네비게이션 플래그 초기화

      if (isMenuOpen) {

        const savedScrollY = document.body.style.top;

        document.body.style.position = '';

        document.body.style.top = '';

        document.body.style.width = '';

        if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY) * -1);

      }

      isNavigatingRef.current = false;

    };

  }, [isMenuOpen, toggleMenu, handleClose]);



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



  if (!isMenuOpen) {

    // 메뉴가 닫혀있더라도 히스토리 상태가 'menu'라면 다시 열어줌 (뒤로가기 대응)

    if (window.history.state?.modal === 'menu' && !isPopStateRef.current) {

      toggleMenu();

    }

    return null;

  }



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
