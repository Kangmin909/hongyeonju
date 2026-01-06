import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

// 전역 변수 객체 (컴포넌트 외부에서도 접근 가능)
export const appDataStore = {
  home: null,
  about: null,
  cv1: null,
  cv2: null,
  exhibitions: null,
  works: null,
  loading: false,
  error: null,
};

// Context 생성
const AppDataContext = createContext();

// Provider 컴포넌트
export const AppDataProvider = ({ children }) => {
  const CACHE_DURATION = 30 * 60 * 1000; // 30분으로 변경

  const getInitialData = () => {
    try {
      const cachedData = localStorage.getItem('appData');
      const cachedTimestamp = localStorage.getItem('appDataTimestamp');

      if (cachedData && cachedTimestamp) {
        const isCacheValid = (Date.now() - parseInt(cachedTimestamp, 10)) < CACHE_DURATION;
        if (isCacheValid) {
          return { ...JSON.parse(cachedData), loading: false };
        }
      }
    } catch (error) {
      console.error("캐시 데이터를 불러오는 데 실패했습니다.", error);
    }
    
    return {
      home: null,
      about: null,
      cv1: null,
      cv2: null,
      exhibitions: null,
      works: null,
      loading: false,
      error: null,
    };
  };

  const [data, setData] = useState(getInitialData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoading = useRef(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // 모든 API를 한 번에 호출
  const fetchAllData = useCallback(async (force = false) => {
    if (isLoading.current) return;
    
    // 강제 호출이 아니고 이미 데이터가 유효 기간 내에 있다면 리턴
    if (!force) {
      const cachedTimestamp = localStorage.getItem('appDataTimestamp');
      if (cachedTimestamp && (Date.now() - parseInt(cachedTimestamp, 10)) < CACHE_DURATION) {
        if (data.home && data.exhibitions) return; 
      }
    }
    
    isLoading.current = true;
    setData(prev => ({ ...prev, loading: true }));

    try {
      console.log("🔄 Fetching fresh data from server...");
      const [homeRes, aboutRes, cv1Res, cv2Res, exhibitionsRes, worksRes] = await Promise.all([
        fetch("/api/getHome").then(res => res.json()),
        fetch("/api/getAbout").then(res => res.json()),
        fetch("/api/getCV1").then(res => res.json()),
        fetch("/api/getCV2").then(res => res.json()),
        fetch("/api/getExhibition").then(res => res.json()),
        fetch("/api/getWorks").then(res => res.json()),
      ]);

      const newData = {
        home: homeRes,
        about: aboutRes,
        cv1: cv1Res,
        cv2: cv2Res,
        exhibitions: exhibitionsRes,
        works: worksRes,
      };

      localStorage.setItem('appData', JSON.stringify(newData));
      localStorage.setItem('appDataTimestamp', Date.now().toString());

      const finalState = { ...newData, loading: false, error: null };
      setData(finalState);
      Object.assign(appDataStore, finalState);

      // 데이터 로드 후 미디어 프리로딩 실행
      preloadMedia(newData);

    } catch (error) {
      console.error('Failed to fetch app data:', error);
      const errorState = { loading: false, error: error.message };
      setData(prev => ({ ...prev, ...errorState }));
      Object.assign(appDataStore, { ...data, ...errorState });
    } finally {
      isLoading.current = false;
    }
  }, [data, CACHE_DURATION]);

  // 미디어 프리로딩 함수 (이미지 위주)
  const preloadMedia = (appData) => {
    const urls = [];
    
    // 1. 홈 이미지 추출
    if (appData.home?.link) urls.push(appData.home.link);
    
    // 2. 전시 이미지 추출
    if (Array.isArray(appData.exhibitions)) {
      appData.exhibitions.forEach(ex => {
        if (ex.link) urls.push(ex.link);
        if (Array.isArray(ex.images)) {
          ex.images.forEach(img => {
            if (img.link) urls.push(img.link);
          });
        }
      });
    }
    
    // 3. 작품 이미지 추출
    if (Array.isArray(appData.works)) {
      appData.works.forEach(work => {
        if (work.link) urls.push(work.link);
      });
    }

    // 중복 제거 후 프리로딩
    const uniqueUrls = [...new Set(urls)];
    uniqueUrls.forEach(url => {
      // 영상은 프리로딩이 무거울 수 있으므로 이미지만 처리
      const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url) || !url.includes('.mp4');
      
      if (isImage) {
        const img = new Image();
        img.src = url;
      }
    });
  };

  // 강제 새로고침 함수
  const refreshData = useCallback(() => {
    return fetchAllData(true);
  }, [fetchAllData]);

  useEffect(() => {
    if (data.home || data.exhibitions) {
      preloadMedia(data);
    }
  }, [data]); // data 변경 시 실행

  const value = {
    ...data,
    isMenuOpen,
    toggleMenu,
    fetchAllData,
    refreshData,
  };


  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

// Hook for using context
export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within AppDataProvider');
  }
  return context;
};

// 전역 변수 직접 접근 함수 (컴포넌트 외부에서도 사용 가능)
export const getAppData = () => appDataStore;

