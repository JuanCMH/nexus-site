import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es Documentos" },
  { id: "el-menu", title: "El menú del módulo" },
  { id: "carpetas", title: "Las carpetas" },
  { id: "un-documento", title: "Un documento" },
  { id: "buscar", title: "Buscar y cambiar la vista" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es Documentos">
        <p>
          Documentos guarda los archivos de la agencia: pólizas, anexos,
          cédulas, cotizaciones exportadas, lo que llega por correo. La pantalla
          enseña la carpeta de la agencia tal como Nexus la ordena: una carpeta
          por cliente y, dentro, una por póliza. Es igual en la web y en la
          aplicación para Windows.
        </p>
        <p>
          Para ver Documentos, tu rol necesita el permiso «Ver documentos». Si
          tu rol no ve los clientes, no aparecen las carpetas de clientes ni de
          pólizas.
        </p>
      </ArticleSection>

      <ArticleSection id="el-menu" title="El menú del módulo">
        <ManualTable
          head={["Entrada", "Qué abre"]}
          rows={[
            ["Carpeta de la agencia", "La carpeta raíz, con todas las demás."],
            ["Recientes", "Los documentos guardados hace menos tiempo."],
            [
              "Información de la agencia",
              "Lo que es de la agencia y no de un cliente. Sus carpetas propias aparecen debajo.",
            ],
            [
              "Sin cliente",
              "Los documentos que no son de ningún cliente ni tienen carpeta de la agencia. La cifra dice cuántos hay.",
            ],
            [
              "Clases",
              "Una entrada por cada clase de documento de la agencia, con su color y su cifra. Solo si la agencia tiene clases.",
            ],
            [
              "Sin clase",
              "Los documentos que aún no tienen clase. Solo si la agencia tiene clases.",
            ],
            [
              "Contenido por revisar",
              "Los documentos cuyo contenido no es del tipo que dice su nombre. Solo aparece si hay alguno.",
            ],
            [
              "Carpetas de origen",
              "El archivo que la agencia tenía antes de Nexus, en la nube o en un computador. Va en el grupo «Ajustes».",
            ],
            [
              "Organización",
              "Las clases, las carpetas de la agencia y el orden de la carpeta. Va en el grupo «Ajustes».",
            ],
          ]}
        />
        <p>
          En la aplicación para Windows, el propietario ve además «Este
          computador», que lleva a la carpeta de documentos de su computador (
          <ArticleLink to="documentos/carpeta-en-el-computador" />
          ). Las carpetas de origen se explican en{" "}
          <ArticleLink to="documentos/carpetas-de-origen" />.
        </p>
      </ArticleSection>

      <ArticleSection id="carpetas" title="Las carpetas">
        <p>
          Arriba están las carpetas, como tarjetas: cada una dice cuántas
          subcarpetas y cuántos documentos tiene. Un clic la abre, y las migas
          de la barra superior llevan de vuelta.
        </p>
        <p>
          La carpeta de un cliente o de una póliza sigue a su dueño: lo que se
          vincula a él llega a ella sin moverlo a mano. Al pie de la carpeta,
          «Abrir la ficha del cliente» o «Abrir la ficha de la póliza» lleva a
          su ficha.
        </p>
        <p>
          Dentro de «Información de la agencia» hay carpetas de Nexus.
          «Informes» y «Correos enviados» guardan documentos y se abren como
          cualquier otra. «Referencias», «Logo» y «Estados de cuenta» no son
          documentos: la tarjeta lleva a la pantalla donde se llevan.
        </p>
      </ArticleSection>

      <ArticleSection id="un-documento" title="Un documento">
        <p>
          Al elegir un documento, se abre a la derecha con su vista previa,
          «Abrir», «Descargar» y sus datos: «Cliente», «Póliza», «Clase»,
          «Tamaño», «Guardado» y, al final, «En la carpeta», la ruta que tiene
          en la carpeta de la agencia. Lo que guardó el agente lleva la marca
          «Guardado por el agente». En una ventana estrecha, el documento se
          abre en un panel lateral.
        </p>
        <Screenshot
          id="documentos/explorador"
          caption="Documentos, en la carpeta de una póliza: el menú del módulo con las carpetas, las clases, «Revisión» y, bajo «Ajustes», «Carpetas de origen» y «Organización»; y el documento elegido a la derecha, con «Abrir», «Descargar», su cliente, su póliza, su clase y su ruta en la carpeta."
        />
        <p>
          El botón de los tres puntos, «Más acciones», tiene «Renombrar» y
          «Clasificar» si tu rol puede «Subir y editar documentos», y «Eliminar»
          si puede «Eliminar documentos». Eliminar pide confirmarlo y no se
          puede deshacer: el documento sale de Nexus y de la carpeta del
          computador.
        </p>
        <Callout type="note">
          <p>
            En la aplicación para Windows, «Abrir» usa la copia de la carpeta
            del computador cuando este la tiene, y «Mostrar en la carpeta» la
            señala en el explorador de Windows. En la web y en los demás
            computadores, el documento se abre desde la nube.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="buscar" title="Buscar y cambiar la vista">
        <p>
          El buscador dice dónde busca: «Buscar en todos los documentos» en la
          raíz, o «Buscar en» y el nombre de la carpeta abierta. Buscar en una
          carpeta busca también en todas sus subcarpetas, y encuentra las
          carpetas que llevan el texto en su nombre: así se llega a un cliente
          sin abrir su carpeta.
        </p>
        <p>
          A la derecha del buscador, «Ver en lista» y «Ver en cuadrícula»
          cambian cómo se enseñan los documentos. En la cuadrícula, una imagen
          se ve en miniatura.
        </p>
        <p>
          Cómo se suben los archivos está en{" "}
          <ArticleLink to="documentos/subir-y-vincular" />.
        </p>
      </ArticleSection>
    </>
  );
}
