'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * 페이지 이동 시 스크롤 위치를 최상단으로 이동시키는 컴포넌트입니다.
 * Next.js App Router의 기본 스크롤 복원 기능과 충돌하지 않도록 단순화했습니다.
 */
const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // 이전 경로를 기억하여 뒤로가기인지 새로운 이동인지 구분하는 데 도움을 줄 수 있지만,
  // Next.js App Router는 기본적으로 뒤로가기 시 스크롤을 복원하고,
  // Link나 router.push 시에는 스크롤을 top으로 보냅니다.
  // 다만, 간혹 SPA 전환 시 스크롤이 유지되는 경우를 방지하기 위해 명시적으로 Top으로 보냅니다.

  useEffect(() => {
    // 브라우저의 기본 스크롤 복원 기능을 활성화 (auto)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
    
    // 페이지 경로가 변경될 때만 스크롤을 최상단으로 이동
    // 단, 브라우저가 스스로 스크롤을 복원하는 '뒤로가기(popstate)' 상황과는 구분하기 어렵지만
    // Next.js는 router.push 시 scroll: true가 기본값이라 자동으로 올라갑니다.
    // 여기서는 보조적인 역할만 수행합니다.
    
    // window.scrollTo(0, 0); // Next.js가 대부분 처리하므로 과도한 강제 이동 제거
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
