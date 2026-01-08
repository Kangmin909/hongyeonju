import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
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

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load works" });
  }
}
