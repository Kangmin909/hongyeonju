(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Skeleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var SkeletonBox = function(param) {
    var width = param.width, height = param.height, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-box ".concat(className),
        style: {
            width: width,
            height: height
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 7,
        columnNumber: 5
    }, _this);
};
_c = SkeletonBox;
var SkeletonText = function(param) {
    var _param_lines = param.lines, lines = _param_lines === void 0 ? 1 : _param_lines, _param_width = param.width, width = _param_width === void 0 ? '100%' : _param_width;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-text-container",
        children: Array.from({
            length: lines
        }).map(function(_, index) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-text",
                style: {
                    width: index === lines - 1 ? '80%' : width,
                    marginBottom: index < lines - 1 ? '6px' : '0'
                }
            }, index, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 19,
                columnNumber: 9
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 17,
        columnNumber: 5
    }, _this);
};
_c1 = SkeletonText;
var SkeletonImage = function(param) {
    var _param_width = param.width, width = _param_width === void 0 ? '100%' : _param_width, _param_height = param.height, height = _param_height === void 0 ? '200px' : _param_height, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-image ".concat(className),
        style: {
            width: width,
            height: height
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 35,
        columnNumber: 5
    }, _this);
};
_c2 = SkeletonImage;
var SkeletonWorkItem = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-work-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonImage, {
                height: "auto",
                className: "skeleton-work-image"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 46,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-work-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "60%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "80%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 47,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 45,
        columnNumber: 5
    }, _this);
};
_c3 = SkeletonWorkItem;
var SkeletonExhibitionItem = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-exhibition-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonImage, {
                height: "auto",
                className: "skeleton-exhibition-image"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 59,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton-exhibition-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBox, {
                        width: "70%",
                        height: "24px",
                        style: {
                            marginBottom: '10px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "50%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                        lines: 1,
                        width: "60%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Skeleton.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 60,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 58,
        columnNumber: 5
    }, _this);
};
_c4 = SkeletonExhibitionItem;
var SkeletonCVItem = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-cv-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonBox, {
                width: "34px",
                height: "17px"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 73,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonText, {
                lines: 1,
                width: "200px"
            }, void 0, false, {
                fileName: "[project]/src/components/Skeleton.js",
                lineNumber: 74,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 72,
        columnNumber: 5
    }, _this);
};
_c5 = SkeletonCVItem;
var SkeletonHomeImage = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skeleton-home-image",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonImage, {
            width: "100%",
            height: "100%"
        }, void 0, false, {
            fileName: "[project]/src/components/Skeleton.js",
            lineNumber: 83,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/Skeleton.js",
        lineNumber: 82,
        columnNumber: 5
    }, _this);
};
_c6 = SkeletonHomeImage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "SkeletonBox");
__turbopack_context__.k.register(_c1, "SkeletonText");
__turbopack_context__.k.register(_c2, "SkeletonImage");
__turbopack_context__.k.register(_c3, "SkeletonWorkItem");
__turbopack_context__.k.register(_c4, "SkeletonExhibitionItem");
__turbopack_context__.k.register(_c5, "SkeletonCVItem");
__turbopack_context__.k.register(_c6, "SkeletonHomeImage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MediaDisplay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
// 한 번 로드된 이미지 URL을 기억하여 재방문 시 깜빡임을 방지합니다.
var loadedImageCache = new Set();
// 유튜브 URL에서 비디오 ID 추출
var getYouTubeVideoId = function(url) {
    if (!url) return null;
    var patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var pattern = _step.value;
            var match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return null;
};
// 유튜브 URL인지 확인
var isYouTubeUrl = function(url) {
    return getYouTubeVideoId(url) !== null;
};
// MediaDisplay 컴포넌트
var MediaDisplay = function(param) {
    var src = param.src, alt = param.alt, className = param.className, _param_autoplay = param.autoplay, autoplay = _param_autoplay === void 0 ? false : _param_autoplay, _param_controls = param.controls, controls = _param_controls === void 0 ? false : _param_controls, onClick = param.onClick;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), hasError = _useState[0], setHasError = _useState[1];
    // 캐시에 있으면 즉시 로드된 상태로 시작합니다.
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MediaDisplay._useState.useState": function() {
            return src ? loadedImageCache.has(src) : false;
        }
    }["MediaDisplay._useState.useState"]), 2), isLoaded = _useState1[0], setIsLoaded = _useState1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaDisplay.useEffect": function() {
            if (isLoaded && src) {
                loadedImageCache.add(src);
            }
        }
    }["MediaDisplay.useEffect"], [
        isLoaded,
        src
    ]);
    if (hasError || !src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "media-error-placeholder ".concat(className || ''),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-error-message",
                children: "이미지를 불러오지 못했습니다."
            }, void 0, false, {
                fileName: "[project]/src/components/MediaDisplay.js",
                lineNumber: 46,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 45,
            columnNumber: 7
        }, _this);
    }
    var wrapperClass = "media-placeholder-wrapper ".concat(!isLoaded ? 'loading-shimmer' : '', " ").concat(className || '');
    var clickOverlayStyle = {
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
        var videoId = getYouTubeVideoId(src);
        var autoplayParams = 'autoplay=1&mute=1&loop=1&playlist=' + videoId;
        var embedUrl = "https://www.youtube.com/embed/".concat(videoId, "?").concat(autoplayParams);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: wrapperClass,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: embedUrl,
                        title: alt || 'YouTube video',
                        className: "media-iframe",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true,
                        onLoad: function() {
                            return setIsLoaded(true);
                        },
                        onError: function() {
                            return setHasError(true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/MediaDisplay.js",
                        lineNumber: 72,
                        columnNumber: 11
                    }, _this),
                    onClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: clickOverlayStyle,
                        onClick: onClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/MediaDisplay.js",
                        lineNumber: 82,
                        columnNumber: 23
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MediaDisplay.js",
                lineNumber: 71,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 70,
            columnNumber: 7
        }, _this);
    }
    // Ensure src is a string before checking extension
    var srcString = String(src || "");
    if (srcString.toLowerCase().endsWith('.mp4')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: wrapperClass,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: src,
                    className: "media-element",
                    autoPlay: autoplay,
                    muted: autoplay,
                    loop: autoplay,
                    playsInline: true,
                    controls: controls,
                    onLoadedData: function() {
                        return setIsLoaded(true);
                    },
                    onError: function() {
                        return setHasError(true);
                    },
                    onClick: onClick,
                    style: onClick ? {
                        cursor: 'pointer'
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/src/components/MediaDisplay.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, _this),
                onClick && !controls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: clickOverlayStyle,
                    onClick: onClick
                }, void 0, false, {
                    fileName: "[project]/src/components/MediaDisplay.js",
                    lineNumber: 107,
                    columnNumber: 34
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 93,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt || "Media content",
            className: "media-element",
            onLoad: function() {
                return setIsLoaded(true);
            },
            onError: function() {
                return setHasError(true);
            },
            onClick: onClick,
            style: onClick ? {
                cursor: 'pointer'
            } : {}
        }, void 0, false, {
            fileName: "[project]/src/components/MediaDisplay.js",
            lineNumber: 114,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/MediaDisplay.js",
        lineNumber: 113,
        columnNumber: 5
    }, _this);
};
_s(MediaDisplay, "vXezLFoWJaVJeqVR6LOI7s37dbM=");
_c = MediaDisplay;
const __TURBOPACK__default__export__ = MediaDisplay;
var _c;
__turbopack_context__.k.register(_c, "MediaDisplay");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/YearNav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Skeleton.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
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
 */ var YearNav = function(param) {
    var years = param.years, selectedYear = param.selectedYear, onSelect = param.onSelect, _param_loading = param.loading, loading = _param_loading === void 0 ? false : _param_loading, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className;
    _s();
    var yearsArray = Array.isArray(years) ? years : [];
    var scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDragging = _useState[0], setIsDragging = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), startX = _useState1[0], setStartX = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), scrollLeft = _useState2[0], setScrollLeft = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), moved = _useState3[0], setMoved = _useState3[1];
    // 선택된 연도가 화면 밖으로 나갔을 경우 중앙으로 스크롤
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YearNav.useEffect": function() {
            if (selectedYear && scrollRef.current) {
                var activeElement = scrollRef.current.querySelector('.year.active');
                if (activeElement) {
                    activeElement.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center',
                        block: 'nearest'
                    });
                }
            }
        }
    }["YearNav.useEffect"], [
        selectedYear
    ]);
    var onMouseDown = function(e) {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        setMoved(false);
    };
    var onMouseLeave = function() {
        setIsDragging(false);
    };
    var onMouseUp = function(e) {
        setIsDragging(false);
    };
    var onMouseMove = function(e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.pageX - scrollRef.current.offsetLeft;
        var walk = (x - startX) * 2; // 스크롤 속도 배율
        if (Math.abs(walk) > 5) setMoved(true);
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    var handleYearClick = function(year) {
        // 드래그 중에는 클릭 이벤트가 발생하지 않도록 방지
        if (!moved) {
            onSelect(year);
        }
    };
    var renderSkeleton = function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 68,
                        columnNumber: 29
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 68,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 69,
                        columnNumber: 29
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 69,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 70,
                        columnNumber: 29
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 70,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 71,
                        columnNumber: 29
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 71,
                    columnNumber: 7
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "year",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonBox"], {
                        width: "40px",
                        height: "24px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/YearNav.js",
                        lineNumber: 72,
                        columnNumber: 29
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/YearNav.js",
                    lineNumber: 72,
                    columnNumber: 7
                }, _this)
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "year-nav ".concat(className, " ").concat(isDragging ? 'grabbing' : '').trim(),
        ref: scrollRef,
        onMouseDown: onMouseDown,
        onMouseLeave: onMouseLeave,
        onMouseUp: onMouseUp,
        onMouseMove: onMouseMove,
        style: {
            cursor: isDragging ? 'grabbing' : 'grab'
        },
        children: loading || yearsArray.length === 0 ? renderSkeleton() : yearsArray.map(function(year) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "year ".concat(selectedYear === year ? 'active' : ''),
                onClick: function() {
                    return handleYearClick(year);
                },
                children: year
            }, year, false, {
                fileName: "[project]/src/components/YearNav.js",
                lineNumber: 89,
                columnNumber: 13
            }, _this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/YearNav.js",
        lineNumber: 77,
        columnNumber: 5
    }, _this);
};
_s(YearNav, "E8NP0vv6lnhaA1Bsq5s1eETeIv0=");
_c = YearNav;
const __TURBOPACK__default__export__ = YearNav;
var _c;
__turbopack_context__.k.register(_c, "YearNav");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTouchHandlers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTouchHandlers",
    ()=>useTouchHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
var useTouchHandlers = function(param) {
    var zoom = param.zoom, setZoom = param.setZoom, offset = param.offset, setOffset = param.setOffset, viewportRef = param.viewportRef, currentIndex = param.currentIndex, imagesLength = param.imagesLength, containerWidth = param.containerWidth, onClose = param.onClose, handlePrev = param.handlePrev, handleNext = param.handleNext, resetHideTimer = param.resetHideTimer, setIsDraggingState = param.setIsDraggingState, state = param.state, resetZoom = param.resetZoom;
    _s();
    // state is passed from parent
    // Calculate clamped offset to keep image within viewport
    var getClampedOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchHandlers.useCallback[getClampedOffset]": function(newX, newY, currentZoom) {
            if (!viewportRef.current) return {
                x: newX,
                y: newY
            };
            var vWidth = viewportRef.current.offsetWidth;
            var vHeight = viewportRef.current.offsetHeight;
            var iWidth = vWidth * currentZoom;
            var iHeight = vHeight * currentZoom;
            var maxX = 0, maxY = 0;
            if (iWidth > vWidth) maxX = (iWidth - vWidth) / 2;
            if (iHeight > vHeight) maxY = (iHeight - vHeight) / 2;
            return {
                x: Math.max(-maxX, Math.min(maxX, newX)),
                y: Math.max(-maxY, Math.min(maxY, newY))
            };
        }
    }["useTouchHandlers.useCallback[getClampedOffset]"], [
        viewportRef
    ]);
    // Handle Touch Start
    var handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchHandlers.useCallback[handleTouchStart]": function(e) {
            resetHideTimer();
            // 1. Pinch Start (2 fingers)
            if (e.touches.length === 2) {
                state.current.isPinching = true;
                var t1 = e.touches[0];
                var t2 = e.touches[1];
                state.current.initialPinchDistance = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
                state.current.initialZoom = zoom;
                state.current.initialOffset = offset;
                // Calculate pinch center relative to viewport
                if (viewportRef.current) {
                    var rect = viewportRef.current.getBoundingClientRect();
                    var vCenterX = rect.left + rect.width / 2;
                    var vCenterY = rect.top + rect.height / 2;
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
            var touch = e.touches[0];
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
        }
    }["useTouchHandlers.useCallback[handleTouchStart]"], [
        zoom,
        offset,
        resetHideTimer,
        setIsDraggingState,
        viewportRef,
        state
    ]);
    // Handle Touch Move
    var handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchHandlers.useCallback[handleTouchMove]": function(e) {
            // 1. Pinch Move
            if (state.current.isPinching && e.touches.length === 2) {
                var t1 = e.touches[0];
                var t2 = e.touches[1];
                var dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
                var scale = dist / state.current.initialPinchDistance;
                var newZoom = Math.min(Math.max(state.current.initialZoom * scale, 1), 5);
                var newX = 0, newY = 0;
                if (viewportRef.current) {
                    var rect = viewportRef.current.getBoundingClientRect();
                    var vCenterX = rect.left + rect.width / 2;
                    var vCenterY = rect.top + rect.height / 2;
                    var currentPinchCenter = {
                        x: (t1.clientX + t2.clientX) / 2 - vCenterX,
                        y: (t1.clientY + t2.clientY) / 2 - vCenterY
                    };
                    var ratio = newZoom / state.current.initialZoom;
                    var dx = state.current.initialPinchCenter.x - state.current.initialOffset.x;
                    var dy = state.current.initialPinchCenter.y - state.current.initialOffset.y;
                    newX = currentPinchCenter.x - dx * ratio;
                    newY = currentPinchCenter.y - dy * ratio;
                }
                setZoom(newZoom);
                setOffset(getClampedOffset(newX, newY, newZoom));
                return;
            }
            // 2. Swipe/Drag Move
            if (!state.current.isDragging || e.touches.length > 1) return;
            var touch = e.touches[0];
            var dx1 = touch.clientX - state.current.initialClient.x;
            var dy1 = touch.clientY - state.current.initialClient.y;
            if (Math.abs(dx1) > 10 || Math.abs(dy1) > 10) {
                state.current.hasMoved = true;
            }
            if (zoom > 1) {
                // Pan when zoomed in
                setOffset(getClampedOffset(state.current.initialOffset.x + dx1, state.current.initialOffset.y + dy1, zoom));
            } else {
                // Swipe or Dismiss when zoomed out
                if (!state.current.dragType) {
                    if (Math.abs(dy1) > Math.abs(dx1) && dy1 > 0) state.current.dragType = 'dismiss';
                    else if (Math.abs(dx1) > Math.abs(dy1)) state.current.dragType = 'swipe';
                }
                if (state.current.dragType === 'dismiss') {
                    setOffset({
                        x: 0,
                        y: Math.max(0, dy1)
                    });
                } else if (state.current.dragType === 'swipe') {
                    var newX1 = state.current.initialOffset.x + dx1;
                    // Rubber-banding effect
                    if (currentIndex === 0 && newX1 > 0) newX1 = newX1 * 0.3;
                    if (currentIndex === imagesLength - 1 && newX1 < 0) newX1 = newX1 * 0.3;
                    setOffset({
                        x: newX1,
                        y: 0
                    });
                }
            }
        }
    }["useTouchHandlers.useCallback[handleTouchMove]"], [
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
    var handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchHandlers.useCallback[handleTouchEnd]": function(e) {
            // 1. Pinch End
            if (state.current.isPinching && e.touches.length < 2) {
                state.current.isPinching = false;
                // Smooth transition to drag if 1 finger remains
                if (e.touches.length === 1) {
                    var touch = e.touches[0];
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
                    var threshold = containerWidth * 0.2;
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
        }
    }["useTouchHandlers.useCallback[handleTouchEnd]"], [
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
    var handleDoubleTapZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchHandlers.useCallback[handleDoubleTapZoom]": function(clientX, clientY, target) {
            if (zoom > 1) {
                setZoom(1);
                setOffset({
                    x: 0,
                    y: 0
                });
                state.current.dragType = null;
            } else {
                var rect = target.getBoundingClientRect();
                var x = clientX - (rect.left + rect.width / 2);
                var y = clientY - (rect.top + rect.height / 2);
                var targetZoom = 2.5;
                setZoom(targetZoom);
                setOffset(getClampedOffset(-x * (targetZoom - 1), -y * (targetZoom - 1), targetZoom));
            }
        }
    }["useTouchHandlers.useCallback[handleDoubleTapZoom]"], [
        zoom,
        setZoom,
        setOffset,
        getClampedOffset,
        state
    ]);
    return {
        handleTouchStart: handleTouchStart,
        handleTouchMove: handleTouchMove,
        handleTouchEnd: handleTouchEnd,
        handleDoubleTapZoom: handleDoubleTapZoom,
        getClampedOffset: getClampedOffset
    };
};
_s(useTouchHandlers, "VEo92mwaTWD/Lu1y+6y/IizO4S4=");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
var useMediaQuery = function(query) {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), matches = _useState[0], setMatches = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": function() {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            var media = window.matchMedia(query);
            setMatches(media.matches); // Set initial value on mount
            var listener = {
                "useMediaQuery.useEffect.listener": function(e) {
                    return setMatches(e.matches);
                }
            }["useMediaQuery.useEffect.listener"];
            // Modern browsers
            if (media.addEventListener) {
                media.addEventListener('change', listener);
                return ({
                    "useMediaQuery.useEffect": function() {
                        return media.removeEventListener('change', listener);
                    }
                })["useMediaQuery.useEffect"];
            } else if (media.addListener) {
                media.addListener(listener);
                return ({
                    "useMediaQuery.useEffect": function() {
                        return media.removeListener(listener);
                    }
                })["useMediaQuery.useEffect"];
            }
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
};
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ImageModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTouchHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTouchHandlers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var ImageModal = function(param) {
    var _param_images = param.images, images = _param_images === void 0 ? [] : _param_images, _param_initialIndex = param.initialIndex, initialIndex = _param_initialIndex === void 0 ? 0 : _param_initialIndex, onClose = param.onClose;
    var _images_currentIndex, _images_currentIndex1;
    _s();
    var isFinePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(pointer: fine)');
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIndex), 2), currentIndex = _useState[0], setCurrentIndex = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), 2), zoom = _useState1[0], setZoom = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    }), 2), offset = _useState2[0], setOffset = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(window.innerWidth), 2), containerWidth = _useState3[0], setContainerWidth = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), showControls = _useState4[0], setShowControls = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDraggingState = _useState5[0], setIsDraggingState = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), isMounting = _useState6[0], setIsMounting = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isResizing = _useState7[0], setIsResizing = _useState7[1];
    var viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var clickTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var hideTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var resizeTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
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
    var resetHideTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[resetHideTimer]": function() {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            if (isFinePointer) {
                hideTimerRef.current = setTimeout({
                    "ImageModal.useCallback[resetHideTimer]": function() {
                        setShowControls(false);
                    }
                }["ImageModal.useCallback[resetHideTimer]"], 2500);
            }
        }
    }["ImageModal.useCallback[resetHideTimer]"], [
        isFinePointer
    ]);
    var resetZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[resetZoom]": function() {
            setZoom(1);
            setOffset({
                x: 0,
                y: 0
            });
            state.current.dragType = null;
        }
    }["ImageModal.useCallback[resetZoom]"], []);
    var handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[handleNext]": function() {
            if (currentIndex < images.length - 1) {
                setCurrentIndex({
                    "ImageModal.useCallback[handleNext]": function(prev) {
                        return prev + 1;
                    }
                }["ImageModal.useCallback[handleNext]"]);
                resetZoom();
            }
        }
    }["ImageModal.useCallback[handleNext]"], [
        currentIndex,
        images.length,
        resetZoom
    ]);
    var handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[handlePrev]": function() {
            if (currentIndex > 0) {
                setCurrentIndex({
                    "ImageModal.useCallback[handlePrev]": function(prev) {
                        return prev - 1;
                    }
                }["ImageModal.useCallback[handlePrev]"]);
                resetZoom();
            }
        }
    }["ImageModal.useCallback[handlePrev]"], [
        currentIndex,
        resetZoom
    ]);
    var onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    var isPopStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageModal.useEffect": function() {
            onCloseRef.current = onClose;
        }
    }["ImageModal.useEffect"], [
        onClose
    ]);
    // Effect 1: History & Scroll Locking (Position: Fixed 방식 원복)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageModal.useEffect": function() {
            var scrollY = window.scrollY;
            var initialPath = window.location.pathname;
            var originalScrollRestoration = window.history.scrollRestoration;
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
            // 현재 위치 고정
            document.body.style.position = 'fixed';
            document.body.style.top = "-".concat(scrollY, "px");
            document.body.style.width = '100%';
            document.body.style.overflowY = 'hidden';
            var historyTimer = setTimeout({
                "ImageModal.useEffect.historyTimer": function() {
                    var currentUrl = window.location.pathname + window.location.search;
                    window.history.pushState({
                        modal: 'image'
                    }, '', currentUrl);
                }
            }["ImageModal.useEffect.historyTimer"], 10);
            var handlePopState = {
                "ImageModal.useEffect.handlePopState": function() {
                    isPopStateRef.current = true;
                    if (onCloseRef.current) onCloseRef.current();
                }
            }["ImageModal.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            var timer = setTimeout({
                "ImageModal.useEffect.timer": function() {
                    return setIsMounting(false);
                }
            }["ImageModal.useEffect.timer"], 50);
            var updateWidth = {
                "ImageModal.useEffect.updateWidth": function() {
                    if (viewportRef.current) setContainerWidth(viewportRef.current.getBoundingClientRect().width);
                }
            }["ImageModal.useEffect.updateWidth"];
            var resizeObserver = new ResizeObserver({
                "ImageModal.useEffect": function() {
                    setIsResizing(true);
                    updateWidth();
                    resetZoom();
                    if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
                    resizeTimerRef.current = setTimeout({
                        "ImageModal.useEffect": function() {
                            return setIsResizing(false);
                        }
                    }["ImageModal.useEffect"], 300);
                }
            }["ImageModal.useEffect"]);
            if (viewportRef.current) resizeObserver.observe(viewportRef.current);
            return ({
                "ImageModal.useEffect": function() {
                    var _window_history_state;
                    window.removeEventListener('popstate', handlePopState);
                    clearTimeout(historyTimer);
                    if (!isPopStateRef.current && ((_window_history_state = window.history.state) === null || _window_history_state === void 0 ? void 0 : _window_history_state.modal) === 'image') {
                        window.history.back();
                    }
                    var scrollPos = document.body.style.top;
                    var currentPath = window.location.pathname;
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
                        var restoreY = Math.abs(parseInt(scrollPos, 10));
                        requestAnimationFrame({
                            "ImageModal.useEffect": function() {
                                return window.scrollTo(0, restoreY);
                            }
                        }["ImageModal.useEffect"]);
                    }
                    clearTimeout(timer);
                    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    resizeObserver.disconnect();
                }
            })["ImageModal.useEffect"];
        }
    }["ImageModal.useEffect"], [
        resetZoom
    ]);
    // Effect 2: Event Listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageModal.useEffect": function() {
            resetHideTimer();
            var handleKeyDown = {
                "ImageModal.useEffect.handleKeyDown": function(e) {
                    var _onCloseRef_current;
                    setShowControls(true);
                    resetHideTimer();
                    if (e.key === 'ArrowRight') handleNext();
                    if (e.key === 'ArrowLeft') handlePrev();
                    if (e.key === 'Escape') (_onCloseRef_current = onCloseRef.current) === null || _onCloseRef_current === void 0 ? void 0 : _onCloseRef_current.call(onCloseRef);
                }
            }["ImageModal.useEffect.handleKeyDown"];
            var handleGlobalMouseMove = {
                "ImageModal.useEffect.handleGlobalMouseMove": function() {
                    if (isFinePointer) {
                        setShowControls(true);
                        resetHideTimer();
                    }
                }
            }["ImageModal.useEffect.handleGlobalMouseMove"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('mousemove', handleGlobalMouseMove);
            return ({
                "ImageModal.useEffect": function() {
                    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('mousemove', handleGlobalMouseMove);
                }
            })["ImageModal.useEffect"];
        }
    }["ImageModal.useEffect"], [
        handleNext,
        handlePrev,
        resetHideTimer,
        isFinePointer
    ]);
    var _useTouchHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTouchHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchHandlers"])({
        zoom: zoom,
        setZoom: setZoom,
        offset: offset,
        setOffset: setOffset,
        viewportRef: viewportRef,
        currentIndex: currentIndex,
        imagesLength: images.length,
        containerWidth: containerWidth,
        onClose: onClose,
        handlePrev: handlePrev,
        handleNext: handleNext,
        resetHideTimer: resetHideTimer,
        setIsDraggingState: setIsDraggingState,
        state: state,
        resetZoom: resetZoom
    }), handleTouchStart = _useTouchHandlers.handleTouchStart, handleTouchMove = _useTouchHandlers.handleTouchMove, handleTouchEnd = _useTouchHandlers.handleTouchEnd, handleDoubleTapZoom = _useTouchHandlers.handleDoubleTapZoom, getClampedOffset = _useTouchHandlers.getClampedOffset;
    var handleContainerClick = function(e) {
        if (state.current.hasMoved) return;
        var clientX = e.clientX, clientY = e.clientY, target = e.target;
        if (clickTimerRef.current) {
            clearTimeout(clickTimerRef.current);
            clickTimerRef.current = null;
            handleDoubleTapZoom(clientX, clientY, target);
        } else {
            clickTimerRef.current = setTimeout(function() {
                setShowControls(function(prev) {
                    var next = !prev;
                    if (next) resetHideTimer();
                    else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    return next;
                });
                clickTimerRef.current = null;
            }, 250);
        }
    };
    var handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[handleMouseDown]": function(e) {
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
        }
    }["ImageModal.useCallback[handleMouseDown]"], [
        offset,
        resetHideTimer
    ]);
    var handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[handleMouseMove]": function(e) {
            if (!state.current.isDragging || e.touches) return;
            var dx = e.clientX - state.current.initialClient.x;
            var dy = e.clientY - state.current.initialClient.y;
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
                    var newX = state.current.initialOffset.x + dx;
                    if (currentIndex === 0 && newX > 0) newX = newX * 0.3;
                    if (currentIndex === images.length - 1 && newX < 0) newX = newX * 0.3;
                    setOffset({
                        x: newX,
                        y: 0
                    });
                }
            }
        }
    }["ImageModal.useCallback[handleMouseMove]"], [
        zoom,
        getClampedOffset,
        resetHideTimer,
        currentIndex,
        images.length
    ]);
    var handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[handleMouseUp]": function() {
            if (state.current.isDragging && zoom === 1) {
                if (state.current.dragType === 'dismiss' && offset.y > 100) {
                    onClose();
                    return;
                } else if (state.current.dragType === 'swipe') {
                    var threshold = containerWidth * 0.2;
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
        }
    }["ImageModal.useCallback[handleMouseUp]"], [
        zoom,
        offset.y,
        offset.x,
        handleNext,
        handlePrev,
        onClose,
        containerWidth
    ]);
    var handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageModal.useCallback[handleWheel]": function(e) {
            e.preventDefault();
            var delta = e.deltaY > 0 ? -0.2 : 0.2;
            var newZoom = Math.min(Math.max(zoom + delta, 1), 5);
            if (newZoom === zoom) return;
            if (newZoom === 1) {
                resetZoom();
                return;
            }
            if (!viewportRef.current) return;
            var rect = viewportRef.current.getBoundingClientRect();
            var mouseX = e.clientX - (rect.left + rect.width / 2);
            var mouseY = e.clientY - (rect.top + rect.height / 2);
            var ratio = newZoom / zoom;
            setZoom(newZoom);
            setOffset(getClampedOffset(mouseX - (mouseX - offset.x) * ratio, mouseY - (mouseY - offset.y) * ratio, newZoom));
        }
    }["ImageModal.useCallback[handleWheel]"], [
        zoom,
        offset,
        resetZoom,
        getClampedOffset
    ]);
    var overlayOpacity = state.current.dragType === 'dismiss' ? Math.max(1 - offset.y / 600, 0) : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "image-modal-overlay ".concat(isDraggingState ? 'is-dragging' : ''),
        style: {
            backgroundColor: "rgba(0, 0, 0, ".concat(1.0 * overlayOpacity, ")"),
            transform: state.current.dragType === 'dismiss' ? "translate3d(0, ".concat(offset.y, "px, 0)") : 'none'
        },
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onClick: handleContainerClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "image-modal-content-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "image-modal-header-bar ".concat(!showControls ? 'hidden' : ''),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-universal-back-btn",
                            onClick: function(e) {
                                e.stopPropagation();
                                onClose();
                            },
                            "aria-label": "Back",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "19",
                                        y1: "12",
                                        x2: "5",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImageModal.js",
                                        lineNumber: 284,
                                        columnNumber: 158
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "12 19 5 12 12 5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImageModal.js",
                                        lineNumber: 284,
                                        columnNumber: 202
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImageModal.js",
                                lineNumber: 284,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 283,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 282,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-nav-btn prev ".concat(currentIndex === 0 ? 'disabled' : '', " ").concat(!showControls ? 'hidden' : ''),
                    onClick: function(e) {
                        e.stopPropagation();
                        handlePrev();
                    },
                    disabled: currentIndex === 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "15 18 9 12 15 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 289,
                            columnNumber: 154
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 289,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 288,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-nav-btn next ".concat(currentIndex === images.length - 1 ? 'disabled' : '', " ").concat(!showControls ? 'hidden' : ''),
                    onClick: function(e) {
                        e.stopPropagation();
                        handleNext();
                    },
                    disabled: currentIndex === images.length - 1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "9 18 15 12 9 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 292,
                            columnNumber: 154
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 292,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 291,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "image-modal-wrapper fullscreen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-modal-viewport fullscreen",
                        ref: viewportRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slider-container",
                            style: {
                                transform: "translate3d(".concat(-currentIndex * (containerWidth + 40) + (state.current.dragType === 'swipe' ? offset.x : 0), "px, 0, 0)"),
                                transition: isDraggingState || isMounting || isResizing ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            },
                            children: images.map(function(img, idx) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slide-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "media-movable-content",
                                        style: idx === currentIndex ? {
                                            transform: "translate(".concat(zoom > 1 ? offset.x : 0, "px, ").concat(zoom > 1 ? offset.y : 0, "px) scale(").concat(zoom, ")"),
                                            transition: isDraggingState ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)'
                                        } : {},
                                        onWheel: idx === currentIndex ? handleWheel : null,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img.link,
                                            alt: img.title || '',
                                            className: "image-modal-img-internal fullscreen",
                                            draggable: "false"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImageModal.js",
                                            lineNumber: 306,
                                            columnNumber: 21
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImageModal.js",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, _this)
                                }, idx, false, {
                                    fileName: "[project]/src/components/ImageModal.js",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageModal.js",
                            lineNumber: 296,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 295,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 294,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "image-modal-footer-bar ".concat(!showControls ? 'hidden' : ''),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-modal-caption",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "caption-title",
                                children: (_images_currentIndex = images[currentIndex]) === null || _images_currentIndex === void 0 ? void 0 : _images_currentIndex.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageModal.js",
                                lineNumber: 315,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "caption-meta",
                                children: (_images_currentIndex1 = images[currentIndex]) === null || _images_currentIndex1 === void 0 ? void 0 : _images_currentIndex1.meta
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImageModal.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ImageModal.js",
                        lineNumber: 314,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageModal.js",
                    lineNumber: 313,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageModal.js",
            lineNumber: 281,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/ImageModal.js",
        lineNumber: 271,
        columnNumber: 5
    }, _this);
};
_s(ImageModal, "TFHl6uU9SSn9wthFhwg8D8Yuvv4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTouchHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchHandlers"]
    ];
});
_c = ImageModal;
const __TURBOPACK__default__export__ = ImageModal;
var _c;
__turbopack_context__.k.register(_c, "ImageModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VideoModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
var VideoModal = function(param) {
    var src = param.src, alt = param.alt, onClose = param.onClose;
    _s();
    var isFinePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(pointer: fine)');
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), loading = _useState[0], setLoading = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), offsetY = _useState1[0], setOffsetY = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), showControls = _useState2[0], setShowControls = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDraggingState = _useState3[0], setIsDraggingState = _useState3[1];
    var isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var startY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var initialOffsetY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var hideTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var hasMoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var lastToggleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var resetHideTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoModal.useCallback[resetHideTimer]": function() {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            hideTimerRef.current = setTimeout({
                "VideoModal.useCallback[resetHideTimer]": function() {
                    return setShowControls(false);
                }
            }["VideoModal.useCallback[resetHideTimer]"], 2500);
        }
    }["VideoModal.useCallback[resetHideTimer]"], []);
    var onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    var isPopStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoModal.useEffect": function() {
            onCloseRef.current = onClose;
        }
    }["VideoModal.useEffect"], [
        onClose
    ]);
    // Effect 1: History & Scroll Locking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoModal.useEffect": function() {
            var scrollY = window.scrollY;
            var initialPath = window.location.pathname;
            var originalScrollRestoration = window.history.scrollRestoration;
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
            document.body.style.position = 'fixed';
            document.body.style.top = "-".concat(scrollY, "px");
            document.body.style.width = '100%';
            document.body.style.overflowY = 'hidden';
            var historyTimer = setTimeout({
                "VideoModal.useEffect.historyTimer": function() {
                    var currentUrl = window.location.pathname + window.location.search;
                    window.history.pushState({
                        modal: 'video'
                    }, '', currentUrl);
                }
            }["VideoModal.useEffect.historyTimer"], 10);
            var handlePopState = {
                "VideoModal.useEffect.handlePopState": function() {
                    isPopStateRef.current = true;
                    if (onCloseRef.current) onCloseRef.current();
                }
            }["VideoModal.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            return ({
                "VideoModal.useEffect": function() {
                    var _window_history_state;
                    window.removeEventListener('popstate', handlePopState);
                    clearTimeout(historyTimer);
                    if (!isPopStateRef.current && ((_window_history_state = window.history.state) === null || _window_history_state === void 0 ? void 0 : _window_history_state.modal) === 'video') window.history.back();
                    var scrollPos = document.body.style.top;
                    var currentPath = window.location.pathname;
                    document.body.style.position = '';
                    document.body.style.top = '';
                    document.body.style.width = '';
                    document.body.style.overflowY = '';
                    if ('scrollRestoration' in window.history) {
                        window.history.scrollRestoration = originalScrollRestoration || 'auto';
                    }
                    if (scrollPos && currentPath === initialPath) {
                        var restoreY = Math.abs(parseInt(scrollPos, 10));
                        requestAnimationFrame({
                            "VideoModal.useEffect": function() {
                                return window.scrollTo(0, restoreY);
                            }
                        }["VideoModal.useEffect"]);
                    }
                }
            })["VideoModal.useEffect"];
        }
    }["VideoModal.useEffect"], []);
    // Effect 2: Event Listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoModal.useEffect": function() {
            resetHideTimer();
            var handleKeyDown = {
                "VideoModal.useEffect.handleKeyDown": function(e) {
                    var _onCloseRef_current;
                    setShowControls(true);
                    resetHideTimer();
                    if (e.key === 'Escape') (_onCloseRef_current = onCloseRef.current) === null || _onCloseRef_current === void 0 ? void 0 : _onCloseRef_current.call(onCloseRef);
                }
            }["VideoModal.useEffect.handleKeyDown"];
            var handleMouseMove = {
                "VideoModal.useEffect.handleMouseMove": function() {
                    if (isFinePointer) {
                        setShowControls(true);
                        resetHideTimer();
                    }
                }
            }["VideoModal.useEffect.handleMouseMove"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "VideoModal.useEffect": function() {
                    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('mousemove', handleMouseMove);
                }
            })["VideoModal.useEffect"];
        }
    }["VideoModal.useEffect"], [
        resetHideTimer,
        isFinePointer
    ]);
    var handleStart = function(e) {
        isDragging.current = true;
        setIsDraggingState(true);
        hasMoved.current = false;
        var clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        var clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        startY.current = clientY;
        startX.current = clientX;
        initialOffsetY.current = offsetY;
    };
    var handleMove = function(e) {
        if (!isDragging.current) return;
        var clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        var clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        var dy = clientY - startY.current;
        var dx = clientX - startX.current;
        if (Math.abs(dy) > 20 || Math.abs(dx) > 20) {
            hasMoved.current = true;
            setShowControls(true);
            resetHideTimer();
        }
        var newY = initialOffsetY.current + dy;
        if (newY >= 0) setOffsetY(newY);
    };
    var handleContainerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoModal.useCallback[handleContainerClick]": function(e) {
            if (hasMoved.current || offsetY > 10 || isFinePointer) return;
            var now = Date.now();
            if (now - lastToggleTime.current < 300) return;
            lastToggleTime.current = now;
            setShowControls({
                "VideoModal.useCallback[handleContainerClick]": function(prev) {
                    var next = !prev;
                    if (next) resetHideTimer();
                    else if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
                    return next;
                }
            }["VideoModal.useCallback[handleContainerClick]"]);
        }
    }["VideoModal.useCallback[handleContainerClick]"], [
        resetHideTimer,
        offsetY,
        isFinePointer
    ]);
    var handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoModal.useCallback[handleEnd]": function(e) {
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
            setTimeout({
                "VideoModal.useCallback[handleEnd]": function() {
                    hasMoved.current = false;
                }
            }["VideoModal.useCallback[handleEnd]"], 150);
        }
    }["VideoModal.useCallback[handleEnd]"], [
        offsetY,
        onClose,
        handleContainerClick
    ]);
    var getYouTubeVideoId = function(url) {
        if (!url) return null;
        var patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var pattern = _step.value;
                var match = url.match(pattern);
                if (match && match[1]) return match[1];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return null;
    };
    var overlayOpacity = Math.max(1 - offsetY / 600, 0);
    if (!src) return null;
    var isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-modal-overlay ".concat(isDraggingState ? 'is-dragging' : ''),
        onMouseDown: handleStart,
        onTouchStart: handleStart,
        onMouseMove: handleMove,
        onTouchMove: handleMove,
        onMouseUp: handleEnd,
        onTouchEnd: handleEnd,
        onMouseLeave: handleEnd,
        onClick: handleContainerClick,
        style: {
            backgroundColor: "rgba(0, 0, 0, ".concat(1.0 * overlayOpacity, ")"),
            transform: "translate3d(0, ".concat(offsetY, "px, 0)")
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "video-modal-content-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "video-modal-close-btn ".concat(!showControls ? 'hidden' : ''),
                    onClick: function(e) {
                        e.stopPropagation();
                        onClose();
                    },
                    "aria-label": "Close",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoModal.js",
                    lineNumber: 180,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-modal-wrapper",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-modal-loader"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoModal.js",
                            lineNumber: 182,
                            columnNumber: 23
                        }, _this),
                        isYouTube ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: "https://www.youtube.com/embed/".concat(getYouTubeVideoId(src), "?autoplay=1"),
                            title: alt || 'YouTube video',
                            className: "video-modal-element",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            onLoad: function() {
                                return setLoading(false);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoModal.js",
                            lineNumber: 184,
                            columnNumber: 13
                        }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: src,
                            className: "video-modal-element",
                            controls: true,
                            autoPlay: true,
                            playsInline: true,
                            onLoadedData: function() {
                                return setLoading(false);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoModal.js",
                            lineNumber: 194,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VideoModal.js",
                    lineNumber: 181,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoModal.js",
            lineNumber: 179,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/VideoModal.js",
        lineNumber: 173,
        columnNumber: 5
    }, _this);
};
_s(VideoModal, "YTPYUZOnkXbxtEt5Sy39uMcsGzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = VideoModal;
const __TURBOPACK__default__export__ = VideoModal;
var _c;
__turbopack_context__.k.register(_c, "VideoModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-icon.b6108288.svg");}),
"[project]/src/assets/icons/menu-icon.svg.mjs { IMAGE => \"[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PageHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/icons/menu-icon.svg.mjs { IMAGE => "[project]/src/assets/icons/menu-icon.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var PageHeader = function(param) {
    var title = param.title;
    _s();
    var toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppData"])().toggleMenu;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "page-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "page-header-title",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/PageHeader.js",
                lineNumber: 11,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "common-menu-icon",
                onClick: toggleMenu,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$menu$2d$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Menu",
                    className: "menu-icon-img",
                    width: "24",
                    height: "24"
                }, void 0, false, {
                    fileName: "[project]/src/components/PageHeader.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/PageHeader.js",
                lineNumber: 12,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PageHeader.js",
        lineNumber: 10,
        columnNumber: 5
    }, _this);
};
_s(PageHeader, "kLU+cIexj8Uq/qoFpIjVch+XgvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppData"]
    ];
});
_c = PageHeader;
const __TURBOPACK__default__export__ = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/works/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppDataContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Skeleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MediaDisplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$YearNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/YearNav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VideoModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageHeader.js [app-client] (ecmascript)");
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
;
;
;
;
;
var WorksContent = function() {
    _s();
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    var _useAppData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppData"])(), works = _useAppData.works, fetchAllData = _useAppData.fetchAllData;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedMedia = _useState[0], setSelectedMedia = _useState[1];
    // works 데이터가 없으면 fetchAllData 호출
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorksContent.useEffect": function() {
            if (!works) {
                fetchAllData();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["WorksContent.useEffect"], [
        works,
        fetchAllData
    ]);
    var worksArray = Array.isArray(works) ? works : [];
    var wholeYears = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(new Set(worksArray.map(function(work) {
        return work.year;
    }))).sort(function(a, b) {
        return b - a;
    });
    var urlYear = searchParams.get('year');
    // URL에서 연도를 가져오거나, 없으면 최신 연도를 사용합니다.
    var selectedYear = urlYear || wholeYears[0] || '2025';
    var handleYearClick = function(year) {
        // replace: true를 사용하여 히스토리에 연도별로 쌓이지 않게 합니다.
        // Next.js router.replace performs a client-side navigation.
        router.replace("/works?year=".concat(year), {
            scroll: false
        });
    };
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isMounted = _useState1[0], setIsMounted = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), windowWidth = _useState2[0], setWindowWidth = _useState2[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorksContent.useEffect": function() {
            setIsMounted(true);
            setWindowWidth(window.innerWidth);
            var handleResize = {
                "WorksContent.useEffect.handleResize": function() {
                    return setWindowWidth(window.innerWidth);
                }
            }["WorksContent.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "WorksContent.useEffect": function() {
                    return window.removeEventListener('resize', handleResize);
                }
            })["WorksContent.useEffect"];
        }
    }["WorksContent.useEffect"], []);
    var getNumColumns = function() {
        if (windowWidth < 532) return 1;
        if (windowWidth < 1080) return 2;
        return 3;
    };
    var numColumns = isMounted ? getNumColumns() : 3; // SSR default to 3 but we'll use CSS to hide
    var filteredWorks = worksArray.filter(function(work) {
        return work.year === selectedYear;
    });
    // 데이터를 열 개수에 맞춰 분배 (좌->우 순서 유지)
    var columns = Array.from({
        length: numColumns
    }, function() {
        return [];
    });
    filteredWorks.forEach(function(work, index) {
        columns[index % numColumns].push(work);
    });
    // 이미지들만 필터링 (네비게이션용)
    var imageItems = filteredWorks.filter(function(item) {
        var _item_link;
        var link = ((_item_link = item.link) === null || _item_link === void 0 ? void 0 : _item_link.toLowerCase()) || "";
        return !link.endsWith('.mp4') && !link.includes('youtube.com') && !link.includes('youtu.be');
    });
    var handleMediaClick = function(item) {
        var _item_link;
        var link = ((_item_link = item.link) === null || _item_link === void 0 ? void 0 : _item_link.toLowerCase()) || "";
        var isVideo = link.endsWith('.mp4') || link.includes('youtube.com') || link.includes('youtu.be');
        if (isVideo) {
            setSelectedMedia({
                type: 'video',
                src: item.link,
                alt: item.title
            });
        } else {
            var index = imageItems.findIndex(function(img) {
                return img.link === item.link;
            });
            setSelectedMedia({
                type: 'image',
                items: imageItems,
                index: index
            });
        }
    };
    var handleCloseImageModal = function() {
        setSelectedMedia(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "works-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "WORKS"
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$YearNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                years: wholeYears,
                selectedYear: selectedYear,
                onSelect: handleYearClick,
                loading: !works
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 95,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "works-list",
                children: !works ? // 로딩 중일 때도 열 구조를 맞춰서 스켈레톤 표시 (3개 행 정도로 늘림)
                Array.from({
                    length: numColumns
                }).map(function(_, colIdx) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "works-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 107,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 108,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 109,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, colIdx, true, {
                        fileName: "[project]/src/app/works/page.js",
                        lineNumber: 106,
                        columnNumber: 13
                    }, _this);
                }) : columns.map(function(column, colIdx) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "works-column",
                        children: column.map(function(work) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "work-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MediaDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: work.link,
                                        alt: work.title,
                                        className: "work-image",
                                        controls: true,
                                        onClick: function() {
                                            return handleMediaClick(work);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/page.js",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "work-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "work-title",
                                                children: work.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/page.js",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "work-meta",
                                                children: work.meta
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/page.js",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/works/page.js",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, work.id, true, {
                                fileName: "[project]/src/app/works/page.js",
                                lineNumber: 116,
                                columnNumber: 17
                            }, _this);
                        })
                    }, colIdx, false, {
                        fileName: "[project]/src/app/works/page.js",
                        lineNumber: 114,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 102,
                columnNumber: 7
            }, _this),
            (selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.type) === 'image' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                images: selectedMedia.items,
                initialIndex: selectedMedia.index,
                onClose: handleCloseImageModal
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 136,
                columnNumber: 9
            }, _this),
            (selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.type) === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: selectedMedia.src,
                alt: selectedMedia.alt,
                onClose: function() {
                    return setSelectedMedia(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/works/page.js",
                lineNumber: 144,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/works/page.js",
        lineNumber: 92,
        columnNumber: 5
    }, _this);
};
_s(WorksContent, "LwCxrviD73+yRj41HyvjU97kI28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppDataContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppData"]
    ];
});
_c = WorksContent;
function WorksPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "works-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "WORKS"
                }, void 0, false, {
                    fileName: "[project]/src/app/works/page.js",
                    lineNumber: 156,
                    columnNumber: 58
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "works-list",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonWorkItem"], {}, void 0, false, {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorksContent, {}, void 0, false, {
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
_c1 = WorksPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "WorksContent");
__turbopack_context__.k.register(_c1, "WorksPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c4581a7d._.js.map