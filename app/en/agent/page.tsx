import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/site/document-page";
import { SupportEmailLink } from "@/components/site/support-email-link";
import { CONNECTOR_GUIDE_APP_VERSION } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";
import { CLAUDE_PLANS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Connect Claude to Nexus",
  description:
    "How to connect your agency’s Claude to Nexus, from the connectors directory or with «Añadir a Claude», what the agent can do and how to disconnect it.",
  ...pageMetadata("/en/agent", {
    locale: "en_US",
    es: "/agente",
    en: "/en/agent",
  }),
};

// Traducción de app/agente/page.tsx: un cambio allá se trae aquí (00 §6).
// Nexus solo está en español: cada pantalla y botón va con su nombre en
// español, como se ve, y su traducción entre paréntesis.
export default function AgentEnPage() {
  return (
    <DocumentPage
      lang="en"
      title="Connect Claude to Nexus"
      lead="How to connect your agency’s Claude to Nexus, what it can do once connected and how to disconnect it."
      meta={`Written for Nexus ${CONNECTOR_GUIDE_APP_VERSION}`}
      translation={{
        href: "/agente",
        label: "Leer en español",
        hrefLang: "es",
      }}
    >
      <p>
        Nexus is only available in Spanish. Screen and button names are quoted
        as they appear in the app, with their translation in parentheses.
      </p>

      <h2>Before you start</h2>
      <ul>
        <li>
          <strong>A Claude account</strong> that supports connectors. Anthropic
          defines which plans include them (
          <a href={CLAUDE_PLANS_URL}>its plans</a>
          ).
        </li>
        <li>
          <strong>
            A Nexus account with the permission «Conectar el agente y definir su
            horario» (Connect the agent and set its schedule).
          </strong>{" "}
          It is granted per role, in Configuración → Equipo (Settings → Team).
        </li>
      </ul>
      <p>
        The connection can see and do the same as the person who approves it.
        Have it approved by someone with the permissions the agent needs.
      </p>

      <h2>Connect from the Claude directory</h2>
      <ol>
        <li>
          In Claude, open the connectors directory, find Nexus and connect it.
        </li>
        <li>
          Claude opens the Nexus authorization page, which shows an
          eight-character code. It is valid for ten minutes.
        </li>
        <li>
          In Nexus, go to{" "}
          <strong>Agente → Puesta en marcha → Código de Claude</strong> (Agent →
          Setup → Claude code), type the code and click «Conectar» (Connect).
          Typing it approves the connection.
        </li>
        <li>
          The authorization page continues on its own and returns to Claude.
        </li>
      </ol>
      <p>
        The connection is tied to the agency of the person who typed the code.
      </p>

      <h2>Connect a second agency with «Añadir a Claude»</h2>
      <p>
        A Claude account connects a directory connector only once. If you work
        with two agencies in Nexus, the second one connects through its own
        connector:
      </p>
      <ol>
        <li>
          In Nexus, open that agency and go to{" "}
          <strong>Agente → Puesta en marcha</strong> (Agent → Setup).
        </li>
        <li>
          Click «Añadir a Claude» (Add to Claude). Claude adds that agency’s
          connector and opens its authorization page, which shows a short code.
        </li>
        <li>
          A «Solicitud de conexión» (Connection request) with a code appears in
          Nexus. If it matches the one on the Claude page, click «Aprobar»
          (Approve).
        </li>
      </ol>

      <h2>What the agent can do</h2>
      <p>
        The agent works with what the agency has in Nexus and with the flows the
        agency gives it: reading linked mailboxes, registering documents,
        updating the portfolio, handling tasks, drafting emails and quoting
        surety bonds, among others.
      </p>
      <ul>
        <li>
          <strong>It reads and proposes.</strong> What the agent creates waits
          in <strong>Agente → Por confirmar</strong> (Agent → To confirm) until
          a person confirms or discards it. If it corrects a record that was
          already confirmed, the change stays flagged until a person marks it as
          reviewed.
        </li>
        <li>
          <strong>It does not do what belongs to a person:</strong> sending an
          email (it leaves it «Por enviar», to send), confirming its own
          proposals, opening the vault or deleting records.
        </li>
        <li>
          <strong>
            It can do no more than the person who approved the connection.
          </strong>
        </li>
        <li>
          <strong>Everything goes into the activity log</strong>, with the agent
          as author and, if it acted on someone’s behalf, at whose request.
        </li>
      </ul>

      <h2>Disconnect</h2>
      <p>
        In Nexus, in <strong>Agente → Puesta en marcha</strong> (Agent → Setup),
        «Conexiones activas» (Active connections) shows each connected program.
        «Cortar la conexión» (Cut the connection) removes its access
        immediately. To stop the agent from accessing Nexus, cut the connection
        in Nexus.
      </p>

      <h2>Your data</h2>
      <p>
        What the agent reads through the connector reaches your Claude account
        and is handled under your terms with Anthropic. The details are in the{" "}
        <Link href="/en/privacy">privacy policy</Link>.
      </p>

      <h2>Help</h2>
      <p>
        Write to support: <SupportEmailLink subject="Claude connector" />.
      </p>
    </DocumentPage>
  );
}
