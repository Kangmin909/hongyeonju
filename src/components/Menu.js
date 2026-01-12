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

  const { isMenuOpen, toggleMenu } = useAppData();
  const [isClosing, setIsClosing] = React.useState(false); 
  const [openingImmediate, setOpeningImmediate] = React.useState(false); 

  const isPopStateRef = React.useRef(false);
  const isNavigatingRef = React.useRef(false);

  // 메뉴 닫기 함수
  const handleClose = React.useCallback((immediate = false) => {
    if (immediate || isPopStateRef.current || isNavigatingRef.current) {
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

  // Effect: 경로 변경 시 메뉴 즉시 닫기 (네비게이션 완료 시점)
  React.useEffect(() => {
    if (isMenuOpen && isNavigatingRef.current) {
      handleClose(true); // 이동 시에는 애니메이션 없이 즉시 닫음
      isNavigatingRef.current = false;
    }
  }, [pathname, searchParams, isMenuOpen, handleClose]);

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

  // Effect 1.5: 초기 로드 시 복원
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.history.state?.modal === 'menu' && !isMenuOpen) {
      setOpeningImmediate(true);
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect 2: 메뉴 상태에 따른 부가 효과 (스크롤 잠금 및 히스토리 푸시)
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
    };
  }, [isMenuOpen]);

  const handleNavigate = (path) => {
    if (pathname === path) {
      window.history.back(); // 동일 페이지는 히스토리만 되돌림
    } else {
      isNavigatingRef.current = true;
      // 현재의 '메뉴 열림' 히스토리를 '새 페이지'로 대체하여 스택을 깨끗하게 유지
      router.replace(path);
    }
  };

  // if (!isMenuOpen) return null; // 주석 처리하거나 제거

  return (
    <div className={`menu-container ${isMenuOpen ? 'is-open' : ''} ${isClosing ? 'is-closing' : ''} ${openingImmediate ? 'no-animation' : ''}`}>
      <div className="back-arrow" onClick={() => window.history.back()}>
        <img src={arrowIcon.src || arrowIcon} alt="Back Arrow" className="arrow-icon" />
      </div>
      <div className="menu-items">
        <button className="menu-button" onClick={() => handleNavigate('/')}>HOME</button>
        <button className="menu-button" onClick={() => handleNavigate('/works')}>WORKS</button>
        <button className="menu-button" onClick={() => handleNavigate('/exhibition')}>EXHIBITION</button>
        <button className="menu-button" onClick={() => handleNavigate('/cv')}>CV</button>
        <button className="menu-button" onClick={() => handleNavigate('/about')}>ABOUT</button>
      </div>
    </div>
  );
};

export default Menu;