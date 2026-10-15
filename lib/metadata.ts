import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

/**
 * Los metadatos de cada página: su canónica y su Open Graph. En Next 16 el
 * `openGraph` de una página reemplaza entero al del layout, así que lo común
 * va aquí y cada página lo repite con su ruta (docs/directives/03-reglas-sitio.md §4).
 * Por lo mismo, la imagen de `app/opengraph-image.tsx` se nombra aquí: el
 * reemplazo la quitaría de las páginas hijas.
 */
export function pageMetadata(path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: SITE_NAME,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Nexus: toda tu agencia de seguros en un solo lugar",
        },
      ],
    },
  };
}
