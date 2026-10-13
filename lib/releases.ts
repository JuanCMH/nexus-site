import { RELEASES_MANIFEST_URL, RELEASES_URL } from "@/lib/site";

/** La última versión publicada de Nexus para Windows. */
export type LatestRelease = {
  /** Sin la «v»: `0.22.0`. */
  version: string;
  /** Instante de publicación, ISO. */
  publishedAt: string;
  installerUrl: string;
  installerBytes: number;
};

/** El valor de una clave de primer nivel de `latest.yml`, sin comillas. */
function topLevelValue(manifest: string, key: string): string | null {
  const match = manifest.match(new RegExp(`^${key}:[ \\t]*(.+)$`, "m"));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, "") : null;
}

/**
 * Saca de `latest.yml` lo que la página enseña. El archivo lo escribe
 * electron-builder al publicar: `version`, `path` (el instalador),
 * `releaseDate` y el tamaño del instalador en `files`. Solo vale un
 * instalador `*-setup.exe` sin rutas; cualquier otra forma devuelve `null` y
 * la página cae al enlace de las versiones publicadas.
 */
export function parseLatestRelease(manifest: unknown): LatestRelease | null {
  if (typeof manifest !== "string") return null;

  const version = topLevelValue(manifest, "version");
  const file = topLevelValue(manifest, "path");
  const publishedAt = topLevelValue(manifest, "releaseDate");
  if (!version || !file || !publishedAt) return null;
  if (!/^\d+\.\d+\.\d+$/.test(version)) return null;
  if (!/^[\w.-]+-setup\.exe$/.test(file)) return null;
  if (Number.isNaN(Date.parse(publishedAt))) return null;

  const size = manifest.match(/^\s+size:[ \t]*(\d+)[ \t]*$/m);
  if (!size) return null;

  return {
    version,
    publishedAt,
    installerUrl: `${RELEASES_URL}/download/v${version}/${file}`,
    installerBytes: Number(size[1]),
  };
}

/**
 * Lee la última publicación en el servidor, con una hora de caché
 * (docs/directives/03-reglas-sitio.md §5). Si GitHub no responde o responde
 * otra cosa, `null`: nunca lanza.
 */
export async function getLatestRelease(): Promise<LatestRelease | null> {
  try {
    const response = await fetch(RELEASES_MANIFEST_URL, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return parseLatestRelease(await response.text());
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
