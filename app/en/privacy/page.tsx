import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage, DocumentTable } from "@/components/site/document-page";
import { SupportEmailLink } from "@/components/site/support-email-link";
import { CONTROLLER, formatLegalDate, PRIVACY_POLICY } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What data Nexus processes, why, who it shares it with, how long it keeps it, and how to ask for it to be accessed, corrected or deleted.",
  ...pageMetadata("/en/privacy", {
    locale: "en_US",
    es: "/privacidad",
    en: "/en/privacy",
  }),
};

// Traducción de app/privacidad/page.tsx, que es la versión que rige: un
// cambio allá se trae aquí en el mismo commit (00 §6).
const PROVIDERS = [
  [
    "Convex",
    "The database, file storage and server for Nexus and its connector",
    "All of the above",
  ],
  [
    "Vercel",
    "Serves the web version and this site",
    "Technical data of each visit; agency data goes straight to Convex",
  ],
  [
    "Resend",
    "Sends account emails and billing statements",
    "The recipient and content of those emails",
  ],
  [
    "Anthropic",
    "Receives notifications to the agency’s routine",
    "Only identifiers and what happened",
  ],
  ["GitHub", "Distributes desktop app updates", "No agency data"],
] as const;

export default function PrivacyEnPage() {
  return (
    <DocumentPage
      lang="en"
      title="Privacy policy"
      lead="What data Nexus processes, why, who it shares it with, how long it keeps it, and how to ask for it to be accessed, corrected or deleted."
      meta={`Version ${PRIVACY_POLICY.version} · effective ${formatLegalDate(PRIVACY_POLICY.effectiveDate, "en-US")}`}
      translation={{
        href: "/privacidad",
        label: "Leer en español",
        hrefLang: "es",
      }}
    >
      <p>
        This is a translation of the Spanish policy, which is the governing
        version.
      </p>

      <h2>Who is responsible</h2>
      <p>
        Nexus belongs to {CONTROLLER.name} (“MAIN”), Colombian tax ID (NIT){" "}
        {CONTROLLER.nit}, located at {CONTROLLER.address}. For anything in this
        policy, the contact is <SupportEmailLink subject="Privacy" />.
      </p>
      <p>
        This policy is governed by Colombian law, in particular Law 1581 of 2012
        on personal data protection.
      </p>

      <h2>What it covers</h2>
      <p>
        Nexus in all its forms: the desktop app, the web version and the
        connector through which an agency’s agent accesses Nexus. It also covers
        this site.
      </p>
      <p>Nexus processes two kinds of data, with different roles:</p>
      <ul>
        <li>
          <strong>Data about the people who use Nexus.</strong> MAIN is the
          controller.
        </li>
        <li>
          <strong>Data an agency records about its clients.</strong> The agency
          is the controller: it obtains its clients’ authorization and handles
          their requests. MAIN is the processor and handles that data only to
          provide the service, as set out in the Terms of Use each agency
          accepts.
        </li>
      </ul>

      <h2>Data about the people who use Nexus</h2>
      <ul>
        <li>
          <strong>Account:</strong> name, email, password and, if added, a
          profile photo. The password is not stored: only its hash is, a value
          computed from it from which the password cannot be obtained. If the
          person turns on two-step verification, its secret and the hashes of
          the recovery codes are stored.
        </li>
        <li>
          <strong>Within each agency:</strong> role, additional permissions and,
          if the agency records them, job title and work phone.
        </li>
        <li>
          <strong>Security:</strong> the computers and browsers approved to open
          the access vault, where the agency keeps its passwords (their name and
          when they were used) and their sessions; password recovery and email
          verification codes, which expire.
        </li>
        <li>
          <strong>Activity:</strong> the agency’s activity log (who created,
          changed or deleted what, and when) and the acceptance of the Terms of
          Use (who, when and which version).
        </li>
        <li>
          <strong>Diagnostics:</strong> app errors (the technical message,
          screen, version, operating system and the person who hit them) and
          failures of the agent’s tools.
        </li>
        <li>
          <strong>Ideas and problems</strong> the person sends from the app,
          with the screen and version.
        </li>
        <li>
          <strong>Billing:</strong> the agency’s plan, its usage, its billing
          statements in US dollars and Colombian pesos, and the agency’s legal
          details shown on them.
        </li>
      </ul>

      <h2>Data an agency records</h2>
      <ul>
        <li>
          <strong>Its portfolio:</strong> clients and policies, with the fields
          the agency defines in its templates (identification, contact details,
          insured assets, amounts, among others) and the evidence for each value
          (the quote, page and document it came from).
        </li>
        <li>
          <strong>Its work:</strong> documents and their files, tasks and their
          history, surety bond quotes, drafted and pending emails, email
          templates, references, flows and criteria.
        </li>
        <li>
          <strong>Its linked mailboxes:</strong> Nexus reads the email accounts
          the agency links, on the mail servers the agency uses, and sends an
          email only when a person decides to. Each linked email account’s
          password is stored encrypted.
        </li>
        <li>
          <strong>Its vault:</strong> passwords are encrypted on the computer of
          the person who saves them before being sent. Nexus stores only the
          encrypted text and cannot read or recover it.
        </li>
      </ul>

      <h2>What it is used for</h2>
      <p>
        To provide the service, protect accounts, give support, fix errors and
        issue billing statements. Nexus sends password recovery and email
        verification codes, and billing statements, by email.
      </p>
      <p>
        MAIN does not sell, transfer or share an agency’s data, and does not
        access it except to provide the service, at the agency’s request or to
        fix an error. Nexus uses no third-party analytics or advertising.
      </p>

      <h2>The agent: Claude, under the agency’s account</h2>
      <p>
        Nexus does not include artificial intelligence. Each agency can connect{" "}
        <strong>its own Claude account</strong>, from Anthropic, through the
        Nexus connector.
      </p>
      <ul>
        <li>
          What the agent reads through the connector (clients, policies, emails,
          documents) reaches Claude by the agency’s decision and is handled
          under the account and terms the agency has with Anthropic. The agency
          chooses what to connect and can cut the connection in Nexus at any
          time.
        </li>
        <li>
          The connection can see and do the same as the person who approved it.
        </li>
        <li>
          To keep the connection, Nexus stores a hash of the access and refresh
          credentials, not the credentials, the name of the connected program,
          who approved it and when it was used.
        </li>
        <li>
          Files the agent reads or uploads travel through links that expire
          after thirty minutes.
        </li>
        <li>
          If the agency saves a trigger to notify its Claude routine, Nexus
          sends it notifications that carry only identifiers and what happened,
          never client data. The trigger key is stored encrypted.
        </li>
      </ul>
      <p>
        How to connect and what the agent can do:{" "}
        <Link href="/en/agent">Connect Claude to Nexus</Link>.
      </p>

      <h2>Who it is shared with</h2>
      <p>
        With the providers that run Nexus, and only with what each one needs:
      </p>
      <DocumentTable
        caption="Nexus providers"
        head={["Provider", "Purpose", "Data"]}
        rows={PROVIDERS}
      />
      <p>
        What the agent reads through the connector goes to the agency’s Claude
        account, as explained above.
      </p>

      <h2>Where it is stored</h2>
      <p>
        On Convex servers, in the United States. The agency authorizes that
        storage outside Colombia in the Terms of Use. The desktop app also
        stores on the computer its settings, the session, update logs and, on
        the owner’s computer, the agency’s documents folder, which Nexus keeps
        as a copy.
      </p>

      <h2>How it is protected</h2>
      <p>
        Communications are encrypted and each person signs in with their own
        user and permissions. Passwords are stored as hashes, linked email
        account passwords encrypted, and the vault is encrypted on the computer
        before it leaves. If a security incident affects an agency’s data, MAIN
        informs the agency’s owner within 72 hours of becoming aware of it.
      </p>

      <h2>How long it is kept</h2>
      <ul>
        <li>
          While the agency uses Nexus. Whoever has permission deletes records
          from the app; what is deleted in Nexus is also removed from the
          documents folder.
        </li>
        <li>
          During a suspension or after termination, thirty calendar days to
          export it. It is then deleted.
        </li>
        <li>App error and tool failure logs, thirty days.</li>
        <li>
          Agent file links, thirty minutes. Connection codes and requests, ten
          minutes.
        </li>
      </ul>

      <h2>This site</h2>
      <p>
        This site uses no cookies, analytics or third-party services. It only
        stores the chosen theme (light or dark) in the browser. It is served by
        Vercel.
      </p>

      <h2>Your rights</h2>
      <p>
        Under Law 1581 of 2012, you can access, update and correct your data;
        ask for it to be deleted or revoke your authorization when there is no
        legal or contractual duty to keep it; ask for proof of the
        authorization; know how it has been used; and file a complaint with
        Colombia’s Superintendence of Industry and Commerce.
      </p>
      <ul>
        <li>
          <strong>If you use Nexus:</strong> write to{" "}
          <SupportEmailLink subject="Privacy" /> from your account’s email.
          Inquiries are answered within ten business days and claims within
          fifteen, as the law requires. You can change your name and photo in
          the app, in «Tu perfil» (Your profile).
        </li>
        <li>
          <strong>If you are a client of an agency:</strong> the agency decides
          about your data. Contact the agency.
        </li>
      </ul>

      <h2>Changes</h2>
      <p>
        If this policy changes, the new version is published on this page with
        its number and date.
      </p>
    </DocumentPage>
  );
}
