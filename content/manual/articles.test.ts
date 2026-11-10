import { describe, expect, test } from "bun:test";
import { getAdjacentArticles, MANUAL_ARTICLES } from "./articles";
import { MANUAL_BODIES } from "./bodies";

const key = (article: { category: string; slug: string }) =>
  `${article.category}/${article.slug}`;

describe("registro del manual", () => {
  test("cada artículo tiene cuerpo, y cada cuerpo está en el registro", () => {
    const registered = MANUAL_ARTICLES.map(key).sort();
    expect(Object.keys(MANUAL_BODIES).sort()).toEqual(registered);
  });

  test("no hay dos artículos con la misma ruta", () => {
    const keys = MANUAL_ARTICLES.map(key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  test("las anclas de cada artículo no se repiten", () => {
    for (const [name, body] of Object.entries(MANUAL_BODIES)) {
      const ids = body.sections.map((section) => section.id);
      expect({ name, unique: new Set(ids).size }).toEqual({
        name,
        unique: ids.length,
      });
    }
  });

  test("cada artículo dice para qué versión se escribió", () => {
    for (const article of MANUAL_ARTICLES)
      expect(article.appVersion).toMatch(/^\d+\.\d+\.\d+$/);
  });

  test("anterior y siguiente siguen el orden de lectura", () => {
    const [first, second] = MANUAL_ARTICLES;
    if (!first || !second) throw new Error("El registro está vacío");
    expect(getAdjacentArticles(first.category, first.slug)).toEqual({
      previous: undefined,
      next: second,
    });
  });
});
