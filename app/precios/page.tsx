import type { Metadata } from "next";
import { BillingProvider } from "@/components/precios/billing-provider";
import { FaqSection } from "@/components/precios/faq-section";
import { IncludedSection } from "@/components/precios/included-section";
import { OnboardingSection } from "@/components/precios/onboarding-section";
import { PlansSection } from "@/components/precios/plans-section";
import { PricingClosing } from "@/components/precios/pricing-closing";
import { WhySection } from "@/components/precios/why-section";
import { pageMetadata } from "@/lib/metadata";
import { formatUsd, PRICED_PLANS } from "@/lib/pricing";
import { getTrm } from "@/lib/trm";

export const metadata: Metadata = {
  title: "Precios para agencias de seguros",
  description: `Cuatro planes según el tamaño de tu agencia, desde ${formatUsd(PRICED_PLANS[0].base.monthly)} al mes, con su valor en pesos a la TRM del día. Todos traen todas las funciones.`,
  ...pageMetadata("/precios"),
};

// El diseño y los textos: docs/plans/2026-10-14-precios-design.md.
export default async function PricingPage() {
  const trm = await getTrm();

  return (
    <>
      {/* La forma de pago la eligen el conmutador y la leen las tarjetas. */}
      <BillingProvider>
        <PlansSection trm={trm} />
      </BillingProvider>
      <IncludedSection />
      <OnboardingSection trm={trm} />
      <WhySection />
      <FaqSection />
      <PricingClosing />
    </>
  );
}
