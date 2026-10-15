import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Una página nueva entra aquí en el mismo cambio que la crea
// (docs/directives/03-reglas-sitio.md §4).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/precios`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/descargar`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solicitar-acceso`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
