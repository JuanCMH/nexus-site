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
  version: 2,
  /** Fecha de negocio, `AAAA-MM-DD`: la del día en que se publica. */
  effectiveDate: "2026-11-10",
} as const;

/** La versión de `nexus-app` para la que se escribió la guía del conector. */
export const CONNECTOR_GUIDE_APP_VERSION = "0.68.3";

/** Una fecha de negocio (`AAAA-MM-DD`) escrita en el idioma de la página. */
export function formatLegalDate(date: string, locale: "es-CO" | "en-US") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

/**
 * La versión vigente del Acuerdo de uso, que `/terminos` reproduce
 * (docs/plans/2026-11-10-terminos-design.md). Copia de
 * `AGENCY_AGREEMENT_VERSION` y `AGENCY_AGREEMENT_EFFECTIVE_DATE` de
 * `nexus-app` (`src/shared/legal/agency-agreement.ts`): una versión nueva
 * allá cambia esto y el texto de `lib/agency-agreement.ts` en el mismo
 * cambio.
 */
export const AGENCY_AGREEMENT = {
  version: 1,
  /** Fecha de negocio, `AAAA-MM-DD`: desde cuándo rige en la app. */
  effectiveDate: "2026-10-20",
} as const;
