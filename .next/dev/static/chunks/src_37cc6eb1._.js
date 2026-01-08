(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/AppDataContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
var appDataStore = {
    home: null,
    about: null,
    cv1: null,
    cv2: null,
    exhibitions: null,
    works: null,
    loading: false,
    error: null
};
var CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
// Create Context
var AppDataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
/**
 * Preload media (images) from the fetched data to improve UX.
 * @param {Object} appData - The fetched application data.
 */ var preloadMedia = function(appData) {
    var _appData_home;
    var urls = [];
    // 1. Home Image
    if ((_appData_home = appData.home) === null || _appData_home === void 0 ? void 0 : _appData_home.link) urls.push(appData.home.link);
    // 2. Exhibition Images
    if (Array.isArray(appData.exhibitions)) {
        appData.exhibitions.forEach(function(ex) {
            if (ex.link) urls.push(ex.link);
            if (Array.isArray(ex.images)) {
                ex.images.forEach(function(img) {
                    if (img.link) urls.push(img.link);
                });
            }
        });
    }
    // 3. Works Images
    if (Array.isArray(appData.works)) {
        appData.works.forEach(function(work) {
            if (work.link) urls.push(work.link);
        });
    }
    // Deduplicate and preload
    var uniqueUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(urls));
    uniqueUrls.forEach(function(url) {
        // Basic check: preload only if it looks like an image or not explicitly mp4
        var isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url) || !url.includes('.mp4');
        if (isImage) {
            var img = new Image();
            img.src = url;
        }
    });
};
var AppDataProvider = function(param) {
    var children = param.children;
    _s();
    var defaultData = {
        home: null,
        about: null,
        cv1: null,
        cv2: null,
        exhibitions: null,
        works: null,
        loading: false,
        error: null
    };
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultData), 2), data = _useState[0], setData = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isMenuOpen = _useState1[0], setIsMenuOpen = _useState1[1];
    var isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize state from local storage cache if valid (Client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppDataProvider.useEffect": function() {
            try {
                var cachedData = localStorage.getItem('appData');
                var cachedTimestamp = localStorage.getItem('appDataTimestamp');
                if (cachedData && cachedTimestamp) {
                    var isCacheValid = Date.now() - parseInt(cachedTimestamp, 10) < CACHE_DURATION;
                    if (isCacheValid) {
                        var parsedData = JSON.parse(cachedData);
                        var loadedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, parsedData), {
                            loading: false
                        });
                        setData(loadedState);
                        Object.assign(appDataStore, loadedState);
                        preloadMedia(loadedState);
                    }
                }
            } catch (error) {
                console.error("Failed to load cached data:", error);
            }
        }
    }["AppDataProvider.useEffect"], []);
    var toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppDataProvider.useCallback[toggleMenu]": function() {
            setIsMenuOpen({
                "AppDataProvider.useCallback[toggleMenu]": function(prev) {
                    return !prev;
                }
            }["AppDataProvider.useCallback[toggleMenu]"]);
        }
    }["AppDataProvider.useCallback[toggleMenu]"], []);
    /**
   * Fetches all required data from the API.
   * @param {boolean} force - If true, ignores cache and forces a fetch.
   */ var fetchAllData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppDataProvider.useCallback[fetchAllData]": function() {
            var force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                "AppDataProvider.useCallback[fetchAllData]": function() {
                    var cachedTimestamp, _ref, homeRes, aboutRes, cv1Res, cv2Res, exhibitionsRes, worksRes, newData, finalState, error, errorState;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                        "AppDataProvider.useCallback[fetchAllData]": function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (isLoading.current) return [
                                        2
                                    ];
                                    // Check cache validity unless forced
                                    if (!force) {
                                        cachedTimestamp = localStorage.getItem('appDataTimestamp');
                                        if (cachedTimestamp && Date.now() - parseInt(cachedTimestamp, 10) < CACHE_DURATION) {
                                            // If critical data exists, skip fetch
                                            if (data.home && data.exhibitions) return [
                                                2
                                            ];
                                        }
                                    }
                                    isLoading.current = true;
                                    setData({
                                        "AppDataProvider.useCallback[fetchAllData]": function(prev) {
                                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                                                loading: true
                                            });
                                        }
                                    }["AppDataProvider.useCallback[fetchAllData]"]);
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        3,
                                        4,
                                        5
                                    ]);
                                    console.log("🔄 Fetching fresh data from server...");
                                    return [
                                        4,
                                        Promise.all([
                                            fetch("/api/getHome").then({
                                                "AppDataProvider.useCallback[fetchAllData]": function(res) {
                                                    return res.json();
                                                }
                                            }["AppDataProvider.useCallback[fetchAllData]"]),
                                            fetch("/api/getAbout").then({
                                                "AppDataProvider.useCallback[fetchAllData]": function(res) {
                                                    return res.json();
                                                }
                                            }["AppDataProvider.useCallback[fetchAllData]"]),
                                            fetch("/api/getCV1").then({
                                                "AppDataProvider.useCallback[fetchAllData]": function(res) {
                                                    return res.json();
                                                }
                                            }["AppDataProvider.useCallback[fetchAllData]"]),
                                            fetch("/api/getCV2").then({
                                                "AppDataProvider.useCallback[fetchAllData]": function(res) {
                                                    return res.json();
                                                }
                                            }["AppDataProvider.useCallback[fetchAllData]"]),
                                            fetch("/api/getExhibition").then({
                                                "AppDataProvider.useCallback[fetchAllData]": function(res) {
                                                    return res.json();
                                                }
                                            }["AppDataProvider.useCallback[fetchAllData]"]),
                                            fetch("/api/getWorks").then({
                                                "AppDataProvider.useCallback[fetchAllData]": function(res) {
                                                    return res.json();
                                                }
                                            }["AppDataProvider.useCallback[fetchAllData]"])
                                        ])
                                    ];
                                case 2:
                                    _ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"].apply(void 0, [
                                        _state.sent(),
                                        6
                                    ]), homeRes = _ref[0], aboutRes = _ref[1], cv1Res = _ref[2], cv2Res = _ref[3], exhibitionsRes = _ref[4], worksRes = _ref[5];
                                    newData = {
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
                                    finalState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, newData), {
                                        loading: false,
                                        error: null
                                    });
                                    setData(finalState);
                                    Object.assign(appDataStore, finalState); // Update global store
                                    // Preload media after fetch
                                    preloadMedia(newData);
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    error = _state.sent();
                                    console.error('Failed to fetch app data:', error);
                                    errorState = {
                                        loading: false,
                                        error: error.message
                                    };
                                    setData({
                                        "AppDataProvider.useCallback[fetchAllData]": function(prev) {
                                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev, errorState);
                                        }
                                    }["AppDataProvider.useCallback[fetchAllData]"]);
                                    Object.assign(appDataStore, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, data, errorState));
                                    return [
                                        3,
                                        5
                                    ];
                                case 4:
                                    isLoading.current = false;
                                    return [
                                        7
                                    ];
                                case 5:
                                    return [
                                        2
                                    ];
                            }
                        }
                    }["AppDataProvider.useCallback[fetchAllData]"]);
                }
            }["AppDataProvider.useCallback[fetchAllData]"])();
        }
    }["AppDataProvider.useCallback[fetchAllData]"], [
        data
    ]);
    var refreshData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppDataProvider.useCallback[refreshData]": function() {
            return fetchAllData(true);
        }
    }["AppDataProvider.useCallback[refreshData]"], [
        fetchAllData
    ]);
    // Effect: Preload media if data is already available (e.g. from cache)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppDataProvider.useEffect": function() {
            if (data.home || data.exhibitions) {
                preloadMedia(data);
            }
        }
    }["AppDataProvider.useEffect"], [
        data
    ]);
    var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, data), {
        isMenuOpen: isMenuOpen,
        toggleMenu: toggleMenu,
        fetchAllData: fetchAllData,
        refreshData: refreshData
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppDataContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/AppDataContext.js",
        lineNumber: 194,
        columnNumber: 5
    }, _this);
};
_s(AppDataProvider, "Qdt1iz7auYB2HSxWt7FHBp8c3hc=");
_c = AppDataProvider;
var useAppData = function() {
    _s1();
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppDataContext);
    if (!context) {
        throw new Error('useAppData must be used within AppDataProvider');
    }
    return context;
};
_s1(useAppData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var getAppData = function() {
    return appDataStore;
};
var _c;
__turbopack_context__.k.register(_c, "AppDataProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToTop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Shim for useNavigationType
var useNavigationType = function() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PUSH'), 2), type = _useState[0], setType = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavigationType.useEffect": function() {
            var handlePopState = {
                "useNavigationType.useEffect.handlePopState": function() {
                    return setType('POP');
                }
            }["useNavigationType.useEffect.handlePopState"];
            var handlePushState = {
                "useNavigationType.useEffect.handlePushState": function() {
                    return setType('PUSH');
                }
            }["useNavigationType.useEffect.handlePushState"]; // Next.js doesn't emit this natively for Link
            // This is an imperfect shim. Ideally we'd wrap the router or use a library.
            // For now, we rely on popstate.
            window.addEventListener('popstate', handlePopState);
            return ({
                "useNavigationType.useEffect": function() {
                    return window.removeEventListener('popstate', handlePopState);
                }
            })["useNavigationType.useEffect"];
        }
    }["useNavigationType.useEffect"], []);
    return type;
};
_s(useNavigationType, "F+AEAaoi734vUagIL3dVVmJt4No=");
/**
 * 페이지 이동 시 스크롤 위치를 고도로 정밀하게 관리하는 컴포넌트입니다.
 */ var ScrollToTop = function() {
    _s1();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Combine to mimic location object partially
    var location = {
        pathname: pathname,
        key: pathname + searchParams.toString()
    };
    var navType = useNavigationType();
    var isInitialAppLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    var isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var lastCapturedY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var prevPathnameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(location.pathname);
    var prevKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(location.key);
    var restorationCleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. 전역 설정
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": function() {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
        }
    }["ScrollToTop.useEffect"], []);
    // 2. 실시간 스크롤 추적 (0 포함 모든 위치 저장)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": function() {
            var handleScroll = {
                "ScrollToTop.useEffect.handleScroll": function() {
                    if (!isRestoring.current) {
                        lastCapturedY.current = window.scrollY;
                    }
                }
            }["ScrollToTop.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "ScrollToTop.useEffect": function() {
                    return window.removeEventListener('scroll', handleScroll);
                }
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    // 3. 페이지 전환 로직
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ScrollToTop.useLayoutEffect": function() {
            if (restorationCleanupRef.current) {
                restorationCleanupRef.current();
                restorationCleanupRef.current = null;
            }
            var isSamePage = prevPathnameRef.current === location.pathname;
            var cacheKey = "scroll_".concat(location.key);
            // 페이지 이탈 전 현재 위치 저장
            if (!isInitialAppLoad.current) {
                try {
                    sessionStorage.setItem("scroll_".concat(prevKeyRef.current), lastCapturedY.current.toString());
                } catch (e) {}
            }
            if (navType === 'POP' && !isInitialAppLoad.current) {
                // CASE 1: 뒤로가기 복원
                var savedPos = sessionStorage.getItem(cacheKey);
                var restoreY = savedPos ? parseInt(savedPos, 10) : 0;
                if (restoreY > 0) {
                    isRestoring.current = true;
                    var htmlStyle = document.documentElement.style;
                    var originalMinHeight = htmlStyle.minHeight;
                    htmlStyle.minHeight = restoreY + window.innerHeight + 500 + 'px';
                    var perform = {
                        "ScrollToTop.useLayoutEffect.perform": function() {
                            if (isRestoring.current) window.scrollTo({
                                top: restoreY,
                                behavior: 'instant'
                            });
                        }
                    }["ScrollToTop.useLayoutEffect.perform"];
                    perform();
                    var interval = setInterval(perform, 16);
                    var observer = new ResizeObserver(perform);
                    observer.observe(document.body);
                    var stop = {
                        "ScrollToTop.useLayoutEffect.stop": function() {
                            if (!isRestoring.current) return;
                            isRestoring.current = false;
                            clearInterval(interval);
                            observer.disconnect();
                            htmlStyle.minHeight = originalMinHeight;
                            lastCapturedY.current = window.scrollY; // 실제 안착한 위치 캡처
                        }
                    }["ScrollToTop.useLayoutEffect.stop"];
                    window.addEventListener('wheel', stop, {
                        passive: true
                    });
                    window.addEventListener('touchstart', stop, {
                        passive: true
                    });
                    var timer = setTimeout(stop, 2500);
                    restorationCleanupRef.current = ({
                        "ScrollToTop.useLayoutEffect": function() {
                            clearTimeout(timer);
                            stop();
                        }
                    })["ScrollToTop.useLayoutEffect"];
                }
            } else if (isSamePage && !isInitialAppLoad.current) {
                // CASE 2: 동일 페이지 이동 (연도 변경)
                var targetY = lastCapturedY.current;
                // 이미 상단에 가깝다면 고정하지 않고 자연스럽게 이동하도록 둠
                if (targetY > 10) {
                    isRestoring.current = true;
                    var htmlStyle1 = document.documentElement.style;
                    var originalMinHeight1 = htmlStyle1.minHeight;
                    htmlStyle1.minHeight = targetY + window.innerHeight + 'px';
                    var pin = {
                        "ScrollToTop.useLayoutEffect.pin": function() {
                            if (isRestoring.current) window.scrollTo({
                                top: targetY,
                                behavior: 'instant'
                            });
                        }
                    }["ScrollToTop.useLayoutEffect.pin"];
                    pin();
                    var interval1 = setInterval(pin, 16);
                    var observer1 = new ResizeObserver(pin);
                    observer1.observe(document.body);
                    var stop1 = {
                        "ScrollToTop.useLayoutEffect.stop": function() {
                            if (!isRestoring.current) return;
                            isRestoring.current = false;
                            clearInterval(interval1);
                            observer1.disconnect();
                            htmlStyle1.minHeight = originalMinHeight1;
                            // [중요] 연도 변경 후 콘텐츠가 짧아 위로 딸려 올라갔다면 그 위치(예: 0)를 새로운 '기억'으로 저장
                            lastCapturedY.current = window.scrollY;
                        }
                    }["ScrollToTop.useLayoutEffect.stop"];
                    // 연도 변경은 비교적 빠르므로 0.4초간만 강제 고정
                    var timer1 = setTimeout(stop1, 400);
                    restorationCleanupRef.current = ({
                        "ScrollToTop.useLayoutEffect": function() {
                            clearTimeout(timer1);
                            stop1();
                        }
                    })["ScrollToTop.useLayoutEffect"];
                }
            } else {
                // CASE 3: 신규 페이지 진입
                window.scrollTo(0, 0);
                lastCapturedY.current = 0;
            }
            isInitialAppLoad.current = false;
            prevPathnameRef.current = location.pathname;
            prevKeyRef.current = location.key;
            return ({
                "ScrollToTop.useLayoutEffect": function() {
                    if (restorationCleanupRef.current) {
                        restorationCleanupRef.current();
                        restorationCleanupRef.current = null;
                    }
                }
            })["ScrollToTop.useLayoutEffect"];
        }
    }["ScrollToTop.useLayoutEffect"], [
        location,
        navType
    ]);
    return null;
};
_s1(ScrollToTop, "HfKxGAYgV9vJtML5RMzqjfoTnhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        useNavigationType
    ];
});
_c = ScrollToTop;
const __TURBOPACK__default__export__ = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/back-arrow.bb3de0ef.png");}),
"[project]/src/assets/icons/back-arrow.png.mjs { IMAGE => \"[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 44,
    height: 20,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAL0lEQVR42oXNOQ0AIBQE0TFAhRQQgwEE4L9hBPxjk9dtMgBDR5NkT1dbK9AfysQHV4AFA3GR014AAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-client] (ecmascript)");
// 화살표 이미지를 import합니다.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/icons/back-arrow.png.mjs { IMAGE => "[project]/src/assets/icons/back-arrow.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
var Menu = function() {
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    var location = {
        pathname: pathname
    };
    var _useAppData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppData"])(), isMenuOpen = _useAppData.isMenuOpen, toggleMenu = _useAppData.toggleMenu, refreshData = _useAppData.refreshData, loading = _useAppData.loading;
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false), 2), isClosing = _React_useState[0], setIsClosing = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false), 2), openingImmediate = _React_useState1[0], setOpeningImmediate = _React_useState1[1];
    var isPopStateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    var isNavigatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    // 메뉴 닫기 함수
    var handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Menu.useCallback[handleClose]": function() {
            var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            if (immediate || isPopStateRef.current) {
                if (isMenuOpen) toggleMenu();
                setIsClosing(false);
                setOpeningImmediate(false);
                return;
            }
            setIsClosing(true);
            setTimeout({
                "Menu.useCallback[handleClose]": function() {
                    if (isMenuOpen) toggleMenu();
                    setIsClosing(false);
                }
            }["Menu.useCallback[handleClose]"], 300);
        }
    }["Menu.useCallback[handleClose]"], [
        isMenuOpen,
        toggleMenu
    ]);
    // Effect: 경로 변경 시 메뉴 닫기 (네비게이션 완료 후 동작)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Menu.useEffect": function() {
            if (isMenuOpen) {
                handleClose();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Menu.useEffect"], [
        pathname,
        searchParams
    ]);
    // Effect 1: 히스토리 감지 (팝스테이트 리스너)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Menu.useEffect": function() {
            var handlePopState = {
                "Menu.useEffect.handlePopState": function(e) {
                    var _e_state;
                    isPopStateRef.current = true;
                    var isMenuState = ((_e_state = e.state) === null || _e_state === void 0 ? void 0 : _e_state.modal) === 'menu';
                    if (isMenuState && !isMenuOpen) {
                        setOpeningImmediate(true);
                        toggleMenu();
                    } else if (!isMenuState && isMenuOpen) {
                        handleClose(true);
                    }
                    setTimeout({
                        "Menu.useEffect.handlePopState": function() {
                            isPopStateRef.current = false;
                        }
                    }["Menu.useEffect.handlePopState"], 100);
                }
            }["Menu.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            return ({
                "Menu.useEffect": function() {
                    window.removeEventListener('popstate', handlePopState);
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], [
        isMenuOpen,
        toggleMenu,
        handleClose
    ]);
    // Effect 1.5: 초기 로드 시 복원 (마운트 시 1회만 실행)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Menu.useEffect": function() {
            var _window_history_state;
            if (((_window_history_state = window.history.state) === null || _window_history_state === void 0 ? void 0 : _window_history_state.modal) === 'menu' && !isMenuOpen) {
                setOpeningImmediate(true);
                toggleMenu();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Menu.useEffect"], []);
    // Effect 2: 메뉴 상태에 따른 부가 효과
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Menu.useEffect": function() {
            var _window_history_state;
            if (!isMenuOpen) return;
            var scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = "-".concat(scrollY, "px");
            document.body.style.width = '100%';
            if (((_window_history_state = window.history.state) === null || _window_history_state === void 0 ? void 0 : _window_history_state.modal) !== 'menu') {
                window.history.pushState({
                    modal: 'menu'
                }, '');
            }
            var handleKeyDown = {
                "Menu.useEffect.handleKeyDown": function(e) {
                    if (e.key === 'Escape' && isMenuOpen) {
                        window.history.back();
                    }
                }
            }["Menu.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Menu.useEffect": function() {
                    window.removeEventListener('keydown', handleKeyDown);
                    if (isMenuOpen) {
                        var savedScrollY = document.body.style.top;
                        document.body.style.position = '';
                        document.body.style.top = '';
                        document.body.style.width = '';
                        if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY) * -1);
                    }
                    isNavigatingRef.current = false;
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], [
        isMenuOpen,
        toggleMenu
    ]);
    var handleRefresh = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            refreshData()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var handleNavigate = function(path) {
        if (location.pathname === path) {
            window.history.back();
        } else {
            isNavigatingRef.current = true;
            router.replace(path);
        // toggleMenu(); // <-- Removed: Let useEffect handle closing on route change
        }
    };
    if (!isMenuOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "menu-container ".concat(isClosing ? 'is-closing' : '', " ").concat(openingImmediate ? 'no-animation' : ''),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "back-arrow",
                onClick: function() {
                    return window.history.back();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$back$2d$arrow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Back Arrow",
                    className: "arrow-icon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Menu.js",
                    lineNumber: 137,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.js",
                lineNumber: 135,
                columnNumber: 9
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-items",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: function() {
                            return handleNavigate('/');
                        },
                        children: "HOME"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: function() {
                            return handleNavigate('/works');
                        },
                        children: "WORKS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: function() {
                            return handleNavigate('/exhibition');
                        },
                        children: "EXHIBITION"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: function() {
                            return handleNavigate('/cv');
                        },
                        children: "CV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-button",
                        onClick: function() {
                            return handleNavigate('/about');
                        },
                        children: "ABOUT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Menu.js",
                lineNumber: 140,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "refresh-button",
                onClick: handleRefresh,
                disabled: loading,
                children: loading ? 'REFRESHING...' : 'REFRESH'
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.js",
                lineNumber: 148,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Menu.js",
        lineNumber: 132,
        columnNumber: 7
    }, _this);
};
_s(Menu, "FpHbOWk49neTfuK2W1ida/xnuwo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppData"]
    ];
});
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/ClientLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollToTop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function ClientLayout(param) {
    var children = param.children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppDataProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollToTop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ClientLayout.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ClientLayout.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_37cc6eb1._.js.map