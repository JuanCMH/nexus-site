import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";

export function PricingClosing() {
  return (
    <section
      aria-labelledby="beta-titulo"
      className="relative overflow-hidden border-t"
    >
      <div
        aria-hidden="true"
        className="stage-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="stage-glow pointer-events-none absolute inset-0"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-32">
        <h2
          id="beta-titulo"
          className="max-w-3xl text-3xl font-medium tracking-tight text-balance md:text-5xl"
        >
          Nexus está en beta cerrada
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Deja tu correo y el nombre de tu agencia. Revisamos cada solicitud y,
          si hay cupo, te llega un código de activación.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button asChild size="lg" className="h-11">
            <Link href="/solicitar-acceso">Solicitar acceso</Link>
          </Button>
          {APP_URL ? (
            <p className="text-sm text-muted-foreground">
              ¿Tu agencia ya está en Nexus?{" "}
              <a
                href={APP_URL}
                className="rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                Inicia sesión
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
