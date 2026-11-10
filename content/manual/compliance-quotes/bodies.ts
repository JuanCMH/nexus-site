import type { ManualArticleBody } from "../types";
import * as calculationAndBonds from "./calculation-and-bonds";
import * as createQuote from "./create-quote";
import * as exportQuote from "./export-quote";
import * as quoteStatuses from "./quote-statuses";

/** El cuerpo de cada artículo de «cotizaciones-de-cumplimiento», por su slug. */
export const COMPLIANCE_QUOTES_BODIES: Record<string, ManualArticleBody> = {
  "crear-una-cotizacion": createQuote,
  "estados-de-una-cotizacion": quoteStatuses,
  "exportar-una-cotizacion": exportQuote,
  "calculo-y-amparos": calculationAndBonds,
};
