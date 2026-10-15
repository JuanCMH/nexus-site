"use client";

import Link from "next/link";
import { PlanFacts } from "@/components/precios/plan-facts";
import { useBilling } from "@/components/precios/use-billing";
import { Button } from "@/components/ui/button";
import {
  annualTotals,
  DOCUMENTS_PER_GB,
  formatNumber,
  formatUsd,
  type PricedPlan,
} from "@/lib/pricing";
import { formatCopEstimate, type Trm } from "@/lib/trm";
import { cn } from "@/lib/utils";

type PlanCardProps = { plan: PricedPlan; trm: Trm | null };

export function PlanCard({ plan, trm }: PlanCardProps) {
  const { billing } = useBilling();
  const price = plan.base[billing];
  const { total, savings } = annualTotals(plan);

  const users =
    plan.maxUsers === 1
      ? "1 usuario"
      : `${plan.includedUsers} incluidos, hasta ${plan.maxUsers}`;
  const extraUser = plan.extraUser
    ? `${formatUsd(plan.extraUser[billing])} al mes cada uno; suma 1 correo vinculado`
    : "Para sumar otro, pasa a Agencia";

  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      className={cn(
        "flex flex-col rounded-lg border bg-card p-6",
        plan.recommended && "stage-edge border-nexus-sapphire/70",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h2
          id={`plan-${plan.id}`}
          className="text-xl font-medium tracking-tight"
        >
          {plan.name}
        </h2>
        {plan.recommended ? (
          <span className="rounded-sm border border-nexus-sapphire/10 bg-nexus-sapphire/10 px-2 py-0.5 text-xs font-medium text-nexus-sapphire-text">
            Recomendado
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{plan.audience}</p>

      <p className="mt-6 flex items-baseline gap-2 tabular-nums">
        <span className="text-4xl font-medium tracking-tight">
          {formatUsd(price)}
        </span>
        <span className="text-sm text-muted-foreground">al mes</span>
      </p>
      <p className="mt-1 text-sm text-muted-foreground tabular-nums">
        {billing === "annual"
          ? `${formatUsd(total)} al año · ahorras ${formatUsd(savings)}`
          : "Sin permanencia"}
      </p>
      {trm ? (
        <p className="mt-1 text-sm text-muted-foreground tabular-nums">
          {formatCopEstimate(price, trm)} al mes
        </p>
      ) : null}

      <PlanFacts
        facts={[
          { label: "Usuarios", value: users },
          { label: "Usuario adicional", value: extraUser },
          { label: "Correos vinculados", value: String(plan.mailboxes) },
          {
            label: "Almacenamiento",
            value: `${plan.storageGb} GB, unos ${formatNumber(plan.storageGb * DOCUMENTS_PER_GB)} documentos`,
          },
          { label: "Claude recomendado", value: plan.claudePlan },
        ]}
      />

      <Button
        asChild
        variant={plan.recommended ? "default" : "outline"}
        className="mt-auto h-11"
      >
        <Link href="/solicitar-acceso">Solicitar acceso</Link>
      </Button>
    </article>
  );
}
