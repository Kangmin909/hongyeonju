// /api/notion-image-sync.js
import { Client } from "@notionhq/client";

// Notion Client
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// PAR URL (OCI Presigned URL)
const OCI_PAR_URL = process.env.OCI_PAR_URL;

export default async function handler(req, res) {
  try {
    console.log("🔥 Webhook received!");
    console.log("Body:", JSON.stringify(req.body, null, 2));

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // 1) Payload 파싱
    const pageId = req.body?.data?.id;
    const fileInfo = req.body?.data?.properties?.image?.files?.[0];
    const imageUrl = fileInfo?.file?.url;
    const originalName = fileInfo?.name;

    if (!pageId || !imageUrl) {
      console.error("❌ Missing required fields", { pageId, imageUrl });
      return res.status(400).json({ error: "Invalid payload structure" });
    }

    console.log("📌 Extracted pageId:", pageId);
    console.log("📌 Extracted imageUrl:", imageUrl);
    console.log("📌 Original filename:", originalName);

    if (!OCI_PAR_URL) {
      console.error("❌ PAR URL not found in env");
      return res.status(500).json({ error: "Missing OCI_PAR_URL" });
    }

    // 2) 이미지 다운로드
    const imageResponse = await fetch(imageUrl);
    const arrayBuffer = await imageResponse.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    // 3) OCI PAR 업로드
    const uploadName = originalName || `image-${Date.now()}.png`;

    // PAR URL은 파일명을 포함한 완성 URL이 아님 → 파일명은 쿼리로 지정됨
    const parUploadUrl = `${OCI_PAR_URL}${encodeURIComponent(uploadName)}`;

    console.log("📤 Uploading via PAR:", parUploadUrl);

    const uploadResponse = await fetch(parUploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "image/png",
      },
      body: imageBuffer,
    });

    if (!uploadResponse.ok) {
      const text = await uploadResponse.text();
      throw new Error(`Upload failed: ${text}`);
    }

    console.log("✅ Image uploaded via PAR!");

    // 4) Notion 업데이트용 실제 공개 URL 구성
    // PAR 업로드는 최종 object URL 규칙을 따름
    const finalImageUrl = parUploadUrl.split("?")[0]; // ?filename 앞부분이 실제 URL

    console.log("🔗 Final OCI URL:", finalImageUrl);

    // 5) Notion DB 업데이트
    const notionUpdateRes = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      },
      body: JSON.stringify({
        properties: {
          link: {
            type: "url",
            url: finalImageUrl
          }
        }
      })
    });

    const notionResult = await notionUpdateRes.json();
    console.log("📝 Notion Update Result:", notionResult);

    return res.status(200).json({
      ok: true,
      pageId,
      uploadedUrl: finalImageUrl,
    });

  } catch (err) {
    console.error("❌ ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
