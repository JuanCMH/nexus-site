import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-modulo", title: "El módulo Pólizas" },
  { id: "las-vistas", title: "Las vistas" },
  { id: "las-columnas", title: "Qué dice cada fila" },
  { id: "buscar-y-filtrar", title: "Buscar y filtrar" },
  { id: "lo-que-propone-el-agente", title: "Lo que propone el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-modulo" title="El módulo Pólizas">
        <p>
          Pólizas está en el menú, dentro de «Cartera». Lo ve quien tiene el
          permiso «Ver pólizas». A la izquierda, el menú del módulo agrupa las
          vistas en «Seguimiento», «Estado» y «Revisión»; a la derecha está el
          listado. En la barra superior, según tu rol, «Importar» y «Nueva
          póliza». En el celular, «Importar» está en «Más acciones», los tres
          puntos.
        </p>
        <Screenshot
          id="polizas/listado"
          caption="Pólizas › Todas: el menú con las vistas de Seguimiento (con «No renovables»), Estado y Revisión, y el listado con las columnas Póliza, Cliente, Estado, Fin de vigencia, Prima total y Revisión. Las dos primeras filas son una RCE «Derivada de 21-44-101962318» y su cumplimiento, «Principal · 1 derivada»."
        />
      </ArticleSection>

      <ArticleSection id="las-vistas" title="Las vistas">
        <p>
          Cada vista es el mismo listado con un filtro puesto. «Necesitan
          atención», «Por confirmar» y «Cambios del agente» llevan al lado
          cuántas pólizas esperan.
        </p>
        <ManualTable
          head={["Vista", "Qué trae"]}
          rows={[
            ["Todas", "Todas las pólizas de la agencia."],
            [
              "De mis clientes",
              "Las pólizas de los clientes de los que eres responsable.",
            ],
            [
              "Necesitan atención",
              "Las vencidas sin renovar y las que vencen dentro de los días de aviso de la plantilla de pólizas.",
            ],
            [
              "Por vencer",
              "Las vigentes que terminan dentro de los días de aviso de la plantilla.",
            ],
            [
              "No renovables",
              "Las de ramos que no se renuevan, como cumplimiento, y las derivadas de otra póliza, como la RCE de un cumplimiento. Incluye las que ya terminaron.",
            ],
            ["Vigentes", "Las que están en su vigencia."],
            ["Por iniciar", "Las que tienen la vigencia por empezar."],
            [
              "Vencidas",
              "Las renovables cuya vigencia ya terminó. Las no renovables que terminaron están en «No renovables».",
            ],
            ["Canceladas", "Las que se cancelaron."],
            [
              "Por confirmar",
              "Las que propuso el agente y que todavía no confirma una persona.",
            ],
            [
              "Cambios del agente",
              "Las ya confirmadas que el agente cambió y que nadie ha revisado.",
            ],
          ]}
        />
        <p>
          Los días de aviso son los del campo «Fin de vigencia» de la plantilla
          de pólizas; de serie, 30 (
          <ArticleLink to="configuracion/plantillas-de-polizas" />
          ). Cómo se resuelve una póliza que pide atención se explica en{" "}
          <ArticleLink to="polizas/cancelar-o-cerrar-una-poliza" />. Una póliza
          no renovable no pide atención: termina con su vigencia (
          <ArticleLink to="polizas/polizas-derivadas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="las-columnas" title="Qué dice cada fila">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Póliza»: el número y, debajo, el ramo y la aseguradora. Si la
            póliza deriva de otra, esa línea empieza por «Derivada de» y el
            número y el ramo de la principal; si otras derivan de ella, por
            «Principal · 1 derivada» o «Principal · N derivadas».
          </li>
          <li>«Cliente»: el nombre del cliente.</li>
          <li>
            «Estado»: «Vigente», «Por iniciar», «Vencida» o «Cancelada». Una
            póliza que no se renueva y ya pasó su fin dice «Terminada», en gris.
            Una póliza cerrada lleva también su cierre, como «Renovada».
          </li>
          <li>
            «Fin de vigencia»: la fecha y, si la póliza vigente está dentro de
            los días de aviso, cuántos días faltan.
          </li>
          <li>
            Las columnas que la agencia elige en su plantilla de pólizas. En la
            de la captura, «Prima total».
          </li>
          <li>
            «Revisión»: «Por confirmar», o «1 cambio», «2 cambios»… si el agente
            cambió datos que nadie ha revisado.
          </li>
        </ul>
        <p>
          Al hacer clic en una fila se abre la ficha de la póliza (
          <ArticleLink to="polizas/ficha-de-la-poliza" />
          ). El listado carga las primeras 50 y trae las siguientes con «Cargar
          más».
        </p>
      </ArticleSection>

      <ArticleSection id="buscar-y-filtrar" title="Buscar y filtrar">
        <p>
          El buscador encuentra por «Número, cliente o identificación». «Filtro»
          añade fichas: «Responsable», «Cliente», «Aseguradora», «Ramo»,
          «Renovación» («Renovables» o «No renovables»), «Derivadas» («Solo
          derivadas» o «Sin derivadas»), cuatro fechas («Vencimiento», «Inicio
          de vigencia», «Expedición» y «Registro en Nexus», con atajos) y los
          campos que la plantilla marca como filtro. «Limpiar» quita el buscador
          y las fichas; la vista se queda.
        </p>
        <Callout type="tip">
          <p>
            Desde la ficha de un cliente, «Ver en el listado» abre Pólizas con
            el filtro «Cliente» puesto.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="lo-que-propone-el-agente"
        title="Lo que propone el agente"
      >
        <p>
          En «Por confirmar», quien tiene el permiso «Editar pólizas» ve
          «Confirmar varias»; en «Cambios del agente», «Revisar varias». Las dos
          marcan las pólizas que están a la vista y las resuelven de una vez.
          Cómo se revisa cada una se explica en{" "}
          <ArticleLink to="agente/por-confirmar" />.
        </p>
      </ArticleSection>
    </>
  );
}
