import { BillingToggle } from "@/components/precios/billing-toggle";
import { CustomPlanCard } from "@/components/precios/custom-plan-card";
import { PlanCard } from "@/components/precios/plan-card";
import { SupportEmailLink } from "@/components/precios/support-email-link";
import {
  DOCUMENTS_PER_GB,
  EXTRA_MAILBOX,
  formatNumber,
  formatUsd,
  PRICED_PLANS,
  STORAGE_BLOCK,
} from "@/lib/pricing";
import { CLAUDE_PLANS_URL } from "@/lib/site";
import { formatTrmDate, formatTrmValue, type Trm } from "@/lib/trm";

export function PlansSection({ trm }: { trm: Trm | null }) {
  return (
    <section
      aria-labelledby="precios-titulo"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="stage-glow pointer-events-none absolute inset-x-0 top-0 h-96"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="rise text-sm font-medium text-nexus-sapphire-text">
          Precios
        </p>
        <h1
          id="precios-titulo"
          className="rise mt-3 max-w-3xl text-3xl font-medium tracking-tight text-balance [animation-delay:80ms] md:text-4xl"
        >
          Un plan para cada tipo de agencia
        </h1>
        <p className="rise mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms] md:text-xl">
          Desde quien trabaja solo hasta la corredora con áreas y decenas de
          usuarios. Todos los planes traen todas las funciones de Nexus; lo que
          cambia es el tamaño.
        </p>
        <div className="rise mt-8 [animation-delay:240ms]">
          <BillingToggle />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Precios en dólares
            {trm ? ", con su valor en pesos a la TRM del día" : ""}. El agente
            trabaja con la suscripción de Claude de tu agencia, que se paga
            aparte a Anthropic.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {PRICED_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} trm={trm} />
          ))}
          <CustomPlanCard />
        </div>

        <div className="mt-8 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>
            En cualquier plan: correo vinculado extra,{" "}
            {formatUsd(EXTRA_MAILBOX.monthly)} al mes; {STORAGE_BLOCK.gb} GB
            más, unos {formatNumber(STORAGE_BLOCK.gb * DOCUMENTS_PER_GB)}{" "}
            documentos, {formatUsd(STORAGE_BLOCK.price.monthly)} al mes. Pagando
            el año, {formatUsd(EXTRA_MAILBOX.annual)} cada uno. Se piden a
            soporte, en <SupportEmailLink subject="Ampliar el plan" />. El
            agente no cuenta como usuario.
          </p>
          <p>
            El plan de Claude recomendado es el que sugerimos para el trabajo
            que hace el agente en una agencia de ese tamaño; lo eliges y lo
            pagas con Anthropic.{" "}
            <a
              href={CLAUDE_PLANS_URL}
              className="rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Ver los planes de Claude
            </a>
          </p>
          {trm ? (
            <p className="tabular-nums">
              Valores en pesos a la TRM del {formatTrmDate(trm)} (
              {formatTrmValue(trm)}). Son una referencia: el precio es en
              dólares.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
