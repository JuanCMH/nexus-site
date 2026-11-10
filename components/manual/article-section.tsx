import type { ReactNode } from "react";

/**
 * Una sección de un artículo. El `id` es el mismo que el artículo declara en
 * su `sections`, para que el índice «En esta página» ancle.
 */
export function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-xl font-medium tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed">{children}</div>
    </section>
  );
}
