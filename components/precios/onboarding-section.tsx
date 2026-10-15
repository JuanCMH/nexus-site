import { SupportEmailLink } from "@/components/precios/support-email-link";
import { CUSTOM_PLAN, formatUsd, PRICED_PLANS } from "@/lib/pricing";
import { formatCopEstimate, type Trm } from "@/lib/trm";

// La implementación acompañada es opcional y se paga una sola vez. La guía
// por cuenta propia se enlaza cuando exista el manual
// (docs/plans/2026-10-14-precios-design.md, «Pendiente»).
export function OnboardingSection({ trm }: { trm: Trm | null }) {
  return (
    <section aria-labelledby="implementacion-titulo" className="border-t">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="implementacion-titulo"
          className="max-w-3xl text-2xl font-medium tracking-tight text-balance md:text-4xl"
        >
          Empiezas por tu cuenta, o con ayuda
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Nexus se implementa por cuenta propia: una plantilla de Excel para
          importar clientes y pólizas y los flujos de Nexus listos para usar. Si
          prefieres acompañamiento, se pide a soporte en{" "}
          <SupportEmailLink subject="Implementación acompañada" />, se contrata
          aparte y se paga una sola vez. Ningún plan lo exige.
        </p>
        <dl className="mt-10 divide-y divide-border/60 border-y border-border/60 md:mt-12">
          {PRICED_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="grid gap-1 py-5 md:grid-cols-[10rem_12rem_1fr] md:gap-8"
            >
              <dt className="font-medium">{plan.name}</dt>
              <dd className="tabular-nums">
                {formatUsd(plan.onboarding.price)}
                {trm ? (
                  <span className="block text-sm text-muted-foreground">
                    {formatCopEstimate(plan.onboarding.price, trm)}
                  </span>
                ) : null}
              </dd>
              <dd className="leading-relaxed text-muted-foreground">
                {plan.onboarding.scope}
              </dd>
            </div>
          ))}
          <div className="grid gap-1 py-5 md:grid-cols-[10rem_12rem_1fr] md:gap-8">
            <dt className="font-medium">{CUSTOM_PLAN.name}</dt>
            <dd>A convenir</dd>
            <dd className="leading-relaxed text-muted-foreground">
              Se acuerda con soporte, junto con el plan.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
