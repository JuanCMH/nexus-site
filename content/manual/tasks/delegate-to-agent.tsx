import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-delegar", title: "Qué es delegar una tarea" },
  { id: "delegar", title: "Delegar" },
  { id: "cuando-la-toma", title: "Cuándo la toma el agente" },
  { id: "indicaciones", title: "Indicaciones durante el trabajo" },
  { id: "pedido-puntual", title: "Pedir algo puntual al agente" },
  { id: "alcance", title: "El alcance del agente" },
  { id: "cuando-la-devuelve", title: "Cuando la devuelve" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-delegar" title="Qué es delegar una tarea">
        <p>
          Delegar una tarea es pedirle al agente de la agencia que la haga. La
          tarea sigue a cargo de su responsable; el agente la toma, hace lo que
          puede y la devuelve con una nota de lo que hizo o de lo que faltó.
        </p>
        <p>
          Lo que el agente hace por una tarea delegada vale lo que puede la
          persona que se la delegó: con sus permisos, no con los del agente. Lo
          que propone (un cliente, una póliza, un correo por enviar) sigue
          esperando a que una persona lo confirme o lo envíe (
          <ArticleLink to="agente/como-trabaja-el-agente" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="delegar" title="Delegar">
        <p>Una tarea se delega de dos maneras:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Al crearla, con «Delegación» en «Al agente» (
            <ArticleLink to="tareas/crear-una-tarea" />
            ).
          </li>
          <li>
            En su panel, con «Delegar al agente», junto a «Delegación». Nexus
            dice «Tarea delegada al agente».
          </li>
        </ul>
        <p>
          Todo miembro puede delegar las tareas que creó o tiene a cargo. La
          tarea lleva la marca «Para el agente» en las listas, y la porción
          «Para el agente» las reúne. Para quitársela, haz clic en «Retirar del
          agente»: Nexus dice «Tarea retirada del agente».
        </p>
        <Screenshot
          id="tareas/panel-delegada"
          caption="Una cotización delegada: arriba, el último mensaje de la conversación; en «Delegación», «Al agente», cuándo le avisó Nexus y «La devuelve cuando termine», con «Retirar del agente»; debajo, «Alcance del agente»."
        />
      </ArticleSection>

      <ArticleSection id="cuando-la-toma" title="Cuándo la toma el agente">
        <p>Bajo «Al agente», una línea dice qué sabe Nexus del aviso:</p>
        <ManualTable
          head={["Lo que dice", "Qué significa"]}
          rows={[
            [
              "Nexus le avisa en un momento",
              "El aviso al agente sale enseguida.",
            ],
            [
              "Fuera de su horario de atención: Nexus le avisa…",
              "Es fuera del horario de atención del agente: el aviso sale a la hora que indica.",
            ],
            [
              "Nexus le avisó… La devuelve cuando termine.",
              "El agente ya recibió el aviso.",
            ],
            [
              "La toma en su siguiente ejecución",
              "No hay aviso pendiente: la verá la próxima vez que trabaje.",
            ],
            [
              "Nexus no pudo avisarle. La toma en su siguiente ejecución.",
              "El aviso falló; la tarea sigue en su cola.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="indicaciones" title="Indicaciones durante el trabajo">
        <p>
          Lo que el agente necesita saber, o una corrección, se le escribe en la
          conversación de la tarea (
          <ArticleLink to="tareas/trabajar-una-tarea" />
          ). En una tarea delegada el campo dice «Escribe una indicación o una
          corrección para el agente», y el agente responde en la misma
          conversación.
        </p>
        <p>
          Después de un mensaje tuyo, bajo la conversación, una línea dice cómo
          va el aviso al agente:
        </p>
        <ManualTable
          head={["Lo que dice", "Qué significa"]}
          rows={[
            [
              "Mensaje recibido. Nexus avisará al agente en su horario de atención.",
              "Es fuera del horario de atención del agente: el aviso sale cuando empiece.",
            ],
            [
              "Agente avisado. Responde en esta conversación al terminar.",
              "El agente ya recibió el aviso.",
            ],
            [
              "No se pudo avisar al agente. Verá el mensaje en su siguiente pasada.",
              "El aviso falló; el mensaje sigue en la tarea.",
            ],
            [
              "El agente no tiene un disparador activo. Verá el mensaje en su siguiente pasada.",
              "La agencia no tiene configurado cómo despertar al agente: lo verá la próxima vez que trabaje.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="pedido-puntual" title="Pedir algo puntual al agente">
        <p>
          A veces no hace falta delegar la tarea entera, solo una parte: buscar
          un documento, redactar un resumen, revisar un dato. Para eso está
          «Pedir al agente», junto al campo de escribir de la conversación. Sale
          si puedes cambiar la tarea, el agente de la agencia está conectado y
          la tarea no está delegada.
        </p>
        <p>
          Escribe lo que necesitas, haz clic en «Pedir al agente» para marcarlo
          y envía el mensaje. La tarea sigue con su responsable y sin delegar.
          El mensaje lleva «· Pedido al agente» y la conversación dice que le
          pidió algo puntual; cuando el agente contesta en la conversación, el
          pedido queda atendido.
        </p>
      </ArticleSection>

      <ArticleSection id="alcance" title="El alcance del agente">
        <p>
          En una tarea delegada, la fila «Alcance del agente» dice qué puede
          cambiar el agente con ella. Por defecto, «Solo propone roles y
          accesos»: lo que cambie roles o accesos queda como propuesta para
          confirmar en Equipo.
        </p>
        <p>
          Con el interruptor encendido («Con esta tarea el agente puede cambiar
          roles, accesos y reglas»), el agente aplica esos cambios directamente
          y cada uno queda escrito en la tarea. La fila y su interruptor los ve
          quien administra la agencia o tiene alguno de estos permisos: «Asignar
          roles y permisos adicionales», «Crear, editar y eliminar roles»,
          «Definir el reparto y los plazos», «Cancelar y reactivar pólizas» o
          «Crear y cambiar flujos».
        </p>
        <Callout type="warning">
          <p>
            Enciéndelo solo cuando la tarea pide ese cambio. El agente lo aplica
            con tus permisos, sin pasar por una confirmación.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="cuando-la-devuelve" title="Cuando la devuelve">
        <p>
          Cuando termina, o cuando no puede seguir, el agente devuelve la tarea.
          Lo que hizo, o lo que faltó, queda como un mensaje suyo en la
          conversación, y la actividad registra que la devolvió a su
          responsable. La tarea deja de estar delegada, vuelve a «Nuevas» de su
          responsable y llega una notificación a quien la lleva y a quien la
          delegó: «El agente terminó «…»» o «El agente no pudo terminar «…»».
        </p>
        <p>
          Devolverla no la cierra: la cierra su responsable, o se cierra sola si
          su resultado ya está en Nexus. Para que el agente la cierre al
          terminar, se le pide con la nota de cierre (
          <ArticleLink to="tareas/cerrar-una-tarea" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
