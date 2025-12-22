import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_CV2_DB_ID;

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
        content: page.properties.content.rich_text[0]?.plain_text || "",
      };
    });

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load cv2" });
  }
}
