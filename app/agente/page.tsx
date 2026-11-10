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
    "Cómo se conecta el Claude de tu agencia a Nexus, con «Añadir a Claude» o desde el directorio de conectores, qué hace el agente y cómo se desconecta. También funciona con ChatGPT y otros asistentes compatibles con MCP.",
  ...pageMetadata("/agente", {
    locale: "es_CO",
    es: "/agente",
    en: "/en/agent",
  }),
};

// Los nombres de pantalla y de botón son los de `nexus-app` 0.68.3, citados
// como se ven (01 §6.2). La traducción está en app/en/agent/page.tsx: un
// cambio aquí va allá (docs/plans/2026-10-21-privacidad-y-conector-design.md).
export default function AgentPage() {
  return (
    <DocumentPage
      lang="es"
      title="Conectar Claude con Nexus"
      lead="Cómo se conecta el Claude de tu agencia a Nexus, qué hace el agente una vez conectado y cómo se desconecta. El conector también funciona con ChatGPT y con otros asistentes compatibles con MCP."
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
          <a href={CLAUDE_PLANS_URL}>sus planes</a>). Con otro asistente, lo
          define su proveedor.
        </li>
        <li>
          <strong>
            Una cuenta en Nexus con el permiso «Conectar el agente y definir su
            horario».
          </strong>{" "}
          Se da por rol, en Configuración → Equipo → «Roles». Con él se ve
          Agente → Configuración.
        </li>
        <li>
          <strong>
            La conexión del agente la aprueban el propietario o un
            administrador.
          </strong>{" "}
          Aprobada, el asistente trabaja como el agente de la agencia, con sus
          permisos.
        </li>
      </ul>
      <p>
        La agencia tiene una sola conexión del agente, y por ella entran todas
        sus rutinas. Una conexión nueva reemplaza a la anterior. Cada persona
        puede conectar además su propio asistente, si su rol lo permite (más
        abajo, «Tu propio asistente»).
      </p>

      <h2>Conectar el agente con «Añadir a Claude»</h2>
      <ol>
        <li>
          En Nexus, ve a <strong>Agente → Configuración</strong>. En «Conexión
          del agente», «Conector de esta agencia» enseña el nombre del conector,
          «Nexus - Agente de la agencia», y su dirección. Si perteneces a varias
          agencias, el nombre lleva también la agencia entre paréntesis.
        </li>
        <li>
          En la pestaña «Claude», haz clic en «Añadir a Claude». Claude se abre
          con el conector listo: confírmalo y conéctalo. En Claude Team o
          Enterprise lo añade un Owner de la organización, con el enlace que
          copia «Enlace para Owner».
        </li>
        <li>
          Claude abre la página de autorización de Nexus, que muestra un código.
          En Agente → Configuración aparece arriba una «Solicitud de conexión»,
          con el programa que pide conectarse como agente de la agencia y un
          código. Haz clic en «Aprobar» solo si el código coincide con el de la
          página de autorización; si no lo reconoces, «Rechazar».
        </li>
        <li>
          El aviso dice «Conexión aprobada». La página de autorización sigue
          sola y vuelve a Claude. El bloque dice «Conectado como agente de» la
          agencia, con el programa, quién la autorizó, cuándo y su «Último uso».
        </li>
      </ol>

      <h2>Conectar desde el directorio de Claude</h2>
      <ol>
        <li>
          En Claude, abre el directorio de conectores, busca Nexus y conéctalo.
        </li>
        <li>
          Claude abre la página de autorización de Nexus, que muestra un código
          de ocho caracteres. Es válido diez minutos y se usa una sola vez.
        </li>
        <li>
          En Nexus, ve a <strong>Agente → Configuración</strong>, escribe el
          código en «¿El asistente muestra un código de ocho caracteres?» y haz
          clic en «Conectar». Escribirlo une la conexión a esta agencia y la
          aprueba.
        </li>
        <li>La página de autorización sigue sola y vuelve a Claude.</li>
      </ol>

      <h2>Con ChatGPT u otro asistente compatible con MCP</h2>
      <p>
        Nexus recomienda Claude. El conector también funciona con ChatGPT y con
        otros asistentes compatibles con MCP que se autentican con OAuth. La
        dirección del conector es la misma; lo que cambia es dónde se pega. En
        Agente → Configuración, elige la pestaña de tu asistente:
      </p>
      <ul>
        <li>
          <strong>ChatGPT:</strong> «Copiar dirección» y «Abrir ChatGPT». En
          ChatGPT, abre Plugins, haz clic en «+» y elige «Add custom MCP
          server». Pega la dirección del conector y elige OAuth como
          autenticación.
        </li>
        <li>
          <strong>Otro cliente MCP:</strong> «Copiar dirección». En tu asistente
          o en tu orquestador, añade un servidor MCP remoto con la dirección del
          conector y autenticación OAuth.
        </li>
      </ul>
      <p>
        Al conectarlo, la conexión se aprueba como con Claude: con la «Solicitud
        de conexión» o escribiendo el código de ocho caracteres.
      </p>

      <h2>Que Nexus avise al agente</h2>
      <p>
        En «Activación del agente», Nexus guarda el disparador del asistente:
        una rutina de Claude, un agente de ChatGPT o, para otro asistente, una
        dirección https que recibe un webhook firmado. Con él, Nexus activa al
        agente cuando alguien le delega una tarea, le deja una nota o responde
        una duda suya, dentro del «Horario de atención» que fija la agencia.
        Para el agente de ChatGPT, la pantalla indica que hace falta ChatGPT
        Business o Enterprise. Los pasos están en el manual,{" "}
        <Link href="/manual/agente/conectar-el-asistente">
          Conectar el asistente de la agencia
        </Link>
        .
      </p>

      <h2>Tu propio asistente</h2>
      <p>
        Quien tiene el permiso «Conectar su propio asistente» puede conectar su
        Claude, su ChatGPT u otro cliente MCP en{" "}
        <strong>Agente → Mi asistente</strong>, con su propio conector, «Nexus -
        Agente personal».
      </p>
      <ol>
        <li>
          En «1. Añade tu conector al asistente», elige la pestaña de tu
          asistente y añade el conector como arriba.
        </li>
        <li>
          Al conectarlo, el asistente abre una página de Nexus con un código.
          Escríbelo en «2. Escribe el código de la página de Nexus» y haz clic
          en «Conectar». Escribirlo aprueba tu propia conexión.
        </li>
      </ol>
      <p>
        Tu asistente ve y hace lo mismo que tú, y lo que registra queda por
        confirmar. No es el agente de la agencia: no ejecuta sus rutinas ni
        atiende las tareas delegadas. Quien tiene «Conectar el agente y definir
        su horario» no ve «Mi asistente»: su asistente es el agente que
        configura. Sin el permiso, «Pedir ayuda al agente» ofrece «Nueva tarea»,
        para delegar el trabajo al agente de la agencia. El detalle está en{" "}
        <Link href="/manual/agente/mi-asistente">
          Conectar tu propio asistente
        </Link>
        .
      </p>

      <h2>Qué hace el agente</h2>
      <p>
        El agente es un miembro más del equipo, con el nombre «Agente» y
        permisos propios. Trabaja con lo que la agencia tiene en Nexus y con los
        flujos que la agencia le da: leer los correos vinculados, registrar
        documentos, actualizar la cartera, atender tareas, redactar correos y
        cotizar cumplimiento, entre otros.
      </p>
      <ul>
        <li>
          <strong>Nexus verifica lo que registra.</strong> Lo que el agente
          registra lo verifica Nexus y, según la supervisión que elige el
          propietario o un administrador en Agente → Supervisión («Revisar
          todo», la de entrada; «Revisar excepciones»; «Revisar solo lo
          bloqueado»), una persona confirma todo o solo lo que Nexus no pudo
          verificar. La verificación es de clientes y pólizas; lo demás que
          propone, como aseguradoras, ramos o criterios, espera siempre en
          Agente → «Por confirmar». Si corrige un registro ya confirmado, el
          cambio queda marcado hasta que una persona lo da por revisado.
        </li>
        <li>
          <strong>Algunos ajustes los aplica por su cuenta.</strong> En estas
          áreas de la configuración de la agencia aplica el cambio sin
          preguntar, con lo que puede quien lo conectó o le pidió el trabajo:
          cancelar una póliza, la presentación de la agencia, publicar un flujo,
          las referencias, los plazos y la renovación, la organización de
          documentos, los criterios y el reparto, y las reglas de cumplimiento.
          Cada cambio queda en Agente → Permisos → «Historial de solicitudes»,
          desde donde se deshace durante siete días.
        </li>
        <li>
          <strong>Lo demás lo pregunta.</strong> Eliminar, invitar, los datos de
          una persona y los accesos preguntan siempre; los roles preguntan,
          salvo que alguien le haya dado un permiso por un tiempo. El
          propietario o un administrador puede marcar en «Qué pregunta siempre»
          cualquier área en la que pregunte. Lo que pide llega en la ventana «El
          agente pide permiso», donde una persona lo aprueba, lo devuelve para
          corregir o lo descarta. Los detalles, en{" "}
          <Link href="/manual/agente/permisos-y-solicitudes">el manual</Link>.
        </li>
        <li>
          <strong>No hace lo que es de una persona:</strong> enviar un correo
          (lo deja por enviar, y lo envía quien tiene el permiso «Enviar los
          correos que redacta el agente»), abrir la bóveda de accesos o
          confirmar lo que él mismo propuso.
        </li>
        <li>
          <strong>Trabaja con los permisos de quien se lo pide.</strong> Cuando
          trabaja para alguien, por ejemplo en una tarea que esa persona le
          delegó, no ve ni cambia lo que ella no podría.
        </li>
        <li>
          <strong>Todo queda en la bitácora</strong>, con el agente como autor
          y, si actuó por encargo, a petición de quién.
        </li>
      </ul>
      <p>
        Cómo trabaja el agente, pantalla por pantalla, está en el manual:{" "}
        <Link href="/manual/agente/como-trabaja-el-agente">
          Cómo trabaja el agente
        </Link>{" "}
        y{" "}
        <Link href="/manual/agente/verificacion-y-supervision">
          Verificación y supervisión
        </Link>
        .
      </p>

      <h2>Desconectar</h2>
      <ul>
        <li>
          <strong>El agente de la agencia:</strong> en Agente → Configuración,
          en el bloque de la conexión, «Cortar la conexión». El asistente deja
          de trabajar como agente de la agencia, y con él sus rutinas. Para
          volver a conectarlo hay que aprobar una conexión nueva.
        </li>
        <li>
          <strong>Tu propio asistente:</strong> en Agente → Mi asistente, «Tus
          conexiones» enseña cada programa conectado; «Cortar la conexión» hace
          que deje de entrar en Nexus de inmediato. Si dejas de tener el
          permiso, tus conexiones dejan de valer solas.
        </li>
        <li>
          <strong>El de otra persona:</strong> quien lleva al agente lo ve en
          Agente → Configuración, en «Asistente de cada persona», y puede
          cortarlo con «Cortar la conexión».
        </li>
      </ul>
      <p>
        Quitar el conector en el asistente no corta la conexión en Nexus:
        córtala allí también.
      </p>

      <h2>Tus datos</h2>
      <p>
        Lo que el agente lee por el conector llega al proveedor de tu asistente,
        Anthropic si es Claude u OpenAI si es ChatGPT, y se trata según tu
        cuenta y tus condiciones con él. El detalle está en la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>

      <h2>Ayuda</h2>
      <p>
        Escribe a soporte: <SupportEmailLink subject="Conector de Claude" />.
      </p>
    </DocumentPage>
  );
}
