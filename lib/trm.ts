import { formatDecimal, formatNumber } from "@/lib/pricing";
import { TRM_URL } from "@/lib/site";

/** La TRM que rige un día. */
export type Trm = {
  /** Pesos por dólar. */
  value: number;
  /** Desde cuándo rige, `AAAA-MM-DD`. */
  since: string;
};

const ISO_DAY = /^\d{4}-\d{2}-\d{2}/;

/**
 * Entre las filas de datos abiertos, la TRM que rige `today` (`AAAA-MM-DD`,
 * en hora de Colombia). La del día siguiente se publica por adelantado y no
 * vale todavía; la de un sábado rige hasta el lunes. Cualquier otra forma
 * devuelve `null` y la página enseña solo dólares.
 */
export function pickCurrentTrm(rows: unknown, today: string): Trm | null {
  if (!Array.isArray(rows)) return null;

  for (const row of rows) {
    if (typeof row !== "object" || row === null) continue;
    const { valor, vigenciadesde, vigenciahasta } = row as Record<
      string,
      unknown
    >;
    if (
      typeof valor !== "string" ||
      typeof vigenciadesde !== "string" ||
      typeof vigenciahasta !== "string" ||
      !ISO_DAY.test(vigenciadesde) ||
      !ISO_DAY.test(vigenciahasta)
    ) {
      continue;
    }
    const since = vigenciadesde.slice(0, 10);
    const until = vigenciahasta.slice(0, 10);
    const value = Number(valor);
    // Una TRM fuera de este rango es un dato roto, no un precio que enseñar.
    if (!Number.isFinite(value) || value < 1000 || value > 10000) continue;
    if (since <= today && today <= until) return { value, since };
  }

  return null;
}

/** Hoy, `AAAA-MM-DD`, en hora de Colombia. */
export function todayInColombia(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
  }).format(now);
}

/**
 * Lee la TRM en el servidor, con revalidación cada 6 horas
 * (docs/directives/03-reglas-sitio.md §5.1). Si no responde o responde otra
 * cosa, `null`: nunca lanza.
 */
export async function getTrm(): Promise<Trm | null> {
  try {
    const response = await fetch(TRM_URL, { next: { revalidate: 21600 } });
    if (!response.ok) return null;
    return pickCurrentTrm(await response.json(), todayInColombia());
  } catch {
    return null;
  }
}

/** `≈ COP 410.000`: el valor en pesos de un precio en dólares, a miles. */
export function formatCopEstimate(usd: number, trm: Trm): string {
  return `≈ COP ${formatNumber(Math.round((usd * trm.value) / 1000) * 1000)}`;
}

/** `COP 3.181,74`. */
export function formatTrmValue(trm: Trm): string {
  return `COP ${formatDecimal(trm.value)}`;
}

/** `14/10/2026`. */
export function formatTrmDate(trm: Trm): string {
  const [year, month, day] = trm.since.split("-");
  return `${day}/${month}/${year}`;
}
