import type { Metadata } from "next";
import { DocumentPage } from "@/components/site/document-page";
import { SupportEmailLink } from "@/components/site/support-email-link";
import {
  AGENCY_AGREEMENT_ACCEPTANCE,
  AGENCY_AGREEMENT_INTRO,
  AGENCY_AGREEMENT_SECTIONS,
  AGENCY_AGREEMENT_TITLE,
} from "@/lib/agency-agreement";
import { AGENCY_AGREEMENT, formatLegalDate } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";
import { SUPPORT_EMAIL } from "@/lib/site";

const LEAD =
  "Las condiciones con que una agencia usa Nexus. Las acepta su propietario, en nombre de la agencia, al crearla y con cada versión nueva.";

export const metadata: Metadata = {
  // La plantilla del layout añade «· Nexus».
  title: "Acuerdo de uso",
  description: LEAD,
  ...pageMetadata("/terminos"),
};

// El texto es el Acuerdo de uso de `nexus-app`, copiado fiel en
// lib/agency-agreement.ts (docs/plans/2026-11-10-terminos-design.md). Esta
// página solo lo pinta, con los números que la app pone a cada numeral: el
// texto los cita («numeral 2.2»).

/** Una cláusula, con el correo de soporte como enlace si lo nombra. */
function Clause({ text }: { text: string }) {
  const [before, ...rest] = text.split(SUPPORT_EMAIL);
  if (rest.length === 0) return text;
  return (
    <>
      {before}
      <SupportEmailLink subject="Acuerdo de uso" />
      {rest.join(SUPPORT_EMAIL)}
    </>
  );
}

export default function TermsPage() {
  return (
    <DocumentPage
      lang="es"
      title={AGENCY_AGREEMENT_TITLE}
      lead={LEAD}
      meta={`Versión ${AGENCY_AGREEMENT.version} · vigente desde el ${formatLegalDate(AGENCY_AGREEMENT.effectiveDate, "es-CO")}`}
    >
      <p>{AGENCY_AGREEMENT_INTRO}</p>

      {AGENCY_AGREEMENT_SECTIONS.map((section, s) => (
        <section key={section.title} aria-labelledby={`numeral-${s + 1}`}>
          <h2 id={`numeral-${s + 1}`}>
            {s + 1}. {section.title}
          </h2>
          <ol className="list-none! pl-0!">
            {section.clauses.map((clause, c) => (
              <li key={clause} className="flex gap-3 pl-0!">
                <span className="shrink-0 text-muted-foreground tabular-nums">
                  {s + 1}.{c + 1}.
                </span>
                <span>
                  <Clause text={clause} />
                </span>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section aria-labelledby="aceptacion">
        <h2 id="aceptacion">Aceptación</h2>
        <p>{AGENCY_AGREEMENT_ACCEPTANCE}</p>
      </section>
    </DocumentPage>
  );
}
