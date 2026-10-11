import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Todo el sitio es público e indexable: la app vive en otro origen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
