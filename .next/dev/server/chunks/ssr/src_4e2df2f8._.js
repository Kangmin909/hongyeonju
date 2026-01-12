module.exports = [
"[project]/src/components/Skeleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonBox",
    ()=>SkeletonBox,
    "SkeletonCVItem",
    ()=>SkeletonCVItem,
    "SkeletonExhibitionItem",
    ()=>SkeletonExhibitionItem,
    "SkeletonHomeImage",
    ()=>SkeletonHomeImage,
    "SkeletonImage",
    ()=>SkeletonImage,
    "SkeletonText",
    ()=>SkeletonText,
    "SkeletonWorkItem",
    ()=>SkeletonWorkItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const SkeletonBox = ({ width, height, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `skeleton-box ${className}`,
        style: {
            width,
            height
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SkeletonText = ({ lines = 1, width = '100%' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-text-container",
        children: Array.from({
            length: lines
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-text",
                style: {
                    width: index === lines - 1 ? '80%' : width,
                    marginBottom: index < lines - 1 ? '6px' : '0'
                }
            }, index, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SkeletonImage = ({ width = '100%', height = '200px', className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `skeleton-image ${className}`,
        style: {
            width,
            height
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SkeletonWorkItem = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-work-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonImage, {
                height: "auto",
                className: "skeleton-work-image"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-work-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "60%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "80%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SkeletonExhibitionItem = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-exhibition-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonImage, {
                height: "auto",
                className: "skeleton-exhibition-image"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-exhibition-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBox, {
                        width: "70%",
                        height: "24px",
                        style: {
                            marginBottom: '10px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "50%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "60%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SkeletonCVItem = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-cv-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBox, {
                width: "34px",
                height: "17px"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                lines: 1,
                width: "200px"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SkeletonHomeImage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-home-image",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonImage, {
            width: "100%",
            height: "100%"
        }, void 0, false, {
            fileName: "[project]/src/components/Skeleton.js",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/MediaDisplay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
// 한 번 로드된 이미지 URL을 기억하여 재방문 시 깜빡임을 방지합니다.
const loadedImageCache = new Set();
// 유튜브 URL에서 비디오 ID 추출
const getYouTubeVideoId = (url)=>{
    if (!url) return null;
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    for (const pattern of patterns){
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
};
// 유튜브 URL인지 확인
const isYouTubeUrl = (url)=>{
    return getYouTubeVideoId(url) !== null;
};
// MediaDisplay 컴포넌트
const MediaDisplay = ({ src, alt, className, autoplay = false, controls = false, onClick })=>{
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 항상 로딩 상태로 시작하여 프레임 공간을 확보함 (캐시된 이미지라도 마운트 직후 레이아웃 잡는 시간 확보)
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded && src) {
            loadedImageCache.add(src);
        }
    }, [
        isLoaded,
        src
    ]);
    // 마운트 시 이미지가 이미 로드되어 있는지 확인 (브라우저 캐시 대응)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (imgRef.current && imgRef.current.complete) {
            setIsLoaded(true);
        }
    }, []);
    // 로딩 상태 결정: 에러가 없고 아직 로드되지 않았을 때만 shimmer 표시
    const shouldShowShimmer = !isLoaded && !hasError && src;
    const wrapperClass = `media-placeholder-wrapper ${shouldShowShimmer ? 'loading-shimmer' : ''} ${isLoaded ? 'is-loaded' : ''} ${className || ''}`;
    if (hasError || !src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: wrapperClass,
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f2f2f2',
                aspectRatio: '4 / 3',
                width: '100%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-error-message",
                children: "이미지를 불러오지 못했습니다."
            }, void 0, false, {
                fileName: "[project]/src/components/MediaDisplay.js",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const clickOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        zIndex: 10,
        background: 'transparent'
    };
    if (isYouTubeUrl(src)) {
        const videoId = getYouTubeVideoId(src);
        const autoplayParams = 'autoplay=1&mute=1&loop=1&playlist=' + videoId;
        const embedUrl = `https://www.youtube.com/embed/${videoId}?${autoplayParams}`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: wrapperClass,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-container",
                style: {
                    opacity: isLoaded ? 1 : 0,
                    position: isLoaded ? 'relative' : 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: embedUrl,
                        title: alt || 'YouTube video',
                        className: "media-iframe",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true,
                        onLoad: ()=>setIsLoaded(true),
                        onError: ()=>setHasError(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MediaDisplay.js",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isLoaded && onClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: clickOverlayStyle,
                        onClick: onClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/MediaDisplay.js",
                        lineNumber: 112,
                        columnNumber: 35
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MediaDisplay.js",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 90,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Ensure src is a string before checking extension
    const srcString = String(src || "");
    if (srcString.toLowerCase().endsWith('.mp4')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: wrapperClass,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: imgRef,
                    src: src,
                    className: "media-element",
                    autoPlay: autoplay,
                    muted: autoplay,
                    loop: autoplay,
                    playsInline: true,
                    controls: controls,
                    onLoadedData: ()=>setIsLoaded(true),
                    onError: ()=>setHasError(true),
                    onClick: onClick,
                    style: {
                        opacity: isLoaded ? 1 : 0,
                        position: isLoaded ? 'static' : 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        ...onClick ? {
                            cursor: 'pointer'
                        } : {}
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/MediaDisplay.js",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isLoaded && onClick && !controls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: clickOverlayStyle,
                    onClick: onClick
                }, void 0, false, {
                    fileName: "[project]/src/components/MediaDisplay.js",
                    lineNumber: 145,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 123,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            ref: imgRef,
            src: src,
            alt: alt || "Media content",
            className: "media-element",
            loading: "eager",
            /* 즉시 로딩 강제 */ onLoad: ()=>setIsLoaded(true),
            onError: ()=>setHasError(true),
            onClick: onClick,
            style: {
                opacity: isLoaded ? 1 : 0,
                position: isLoaded ? 'static' : 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                ...onClick ? {
                    cursor: 'pointer'
                } : {}
            }
        }, void 0, false, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 152,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/MediaDisplay.js",
        lineNumber: 151,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MediaDisplay;
}),
"[project]/src/components/YearNav.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Skeleton.js [app-ssr] (ecmascript)");
;
;
;
/**
 * 연도 네비게이션 공용 컴포넌트
 * props:
 * - years: 연도 배열
 * - selectedYear: 현재 선택된 연도
 * - onSelect: 연도 클릭 시 콜백(year => void)
 * - loading: 로딩 상태일 때 스켈레톤 표시
 * - className: 추가 클래스
 */ const YearNav = ({ years, selectedYear, onSelect, loading = false, className = '' })=>{
    const yearsArray = Array.isArray(years) ? years : [];
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startX, setStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollLeft, setScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [moved, setMoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 선택된 연도가 화면 밖으로 나갔을 경우 중앙으로 스크롤
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedYear && scrollRef.current) {
            const activeElement = scrollRef.current.querySelector('.year.active');
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
    }, [
        selectedYear
    ]);
    const onMouseDown = (e)=>{
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        setMoved(false);
    };
    const onMouseLeave = ()=>{
        setIsDragging(false);
    };
    const onMouseUp = (e)=>{
        setIsDragging(false);
    };
    const onMouseMove = (e)=>{
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // 스크롤 속도 배율
        if (Math.abs(walk) > 5) setMoved(true);
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleYearClick = (year)=>{
        // 드래그 중에는 클릭 이벤트가 발생하지 않도록 방지
        if (!moved) {
            onSelect(year);
        }
    };
    const renderSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 68,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 68,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 69,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 69,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 70,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 70,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 71,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 71,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 72,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 72,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `year-nav ${className} ${isDragging ? 'grabbing' : ''}`.trim(),
        ref: scrollRef,
        onMouseDown: onMouseDown,
        onMouseLeave: onMouseLeave,
        onMouseUp: onMouseUp,
        onMouseMove: onMouseMove,
        style: {
            cursor: isDragging ? 'grabbing' : 'grab'
        },
        children: loading || yearsArray.length === 0 ? renderSkeleton() : yearsArray.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `year ${selectedYear === year ? 'active' : ''}`,
                onClick: ()=>handleYearClick(year),
                children: year
            }, year, false, {
                fileName: "[project]/src/components/YearNav.js",
                lineNumber: 89,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/YearNav.js",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = YearNav;
}),
"[project]/src/hooks/useTouchHandlers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTouchHandlers",
    ()=>useTouchHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useTouchHandlers = ({ zoom, setZoom, offset, setOffset, viewportRef, currentIndex, imagesLength, containerWidth, onClose, handlePrev, handleNext, resetHideTimer, setIsDraggingState, state, resetZoom })=>{
    // state is passed from parent
    // Calculate clamped offset to keep image within viewport
    const getClampedOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newX, newY, currentZoom)=>{
        if (!viewportRef.current) return {
            x: newX,
            y: newY
        };
        const vWidth = viewportRef.current.offsetWidth;
        const vHeight = viewportRef.current.offsetHeight;
        const iWidth = vWidth * currentZoom;
        const iHeight = vHeight * currentZoom;
        let maxX = 0, maxY = 0;
        if (iWidth > vWidth) maxX = (iWidth - vWidth) / 2;
        if (iHeight > vHeight) maxY = (iHeight - vHeight) / 2;
        return {
            x: Math.max(-maxX, Math.min(maxX, newX)),
            y: Math.max(-maxY, Math.min(maxY, newY))
        };
    }, [
        viewportRef
    ]);
    // Handle Touch Start
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        resetHideTimer();
        // 1. Pinch Start (2 fingers)
        if (e.touches.length === 2) {
            state.current.isPinching = true;
            const t1 = e.touches[0];
            const t2 = e.touches[1];
            state.current.initialPinchDistance = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
            state.current.initialZoom = zoom;
            state.current.initialOffset = offset;
            // Calculate pinch center relative to viewport
            if (viewportRef.current) {
                const rect = viewportRef.current.getBoundingClientRect();
                const vCenterX = rect.left + rect.width / 2;
                const vCenterY = rect.top + rect.height / 2;
                state.current.initialPinchCenter = {
                    x: (t1.clientX + t2.clientX) / 2 - vCenterX,
                    y: (t1.clientY + t2.clientY) / 2 - vCenterY
                };
            } else {
                state.current.initialPinchCenter = {
                    x: 0,
                    y: 0
                };
            }
            return;
        }
        // 2. Swipe/Drag Start (1 finger)
        const touch = e.touches[0];
        // Prevent conflict with iOS back swipe (left edge)
        if (touch.clientX < 40) return;
        state.current.isDragging = true;
        setIsDraggingState(true);
        state.current.initialClient = {
            x: touch.clientX,
            y: touch.clientY
        };
        state.current.initialZoom = zoom;
        state.current.initialOffset = offset;
        state.current.hasMoved = false;
        state.current.dragType = null;
    }, [
        zoom,
        offset,
        resetHideTimer,
        setIsDraggingState,
        viewportRef,
        state
    ]);
    // Handle Touch Move
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // 1. Pinch Move
        if (state.current.isPinching && e.touches.length === 2) {
            const t1 = e.touches[0];
            const t2 = e.touches[1];
            const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
            const scale = dist / state.current.initialPinchDistance;
            const newZoom = Math.min(Math.max(state.current.initialZoom * scale, 1), 5);
            let newX = 0, newY = 0;
            if (viewportRef.current) {
                const rect = viewportRef.current.getBoundingClientRect();
                const vCenterX = rect.left + rect.width / 2;
                const vCenterY = rect.top + rect.height / 2;
                const currentPinchCenter = {
                    x: (t1.clientX + t2.clientX) / 2 - vCenterX,
                    y: (t1.clientY + t2.clientY) / 2 - vCenterY
                };
                const ratio = newZoom / state.current.initialZoom;
                const dx = state.current.initialPinchCenter.x - state.current.initialOffset.x;
                const dy = state.current.initialPinchCenter.y - state.current.initialOffset.y;
                newX = currentPinchCenter.x - dx * ratio;
                newY = currentPinchCenter.y - dy * ratio;
            }
            setZoom(newZoom);
            setOffset(getClampedOffset(newX, newY, newZoom));
            return;
        }
        // 2. Swipe/Drag Move
        if (!state.current.isDragging || e.touches.length > 1) return;
        const touch = e.touches[0];
        const dx = touch.clientX - state.current.initialClient.x;
        const dy = touch.clientY - state.current.initialClient.y;
        if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
            state.current.hasMoved = true;
        }
        if (zoom > 1) {
            // Pan when zoomed in
            setOffset(getClampedOffset(state.current.initialOffset.x + dx, state.current.initialOffset.y + dy, zoom));
        } else {
            // Swipe or Dismiss when zoomed out
            if (!state.current.dragType) {
                if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
                else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
            }
            if (state.current.dragType === 'dismiss') {
                setOffset({
                    x: 0,
                    y: Math.max(0, dy)
                });
            } else if (state.current.dragType === 'swipe') {
                let newX = state.current.initialOffset.x + dx;
                // Rubber-banding effect
                if (currentIndex === 0 && newX > 0) newX = newX * 0.3;
                if (currentIndex === imagesLength - 1 && newX < 0) newX = newX * 0.3;
                setOffset({
                    x: newX,
                    y: 0
                });
            }
        }
    }, [
        zoom,
        currentIndex,
        imagesLength,
        getClampedOffset,
        setOffset,
        setZoom,
        viewportRef,
        state
    ]);
    // Handle Touch End
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // 1. Pinch End
        if (state.current.isPinching && e.touches.length < 2) {
            state.current.isPinching = false;
            // Smooth transition to drag if 1 finger remains
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                state.current.isDragging = true;
                setIsDraggingState(true);
                state.current.initialClient = {
                    x: touch.clientX,
                    y: touch.clientY
                };
                state.current.initialOffset = offset;
                state.current.initialZoom = zoom;
                state.current.hasMoved = false;
                state.current.dragType = null;
            }
            return;
        }
        if (e.touches.length > 0) return;
        // 2. Drag End
        if (state.current.isDragging && zoom === 1) {
            if (state.current.dragType === 'dismiss' && offset.y > 100) {
                onClose();
                return;
            } else if (state.current.dragType === 'swipe') {
                const threshold = containerWidth * 0.2;
                if (offset.x > threshold) handlePrev();
                else if (offset.x < -threshold) handleNext();
            }
            setOffset({
                x: 0,
                y: 0
            });
        }
        state.current.isDragging = false;
        setIsDraggingState(false);
        state.current.dragType = null;
    }, [
        zoom,
        offset,
        containerWidth,
        onClose,
        handlePrev,
        handleNext,
        setIsDraggingState,
        setOffset,
        state
    ]);
    // Double Tap Zoom logic
    const handleDoubleTapZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX, clientY, target)=>{
        if (zoom > 1) {
            setZoom(1);
            setOffset({
                x: 0,
                y: 0
            });
            state.current.dragType = null;
        } else {
            const rect = target.getBoundingClientRect();
            const x = clientX - (rect.left + rect.width / 2);
            const y = clientY - (rect.top + rect.height / 2);
            const targetZoom = 2.5;
            setZoom(targetZoom);
            setOffset(getClampedOffset(-x * (targetZoom - 1), -y * (targetZoom - 1), targetZoom));
        }
    }, [
        zoom,
        setZoom,
        setOffset,
        getClampedOffset,
        state
    ]);
    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleDoubleTapZoom,
        getClampedOffset
    };
};
}),
"[project]/src/hooks/useMediaQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useMediaQuery = (query)=>{
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const media = undefined;
        const listener = undefined;
    }, [
        query
    ]);
    return matches;
};
}),
"[project]/src/components/ImageModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTouchHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTouchHandlers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ImageModal = ({ images = [], initialIndex = 0, onClose })=>{
    const isFinePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(pointer: fine)');
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialIndex);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [containerWidth, setContainerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(window.innerWidth);
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDraggingState, setIsDraggingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounting, setIsMounting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clickTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hideTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        dragType: null,
        isDragging: false,
        hasMoved: false,
        initialClient: {
            x: 0,
            y: 0
        },
        initialZoom: 1,
        initialOffset: {
            x: 0,
            y: 0
        },
        isPinching: false,
        initialPinchDistance: 0,
        initialPinchCenter: {
            x: 0,
            y: 0
        }
    });
    const resetHideTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        if (isFinePointer) {
            hideTimerRef.current = setTimeout(()=>{
                setShowControls(false);
            }, 2500);
        }
    }, [
        isFinePointer
    ]);
    const resetZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setZoom(1);
        setOffset({
            x: 0,
            y: 0
        });
        state.current.dragType = null;
    }, []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prev)=>prev + 1);
            resetZoom();
        }
    }, [
        currentIndex,
        images.length,
        resetZoom
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentIndex > 0) {
            setCurrentIndex((prev)=>prev - 1);
            resetZoom();
        }
    }, [
        currentIndex,
        resetZoom
    ]);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    const isPopStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCloseRef.current = onClose;
    }, [
        onClose
    ]);
    // Effect 1: History & Scroll Locking (Position: Fixed 방식 원복)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scrollY = window.scrollY;
        const initialPath = window.location.pathname;
        const originalScrollRestoration = window.history.scrollRestoration;
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        // 현재 위치 고정
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
        const historyTimer = setTimeout(()=>{
            const currentUrl = window.location.pathname + window.location.search;
            window.history.pushState({
                modal: 'image'
            }, '', currentUrl);
        }, 10);
        const handlePopState = ()=>{
            isPopStateRef.current = true;
            if (onCloseRef.current) onCloseRef.current();
        };
        window.addEventListener('popstate', handlePopState);
        const timer = setTimeout(()=>setIsMounting(false), 50);
        const updateWidth = ()=>{
            if (viewportRef.current) setContainerWidth(viewportRef.current.getBoundingClientRect().width);
        };
        const resizeObserver = new ResizeObserver(()=>{
            setIsResizing(true);
            updateWidth();
            resetZoom();
            if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
            resizeTimerRef.current = setTimeout(()=>setIsResizing(false), 300);
        });
        if (viewportRef.current) resizeObserver.observe(viewportRef.current);
        return ()=>{
            window.removeEventListener('popstate', handlePopState);
            clearTimeout(historyTimer);
            if (!isPopStateRef.current && window.history.state?.modal === 'image') {
                window.history.back();
            }
            const scrollPos = document.body.style.top;
            const currentPath = window.location.pathname;
            // 스타일 복구
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = originalScrollRestoration || 'auto';
            }
            // 같은 페이지일 때만 수동 스크롤 복구
            if (scrollPos && currentPath === initialPath) {
                const restoreY = Math.abs(parseInt(scrollPos, 10));
                requestAnimationFrame(()=>window.scrollTo(0, restoreY));
            }
            clearTimeout(timer);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            resizeObserver.disconnect();
        };
    }, [
        resetZoom
    ]);
    // Effect 2: Event Listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resetHideTimer();
        const handleKeyDown = (e)=>{
            setShowControls(true);
            resetHideTimer();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onCloseRef.current?.();
        };
        const handleGlobalMouseMove = ()=>{
            if (isFinePointer) {
                setShowControls(true);
                resetHideTimer();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousemove', handleGlobalMouseMove);
        return ()=>{
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [
        handleNext,
        handlePrev,
        resetHideTimer,
        isFinePointer
    ]);
    const { handleTouchStart, handleTouchMove, handleTouchEnd, handleDoubleTapZoom, getClampedOffset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTouchHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTouchHandlers"])({
        zoom,
        setZoom,
        offset,
        setOffset,
        viewportRef,
        currentIndex,
        imagesLength: images.length,
        containerWidth,
        onClose,
        handlePrev,
        handleNext,
        resetHideTimer,
        setIsDraggingState,
        state,
        resetZoom
    });
    const handleContainerClick = (e)=>{
        if (state.current.hasMoved) return;
        const { clientX, clientY, target } = e;
        if (clickTimerRef.current) {
            clearTimeout(clickTimerRef.current);
            clickTimerRef.current = null;
            handleDoubleTapZoom(clientX, clientY, target);
        } else {
            clickTimerRef.current = setTimeout(()=>{
                setShowControls((prev)=>{
                    const next = !prev;
                    if (next) resetHideTimer();
                    else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    return next;
                });
                clickTimerRef.current = null;
            }, 250);
        }
    };
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        resetHideTimer();
        state.current.isDragging = true;
        setIsDraggingState(true);
        state.current.initialClient = {
            x: e.clientX,
            y: e.clientY
        };
        state.current.initialOffset = offset;
        state.current.hasMoved = false;
        state.current.dragType = null;
    }, [
        offset,
        resetHideTimer
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!state.current.isDragging || e.touches) return;
        const dx = e.clientX - state.current.initialClient.x;
        const dy = e.clientY - state.current.initialClient.y;
        if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
            state.current.hasMoved = true;
            setShowControls(true);
            resetHideTimer();
        }
        if (zoom > 1) {
            setOffset(getClampedOffset(state.current.initialOffset.x + dx, state.current.initialOffset.y + dy, zoom));
        } else {
            if (!state.current.dragType) {
                if (Math.abs(dy) > Math.abs(dx) && dy > 0) state.current.dragType = 'dismiss';
                else if (Math.abs(dx) > Math.abs(dy)) state.current.dragType = 'swipe';
            }
            if (state.current.dragType === 'dismiss') {
                setOffset({
                    x: 0,
                    y: Math.max(0, dy)
                });
            } else if (state.current.dragType === 'swipe') {
                let newX = state.current.initialOffset.x + dx;
                if (currentIndex === 0 && newX > 0) newX = newX * 0.3;
                if (currentIndex === images.length - 1 && newX < 0) newX = newX * 0.3;
                setOffset({
                    x: newX,
                    y: 0
                });
            }
        }
    }, [
        zoom,
        getClampedOffset,
        resetHideTimer,
        currentIndex,
        images.length
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (state.current.isDragging && zoom === 1) {
            if (state.current.dragType === 'dismiss' && offset.y > 100) {
                onClose();
                return;
            } else if (state.current.dragType === 'swipe') {
                const threshold = containerWidth * 0.2;
                if (offset.x > threshold) handlePrev();
                else if (offset.x < -threshold) handleNext();
            }
            setOffset({
                x: 0,
                y: 0
            });
        }
        state.current.isDragging = false;
        setIsDraggingState(false);
        state.current.dragType = null;
    }, [
        zoom,
        offset.y,
        offset.x,
        handleNext,
        handlePrev,
        onClose,
        containerWidth
    ]);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.2 : 0.2;
        const newZoom = Math.min(Math.max(zoom + delta, 1), 5);
        if (newZoom === zoom) return;
        if (newZoom === 1) {
            resetZoom();
            return;
        }
        if (!viewportRef.current) return;
        const rect = viewportRef.current.getBoundingClientRect();
        const mouseX = e.clientX - (rect.left + rect.width / 2);
        const mouseY = e.clientY - (rect.top + rect.height / 2);
        const ratio = newZoom / zoom;
        setZoom(newZoom);
        setOffset(getClampedOffset(mouseX - (mouseX - offset.x) * ratio, mouseY - (mouseY - offset.y) * ratio, newZoom));
    }, [
        zoom,
        offset,
        resetZoom,
        getClampedOffset
    ]);
    const overlayOpacity = state.current.dragType === 'dismiss' ? Math.max(1 - offset.y / 600, 0) : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `image-modal-overlay ${isDraggingState ? 'is-dragging' : ''}`,
        style: {
            backgroundColor: `rgba(0, 0, 0, ${1.0 * overlayOpacity})`,
            transform: state.current.dragType === 'dismiss' ? `translate3d(0, ${offset.y}px, 0)` : 'none'
        },
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onClick: handleContainerClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "image-modal-content-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `image-modal-header-bar ${!showControls ? 'hidden' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-universal-back-btn",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onClose();
                            },
                            "aria-label": "Back",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "19",
                                        y1: "12",
                                        x2: "5",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImageModal.js",
                                        lineNumber: 284,
                                        columnNumber: 158
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "12 19 5 12 12 5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImageModal.js",
                                        lineNumber: 284,
                                        columnNumber: 202
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImageModal.js",
                                lineNumber: 284,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 283,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "image-modal-info",
                            children: [
                                currentIndex + 1,
                                " / ",
                                images.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 286,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 282,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `modal-nav-btn prev ${currentIndex === 0 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`,
                    onClick: (e)=>{
                        e.stopPropagation();
                        handlePrev();
                    },
                    disabled: currentIndex === 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "15 18 9 12 15 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 289,
                            columnNumber: 154
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 289,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 288,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `modal-nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''} ${!showControls ? 'hidden' : ''}`,
                    onClick: (e)=>{
                        e.stopPropagation();
                        handleNext();
                    },
                    disabled: currentIndex === images.length - 1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "9 18 15 12 9 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 292,
                            columnNumber: 154
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 292,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 291,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "image-modal-wrapper fullscreen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-modal-viewport fullscreen",
                        ref: viewportRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slider-container",
                            style: {
                                transform: `translate3d(${-currentIndex * (containerWidth + 40) + (state.current.dragType === 'swipe' ? offset.x : 0)}px, 0, 0)`,
                                transition: isDraggingState || isMounting || isResizing ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            },
                            children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slide-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "media-movable-content",
                                        style: idx === currentIndex ? {
                                            transform: `translate(${zoom > 1 ? offset.x : 0}px, ${zoom > 1 ? offset.y : 0}px) scale(${zoom})`,
                                            transition: isDraggingState ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)'
                                        } : {},
                                        onWheel: idx === currentIndex ? handleWheel : null,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img.link,
                                            alt: img.title || '',
                                            className: "image-modal-img-internal fullscreen",
                                            draggable: "false"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImageModal.js",
                                            lineNumber: 306,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImageModal.js",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, idx, false, {
                                    fileName: "[project]/src/components/ImageModal.js",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 296,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 295,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 294,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `image-modal-footer-bar ${!showControls ? 'hidden' : ''}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-modal-caption",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "caption-title",
                                children: images[currentIndex]?.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageModal.js",
                                lineNumber: 315,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "caption-meta",
                                children: images[currentIndex]?.meta
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageModal.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 314,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 313,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageModal.js",
            lineNumber: 281,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ImageModal.js",
        lineNumber: 271,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ImageModal;
}),
"[project]/src/components/VideoModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-ssr] (ecmascript)");
;
;
;
;
const VideoModal = ({ src, alt, onClose })=>{
    const isFinePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(pointer: fine)');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [offsetY, setOffsetY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDraggingState, setIsDraggingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const initialOffsetY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hideTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasMoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastToggleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const resetHideTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(()=>setShowControls(false), 2500);
    }, []);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    const isPopStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCloseRef.current = onClose;
    }, [
        onClose
    ]);
    // Effect 1: History & Scroll Locking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scrollY = window.scrollY;
        const initialPath = window.location.pathname;
        const originalScrollRestoration = window.history.scrollRestoration;
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
        const historyTimer = setTimeout(()=>{
            const currentUrl = window.location.pathname + window.location.search;
            window.history.pushState({
                modal: 'video'
            }, '', currentUrl);
        }, 10);
        const handlePopState = ()=>{
            isPopStateRef.current = true;
            if (onCloseRef.current) onCloseRef.current();
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>{
            window.removeEventListener('popstate', handlePopState);
            clearTimeout(historyTimer);
            if (!isPopStateRef.current && window.history.state?.modal === 'video') window.history.back();
            const scrollPos = document.body.style.top;
            const currentPath = window.location.pathname;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = originalScrollRestoration || 'auto';
            }
            if (scrollPos && currentPath === initialPath) {
                const restoreY = Math.abs(parseInt(scrollPos, 10));
                requestAnimationFrame(()=>window.scrollTo(0, restoreY));
            }
        };
    }, []);
    // Effect 2: Event Listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resetHideTimer();
        const handleKeyDown = (e)=>{
            setShowControls(true);
            resetHideTimer();
            if (e.key === 'Escape') onCloseRef.current?.();
        };
        const handleMouseMove = ()=>{
            if (isFinePointer) {
                setShowControls(true);
                resetHideTimer();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousemove', handleMouseMove);
        return ()=>{
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [
        resetHideTimer,
        isFinePointer
    ]);
    const handleStart = (e)=>{
        isDragging.current = true;
        setIsDraggingState(true);
        hasMoved.current = false;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        startY.current = clientY;
        startX.current = clientX;
        initialOffsetY.current = offsetY;
    };
    const handleMove = (e)=>{
        if (!isDragging.current) return;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const dy = clientY - startY.current;
        const dx = clientX - startX.current;
        if (Math.abs(dy) > 20 || Math.abs(dx) > 20) {
            hasMoved.current = true;
            setShowControls(true);
            resetHideTimer();
        }
        const newY = initialOffsetY.current + dy;
        if (newY >= 0) setOffsetY(newY);
    };
    const handleContainerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (hasMoved.current || offsetY > 10 || isFinePointer) return;
        const now = Date.now();
        if (now - lastToggleTime.current < 300) return;
        lastToggleTime.current = now;
        setShowControls((prev)=>{
            const next = !prev;
            if (next) resetHideTimer();
            else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            return next;
        });
    }, [
        resetHideTimer,
        offsetY,
        isFinePointer
    ]);
    const handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDragging.current) return;
        if (offsetY > 100) {
            onClose();
        } else {
            setOffsetY(0);
            if (!hasMoved.current) handleContainerClick(e);
        }
        isDragging.current = false;
        setIsDraggingState(false);
        startY.current = 0;
        startX.current = 0;
        setTimeout(()=>{
            hasMoved.current = false;
        }, 150);
    }, [
        offsetY,
        onClose,
        handleContainerClick
    ]);
    const getYouTubeVideoId = (url)=>{
        if (!url) return null;
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/
        ];
        for (const pattern of patterns){
            const match = url.match(pattern);
            if (match && match[1]) return match[1];
        }
        return null;
    };
    const overlayOpacity = Math.max(1 - offsetY / 600, 0);
    if (!src) return null;
    const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `video-modal-overlay ${isDraggingState ? 'is-dragging' : ''}`,
        onMouseDown: handleStart,
        onTouchStart: handleStart,
        onMouseMove: handleMove,
        onTouchMove: handleMove,
        onMouseUp: handleEnd,
        onTouchEnd: handleEnd,
        onMouseLeave: handleEnd,
        onClick: handleContainerClick,
        style: {
            backgroundColor: `rgba(0, 0, 0, ${1.0 * overlayOpacity})`,
            transform: `translate3d(0, ${offsetY}px, 0)`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "video-modal-content-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `video-modal-close-btn ${!showControls ? 'hidden' : ''}`,
                    onClick: (e)=>{
                        e.stopPropagation();
                        onClose();
                    },
                    "aria-label": "Close",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoModal.js",
                    lineNumber: 180,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-modal-wrapper",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-modal-loader"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoModal.js",
                            lineNumber: 182,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        isYouTube ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: `https://www.youtube.com/embed/${getYouTubeVideoId(src)}?autoplay=1`,
                            title: alt || 'YouTube video',
                            className: "video-modal-element",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            onLoad: ()=>setLoading(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoModal.js",
                            lineNumber: 184,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: src,
                            className: "video-modal-element",
                            controls: true,
                            autoPlay: true,
                            playsInline: true,
                            onLoadedData: ()=>setLoading(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoModal.js",
                            lineNumber: 194,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VideoModal.js",
                    lineNumber: 181,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoModal.js",
            lineNumber: 179,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/VideoModal.js",
        lineNumber: 173,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VideoModal;
}),
"[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-icon.b6108288.svg");}),
"[project]/src/assets/icons/menu-icon.svg.mjs { IMAGE => \"[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/components/PageHeader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/icons/menu-icon.svg.mjs { IMAGE => "[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
const PageHeader = ({ title })=>{
    const { toggleMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "page-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "page-header-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/PageHeader.js",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "common-menu-icon",
                onClick: toggleMenu,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Menu",
                    className: "menu-icon-img",
                    width: "24",
                    height: "24"
                }, void 0, false, {
                    fileName: "[project]/src/components/PageHeader.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/PageHeader.js",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHeader.js",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PageHeader;
}),
"[project]/src/app/works/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Skeleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaDisplay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaDisplay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$YearNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/YearNav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VideoModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageHeader.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const WorksContent = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { works, fetchAllData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppData"])();
    const [selectedMedia, setSelectedMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // works 데이터가 없으면 fetchAllData 호출
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!works) {
            fetchAllData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        works,
        fetchAllData
    ]);
    const worksArray = Array.isArray(works) ? works : [];
    const wholeYears = [
        ...new Set(worksArray.map((work)=>work.year))
    ].sort((a, b)=>b - a);
    const urlYear = searchParams.get('year');
    // URL에서 연도를 가져오거나, 없으면 최신 연도를 사용합니다.
    const selectedYear = urlYear || wholeYears[0] || '2025';
    const handleYearClick = (year)=>{
        // replace: true를 사용하여 히스토리에 연도별로 쌓이지 않게 합니다.
        // Next.js router.replace performs a client-side navigation.
        router.replace(`/works?year=${year}`, {
            scroll: false
        });
    };
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        setWindowWidth(window.innerWidth);
        const handleResize = ()=>setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const getNumColumns = ()=>{
        if (windowWidth < 532) return 1;
        if (windowWidth < 1080) return 2;
        return 3;
    };
    const numColumns = isMounted ? getNumColumns() : 3; // SSR default to 3 but we'll use CSS to hide
    const filteredWorks = worksArray.filter((work)=>work.year === selectedYear);
    // 데이터를 열 개수에 맞춰 분배 (좌->우 순서 유지)
    const columns = Array.from({
        length: numColumns
    }, ()=>[]);
    filteredWorks.forEach((work, index)=>{
        columns[index % numColumns].push(work);
    });
    // 이미지들만 필터링 (네비게이션용)
    const imageItems = filteredWorks.filter((item)=>{
        const link = item.link?.toLowerCase() || "";
        return !link.endsWith('.mp4') && !link.includes('youtube.com') && !link.includes('youtu.be');
    });
    const handleMediaClick = (item)=>{
        const link = item.link?.toLowerCase() || "";
        const isVideo = link.endsWith('.mp4') || link.includes('youtube.com') || link.includes('youtu.be');
        if (isVideo) {
            setSelectedMedia({
                type: 'video',
                src: item.link,
                alt: item.title
            });
        } else {
            const index = imageItems.findIndex((img)=>img.link === item.link);
            setSelectedMedia({
                type: 'image',
                items: imageItems,
                index: index
            });
        }
    };
    const handleCloseImageModal = ()=>{
        setSelectedMedia(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "works-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "WORKS"
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$YearNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                years: wholeYears,
                selectedYear: selectedYear,
                onSelect: handleYearClick,
                loading: !works
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "works-list",
                children: !works ? // 로딩 중일 때도 열 구조를 맞춰서 스켈레톤 표시 (3개 행 정도로 늘림)
                Array.from({
                    length: numColumns
                }).map((_, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "works-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 107,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 108,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 109,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, colIdx, true, {
                        fileName: "[project]/src/app/works/page.js",
                        lineNumber: 106,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))) : columns.map((column, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "works-column",
                        children: column.map((work)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "work-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaDisplay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: work.link,
                                        alt: work.title,
                                        className: "work-image",
                                        controls: true,
                                        onClick: ()=>handleMediaClick(work)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/page.js",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "work-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "work-title",
                                                children: work.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/page.js",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "work-meta",
                                                children: work.meta
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/page.js",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/works/page.js",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, work.id, true, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 116,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, colIdx, false, {
                        fileName: "[project]/src/app/works/page.js",
                        lineNumber: 114,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedMedia?.type === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                images: selectedMedia.items,
                initialIndex: selectedMedia.index,
                onClose: handleCloseImageModal
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 136,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            selectedMedia?.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: selectedMedia.src,
                alt: selectedMedia.alt,
                onClose: ()=>setSelectedMedia(null)
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 144,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/works/page.js",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function WorksPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "works-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "WORKS"
                }, void 0, false, {
                    fileName: "[project]/src/app/works/page.js",
                    lineNumber: 156,
                    columnNumber: 58
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "works-list",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                        fileName: "[project]/src/app/works/page.js",
                        lineNumber: 156,
                        columnNumber: 114
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/works/page.js",
                    lineNumber: 156,
                    columnNumber: 86
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/works/page.js",
            lineNumber: 156,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WorksContent, {}, void 0, false, {
            fileName: "[project]/src/app/works/page.js",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/works/page.js",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_4e2df2f8._.js.map