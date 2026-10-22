import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Una página para leer de corrido: la política de privacidad y la guía del
 * conector, cada una con su traducción al inglés
 * (docs/plans/2026-10-21-privacidad-y-conector-design.md). El cuerpo se
 * escribe con etiquetas simples (`h2`, `p`, `ul`, `ol`, `table`) y esta
 * pieza les da la escala de 04 §4.
 */
export function DocumentPage({
  lang,
  title,
  lead,
  meta,
  translation,
  children,
}: {
  /** El idioma del contenido. Cabecera y pie siguen en español (00 §6). */
  lang: "es" | "en";
  title: string;
  lead: string;
  /** La versión y la fecha, o la versión de la app para la que se escribió. */
  meta: string;
  /** La misma página en el otro idioma. */
  translation: { href: string; label: string; hrefLang: "es" | "en" };
  children: ReactNode;
}) {
  return (
    <article
      lang={lang === "en" ? "en" : undefined}
      className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24"
    >
      <header>
        <Link
          href={translation.href}
          hrefLang={translation.hrefLang}
          lang={translation.hrefLang}
          className="rounded-sm text-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {translation.label}
        </Link>
        <h1 className="mt-6 text-3xl font-medium tracking-tight text-balance md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {lead}
        </p>
        <p className="mt-4 text-sm text-muted-foreground tabular-nums">
          {meta}
        </p>
      </header>
      <div className="mt-12 border-t border-border/60 pt-4 text-base leading-relaxed [&_a]:rounded-sm [&_a]:break-words [&_a]:text-nexus-sapphire-text [&_a]:underline-offset-4 [&_a]:outline-none [&_a:focus-visible]:ring-[3px] [&_a:focus-visible]:ring-ring/50 [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:scroll-mt-20 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:tracking-tight md:[&_h2]:text-2xl [&_li]:mt-2 [&_li]:pl-1 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:font-medium [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </article>
  );
}

/**
 * Una tabla del documento. En pantalla estrecha cada fila se apila y cada
 * celda lleva el nombre de su columna, para no esconder ninguna.
 */
export function DocumentTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <table className="mt-6 block w-full border-collapse text-left text-sm sm:table">
      <caption className="sr-only">{caption}</caption>
      <thead className="hidden sm:table-header-group">
        <tr className="border-b">
          {head.map((cell) => (
            <th key={cell} scope="col" className="py-2 pr-4 font-medium">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block sm:table-row-group">
        {rows.map((row) => (
          <tr
            key={row[0]}
            className="block border-b border-border/60 py-3 align-top sm:table-row sm:py-0"
          >
            {row.map((cell, index) =>
              index === 0 ? (
                <th
                  key={cell}
                  scope="row"
                  className="block font-medium sm:table-cell sm:py-3 sm:pr-4"
                >
                  {cell}
                </th>
              ) : (
                <td
                  key={cell}
                  className="mt-1 block leading-relaxed text-muted-foreground sm:mt-0 sm:table-cell sm:py-3 sm:pr-4"
                >
                  <span className="text-foreground sm:hidden">
                    {head[index]}:{" "}
                  </span>
                  {cell}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
