"use client";

import { createContext, useContext } from "react";
import type { Billing } from "@/lib/pricing";

export type BillingState = {
  billing: Billing;
  setBilling: (billing: Billing) => void;
};

export const BillingContext = createContext<BillingState | null>(null);

/** La forma de pago que eligió la persona: la leen las tarjetas. */
export function useBilling(): BillingState {
  const state = useContext(BillingContext);
  if (!state) throw new Error("useBilling necesita un BillingProvider");
  return state;
}
