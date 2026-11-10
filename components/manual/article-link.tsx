import Link from "next/link";
import type { ReactNode } from "react";
import { articleHref, getManualArticle } from "@/content/manual/articles";

/**
 * Enlace de un artículo a otro, por `categoría/slug`. Si el destino no está
 * en el registro, el build falla: un enlace del manual nunca lleva a un 404.
 */
export function ArticleLink({
  to,
  children,
}: {
  to: string;
  children?: ReactNode;
}) {
  const [category = "", slug = ""] = to.split("/");
  const article = getManualArticle(category, slug);
  if (!article) {
    throw new Error(
      `<ArticleLink to="${to}"> no corresponde a ningún artículo del registro.`,
    );
  }
  return (
    <Link
      href={articleHref(article)}
      className="rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      {children ?? article.title}
    </Link>
  );
}
