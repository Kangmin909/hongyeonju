import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_ABOUT_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "id",
          direction: "ascending",
        },
      ],
      page_size: 1, // ✅ 하나만 가져오기
    });

    const page = response.results[0];

    if (!page) {
      return res.status(404).json({ error: "No about data found" });
    }

    const rawText = page.properties.aboutText.rich_text[0]?.plain_text || "";

    const aboutText = rawText
      .split("\n")
      .map(t => t.trim())
      .filter(Boolean);

    const data = {
      id: page.properties.id.title[0]?.plain_text || "",
      mail: page.properties.mail.rich_text[0]?.plain_text || "",
      instagram: page.properties.instagram.rich_text[0]?.plain_text || "",
      aboutText,
    };

    // 서버 사이드 캐싱 설정
    res.setHeader(
      "Cache-Control",
      "s-maxage=1800, stale-while-revalidate=3600"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load about media" });
  }
}
