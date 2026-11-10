import type { Metadata } from "next";
import Link from "next/link";
import { ManualSearch } from "@/components/manual/manual-search";
import {
  getArticlesByCategory,
  getWrittenCategories,
} from "@/content/manual/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Manual",
  description:
    "Cómo se usa Nexus, pantalla por pantalla: la cuenta, las tareas, la cartera, el agente, la bóveda y la configuración de la agencia.",
  ...pageMetadata("/manual"),
};

// El diseño y los textos: docs/plans/2026-10-20-manual-design.md.
export default function ManualPage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="stage-glow pointer-events-none absolute inset-x-0 top-0 h-96"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            Manual de Nexus
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Cómo se usa Nexus, pantalla por pantalla. Cada artículo dice para
            qué versión se escribió.
          </p>
          <div className="mt-8">
            <ManualSearch size="lg" />
          </div>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {getWrittenCategories().map((category) => {
            const count = getArticlesByCategory(category.slug).length;
            return (
              <li key={category.slug}>
                <Link
                  href={`/manual/${category.slug}`}
                  className="group flex h-full flex-col rounded-xl border bg-card p-5 outline-none transition-colors hover:bg-muted/40 focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nexus-sapphire/10 bg-nexus-sapphire/10 text-nexus-sapphire-text">
                      <category.icon aria-hidden="true" className="size-5" />
                    </div>
                    <h2 className="font-medium tracking-tight group-hover:underline">
                      {category.title}
                    </h2>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground tabular-nums">
                    {count === 1 ? "1 artículo" : `${count} artículos`}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
