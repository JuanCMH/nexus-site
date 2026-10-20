import type { ComponentType } from "react";
import {
  ConfirmVignette,
  FlowVignette,
  LogVignette,
  MailboxesVignette,
  PortfolioVignette,
  RenewalVignette,
  VaultVignette,
} from "@/components/home/benefit-vignettes";
import { cn } from "@/lib/utils";

// Lo que gana la agencia: lo que Nexus le da a su equipo y a su agente que
// una IA sola no tiene. Cada línea sale de docs/directives/02-producto.md
// (§2, §3, §3.2, §3.3 y §4); sin cifras de ahorro ni promesas de
// gratuidad. El diseño:
// docs/plans/2026-10-16-landing-beneficios-escenario-design.md.
const BENEFITS: readonly {
  title: string;
  detail: string;
  Vignette: ComponentType;
  wide?: true;
}[] = [
  {
    title: "Lee los correos de toda la agencia, no solo el tuyo",
    detail:
      "Vincula los correos de la agencia y el de cada persona. El agente los lee, también de madrugada y sin un computador encendido, y en la mañana sus propuestas te esperan «Por confirmar».",
    Vignette: MailboxesVignette,
    wide: true,
  },
  {
    title: "Ves cómo va la cartera",
    detail:
      "Quien dirige ve la prima vigente mes a mes y la tasa de renovación frente a los 90 días anteriores, sin armar un Excel.",
    Vignette: PortfolioVignette,
  },
  {
    title: "Trabaja como trabaja tu agencia",
    detail:
      "Cada trabajo del agente es un flujo escrito. Adaptas los de Nexus o escribes los tuyos, y un cambio no rige hasta que una persona lo publica.",
    Vignette: FlowVignette,
  },
  {
    title: "Ninguna renovación queda en el aire",
    detail:
      "Cada póliza por vencer genera su tarea, con responsable y fecha. Se cierra sola cuando la póliza renovada aparece en el registro.",
    Vignette: RenewalVignette,
  },
  {
    title: "Nada queda firme sin una persona",
    detail:
      "El agente propone y dice de dónde sacó cada dato. Tu equipo confirma, envía los correos y guarda las claves.",
    Vignette: ConfirmVignette,
  },
  {
    title: "Nada se pierde al cerrar la conversación",
    detail:
      "Lo que tu equipo y tu agente hacen queda en un solo registro de clientes, pólizas y documentos, en el escritorio y en la web. La bitácora guarda cada cambio, quién lo hizo y a petición de quién.",
    Vignette: LogVignette,
    wide: true,
  },
  {
    title: "Las claves, fuera del alcance del agente",
    detail:
      "Las claves de los portales se cifran en el computador de quien las guarda y se comparten persona por persona.",
    Vignette: VaultVignette,
  },
];

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="beneficios-titulo"
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
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-nexus-sapphire-text">
            Lo que gana tu agencia
          </p>
          <h2
            id="beneficios-titulo"
            className="mt-3 text-3xl font-medium tracking-tight text-balance md:text-5xl"
          >
            La app definitiva para tu equipo y tu agente de IA
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Si tener un agente de IA en tu agencia es un gran paso, Nexus es el
            siguiente. Conoce todo lo que Nexus les ofrece a tu equipo y a tu
            agente para operar toda tu agencia.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, detail, Vignette, wide }, index) => (
            <li
              key={title}
              className={cn(
                "stage-edge flex min-w-0 flex-col gap-6 rounded-lg bg-card/80 p-6 backdrop-blur-xl",
                wide && "md:col-span-2",
                // Con dos columnas, la última quedaría sola.
                index === BENEFITS.length - 1 && "md:col-span-2 lg:col-span-1",
              )}
            >
              <div className="max-w-xl">
                <h3 className="text-lg font-medium tracking-tight text-balance md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
              <div className="mt-auto min-w-0">
                <Vignette />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
