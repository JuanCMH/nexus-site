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
    // Las dos páginas con traducción (00 §6) declaran su par.
    ...[
      { es: "/agente", en: "/en/agent", priority: 0.7 },
      { es: "/privacidad", en: "/en/privacy", priority: 0.3 },
    ].flatMap(({ es, en, priority }) =>
      [es, en].map((path) => ({
        url: `${SITE_URL}${path}`,
        changeFrequency: "monthly" as const,
        priority,
        alternates: {
          languages: { "es-CO": `${SITE_URL}${es}`, en: `${SITE_URL}${en}` },
        },
      })),
    ),
  ];
}
