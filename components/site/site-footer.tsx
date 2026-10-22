import Link from "next/link";
import { NexusWordmark } from "@/components/brand/nexus-logo";
import { NAV_LINKS } from "@/components/site/nav-links";
import { APP_URL } from "@/lib/site";

const linkClassName =
  "rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <NexusWordmark className="h-4 w-auto text-nexus-midnight dark:text-white" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            El sistema de registro de una agencia de seguros, operado por su
            equipo y por su agente
          </p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/solicitar-acceso" className={linkClassName}>
                Solicitar acceso
              </Link>
            </li>
            <li>
              <Link href="/agente" className={linkClassName}>
                Conectar Claude
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className={linkClassName}>
                Privacidad
              </Link>
            </li>
            {APP_URL ? (
              <li>
                <a href={APP_URL} className={linkClassName}>
                  Iniciar sesión
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
