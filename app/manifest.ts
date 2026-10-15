import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

// Para quien guarda el sitio en la pantalla de inicio. El icono es el de la
// app: la N blanca sobre medianoche (docs/directives/01-marca.md).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: "es-CO",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0d1f3c",
    icons: [
      {
        src: "/brand/nexus-app-icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/brand/nexus-app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
