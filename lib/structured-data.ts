import type { LatestRelease } from "@/lib/releases";
import { APP_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// Solo lo que es verdad (docs/directives/03-reglas-sitio.md §4): sin
// valoraciones ni reseñas. Los precios entran como `offers` cuando se abra
// el pago (docs/plans/2026-10-14-precios-design.md), no antes.

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

/** La marca y el sitio, en todas las páginas. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/nexus-app-icon-512.png`,
        width: 512,
        height: 512,
      },
      areaServed: { "@type": "Country", name: "Colombia" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "es-CO",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

/**
 * El producto. Windows y la web están publicados; macOS y el celular no se
 * afirman (docs/directives/02-producto.md §4). Con la versión publicada, en
 * /descargar, suma su número, su fecha y su instalador.
 */
export function softwareApplication(release?: LatestRelease | null) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Web",
    url: `${SITE_URL}/`,
    installUrl: `${SITE_URL}/descargar`,
    inLanguage: "es-CO",
    publisher: { "@id": ORGANIZATION_ID },
    ...(APP_URL ? { sameAs: APP_URL } : {}),
    ...(release
      ? {
          softwareVersion: release.version,
          datePublished: release.publishedAt,
          downloadUrl: release.installerUrl,
        }
      : {}),
  };
}
