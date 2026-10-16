/**
 * Los planes de Nexus. Es la única fuente de
 * los precios: la página no escribe ninguna cifra a mano
 * (docs/directives/02-producto.md §6, docs/plans/2026-10-14-precios-design.md).
 */

export type Billing = "monthly" | "annual";

/**
 * El plan de Claude que recomendamos para cada plan de Nexus. Es una
 * recomendación del dueño (2026-10-14), no un requisito: los planes y sus
 * precios los define Anthropic y se enlazan, no se copian
 * (docs/directives/02-producto.md §7). Nombres comprobados en
 * claude.com/pricing el 2026-10-14.
 */
export type ClaudePlan = "Pro" | "Max 5x" | "Max 20x";

/** Lo que cuesta al mes, según la forma de pago. */
type ByBilling = Record<Billing, number>;

export type PricedPlan = {
  id: "independiente" | "agencia" | "agencia-plus";
  name: string;
  audience: string;
  includedUsers: number;
  maxUsers: number;
  /**
   * Uno por usuario incluido, más 2 de la agencia (siniestros@,
   * renovaciones@); Independiente trae 2. Cada usuario adicional trae el suyo.
   */
  mailboxes: number;
  storageGb: number;
  /** Pagando el año, el equivalente al mes. */
  base: ByBilling;
  /**
   * `null`: el plan no admite usuarios adicionales. Un usuario adicional
   * trae un correo vinculado más; el almacenamiento no cambia.
   */
  extraUser: ByBilling | null;
  claudePlan: ClaudePlan;
  /** El plan que la página destaca. Uno solo. */
  recommended?: true;
  onboarding: { price: number; scope: string };
};

/** Pagando el año se pagan 10 meses de 12. */
export const MONTHS_FREE_PER_YEAR = 2;

export const PRICED_PLANS: readonly PricedPlan[] = [
  {
    id: "independiente",
    name: "Independiente",
    audience: "Para quien trabaja solo",
    includedUsers: 1,
    maxUsers: 1,
    mailboxes: 2,
    storageGb: 15,
    base: { monthly: 39, annual: 32 },
    extraUser: null,
    claudePlan: "Pro",
    onboarding: {
      price: 150,
      scope:
        "Una sesión, la importación de clientes y pólizas y la conexión del agente",
    },
  },
  {
    id: "agencia",
    name: "Agencia",
    audience: "Para un equipo de hasta 10 usuarios",
    includedUsers: 5,
    maxUsers: 10,
    mailboxes: 7,
    storageGb: 100,
    base: { monthly: 129, annual: 107 },
    extraUser: { monthly: 19, annual: 16 },
    claudePlan: "Max 5x",
    recommended: true,
    onboarding: {
      price: 500,
      scope:
        "Sesión de inicio, importación, plantillas, correos vinculados, conexión del agente, 2 o 3 flujos adaptados y 2 sesiones de formación",
    },
  },
  {
    id: "agencia-plus",
    name: "Agencia+",
    audience: "Para equipos con áreas, de hasta 25 usuarios",
    includedUsers: 15,
    maxUsers: 25,
    mailboxes: 17,
    storageGb: 300,
    base: { monthly: 279, annual: 232 },
    extraUser: { monthly: 15, annual: 12 },
    claudePlan: "Max 20x",
    onboarding: {
      price: 1000,
      scope:
        "Lo de Agencia, más la carga de documentos históricos con el agente, los roles armados y formación por áreas",
    },
  },
];

/** El plan más grande: a convenir, sin precio publicado. */
export const CUSTOM_PLAN = {
  name: "Corredora",
  audience: "Para más de 25 usuarios",
  /** Al mes; el precio final se conviene con cada corredora. */
  extraUserFrom: 14,
  claudePlan: "Max 20x" satisfies ClaudePlan,
} as const;

/**
 * Medido el 2026-10-14 en una agencia real: un documento pesa en promedio
 * unos 970 KB, así que 1 GB guarda unos 1.000.
 */
export const DOCUMENTS_PER_GB = 1000;

/** Lo que se paga en un año completo y lo que se ahorra frente al mensual. */
export function annualTotals(plan: PricedPlan) {
  const total = plan.base.annual * 12;
  return { total, savings: plan.base.monthly * 12 - total };
}

const groupedNumber = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 0,
  useGrouping: "always",
});

const groupedDecimal = new Intl.NumberFormat("es-CO", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: "always",
});

/** `1.284`, con el punto de miles también en cifras de cuatro dígitos. */
export function formatNumber(value: number): string {
  return groupedNumber.format(value);
}

/** `USD 1.284`; con céntimos solo si los hay: `USD 25,80`. */
export function formatUsd(value: number): string {
  return Number.isInteger(value)
    ? `USD ${groupedNumber.format(value)}`
    : `USD ${groupedDecimal.format(value)}`;
}

/** `3.181,74`. */
export function formatDecimal(value: number): string {
  return groupedDecimal.format(value);
}
