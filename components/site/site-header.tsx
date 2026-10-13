import Link from "next/link";
import { NexusWordmark } from "@/components/brand/nexus-logo";
import { MobileMenu } from "@/components/site/mobile-menu";
import { NAV_LINKS } from "@/components/site/nav-links";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-6">
        <Link
          href="/"
          aria-label="Nexus, inicio"
          className="rounded-sm text-nexus-midnight outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:text-white"
        >
          <NexusWordmark className="h-4 w-auto" />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          {APP_URL ? (
            <Button asChild variant="ghost" className="hidden lg:inline-flex">
              <a href={APP_URL}>Iniciar sesión</a>
            </Button>
          ) : null}
          <Button asChild className="max-lg:h-11">
            <Link href="/solicitar-acceso">Solicitar acceso</Link>
          </Button>
          <MobileMenu appUrl={APP_URL} />
        </div>
      </div>
    </header>
  );
}
