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
    const databaseId = process.env.NOTION_EXHIBITION_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: "id", direction: "ascending" }],
    });

    const data = await Promise.all(
      response.results.map(async (page) => {
        const props = page.properties;
        const pageId = page.id;

        const blocks = await notion.blocks.children.list({ block_id: pageId });
        const images = blocks.results
          .filter((block) => block.type === "image")
          .map((block) => ({
            id: block.id,
            title: block.image.caption[0]?.plain_text || "",
            meta: block.image.caption[1]?.plain_text || "",
            link: block.image.type === "external" ? block.image.external.url : block.image.file.url,
          }));

        return {
          id: props.id.title[0]?.plain_text || "",
          year: props.year.select?.name || "",
          exhibitionTitle: props.exhibitionTitle.rich_text[0]?.plain_text || "",
          date: props.date.rich_text[0]?.plain_text || "",
          location: props.location.rich_text[0]?.plain_text || "",
          description: props.description.rich_text[0]?.plain_text || "",
          link: props.link.url || "",
          images,
        };
      })
    );

    localCache = data;
    lastFetchTime = Date.now();

    res.setHeader(
      "Cache-Control",
      "s-maxage=1800, stale-while-revalidate=3600"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load exhibitions" });
  }
}