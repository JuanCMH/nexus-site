import { AGENT_ARTICLES } from "./agent/articles";
import { MANUAL_CATEGORIES } from "./categories";
import { CHATS_ARTICLES } from "./chats/articles";
import { CLIENTS_ARTICLES } from "./clients/articles";
import { COMPLIANCE_QUOTES_ARTICLES } from "./compliance-quotes/articles";
import { CONTACTS_ARTICLES } from "./contacts/articles";
import { DIRECTIVES_ARTICLES } from "./directives/articles";
import { DOCUMENTS_ARTICLES } from "./documents/articles";
import { GETTING_STARTED_ARTICLES } from "./getting-started/articles";
import { HOME_ARTICLES } from "./home/articles";
import { MAIL_ARTICLES } from "./mail/articles";
import { POLICIES_ARTICLES } from "./policies/articles";
import { SETTINGS_ARTICLES } from "./settings/articles";
import { TASKS_ARTICLES } from "./tasks/articles";
import type { ManualArticleMeta, ManualCategorySlug } from "./types";
import { VAULT_ARTICLES } from "./vault/articles";

/**
 * El registro único del manual (03 §3.2): de aquí salen el índice, la
 * navegación, el sitemap y la búsqueda. Un artículo que no está aquí no
 * existe. El orden dentro de cada categoría es el orden de lectura.
 *
 * Cada categoría lleva los suyos en su carpeta: `<carpeta>/articles.ts`
 * (el registro) y `<carpeta>/bodies.ts` (el cuerpo, por slug). Añadir un
 * artículo son esas dos entradas. La prueba del registro falla si falta el segundo.
 */
export const MANUAL_ARTICLES: ManualArticleMeta[] = [
  ...GETTING_STARTED_ARTICLES,
  ...HOME_ARTICLES,
  ...TASKS_ARTICLES,
  ...MAIL_ARTICLES,
  ...CHATS_ARTICLES,
  ...AGENT_ARTICLES,
  ...CLIENTS_ARTICLES,
  ...POLICIES_ARTICLES,
  ...COMPLIANCE_QUOTES_ARTICLES,
  ...DOCUMENTS_ARTICLES,
  ...DIRECTIVES_ARTICLES,
  ...CONTACTS_ARTICLES,
  ...VAULT_ARTICLES,
  ...SETTINGS_ARTICLES,
];

export const articleHref = (
  article: Pick<ManualArticleMeta, "category" | "slug">,
) => `/manual/${article.category}/${article.slug}`;

export function getManualArticle(
  category: string,
  slug: string,
): ManualArticleMeta | undefined {
  return MANUAL_ARTICLES.find(
    (article) => article.category === category && article.slug === slug,
  );
}

export function getArticlesByCategory(
  category: ManualCategorySlug,
): ManualArticleMeta[] {
  return MANUAL_ARTICLES.filter((article) => article.category === category);
}

/** Las categorías que tienen algo escrito: las únicas que se enseñan. */
export function getWrittenCategories() {
  return MANUAL_CATEGORIES.filter(
    (category) => getArticlesByCategory(category.slug).length > 0,
  );
}

/** El orden de lectura del manual entero: categoría tras categoría. */
function readingOrder(): ManualArticleMeta[] {
  return MANUAL_CATEGORIES.flatMap((category) =>
    getArticlesByCategory(category.slug),
  );
}

export function getAdjacentArticles(category: string, slug: string) {
  const ordered = readingOrder();
  const index = ordered.findIndex(
    (article) => article.category === category && article.slug === slug,
  );
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next:
      index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}
