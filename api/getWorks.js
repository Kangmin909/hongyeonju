import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_WORKS_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "ID",
          direction: "ascending",
        },
      ],
    });

    const data = response.results.map((page) => {
      return {
        id: page.properties.ID.number,
        year: page.properties.Year.text[0]?.plain_text || "",
        title: page.properties.Title.text[0]?.plain_text || "",
        meta: page.properties.Meta.text[0]?.plain_text || "",
        link: page.properties.Link.url || "",
      };
    });

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load works" });
  }
}
