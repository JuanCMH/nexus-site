"use client";

import { useBilling } from "@/components/precios/use-billing";
import { type Billing, MONTHS_FREE_PER_YEAR } from "@/lib/pricing";

const OPTIONS: readonly { value: Billing; label: string }[] = [
  { value: "monthly", label: "Mensual" },
  { value: "annual", label: "Anual" },
];

// Radios nativos: se operan con flechas y el lector de pantalla los anuncia
// como un grupo, sin escribir el comportamiento a mano.
export function BillingToggle() {
  const { billing, setBilling } = useBilling();

  return (
    <fieldset className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <legend className="sr-only">Forma de pago</legend>
      <div className="inline-flex rounded-md border bg-background p-1">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className="inline-flex h-10 cursor-pointer items-center rounded-sm px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground has-checked:bg-nexus-sapphire/10 has-checked:text-nexus-sapphire-text has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 sm:h-8"
          >
            <input
              type="radio"
              name="billing"
              value={option.value}
              checked={billing === option.value}
              onChange={() => setBilling(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Pagando el año, {MONTHS_FREE_PER_YEAR} meses gratis
      </p>
    </fieldset>
  );
}
