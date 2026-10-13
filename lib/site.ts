/**
 * Las direcciones que el sitio enlaza. Todas salen del entorno y ninguna se
 * escribe a mano en un componente. El dominio es `n3xus.cloud`
 * (docs/directives/00-reglas-generales.md §3.1).
 */

const stripTrailingSlash = (url: string) => url.replace(/\/+$/, "");

/** El propio sitio: canónicas, sitemap y Open Graph. */
export const SITE_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

/**
 * La app web, publicada desde `nexus-app` 0.22.0: a ella lleva «Iniciar
 * sesión». Definida vacía, el sitio no enseña ese enlace.
 */
export const APP_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.n3xus.cloud",
);

/**
 * El backend de `nexus-app`, que recibe las solicitudes de acceso
 * (docs/directives/03-reglas-sitio.md §8). Vacía mientras el endpoint no
 * exista: el formulario lo dice en vez de fingir que envía.
 */
export const API_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_API_URL ?? "",
);

/**
 * El repositorio público de GitHub donde se publican los instaladores.
 * La página de descarga lee de ahí la última versión
 * (docs/directives/03-reglas-sitio.md §5).
 */
export const RELEASES_REPO =
  process.env.NEXUS_RELEASES_REPO ?? "JuanCMH/nexus-app-releases";

/** Las versiones publicadas, para quien las quiere ver en GitHub. */
export const RELEASES_URL = `https://github.com/${RELEASES_REPO}/releases`;

/** La última publicación, tal como la entrega la API de GitHub. */
export const RELEASES_API_URL = `https://api.github.com/repos/${RELEASES_REPO}/releases/latest`;

export const SITE_NAME = "Nexus";

export const SITE_DESCRIPTION =
  "El sistema de registro de una agencia de seguros: clientes, pólizas, documentos y tareas en un solo lugar, operado por tu equipo y por tu agente de IA.";
