import Link from "next/link";
import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-agente", title: "El agente de la agencia" },
  { id: "propone", title: "Propone y una persona confirma" },
  { id: "sin-preguntar", title: "Lo que aplica sin preguntar" },
  { id: "lo-que-no-hace", title: "Lo que no hace" },
  { id: "otras-herramientas", title: "Lo que llega por otras vías" },
  { id: "a-peticion-de", title: "A petición de quién" },
  { id: "el-menu", title: "El menú Agente" },
];

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function Article() {
  return (
    <>
      <ArticleSection id="el-agente" title="El agente de la agencia">
        <p>
          Nexus no trae una IA por dentro. La agencia conecta su propio
          asistente —Claude, ChatGPT u otro cliente MCP— y ese asistente entra a
          Nexus como el agente de la agencia. Hay uno por agencia y una sola
          conexión para él. Cómo se conecta está en{" "}
          <ArticleLink to="agente/conectar-el-asistente" />.
        </p>
        <p>
          El agente es un miembro más del equipo, con el nombre «Agente» y
          permisos propios que la agencia no cambia. Con ellos consulta lo que
          hay, registra y actualiza clientes y pólizas, guarda documentos, crea
          tareas y las reparte, redacta correos y prepara cotizaciones de
          cumplimiento. Cómo hace cada trabajo lo dicen los flujos de{" "}
          <ArticleLink to="directrices/flujos">Directrices</ArticleLink>.
        </p>
        <p>
          Nexus se puede usar sin agente: el equipo trabaja en las mismas
          pantallas.
        </p>
      </ArticleSection>

      <ArticleSection id="propone" title="Propone y una persona confirma">
        <p>
          Lo que el agente propone —clientes, pólizas, contactos, aseguradoras,
          ramos, roles, criterios, reglas de reparto, reglas de correo, cambios
          en la configuración de la agencia— queda en Agente › «Por confirmar»
          hasta que una persona lo confirma o lo descarta. Lo propuesto no
          cuenta en las cifras de la cartera hasta que se confirma. Las tareas
          recurrentes y las carpetas de origen que propone se confirman en su
          propia pantalla (
          <ArticleLink to="agente/por-confirmar" />
          ).
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Cada dato que registra puede llevar su evidencia: la cita, la página
            y el documento de donde salió (
            <ArticleLink to="agente/por-confirmar" />
            ).
          </li>
          <li>
            Si corrige un cliente o una póliza ya confirmados, el registro sigue
            confirmado y queda marcado con lo que cambió hasta que una persona
            lo da por revisado.
          </li>
          <li>
            Nexus verifica cada cliente y cada póliza que registra el agente.
            Por defecto, todo lo que registra espera a una persona; el
            propietario o un administrador puede dejar que lo verificado entre
            confirmado (
            <ArticleLink to="agente/verificacion-y-supervision" />
            ).
          </li>
          <li>
            Lo que no sabe decidir lo deja como una duda para una persona (
            <ArticleLink to="agente/dudas-del-agente" />
            ).
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="sin-preguntar" title="Lo que aplica sin preguntar">
        <p>
          Algunos cambios de la configuración de la agencia no son registros que
          se confirman, sino cambios: el plazo de un tipo de tarea, publicar el
          borrador de un flujo, la firma de los correos, cancelar una póliza con
          su motivo. En esas áreas, Agente › Permisos dice «Lo aplica por su
          cuenta»: el agente hace el cambio con lo que puede quien lo conectó o
          le pidió el trabajo, y lo deja en el «Historial de solicitudes», desde
          donde se deshace durante siete días.
        </p>
        <p>
          En los roles pregunta siempre, salvo que alguien le haya dado un
          permiso por un tiempo. Eliminar, invitar, los datos de una persona y
          los accesos preguntan siempre. Quien administra la agencia puede
          marcar más áreas en las que pregunta. El detalle está en{" "}
          <ArticleLink to="agente/permisos-y-solicitudes" />.
        </p>
      </ArticleSection>

      <ArticleSection id="lo-que-no-hace" title="Lo que no hace">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">No envía correos.</strong> Los
            redacta y quedan por enviar hasta que una persona con el permiso
            «Enviar los correos que redacta el agente» los revisa y los envía (
            <ArticleLink to="correos/revisar-y-enviar" />
            ).
          </li>
          <li>
            <strong className="font-medium">
              No confirma lo que él mismo propuso.
            </strong>{" "}
            Confirmar y descartar son de una persona.
          </li>
          <li>
            <strong className="font-medium">No abre la bóveda.</strong> No lee
            ni guarda claves. Puede preparar un acceso sin clave, que una
            persona completa y guarda (
            <ArticleLink to="accesos/accesos-del-agente" />
            ).
          </li>
          <li>
            <strong className="font-medium">No elimina por su cuenta.</strong>{" "}
            Eliminar lo pide siempre en una solicitud.
          </li>
          <li>
            <strong className="font-medium">
              No invita personas ni cambia sus datos.
            </strong>{" "}
            Lo pide, y lo aprueba quien corresponde.
          </li>
          <li>
            <strong className="font-medium">
              No cierra por su cuenta una tarea sin prueba.
            </strong>{" "}
            Si una tarea no dejó rastro en el correo, propone cerrarla en una
            solicitud que aprueba su responsable. Ligar una póliza a su
            principal cuando solo lo deduce por las fechas también lo pide (
            <ArticleLink to="agente/permisos-y-solicitudes" />
            ).
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="otras-herramientas"
        title="Lo que llega por otras vías"
      >
        <p>
          El agente trabaja primero con Nexus. Si algo no se puede hacer en
          Nexus, usa las demás herramientas de su asistente: una póliza que le
          envían por el chat, un archivo de Drive u otro conector. Lo que debe
          quedar en la agencia lo registra después en Nexus, con su procedencia.
          En la ficha del registro, la línea de origen lo dice: «Se recibió por
          Google Drive: poliza-123.pdf», con la fecha.
        </p>
        <p>
          Si una parte del trabajo no se puede hacer, el agente termina lo demás
          y deja en el resumen de la ejecución qué faltó y por qué (
          <ArticleLink to="agente/ejecuciones" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="a-peticion-de" title="A petición de quién">
        <p>
          Cuando el agente trabaja para alguien —por ejemplo, en una tarea que
          esa persona le delegó—, lo que hace vale lo que puede esa persona: no
          ve ni cambia lo que ella no podría. Si le pide algo para lo que no
          tiene permiso, el intento aparece en «Fallos recientes» como «Sin
          permiso» (<ArticleLink to="agente/ejecuciones" />
          ).
        </p>
        <p>
          Todo lo que hace queda en la bitácora, con el agente como autor y, si
          actuó por encargo, a petición de quién (
          <ArticleLink to="configuracion/bitacora" />
          ). Delegar una tarea se explica en{" "}
          <ArticleLink to="tareas/delegar-al-agente" />.
        </p>
      </ArticleSection>

      <ArticleSection id="el-menu" title="El menú Agente">
        <p>
          Agente, en el menú principal, reúne lo que el agente deja para las
          personas. Cada sección se ve según el rol:
        </p>
        <ManualTable
          head={["Sección", "Qué tiene", "Quién la ve"]}
          rows={[
            [
              "Resumen",
              "Lo que te toca confirmar y resolver, cómo va la lectura de cada correo vinculado y la actividad de los últimos 7 días.",
              "Quien tiene «Ver el agente»",
            ],
            [
              "Por confirmar",
              "Lo que propuso y espera a una persona.",
              "Quien tiene «Ver el agente»",
            ],
            [
              "Verificación",
              "Lo que la verificación de Nexus dejó para una persona, agrupado por causa.",
              "Quien ve los clientes o las pólizas",
            ],
            ["Dudas", "Lo que no supo decidir.", "Quien tiene «Ver el agente»"],
            [
              "Permisos",
              "Los permisos vigentes, lo que pregunta siempre y el historial de solicitudes.",
              "Quien tiene «Ver el agente»",
            ],
            [
              "Ejecuciones",
              "Cada trabajo del agente y sus fallos recientes.",
              "Quien tiene «Conectar el agente y definir su horario»",
            ],
            [
              "Mi asistente",
              "Tu propio asistente conectado a Nexus.",
              "Quien no tiene «Conectar el agente y definir su horario»",
            ],
            [
              "Ajustes › Supervisión",
              "Cuánto de lo que registra el agente revisa una persona.",
              "Quien tiene «Conectar el agente y definir su horario»; lo cambian el propietario y los administradores",
            ],
            [
              "Ajustes › Configuración",
              "La puesta en marcha, la conexión, las rutinas y la memoria del agente.",
              "Quien tiene «Conectar el agente y definir su horario»",
            ],
          ]}
        />
        <Screenshot
          id="agente/resumen"
          caption="Agente › Resumen: «Por confirmar a tu cargo», «Dudas a tu cargo», «Correos al día» y «Última ejecución»; debajo, «Análisis de correos» y «Últimos 7 días»."
        />
        <Callout type="note">
          <p>
            Si llevas al agente y la puesta en marcha tiene pasos por hacer, al
            abrir Agente entras en «Configuración». Con todos hechos u omitidos,
            entras en «Resumen».
          </p>
        </Callout>
        <p>
          La guía pública del conector, con lo que el agente puede hacer y cómo
          se desconecta, está en{" "}
          <Link href="/agente" className={linkClassName}>
            Conectar Claude con Nexus
          </Link>
          .
        </p>
      </ArticleSection>
    </>
  );
}
