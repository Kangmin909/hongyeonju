'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * 전역 스크롤 관리 컴포넌트
 * - 실시간 스크롤 위치 저장
 * - 페이지 진입/새로고침 시 스크롤 복원
 * - 이미지 로딩으로 인한 Layout Shift 대응 (ResizeObserver)
 */
const ScrollManager = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullPath = pathname + searchParams.toString();
  
  // 스크롤 저장 (Throttling 적용으로 성능 최적화)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          sessionStorage.setItem(`scroll_pos:${fullPath}`, window.scrollY.toString());
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fullPath]);

  // 스크롤 복원
  useLayoutEffect(() => {
    const savedPos = sessionStorage.getItem(`scroll_pos:${fullPath}`);
    if (savedPos) {
      const targetY = parseInt(savedPos, 10);
      
      // 1. 즉시 이동
      window.scrollTo(0, targetY);

      // 2. 레이아웃 변화 감지 및 위치 고정 (1초간)
      // 이미지가 늦게 떠서 높이가 변해도 스크롤 위치를 targetY로 계속 잡아둠
      const observer = new ResizeObserver(() => {
        if (Math.abs(window.scrollY - targetY) > 5) { // 5px 이상 차이나면 보정
          window.scrollTo(0, targetY);
        }
      });
      observer.observe(document.body);

      const timer = setTimeout(() => {
        observer.disconnect();
      }, 1000); // 1초 후에는 사용자가 스크롤 할 수 있게 놔줌

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    } else {
        // 저장된 위치가 없으면 맨 위로 (새 페이지 진입 등)
        window.scrollTo(0, 0);
    }
  }, [fullPath]);

  return null;
};

export default ScrollManager;