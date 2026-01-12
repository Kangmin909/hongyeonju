'use client';

import { useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * 페이지 이동 시 스크롤 위치를 최상단으로 이동시키는 컴포넌트입니다.
 * useLayoutEffect를 사용하여 화면이 그려지기 전에 스크롤을 강제로 올립니다.
 */
const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    // 페이지 경로가 변경될 때마다 스크롤을 즉시 최상단으로 강제 이동
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
