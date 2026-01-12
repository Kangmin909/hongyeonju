import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_CV2_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const data = response.results.map((page) => {
      const p = page.properties;
      const getPlainText = (prop) => {
        if (!prop) return "";
        if (prop.title) return prop.title[0]?.plain_text || "";
        if (prop.rich_text) return prop.rich_text[0]?.plain_text || "";
        if (prop.select) return prop.select.name || "";
        return "";
      };

      return {
        id: getPlainText(p.id),
        year: getPlainText(p.year),
        content: getPlainText(p.content),
      };
    });

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=604800"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error("CV2 API Error:", err);
    res.status(500).json({ error: "Failed to load CV2" });
  }
}