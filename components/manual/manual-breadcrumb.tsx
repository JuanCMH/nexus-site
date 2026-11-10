import { RiArrowRightSLine } from "@remixicon/react";
import Link from "next/link";

type Crumb = { href: string; label: string };

/** «Manual › Primeros pasos»: de dónde cuelga la página. */
export function ManualBreadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Ruta">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {trail.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-1">
            {index > 0 ? (
              <RiArrowRightSLine aria-hidden="true" className="size-4" />
            ) : null}
            <Link
              href={crumb.href}
              className="rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
