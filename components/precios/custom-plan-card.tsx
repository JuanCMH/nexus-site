import { PlanFacts } from "@/components/precios/plan-facts";
import { Button } from "@/components/ui/button";
import { CUSTOM_PLAN, formatUsd } from "@/lib/pricing";
import { SUPPORT_EMAIL } from "@/lib/site";

// Corredora no tiene precio publicado: se acuerda con soporte, por correo
// (docs/directives/02-producto.md §6). Nexus no es una persona, así que el
// botón dice «Escribir a soporte», no «Hablar con Nexus».
export function CustomPlanCard() {
  return (
    <article
      aria-labelledby="plan-corredora"
      className="flex flex-col rounded-lg border bg-card p-6"
    >
      <h2 id="plan-corredora" className="text-xl font-medium tracking-tight">
        {CUSTOM_PLAN.name}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {CUSTOM_PLAN.audience}
      </p>

      <p className="mt-6 text-4xl font-medium tracking-tight">A convenir</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Se acuerda con soporte, según el tamaño de la corredora
      </p>

      <PlanFacts
        facts={[
          { label: "Usuarios", value: "Desde 26" },
          {
            label: "Usuario adicional",
            value: `Desde ${formatUsd(CUSTOM_PLAN.extraUserFrom)} al mes; suma 1 correo vinculado`,
          },
          { label: "Correos vinculados", value: "A medida" },
          { label: "Almacenamiento", value: "A medida" },
          { label: "Claude recomendado", value: CUSTOM_PLAN.claudePlan },
        ]}
      />

      <Button asChild variant="outline" className="mt-auto h-11">
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Plan Corredora")}`}
        >
          Escribir a soporte
        </a>
      </Button>
    </article>
  );
}
