import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_HOME_DB_ID;

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
      return res.status(404).json({ error: "No home data found" });
    }

    const data = {
      id: page.properties.id.title[0]?.plain_text || "",
      link: page.properties.link.url || "",
    };

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load home media" });
  }
}
