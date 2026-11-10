import { describe, expect, test } from "bun:test";
import { normalize, searchArticles } from "./manual-search";

const articles = [
  {
    title: "Crear tu cuenta",
    description: "Con el código de tu agencia",
    keywords: ["registro"],
  },
  {
    title: "Recuperar tu contraseña",
    description: "Pon una contraseña nueva con un código",
    keywords: ["olvidé mi contraseña"],
  },
];

describe("normalize", () => {
  test("quita tildes y mayúsculas", () => {
    expect(normalize("  Contraseña ÚNICA ")).toBe("contrasena unica");
  });
});

describe("searchArticles", () => {
  test("una consulta vacía no devuelve nada", () => {
    expect(searchArticles(articles, "   ")).toEqual([]);
  });

  test("encuentra sin tildes y en las palabras clave", () => {
    expect(searchArticles(articles, "olvide").map((a) => a.title)).toEqual([
      "Recuperar tu contraseña",
    ]);
  });

  test("exige todas las palabras", () => {
    expect(searchArticles(articles, "código registro")).toHaveLength(1);
    expect(searchArticles(articles, "código bóveda")).toEqual([]);
  });

  test("pone primero lo que coincide en el título", () => {
    const found = searchArticles(articles, "codigo");
    expect(found.map((a) => a.title)).toEqual([
      "Crear tu cuenta",
      "Recuperar tu contraseña",
    ]);
    expect(searchArticles(articles, "contrasena")[0]?.title).toBe(
      "Recuperar tu contraseña",
    );
  });
});
