import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// La imagen al compartir cualquier página (docs/directives/03-reglas-sitio.md
// §4): el logotipo en blanco sobre medianoche y el titular de la landing
// como declaración de marca, en Cormorant Garamond cursiva
// (docs/directives/01-marca.md). Satori no lee woff2: va el woff.

export const alt = "Nexus: toda tu agencia de seguros en un solo lugar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MIDNIGHT = "#0d1f3c";

export default async function OpenGraphImage() {
  const [wordmark, cormorant] = await Promise.all([
    readFile(join(process.cwd(), "public/brand/nexus-wordmark.svg"), "utf8"),
    readFile(
      join(
        process.cwd(),
        "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-italic.woff",
      ),
    ),
  ]);
  const whiteWordmark = `data:image/svg+xml;base64,${Buffer.from(
    wordmark.replace("<svg ", '<svg fill="#ffffff" '),
  ).toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        background: MIDNIGHT,
        color: "#ffffff",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Satori solo dibuja <img> */}
      <img src={whiteWordmark} width={276} height={60} alt="" />
      <div
        style={{
          fontFamily: "Cormorant Garamond",
          fontStyle: "italic",
          fontSize: 88,
          lineHeight: 1.05,
          maxWidth: 900,
        }}
      >
        Toda tu agencia de seguros en un solo lugar
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: cormorant,
          style: "italic",
          weight: 600,
        },
      ],
    },
  );
}
