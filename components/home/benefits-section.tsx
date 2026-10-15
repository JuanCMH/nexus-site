// Lo que gana la agencia, antes de explicar cómo. Cada beneficio sale de una
// función de docs/directives/02-producto.md (§2, §3, §3.2, §3.3 y §4); sin
// cifras de ahorro ni promesas de gratuidad. El diseño:
// docs/plans/2026-10-14-landing-beneficios-design.md.
const BENEFITS: readonly { title: string; detail: string }[] = [
  {
    title: "Ninguna renovación queda en el aire",
    detail:
      "Cada póliza por vencer genera su tarea de renovación, con responsable y fecha. La tarea se cierra sola cuando la póliza renovada aparece en el registro.",
  },
  {
    title: "Tu equipo deja de digitar pólizas",
    detail:
      "El agente lee los correos vinculados y las carátulas, y propone la póliza y su cliente. Tu equipo revisa y confirma.",
  },
  {
    title: "Encuentras el trabajo adelantado",
    detail:
      "El agente trabaja en la nube: puede leer los correos de madrugada, sin un computador encendido, y en la mañana sus propuestas te esperan «Por confirmar».",
  },
  {
    title: "Cada quien sabe qué hacer hoy",
    detail:
      "En Inicio, cada persona ve lo que tiene pendiente, y quien dirige ve la cartera y el equipo.",
  },
  {
    title: "Un solo registro para todos",
    detail:
      "Tu equipo y tu agente ven los mismos clientes, pólizas y documentos, en el escritorio y en la web.",
  },
  {
    title: "Sabes quién hizo qué",
    detail:
      "La bitácora guarda cada cambio, quién lo hizo, una persona o el agente, y de qué correo salió cada póliza propuesta.",
  },
];

export function BenefitsSection() {
  return (
    <section aria-labelledby="beneficios-titulo">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="beneficios-titulo"
            className="text-2xl font-medium tracking-tight text-balance md:text-4xl"
          >
            Lo que gana tu agencia
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Menos trabajo repetido, menos olvidos y una sola versión de cada
            cliente y cada póliza.
          </p>
        </div>
        <ul className="mt-10 grid gap-x-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className="border-t border-border/60 py-6">
              <h3 className="text-lg font-medium tracking-tight text-balance md:text-xl">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {benefit.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
