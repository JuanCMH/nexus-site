import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es una tarea recurrente" },
  { id: "la-lista", title: "La lista de recurrentes" },
  { id: "proximas-dos-semanas", title: "Las próximas dos semanas" },
  { id: "crear", title: "Crear una tarea recurrente" },
  { id: "la-ficha", title: "La ficha de una recurrente" },
  { id: "propuestas", title: "Las que propone el agente" },
  { id: "ocurrencias", title: "Las ocurrencias en la lista de tareas" },
  { id: "quien", title: "Quién las ve y quién las cambia" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es una tarea recurrente">
        <p>
          Una tarea recurrente es el molde de un trabajo que se repite con un
          ritmo fijo: conciliar la cartera de un cliente cada lunes, preparar un
          informe el último día hábil del mes. Se define una vez, en Tareas →
          Recurrentes.
        </p>
        <p>
          Cada madrugada, Nexus abre como tarea normal la ocurrencia que toca,
          con su fecha límite, su responsable y sus pasos sin marcar. La tarea
          se trabaja y se cierra como cualquier otra (
          <ArticleLink to="tareas/trabajar-una-tarea" />
          ). Si la hace el agente, la ocurrencia nace delegada a él, a nombre
          del responsable.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Si la ocurrencia anterior sigue abierta, la nueva se abre igual y lo
            dice en su actividad: «La ocurrencia anterior, del …, sigue
            abierta.». La anterior queda vencida.
          </li>
          <li>
            Las ocurrencias se abren a nombre de quien creó la serie. Si esa
            persona deja la agencia, la serie se pausa con el aviso «Pausada:
            Quien la creó ya no está en la agencia.».
          </li>
          <li>
            Mientras una serie está pausada no abre nada. Al reanudarla, la
            ocurrencia cuya fecha límite ya pasó no se abre.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="la-lista" title="La lista de recurrentes">
        <p>La barra sobre la lista tiene:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Activas», «Propuestas» y «Terminadas». «Propuestas» dice entre
            paréntesis cuántas esperan confirmación.
          </li>
          <li>«Todas», «Personas» y «Agente»: quién hace cada serie.</li>
          <li>El buscador «Título o cliente».</li>
        </ul>
        <p>
          Cada fila dice cómo se repite («Cada semana, el lunes», «Cada mes, el
          último día hábil»), la próxima fecha límite («Próxima: …») o
          «Pausada», y el tipo de trámite, el cliente y el responsable. A la
          derecha, un punto por cada una de las últimas ocurrencias y el
          distintivo «Persona» o «Agente».
        </p>
        <ManualTable
          head={["Punto", "Qué significa"]}
          rows={[
            ["Abierta", "La ocurrencia sigue abierta."],
            ["Hecha a tiempo", "Se cerró como hecha hasta su fecha límite."],
            ["Hecha tarde", "Se cerró como hecha después de su fecha límite."],
            ["No se hizo", "Se cerró como no hecha."],
          ]}
        />
        <p>
          Pasa el puntero sobre un punto para ver la fecha de esa ocurrencia y
          cómo terminó. Haz clic en una fila para abrir la ficha de la serie.
        </p>
        <Screenshot
          id="tareas/recurrentes"
          caption="Tareas → Recurrentes: «Próximas dos semanas» arriba y cada serie con su regla, su próxima fecha, los puntos de sus últimas ocurrencias y el distintivo «Persona» o «Agente»."
        />
      </ArticleSection>

      <ArticleSection
        id="proximas-dos-semanas"
        title="Las próximas dos semanas"
      >
        <p>
          En «Activas», el bloque «Próximas dos semanas» reúne lo que vence en
          los próximos catorce días. Solo salen los días con algún vencimiento,
          como «Hoy», «Mañana» o la fecha, y debajo de cada uno los títulos de
          las series. Lo que hace el agente lleva «· Agente». Haz clic en un
          título para abrir su ficha.
        </p>
        <p>
          En una ventana estrecha el bloque no sale: cada fila de la lista ya
          dice su próxima fecha.
        </p>
      </ArticleSection>

      <ArticleSection id="crear" title="Crear una tarea recurrente">
        <Video id="tareas/crear-una-tarea-recurrente" />
        <p>
          Con el permiso «Crear tareas», el botón «Nueva recurrente» está en la
          cabecera de Tareas → Recurrentes. También se puede partir de una tarea
          que ya existe: en su panel o en su página, abre «Más acciones de la
          tarea» y elige «Repetir esta tarea». El formulario abre con su título,
          su tipo, su descripción, sus pasos, su cliente, su póliza, su
          responsable y quién la hace.
        </p>
        <Steps>
          <Step title="Describe la tarea">
            <p>
              En «La tarea»: «Título», «Tipo de trámite», «Responsable»
              («Reparto de la agencia» o una persona), «Prioridad» («Normal» o
              «Urgente»), «Cliente», «Póliza», «Descripción» y «Pasos». Los
              pasos van uno por línea; cada ocurrencia los trae sin marcar.
            </p>
          </Step>
          <Step title="Indica cómo se repite">
            <p>
              En «Se repite», elige la «Frecuencia» y su detalle, la fecha en
              que «Empieza» y, si la tiene, la fecha en que «Termina». Sin fecha
              de fin, se repite hasta que alguien la termine.
            </p>
          </Step>
          <Step title="Elige quién la hace">
            <p>
              En «La hace»: «El responsable de la tarea» o «El agente, a nombre
              del responsable». Con el agente aparecen «Flujo que sigue» («El
              que corresponda según la tarea» o un flujo de la agencia) e
              «Indicaciones para el agente»: lo que necesita saber en cada
              ocurrencia.
            </p>
          </Step>
          <Step title="Revisa las fechas y haz clic en «Crear recurrente»">
            <p>
              «Próximas fechas límite» enseña las siguientes fechas con lo que
              elegiste. Nexus dice «Tarea recurrente creada».
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="tareas/nueva-recurrente"
          caption="El formulario «Nueva tarea recurrente»: «La tarea», «Se repite» con la frecuencia y sus días, «Próximas fechas límite» y «Quién la hace»."
        />
        <ManualTable
          head={["Frecuencia", "Qué se elige"]}
          rows={[
            [
              "Diaria",
              "«Días»: «Días hábiles (sin festivos)» o «Todos los días».",
            ],
            ["Semanal", "«Días de la semana»: uno o varios."],
            [
              "Quincenal",
              "«Forma»: «Dos días del mes», con sus dos días, o «Cada dos semanas», contadas desde la fecha de inicio.",
            ],
            [
              "Mensual, Trimestral, Semestral y Anual",
              "«Día del mes»: un día, «Último día del mes» o «Último día hábil del mes». En las trimestrales, semestrales y anuales, la primera es en el mes de la fecha de inicio.",
            ],
          ]}
        />
        <p>Dos campos más ajustan cuándo se abre cada ocurrencia:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Abrir la tarea»: cuántos días antes de su fecha límite se abre, de
            0 a 30. Debajo dice «El mismo día» o cuántos días antes. Si lo dejas
            vacío, se usa la antelación que sugiere el campo para esa
            frecuencia.
          </li>
          <li>
            «Si cae en fin de semana o festivo»: «Día hábil anterior», «Día
            hábil siguiente» o «Dejar la fecha». No sale en la diaria ni con
            «Último día hábil del mes»; en la semanal solo corre un festivo.
          </li>
        </ul>
        <Callout type="note">
          <p>
            Si eliges «El agente» y la agencia no tiene el agente conectado, o
            el agente no tiene avisos configurados, el formulario lo advierte:
            las ocurrencias quedarían delegadas sin que nadie las atienda, o
            esperando a su siguiente pasada (
            <ArticleLink to="agente/configuracion-del-agente" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="la-ficha" title="La ficha de una recurrente">
        <p>
          La ficha se abre al lado de la lista. Bajo el título, la regla de
          repetición. Sus datos:
        </p>
        <ManualTable
          head={["Dato", "Qué dice"]}
          rows={[
            ["Estado", "«Propuesta», «Activa», «Pausada» o «Terminada»."],
            ["Tipo", "El tipo de trámite de cada ocurrencia."],
            ["La hace", "«Persona» o «Agente»."],
            ["Responsable", "La persona a cargo, o «Reparto de la agencia»."],
            ["Cliente y Póliza", "Si la serie los tiene."],
            ["Flujo", "Solo si la hace el agente y sigue un flujo concreto."],
            ["Abre", "«El mismo día» o cuántos días antes."],
            [
              "Fin de semana o festivo",
              "«Día hábil anterior», «Día hábil siguiente» o «Dejar la fecha».",
            ],
            ["Vigencia", "Desde cuándo y hasta cuándo, o «sin fecha de fin»."],
            ["Creada por", "Quién la creó o la confirmó."],
          ]}
        />
        <p>
          Debajo, «Indicaciones para el agente» si las tiene, «Próximas fechas
          límite» y «Ocurrencias»: las últimas tareas abiertas por la serie,
          cada una con su fecha límite y cómo terminó. Haz clic en una para
          abrir su tarea.
        </p>
        <p>El pie de la ficha tiene:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Editar»: abre «Editar tarea recurrente». Los cambios valen para las
            próximas ocurrencias; las tareas ya abiertas no cambian. Nexus dice
            «Los cambios se guardaron».
          </li>
          <li>
            «Pausar» y «Reanudar»: Nexus dice «La tarea recurrente quedó
            pausada» o «La tarea recurrente se reanudó».
          </li>
          <li>
            «Abrir la siguiente»: abre ya la próxima ocurrencia, antes de su
            día. Nexus dice «Se abrió la siguiente ocurrencia» y abre la tarea.
          </li>
          <li>
            «Terminar»: pide confirmación («No se abrirán más ocurrencias. Las
            tareas ya abiertas siguen igual.») y la serie pasa a «Terminadas».
          </li>
        </ul>
        <Screenshot
          id="tareas/ficha-recurrente"
          caption="La ficha de una tarea recurrente: sus datos, las próximas fechas límite, sus ocurrencias con cómo terminó cada una y los botones del pie."
        />
      </ArticleSection>

      <ArticleSection id="propuestas" title="Las que propone el agente">
        <p>
          El agente puede proponer una tarea recurrente cuando una persona se lo
          pide o cuando ve tareas iguales que se repiten con un ritmo fijo. Lo
          propuesto no abre ninguna tarea: espera en «Propuestas», y la cifra en
          ámbar junto a «Recurrentes», en el menú de Tareas, dice cuántas hay.
        </p>
        <p>
          La ficha de una propuesta trae el aviso «Propuesta por el agente» con
          su motivo, y tres botones:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Confirmar»: la serie queda activa y Nexus dice «La tarea recurrente
            quedó activa». Quien confirma la respalda: las ocurrencias se abren
            a su nombre.
          </li>
          <li>«Editar»: ajusta la propuesta antes de confirmarla.</li>
          <li>
            «Descartar»: pide confirmación y la elimina. Nexus dice «La
            propuesta se descartó».
          </li>
        </ul>
        {/* CAPTURA tareas/recurrente-propuesta: ficha de una serie en estado «Propuesta» con el aviso ámbar «Propuesta por el agente» y los botones «Descartar», «Editar» y «Confirmar» | Una tarea recurrente propuesta por el agente: el aviso con su motivo y los botones para confirmarla, editarla o descartarla. */}
      </ArticleSection>

      <ArticleSection
        id="ocurrencias"
        title="Las ocurrencias en la lista de tareas"
      >
        <p>
          En las listas de Tareas, una ocurrencia lleva una marca con el icono
          de repetición y su frecuencia, como «Semanal». Al pasar el puntero
          dice «Ocurrencia de una tarea recurrente: la abrió Nexus en su fecha».
        </p>
        <p>
          En su panel y en su página, la fila «Recurrente» nombra la serie (haz
          clic para abrir su ficha), la regla y la fecha de la ocurrencia, y
          debajo «Anterior:», con la fecha de la ocurrencia anterior y cómo
          terminó.
        </p>
      </ArticleSection>

      <ArticleSection id="quien" title="Quién las ve y quién las cambia">
        <ManualTable
          head={["Acción", "Quién puede"]}
          rows={[
            [
              "Ver",
              "Con el permiso «Ver las tareas de toda la agencia», todas. Sin él, las que creaste y las que tienes a cargo.",
            ],
            [
              "Crear y confirmar",
              "Quien tiene el permiso «Crear tareas». Ponerla a cargo de otra persona pide además «Asignar tareas a otras personas».",
            ],
            [
              "Editar, pausar, reanudar y terminar",
              "Quien la creó, quien tiene el permiso «Definir el reparto y los plazos» y quien administra la agencia.",
            ],
            ["Abrir la siguiente", "Los mismos, y también su responsable."],
          ]}
        />
        <p>
          Las tareas automáticas de renovación y de fechas con seguimiento son
          otra cosa: salen de las pólizas y de las plantillas, no de una serie (
          <ArticleLink to="tareas/plazos-y-tareas-automaticas" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
