import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "las-solicitudes", title: "Las solicitudes" },
  { id: "aprobar-o-devolver", title: "Aprobar o devolver una solicitud" },
  { id: "encargos", title: "Cerrar tareas y ligar pólizas" },
  { id: "un-permiso-por-un-tiempo", title: "Un permiso por un tiempo" },
  { id: "que-pregunta-siempre", title: "Qué pregunta siempre" },
  { id: "historial-y-deshacer", title: "El historial y deshacer" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="las-solicitudes" title="Las solicitudes">
        <p>
          Lo que el agente no puede hacer sin preguntar lo pide en una
          solicitud: crear o cambiar un rol, invitar a una persona, cambiar sus
          datos o su foto, preparar un acceso, eliminar una clase o una carpeta
          de documentos, cerrar tareas que no dejaron rastro, ligar una póliza a
          su principal, y lo de las áreas que la agencia marcó. Lo que pide
          seguido entra en la misma solicitud, como una lista de cambios. No se
          aplica nada hasta que alguien con el permiso lo aprueba.
        </p>
        <p>
          La solicitud dice de dónde salió: «De la tarea delegada «…»», «De una
          ejecución del flujo «…»», «De una conversación con el agente de la
          agencia» o «De una conversación con el asistente de una persona». Si
          son los datos de una persona, los aprueba esa persona («Son tus datos:
          los apruebas tú»). Si solo cierra tareas de una persona, queda a cargo
          de esa persona. Una solicitud que nadie decide en siete días caduca.
        </p>
      </ArticleSection>

      <ArticleSection
        id="aprobar-o-devolver"
        title="Aprobar o devolver una solicitud"
      >
        <Video id="agente/permisos-y-solicitudes" />
        <p>
          Cuando una solicitud nueva espera por ti, se abre sola la ventana «El
          agente pide permiso», en cualquier pantalla de la agencia. Sale una
          vez por solicitud, y otra si el agente le añade algo. También está en
          Agente › Por confirmar › «Solicitudes» y en «Por resolver» de{" "}
          <ArticleLink to="inicio/mi-dia" />.
        </p>
        <Steps>
          <Step title="Lee los cambios">
            <p>
              «Cambios» lista lo que pide, cada uno con su casilla. Desmarca lo
              que no quieras aplicar. Un cambio que tus permisos no alcanzan a
              aplicar lo dice; lo aplica quien tenga el permiso.
            </p>
          </Step>
          <Step title="Decide">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                «Aprobar 1 cambio» o «Aprobar N cambios» aplica lo marcado, con
                tus permisos.
              </li>
              <li>
                «Corregir…» abre «Pedir una corrección»: escribe en «Qué tiene
                que corregir» y haz clic en «Devolver al agente». El agente lee
                tu comentario y corrige esa misma solicitud; mientras tanto no
                se aplica nada.
              </li>
              <li>
                «Más tarde» cierra la ventana; la solicitud sigue esperando.
              </li>
              <li>
                «Descartar» no aplica nada de lo que queda por decidir. Si sigue
                haciendo falta, se le puede pedir otra vez al agente.
              </li>
            </ul>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Algunos cambios se hacen en tu computador o navegador al aprobarlos:
            la clave de un acceso preparado, el código de una invitación («Crear
            invitación») y una foto de perfil («Poner esta foto»). «No hacer»
            deja ese cambio fuera.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="encargos" title="Cerrar tareas y ligar pólizas">
        <p>
          Dos clases de cambio preguntan siempre: ningún permiso por un tiempo
          ni la puesta en marcha los aplica sin una persona.
        </p>
        <ManualTable
          head={["Cambio", "Cómo se lee", "Quién lo aprueba"]}
          rows={[
            [
              "Cerrar una tarea que no dejó rastro",
              "«Cerrar «Renovación SOAT · Transportes del Norte» como «Hecha»» (o «No se hizo»), con la nota de cierre debajo: qué buscó el agente, dónde y desde cuándo no hay rastro.",
              "El responsable de las tareas: el agente hace una solicitud por responsable, y queda a su cargo. La tarea se cierra a su nombre.",
            ],
            [
              "Ligar una póliza a su principal",
              "«La póliza RCE-1024 deriva de CU-3381», con «Del mismo cliente, con el mismo inicio de vigencia. Deja de pedir renovación».",
              "Quien puede editar las pólizas.",
            ],
          ]}
        />
        <p>
          En una solicitud de cierre, desmarca las tareas que siguen vivas antes
          de aprobar. Una tarea que quitas de la solicitud, o que descartas,
          queda en curso, y el agente no vuelve a proponer cerrarla en 30 días.
          El cierre de tareas sale del flujo «Cerrar tareas» (
          <ArticleLink to="tareas/cerrar-una-tarea" />
          ).
        </p>
        {/* CAPTURA agente/encargo-cerrar-tareas: la ventana «El agente pide permiso» de una solicitud del flujo «Cerrar tareas», con dos o tres cambios «Cerrar «…» como «Hecha»» y sus notas | La ventana «El agente pide permiso» con tareas por cerrar: cada cambio con su nota de cierre y su casilla. */}
      </ArticleSection>

      <ArticleSection
        id="un-permiso-por-un-tiempo"
        title="Un permiso por un tiempo"
      >
        <p>
          Al aprobar, la casilla «Que el agente haga lo mismo sin preguntar» le
          deja un permiso para las mismas áreas. Se aplica con tus permisos y se
          revoca en Agente › Permisos. Lo delicado, eliminar, invitar, los datos
          de una persona, cerrar tareas sin prueba y ligar pólizas a su
          principal preguntan siempre.
        </p>
        <ManualTable
          head={["Duración", "Hasta cuándo"]}
          rows={[
            ["Durante 2 horas", "Dos horas desde que lo das."],
            ["El resto del día", "Hasta la medianoche, hora de Colombia."],
            [
              "Mientras la tarea esté abierta",
              "Para lo que haga en esa tarea, hasta que se cierre.",
            ],
            [
              "Siempre para este flujo, 30 días",
              "Para lo que haga en ese flujo, durante 30 días.",
            ],
          ]}
        />
        <p>
          «Permisos vigentes» lista los que siguen en pie, con quién los dio;
          «Revocar» apaga uno en el acto: desde ya, el agente vuelve a pedir
          permiso para eso, y lo que ya aplicó no cambia. Una tarea con marca de
          alcance también aparece ahí mientras esté abierta.
        </p>
        <p>
          Para configurar la agencia con el agente, «Puesta en marcha» ofrece
          «Dar 48 horas»: durante ese tiempo aplica sin preguntar los roles sin
          permisos delicados.
        </p>
      </ArticleSection>

      <ArticleSection id="que-pregunta-siempre" title="Qué pregunta siempre">
        <p>
          En las demás áreas, el agente aplica el cambio por su cuenta, con lo
          que puede quien lo conectó o le pidió el trabajo, y lo deja en el
          historial. «Qué pregunta siempre», en Agente › Permisos, dice qué hace
          en cada una: «Lo aplica por su cuenta», «Pregunta siempre» o, en los
          roles, «Pregunta, o admite un permiso por un tiempo».
        </p>
        <ManualTable
          head={["Área", "Qué cubre"]}
          rows={[
            [
              "Pólizas",
              "Cancelar una póliza, con su motivo y, si los hay, la fecha de cancelación y la devolución.",
            ],
            [
              "Presentación de la agencia",
              "Variantes del logo, presentación y firmas de los correos, modelos de correo.",
            ],
            ["Flujos", "Publicar el borrador de un flujo y sus categorías."],
            [
              "Referencias",
              "Corregir la ficha de una referencia o reemplazar su archivo.",
            ],
            [
              "Plazos y renovación",
              "El plazo de cada tipo de tarea y la renovación automática.",
            ],
            [
              "Roles",
              "Crear y cambiar roles y asignarlos, sin permisos delicados.",
            ],
            [
              "Organización de documentos",
              "Eliminar o fusionar clases y carpetas, y el orden de la carpeta. Eliminar pregunta siempre.",
            ],
            [
              "Criterios y reparto",
              "Reestructurar, clasificar por alcance y archivar criterios y reglas, y sus temas.",
            ],
            [
              "Reglas de cumplimiento",
              "Las reglas de cálculo de las cotizaciones de cumplimiento.",
            ],
          ]}
        />
        <p>
          El propietario y los administradores cambian la lista con «Editar»: en
          las áreas marcadas, el agente pide permiso cada vez, aunque alguien le
          haya dado un permiso por un tiempo o la puesta en marcha.
        </p>
        <Screenshot
          id="agente/que-pregunta-siempre"
          caption="La ventana «Qué pregunta siempre», con una casilla por área: Pólizas, Presentación de la agencia, Flujos, Referencias, Plazos y renovación, Roles y las demás."
        />
      </ArticleSection>

      <ArticleSection id="historial-y-deshacer" title="El historial y deshacer">
        <p>
          «Historial de solicitudes» lista lo que el agente pidió, cómo quedó y
          quién lo decidió. Cada fila dice si se aplicó por su cuenta, por un
          permiso o la decidió una persona, y cuántos de sus cambios se
          aplicaron.
        </p>
        <ManualTable
          head={["Estado", "Qué significa"]}
          rows={[
            ["Espera", "Nadie la ha decidido."],
            ["En parte", "Espera, pero ya tiene cambios aplicados."],
            ["Aplicada", "Se aplicó."],
            ["Descartada", "Una persona la descartó."],
            ["Caducó", "Nadie la decidió a tiempo."],
          ]}
        />
        <p>
          Abre una solicitud para ver sus cambios. Uno aplicado dice hasta
          cuándo se puede deshacer, y «Deshacer» lo vuelve a como estaba antes,
          con tus permisos; queda en la bitácora. Lo aplicado se deshace durante
          siete días, si nadie lo cambió después.
        </p>
        <Screenshot
          id="agente/permisos"
          caption="Agente › Permisos: «Permisos vigentes» con «Puesta en marcha» y «Dar 48 horas», «Qué pregunta siempre» con el estado de cada área, e «Historial de solicitudes»."
        />
      </ArticleSection>
    </>
  );
}
