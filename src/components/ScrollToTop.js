import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * 페이지 이동 시 스크롤 위치를 고도로 정밀하게 관리하는 컴포넌트입니다.
 */
const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();
  
  const isInitialAppLoad = useRef(true);
  const isRestoring = useRef(false);
  const lastCapturedY = useRef(0);
  const prevPathnameRef = useRef(location.pathname);
  const prevKeyRef = useRef(location.key);
  const restorationCleanupRef = useRef(null);

  // 1. 전역 설정
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); 
  }, []);

  // 2. 실시간 스크롤 추적 (0 포함 모든 위치 저장)
  useEffect(() => {
    const handleScroll = () => {
      if (!isRestoring.current) {
        lastCapturedY.current = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. 페이지 전환 로직
  useLayoutEffect(() => {
    if (restorationCleanupRef.current) {
      restorationCleanupRef.current();
      restorationCleanupRef.current = null;
    }

    const isSamePage = prevPathnameRef.current === location.pathname;
    const cacheKey = `scroll_${location.key}`;

    // 페이지 이탈 전 현재 위치 저장
    if (!isInitialAppLoad.current) {
       try {
         sessionStorage.setItem(`scroll_${prevKeyRef.current}`, lastCapturedY.current.toString());
       } catch (e) {}
    }

    if (navType === 'POP' && !isInitialAppLoad.current) {
      // CASE 1: 뒤로가기 복원
      const savedPos = sessionStorage.getItem(cacheKey);
      const restoreY = savedPos ? parseInt(savedPos, 10) : 0;

      if (restoreY > 0) {
        isRestoring.current = true;
        const htmlStyle = document.documentElement.style;
        const originalMinHeight = htmlStyle.minHeight;
        htmlStyle.minHeight = (restoreY + window.innerHeight + 500) + 'px';

        const perform = () => {
          if (isRestoring.current) window.scrollTo({ top: restoreY, behavior: 'instant' });
        };

        perform();
        const interval = setInterval(perform, 16);
        const observer = new ResizeObserver(perform);
        observer.observe(document.body);

        const stop = () => {
          if (!isRestoring.current) return;
          isRestoring.current = false;
          clearInterval(interval);
          observer.disconnect();
          htmlStyle.minHeight = originalMinHeight;
          lastCapturedY.current = window.scrollY; // 실제 안착한 위치 캡처
        };

        window.addEventListener('wheel', stop, { passive: true });
        window.addEventListener('touchstart', stop, { passive: true });
        const timer = setTimeout(stop, 2500);

        restorationCleanupRef.current = () => { clearTimeout(timer); stop(); };
      }
    } else if (isSamePage && !isInitialAppLoad.current) {
      // CASE 2: 동일 페이지 이동 (연도 변경)
      const targetY = lastCapturedY.current;
      
      // 이미 상단에 가깝다면 고정하지 않고 자연스럽게 이동하도록 둠
      if (targetY > 10) {
        isRestoring.current = true;
        const htmlStyle = document.documentElement.style;
        const originalMinHeight = htmlStyle.minHeight;
        
        htmlStyle.minHeight = (targetY + window.innerHeight) + 'px';

        const pin = () => {
          if (isRestoring.current) window.scrollTo({ top: targetY, behavior: 'instant' });
        };

        pin();
        const interval = setInterval(pin, 16);
        const observer = new ResizeObserver(pin);
        observer.observe(document.body);

        const stop = () => {
          if (!isRestoring.current) return;
          isRestoring.current = false;
          clearInterval(interval);
          observer.disconnect();
          htmlStyle.minHeight = originalMinHeight;
          // [중요] 연도 변경 후 콘텐츠가 짧아 위로 딸려 올라갔다면 그 위치(예: 0)를 새로운 '기억'으로 저장
          lastCapturedY.current = window.scrollY;
        };

        // 연도 변경은 비교적 빠르므로 0.4초간만 강제 고정
        const timer = setTimeout(stop, 400);

        restorationCleanupRef.current = () => { clearTimeout(timer); stop(); };
      }
    } else {
      // CASE 3: 신규 페이지 진입
      window.scrollTo(0, 0);
      lastCapturedY.current = 0;
    }

    isInitialAppLoad.current = false;
    prevPathnameRef.current = location.pathname;
    prevKeyRef.current = location.key;

    return () => {
      if (restorationCleanupRef.current) {
        restorationCleanupRef.current();
        restorationCleanupRef.current = null;
      }
    };
  }, [location, navType]);

  return null;
};

export default ScrollToTop;
