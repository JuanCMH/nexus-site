import { ManualSearch } from "@/components/manual/manual-search";
import { ManualSidebar } from "@/components/manual/manual-sidebar";

/** Categoría y artículo comparten el índice a la izquierda, en pantallas anchas. */
export default function ManualCategoryLayout({
  children,
}: LayoutProps<"/manual/[category]">) {
  return (
    <div className="mx-auto flex w-full max-w-6xl gap-10 px-6">
      <aside className="hidden w-60 shrink-0 lg:block">
        <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] space-y-6 overflow-y-auto py-10 pr-2">
          <ManualSearch />
          <ManualSidebar />
        </div>
      </aside>
      <div className="min-w-0 flex-1 py-10 md:py-12">{children}</div>
    </div>
  );
}
