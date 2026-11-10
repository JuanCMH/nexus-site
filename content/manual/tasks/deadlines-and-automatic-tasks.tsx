import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "plazos-por-tipo", title: "Los plazos por tipo de trámite" },
  { id: "renovacion", title: "La tarea de renovación" },
  { id: "fechas-con-seguimiento", title: "Las fechas con seguimiento" },
  { id: "quien-las-recibe", title: "Quién recibe las tareas automáticas" },
  { id: "quien-cambia", title: "Quién cambia los plazos" },
];

export function Article() {
  return (
    <>
      <ArticleSection
        id="plazos-por-tipo"
        title="Los plazos por tipo de trámite"
      >
        <p>
          Tareas → Plazos, en «Ajustes», empieza por «Plazos por tipo de
          trámite»: en cuántos días vence una tarea de cada tipo cuando quien la
          crea no indica la fecha límite. Cada fila dice el tipo, con qué se
          cumple y el plazo, o «Sin plazo».
        </p>
        <p>
          El plazo va de 0 a 365 días. Una renovación no tiene plazo propio:
          vence siempre con su póliza.
        </p>
        <Screenshot
          id="tareas/plazos"
          caption="Tareas → Plazos: «Plazos por tipo de trámite», con lo que cumple cada tipo y su plazo, y debajo «Tareas automáticas», con «Renovación de pólizas»."
        />
      </ArticleSection>

      <ArticleSection id="renovacion" title="La tarea de renovación">
        <p>
          «Tareas automáticas» es lo que Nexus crea cada madrugada, aunque el
          agente no esté conectado. En «Renovación de pólizas» se fija cuántos
          días antes del fin de vigencia se crea la tarea de renovación de cada
          póliza que no la tiene.
        </p>
        <p>
          La tarea se llama «Renovar la póliza», con su número y su cliente. Es
          de tipo «Renovación»: se cierra sola cuando la póliza queda renovada,
          reemplazada o con su nota de que no se renueva (
          <ArticleLink to="polizas/renovar-una-poliza" />
          ). Una póliza nunca tiene dos tareas de renovación.
        </p>
        <p>
          Si el campo queda vacío, Nexus no usa una antelación propia: se usan
          los avisos del campo de fin de vigencia de la plantilla de pólizas, si
          los tiene. Sin ninguno de los dos, Nexus no crea estas tareas.
        </p>
      </ArticleSection>

      <ArticleSection
        id="fechas-con-seguimiento"
        title="Las fechas con seguimiento"
      >
        <p>
          Un campo de fecha de la plantilla de clientes o de pólizas puede
          llevar avisos, en su «Seguimiento». Cada aviso crea una tarea los días
          antes que tenga configurados, con la fecha como límite y vinculada al
          cliente o a la póliza. Su descripción dice cuánto falta y por qué la
          creó Nexus. Si la tarea de un aviso anterior de la misma fecha sigue
          abierta, el aviso nuevo no abre otra: queda como mensaje en su
          conversación, la tarea vuelve a «Nuevas» y su responsable recibe una
          notificación.
        </p>
        <p>
          Si el aviso pide avisarle al cliente, la tarea trae el paso «Avisar al
          cliente» y, en la descripción, el correo del cliente si el registro lo
          tiene. El aviso lo da una persona: Nexus no le escribe al cliente.
        </p>
        <p>
          Bajo «Fechas con seguimiento», Tareas → Plazos enumera los campos que
          crean tareas; «Abrir las plantillas» lleva a cambiarlos (
          <ArticleLink to="configuracion/plantillas-de-polizas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="quien-las-recibe"
        title="Quién recibe las tareas automáticas"
      >
        <p>
          Una tarea que abre Nexus sobre un cliente con responsable es de esa
          persona (
          <ArticleLink to="clientes/responsable-del-cliente" />
          ). Si el aviso de la plantilla nombra a una persona, es de ella. Las
          demás siguen el reparto de Directrices → Reparto: con reglas vigentes
          y el agente conectado, las asigna el agente; si no, van a la persona
          de respaldo de la agencia (
          <ArticleLink to="directrices/reparto" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="quien-cambia" title="Quién cambia los plazos">
        <p>
          Todos leen Tareas → Plazos. Con el permiso «Definir el reparto y los
          plazos», cada bloque tiene «Editar». Con «Proponer cambios en la
          configuración», tiene «Proponer cambios»: el formulario es el mismo,
          con un campo «Por qué» opcional, y «Enviar propuesta» la deja para
          quien gestiona los plazos de las tareas.
        </p>
        <p>
          Las tareas que se repiten con un ritmo fijo, sin depender de una
          póliza o de una fecha de la plantilla, se definen en Tareas →
          Recurrentes (
          <ArticleLink to="tareas/tareas-recurrentes" />
          ).
        </p>
        <Callout type="note">
          <p>
            Nexus no envía recordatorios ni correos por su cuenta. Lo que vence
            se convierte en una tarea con su responsable y su fecha.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
