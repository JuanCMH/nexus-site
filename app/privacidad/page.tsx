import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage, DocumentTable } from "@/components/site/document-page";
import { SupportEmailLink } from "@/components/site/support-email-link";
import { CONTROLLER, formatLegalDate, PRIVACY_POLICY } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos trata Nexus, para qué, con quién los comparte, cuánto los conserva y cómo pedir que se consulten, corrijan o borren.",
  ...pageMetadata("/privacidad", {
    locale: "es_CO",
    es: "/privacidad",
    en: "/en/privacy",
  }),
};

// Los hechos salen del código de `nexus-app` y del Acuerdo de uso; el texto
// lo aprueba el dueño (docs/plans/2026-10-21-privacidad-y-conector-design.md).
// La traducción está en app/en/privacy/page.tsx: un cambio aquí va allá.
const PROVIDERS = [
  [
    "Convex",
    "La base de datos, los archivos y el servidor de Nexus y del conector",
    "Todos los anteriores",
  ],
  [
    "Vercel",
    "Sirve la versión web y este sitio",
    "Los datos técnicos de cada visita; los datos de la agencia van directo a Convex",
  ],
  [
    "Resend",
    "Envía los correos de la cuenta y los estados de cuenta",
    "El destinatario y el contenido de esos correos",
  ],
  [
    "Anthropic",
    "Recibe los avisos a la rutina de la agencia",
    "Solo identificadores y lo que pasó",
  ],
  [
    "GitHub",
    "Distribuye las actualizaciones de la aplicación de escritorio",
    "Ninguno de la agencia",
  ],
] as const;

export default function PrivacyPage() {
  return (
    <DocumentPage
      lang="es"
      title="Política de privacidad"
      lead="Qué datos trata Nexus, para qué, con quién los comparte, cuánto los conserva y cómo pedir que se consulten, corrijan o borren."
      meta={`Versión ${PRIVACY_POLICY.version} · vigente desde el ${formatLegalDate(PRIVACY_POLICY.effectiveDate, "es-CO")}`}
      translation={{
        href: "/en/privacy",
        label: "Read in English",
        hrefLang: "en",
      }}
    >
      <h2>Quién es el responsable</h2>
      <p>
        Nexus es de {CONTROLLER.name} («MAIN»), NIT {CONTROLLER.nit}, con
        domicilio en la {CONTROLLER.address}. El contacto para cualquier asunto
        de esta política es <SupportEmailLink subject="Privacidad" />.
      </p>
      <p>
        Esta política se rige por la ley colombiana, en particular por la Ley
        1581 de 2012 de protección de datos personales.
      </p>

      <h2>A qué se aplica</h2>
      <p>
        A Nexus en todas sus formas: la aplicación de escritorio, la versión web
        y el conector por el que el agente de una agencia entra a Nexus. También
        a este sitio.
      </p>
      <p>Nexus trata dos clases de datos, con papeles distintos:</p>
      <ul>
        <li>
          <strong>Los de las personas que usan Nexus.</strong> MAIN es el
          responsable.
        </li>
        <li>
          <strong>Los que una agencia registra sobre sus clientes.</strong> La
          agencia es la responsable: obtiene la autorización de sus clientes y
          atiende sus reclamos. MAIN es el encargado y los trata solo para
          prestar el servicio, como establece el Acuerdo de uso que acepta cada
          agencia.
        </li>
      </ul>

      <h2>Qué datos de las personas que usan Nexus</h2>
      <ul>
        <li>
          <strong>Cuenta:</strong> nombre, correo, contraseña y, si la pone,
          foto de perfil. La contraseña no se guarda: se guarda solo su huella,
          un valor que se calcula a partir de ella y del que no se puede obtener
          la contraseña. Si la persona activa la verificación en dos pasos, se
          guardan su secreto y las huellas de los códigos de recuperación.
        </li>
        <li>
          <strong>En cada agencia:</strong> el rol, los permisos adicionales y,
          si la agencia los registra, el cargo y el teléfono de trabajo.
        </li>
        <li>
          <strong>Seguridad:</strong> los computadores y navegadores aprobados
          para abrir la bóveda de accesos, donde la agencia guarda sus claves
          (su nombre y cuándo se usaron) y sus sesiones; los códigos de
          recuperación de contraseña y de verificación del correo, que caducan.
        </li>
        <li>
          <strong>Actividad:</strong> la bitácora de la agencia (quién creó,
          cambió o eliminó qué, y cuándo) y la aceptación del Acuerdo de uso
          (quién, cuándo y qué versión).
        </li>
        <li>
          <strong>Diagnóstico:</strong> los errores de la aplicación (el mensaje
          técnico, la pantalla, la versión, el sistema y la persona en la que
          ocurrieron) y los fallos de las herramientas del agente.
        </li>
        <li>
          <strong>Ideas y problemas</strong> que la persona envía desde la
          aplicación, con la pantalla y la versión.
        </li>
        <li>
          <strong>Facturación:</strong> el plan de la agencia, su uso, sus
          estados de cuenta en dólares y en pesos, y los datos legales de la
          agencia que aparecen en ellos.
        </li>
      </ul>

      <h2>Qué datos registra una agencia</h2>
      <ul>
        <li>
          <strong>Su cartera:</strong> clientes y pólizas, con los campos que
          define la agencia en sus plantillas (identificación, contacto, bienes
          asegurados, valores, entre otros) y la evidencia de cada dato (la
          cita, la página y el documento de donde salió).
        </li>
        <li>
          <strong>Su trabajo:</strong> documentos y sus archivos, tareas y su
          historial, cotizaciones de cumplimiento, correos redactados y por
          enviar, modelos de correo, referencias, flujos y criterios.
        </li>
        <li>
          <strong>Sus correos vinculados:</strong> Nexus lee los correos que la
          agencia vincula, en los servidores de correo que ella usa, y envía un
          correo solo cuando una persona lo decide. La clave de cada correo
          vinculado se guarda cifrada.
        </li>
        <li>
          <strong>Su bóveda:</strong> las claves se cifran en el computador de
          quien las guarda antes de enviarse. Nexus guarda solo el texto cifrado
          y no puede leerlo ni recuperarlo.
        </li>
      </ul>

      <h2>Para qué se usan</h2>
      <p>
        Para prestar el servicio, proteger las cuentas, dar soporte, corregir
        fallos y emitir los estados de cuenta. Nexus envía por correo los
        códigos de recuperación de contraseña y de verificación del correo, y
        los estados de cuenta.
      </p>
      <p>
        MAIN no vende, cede ni comparte los datos de una agencia, y no los
        consulta salvo para prestar el servicio, a solicitud de la agencia o
        para corregir un fallo. Nexus no usa analítica de terceros ni
        publicidad.
      </p>

      <h2>El agente: Claude, con la cuenta de la agencia</h2>
      <p>
        Nexus no trae inteligencia artificial. Cada agencia puede conectar{" "}
        <strong>su propia cuenta de Claude</strong>, de Anthropic, por el
        conector de Nexus.
      </p>
      <ul>
        <li>
          Lo que el agente lee por el conector (clientes, pólizas, correos,
          documentos) llega a Claude por decisión de la agencia y se trata según
          la cuenta y las condiciones que la agencia tiene con Anthropic. La
          agencia elige qué conectar y puede cortar la conexión en Nexus cuando
          quiera.
        </li>
        <li>
          La conexión puede ver y hacer lo mismo que la persona que la aprobó.
        </li>
        <li>
          Para mantener la conexión, Nexus guarda la huella de las credenciales
          de acceso y de renovación, no las credenciales, el nombre del programa
          conectado, quién la aprobó y cuándo se usó.
        </li>
        <li>
          Los archivos que el agente lee o sube viajan por enlaces que caducan a
          los treinta minutos.
        </li>
        <li>
          Si la agencia guarda un disparador para avisar a su rutina de Claude,
          Nexus le envía avisos que llevan solo identificadores y lo que pasó,
          nunca datos de clientes. La clave del disparador se guarda cifrada.
        </li>
      </ul>
      <p>
        Cómo se conecta y qué puede hacer el agente:{" "}
        <Link href="/agente">Conectar Claude con Nexus</Link>.
      </p>

      <h2>Con quién se comparten</h2>
      <p>
        Con los proveedores que hacen funcionar Nexus, y solo con lo que cada
        uno necesita:
      </p>
      <DocumentTable
        caption="Proveedores de Nexus"
        head={["Proveedor", "Para qué", "Qué datos"]}
        rows={PROVIDERS}
      />
      <p>
        Lo que el agente lee por el conector va a la cuenta de Claude de la
        agencia, como se explica arriba.
      </p>

      <h2>Dónde se guardan</h2>
      <p>
        En los servidores de Convex, en Estados Unidos. La agencia autoriza ese
        almacenamiento fuera de Colombia en el Acuerdo de uso. La aplicación de
        escritorio guarda además en el computador sus ajustes, la sesión, los
        registros de las actualizaciones y, en el computador del propietario, la
        carpeta de documentos de la agencia, que Nexus mantiene como copia.
      </p>

      <h2>Cómo se protegen</h2>
      <p>
        Las comunicaciones van cifradas y cada persona entra con su usuario y
        sus permisos. Las contraseñas se guardan como huella, las claves de los
        correos vinculados, cifradas, y la bóveda se cifra en el computador
        antes de salir. Si ocurre un incidente de seguridad que afecte los datos
        de una agencia, MAIN lo informa al propietario de la agencia dentro de
        las 72 horas siguientes a conocerlo.
      </p>

      <h2>Cuánto se conservan</h2>
      <ul>
        <li>
          Mientras la agencia use Nexus. Quien tiene permiso borra los registros
          desde la aplicación; lo que se borra en Nexus sale también de la
          carpeta de documentos.
        </li>
        <li>
          Durante una suspensión o tras la terminación, treinta días calendario
          para exportarlos. Después se eliminan.
        </li>
        <li>
          Los registros de errores y de fallos de las herramientas, treinta
          días.
        </li>
        <li>
          Los enlaces de archivos del agente, treinta minutos. Los códigos y las
          solicitudes de conexión, diez minutos.
        </li>
      </ul>

      <h2>Este sitio</h2>
      <p>
        Este sitio no usa cookies, analítica ni servicios de terceros. Guarda en
        el navegador solo el tema elegido (claro u oscuro). Lo sirve Vercel.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Conforme a la Ley 1581 de 2012, puedes conocer, actualizar y corregir
        tus datos; pedir que se borren o revocar tu autorización cuando no haya
        un deber legal o contractual de conservarlos; pedir prueba de la
        autorización; saber cómo se han usado; y presentar una queja ante la
        Superintendencia de Industria y Comercio.
      </p>
      <ul>
        <li>
          <strong>Si usas Nexus:</strong> escribe a{" "}
          <SupportEmailLink subject="Privacidad" /> desde el correo de tu
          cuenta. Las consultas se responden en un máximo de diez días hábiles y
          los reclamos en quince, como fija la ley. Tu nombre y tu foto se
          cambian desde la aplicación, en «Tu perfil».
        </li>
        <li>
          <strong>Si eres cliente de una agencia:</strong> tus datos los decide
          la agencia. Dirígete a ella.
        </li>
      </ul>

      <h2>Cambios</h2>
      <p>
        Si esta política cambia, la nueva versión se publica en esta página con
        su número y su fecha.
      </p>
    </DocumentPage>
  );
}
