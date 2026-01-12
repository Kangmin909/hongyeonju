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
        const databaseId = process.env.NOTION_EXHIBITION_DB_ID;
        const response = await notion.databases.query({
            database_id: databaseId
        });
        const data = await Promise.all(response.results.map(async (page)=>{
            const props = page.properties;
            const pageId = page.id;
            const getPlainText = (prop)=>{
                if (!prop) return "";
                if (prop.title) return prop.title[0]?.plain_text || "";
                if (prop.rich_text) return prop.rich_text[0]?.plain_text || "";
                if (prop.select) return prop.select.name || "";
                return "";
            };
            const titleProp = Object.values(props).find((p)=>p.type === "title");
            const id = titleProp ? titleProp.title[0]?.plain_text || "" : "";
            let images = [];
            const relationProp = props.ExhibitionDetail || props.Detail || Object.values(props).find((p)=>p.type === 'relation');
            if (relationProp && relationProp.relation && relationProp.relation.length > 0) {
                const relatedIds = relationProp.relation.map((r)=>r.id);
                const relatedPages = await Promise.all(relatedIds.map((id)=>notion.pages.retrieve({
                        page_id: id
                    }).catch(()=>null)));
                images = relatedPages.filter((p)=>p).map((p)=>{
                    const pProps = p.properties;
                    const linkProp = pProps.link || pProps.Link || Object.values(pProps).find((prop)=>prop.type === 'url');
                    let link = linkProp?.url || "";
                    if (!link) {
                        const fileProp = Object.values(pProps).find((prop)=>prop.type === 'files');
                        const fileObj = fileProp?.files?.[0];
                        link = fileObj?.file?.url || fileObj?.external?.url || "";
                    }
                    const idProp = pProps.id || pProps.ID || Object.values(pProps).find((prop)=>prop.type === 'title');
                    let idVal = idProp?.title?.[0]?.plain_text || "";
                    let titleProp = pProps.title || pProps.Title;
                    let titleVal = titleProp?.rich_text?.[0]?.plain_text || "";
                    if (!titleVal) {
                        const fallbackProp = Object.values(pProps).find((prop)=>prop.type === 'rich_text' && prop !== titleProp);
                        titleVal = fallbackProp?.rich_text?.[0]?.plain_text || "";
                    }
                    let metaProp = pProps.meta || pProps.Meta;
                    let metaVal = metaProp?.rich_text?.[0]?.plain_text || "";
                    if (!metaVal) {
                        const fallbackMeta = Object.values(pProps).find((prop)=>prop.type === 'rich_text' && prop !== titleProp && prop !== metaProp);
                        metaVal = fallbackMeta?.rich_text?.[0]?.plain_text || "";
                    }
                    return {
                        id: idVal || p.id,
                        title: titleVal,
                        meta: metaVal,
                        link
                    };
                }).filter((item)=>item.link).sort((a, b)=>a.id.localeCompare(b.id, undefined, {
                        numeric: true
                    }));
            }
            return {
                id: id,
                year: getPlainText(props.year),
                exhibitionTitle: getPlainText(props.exhibitionTitle),
                date: getPlainText(props.date),
                location: getPlainText(props.location),
                description: getPlainText(props.description),
                link: props.link?.url || "",
                images
            };
        }));
        res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=604800");
        res.status(200).json(data);
    } catch (err) {
        console.error("Exhibition API Error:", err);
        res.status(500).json({
            error: "Failed to load exhibitions"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04ae3801._.js.map