import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

let localCache = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 60;

export default async function handler(req, res) {
  const { force } = req.query;

  if (force !== "true" && localCache && (Date.now() - lastFetchTime < CACHE_TTL)) {
    res.setHeader("Cache-Control", "public, s-maxage=1");
    return res.status(200).json(localCache);
  }

  try {
    const databaseId = process.env.NOTION_ABOUT_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
    });

    const page = response.results[0];
    if (!page) return res.status(404).json({ error: "About data not found" });

    const props = page.properties;

    // 모든 텍스트/제목/이메일 속성을 안전하게 추출하는 헬퍼
    const getPlainText = (prop) => {
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
      aboutText: aboutTextRaw ? aboutTextRaw.split("\n") : [],
    };

    localCache = data;
    lastFetchTime = Date.now();

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load about data" });
  }
}
