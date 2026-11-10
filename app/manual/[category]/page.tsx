import { RiArrowRightSLine } from "@remixicon/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ManualBreadcrumb } from "@/components/manual/manual-breadcrumb";
import {
  articleHref,
  getArticlesByCategory,
  getWrittenCategories,
} from "@/content/manual/articles";
import { getManualCategory } from "@/content/manual/categories";
import { pageMetadata } from "@/lib/metadata";

// Un conjunto cerrado y conocido en el build: cualquier otra ruta es un 404
// de verdad, no una página de error servida con 200.
export const dynamicParams = false;

export function generateStaticParams() {
  return getWrittenCategories().map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/manual/[category]">): Promise<Metadata> {
  const { category } = await params;
  const meta = getManualCategory(category);
  if (!meta) return {};
  return {
    title: `${meta.title} · Manual`,
    description: `${meta.description}.`,
    ...pageMetadata(`/manual/${meta.slug}`),
  };
}

export default async function ManualCategoryPage({
  params,
}: PageProps<"/manual/[category]">) {
  const { category } = await params;
  const meta = getManualCategory(category);
  if (!meta) notFound();
  const articles = getArticlesByCategory(meta.slug);

  return (
    <div className="max-w-3xl">
      <ManualBreadcrumb trail={[{ href: "/manual", label: "Manual" }]} />
      <h1 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">
        {meta.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {meta.description}
      </p>
      <ul className="mt-10 border-t border-border/60">
        {articles.map((article) => (
          <li key={article.slug} className="border-b border-border/60">
            <Link
              href={articleHref(article)}
              className="group flex items-start justify-between gap-4 rounded-md py-5 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <span>
                <span className="block font-medium group-hover:underline">
                  {article.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </span>
              </span>
              <RiArrowRightSLine
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-muted-foreground"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
