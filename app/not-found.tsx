import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// La 404 en español, sin canónica: no se indexa. El diseño y los textos:
// docs/plans/2026-10-15-seo-design.md §3.
export const metadata: Metadata = {
  title: "Página no encontrada",
};

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <h1 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
        Esta página no existe
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
        Puede que la dirección esté mal escrita o que la página se haya movido.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button asChild size="lg" className="h-11">
          <Link href="/">Ir al inicio</Link>
        </Button>
        <Link href="/precios" className={linkClassName}>
          Ver los precios
        </Link>
        <Link href="/descargar" className={linkClassName}>
          Descargar Nexus
        </Link>
      </div>
    </div>
  );
}
