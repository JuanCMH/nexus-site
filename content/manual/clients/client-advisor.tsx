import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es el responsable" },
  { id: "cambiar-uno", title: "Cambiar el responsable de un cliente" },
  { id: "reasignar-varios", title: "Reasignar varios clientes" },
  { id: "que-recibe", title: "Qué recibe el responsable" },
  { id: "el-agente", title: "Cuando lo cambia el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es el responsable">
        <p>
          El responsable de un cliente es la persona del equipo que lo lleva. No
          es un campo de la plantilla: es una persona de la agencia, o ninguna
          («Sin responsable»). El agente no puede ser responsable.
        </p>
        <p>
          Un cliente nace sin responsable, también el que se importa desde
          Excel: Nexus no lo adivina. Se ve en la ficha del cliente, en la
          columna «Responsable» de Clientes y en la tarjeta «Cliente» de cada
          póliza. «Responsable» es también un filtro de Clientes y de Pólizas.
        </p>
        <p>
          Cambiarlo pide el permiso «Reasignar cartera». El propietario y los
          administradores lo tienen siempre; para los demás roles se concede (
          <ArticleLink to="configuracion/roles-y-permisos" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="cambiar-uno"
        title="Cambiar el responsable de un cliente"
      >
        <Steps>
          <Step title="Abre la ficha del cliente">
            <p>
              El bloque «Responsable» está en la columna de la izquierda, bajo
              los accesos.
            </p>
          </Step>
          <Step title="Haz clic en el lápiz">
            <p>
              Junto al nombre del responsable está el botón «Cambiar el
              responsable». Sin el permiso «Reasignar cartera», el responsable
              se lee pero el botón no aparece.
            </p>
          </Step>
          <Step title="Elige a la persona">
            <p>
              El selector busca en el equipo («Buscar en el equipo…»). Elige a
              una persona, o «Sin responsable» para dejar al cliente sin nadie a
              cargo. El cambio se guarda al elegir y aparece «Responsable
              actualizado».
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="reasignar-varios" title="Reasignar varios clientes">
        <p>
          Para pasar una cartera de una persona a otra, o repartir los clientes
          sin responsable, se reasignan varios a la vez desde el listado.
        </p>
        <Steps>
          <Step title="Elige la vista o el filtro">
            <p>
              Por ejemplo, la vista «Sin responsable», o el filtro «Responsable»
              con la persona que deja la cartera. La selección se hace entre los
              clientes que están a la vista.
            </p>
          </Step>
          <Step title="Haz clic en «Reasignar varios»">
            <p>
              Aparece una casilla en cada fila y, en la barra del listado,
              «Elige los clientes por reasignar». La casilla del encabezado
              marca todos los que están a la vista. En el celular, si tu rol
              también crea clientes, «Reasignar varios» está en «Más acciones»,
              los tres puntos de la barra.
            </p>
          </Step>
          <Step title="Marca los clientes y elige a quién">
            <p>
              La barra cuenta los que vas marcando («2 clientes seleccionados»).
              En el selector de al lado, elige a la persona o «Sin responsable».
            </p>
            <Screenshot
              id="clientes/reasignar-varios"
              caption="«Reasignar varios» en Clientes: dos clientes marcados, la barra dice «2 clientes seleccionados» y trae el selector del responsable, «Cancelar» y «Reasignar»."
            />
          </Step>
          <Step title="Haz clic en «Reasignar»">
            <p>
              Nexus dice cuántos cambió («2 clientes reasignados»). «Cancelar»
              sale de la selección sin cambiar nada.
            </p>
          </Step>
        </Steps>
        <p>
          La bitácora registra cada reasignación: a quién pasaron los clientes o
          que quedaron sin responsable.
        </p>
      </ArticleSection>

      <ArticleSection id="que-recibe" title="Qué recibe el responsable">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Sus clientes y sus pólizas.</strong>{" "}
            Los clientes que lleva salen en Clientes › Míos, y sus pólizas, en
            Pólizas › De mis clientes. Las pólizas del cliente toman su
            responsable, también las que se registran después: el formulario de
            la póliza lo dice («La póliza queda a cargo de…»).
          </li>
          <li>
            <strong className="font-medium">
              Las tareas que Nexus abre sobre ellos.
            </strong>{" "}
            Una tarea que Nexus abre por su cuenta sobre el cliente o sobre una
            de sus pólizas, como las de renovación, queda a cargo del
            responsable, antes que las reglas de reparto (
            <ArticleLink to="tareas/plazos-y-tareas-automaticas" />
            ).
          </li>
        </ul>
        <Callout type="note">
          <p>
            Ser responsable no cambia los permisos. Lo que una persona puede ver
            o editar de un cliente lo decide su rol.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="el-agente" title="Cuando lo cambia el agente">
        <p>
          El agente puede dejar el responsable al proponer un cliente y cambiar
          el de uno ya confirmado, si su permiso lo incluye. Cuando lo cambia,
          Nexus avisa al responsable nuevo («Ahora eres responsable de…») y al
          anterior («… ya no está a tu cargo»). El cambio queda en la bitácora
          con el agente como autor.
        </p>
      </ArticleSection>
    </>
  );
}
