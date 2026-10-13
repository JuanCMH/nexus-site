import type { Metadata } from "next";
import { AccessRequestForm } from "@/components/solicitar-acceso/access-request-form";
import { API_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitar acceso",
  description:
    "Nexus está en beta cerrada. Deja tu correo y el nombre de tu agencia para solicitar un código de activación.",
  alternates: { canonical: "/solicitar-acceso" },
};

const NEXT_STEPS = [
  "Revisamos tu solicitud",
  "Si hay cupo, te enviamos un código de activación de un solo uso",
  "Instalas Nexus en Windows y creas tu agencia con ese código",
] as const;

export default function AccessRequestPage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="stage-glow pointer-events-none absolute inset-x-0 top-0 h-96"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Solicita acceso a la beta
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Nexus está en beta cerrada: crear una agencia exige un código de
            activación. Déjanos tu correo y el nombre de tu agencia.
          </p>
          <ol className="mt-10 max-w-md divide-y divide-border/60 border-y border-border/60">
            {NEXT_STEPS.map((step, index) => (
              <li key={step} className="flex gap-4 py-4">
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <AccessRequestForm apiUrl={API_URL} />
      </div>
    </div>
  );
}
