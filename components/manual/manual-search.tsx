"use client";

import { RiSearchLine } from "@remixicon/react";
import Link from "next/link";
import { useId, useState } from "react";
import { Input } from "@/components/ui/input";
import { articleHref, MANUAL_ARTICLES } from "@/content/manual/articles";
import { getManualCategory } from "@/content/manual/categories";
import { searchArticles } from "@/lib/manual-search";
import { cn } from "@/lib/utils";

/**
 * Buscar en el manual. Filtra el registro mientras se escribe y enseña los
 * resultados debajo, como enlaces: no hay atajo ni ventana que aprender.
 */
export function ManualSearch({
  size = "default",
}: {
  size?: "default" | "lg";
}) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const resultsId = useId();
  const results = searchArticles(MANUAL_ARTICLES, query);
  const searching = query.trim().length > 0;

  return (
    <search className="w-full">
      <label htmlFor={inputId} className="sr-only">
        Buscar en el manual
      </label>
      <div className="relative">
        <RiSearchLine
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setQuery("");
          }}
          placeholder="Buscar en el manual"
          autoComplete="off"
          aria-controls={searching ? resultsId : undefined}
          className={cn(
            "bg-background pl-9",
            size === "lg" && "h-11 text-base md:text-base",
          )}
        />
      </div>
      <p aria-live="polite" className="sr-only">
        {searching
          ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"}`
          : ""}
      </p>
      {searching ? (
        <div id={resultsId} className="mt-2 rounded-lg border bg-background">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">
              Ningún artículo coincide con «{query.trim()}». Prueba con otra
              palabra.
            </p>
          ) : (
            <ul className="divide-y divide-border/60">
              {results.map((article) => (
                <li key={`${article.category}/${article.slug}`}>
                  <Link
                    href={articleHref(article)}
                    onClick={() => setQuery("")}
                    className="block rounded-md px-4 py-3 text-left outline-none transition-colors hover:bg-muted/50 focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <span className="block text-sm font-medium">
                      {article.title}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {getManualCategory(article.category)?.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </search>
  );
}
