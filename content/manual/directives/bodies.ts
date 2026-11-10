import type { ManualArticleBody } from "../types";
import * as assignment from "./assignment";
import * as categoriesAndTopics from "./categories-and-topics";
import * as criteria from "./criteria";
import * as editFlow from "./edit-flow";
import * as flows from "./flows";
import * as portals from "./portals";
import * as references from "./references";

/** El cuerpo de cada artículo de «directrices», por su slug. */
export const DIRECTIVES_BODIES: Record<string, ManualArticleBody> = {
  flujos: flows,
  portales: portals,
  "editar-y-publicar-un-flujo": editFlow,
  criterios: criteria,
  reparto: assignment,
  referencias: references,
  "categorias-y-temas": categoriesAndTopics,
};
