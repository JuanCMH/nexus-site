import { AGENT_BODIES } from "./agent/bodies";
import { CHATS_BODIES } from "./chats/bodies";
import { CLIENTS_BODIES } from "./clients/bodies";
import { COMPLIANCE_QUOTES_BODIES } from "./compliance-quotes/bodies";
import { CONTACTS_BODIES } from "./contacts/bodies";
import { DIRECTIVES_BODIES } from "./directives/bodies";
import { DOCUMENTS_BODIES } from "./documents/bodies";
import { GETTING_STARTED_BODIES } from "./getting-started/bodies";
import { HOME_BODIES } from "./home/bodies";
import { MAIL_BODIES } from "./mail/bodies";
import { POLICIES_BODIES } from "./policies/bodies";
import { SETTINGS_BODIES } from "./settings/bodies";
import { TASKS_BODIES } from "./tasks/bodies";
import type { ManualArticleBody, ManualCategorySlug } from "./types";
import { VAULT_BODIES } from "./vault/bodies";

const BY_CATEGORY: [ManualCategorySlug, Record<string, ManualArticleBody>][] = [
  ["primeros-pasos", GETTING_STARTED_BODIES],
  ["inicio", HOME_BODIES],
  ["tareas", TASKS_BODIES],
  ["correos", MAIL_BODIES],
  ["chats", CHATS_BODIES],
  ["agente", AGENT_BODIES],
  ["clientes", CLIENTS_BODIES],
  ["polizas", POLICIES_BODIES],
  ["cotizaciones-de-cumplimiento", COMPLIANCE_QUOTES_BODIES],
  ["documentos", DOCUMENTS_BODIES],
  ["directrices", DIRECTIVES_BODIES],
  ["contactos", CONTACTS_BODIES],
  ["accesos", VAULT_BODIES],
  ["configuracion", SETTINGS_BODIES],
];

/** El cuerpo de cada artículo del registro, por `categoría/slug`. */
export const MANUAL_BODIES: Record<string, ManualArticleBody> =
  Object.fromEntries(
    BY_CATEGORY.flatMap(([category, bodies]) =>
      Object.entries(bodies).map(([slug, body]) => [
        `${category}/${slug}`,
        body,
      ]),
    ),
  );

export function getManualBody(
  category: string,
  slug: string,
): ManualArticleBody | undefined {
  return MANUAL_BODIES[`${category}/${slug}`];
}
