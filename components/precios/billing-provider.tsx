"use client";

import { type ReactNode, useState } from "react";
import { BillingContext } from "@/components/precios/use-billing";
import type { Billing } from "@/lib/pricing";

export function BillingProvider({ children }: { children: ReactNode }) {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <BillingContext value={{ billing, setBilling }}>{children}</BillingContext>
  );
}
