import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 로컬/서버 공통 메모리 캐시
let localCache = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 30; // 30분

export default async function handler(req, res) {
  const { force } = req.query;

  // force 파라미터가 없고 캐시가 유효하면 메모리 캐시 반환
  if (force !== "true" && localCache && (Date.now() - lastFetchTime < CACHE_TTL)) {
    console.log("⚡ [Works] Returning from Memory Cache");
    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
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

    // 캐시 업데이트
    localCache = data;
    lastFetchTime = Date.now();

    if (force === "true") {
      res.setHeader("Cache-Control", "no-store, max-age=0"); // 강제 갱신 시 캐시 안함
    } else {
      res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
    }

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load works" });
  }
}