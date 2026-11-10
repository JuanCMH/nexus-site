import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePager } from "@/components/manual/article-pager";
import { ArticleToc } from "@/components/manual/article-toc";
import { ManualBreadcrumb } from "@/components/manual/manual-breadcrumb";
import {
  articleHref,
  getAdjacentArticles,
  getManualArticle,
  MANUAL_ARTICLES,
} from "@/content/manual/articles";
import { getManualBody } from "@/content/manual/bodies";
import { getManualCategory } from "@/content/manual/categories";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return MANUAL_ARTICLES.map((article) => ({
    category: article.category,
    article: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/manual/[category]/[article]">): Promise<Metadata> {
  const { category, article: slug } = await params;
  const article = getManualArticle(category, slug);
  if (!article) return {};
  return {
    title: `${article.title} · Manual`,
    description: `${article.description}.`,
    ...pageMetadata(articleHref(article)),
  };
}

export default async function ManualArticlePage({
  params,
}: PageProps<"/manual/[category]/[article]">) {
  const { category, article: slug } = await params;
  const article = getManualArticle(category, slug);
  const categoryMeta = getManualCategory(category);
  const body = getManualBody(category, slug);
  if (!article || !categoryMeta || !body) notFound();
  const { previous, next } = getAdjacentArticles(category, slug);
  const { Article, sections } = body;

  return (
    <div className="flex gap-10">
      <div className="min-w-0 max-w-2xl flex-1">
        <ManualBreadcrumb
          trail={[
            { href: "/manual", label: "Manual" },
            { href: `/manual/${categoryMeta.slug}`, label: categoryMeta.title },
          ]}
        />
        <header className="mt-6">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {article.description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground tabular-nums">
            Escrito para Nexus {article.appVersion}
          </p>
        </header>

        <article className="mt-12 space-y-12">
          <Article />
        </article>

        <div className="mt-16">
          <ArticlePager previous={previous} next={next} />
        </div>
      </div>
      <aside className="hidden w-52 shrink-0 xl:block">
        <div className="sticky top-24">
          <ArticleToc sections={sections} />
        </div>
      </aside>
    </div>
  );
}
