import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

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
  const getInitialData = () => {
    try {
      const cachedData = localStorage.getItem('appData');
      const cachedTimestamp = localStorage.getItem('appDataTimestamp');
      const CACHE_DURATION = 10 * 60 * 1000; // 10분

      if (cachedData && cachedTimestamp) {
        const isCacheValid = (Date.now() - parseInt(cachedTimestamp, 10)) < CACHE_DURATION;
        if (isCacheValid) {
          return { ...JSON.parse(cachedData), loading: false };
        }
      }
    } catch (error) {
      console.error("캐시 데이터를 불러오는 데 실패했습니다.", error);
    }
    
    // 캐시가 없거나 유효하지 않은 경우
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
  const isLoading = useRef(false);

  // 모든 API를 한 번에 호출
  const fetchAllData = useCallback(async () => {
    if (isLoading.current) {
      return;
    }
    
    isLoading.current = true;
    setData(prev => ({ ...prev, loading: true }));

    try {
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

      setData({ ...newData, loading: false, error: null });
      Object.assign(appDataStore, { ...newData, loading: false, error: null });

    } catch (error) {
      console.error('Failed to fetch app data:', error);
      const errorState = { loading: false, error: error.message };
      setData(prev => ({ ...prev, ...errorState }));
      Object.assign(appDataStore, {
        home: null,
        about: null,
        cv1: null,
        cv2: null,
        exhibitions: null,
        works: null,
        ...errorState
      });
    } finally {
      isLoading.current = false;
    }
  }, []); // 의존성 배열을 비워서 함수가 재생성되지 않도록 함

  const value = {
    ...data,
    fetchAllData,
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

