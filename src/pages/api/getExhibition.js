import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_EXHIBITION_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const data = await Promise.all(
      response.results.map(async (page) => {
        const props = page.properties;
        const pageId = page.id;

        const getPlainText = (prop) => {
          if (!prop) return "";
          if (prop.title) return prop.title[0]?.plain_text || "";
          if (prop.rich_text) return prop.rich_text[0]?.plain_text || "";
          if (prop.select) return prop.select.name || "";
          return "";
        };

        const titleProp = Object.values(props).find((p) => p.type === "title");
        const id = titleProp ? titleProp.title[0]?.plain_text || "" : "";

        let images = [];
        const relationProp = props.ExhibitionDetail || props.Detail || Object.values(props).find(p => p.type === 'relation');

        if (relationProp && relationProp.relation && relationProp.relation.length > 0) {
          const relatedIds = relationProp.relation.map((r) => r.id);
          const relatedPages = await Promise.all(
            relatedIds.map((id) => notion.pages.retrieve({ page_id: id }).catch(() => null))
          );

          images = relatedPages
            .filter((p) => p)
            .map((p) => {
              const pProps = p.properties;
              
              // 1. 링크/파일 속성 찾기: 'link'라는 이름의 URL 속성을 최우선으로 함 (OCI 캐시용)
              const linkProp = pProps.link || pProps.Link || Object.values(pProps).find(prop => prop.type === 'url');
              let link = linkProp?.url || "";

              // 만약 link 속성에 값이 없다면, 기존 방식(files)으로 가져옴
              if (!link) {
                const fileProp = Object.values(pProps).find(prop => prop.type === 'files');
                const fileObj = fileProp?.files?.[0];
                link = fileObj?.file?.url || fileObj?.external?.url || "";
              }

              // 1. ID 찾기 (속성명 'id' 또는 'ID'인 Title 타입)
              const idProp = pProps.id || pProps.ID || Object.values(pProps).find(prop => prop.type === 'title');
              let idVal = idProp?.title?.[0]?.plain_text || "";

              // 2. 제목(Title) 찾기 (속성명 'title' 또는 'Title'인 Rich Text 타입)

              let titleProp = pProps.title || pProps.Title;
              let titleVal = titleProp?.rich_text?.[0]?.plain_text || "";
              
              if (!titleVal) {
                 const fallbackProp = Object.values(pProps).find(prop => prop.type === 'rich_text' && prop !== titleProp);
                 titleVal = fallbackProp?.rich_text?.[0]?.plain_text || "";
              }

              let metaProp = pProps.meta || pProps.Meta;
              let metaVal = metaProp?.rich_text?.[0]?.plain_text || "";
              
              if (!metaVal) {
                 const fallbackMeta = Object.values(pProps).find(prop => prop.type === 'rich_text' && prop !== titleProp && prop !== metaProp);
                 metaVal = fallbackMeta?.rich_text?.[0]?.plain_text || "";
              }

              return { id: idVal || p.id, title: titleVal, meta: metaVal, link };
            })
            .filter(item => item.link)
            .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
        }

        return {
          id: id,
          year: getPlainText(props.year),
          exhibitionTitle: getPlainText(props.exhibitionTitle),
          date: getPlainText(props.date),
          location: getPlainText(props.location),
          description: getPlainText(props.description),
          link: props.link?.url || "",
          images,
        };
      })
    );

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1, stale-while-revalidate=3600"
    );

    res.status(200).json(data);
  } catch (err) {
    console.error("Exhibition API Error:", err);
    res.status(500).json({ error: "Failed to load exhibitions" });
  }
}
