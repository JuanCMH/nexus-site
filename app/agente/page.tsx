import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/site/document-page";
import { SupportEmailLink } from "@/components/site/support-email-link";
import { CONNECTOR_GUIDE_APP_VERSION } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";
import { CLAUDE_PLANS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conectar Claude con Nexus",
  description:
    "Cómo se conecta el Claude de tu agencia a Nexus, desde el directorio de conectores o con «Añadir a Claude», qué puede hacer el agente y cómo se desconecta.",
  ...pageMetadata("/agente", {
    locale: "es_CO",
    es: "/agente",
    en: "/en/agent",
  }),
};

// Los nombres de pantalla y de botón son los de `nexus-app`, citados como se
// ven (01 §6.2). La traducción está en app/en/agent/page.tsx: un cambio aquí
// va allá (docs/plans/2026-10-21-privacidad-y-conector-design.md).
export default function AgentPage() {
  return (
    <DocumentPage
      lang="es"
      title="Conectar Claude con Nexus"
      lead="Cómo se conecta el Claude de tu agencia a Nexus, qué puede hacer una vez conectado y cómo se desconecta."
      meta={`Escrita para Nexus ${CONNECTOR_GUIDE_APP_VERSION}`}
      translation={{
        href: "/en/agent",
        label: "Read in English",
        hrefLang: "en",
      }}
    >
      <h2>Antes de empezar</h2>
      <ul>
        <li>
          <strong>Una cuenta de Claude</strong> que admita conectores. Qué
          planes los incluyen lo define Anthropic (
          <a href={CLAUDE_PLANS_URL}>sus planes</a>).
        </li>
        <li>
          <strong>
            Una cuenta en Nexus con el permiso «Conectar el agente y definir su
            horario».
          </strong>{" "}
          Se da por rol, en Configuración → Equipo.
        </li>
      </ul>
      <p>
        La conexión puede ver y hacer lo mismo que la persona que la aprueba.
        Que la apruebe alguien con los permisos que el agente necesita.
      </p>

      <h2>Conectar desde el directorio de Claude</h2>
      <ol>
        <li>
          En Claude, abre el directorio de conectores, busca Nexus y conéctalo.
        </li>
        <li>
          Claude abre la página de autorización de Nexus, que enseña un código
          de ocho caracteres. Vale diez minutos.
        </li>
        <li>
          En Nexus, ve a{" "}
          <strong>Agente → Puesta en marcha → Código de Claude</strong>, escribe
          el código y haz clic en «Conectar». Escribirlo es aprobar la conexión.
        </li>
        <li>La página de autorización sigue sola y vuelve a Claude.</li>
      </ol>
      <p>La conexión queda unida a la agencia de quien escribió el código.</p>

      <h2>Conectar una segunda agencia con «Añadir a Claude»</h2>
      <p>
        Una cuenta de Claude conecta una sola vez un conector del directorio. Si
        trabajas con dos agencias en Nexus, la segunda se conecta con su propio
        conector:
      </p>
      <ol>
        <li>
          En Nexus, entra a esa agencia y ve a{" "}
          <strong>Agente → Puesta en marcha</strong>.
        </li>
        <li>
          Haz clic en «Añadir a Claude». Claude añade el conector de esa agencia
          y abre su página de autorización, que enseña un código corto.
        </li>
        <li>
          En Nexus aparece una «Solicitud de conexión» con un código. Si
          coincide con el de la página de Claude, haz clic en «Aprobar».
        </li>
      </ol>

      <h2>Qué puede hacer el agente</h2>
      <p>
        El agente trabaja con lo que la agencia tiene en Nexus y con los flujos
        que la agencia le da: leer los correos vinculados, registrar documentos,
        actualizar la cartera, atender tareas, redactar correos y cotizar
        cumplimiento, entre otros.
      </p>
      <ul>
        <li>
          <strong>Lee y propone.</strong> Lo que el agente crea queda en{" "}
          <strong>Agente → Por confirmar</strong> hasta que una persona lo
          confirma o lo descarta. Si corrige un registro ya confirmado, el
          cambio queda marcado hasta que una persona lo da por revisado.
        </li>
        <li>
          <strong>No hace lo que es de una persona:</strong> enviar un correo
          (lo deja «Por enviar»), confirmar lo que propuso, abrir la bóveda o
          borrar registros.
        </li>
        <li>
          <strong>No puede más que quien aprobó la conexión.</strong>
        </li>
        <li>
          <strong>Todo queda en la bitácora</strong>, con el agente como autor
          y, si actuó por encargo, a petición de quién.
        </li>
      </ul>

      <h2>Desconectar</h2>
      <p>
        En Nexus, en <strong>Agente → Puesta en marcha</strong>, «Conexiones
        activas» enseña cada programa conectado. «Cortar la conexión» le quita
        el acceso de inmediato. Para que el agente deje de entrar, la conexión
        se corta en Nexus.
      </p>

      <h2>Tus datos</h2>
      <p>
        Lo que el agente lee por el conector llega a tu cuenta de Claude y se
        trata según tus condiciones con Anthropic. El detalle está en la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>

      <h2>Ayuda</h2>
      <p>
        Escribe a soporte: <SupportEmailLink subject="Conector de Claude" />.
      </p>
    </DocumentPage>
  );
}
