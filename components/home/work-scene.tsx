"use client";

import { RiAttachmentLine, RiMailLine } from "@remixicon/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";
import { LogEntries } from "@/components/app-replica/log-entries";
import { PROPOSED_POLICY } from "@/components/app-replica/policies-data";
import {
  PoliciesScreen,
  type PoliciesStage,
} from "@/components/app-replica/policies-screen";
import { cn } from "@/lib/utils";

const SENDER = "carolina.mejia@transportesandinos.com.co";

// Es una secuencia de verdad: cada paso ocurre después del anterior.
const STEPS: readonly {
  title: string;
  detail: string;
  stage: PoliciesStage;
}[] = [
  {
    title: "Llega un correo con una carátula",
    detail:
      "Tu agente lee los correos vinculados de la agencia y encuentra una póliza que aún no está en el registro.",
    stage: "base",
  },
  {
    title: "El agente propone la póliza",
    detail:
      "Lee la carátula y registra la póliza y su cliente, sin que nadie digite. Queda «Por confirmar», y su ficha dice de qué correo salió.",
    stage: "proposed",
  },
  {
    title: "Tú la revisas y la confirmas",
    detail:
      "Alguien de tu equipo la revisa y la confirma. Hasta entonces no queda firme.",
    stage: "selected",
  },
  {
    title: "Queda en el registro, con su rastro",
    detail:
      "La póliza ya está en tu cartera, ligada a su cliente. La bitácora guarda quién la propuso y quién la confirmó.",
    stage: "confirmed",
  },
];

/** El correo que dispara la escena. Es escenario del sitio, no una pantalla de la app. */
function MailCard({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "stage-edge w-full max-w-sm rounded-lg bg-card/80 p-4 text-left backdrop-blur-xl",
        className,
      )}
    >
      <p className="flex items-center gap-2 text-muted-foreground text-xs">
        <RiMailLine className="size-4" />
        Correo vinculado «Renovaciones»
      </p>
      <p className="mt-3 font-medium text-sm">
        Renovación póliza de autos {PROPOSED_POLICY.policyNumber}
      </p>
      <p className="mt-1 truncate font-mono text-muted-foreground text-xs">
        {SENDER}
      </p>
      <p className="mt-3 inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-xs">
        <RiAttachmentLine className="size-3.5" />
        Carátula {PROPOSED_POLICY.policyNumber}.pdf
      </p>
    </div>
  );
}

/** La procedencia tal como la escribe la ficha de la póliza en la app. */
function SourceLine() {
  return (
    <p className="app-replica mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-muted-foreground text-xs">
      <RiMailLine className="size-3.5 shrink-0" />
      <span className="min-w-0 whitespace-normal break-words">
        Se encontró en el correo Renovaciones, remitente {SENDER}, 11/10/2026
      </span>
    </p>
  );
}

function Heading() {
  return (
    <>
      <h2 className="text-2xl font-medium tracking-tight text-balance md:text-4xl">
        Una póliza llega por correo y nadie la digita
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Tu agente la lee y la propone. Tú la revisas y la confirmas.
      </p>
    </>
  );
}

/** Con poco ancho o con movimiento reducido: los cuatro pasos, uno bajo otro. */
function StackedScene() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 stage:hidden">
      <div className="max-w-2xl">
        <Heading />
      </div>
      <ol className="mt-10 space-y-16 md:mt-12">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <div className="flex max-w-2xl gap-4">
              <span className="font-mono text-muted-foreground text-sm tabular-nums leading-7">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-medium tracking-tight md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
                {index === 1 ? <SourceLine /> : null}
              </div>
            </div>
            <div className="mt-6">
              {index === 0 ? <MailCard /> : null}
              {index === 1 || index === 2 ? (
                <div className="stage-edge rounded-xl">
                  <PoliciesScreen stage={step.stage} />
                </div>
              ) : null}
              {index === 3 ? (
                <div className="stage-edge max-w-2xl rounded-xl">
                  <LogEntries />
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** En pantallas anchas: la pantalla queda fija y el scroll la hace avanzar. */
function PinnedScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(value * STEPS.length)));
  });

  // El botón del título se extiende a todo el paso (`after:inset-0`).
  // Un clic en un paso lleva el scroll al centro de su tramo: la escena
  // sigue siendo una sola, gobernada por el scroll nativo.
  const goToStep = (index: number) => {
    const scene = ref.current;
    if (!scene) return;
    const top = scene.getBoundingClientRect().top + window.scrollY;
    const travel = scene.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + ((index + 0.5) / STEPS.length) * travel,
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className="relative hidden h-[360vh] stage:block">
      <div className="sticky top-14 flex h-[calc(100dvh-3.5rem)] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-10 px-6">
          <div className="col-span-4">
            <Heading />
            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-border"
              />
              <motion.div
                aria-hidden="true"
                style={{ scaleY: scrollYProgress }}
                className="absolute inset-y-0 left-0 w-px origin-top bg-nexus-sapphire"
              />
              <ol className="space-y-6 pl-6">
                {STEPS.map((step, index) => (
                  <li
                    key={step.title}
                    aria-current={index === active ? "step" : undefined}
                    className={cn(
                      "relative transition-opacity duration-500",
                      index === active
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <h3 className="text-lg font-medium tracking-tight">
                      <button
                        type="button"
                        onClick={() => goToStep(index)}
                        className="flex cursor-pointer gap-3 rounded-sm text-left outline-none after:absolute after:inset-0 focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        <span className="font-mono text-muted-foreground text-sm tabular-nums leading-7">
                          {index + 1}
                        </span>
                        {step.title}
                      </button>
                    </h3>
                    <p className="mt-1 pl-6 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                    {index === 1 && active === 1 ? (
                      <div className="pl-6">
                        <SourceLine />
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="relative col-span-8">
            <div className="stage-edge rounded-xl">
              <PoliciesScreen stage={STEPS[active].stage} />
            </div>
            <AnimatePresence>
              {active === 0 ? (
                <motion.div
                  key="mail"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -top-10 right-8 w-80"
                >
                  <MailCard />
                </motion.div>
              ) : null}
              {active === 3 ? (
                <motion.div
                  key="log"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="stage-edge absolute right-8 -bottom-8 w-136 rounded-xl"
                >
                  <LogEntries />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkScene() {
  return (
    <section
      id="como-trabaja"
      aria-label="Una póliza llega por correo y nadie la digita"
      className="scroll-mt-14 border-y"
    >
      <StackedScene />
      <PinnedScene />
    </section>
  );
}
