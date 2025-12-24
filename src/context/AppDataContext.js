import React, { createContext, useContext, useState, useCallback } from 'react';

// 전역 변수 객체 (컴포넌트 외부에서도 접근 가능)
export const appDataStore = {
  home: null,
  about: null,
  cv1: null,
  cv2: null,
  exhibitions: null,
  works: null,
  loading: true,
  error: null,
};

// Context 생성
const AppDataContext = createContext();

// Provider 컴포넌트
export const AppDataProvider = ({ children }) => {
  const [data, setData] = useState({
    home: null,
    about: null,
    cv1: null,
    cv2: null,
    exhibitions: null,
    works: null,
    loading: true,
    error: null,
  });

  // 모든 API를 한 번에 호출
  const fetchAllData = useCallback(async () => {
    try {
      setData(prev => ({ ...prev, loading: true, error: null }));

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
        loading: false,
        error: null,
      };

      // 전역 변수에도 동기화
      Object.assign(appDataStore, newData);

      setData(newData);
    } catch (error) {
      console.error('Failed to fetch app data:', error);
      const errorData = {
        home: null,
        about: null,
        cv1: null,
        cv2: null,
        exhibitions: null,
        works: null,
        loading: false,
        error: error.message,
      };
      
      // 전역 변수에도 동기화
      Object.assign(appDataStore, errorData);
      
      setData(errorData);
    }
  }, []);

  // Home 컴포넌트에서 호출할 수 있도록 함수 제공
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

