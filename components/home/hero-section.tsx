import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="stage-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="stage-glow pointer-events-none absolute inset-0"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-20 pb-20 md:pt-32 md:pb-28">
        <p className="rise text-sm text-muted-foreground">
          En beta cerrada, para agencias y corredores de seguros en Colombia
        </p>
        <h1
          id="hero-titulo"
          className="rise-move mt-6 max-w-5xl text-5xl font-medium tracking-tight text-balance [animation-delay:80ms] md:text-7xl"
        >
          Toda tu agencia de seguros en un solo lugar
        </h1>
        <p className="rise-move mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms] md:text-xl">
          Clientes, pólizas, renovaciones, tareas, documentos, cotizaciones de
          cumplimiento y las claves de tus portales. Tu equipo y tu agente
          trabajan sobre el mismo registro, y cada póliza por vencer tiene una
          tarea, un responsable y una fecha.
        </p>
        <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
          <Button asChild size="lg" className="h-11">
            <Link href="/solicitar-acceso">Solicitar acceso</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11">
            <Link href="/#como-trabaja">Ver cómo trabaja</Link>
          </Button>
        </div>
        {APP_URL ? (
          <p className="rise mt-6 text-sm text-muted-foreground [animation-delay:320ms]">
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
    </section>
  );
}
