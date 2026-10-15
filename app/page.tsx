import { BenefitsSection } from "@/components/home/benefits-section";
import { ClosingSection } from "@/components/home/closing-section";
import { FlowsVaultSection } from "@/components/home/flows-vault-section";
import { HeroSection } from "@/components/home/hero-section";
import { ModulesSection } from "@/components/home/modules-section";
import { SolvesSection } from "@/components/home/solves-section";
import { WorkScene } from "@/components/home/work-scene";

// El diseño y los textos: docs/plans/2026-10-11-landing-design.md.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <WorkScene />
      <SolvesSection />
      <ModulesSection />
      <FlowsVaultSection />
      <ClosingSection />
    </>
  );
}
