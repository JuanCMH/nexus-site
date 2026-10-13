import { RiFlowChart, RiSafe2Line } from "@remixicon/react";

// Los dos módulos que más alejan a Nexus de un listado de pólizas, con el
// detalle de docs/directives/02-producto.md §3 (Flujos y Accesos).
const FEATURES: readonly {
  module: string;
  title: string;
  lead: string;
  points: readonly string[];
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    module: "Flujos",
    title: "Cómo trabaja tu agencia, por escrito",
    lead: "Un flujo son los pasos de un trabajo: leer los correos, registrar un documento, atender una tarea, cotizar cumplimiento. Es lo que sigue tu agente, y tu equipo lo puede leer.",
    points: [
      "Nexus trae los suyos. Tu agencia tiene su copia y la adapta, o escribe los propios",
      "Un cambio queda en borrador hasta que una persona lo publica",
      "Cada flujo guarda sus versiones, cuándo se ejecutó y quién tiene acceso",
      "Tu copia se compara con la de Nexus, paso por paso",
      "Los criterios de tu agencia, reglas en una frase que el agente sigue, viven aquí",
    ],
    icon: RiFlowChart,
  },
  {
    module: "Accesos",
    title: "Las claves de tus portales, en una bóveda",
    lead: "Las claves de portales y aseguradoras dejan de circular por chat. Cada una se comparte persona por persona.",
    points: [
      "Se cifran en tu computador. Al servidor solo sube texto cifrado",
      "Solo abre en un computador o un navegador que aprobaste",
      "Cada uso queda en la bitácora, que nombra la cuenta y nunca la clave",
      "Al copiar una clave, el portapapeles se borra a los 30 segundos",
      "El agente no tiene acceso a la bóveda",
    ],
    icon: RiSafe2Line,
  },
];

export function FlowsVaultSection() {
  return (
    <section aria-labelledby="flujos-boveda-titulo" className="bg-nexus-ice">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="flujos-boveda-titulo"
            className="text-2xl font-medium tracking-tight text-balance md:text-4xl"
          >
            Cómo se hace cada trabajo y con qué clave se entra a cada portal
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            En Nexus las dos cosas tienen su lugar: los flujos y la bóveda.
          </p>
        </div>
        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-2 md:gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.module}>
              <p className="flex items-center gap-3 text-sm font-medium text-nexus-sapphire-text">
                <span className="flex size-9 items-center justify-center rounded-xl border border-nexus-sapphire/10 bg-nexus-sapphire/10">
                  <feature.icon aria-hidden="true" className="size-4" />
                </span>
                {feature.module}
              </p>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-balance md:text-xl">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {feature.lead}
              </p>
              <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
                {feature.points.map((point) => (
                  <li key={point} className="py-3 text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
