import { ImageResponse } from "next/og";

// Home-screen icon for iPhone/iPad (same design as icon.svg)
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0F1F",
          color: "#fff",
          fontSize: 120,
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        G<span style={{ color: "#EC4899" }}>.</span>
      </div>
    ),
    size
  );
}
