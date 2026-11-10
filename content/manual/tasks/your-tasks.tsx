import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-menu", title: "El menú de Tareas" },
  { id: "la-lista", title: "La lista" },
  { id: "buscar-y-agrupar", title: "Buscar, agrupar y filtrar" },
  { id: "marcas", title: "Las marcas" },
  { id: "cerradas", title: "Las cerradas" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-menu" title="El menú de Tareas">
        <p>
          Tareas, en el menú principal, abre en «Mías». El menú del módulo tiene
          estas secciones:
        </p>
        <ManualTable
          head={["Sección", "Qué enseña", "Quién la ve"]}
          rows={[
            ["Mías", "Las tareas abiertas a tu cargo.", "Todos."],
            [
              "Agencia",
              "Las tareas abiertas de toda la agencia, con su responsable.",
              "Quien tiene el permiso «Ver las tareas de toda la agencia».",
            ],
            [
              "Por revisar",
              <>
                Las cerradas que piden una segunda mirada (
                <ArticleLink to="tareas/revisar-tareas" />
                ).
              </>,
              "Quien tiene el permiso «Revisar las tareas cerradas».",
            ],
            ["Cerradas", "Las hechas y las que no se hicieron.", "Todos."],
            [
              "Recurrentes",
              <>
                Las tareas que se repiten y las que propone el agente (
                <ArticleLink to="tareas/tareas-recurrentes" />
                ).
              </>,
              "Todos.",
            ],
            [
              "Plazos",
              <>
                En «Ajustes»: los plazos por tipo y las tareas automáticas (
                <ArticleLink to="tareas/plazos-y-tareas-automaticas" />
                ).
              </>,
              "Todos la leen; la cambia quien tiene el permiso.",
            ],
          ]}
        />
        <p>
          La cifra junto a «Mías», «Agencia» y «Por revisar» es cuántas tareas
          hay en cada una; la de «Recurrentes», en ámbar, cuántas propuso el
          agente y esperan confirmación. Sin el permiso de ver toda la agencia,
          cada persona ve las tareas que creó o tiene a cargo.
        </p>
        <Screenshot
          id="tareas/vista-mias"
          caption="Tareas → Mías: el menú con «Recurrentes» y las abiertas agrupadas en «Nuevas», «Hoy», «Esta semana» y «Después», con las porciones «Vencidas», «Urgentes» y «Hoy» a la derecha de la barra."
        />
      </ArticleSection>

      <ArticleSection id="la-lista" title="La lista">
        <p>
          Cada fila es una tarea: su título, el trámite, el cliente y la póliza,
          la fecha límite y sus marcas. En «Agencia» se suma la columna
          «Responsable»; una tarea sin dueño dice «Sin asignar». Una fecha
          límite que ya pasó sale en rojo. Una tarea en espera enseña su fecha
          de seguimiento, con «Seguimiento» encima; ese día vuelve sola a «Por
          hacer» y aparece en «Nuevas» (
          <ArticleLink to="tareas/trabajar-una-tarea" />
          ).
        </p>
        <p>
          Por defecto las tareas se agrupan por fecha, en este orden: «Nuevas»
          (las que te asignaron y aún no abriste), «Vencidas», «Hoy», «Esta
          semana», «Después», «Sin fecha», «En espera» y «Por cerrar». Un grupo
          sin tareas no sale. Haz clic en el nombre de un grupo para plegarlo o
          desplegarlo.
        </p>
        <p>
          Haz clic en una fila para abrir el panel de la tarea; desde el panel,
          «Abrir tarea» lleva a su página, con la conversación (
          <ArticleLink to="tareas/trabajar-una-tarea" />
          ). Abrirla deja de marcarla como nueva.
        </p>
      </ArticleSection>

      <ArticleSection id="buscar-y-agrupar" title="Buscar, agrupar y filtrar">
        <p>La barra sobre la lista tiene, de izquierda a derecha:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            El buscador «Título, cliente o número de póliza»: cada palabra que
            escribas tiene que estar en uno de los tres.
          </li>
          <li>
            «Agrupar por»: «Fecha», «Responsable» (solo en «Agencia»), «Tipo de
            trámite» o «Estado». Fuera de la agrupación por fecha, cada grupo
            dice cuántas de sus tareas están vencidas.
          </li>
          <li>
            «Filtro»: por «Tipo de trámite» y, en «Agencia», por «Responsable».
            «Limpiar» quita el texto del buscador y los filtros.
          </li>
          <li>
            Las porciones, al final: filtros de un clic que dicen cuántas tareas
            hay en cada uno. Salen las que tienen alguna, hasta tres; el resto
            está en la flecha «Más porciones». Haz clic otra vez en la porción
            puesta para quitarla.
          </li>
        </ul>
        <ManualTable
          head={["Porción", "Qué tareas deja"]}
          rows={[
            ["Vencidas", "Las que pasaron su fecha límite."],
            ["Urgentes", "Las que tienen prioridad «Urgente»."],
            ["Hoy", "Las que vencen hoy."],
            [
              "Sin asignar",
              "Las que no tienen responsable. Solo en «Agencia».",
            ],
            ["Nuevas", "Las que te asignaron y aún no abriste."],
            ["Esta semana", "Las que vencen esta semana, después de hoy."],
            ["En espera", "Las que están en espera."],
            ["Para el agente", "Las delegadas al agente."],
          ]}
        />
        <p>
          Lo que eliges en la barra queda en la dirección de la página: al
          volver atrás, o al compartir el enlace, la lista se ve igual.
        </p>
        <Screenshot
          id="tareas/vista-agencia"
          caption="Tareas → Agencia agrupada por «Responsable»: cada persona con sus tareas abiertas, su fecha límite y marcas como «En espera», «Para el agente» y «Urgente»."
        />
      </ArticleSection>

      <ArticleSection id="marcas" title="Las marcas">
        <p>La columna «Marcas» enseña lo que distingue a una tarea:</p>
        <ManualTable
          head={["Marca", "Qué significa"]}
          rows={[
            ["Urgente", "La tarea tiene prioridad «Urgente»."],
            [
              "Para el agente",
              <>
                Está delegada al agente de la agencia (
                <ArticleLink to="tareas/delegar-al-agente" />
                ).
              </>,
            ],
            [
              "Por cerrar",
              "Alguien escribió qué pasó y el agente termina lo que falta. En ámbar, el agente propone cerrarla y espera tu clic.",
            ],
            ["En espera", "Falta algo que no depende de quien la lleva."],
            [
              "Semanal, Mensual…",
              <>
                Es la ocurrencia de una tarea recurrente, con su frecuencia (
                <ArticleLink to="tareas/tareas-recurrentes" />
                ).
              </>,
            ],
            [
              "Con nota del agente",
              "El agente la cerró con la fuente que citó.",
            ],
            [
              "Perdió su resultado, Hallazgo del agente…",
              "Los motivos por los que una tarea está en «Por revisar».",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="cerradas" title="Las cerradas">
        <p>
          «Cerradas» lista las hechas y las que no se hicieron, de la más
          reciente a la más antigua. Sirve para ver qué se cerró, quién lo hizo
          y cuándo.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>El buscador «Palabras del título».</li>
          <li>
            «Cómo terminó»: «Todas las cerradas», «Hechas», «No se hicieron»,
            «Perdieron su resultado» o «Cerradas automáticamente».
          </li>
          <li>
            «Filtro»: «Cerrada por», «Responsable», «Tipo de trámite» y «Fecha
            de cierre».
          </li>
        </ul>
        <p>
          Una tarea cerrada se abre igual que una abierta; desde su panel se
          puede reabrir.
        </p>
      </ArticleSection>
    </>
  );
}
