import { RELEASES_API_URL, RELEASES_URL } from "@/lib/site";

/** La última versión publicada de Nexus para Windows. */
export type LatestRelease = {
  /** Sin la «v»: `0.22.0`. */
  version: string;
  /** Instante de publicación, ISO. */
  publishedAt: string;
  installerUrl: string;
  installerBytes: number;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

/**
 * Saca de la respuesta de GitHub lo que la página enseña. El instalador es
 * el archivo `*-setup.exe` de la publicación, y solo vale si se descarga del
 * repositorio de publicaciones: cualquier otra forma devuelve `null` y la
 * página cae al enlace de las versiones publicadas.
 */
export function parseLatestRelease(data: unknown): LatestRelease | null {
  if (!isRecord(data) || data.draft === true || data.prerelease === true) {
    return null;
  }
  const { tag_name: tag, published_at: publishedAt, assets } = data;
  if (typeof tag !== "string" || typeof publishedAt !== "string") return null;
  if (Number.isNaN(Date.parse(publishedAt)) || !Array.isArray(assets)) {
    return null;
  }

  const version = tag.replace(/^v/, "");
  if (!/^\d+\.\d+\.\d+$/.test(version)) return null;

  for (const asset of assets) {
    if (!isRecord(asset)) continue;
    const { name, browser_download_url: url, size } = asset;
    if (
      typeof name === "string" &&
      name.endsWith("-setup.exe") &&
      typeof url === "string" &&
      url.startsWith(`${RELEASES_URL}/download/`) &&
      typeof size === "number"
    ) {
      return { version, publishedAt, installerUrl: url, installerBytes: size };
    }
  }
  return null;
}

/**
 * Lee la última publicación en el servidor, con una hora de caché
 * (docs/directives/03-reglas-sitio.md §5). Si GitHub no responde o responde
 * otra cosa, `null`: nunca lanza.
 */
export async function getLatestRelease(): Promise<LatestRelease | null> {
  try {
    const response = await fetch(RELEASES_API_URL, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return parseLatestRelease(await response.json());
  } catch {
    return null;
  }
}

/** `12/10/2026`, en la hora de Colombia. */
export function formatReleaseDate(publishedAt: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Bogota",
  }).format(new Date(publishedAt));
}

/** `134 MB`. */
export function formatInstallerSize(bytes: number): string {
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}
