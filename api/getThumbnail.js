import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_WORKS_DB_ID;

    // 모든 작품 데이터 가져오기
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const works = response.results.map((page) => ({
      id: page.properties.id.title[0]?.plain_text || "",
      year: page.properties.year.select?.name || "0",
      link: page.properties.link.url || "",
    }));

    if (works.length === 0) {
      return res.status(404).send("No works found");
    }

    // 1) 가장 큰 연도 찾기
    const years = works.map(w => parseInt(w.year, 10));
    const maxYear = Math.max(...years);

    // 2) 해당 연도의 작품들 필터링
    const latestYearWorks = works.filter(w => parseInt(w.year, 10) === maxYear);

    // 3) 그 중 ID가 가장 작은 작품 찾기
    const representativeWork = latestYearWorks.sort((a, b) => {
      return a.id.localeCompare(b.id, undefined, { numeric: true });
    })[0];

    if (!representativeWork || !representativeWork.link) {
      return res.status(404).send("Representative image not found");
    }

    // 이미지가 .mp4인 경우 썸네일로 쓸 수 없으므로, 이미지를 찾을 때까지 다음 작품 탐색 (옵션)
    // 여기서는 일단 해당 링크로 리다이렉트합니다.
    res.redirect(302, representativeWork.link);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}
