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
    "How to connect your agency’s Claude to Nexus, with «Añadir a Claude» or from the connectors directory, what the agent does and how to disconnect it. It also works with ChatGPT and other MCP-compatible assistants.",
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
      lead="How to connect your agency’s Claude to Nexus, what the agent does once connected and how to disconnect it. The connector also works with ChatGPT and other MCP-compatible assistants."
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
          ). With another assistant, its provider defines them.
        </li>
        <li>
          <strong>
            A Nexus account with the permission «Conectar el agente y definir su
            horario» (Connect the agent and set its schedule).
          </strong>{" "}
          It is granted per role, in Configuración → Equipo → «Roles» (Settings
          → Team → Roles). It gives access to Agente → Configuración (Agent →
          Settings).
        </li>
        <li>
          <strong>
            The agent’s connection is approved by the owner or an administrator.
          </strong>{" "}
          Once approved, the assistant works as the agency’s agent, with the
          agent’s permissions.
        </li>
      </ul>
      <p>
        The agency has a single agent connection, and all its routines go
        through it. A new connection replaces the previous one. Each person can
        also connect their own assistant, if their role allows it (see «Your own
        assistant» below).
      </p>

      <h2>Connect the agent with «Añadir a Claude»</h2>
      <ol>
        <li>
          In Nexus, go to <strong>Agente → Configuración</strong> (Agent →
          Settings). In «Conexión del agente» (Agent connection), «Conector de
          esta agencia» (This agency’s connector) shows the connector name,
          «Nexus - Agente de la agencia», and its address. If you belong to
          several agencies, the name also shows the agency in parentheses.
        </li>
        <li>
          In the «Claude» tab, click «Añadir a Claude» (Add to Claude). Claude
          opens with the connector ready: confirm it and connect it. In Claude
          Team or Enterprise, an Owner of the organization adds it, with the
          link copied by «Enlace para Owner» (Link for Owner).
        </li>
        <li>
          Claude opens the Nexus authorization page, which shows a code. In
          Agente → Configuración a «Solicitud de conexión» (Connection request)
          appears at the top, with the program asking to connect as the agency’s
          agent and a code. Click «Aprobar» (Approve) only if the code matches
          the one on the authorization page; if you do not recognize it,
          «Rechazar» (Reject).
        </li>
        <li>
          The notice says «Conexión aprobada» (Connection approved). The
          authorization page continues on its own and returns to Claude. The
          block says «Conectado como agente de» (Connected as agent of) the
          agency, with the program, who authorized it, when, and its «Último
          uso» (Last used).
        </li>
      </ol>

      <h2>Connect from the Claude directory</h2>
      <ol>
        <li>
          In Claude, open the connectors directory, find Nexus and connect it.
        </li>
        <li>
          Claude opens the Nexus authorization page, which shows an
          eight-character code. It is valid for ten minutes and can be used
          once.
        </li>
        <li>
          In Nexus, go to <strong>Agente → Configuración</strong> (Agent →
          Settings), type the code in «¿El asistente muestra un código de ocho
          caracteres?» (Does the assistant show an eight-character code?) and
          click «Conectar» (Connect). Typing it ties the connection to this
          agency and approves it.
        </li>
        <li>
          The authorization page continues on its own and returns to Claude.
        </li>
      </ol>

      <h2>With ChatGPT or another MCP-compatible assistant</h2>
      <p>
        Nexus recommends Claude. The connector also works with ChatGPT and other
        MCP-compatible assistants that authenticate with OAuth. The connector
        address is the same; what changes is where you paste it. In Agente →
        Configuración, choose your assistant’s tab:
      </p>
      <ul>
        <li>
          <strong>ChatGPT:</strong> «Copiar dirección» (Copy address) and «Abrir
          ChatGPT» (Open ChatGPT). In ChatGPT, open Plugins, click «+» and
          choose «Add custom MCP server». Paste the connector address and choose
          OAuth as the authentication.
        </li>
        <li>
          <strong>Otro cliente MCP (Other MCP client):</strong> «Copiar
          dirección» (Copy address). In your assistant or orchestrator, add a
          remote MCP server with the connector address and OAuth authentication.
        </li>
      </ul>
      <p>
        Once connected, the connection is approved as with Claude: through the
        «Solicitud de conexión» or by typing the eight-character code.
      </p>

      <h2>Letting Nexus notify the agent</h2>
      <p>
        In «Activación del agente» (Agent activation), Nexus stores the
        assistant’s trigger: a Claude routine, a ChatGPT agent or, for another
        assistant, an https address that receives a signed webhook. With it,
        Nexus activates the agent when someone delegates a task to it, leaves it
        a note or answers one of its questions, within the «Horario de atención»
        (Service hours) set by the agency. For the ChatGPT agent, the screen
        states that ChatGPT Business or Enterprise is required. The steps are in
        the manual, in Spanish:{" "}
        <Link href="/manual/agente/conectar-el-asistente" hrefLang="es">
          Conectar el asistente de la agencia
        </Link>
        .
      </p>

      <h2>Your own assistant</h2>
      <p>
        Whoever has the permission «Conectar su propio asistente» (Connect their
        own assistant) can connect their Claude, their ChatGPT or another MCP
        client in <strong>Agente → Mi asistente</strong> (Agent → My assistant),
        with their own connector, «Nexus - Agente personal».
      </p>
      <ol>
        <li>
          In «1. Añade tu conector al asistente» (1. Add your connector to the
          assistant), choose your assistant’s tab and add the connector as
          above.
        </li>
        <li>
          When you connect it, the assistant opens a Nexus page with a code.
          Type it in «2. Escribe el código de la página de Nexus» (2. Type the
          code from the Nexus page) and click «Conectar» (Connect). Typing it
          approves your own connection.
        </li>
      </ol>
      <p>
        Your assistant sees and does the same as you, and what it registers
        waits to be confirmed. It is not the agency’s agent: it does not run the
        agency’s routines or handle delegated tasks. Whoever has «Conectar el
        agente y definir su horario» does not see «Mi asistente»: their
        assistant is the agent they configure. Without the permission, «Pedir
        ayuda al agente» (Ask the agent for help) offers «Nueva tarea» (New
        task), to delegate the work to the agency’s agent. The details are in{" "}
        <Link href="/manual/agente/mi-asistente" hrefLang="es">
          Conectar tu propio asistente
        </Link>
        , in Spanish.
      </p>

      <h2>What the agent does</h2>
      <p>
        The agent is one more member of the team, named «Agente» (Agent), with
        its own permissions. It works with what the agency has in Nexus and with
        the flows the agency gives it: reading linked mailboxes, registering
        documents, updating the portfolio, handling tasks, drafting emails and
        quoting surety bonds, among others.
      </p>
      <ul>
        <li>
          <strong>Nexus verifies what it registers.</strong> What the agent
          registers is verified by Nexus and, depending on the supervision
          chosen by the owner or an administrator in Agente → Supervisión (Agent
          → Supervision) («Revisar todo» (Review everything), the default;
          «Revisar excepciones» (Review exceptions); «Revisar solo lo bloqueado»
          (Review only what is blocked)), a person confirms everything or only
          what Nexus could not verify. Verification covers clients and policies;
          everything else it proposes, such as insurers, lines of business or
          criteria, always waits in Agente → «Por confirmar» (To confirm). If it
          corrects a record that was already confirmed, the change stays flagged
          until a person marks it as reviewed.
        </li>
        <li>
          <strong>It applies some settings on its own.</strong> In these areas
          of the agency’s settings it makes the change without asking, within
          what the person who connected it or asked for the work can do:
          cancelling a policy, the agency’s presentation, publishing a flow,
          references, deadlines and renewal, document organization, criteria and
          assignment rules, and surety bond rules. Each change is listed in
          Agente → Permisos → «Historial de solicitudes» (Agent → Permissions →
          Request history), where it can be undone for seven days.
        </li>
        <li>
          <strong>It asks for everything else.</strong> Deleting, inviting, a
          person’s data and vault accesses always ask; roles ask, unless someone
          gave it a permission for a limited time. The owner or an administrator
          can mark any area in «Qué pregunta siempre» (What it always asks) so
          that it asks there. Its requests arrive in the «El agente pide
          permiso» (The agent asks for permission) window, where a person
          approves them, returns them for correction or discards them. The
          details are in{" "}
          <Link href="/manual/agente/permisos-y-solicitudes" hrefLang="es">
            the manual
          </Link>
          , in Spanish.
        </li>
        <li>
          <strong>It does not do what belongs to a person:</strong> sending an
          email (it leaves it to send, and it is sent by whoever has the
          permission «Enviar los correos que redacta el agente» (Send the emails
          the agent drafts)), opening the access vault or confirming its own
          proposals.
        </li>
        <li>
          <strong>It works with the permissions of whoever asks.</strong> When
          it works for someone, for example on a task that person delegated to
          it, it cannot see or change what that person could not.
        </li>
        <li>
          <strong>Everything goes into the activity log</strong>, with the agent
          as author and, if it acted on someone’s behalf, at whose request.
        </li>
      </ul>
      <p>
        How the agent works, screen by screen, is in the manual, in Spanish:{" "}
        <Link href="/manual/agente/como-trabaja-el-agente" hrefLang="es">
          Cómo trabaja el agente
        </Link>{" "}
        and{" "}
        <Link href="/manual/agente/verificacion-y-supervision" hrefLang="es">
          Verificación y supervisión
        </Link>
        .
      </p>

      <h2>Disconnect</h2>
      <ul>
        <li>
          <strong>The agency’s agent:</strong> in Agente → Configuración, in the
          connection block, «Cortar la conexión» (Cut the connection). The
          assistant stops working as the agency’s agent, and so do its routines.
          To connect it again, a new connection has to be approved.
        </li>
        <li>
          <strong>Your own assistant:</strong> in Agente → Mi asistente, «Tus
          conexiones» (Your connections) shows each connected program; «Cortar
          la conexión» stops it from entering Nexus immediately. If you lose the
          permission, your connections stop working on their own.
        </li>
        <li>
          <strong>Someone else’s:</strong> whoever manages the agent sees it in
          Agente → Configuración, in «Asistente de cada persona» (Each person’s
          assistant), and can cut it with «Cortar la conexión».
        </li>
      </ul>
      <p>
        Removing the connector in the assistant does not cut the connection in
        Nexus: cut it there too.
      </p>

      <h2>Your data</h2>
      <p>
        What the agent reads through the connector reaches your assistant’s
        provider, Anthropic for Claude or OpenAI for ChatGPT, and is handled
        under your account and your terms with that provider. The details are in
        the <Link href="/en/privacy">privacy policy</Link>.
      </p>

      <h2>Help</h2>
      <p>
        Write to support: <SupportEmailLink subject="Claude connector" />.
      </p>
    </DocumentPage>
  );
}
