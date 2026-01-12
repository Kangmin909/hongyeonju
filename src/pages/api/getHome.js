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
    const databaseId = process.env.NOTION_HOME_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "id",
          direction: "ascending",
        },
      ],
      page_size: 1,
    });

    const page = response.results[0];
    if (!page) return res.status(404).json({ error: "No home data found" });

    const data = {
      id: page.properties.id.title[0]?.plain_text || "",
      link: page.properties.link.url || "",
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
    res.status(500).json({ error: "Failed to load home media" });
  }
}