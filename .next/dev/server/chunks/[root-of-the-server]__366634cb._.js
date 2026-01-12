module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/pages/api/getAbout.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$notionhq$2f$client__$5b$external$5d$__$2840$notionhq$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$notionhq$2f$client$29$__ = __turbopack_context__.i("[externals]/@notionhq/client [external] (@notionhq/client, cjs, [project]/node_modules/@notionhq/client)");
;
const notion = new __TURBOPACK__imported__module__$5b$externals$5d2f40$notionhq$2f$client__$5b$external$5d$__$2840$notionhq$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$notionhq$2f$client$29$__["Client"]({
    auth: process.env.NOTION_TOKEN
});
async function handler(req, res) {
    try {
        const databaseId = process.env.NOTION_ABOUT_DB_ID;
        const response = await notion.databases.query({
            database_id: databaseId,
            page_size: 1
        });
        const page = response.results[0];
        if (!page) return res.status(404).json({
            error: "About data not found"
        });
        const props = page.properties;
        // 모든 텍스트/제목/이메일 속성을 안전하게 추출하는 헬퍼
        const getPlainText = (prop)=>{
            if (!prop) return "";
            if (prop.email) return prop.email; // 이메일 타입 처리
            if (prop.title) return prop.title[0]?.plain_text || "";
            if (prop.rich_text) return prop.rich_text[0]?.plain_text || "";
            if (prop.select) return prop.select.name || "";
            return "";
        };
        const aboutTextRaw = getPlainText(props.aboutText);
        const data = {
            mail: getPlainText(props.mail),
            instagram: getPlainText(props.instagram),
            aboutText: aboutTextRaw ? aboutTextRaw.split("\n") : []
        };
        // Removed localCache and lastFetchTime updates
        res.setHeader("Cache-Control", "public, s-maxage=1, stale-while-revalidate=3600");
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Failed to load about data"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__366634cb._.js.map