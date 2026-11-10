import type { ManualArticleBody } from "../types";
import * as board from "./board";
import * as myDay from "./my-day";
import * as productionAndYearClose from "./production-and-year-close";

/** El cuerpo de cada artículo de «inicio», por su slug. */
export const HOME_BODIES: Record<string, ManualArticleBody> = {
  "mi-dia": myDay,
  "tablero-de-la-agencia": board,
  "produccion-y-cierre-del-ano": productionAndYearClose,
};
