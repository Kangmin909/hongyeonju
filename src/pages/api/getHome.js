import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_HOME_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
    });

    const page = response.results[0];
    if (!page) return res.status(404).json({ error: "No home data found" });

    const data = {
      id: page.properties.id.title[0]?.plain_text || "",
      link: page.properties.link.url || "",
    };

    // s-maxage=1: 매번 백그라운드 갱신 트리거
    // stale-while-revalidate=31536000: 1년 동안은 일단 캐시된 데이터 즉시 반환 보장
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1, stale-while-revalidate=31536000"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load home media" });
  }
}