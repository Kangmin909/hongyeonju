import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const exhibitionDbId = process.env.NOTION_EXHIBITION_DB_ID;
    const imageDbId = process.env.NOTION_EXHIBITION_DETAIL_DB_ID;

    // 1️⃣ 전시 DB 조회
    const exhibitionRes = await notion.databases.query({
      database_id: exhibitionDbId,
      sorts: [{ property: "id", direction: "ascending" }],
    });

    // 2️⃣ 이미지 DB 조회
    const imageRes = await notion.databases.query({
      database_id: imageDbId,
      sorts: [{ property: "id", direction: "ascending" }],
    });

    // 3️⃣ 이미지 map (exhibitionId → images[])
    const imageMap = {};

    imageRes.results.forEach((page) => {
      const exhibitionRel = page.properties.exhibition.relation[0]?.id;
      if (!exhibitionRel) return;

      if (!imageMap[exhibitionRel]) {
        imageMap[exhibitionRel] = [];
      }

      imageMap[exhibitionRel].push({
        id: page.properties.id.title[0]?.plain_text || "",
        title: page.properties.title.rich_text[0]?.plain_text || "",
        meta: page.properties.meta.rich_text[0]?.plain_text || "",
        link: page.properties.link.url || "",
      });
    });

    // 4️⃣ 최종 JSON 조립
    const data = exhibitionRes.results.map((page) => {
      const pageId = page.id;

      return {
        id: page.properties.id.title[0]?.plain_text || "",
        year: page.properties.year?.select?.name || "",
        exhibitionTitle: page.properties.exhibitionTitle?.rich_text?.[0]?.plain_text || "",
        date: page.properties.date?.rich_text?.[0]?.plain_text || "",
        location: page.properties.location?.rich_text?.[0]?.plain_text || "",
        description: page.properties.description?.rich_text?.[0]?.plain_text || "",
        link: page.properties.link?.url || "",
        images: imageMap[pageId] || [],
      };
    });

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load exhibitions" });
  }
}
