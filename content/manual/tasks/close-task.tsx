import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "se-cierra-sola", title: "Cuando se cierra sola" },
  { id: "cerrar", title: "Cerrar una tarea" },
  { id: "no-se-hizo", title: "Cuando no se hizo" },
  { id: "que-el-agente-termine", title: "Que el agente termine" },
  { id: "tareas-quietas", title: "Las tareas sin movimiento" },
  { id: "encargo-de-cierre", title: "Cuando el agente propone cerrar varias" },
  { id: "reabrir-y-eliminar", title: "Reabrir y eliminar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="se-cierra-sola" title="Cuando se cierra sola">
        <p>
          Una emisión, una renovación, una cancelación o completar el registro
          se cierran solas cuando su resultado aparece en Nexus: la póliza
          emitida y confirmada, la póliza renovada, cancelada o completa. La
          tarea queda «Hecha» y «Comprobada», y en «Cerrada por» dice «Nexus,
          automáticamente al aparecer su resultado».
        </p>
        <p>
          Una tarea creada con «Pedir respuesta al agente», desde la
          conversación de un correo, se cierra sola cuando una persona envía la
          respuesta que redactó el agente: queda «Hecha», con la nota «Se envió
          la respuesta «…».» y a nombre de quien la envió (
          <ArticleLink to="correos/revisar-y-enviar" />
          ).
        </p>
        <p>
          Las demás las cierra una persona, o el agente cuando una persona se lo
          pide o cuando encuentra la prueba (
          <ArticleLink to="tareas/que-es-una-tarea" />
          ). Una cotización o un certificado no se cierran solos aunque tengan
          su documento vinculado: hay que cerrarlos.
        </p>
      </ArticleSection>

      <ArticleSection id="cerrar" title="Cerrar una tarea">
        <Video id="tareas/cerrar-una-tarea" />
        <Steps>
          <Step title="Haz clic en «Cerrar tarea»">
            <p>En el pie del panel de la tarea. Se abre «Cerrar la tarea».</p>
          </Step>
          <Step title="Lee lo que dice el cierre">
            <p>
              Si el resultado ya está en Nexus, dice «Queda como hecha» y la
              «Nota de cierre» es opcional. Si no está, dice «Su resultado aún
              no aparece en Nexus», enseña qué espera la tarea y pide «Qué
              pasó». Si quedan pasos sin marcar, los enumera; no impiden cerrar.
            </p>
            <Screenshot
              id="tareas/cerrar-sin-resultado"
              caption="«Cerrar la tarea» de una emisión sin su póliza: «Su resultado aún no aparece en Nexus», los dos pasos sin marcar, el campo «Qué pasó» completado y la casilla «Que el agente termine y la cierre»."
            />
          </Step>
          <Step title="Escribe la nota y haz clic en «Cerrar tarea»">
            <p>
              Nexus dice «Tarea cerrada». Sin el resultado a la vista, la tarea
              queda «Con nota»: tu nota es la prueba del cierre y firma con tu
              nombre.
            </p>
          </Step>
        </Steps>
        <p>
          «Cerrar tarea» está en el pie del panel y en la cabecera de la página
          de la tarea. Un mensaje en la conversación no cierra la tarea.
        </p>
      </ArticleSection>

      <ArticleSection id="no-se-hizo" title="Cuando no se hizo">
        <p>
          Si la tarea no se va a hacer (el cliente desistió, estaba duplicada),
          haz clic en «No se hizo». El campo «Por qué no se hizo» es
          obligatorio. La tarea queda en el historial con el motivo y no cuenta
          como hecha; Nexus dice «Tarea cerrada como no hecha».
        </p>
      </ArticleSection>

      <ArticleSection id="que-el-agente-termine" title="Que el agente termine">
        <p>
          Con el agente de la agencia conectado, «Cerrar la tarea» de una tarea
          cuyo resultado aún no está en Nexus, y el cierre con «No se hizo»,
          traen la casilla «Que el agente termine y la cierre», marcada. Con
          ella, tu nota es además un encargo, y el botón pasa a «Encargar al
          agente»:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            En una emisión, una renovación, una modificación o completar el
            registro, el agente consigue el registro, lo deja en Nexus y la
            tarea se cierra cuando entra.
          </li>
          <li>
            En los demás tipos, hace lo que dice tu nota (guardar el soporte,
            ligar el documento) y la cierra con tu nota.
          </li>
        </ul>
        <p>
          La tarea queda abierta con la marca «Por cerrar» y Nexus dice «Quedó
          «Por cerrar»: el agente termina lo que falta y te avisa». El agente
          trabaja con tus permisos y te avisa qué hizo. En el panel, el aviso
          «Por cerrar · Hecha» repite tu nota y trae dos botones: «Cerrar ya»,
          para cerrarla tú, y «Retirar», para quitar el «Por cerrar».
        </p>
        <p>
          A veces es el agente el que encuentra la prueba por su cuenta. Si la
          agencia revisa todo lo que registra el agente, la tarea dice «El
          agente propone cerrarla», con su nota y «Fuente:»; si un correo dice
          expresamente que no se hizo (el cliente desistió, la aseguradora
          rechazó), dice «El agente propone cerrarla como «No se hizo»».
          «Cerrar» la cierra con ese desenlace y «Descartar la propuesta» la
          deja como estaba. Con otro nivel de supervisión, el agente la cierra
          él mismo, con su nota y su fuente (
          <ArticleLink to="agente/verificacion-y-supervision" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="tareas-quietas" title="Las tareas sin movimiento">
        <p>
          Una tarea abierta que lleva 7 días o más sin cambios le pregunta una
          vez a su responsable: el panel dice «¿Qué pasó con esta tarea?», con
          «Hecha», «No se hizo» y «Sigue en curso». Las dos primeras abren el
          cierre; «Sigue en curso» la deja abierta, y durante 30 días el agente
          no propone cerrarla.
        </p>
      </ArticleSection>

      <ArticleSection
        id="encargo-de-cierre"
        title="Cuando el agente propone cerrar varias"
      >
        <p>
          Cuando la agencia le pide al agente repasar las tareas abiertas en el
          correo, las que llevan 30 días o más sin rastro (ni respuesta ni
          movimiento desde el correo que las originó, o desde su fecha límite)
          no las cierra él: las junta en un encargo para su responsable, uno por
          persona. Cada fila dice «Cerrar «…» como «Hecha»» (o «No se hizo») con
          la nota del agente.
        </p>
        <p>
          El encargo llega como una solicitud a quien tiene esas tareas a cargo;
          también lo pueden decidir el propietario y los administradores.
          Desmarca las que siguen vivas y aprueba el resto con «Aprobar N
          cambios»: Nexus las cierra a tu nombre, «Con nota». Las que quitaste
          siguen abiertas y cuentan como «Sigue en curso»: el agente no vuelve a
          proponerlas en 30 días. El encargo caduca a los siete días (
          <ArticleLink to="agente/permisos-y-solicitudes" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="reabrir-y-eliminar" title="Reabrir y eliminar">
        <p>
          Una tarea cerrada se reabre con «Reabrir», en el pie de su panel.
          Nexus dice «Tarea reabierta».
        </p>
        <p>
          Eliminar pide el permiso «Eliminar tareas» y está en «Más acciones de
          la tarea». Borra la tarea con su conversación y su actividad.
        </p>
        <Callout type="warning">
          <p>
            Eliminar no se puede deshacer. Si lo que quieres es dejar constancia
            de que no se hará, ciérrala como «No se hizo».
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
