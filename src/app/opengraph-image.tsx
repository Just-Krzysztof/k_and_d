import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK_LIGHT = "#FAF9F5";
const ACCENT = "#4A7FE0";
const DARK_BG = "#1c1a19";

const markRects: { x: number; y: number; w: number; h: number; fill: string }[] = [
  { x: 20, y: 22, w: 11, h: 82, fill: INK_LIGHT },
  { x: 31, y: 65, w: 39, h: 11, fill: INK_LIGHT },
  { x: 59, y: 65, w: 11, h: 39, fill: INK_LIGHT },
  { x: 31, y: 93, w: 39, h: 11, fill: INK_LIGHT },
  { x: 70, y: 65, w: 39, h: 11, fill: ACCENT },
  { x: 70, y: 76, w: 11, h: 14, fill: ACCENT },
  { x: 70, y: 79, w: 39, h: 11, fill: ACCENT },
  { x: 98, y: 90, w: 11, h: 14, fill: ACCENT },
  { x: 70, y: 93, w: 39, h: 11, fill: ACCENT },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: DARK_BG,
        }}
      >
        <div style={{ position: "relative", width: 128, height: 128, display: "flex" }}>
          {markRects.map((r, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: r.x,
                top: r.y,
                width: r.w,
                height: r.h,
                background: r.fill,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: INK_LIGHT,
          }}
        >
          brew<span style={{ color: ACCENT }}>Studio</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 22,
            letterSpacing: "0.2em",
            color: "rgba(250,249,245,0.55)",
          }}
        >
          DIGITAL PRODUCT STUDIO
        </div>
      </div>
    ),
    { ...size },
  );
}
