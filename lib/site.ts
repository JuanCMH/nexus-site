/**
 * Las direcciones que el sitio enlaza. Todas salen del entorno: el dominio
 * definitivo aún no está decidido (docs/directives/00-reglas-generales.md §7)
 * y ninguna se escribe a mano en un componente.
 */

const stripTrailingSlash = (url: string) => url.replace(/\/+$/, "");

/** El propio sitio: canónicas, sitemap y Open Graph. */
export const SITE_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

/** La app web (`app.<dominio>`). Vacía mientras no esté publicada. */
export const APP_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_APP_URL ?? "",
);

/**
 * El repositorio público de GitHub donde se publican los instaladores.
 * La página de descarga lee de ahí la última versión
 * (docs/directives/03-reglas-sitio.md §5).
 */
export const RELEASES_REPO =
  process.env.NEXUS_RELEASES_REPO ?? "JuanCMH/nexus-desktop-releases";

export const SITE_NAME = "Nexus";

export const SITE_DESCRIPTION =
  "El sistema de registro de una agencia de seguros: clientes, pólizas, documentos y tareas en un solo lugar, operado por tu equipo y por tu agente de IA.";
