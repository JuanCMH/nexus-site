import { RiArrowDownSLine } from "@remixicon/react";
import type { ReactNode } from "react";
import { SupportEmailLink } from "@/components/site/support-email-link";
import { CLAUDE_PLANS_URL } from "@/lib/site";

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

// Las reglas de cobro las aprobó el dueño el 2026-10-14
// (docs/directives/02-producto.md §6). El aviso y la exportación se
// comprobaron en `nexus-app` 0.24.0 el 2026-10-15. Cambiar, ampliar o
// cancelar el plan se pide a soporte: Nexus no es una persona.
const QUESTIONS: readonly { question: string; answer: ReactNode }[] = [
  {
    question: "¿Qué cuenta como usuario?",
    answer: "Cada persona de tu equipo que entra a Nexus. El agente no cuenta.",
  },
  {
    question: "¿Qué es un correo vinculado?",
    answer:
      "Una cuenta de correo de tu agencia que el agente puede leer para proponer lo que encuentre. Agencia y Agencia+ traen uno por usuario incluido, más 2 para la agencia, como renovaciones@ o cumplimiento@; Independiente trae 2. Cada usuario adicional trae el suyo.",
  },
  {
    question: "¿Necesito una suscripción de Claude?",
    answer: (
      <>
        Sí, para usar el agente. Se paga a Anthropic, no a Nexus. Tu equipo
        puede usar Nexus sin agente.{" "}
        <a href={CLAUDE_PLANS_URL} className={linkClassName}>
          Ver los planes de Claude
        </a>
      </>
    ),
  },
  {
    question: "¿Qué pasa si llego al límite de mi plan?",
    answer: (
      <>
        Nunca se bloquea lo que ya tienes. Lo que no puedes es sumar otro
        usuario u otro correo vinculado, o seguir subiendo archivos, hasta
        ampliar el plan con soporte, en{" "}
        <SupportEmailLink subject="Ampliar el plan" />. En Configuración →
        Agencia → «Uso y plan» ves cuánto usas, con un aviso desde el 80 % de
        los correos vinculados o del almacenamiento.
      </>
    ),
  },
  {
    question: "¿Puedo cambiar de plan?",
    answer: (
      <>
        Sí. Se pide a soporte, en <SupportEmailLink subject="Cambiar el plan" />
        . Subir se aplica de inmediato y se cobra la diferencia. Bajar se aplica
        en la renovación.
      </>
    ),
  },
  {
    question: "¿Puedo cancelar?",
    answer: (
      <>
        El plan mensual, cuando quieras. El pago anual no se devuelve, salvo en
        los primeros 14 días. Se pide a soporte, en{" "}
        <SupportEmailLink subject="Cancelar el plan" />.
      </>
    ),
  },
  {
    question: "¿Qué pasa con mis datos si cancelo?",
    answer:
      "Se conservan 30 días después de que termina el periodo pagado, y luego se eliminan. Hasta entonces, el propietario de la agencia puede exportarlos desde «Uso y plan»: un Excel con clientes, pólizas, tareas, documentos, aseguradoras y ramos.",
  },
  {
    question: "¿Puedo pagar hoy?",
    answer:
      "Todavía no. Nexus está en beta cerrada y no tiene pago en línea. Solicita acceso y, si hay cupo, te llega un código de activación.",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="preguntas-titulo" className="border-t">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="preguntas-titulo"
          className="max-w-3xl text-2xl font-medium tracking-tight text-balance md:text-4xl"
        >
          Preguntas frecuentes
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Sobre los usuarios, el agente y lo que pasa con tu plan.
        </p>
        <div className="mt-10 max-w-3xl divide-y divide-border/60 border-y border-border/60 md:mt-12">
          {QUESTIONS.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                {item.question}
                <RiArrowDownSLine
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-2xl pb-5 leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
