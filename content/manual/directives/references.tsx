import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-una-referencia", title: "Qué es una referencia" },
  { id: "subir-una-referencia", title: "Subir una referencia" },
  { id: "la-ficha", title: "La ficha de una referencia" },
  { id: "referencias-en-un-flujo", title: "Referencias en un flujo" },
  { id: "propuestas-y-archivo", title: "Propuestas y archivadas" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-una-referencia" title="Qué es una referencia">
        <p>
          Una referencia es un archivo modelo de la agencia que el agente usa en
          sus trabajos: el comparativo de renovación como le gusta a la agencia,
          la hoja membrete, el logo. No es un documento de un cliente ni de una
          póliza.
        </p>
        <p>Cada referencia tiene un uso, que el agente trata distinto:</p>
        <ManualTable
          head={["Uso", "Qué hace el agente"]}
          rows={[
            [
              "«Modelo a seguir»",
              "Se mira y se imita. Su contenido no se copia: los nombres, las cifras y las fechas son de un ejemplo.",
            ],
            [
              "«Archivo base»",
              "Se usa tal cual: el agente trabaja sobre una copia y conserva lo que trae, como el encabezado, el pie, los márgenes y el logo.",
            ],
          ]}
        />
        <p>
          Están en Directrices → Referencias, agrupadas por uso. Todo el equipo
          las ve; subirlas, editarlas, reemplazar su archivo, archivarlas y
          confirmar las que propone el agente pide el permiso «Llevar las
          referencias».
        </p>
        <Screenshot
          id="directrices/referencias"
          caption="Directrices → Referencias: los modelos a seguir y los archivos base vigentes de la agencia."
        />
      </ArticleSection>

      <ArticleSection id="subir-una-referencia" title="Subir una referencia">
        <Steps>
          <Step title="Haz clic en «Nueva referencia»">
            <p>Está arriba a la derecha de la lista.</p>
          </Step>
          <Step title="Completa nombre y uso">
            <p>
              El «Nombre» es como la verán el equipo y el agente. En «Uso»,
              «Modelo a seguir» o «Archivo base».
            </p>
          </Step>
          <Step title="Di cuándo y cómo usarla">
            <p>
              «Cuándo usarla» es una frase: el agente la lee en cada trabajo
              para decidir si aplica. «Cómo usarla» dice qué respetar y qué no
              copiar; con una buena nota, el agente no abre el archivo cada vez.
            </p>
          </Step>
          <Step title="Elige el archivo">
            <p>
              Un PDF, un Word, un Excel, un PowerPoint o una imagen (PNG, JPG,
              WebP, SVG).
            </p>
          </Step>
          <Step title="Haz clic en «Añadir referencia»">
            <p>El agente la tiene disponible desde ese momento.</p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="la-ficha" title="La ficha de una referencia">
        <p>
          Al abrir una referencia se ven su «Uso», su archivo con la versión, su
          «Origen» y cuántos flujos la nombran. Debajo, «Cuándo usarla» y «Cómo
          usarla», el archivo para descargar, los «Flujos que la usan» y el
          «Historial» de cada archivo que ha tenido.
        </p>
        <Screenshot
          id="directrices/referencia-ficha"
          caption="La ficha de «Hoja membrete»: archivo base, cuándo y cómo usarla, el archivo y su historial."
        />
        <p>
          «Editar» cambia el nombre, el uso y las notas. «Reemplazar archivo»
          sube otro: el agente usa el nuevo desde ese momento en todos los
          flujos que nombran la referencia, y el anterior queda en el historial.
        </p>
      </ArticleSection>

      <ArticleSection
        id="referencias-en-un-flujo"
        title="Referencias en un flujo"
      >
        <p>
          Un flujo puede nombrar las referencias que usa, hasta 15, y el agente
          las recibe con él. Se eligen al editar el flujo, en la pestaña
          «Datos», tarjeta «Referencias»; en los pasos, se nombran como se leen
          ahí. La ficha del flujo las enseña en la pestaña «Pasos».
        </p>
        <p>
          Una referencia que ningún flujo nombra también la usa el agente: la ve
          en su lista y la aplica cuando el trabajo casa con «Cuándo usarla».
        </p>
      </ArticleSection>

      <ArticleSection id="propuestas-y-archivo" title="Propuestas y archivadas">
        <p>
          El agente puede proponer una referencia, y también una persona con el
          permiso «Proponer cambios en la configuración». Lo propuesto aparece
          en «Por confirmar», arriba de la lista, y el agente no lo usa hasta
          que alguien lo confirma.
        </p>
        <p>
          Desde el menú «Más acciones» de la ficha, «Archivar» hace que el
          agente deje de verla y de usarla. Si algún flujo la nombra, Nexus lo
          advierte: el agente seguirá esos flujos sin ella y lo dirá en su
          resumen. El filtro «Archivadas» la enseña, y «Recuperar» la vuelve a
          activar.
        </p>
        <Callout type="note">
          <p>
            Las referencias son archivos para el agente. Los documentos de los
            clientes y las pólizas se guardan en Documentos.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
