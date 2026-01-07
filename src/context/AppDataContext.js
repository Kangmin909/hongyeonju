import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

/**
 * Global variable for non-React access to app data.
 * Useful for legacy scripts or outside of React tree.
 */
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

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

// Create Context
const AppDataContext = createContext();

/**
 * Preload media (images) from the fetched data to improve UX.
 * @param {Object} appData - The fetched application data.
 */
const preloadMedia = (appData) => {
  const urls = [];
  
  // 1. Home Image
  if (appData.home?.link) urls.push(appData.home.link);
  
  // 2. Exhibition Images
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
  
  // 3. Works Images
  if (Array.isArray(appData.works)) {
    appData.works.forEach(work => {
      if (work.link) urls.push(work.link);
    });
  }

  // Deduplicate and preload
  const uniqueUrls = [...new Set(urls)];
  uniqueUrls.forEach(url => {
    // Basic check: preload only if it looks like an image or not explicitly mp4
    const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url) || !url.includes('.mp4');
    
    if (isImage) {
      const img = new Image();
      img.src = url;
    }
  });
};

/**
 * AppDataProvider Component
 * Manages global application state, data fetching, and caching.
 */
export const AppDataProvider = ({ children }) => {
  
  // Initialize state from local storage cache if valid
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
      console.error("Failed to load cached data:", error);
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

  /**
   * Fetches all required data from the API.
   * @param {boolean} force - If true, ignores cache and forces a fetch.
   */
  const fetchAllData = useCallback(async (force = false) => {
    if (isLoading.current) return;
    
    // Check cache validity unless forced
    if (!force) {
      const cachedTimestamp = localStorage.getItem('appDataTimestamp');
      if (cachedTimestamp && (Date.now() - parseInt(cachedTimestamp, 10)) < CACHE_DURATION) {
        // If critical data exists, skip fetch
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

      // Update cache
      localStorage.setItem('appData', JSON.stringify(newData));
      localStorage.setItem('appDataTimestamp', Date.now().toString());

      const finalState = { ...newData, loading: false, error: null };
      setData(finalState);
      Object.assign(appDataStore, finalState); // Update global store

      // Preload media after fetch
      preloadMedia(newData);

    } catch (error) {
      console.error('Failed to fetch app data:', error);
      const errorState = { loading: false, error: error.message };
      setData(prev => ({ ...prev, ...errorState }));
      Object.assign(appDataStore, { ...data, ...errorState });
    } finally {
      isLoading.current = false;
    }
  }, [data]);

  const refreshData = useCallback(() => {
    return fetchAllData(true);
  }, [fetchAllData]);

  // Effect: Preload media if data is already available (e.g. from cache)
  useEffect(() => {
    if (data.home || data.exhibitions) {
      preloadMedia(data);
    }
  }, [data]);

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

// Access global store
export const getAppData = () => appDataStore;