import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/content/blog";

export const runtime = "nodejs";
export const alt = "Assunção & Santos Advogados — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Assunção & Santos Advogados";
  const category = post?.category ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f1e8",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "999px",
              border: "2px solid #a37e47",
              color: "#7e5c2b",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            A&S
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: "#0b0f19", fontWeight: 600 }}>
            Assunção & Santos Advogados
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#7e5c2b",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "60px",
              lineHeight: 1.1,
              color: "#0b0f19",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", width: "56px", height: "3px", backgroundColor: "#c9a36b" }} />
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#2a3142",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            assuncaoesantos.com.br · Mooca, São Paulo
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
