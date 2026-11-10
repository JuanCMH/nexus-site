import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Link from "next/link";
import { articleHref } from "@/content/manual/articles";
import type { ManualArticleMeta } from "@/content/manual/types";

const cardClassName =
  "flex items-center gap-3 rounded-lg border p-4 outline-none transition-colors hover:bg-muted/50 focus-visible:ring-[3px] focus-visible:ring-ring/50";

/** Anterior y siguiente, en el orden de lectura del registro. */
export function ArticlePager({
  previous,
  next,
}: {
  previous?: ManualArticleMeta;
  next?: ManualArticleMeta;
}) {
  if (!previous && !next) return null;
  return (
    <nav
      aria-label="Artículos contiguos"
      className="grid gap-4 border-t pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link href={articleHref(previous)} className={cardClassName}>
          <RiArrowLeftSLine
            aria-hidden="true"
            className="size-5 shrink-0 text-muted-foreground"
          />
          <span className="min-w-0">
            <span className="block text-sm text-muted-foreground">
              Anterior
            </span>
            <span className="block font-medium">{previous.title}</span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" className="max-sm:hidden" />
      )}
      {next ? (
        <Link
          href={articleHref(next)}
          className={`${cardClassName} justify-end text-right`}
        >
          <span className="min-w-0">
            <span className="block text-sm text-muted-foreground">
              Siguiente
            </span>
            <span className="block font-medium">{next.title}</span>
          </span>
          <RiArrowRightSLine
            aria-hidden="true"
            className="size-5 shrink-0 text-muted-foreground"
          />
        </Link>
      ) : null}
    </nav>
  );
}
