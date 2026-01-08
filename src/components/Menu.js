'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useAppData } from '../context/AppDataContext';
import './Menu.css';

// 화살표 이미지를 import합니다.
import arrowIcon from '../assets/icons/back-arrow.svg';

const Menu = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const location = { pathname }; 

  const { isMenuOpen, toggleMenu, refreshData, loading } = useAppData();

  const [isClosing, setIsClosing] = React.useState(false); 
  const [openingImmediate, setOpeningImmediate] = React.useState(false); 

  const isPopStateRef = React.useRef(false);
  const isNavigatingRef = React.useRef(false);

  // 메뉴 닫기 함수
  const handleClose = React.useCallback((immediate = false) => {
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

  // Effect: 경로 변경 시 메뉴 닫기 (네비게이션 완료 후 동작)
  React.useEffect(() => {
    if (isMenuOpen) {
      // 페이지 이동 시에는 애니메이션 없이 즉시 닫기
      handleClose(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  // Effect 1: 히스토리 감지 (팝스테이트 리스너)
  React.useEffect(() => {
    const handlePopState = (e) => {
      isPopStateRef.current = true;
      const isMenuState = e.state?.modal === 'menu';
      
      if (isMenuState && !isMenuOpen) {
        setOpeningImmediate(true);
        toggleMenu();
      } else if (!isMenuState && isMenuOpen) {
        handleClose(true);
      }
      
      setTimeout(() => { isPopStateRef.current = false; }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isMenuOpen, toggleMenu, handleClose]);

  // Effect 1.5: 초기 로드 시 복원 (마운트 시 1회만 실행)
  React.useEffect(() => {
    if (window.history.state?.modal === 'menu' && !isMenuOpen) {
      setOpeningImmediate(true);
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect 2: 메뉴 상태에 따른 부가 효과
  React.useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    if (window.history.state?.modal !== 'menu') {
      window.history.pushState({ ...window.history.state, modal: 'menu' }, '');
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        window.history.back();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      
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
      // 동일 페이지: 히스토리 뒤로가기로 메뉴 닫기 (중복 히스토리 방지)
      window.history.back();
    } else {
      isNavigatingRef.current = true;
      
      // 다른 페이지: 현재 히스토리에서 modal 상태 제거 (뒤로가기 시 메뉴 안 열리게)
      if (typeof window !== 'undefined' && window.history.state?.modal === 'menu') {
        const { modal, ...restState } = window.history.state || {};
        window.history.replaceState(restState, '', window.location.href);
      }
      
      // 메뉴 닫기를 호출하지 않고 바로 이동 -> useEffect에서 경로 변경 감지 후 닫음
      router.push(path);
    }
  };

  if (!isMenuOpen) return null;

    return (
      <div 
        className={`menu-container ${isClosing ? 'is-closing' : ''} ${openingImmediate ? 'no-animation' : ''}`}
      >
        <div className="back-arrow" onClick={() => window.history.back()}>
        {/* Next.js Image import handling */}
        <img src={arrowIcon.src || arrowIcon} alt="Back Arrow" className="arrow-icon" />
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