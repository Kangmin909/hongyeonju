import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * 페이지 이동 시 스크롤 위치를 정밀하게 관리하는 컴포넌트입니다.
 * - 브라우저의 자동 복원 기능을 끄고 직접 제어하여 SPA에서의 복원 오작동을 방지합니다.
 * - 새로운 페이지 진입 시에는 최상단으로 이동합니다.
 * - 뒤로가기(POP) 시에는 세션 스토리지에 저장된 이전 위치로 복구합니다.
 */
const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // 전역 스크롤 복원 설정을 수동으로 전환 (브라우저 간섭 차단)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const key = location.key || location.pathname + location.search;
    const cacheKey = `scroll_${key}`;

    if (navType === 'POP') {
      const savedPos = sessionStorage.getItem(cacheKey);
      if (savedPos) {
        const restoreY = parseInt(savedPos, 10);
        // 레이아웃 렌더링 시간을 고려하여 여러 단계로 복구 시도
        const doRestore = () => window.scrollTo(0, restoreY);
        
        requestAnimationFrame(doRestore);
        setTimeout(doRestore, 10);
        setTimeout(doRestore, 100); // 비동기 데이터 로딩 대응
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // 페이지를 떠나기 전 현재 위치 저장
    return () => {
      const currentKey = `scroll_${location.key || location.pathname + location.search}`;
      sessionStorage.setItem(currentKey, window.scrollY.toString());
    };
  }, [location, navType]);

  return null;
};

export default ScrollToTop;
