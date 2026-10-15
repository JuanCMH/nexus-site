import { CLAUDE_PLANS_URL } from "@/lib/site";

// Cada frase está en docs/directives/02-producto.md. La página no habla de
// otros productos ni promete qué será gratis siempre: Nexus está en beta y
// los planes pueden ajustarse (decisión del dueño, 2026-10-14).
const GROUPS = [
  {
    title: "Un precio claro",
    items: [
      "Todas las funciones en todos los planes.",
      "Mensual sin permanencia, o anual con 2 meses gratis.",
      "El almacenamiento es de la agencia, no de cada usuario.",
      "Implementación por tu cuenta, o acompañada a precio fijo.",
    ],
  },
  {
    title: "Tu agente, con tu Claude",
    items: [
      "El agente trabaja con la suscripción de Claude de tu agencia, que se paga aparte a Anthropic.",
      "Lee los correos vinculados y los documentos, y propone. Tu equipo confirma.",
    ],
  },
  {
    title: "Con control",
    items: [
      "Lo que registra el agente puede llevar su cita, su página y su documento.",
      "Las claves de la bóveda se cifran en el computador de quien las guarda. El agente no tiene acceso.",
      "Roles armados permiso por permiso, y una bitácora de quién hizo qué.",
    ],
  },
  {
    title: "A la medida de tu agencia",
    items: [
      "Flujos que tu agencia adapta a su forma de trabajar.",
      "Cotizaciones de cumplimiento con la marca de tu agencia.",
      "Nexus para escritorio y en la web, con los mismos datos.",
    ],
  },
] as const;

export function WhySection() {
  return (
    <section aria-labelledby="por-que-titulo" className="border-t bg-nexus-ice">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="por-que-titulo"
          className="max-w-3xl text-2xl font-medium tracking-tight text-balance md:text-4xl"
        >
          Por qué Nexus
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Un precio claro y un sistema donde la última palabra la tiene tu
          equipo.
        </p>
        <div className="mt-10 grid gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.title} className="border-t border-border/60 pt-5">
              <h3 className="text-lg font-medium tracking-tight">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          <a
            href={CLAUDE_PLANS_URL}
            className="rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Ver los planes de Claude
          </a>
        </p>
      </div>
    </section>
  );
}
