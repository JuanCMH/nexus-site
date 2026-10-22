/**
 * Los datos que comparten la política de privacidad y su traducción
 * (docs/plans/2026-10-21-privacidad-y-conector-design.md). Salen del Acuerdo
 * de uso de `nexus-app` (`src/shared/legal/agency-agreement.ts`); si allá
 * cambian, cambian aquí.
 */

/** Quien responde por Nexus: la misma empresa del Acuerdo de uso. */
export const CONTROLLER = {
  name: "MAIN Módulos, Aplicaciones e Innovación S.A.S.",
  nit: "901.510.461-9",
  address: "Carrera 7 B n.º 123-46, Bogotá D.C., Colombia",
} as const;

/**
 * La versión vigente de la política. Una versión nueva cambia las dos cosas
 * y las dos páginas (`/privacidad` y `/en/privacy`) en el mismo cambio.
 */
export const PRIVACY_POLICY = {
  version: 1,
  /** Fecha de negocio, `AAAA-MM-DD`: la del día en que se publica. */
  effectiveDate: "2026-10-21",
} as const;

/** La versión de `nexus-app` para la que se escribió la guía del conector. */
export const CONNECTOR_GUIDE_APP_VERSION = "0.29.0";

/** Una fecha de negocio (`AAAA-MM-DD`) escrita en el idioma de la página. */
export function formatLegalDate(date: string, locale: "es-CO" | "en-US") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
