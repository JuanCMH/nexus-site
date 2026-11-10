"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  articleHref,
  getArticlesByCategory,
  getWrittenCategories,
} from "@/content/manual/articles";
import { cn } from "@/lib/utils";

const linkClassName =
  "block rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50";

/**
 * El índice del manual, con el artículo abierto marcado. Solo la categoría
 * abierta despliega sus artículos: con todas abiertas, el índice no cabe en
 * la pantalla y se pierde dónde está uno.
 */
export function ManualSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Índice del manual" className="space-y-1">
      {getWrittenCategories().map((category) => {
        const categoryHref = `/manual/${category.slug}`;
        const open =
          pathname === categoryHref || pathname.startsWith(`${categoryHref}/`);
        return (
          <div key={category.slug} className={open ? "pb-3" : undefined}>
            <Link
              href={categoryHref}
              aria-current={pathname === categoryHref ? "page" : undefined}
              className={cn(
                linkClassName,
                "flex items-center gap-2",
                open
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              )}
            >
              <category.icon
                aria-hidden="true"
                className="size-4 text-muted-foreground"
              />
              {category.title}
            </Link>
            {open ? (
              <ul className="mt-1 space-y-0.5">
                {getArticlesByCategory(category.slug).map((article) => {
                  const href = articleHref(article);
                  const active = pathname === href;
                  return (
                    <li key={article.slug}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          linkClassName,
                          "pl-8",
                          active
                            ? "bg-muted font-medium text-foreground"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                        )}
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
