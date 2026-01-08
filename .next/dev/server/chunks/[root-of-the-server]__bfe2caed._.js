module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/pages/api/getCV1.js [api] (ecmascript)", ((__turbopack_context__) => {
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
        const databaseId = process.env.NOTION_CV1_DB_ID;
        const response = await notion.databases.query({
            database_id: databaseId,
            sorts: [
                {
                    property: "id",
                    direction: "ascending"
                }
            ]
        });
        const data = response.results.map((page)=>{
            return {
                id: page.properties.id.title[0]?.plain_text || "",
                year: page.properties.year.select?.name || "",
                content: page.properties.content.rich_text[0]?.plain_text || ""
            };
        });
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Failed to load cv1"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bfe2caed._.js.map