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
let localCache = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5분 (이미지 링크 만료 방지)
async function handler(req, res) {
    const { force } = req.query;
    if (force !== "true" && localCache && Date.now() - lastFetchTime < CACHE_TTL) {
        res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
        return res.status(200).json(localCache);
    }
    try {
        const databaseId = process.env.NOTION_EXHIBITION_DB_ID;
        const response = await notion.databases.query({
            database_id: databaseId
        });
        const data = await Promise.all(response.results.map(async (page)=>{
            const props = page.properties;
            const pageId = page.id;
            // 모든 텍스트/제목 속성을 안전하게 추출하는 헬퍼
            const getPlainText = (prop)=>{
                if (!prop) return "";
                if (prop.title) return prop.title[0]?.plain_text || "";
                if (prop.rich_text) return prop.rich_text[0]?.plain_text || "";
                if (prop.select) return prop.select.name || "";
                return "";
            };
            // 1. ID (Title 속성 찾기)
            // 속성 이름이 'id'가 아니더라도 type이 'title'인 속성을 찾아 사용
            const titleProp = Object.values(props).find((p)=>p.type === "title");
            const id = titleProp ? titleProp.title[0]?.plain_text || "" : "";
            // 관계형 데이터(ExhibitionDetail) 조회 로직
            let images = [];
            // 'ExhibitionDetail' 또는 'Detail'이라는 이름의 Relation 속성을 찾음
            const relationProp = props.ExhibitionDetail || props.Detail || Object.values(props).find((p)=>p.type === 'relation');
            if (relationProp && relationProp.relation && relationProp.relation.length > 0) {
                const relatedIds = relationProp.relation.map((r)=>r.id);
                // 연결된 상세 페이지들을 병렬로 조회
                const relatedPages = await Promise.all(relatedIds.map((id)=>notion.pages.retrieve({
                        page_id: id
                    }).catch(()=>null)));
                // 유효한 페이지들에서 이미지 정보 추출
                images = relatedPages.filter((p)=>p).map((p)=>{
                    const pProps = p.properties;
                    // 1. 파일/이미지 속성 찾기 ('image', 'file', 'File' 등 이름 불문하고 타입으로 검색)
                    const fileProp = Object.values(pProps).find((prop)=>prop.type === 'files');
                    const fileObj = fileProp?.files?.[0];
                    const link = fileObj?.file?.url || fileObj?.external?.url || "";
                    // 1. ID 찾기 (속성명 'id' 또는 'ID'인 Title 타입)
                    let idProp = pProps.id || pProps.ID || Object.values(pProps).find((prop)=>prop.type === 'title');
                    let idVal = idProp?.title?.[0]?.plain_text || "";
                    // 2. 제목(Title) 찾기 (속성명 'title' 또는 'Title'인 Rich Text 타입)
                    let titleProp = pProps.title || pProps.Title;
                    let titleVal = titleProp?.rich_text?.[0]?.plain_text || "";
                    // 만약 title 속성을 못 찾았다면, id로 쓰인 Title 속성이 아닌 첫 번째 Rich Text를 제목으로 추정
                    if (!titleVal) {
                        const fallbackProp = Object.values(pProps).find((prop)=>prop.type === 'rich_text' && prop !== titleProp);
                        titleVal = fallbackProp?.rich_text?.[0]?.plain_text || "";
                    }
                    // 3. 메타 정보(Meta) 찾기 (속성명 'meta' 또는 'Meta'인 Rich Text 타입)
                    let metaProp = pProps.meta || pProps.Meta;
                    let metaVal = metaProp?.rich_text?.[0]?.plain_text || "";
                    // 메타도 못 찾았다면, 제목으로 쓰지 않은 또 다른 Rich Text를 메타로 추정
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
                })// 이미지가 있는 항목만 필터링
                .filter((item)=>item.link)// ID(번호) 순으로 오름차순 정렬 (숫자 기준)
                .sort((a, b)=>a.id.localeCompare(b.id, undefined, {
                        numeric: true
                    }));
            }
            // console.log(`[Exhibition ${props.id?.title?.[0]?.plain_text}] Images:`, images.length);
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
        localCache = data;
        lastFetchTime = Date.now();
        res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
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