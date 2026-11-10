import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-modulo", title: "El módulo Clientes" },
  { id: "las-vistas", title: "Las vistas" },
  { id: "las-columnas", title: "Qué dice cada fila" },
  { id: "buscar-y-filtrar", title: "Buscar y filtrar" },
  { id: "lo-que-propone-el-agente", title: "Lo que propone el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-modulo" title="El módulo Clientes">
        <p>
          Clientes está en el menú, dentro de «Cartera», junto a Pólizas y
          Cumplimiento. Lo ve quien tiene el permiso «Ver clientes». A la
          izquierda está el menú del módulo, con sus vistas; a la derecha, el
          listado.
        </p>
        <p>
          En la barra superior están las acciones, según los permisos de tu rol:
          «Reasignar varios», «Importar» y «Nuevo cliente». Al hacer clic en una
          fila se abre la ficha del cliente. En el celular, la barra deja a la
          vista «Nuevo cliente»; «Importar» y «Reasignar varios» están en «Más
          acciones», los tres puntos.
        </p>
        <Screenshot
          id="clientes/listado"
          caption="Clientes › Todos: el menú del módulo con sus vistas y los grupos «Conversión» y «Revisión», la barra con «Reasignar varios», «Importar» y «Nuevo cliente», y el listado con las columnas Nombre, Identificación, Responsable, Celular, Ciudad y Revisión; la primera fila es un prospecto, con su insignia bajo el nombre."
        />
      </ArticleSection>

      <ArticleSection id="las-vistas" title="Las vistas">
        <p>
          Cada vista del menú del módulo es el mismo listado con un filtro ya
          puesto. Las vistas de «Conversión» separan a los prospectos; las de
          «Revisión», lo que propuso o cambió el agente. «Por confirmar» y
          «Cambios del agente» llevan al lado cuántos clientes esperan.
        </p>
        <ManualTable
          head={["Vista", "Qué trae"]}
          rows={[
            ["Todos", "Todos los clientes de la agencia."],
            ["Míos", "Los clientes de los que eres responsable."],
            [
              "Sin responsable",
              "Los clientes que no tienen a nadie a cargo. La ve quien tiene el permiso «Reasignar cartera».",
            ],
            [
              "Prospectos",
              "En «Conversión». Quienes pidieron una cotización y aún no tienen pólizas.",
            ],
            [
              "No se convirtieron",
              "En «Conversión». Los prospectos marcados como «No se convirtió».",
            ],
            [
              "Por confirmar",
              "Los clientes que propuso el agente y que todavía no confirma una persona.",
            ],
            [
              "Cambios del agente",
              "Los clientes ya confirmados que el agente cambió y que nadie ha revisado.",
            ],
          ]}
        />
        <p>
          Qué es un prospecto y cómo pasa a cliente se explica en{" "}
          <ArticleLink to="clientes/prospectos" />.
        </p>
        <p>
          Bajo «Ajustes», «Plantilla» abre la plantilla de clientes, que define
          los datos de cada cliente. La ve quien tiene el permiso «Ver las
          plantillas»; se explica en{" "}
          <ArticleLink to="configuracion/plantillas-de-clientes" />.
        </p>
      </ArticleSection>

      <ArticleSection id="las-columnas" title="Qué dice cada fila">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Nombre» e «Identificación» están siempre. La identificación es la
            que distingue a un cliente: Nexus no guarda dos con la misma. Bajo
            el nombre de un prospecto va la insignia «Prospecto», o «No se
            convirtió» si se cerró sin compra; en las vistas de «Conversión» no
            se repite.
          </li>
          <li>
            «Responsable» es la persona del equipo que lleva al cliente, o «Sin
            responsable». En una ventana estrecha esta columna se oculta.
          </li>
          <li>
            Las columnas siguientes las elige la agencia en su plantilla de
            clientes. En la de la captura son «Celular» y «Ciudad».
          </li>
          <li>
            «Revisión» dice «Por confirmar» si el cliente lo propuso el agente y
            falta que una persona lo confirme, o «1 cambio», «2 cambios»… si el
            agente cambió datos que nadie ha revisado. Si no hay nada que
            revisar, queda vacía.
          </li>
        </ul>
        <p>
          El conteo de la derecha dice cuántos clientes hay a la vista. El
          listado carga los primeros 50; «Cargar más», al pie, trae los
          siguientes.
        </p>
      </ArticleSection>

      <ArticleSection id="buscar-y-filtrar" title="Buscar y filtrar">
        <p>
          El buscador encuentra por «Nombre o identificación». «Filtro» añade
          fichas de filtro: «Responsable», «Registro en Nexus» (la fecha en que
          el cliente entró a Nexus, con atajos de fechas) y los campos que la
          plantilla marca como filtro. Lo que la vista ya fija no se ofrece otra
          vez.
        </p>
        <p>
          «Limpiar» quita el buscador y las fichas; la vista elegida se queda.
          Si nada coincide, el listado dice «Ningún cliente coincide con la
          búsqueda» o «Ningún cliente coincide con estos filtros».
        </p>
        <Callout type="note">
          <p>
            Una búsqueda por texto trae los resultados de una vez, sin «Cargar
            más». Si encuentra más de los que caben, el pie lo dice y pide
            afinar la búsqueda o añadir un filtro.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="lo-que-propone-el-agente"
        title="Lo que propone el agente"
      >
        <p>
          Los clientes que registra el agente entran «Por confirmar» o
          confirmados, según cómo supervise la agencia. En la vista «Por
          confirmar», quien tiene el permiso «Editar clientes» ve «Confirmar
          varios»: marca los clientes y confírmalos de una vez. En «Cambios del
          agente», «Revisar varios» da por revisados los cambios de los que
          marques.
        </p>
        <p>
          Cómo se revisa cada propuesta se explica en{" "}
          <ArticleLink to="agente/por-confirmar" />.
        </p>
      </ArticleSection>
    </>
  );
}
