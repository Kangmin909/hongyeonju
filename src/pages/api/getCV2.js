import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

let localCache = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 30;

export default async function handler(req, res) {
  const { force } = req.query;

  if (force !== "true" && localCache && (Date.now() - lastFetchTime < CACHE_TTL)) {
    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
    return res.status(200).json(localCache);
  }

  try {
    const databaseId = process.env.NOTION_CV2_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: "id", direction: "ascending" }],
    });

    const data = response.results.map((page) => ({
      year: page.properties.year.title[0]?.plain_text || "",
      content: page.properties.content.rich_text[0]?.plain_text || "",
    }));

    localCache = data;
    lastFetchTime = Date.now();

    res.setHeader(
      "Cache-Control",
      "s-maxage=1800, stale-while-revalidate=3600"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load CV2" });
  }
}