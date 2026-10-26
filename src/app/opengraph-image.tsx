import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "brewStudio - aplikacje webowe, SaaS i automatyzacja dla firm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#faf9f5";
const INK = "#20262d";

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/logo-lockup.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: BG,
      }}
    >
      <img src={logoSrc} width={440} height={348} alt="" />
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 22,
          letterSpacing: "0.2em",
          color: `${INK}8c`,
        }}
      >
        DIGITAL PRODUCT STUDIO
      </div>
    </div>,
    { ...size },
  );
}
