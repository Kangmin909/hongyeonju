module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/context/AppDataContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppDataProvider",
    ()=>AppDataProvider,
    "appDataStore",
    ()=>appDataStore,
    "getAppData",
    ()=>getAppData,
    "useAppData",
    ()=>useAppData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const appDataStore = {
    home: null,
    about: null,
    cv1: null,
    cv2: null,
    exhibitions: null,
    works: null,
    loading: false,
    error: null
};
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
// Create Context
const AppDataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
/**
 * Preload media (images) from the fetched data to improve UX.
 * @param {Object} appData - The fetched application data.
 */ const preloadMedia = (appData)=>{
    const urls = [];
    // 1. Home Image
    if (appData.home?.link) urls.push(appData.home.link);
    // 2. Exhibition Images
    if (Array.isArray(appData.exhibitions)) {
        appData.exhibitions.forEach((ex)=>{
            if (ex.link) urls.push(ex.link);
            if (Array.isArray(ex.images)) {
                ex.images.forEach((img)=>{
                    if (img.link) urls.push(img.link);
                });
            }
        });
    }
    // 3. Works Images
    if (Array.isArray(appData.works)) {
        appData.works.forEach((work)=>{
            if (work.link) urls.push(work.link);
        });
    }
    // Deduplicate and preload
    const uniqueUrls = [
        ...new Set(urls)
    ];
    uniqueUrls.forEach((url)=>{
        // Basic check: preload only if it looks like an image or not explicitly mp4
        const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url) || !url.includes('.mp4');
        if (isImage) {
            const img = new Image();
            img.src = url;
        }
    });
};
const AppDataProvider = ({ children })=>{
    const defaultData = {
        home: null,
        about: null,
        cv1: null,
        cv2: null,
        exhibitions: null,
        works: null,
        loading: false,
        error: null
    };
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultData);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize state from local storage cache if valid (Client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const cachedData = localStorage.getItem('appData');
            const cachedTimestamp = localStorage.getItem('appDataTimestamp');
            if (cachedData && cachedTimestamp) {
                const isCacheValid = Date.now() - parseInt(cachedTimestamp, 10) < CACHE_DURATION;
                if (isCacheValid) {
                    const parsedData = JSON.parse(cachedData);
                    const loadedState = {
                        ...parsedData,
                        loading: false
                    };
                    setData(loadedState);
                    Object.assign(appDataStore, loadedState);
                    preloadMedia(loadedState);
                }
            }
        } catch (error) {
            console.error("Failed to load cached data:", error);
        }
    }, []);
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsMenuOpen((prev)=>!prev);
    }, []);
    /**
   * Fetches all required data from the API.
   * @param {boolean} force - If true, ignores cache and forces a fetch.
   */ const fetchAllData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (force = false)=>{
        if (isLoading.current) return;
        // Check cache validity unless forced
        if (!force) {
            const cachedTimestamp = localStorage.getItem('appDataTimestamp');
            if (cachedTimestamp && Date.now() - parseInt(cachedTimestamp, 10) < CACHE_DURATION) {
                // If critical data exists, skip fetch
                if (data.home && data.exhibitions) return;
            }
        }
        isLoading.current = true;
        setData((prev)=>({
                ...prev,
                loading: true
            }));
        try {
            console.log("🔄 Fetching fresh data from server...");
            const [homeRes, aboutRes, cv1Res, cv2Res, exhibitionsRes, worksRes] = await Promise.all([
                fetch("/api/getHome").then((res)=>res.json()),
                fetch("/api/getAbout").then((res)=>res.json()),
                fetch("/api/getCV1").then((res)=>res.json()),
                fetch("/api/getCV2").then((res)=>res.json()),
                fetch("/api/getExhibition").then((res)=>res.json()),
                fetch("/api/getWorks").then((res)=>res.json())
            ]);
            const newData = {
                home: homeRes,
                about: aboutRes,
                cv1: cv1Res,
                cv2: cv2Res,
                exhibitions: exhibitionsRes,
                works: worksRes
            };
            // Update cache
            localStorage.setItem('appData', JSON.stringify(newData));
            localStorage.setItem('appDataTimestamp', Date.now().toString());
            const finalState = {
                ...newData,
                loading: false,
                error: null
            };
            setData(finalState);
            Object.assign(appDataStore, finalState); // Update global store
            // Preload media after fetch
            preloadMedia(newData);
        } catch (error) {
            console.error('Failed to fetch app data:', error);
            const errorState = {
                loading: false,
                error: error.message
            };
            setData((prev)=>({
                    ...prev,
                    ...errorState
                }));
            Object.assign(appDataStore, {
                ...data,
                ...errorState
            });
        } finally{
            isLoading.current = false;
        }
    }, [
        data
    ]);
    const refreshData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return fetchAllData(true);
    }, [
        fetchAllData
    ]);
    // Effect: Preload media if data is already available (e.g. from cache)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data.home || data.exhibitions) {
            preloadMedia(data);
        }
    }, [
        data
    ]);
    const value = {
        ...data,
        isMenuOpen,
        toggleMenu,
        fetchAllData,
        refreshData
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppDataContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/AppDataContext.js",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useAppData = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppDataContext);
    if (!context) {
        throw new Error('useAppData must be used within AppDataProvider');
    }
    return context;
};
const getAppData = ()=>appDataStore;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/ScrollToTop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
// Shim for useNavigationType
const useNavigationType = ()=>{
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('PUSH');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePopState = ()=>setType('POP');
        const handlePushState = ()=>setType('PUSH'); // Next.js doesn't emit this natively for Link
        // This is an imperfect shim. Ideally we'd wrap the router or use a library.
        // For now, we rely on popstate.
        window.addEventListener('popstate', handlePopState);
        return ()=>window.removeEventListener('popstate', handlePopState);
    }, []);
    return type;
};
/**
 * 페이지 이동 시 스크롤 위치를 고도로 정밀하게 관리하는 컴포넌트입니다.
 */ const ScrollToTop = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Combine to mimic location object partially
    const location = {
        pathname,
        key: pathname + searchParams.toString()
    };
    const navType = useNavigationType();
    const isInitialAppLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastCapturedY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const prevPathnameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(location.pathname);
    const prevKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(location.key);
    const restorationCleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. 전역 설정
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);
    // 2. 실시간 스크롤 추적 (0 포함 모든 위치 저장)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (!isRestoring.current) {
                lastCapturedY.current = window.scrollY;
            }
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    // 3. 페이지 전환 로직
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
                htmlStyle.minHeight = restoreY + window.innerHeight + 500 + 'px';
                const perform = ()=>{
                    if (isRestoring.current) window.scrollTo({
                        top: restoreY,
                        behavior: 'instant'
                    });
                };
                perform();
                const interval = setInterval(perform, 16);
                const observer = new ResizeObserver(perform);
                observer.observe(document.body);
                const stop = ()=>{
                    if (!isRestoring.current) return;
                    isRestoring.current = false;
                    clearInterval(interval);
                    observer.disconnect();
                    htmlStyle.minHeight = originalMinHeight;
                    lastCapturedY.current = window.scrollY; // 실제 안착한 위치 캡처
                };
                window.addEventListener('wheel', stop, {
                    passive: true
                });
                window.addEventListener('touchstart', stop, {
                    passive: true
                });
                const timer = setTimeout(stop, 2500);
                restorationCleanupRef.current = ()=>{
                    clearTimeout(timer);
                    stop();
                };
            }
        } else if (isSamePage && !isInitialAppLoad.current) {
            // CASE 2: 동일 페이지 이동 (연도 변경)
            const targetY = lastCapturedY.current;
            // 이미 상단에 가깝다면 고정하지 않고 자연스럽게 이동하도록 둠
            if (targetY > 10) {
                isRestoring.current = true;
                const htmlStyle = document.documentElement.style;
                const originalMinHeight = htmlStyle.minHeight;
                htmlStyle.minHeight = targetY + window.innerHeight + 'px';
                const pin = ()=>{
                    if (isRestoring.current) window.scrollTo({
                        top: targetY,
                        behavior: 'instant'
                    });
                };
                pin();
                const interval = setInterval(pin, 16);
                const observer = new ResizeObserver(pin);
                observer.observe(document.body);
                const stop = ()=>{
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
                restorationCleanupRef.current = ()=>{
                    clearTimeout(timer);
                    stop();
                };
            }
        } else {
            // CASE 3: 신규 페이지 진입
            window.scrollTo(0, 0);
            lastCapturedY.current = 0;
        }
        isInitialAppLoad.current = false;
        prevPathnameRef.current = location.pathname;
        prevKeyRef.current = location.key;
        return ()=>{
            if (restorationCleanupRef.current) {
                restorationCleanupRef.current();
                restorationCleanupRef.current = null;
            }
        };
    }, [
        location,
        navType
    ]);
    return null;
};
const __TURBOPACK__default__export__ = ScrollToTop;
}),
"[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/back-arrow.bb3de0ef.png");}),
"[project]/src/assets/icons/back-arrow.png.mjs { IMAGE => \"[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 44,
    height: 20,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAL0lEQVR42oXNOQ0AIBQE0TFAhRQQgwEE4L9hBPxjk9dtMgBDR5NkT1dbK9AfysQHV4AFA3GR014AAAAASUVORK5CYII="
};
}),
"[project]/src/components/Menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-ssr] (ecmascript)");
// 화살표 이미지를 import합니다.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/icons/back-arrow.png.mjs { IMAGE => "[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
const Menu = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const location = {
        pathname
    };
    const { isMenuOpen, toggleMenu, refreshData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppData"])();
    const [isClosing, setIsClosing] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [openingImmediate, setOpeningImmediate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const isPopStateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const isNavigatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    // 메뉴 닫기 함수
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((immediate = false)=>{
        if (immediate || isPopStateRef.current) {
            if (isMenuOpen) toggleMenu();
            setIsClosing(false);
            setOpeningImmediate(false);
            return;
        }
        setIsClosing(true);
        setTimeout(()=>{
            if (isMenuOpen) toggleMenu();
            setIsClosing(false);
        }, 300);
    }, [
        isMenuOpen,
        toggleMenu
    ]);
    // Effect: 경로 변경 시 메뉴 닫기 (네비게이션 완료 후 동작)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isMenuOpen) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname,
        searchParams
    ]);
    // Effect 1: 히스토리 감지 (팝스테이트 리스너)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const handlePopState = (e)=>{
            isPopStateRef.current = true;
            const isMenuState = e.state?.modal === 'menu';
            if (isMenuState && !isMenuOpen) {
                setOpeningImmediate(true);
                toggleMenu();
            } else if (!isMenuState && isMenuOpen) {
                handleClose(true);
            }
            setTimeout(()=>{
                isPopStateRef.current = false;
            }, 100);
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>{
            window.removeEventListener('popstate', handlePopState);
        };
    }, [
        isMenuOpen,
        toggleMenu,
        handleClose
    ]);
    // Effect 1.5: 초기 로드 시 복원 (마운트 시 1회만 실행)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (window.history.state?.modal === 'menu' && !isMenuOpen) {
            setOpeningImmediate(true);
            toggleMenu();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Effect 2: 메뉴 상태에 따른 부가 효과
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!isMenuOpen) return;
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        if (window.history.state?.modal !== 'menu') {
            window.history.pushState({
                modal: 'menu'
            }, '');
        }
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape' && isMenuOpen) {
                window.history.back();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            if (isMenuOpen) {
                const savedScrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY) * -1);
            }
            isNavigatingRef.current = false;
        };
    }, [
        isMenuOpen,
        toggleMenu
    ]);
    const handleRefresh = async ()=>{
        await refreshData();
    };
    const handleNavigate = (path)=>{
        if (location.pathname === path) {
            window.history.back();
        } else {
            isNavigatingRef.current = true;
            router.replace(path);
        // toggleMenu(); // <-- Removed: Let useEffect handle closing on route change
        }
    };
    if (!isMenuOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `menu-container ${isClosing ? 'is-closing' : ''} ${openingImmediate ? 'no-animation' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "back-arrow",
                onClick: ()=>window.history.back(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Back Arrow",
                    className: "arrow-icon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Menu.js",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.js",
                lineNumber: 135,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-items",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: ()=>handleNavigate('/'),
                        children: "HOME"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: ()=>handleNavigate('/works'),
                        children: "WORKS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: ()=>handleNavigate('/exhibition'),
                        children: "EXHIBITION"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: ()=>handleNavigate('/cv'),
                        children: "CV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: ()=>handleNavigate('/about'),
                        children: "ABOUT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Menu.js",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "refresh-button",
                onClick: handleRefresh,
                disabled: loading,
                children: loading ? 'REFRESHING...' : 'REFRESH'
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.js",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Menu.js",
        lineNumber: 132,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Menu;
}),
"[project]/src/app/ClientLayout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollToTop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppDataProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ClientLayout.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ClientLayout.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "root",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/ClientLayout.js",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ClientLayout.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__42633581._.js.map