/**
 * La búsqueda del manual: en el navegador, sobre el registro de artículos,
 * sin servicio externo (docs/directives/03-reglas-sitio.md §3.2).
 */

export type Searchable = {
  title: string;
  description: string;
  keywords: string[];
};

/** Sin tildes ni mayúsculas: «contrasena» encuentra «contraseña». */
export const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

/**
 * Los artículos que contienen todas las palabras de la consulta, con los
 * que la tienen en el título primero. Una consulta vacía no devuelve nada.
 */
export function searchArticles<T extends Searchable>(
  articles: T[],
  query: string,
): T[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const scored = articles.flatMap((article) => {
    const title = normalize(article.title);
    const rest = normalize(
      `${article.description} ${article.keywords.join(" ")}`,
    );
    if (!terms.every((term) => title.includes(term) || rest.includes(term)))
      return [];
    const inTitle = terms.filter((term) => title.includes(term)).length;
    return [{ article, inTitle }];
  });

  // `sort` es estable: a igual puntaje se conserva el orden de lectura.
  return scored
    .sort((a, b) => b.inTitle - a.inTitle)
    .map(({ article }) => article);
}
