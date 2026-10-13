import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatReleaseDate, getLatestRelease } from "@/lib/releases";
import { APP_URL } from "@/lib/site";

// Es una secuencia de verdad, por eso va numerada. Los tres primeros pasos
// son los de /solicitar-acceso; el cuarto, docs/directives/02-producto.md
// §3, §3.2 y §5.
const STEPS = [
  {
    title: "Solicitas acceso",
    detail: "Dejas tu correo y el nombre de tu agencia.",
  },
  {
    title: "Recibes un código de activación",
    detail: "Revisamos tu solicitud y, si hay cupo en la beta, te lo enviamos.",
  },
  {
    title: "Creas tu agencia",
    detail:
      "Con ese código. Nexus se instala en Windows y también se usa desde el navegador.",
  },
  {
    title: "Traes tu cartera",
    detail:
      "Cargas clientes y pólizas desde Excel. Las aseguradoras y los ramos de Colombia vienen listos, y si conectas tu agente, él propone plantillas y roles.",
  },
] as const;

export async function ClosingSection() {
  // Sin respuesta de GitHub, el botón lleva a /descargar, que tiene su
  // propia salida (docs/directives/03-reglas-sitio.md §5).
  const release = await getLatestRelease();

  return (
    <section
      id="empezar"
      aria-labelledby="empezar-titulo"
      className="relative scroll-mt-14 overflow-hidden"
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
        <div className="max-w-2xl">
          <h2
            id="empezar-titulo"
            className="text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            Cómo se empieza
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Nexus está en beta cerrada, para agencias y corredores de seguros en
            Colombia.
          </p>
        </div>
        <ol className="mt-10 grid gap-x-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-border/60 py-5">
              <span className="font-mono text-muted-foreground text-sm tabular-nums">
                {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-medium tracking-tight text-balance">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-11">
            <Link href="/solicitar-acceso">Solicitar acceso</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11">
            {release ? (
              <a href={release.installerUrl}>Descargar para Windows</a>
            ) : (
              <Link href="/descargar">Descargar para Windows</Link>
            )}
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {release ? (
            <p className="text-sm text-muted-foreground tabular-nums">
              Versión {release.version}, publicada el{" "}
              {formatReleaseDate(release.publishedAt)}.{" "}
              <Link
                href="/descargar"
                className="rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                Cómo instalarla
              </Link>
            </p>
          ) : null}
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
