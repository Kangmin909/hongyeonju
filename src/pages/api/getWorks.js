import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 로컬/서버 공통 메모리 캐시
let localCache = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1시간 (메모리 캐시 유지)

export default async function handler(req, res) {
  const { force } = req.query;

  // 1. 메모리 캐시 확인 (force가 아닐 때)
  if (force !== "true" && localCache && (Date.now() - lastFetchTime < CACHE_TTL)) {
    // CDN에는 "1초만 저장해"라고 해서 요청이 서버(여기)로 오게 유도하고,
    // 서버에서는 메모리 캐시를 즉시 반환하여 속도와 최신성을 모두 잡음
    res.setHeader("Cache-Control", "public, s-maxage=1"); 
    return res.status(200).json(localCache);
  }

  try {
    const databaseId = process.env.NOTION_WORKS_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "id",
          direction: "ascending",
        },
      ],
    });

    const data = response.results.map((page) => {
      return {
        id: page.properties.id.title[0]?.plain_text || "",
        year: page.properties.year.select?.name || "",
        title: page.properties.title.rich_text[0]?.plain_text || "",
        meta: page.properties.meta.rich_text[0]?.plain_text || "",
        link: page.properties.link.url || "",
      };
    });

    // 2. 캐시 업데이트 (메모리 최신화)
    localCache = data;
    lastFetchTime = Date.now();

    // 3. 응답 설정
    // s-maxage=1 : CDN 캐시는 1초만에 만료 -> 사용자는 거의 매번 최신 상태 확인 가능
    // stale-while-revalidate 제거 : 옛날 데이터를 보여주지 않음
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load works" });
  }
}