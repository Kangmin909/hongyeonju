import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * 페이지 이동 시 스크롤 위치를 고도로 정밀하게 관리하는 컴포넌트입니다.
 * - 새로운 페이지 진입 시 최상단 이동
 * - 뒤로가기(POP) 시 ResizeObserver와 Min-height hack을 이용해 긴 페이지도 정확히 복원
 * - 새로고침 시 최상단 이동 보장
 */
const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const isInitialAppLoad = useRef(true);
  const isRestoring = useRef(false);

  useEffect(() => {
    // 앱 초기 구동 시 브라우저 자동 복원 비활성화
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // 새로고침 시 무조건 상단으로 이동하여 브라우저의 어정쩡한 복원 방지
    window.scrollTo(0, 0);
  }, []);

  // 스크롤 할 때마다 위치 저장 (가장 최신 위치를 항상 유지)
  useEffect(() => {
    const handleScroll = () => {
      if (isRestoring.current) return;
      const key = location.key || 'default';
      try {
        sessionStorage.setItem(`scroll_${key}`, window.scrollY.toString());
      } catch (e) {}
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.key]);

  // 페이지 전환 및 뒤로가기 처리
  useEffect(() => {
    const key = location.key || 'default';
    const cacheKey = `scroll_${key}`;

    if (navType === 'POP' && !isInitialAppLoad.current) {
      let savedPos = null;
      try {
        savedPos = sessionStorage.getItem(cacheKey);
      } catch (e) {}
      
      const restoreY = savedPos ? parseInt(savedPos, 10) : 0;

      if (!isNaN(restoreY) && restoreY > 0) {
        isRestoring.current = true;

        // [Min-height hack] 긴 페이지 복원 시 높이 부족으로 인한 스크롤 clamping 방지
        const htmlStyle = document.documentElement.style;
        const originalMinHeight = htmlStyle.minHeight;
        if (restoreY > window.innerHeight) {
          htmlStyle.minHeight = (restoreY + window.innerHeight + 500) + 'px';
        }

        const performScroll = () => {
          if (isRestoring.current) {
            window.scrollTo(0, restoreY);
          }
        };

        // 초기 복원 및 지속적 보정 루프 (레이아웃 시프트 대응)
        performScroll();
        let rAFId;
        const scrollLoop = () => {
          if (isRestoring.current) {
            performScroll();
            rAFId = requestAnimationFrame(scrollLoop);
          }
        };
        rAFId = requestAnimationFrame(scrollLoop);

        // ResizeObserver로 요소 크기 변화 감지 시마다 위치 재고정
        const observer = new ResizeObserver(performScroll);
        observer.observe(document.body);

        const stopRestoration = () => {
          if (!isRestoring.current) return;
          isRestoring.current = false;
          observer.disconnect();
          cancelAnimationFrame(rAFId);
          htmlStyle.minHeight = originalMinHeight;
        };

        // 사용자 조작 발생 시 보정 로직 즉시 중단
        window.addEventListener('wheel', stopRestoration, { passive: true });
        window.addEventListener('touchstart', stopRestoration, { passive: true });
        window.addEventListener('mousedown', stopRestoration, { passive: true });
        
        const timer = setTimeout(stopRestoration, 2000);

        return () => {
          clearTimeout(timer);
          stopRestoration();
          window.removeEventListener('wheel', stopRestoration);
          window.removeEventListener('touchstart', stopRestoration);
          window.removeEventListener('mousedown', stopRestoration);
        };
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // 새로운 페이지 진입(PUSH/REPLACE) 또는 앱 초기 로드 시 상단 이동
      window.scrollTo(0, 0);
    }

    isInitialAppLoad.current = false;
  }, [location, navType]);

  return null;
};

export default ScrollToTop;
