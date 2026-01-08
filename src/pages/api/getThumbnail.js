import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_WORKS_DB_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const works = response.results.map((page) => ({
      id: page.properties.id.title[0]?.plain_text || "",
      year: page.properties.year.select?.name || "0",
      link: page.properties.link.url || "",
    }));

    if (works.length === 0) {
      return res.redirect(302, "https://hongyeonju.vercel.app/favicon.ico");
    }

    // 1) 연도 내림차순, ID 오름차순 정렬
    const sortedWorks = works.sort((a, b) => {
      if (b.year !== a.year) return parseInt(b.year, 10) - parseInt(a.year, 10);
      return a.id.localeCompare(b.id, undefined, { numeric: true });
    });

    // 2) 영상이 아닌 이미지만 필터링 (.mp4, youtube 제외)
    const imageWork = sortedWorks.find(w => {
      const link = w.link.toLowerCase();
      const isVideo = link.endsWith('.mp4') || link.includes('youtube.com') || link.includes('youtu.be');
      return !isVideo && link.length > 0;
    });

    if (imageWork && imageWork.link) {
      console.log("✅ Selected Thumbnail Image:", imageWork.link);
      res.redirect(302, imageWork.link);
    } else {
      // 이미지가 하나도 없으면 파비콘으로 대체
      res.redirect(302, "https://hongyeonju.vercel.app/favicon.ico");
    }

  } catch (err) {
    console.error(err);
    res.redirect(302, "https://hongyeonju.vercel.app/favicon.ico");
  }
}