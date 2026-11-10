import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "un-compromiso", title: "Un compromiso con un resultado" },
  { id: "tipos-de-tramite", title: "Los tipos de trámite" },
  { id: "estados", title: "Los estados" },
  { id: "comprobacion", title: "Cómo quedó comprobada" },
  { id: "de-donde-salen", title: "De dónde salen las tareas" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="un-compromiso" title="Un compromiso con un resultado">
        <p>
          En Nexus, una tarea es algo que hay que hacer en la agencia, con un
          responsable, un tipo de trámite y, si se le pone, una fecha límite.
          Cada tipo de trámite dice qué tiene que quedar en Nexus cuando la
          tarea termina: una póliza emitida, una renovación, un documento.
        </p>
        <p>
          Nexus mira el registro. Cuando el resultado aparece, la tarea queda
          comprobada y, en varios tipos, se cierra sola. Cuando no hay nada que
          mirar, o el resultado todavía no está, la tarea se cierra con una nota
          de quien la cerró, que firma con su nombre.
        </p>
      </ArticleSection>

      <ArticleSection id="tipos-de-tramite" title="Los tipos de trámite">
        <p>
          El tipo se elige al crear la tarea, en «Tipo de trámite». La columna
          «Se cumple con» es la misma que enseña Tareas → Plazos.
        </p>
        <ManualTable
          head={["Tipo de trámite", "Se cumple con", "Se cierra sola"]}
          rows={[
            [
              "Emisión",
              "Una póliza nueva registrada y confirmada",
              "Sí, cuando la póliza vinculada a la tarea está confirmada.",
            ],
            [
              "Renovación",
              "La póliza queda renovada, reemplazada o con su nota",
              "Sí.",
            ],
            [
              "Modificación",
              "El cambio queda en la póliza",
              "No. Nexus comprueba que la póliza se editó o recibió un documento después de abrir la tarea; la cierra una persona.",
            ],
            ["Cancelación", "La póliza queda cancelada", "Sí."],
            [
              "Cotización",
              "El documento queda vinculado a la tarea",
              "No. La cierra una persona.",
            ],
            [
              "Certificado o documento",
              "El documento queda vinculado a la tarea",
              "No. La cierra una persona.",
            ],
            ["Completar el registro", "La póliza tiene cliente y prima", "Sí."],
            [
              "Siniestro, Cobro y Otra",
              "Lo que diga la tarea, con una nota al cerrar",
              "No. Nexus no tiene nada que mirar: la nota de cierre es la prueba.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="estados" title="Los estados">
        <p>
          El estado lo cambia quien trabaja la tarea, salvo cuando Nexus la
          cierra porque apareció su resultado.
        </p>
        <ManualTable
          head={["Estado", "Qué significa"]}
          rows={[
            ["Por hacer", "La tarea está abierta y alguien tiene que hacerla."],
            [
              "En espera",
              "Falta algo que no depende de quien la lleva: el cliente, la aseguradora u otro. Puede llevar una fecha de seguimiento; ese día vuelve sola a «Por hacer».",
            ],
            ["Hecha", "Se cerró porque el trabajo se hizo."],
            [
              "No se hizo",
              "Se cerró sin hacerse, con el motivo escrito. No cuenta como hecha.",
            ],
          ]}
        />
        <p>
          «Vencida» no es un estado que alguien elija: una tarea abierta está
          vencida cuando pasó su fecha límite. «Por cerrar» es una tarea abierta
          en la que alguien ya escribió qué pasó y el agente termina lo que
          falta (
          <ArticleLink to="tareas/cerrar-una-tarea" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="comprobacion" title="Cómo quedó comprobada">
        <p>
          Una tarea cerrada lleva, junto a su estado, una marca que dice en qué
          se basa su cierre. Nadie la escribe: sale del registro y de cómo se
          cerró.
        </p>
        <ManualTable
          head={["Marca", "Qué significa"]}
          rows={[
            ["Comprobada", "Su resultado está en Nexus."],
            ["Con nota", "Vale por la nota de quien la cerró."],
            [
              "Con nota del agente",
              "La cerró el agente con la fuente que citó.",
            ],
            [
              "Sin comprobar",
              "Tenía su resultado en Nexus y ya no lo tiene: por ejemplo, se borró la póliza. La tarea no se reabre sola; pasa a «Por revisar».",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="de-donde-salen" title="De dónde salen las tareas">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Las crea una persona con «Nueva tarea» (
            <ArticleLink to="tareas/crear-una-tarea" />
            ), o desde un mensaje de un chat.
          </li>
          <li>
            Las crea el agente cuando trabaja, por ejemplo al leer un correo.
            Esas tareas dicen «El agente» en «Creada por».
          </li>
          <li>
            Las crea Nexus cada madrugada: la tarea de renovación de cada póliza
            por vencer y las de las fechas con seguimiento de las plantillas (
            <ArticleLink to="tareas/plazos-y-tareas-automaticas" />
            ), y la ocurrencia de cada tarea recurrente cuyo día llegó (
            <ArticleLink to="tareas/tareas-recurrentes" />
            ).
          </li>
          <li>
            «Pedir respuesta al agente», en la conversación de un correo, crea
            una tarea delegada al agente para que redacte la respuesta. Se
            cierra sola cuando una persona la envía (
            <ArticleLink to="tareas/cerrar-una-tarea" />
            ).
          </li>
          <li>
            Mencionar al agente en un grupo de chat le deja una tarea (
            <ArticleLink to="chats/el-agente-en-un-chat" />
            ).
          </li>
        </ul>
        <Callout type="note">
          <p>
            Nexus no envía correos ni avisos al cliente por su cuenta. Cuando
            algo vence, crea una tarea con su responsable y su fecha; el correo
            lo redacta el agente y lo envía una persona.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
