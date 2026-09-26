import { renderResumePdf } from "@/lib/resume-pdf";
import type { ResumeLang } from "@/data/resume";

export const runtime = "nodejs";

// GET /cv?lang=en|de  →  always-up-to-date CV generated from src/data/resume.ts
export async function GET(request: Request) {
  const url = new URL(request.url);
  const lang: ResumeLang = url.searchParams.get("lang") === "de" ? "de" : "en";
  const download = url.searchParams.has("download");

  const pdf = await renderResumePdf(lang, url.origin);
  const fileName = lang === "de" ? "Georges-Ishak-Lebenslauf.pdf" : "Georges-Ishak-CV.pdf";

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${fileName}"`,
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
