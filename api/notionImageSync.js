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
    const fileUrl = fileInfo?.file?.url;
    const originalName = fileInfo?.name;

    if (!pageId || !fileUrl || !originalName) {
      console.error("❌ Missing required fields", {
        pageId,
        fileUrl,
        originalName,
      });
      return res.status(400).json({ error: "Invalid payload structure" });
    }

    console.log("📌 Extracted pageId:", pageId);
    console.log("📌 Extracted fileUrl:", fileUrl);
    console.log("📌 Original filename:", originalName);

    if (!OCI_PAR_URL) {
      console.error("❌ PAR URL not found in env");
      return res.status(500).json({ error: "Missing OCI_PAR_URL" });
    }

    // 2) 파일 타입 판별 (확장자 기준)
    const ext = originalName.split(".").pop().toLowerCase();

    const isImage = ["png", "jpg", "jpeg", "webp", "gif"].includes(ext);
    const isVideo = ["mp4", "mov", "webm"].includes(ext);

    if (!isImage && !isVideo) {
      console.error("❌ Unsupported file type:", ext);
      return res.status(400).json({ error: "Unsupported file type" });
    }

    // Content-Type 결정
    let contentType;
    if (isImage) {
      contentType = `image/${ext === "jpg" ? "jpeg" : ext}`;
    } else {
      contentType = "video/mp4";
    }

    // 3) 파일 다운로드
    const fileResponse = await fetch(fileUrl);
    const arrayBuffer = await fileResponse.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // 4) OCI PAR 업로드
    const timestamp = Date.now(); // ms 단위
    const safeName = originalName.replace(/\s+/g, "_"); // 공백 제거(권장)
    const uploadName = `${safeName}_${timestamp}`;
    const parUploadUrl = `${OCI_PAR_URL}${encodeURIComponent(uploadName)}`;

    console.log("📤 Uploading via PAR:", parUploadUrl);
    console.log("📄 Detected Content-Type:", contentType);

    const uploadResponse = await fetch(parUploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
      },
      body: fileBuffer,
    });

    if (!uploadResponse.ok) {
      const text = await uploadResponse.text();
      throw new Error(`Upload failed: ${text}`);
    }

    console.log("✅ File uploaded via PAR!");

    // 5) 실제 OCI Object URL
    const finalFileUrl = parUploadUrl.split("?")[0];

    console.log("🔗 Final OCI URL:", finalFileUrl);

    // 6) Notion DB 업데이트
    const notionUpdateRes = await fetch(
      `https://api.notion.com/v1/pages/${pageId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({
          properties: {
            link: {
              type: "url",
              url: finalFileUrl,
            },
          },
        }),
      }
    );

    const notionResult = await notionUpdateRes.json();
    console.log("📝 Notion Update Result:", notionResult);

    return res.status(200).json({
      ok: true,
      pageId,
      type: isImage ? "image" : "video",
      uploadedUrl: finalFileUrl,
    });
  } catch (err) {
    console.error("❌ ERROR:", err);
    return res.status(500).json({ error: err.message });
  }
}
