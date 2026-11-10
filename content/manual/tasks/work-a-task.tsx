import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-panel", title: "El panel de la tarea" },
  { id: "la-pagina", title: "La página de la tarea" },
  { id: "resultado-esperado", title: "El resultado esperado" },
  { id: "la-conversacion", title: "La conversación" },
  { id: "la-actividad", title: "La actividad" },
  { id: "pasos-y-documentos", title: "Pasos y documentos" },
  { id: "responsable", title: "El responsable" },
  { id: "en-espera", title: "Poner en espera" },
  { id: "fin-de-la-espera", title: "Cuando llega la fecha de seguimiento" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-panel" title="El panel de la tarea">
        <Video id="tareas/trabajar-una-tarea" />
        <p>
          Haz clic en una tarea de cualquier lista para abrir su panel, a la
          derecha. Arriba están el título y el tipo de trámite. En la barra del
          panel, las flechas «Tarea anterior» y «Tarea siguiente» (o las teclas
          ↑ y ↓) pasan a la tarea de al lado en la lista de la que la abriste;
          «Abrir tarea» lleva a la página de la tarea.
        </p>
        <p>
          Debajo van el estado y sus marcas, los avisos que piden atención y el
          último mensaje de la conversación, con quién lo escribió, cuándo y el
          enlace «Ver conversación». Si la tarea aún no tiene mensajes, en su
          lugar está el botón «Abrir conversación». Siguen la «Descripción» y
          los datos que la sitúan:
        </p>
        <ManualTable
          head={["Dato", "Qué dice"]}
          rows={[
            ["Responsable", "Quién la lleva, o «Sin asignar»."],
            [
              "Delegación",
              <>
                «Sin delegar» o «Al agente» (
                <ArticleLink to="tareas/delegar-al-agente" />
                ).
              </>,
            ],
            [
              "Fecha límite",
              "La fecha y cuánto falta. Si se movió, la «Fecha original» y cuántas veces se movió.",
            ],
            [
              "En espera de",
              "Solo en una tarea en espera: de quién, y la fecha de seguimiento.",
            ],
            ["Cliente y Póliza", "Enlaces a su ficha."],
            [
              "Póliza que resultó",
              "La póliza vinculada como resultado. «por confirmar» si aún está propuesta.",
            ],
            [
              "Recurrente",
              <>
                Solo en la ocurrencia de una tarea recurrente: la serie, su
                regla y, en «Anterior:», la ocurrencia anterior y cómo terminó (
                <ArticleLink to="tareas/tareas-recurrentes" />
                ).
              </>,
            ],
            [
              "Creada por",
              "Quién la creó, el canal de entrada y, si salió de un chat, «Desde un mensaje de un chat».",
            ],
            ["Cerrada por", "En una cerrada: quién la cerró y cuándo."],
          ]}
        />
        <p>
          Al final, el «Resultado esperado» y las pestañas «Pasos» y
          «Documentos». El pie tiene el trabajo de la tarea: «No se hizo»,
          «Poner en espera» y «Cerrar tarea» (
          <ArticleLink to="tareas/cerrar-una-tarea" />
          ). Editar, repetir y eliminar están en «Más acciones de la tarea», los
          tres puntos de arriba. Una tarea la cambia quien la creó, quien la
          tiene a cargo o un administrador; los demás la leen.
        </p>
        <Screenshot
          id="tareas/panel-tarea"
          caption="El panel de una emisión: «Abrir tarea» en la barra, «Por hacer» y «Urgente», «Abrir conversación», los datos, el «Resultado esperado» y las pestañas «Pasos» y «Documentos»."
        />
      </ArticleSection>

      <ArticleSection id="la-pagina" title="La página de la tarea">
        <p>
          La página de la tarea se abre con «Abrir tarea», con «Ver
          conversación» o «Abrir conversación» en el panel, y desde las
          notificaciones de mensajes. Arriba dice «Tareas» y el tipo de trámite;
          la cabecera tiene las flechas, los botones del trabajo de la tarea
          («No se hizo», «Poner en espera» o «Retomar», «Cerrar tarea», o
          «Reabrir» si está cerrada) y «Más acciones de la tarea».
        </p>
        <p>
          A la izquierda, las pestañas «Conversación» y «Actividad». A la
          derecha, en columna: la nota de cierre si la tiene, la «Descripción»,
          el «Resultado esperado», los datos, los «Pasos» y los «Documentos». En
          una ventana estrecha, esa columna pasa a una tercera pestaña, «Datos».
        </p>
        <Screenshot
          id="tareas/pagina-tarea"
          caption="La página de una tarea delegada: a la izquierda, la conversación con sus mensajes, uno de ellos «Pedido al agente», y el campo de escribir; a la derecha, la descripción, el resultado esperado y los datos."
        />
      </ArticleSection>

      <ArticleSection id="resultado-esperado" title="El resultado esperado">
        <p>
          «Resultado esperado» dice lo que la tarea tiene que dejar en Nexus, si
          «Ya está en Nexus» o «Todavía no está en Nexus», y qué hacer:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            En una emisión, registra la póliza y vincúlala en «Vincula la póliza
            que se emitió». Cuando esté confirmada, la tarea se cierra
            automáticamente.
          </li>
          <li>
            En una cotización o un certificado, adjunta el documento en
            «Documentos» y vincúlalo en «Vincula el documento que se entregó».
            Después cierra la tarea: el documento vinculado no la cierra.
          </li>
          <li>
            En una renovación, una cancelación o completar el registro, el
            cambio se hace en la ficha de la póliza: renovarla, cancelarla o
            completarle el cliente y la prima. La tarea se cierra sola al verlo.
          </li>
          <li>
            En una modificación, edita la póliza o adjúntale el anexo, y después
            cierra la tarea.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="la-conversacion" title="La conversación">
        <p>
          La pestaña «Conversación» reúne lo que se dicen sobre la tarea las
          personas y el agente, de lo más antiguo a lo más reciente, con el
          campo de escribir debajo. Cada mensaje dice quién lo escribió
          («Agente» cuando fue el agente) y la fecha y la hora exactas. Los
          cambios de estado, de responsable y de delegación salen como una línea
          entre los mensajes. Un mensaje largo entra plegado: «Leer todo» lo
          despliega.
        </p>
        <p>
          Si no hay mensajes, dice «Aún no hay mensajes». Escribe en el campo y
          haz clic en «Enviar» (o pulsa Ctrl+Enter). Un mensaje admite hasta
          20.000 caracteres; el contador de debajo dice cuántos llevas. Al
          escribir puedes:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Avisar a una persona: escribe «@» y elige su nombre entre las
            personas que ven la tarea. Le llega una notificación con el mensaje.
          </li>
          <li>
            Adjuntar documentos de la tarea: el clip («Adjuntar un documento de
            la tarea») deja marcar hasta 5, o subir uno nuevo con «Subir a la
            tarea». El mensaje los enseña debajo del texto.
          </li>
          <li>
            Pedir algo puntual al agente, con «Pedir al agente», sin delegarle
            la tarea (
            <ArticleLink to="tareas/delegar-al-agente" />
            ).
          </li>
        </ul>
        <p>
          En una tarea delegada, el campo dice «Escribe una indicación o una
          corrección para el agente», y el agente responde en la misma
          conversación. En una tarea cerrada no se escribe: «La tarea está
          cerrada. Reábrela para seguir la conversación.».
        </p>
        <p>
          Los mensajes no cierran la tarea. Para cerrarla, usa «Cerrar tarea» o
          «No se hizo» (
          <ArticleLink to="tareas/cerrar-una-tarea" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="la-actividad" title="La actividad">
        <p>
          La pestaña «Actividad» es el registro de cambios de la tarea, de lo
          más reciente a lo más antiguo: cada cambio con quién lo hizo («El
          agente» cuando fue el agente; «Nexus» cuando fue el sistema) y la
          fecha y la hora exactas. Un cambio dice qué cambió y, cuando aplica,
          de qué a qué («Cambió la fecha límite: de 17/11/2026 a 20/11/2026»).
          La actividad no se edita ni se borra.
        </p>
        <Screenshot
          id="tareas/actividad"
          caption="La pestaña «Actividad»: cada cambio con quién lo hizo y cuándo, como el cambio de la fecha límite y el del responsable."
        />
      </ArticleSection>

      <ArticleSection id="pasos-y-documentos" title="Pasos y documentos">
        <p>
          Si la tarea tiene pasos, «Pasos» dice cuántos van («1 de 3») y cada
          uno tiene su casilla. Marcar un paso no cierra la tarea, y los que
          quedan sin marcar no impiden cerrarla: el cierre los enumera.
        </p>
        <p>
          «Documentos» tiene los archivos con los que se trabaja la tarea o que
          salen de ella, hasta 100. El que es el resultado lleva la marca
          «Resultado».
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Adjuntar» sube un archivo nuevo, si tu rol tiene el permiso «Subir
            y editar documentos». Queda con el cliente o la póliza de la tarea;
            una tarea sin ninguno de los dos lo guarda en los documentos de la
            agencia.
          </li>
          <li>
            «Vincular existente» abre «Vincular un documento»: busca por el
            nombre entre los documentos de la agencia. El documento se añade a
            la tarea y sigue en su cliente y su póliza.
          </li>
          <li>
            «Quitar de la tarea» lo saca de la lista: «Se quitó de la tarea. El
            documento sigue guardado».
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="responsable" title="El responsable">
        <p>
          Con el permiso «Asignar tareas a otras personas», el responsable es un
          selector: elige otra persona o «Sin asignar» y Nexus dice «Responsable
          actualizado». Sin ese permiso, puedes tomar una tarea libre con
          «Asignármela» o soltar una tuya con «Dejar sin asignar».
        </p>
        <p>
          La persona que recibe una tarea la ve en «Nuevas» y en sus
          notificaciones (
          <ArticleLink to="primeros-pasos/tus-notificaciones" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="en-espera" title="Poner en espera">
        <p>
          Cuando falta algo que no depende de ti, haz clic en «Poner en espera».
          El formulario pide:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>«En espera de»: «El cliente», «La aseguradora» u «Otro».</li>
          <li>
            «Fecha de seguimiento»: el día en que la tarea sale sola de la
            espera. Sin fecha, se queda en «En espera» hasta que alguien la
            retome.
          </li>
          <li>«Detalle de la espera», si hace falta.</li>
        </ul>
        <p>
          Una tarea en espera sigue venciendo por su fecha límite: el
          seguimiento no la mueve. Si lo que faltaba llega antes, haz clic en
          «Retomar»; Nexus dice «Tarea retomada».
        </p>
      </ArticleSection>

      <ArticleSection
        id="fin-de-la-espera"
        title="Cuando llega la fecha de seguimiento"
      >
        <p>
          La madrugada de la fecha de seguimiento, Nexus saca la tarea de la
          espera:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            La tarea vuelve a «Por hacer», sin «En espera de» ni fecha de
            seguimiento.
          </li>
          <li>
            Aparece en «Nuevas» de su responsable, que recibe una notificación
            del tipo «Tareas que salen de espera».
          </li>
          <li>
            La actividad dice «Llegó su fecha de seguimiento (…): vuelve a «Por
            hacer»».
          </li>
          <li>Si la tarea está delegada, Nexus avisa también al agente.</li>
        </ul>
        <Callout type="note">
          <p>
            La salida de la espera la hace Nexus por la fecha, no porque alguien
            haya visto llegar lo que se esperaba. Revisa si ya llegó antes de
            seguir.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
