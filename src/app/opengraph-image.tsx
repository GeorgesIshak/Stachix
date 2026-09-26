import { ImageResponse } from "next/og";

export const alt = "Georges Ishak — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(900px 500px at 10% 0%, rgba(240,82,156,0.35), transparent 60%), #09090f",
          color: "#f4f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#a3a3b2" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              background: "#f0529c",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            GI
          </div>
          Georges Ishak
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Full-Stack Developer</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#a3a3b2" }}>
            React · Next.js · TypeScript · WordPress — based in Germany
          </div>
        </div>
      </div>
    ),
    size
  );
}
