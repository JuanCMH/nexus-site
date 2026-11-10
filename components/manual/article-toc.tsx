import type { ManualArticleSection } from "@/content/manual/types";

/** El índice «En esta página», en la columna derecha de las pantallas anchas. */
export function ArticleToc({ sections }: { sections: ManualArticleSection[] }) {
  if (sections.length === 0) return null;
  return (
    <nav aria-label="En esta página">
      <p className="text-sm font-medium">En esta página</p>
      <ul className="mt-3 space-y-1 border-l">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="-ml-px block border-l border-transparent py-1 pl-3 text-sm text-muted-foreground outline-none transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
