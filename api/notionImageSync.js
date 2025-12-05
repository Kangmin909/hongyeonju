// /api/notion-image-sync.js
import { Client } from "@notionhq/client";
import axios from "axios";
import crypto from "crypto";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// 환경변수
// OCI_PUT_BASE: OCI에 PUT 요청을 보낼 때의 base URL (끝에 slash 포함) e.g.
//   https://objectstorage.ap-chuncheon-1.oraclecloud.com/p/xxxx/n/namespace/b/bucket/o/
// OCI_PUBLIC_BASE (선택): public하게 접근 가능한 base URL (끝에 slash 포함) e.g.
//   https://ax7gxa1iogyu.objectstorage.ap-chuncheon-1.oci.customer-oci.com/n/namespace/b/bucket/o/
// 만약 OCI_PUBLIC_BASE 미설정이면 OCI_PUT_BASE.replace('/p/', '/') 를 시도함
// NOTION_LINK_PROPERTY (선택, default: "link") : Notion DB에서 업데이트할 URL 속성 이름
const OCI_PUT_BASE = process.env.OCI_PUT_BASE || process.env.OCI_UPLOAD_BASE;
const OCI_PUBLIC_BASE = process.env.OCI_PUBLIC_BASE || "";
const NOTION_LINK_PROPERTY = process.env.NOTION_LINK_PROPERTY || "link";

/**
 * Notion attachment URL 에서 원본 파일명 추출
 * Notion URL 은 인코딩되어 올 수 있음 (attachment%3Auuid%3A파일명)
 */
function extractFilenameFromNotionUrl(notionUrl) {
  try {
    const decoded = decodeURIComponent(notionUrl.split("?")[0]); // 쿼리 제거 후 디코드
    // 'attachment:UUID:파일명' 형태에서 마지막 ':' 이후가 파일명
    if (decoded.includes("attachment:")) {
      const parts = decoded.split(":");
      return parts[parts.length - 1];
    }
    // fallback: URL의 마지막 path segment
    const last = decoded.substring(decoded.lastIndexOf("/") + 1);
    return last || crypto.randomBytes(8).toString("hex");
  } catch (e) {
    return crypto.randomBytes(8).toString("hex");
  }
}

export default async function handler(req, res) {
  try {
    // 허용 메소드: POST
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed. Use POST." });
    }

    const { pageId, imageUrl } = req.body ?? {};

    if (!pageId) {
      return res.status(400).json({ error: "Missing pageId in request body" });
    }
    if (!imageUrl) {
      return res.status(400).json({ error: "Missing imageUrl in request body" });
    }
    if (!OCI_PUT_BASE) {
      return res.status(500).json({ error: "Server misconfigured: OCI_PUT_BASE not set" });
    }

    // 1) 파일명 추출 (원본 유지)
    const originalName = extractFilenameFromNotionUrl(imageUrl);
    // 안전하게 파일명에서 슬래시 제거
    const safeName = originalName.replace(/\//g, "_");

    // Optional: 충돌 방지(원하면 주석 해제)
    // const filename = `${Date.now()}-${safeName}`;
    const filename = safeName;

    // 2) 이미지 다운로드
    const imgRes = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      // Notion의 경우 대부분 공개 URL이지만, User-Agent 등 헤더가 필요하면 여기에 추가 가능
      headers: {
        // 'User-Agent': 'notion-image-sync/1.0', // 필요시 활성화
      },
      timeout: 30_000,
    });
    const binary = imgRes.data;
    const contentType = imgRes.headers["content-type"] || "application/octet-stream";

    // 3) OCI 업로드 (PUT)
    // PUT URL: OCI_PUT_BASE + encodeURIComponent(filename)
    // OCI는 object name을 URL path에 직접 쓰므로 인코딩 필요
    const putUrl = OCI_PUT_BASE.endsWith("/") ? OCI_PUT_BASE + encodeURIComponent(filename) : OCI_PUT_BASE + "/" + encodeURIComponent(filename);

    await axios.put(putUrl, binary, {
      headers: {
        "Content-Type": contentType,
        // 필요시 추가 헤더 (Authorization 등) 넣기
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
      timeout: 30_000,
    });

    // 4) 퍼블릭하게 접근 가능한 final URL 생성
    let finalUrl;
    if (OCI_PUBLIC_BASE) {
      finalUrl = OCI_PUBLIC_BASE.endsWith("/") ? OCI_PUBLIC_BASE + encodeURIComponent(filename) : OCI_PUBLIC_BASE + "/" + encodeURIComponent(filename);
    } else {
      // 기본적으로 PUT URL에 /p/ 이 포함되어 있다면 /p/ 부분을 제거해서 public URL 형태로 변환
      // 예: https://.../p/xxx/n/namespace/b/bucket/o/filename  -> https://.../n/namespace/b/bucket/o/filename
      if (OCI_PUT_BASE.includes("/p/")) {
        const pubBase = OCI_PUT_BASE.replace("/p/", "/");
        finalUrl = pubBase.endsWith("/") ? pubBase + encodeURIComponent(filename) : pubBase + "/" + encodeURIComponent(filename);
      } else {
        // 최후의 수단: PUT URL에서 /o/ 이하를 public path로 보고 대체
        finalUrl = putUrl;
      }
    }

    // 5) Notion 페이지 업데이트 (link 속성)
    const updateProps = {
      [NOTION_LINK_PROPERTY]: {
        url: finalUrl,
      },
    };

    await notion.pages.update({
      page_id: pageId,
      properties: updateProps,
    });

    return res.status(200).json({
      message: "Uploaded to OCI and Notion updated",
      pageId,
      filename,
      finalUrl,
    });
  } catch (err) {
    console.error("notion-image-sync error:", err?.response?.data || err?.message || err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
