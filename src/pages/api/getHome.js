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

    // 최신화 대기 1분, 캐시 유지 1주일 (604800초)
    // 거의 모든 상황에서 즉시 응답을 보장함
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=604800"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load home media" });
  }
}