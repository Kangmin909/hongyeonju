module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/pages/api/getExhibition.js [api] (ecmascript)", ((__turbopack_context__) => {
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
        const exhibitionDbId = process.env.NOTION_EXHIBITION_DB_ID;
        const imageDbId = process.env.NOTION_EXHIBITION_DETAIL_DB_ID;
        // 1️⃣ 전시 DB 조회
        const exhibitionRes = await notion.databases.query({
            database_id: exhibitionDbId,
            sorts: [
                {
                    property: "id",
                    direction: "ascending"
                }
            ]
        });
        // 2️⃣ 이미지 DB 조회
        const imageRes = await notion.databases.query({
            database_id: imageDbId,
            sorts: [
                {
                    property: "id",
                    direction: "ascending"
                }
            ]
        });
        // 3️⃣ 이미지 map (exhibitionId → images[])
        const imageMap = {};
        imageRes.results.forEach((page)=>{
            const exhibitionRel = page.properties.exhibition.relation[0]?.id;
            if (!exhibitionRel) return;
            if (!imageMap[exhibitionRel]) {
                imageMap[exhibitionRel] = [];
            }
            imageMap[exhibitionRel].push({
                id: page.properties.id.title[0]?.plain_text || "",
                title: page.properties.title.rich_text[0]?.plain_text || "",
                meta: page.properties.meta.rich_text[0]?.plain_text || "",
                link: page.properties.link.url || ""
            });
        });
        // 4️⃣ 최종 JSON 조립
        const data = exhibitionRes.results.map((page)=>{
            const pageId = page.id;
            return {
                id: page.properties.id.title[0]?.plain_text || "",
                year: page.properties.year?.select?.name || "",
                exhibitionTitle: page.properties.exhibitionTitle?.rich_text?.[0]?.plain_text || "",
                date: page.properties.date?.rich_text?.[0]?.plain_text || "",
                location: page.properties.location?.rich_text?.[0]?.plain_text || "",
                description: page.properties.description?.rich_text?.[0]?.plain_text || "",
                link: page.properties.link?.url || "",
                images: imageMap[pageId] || []
            };
        });
        // 서버 사이드 캐싱 설정
        res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Failed to load exhibitions"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04ae3801._.js.map