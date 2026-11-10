import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es una carpeta de origen" },
  { id: "registrar", title: "Registrar una carpeta" },
  { id: "cada-carpeta", title: "Lo que dice cada carpeta" },
  { id: "lo-que-se-trajo", title: "Ver lo que se trajo" },
  { id: "propuestas", title: "Carpetas que propone el agente" },
  { id: "retirar-o-quitar", title: "Retirar o quitar una carpeta" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es una carpeta de origen">
        <p>
          Una carpeta de origen es el archivo que la agencia tenía antes de
          Nexus: una carpeta de Google Drive, OneDrive, SharePoint o Dropbox, o
          una carpeta de un computador. Se registra en Documentos → «Carpetas de
          origen», en el grupo «Ajustes» del menú del módulo. La pantalla lo
          describe así: «El archivo que la agencia tenía antes de Nexus. El
          agente busca en ellas y trae a Nexus lo que sirve; las carpetas no se
          cambian. Cuando una pasada completa no encuentra nada nuevo, queda
          lista para retirar.»
        </p>
        <p>
          La pantalla la ve todo el que tiene «Ver documentos». Registrar,
          editar, confirmar, retirar y quitar carpetas pide el permiso
          «Organizar documentos».
        </p>
        <p>
          Lo que el agente trae queda en Documentos como cualquier otro
          documento, vinculado a su cliente o a su póliza. La próxima vez que se
          busca, ya está en Nexus.
        </p>
        <Callout type="note">
          <p>
            Nexus nunca mueve, cambia ni borra nada en una carpeta de origen:
            solo lee y trae copias.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="registrar" title="Registrar una carpeta">
        <Video id="documentos/carpetas-de-origen" />
        <Steps>
          <Step title="Haz clic en «Añadir carpeta»">
            <p>
              Arriba a la derecha o, si la agencia aún no tiene ninguna, en el
              centro de la pantalla. Se abre «Añadir carpeta de origen».
            </p>
          </Step>
          <Step title="Escribe su «Nombre»">
            <p>
              Un nombre para reconocerla, como «Archivo de pólizas». Es
              obligatorio.
            </p>
          </Step>
          <Step title="Elige «Dónde está»">
            <p>
              «En la nube» pide el «Enlace de la carpeta»: «Google Drive,
              OneDrive, SharePoint o Dropbox. El agente la recorre con su propio
              conector.» «En un computador» pide la «Carpeta», que se elige con
              «Elegir…».
            </p>
          </Step>
          <Step title="Describe «Cómo está ordenada»">
            <p>
              Opcional. «Lo lee el agente para buscar: qué carpetas hay y qué
              lleva el nombre de cada archivo.» Por ejemplo: «Una carpeta por
              cliente y, dentro, una por póliza con la carátula y los anexos.»
            </p>
          </Step>
          <Step title="Haz clic en «Registrar carpeta»">
            <p>Nexus dice «Carpeta registrada».</p>
          </Step>
        </Steps>
        <p>
          Una carpeta de un computador se elige desde ese computador, en la
          aplicación para Windows. En la web, «En un computador» solo avisa «Una
          carpeta de un computador se elige desde ese computador, en Nexus
          instalado.». Para que el agente la recorra, ese computador tiene que
          estar encendido y con Nexus abierto (
          <ArticleLink to="configuracion/este-computador" />
          ).
        </p>
        <p>
          «Editar», en el menú «Más acciones» de la carpeta, abre «Editar
          carpeta de origen» con los mismos datos y «Guardar cambios». La ruta
          de una carpeta de un computador solo se cambia desde ese computador.
        </p>
      </ArticleSection>

      <ArticleSection id="cada-carpeta" title="Lo que dice cada carpeta">
        <p>
          Cada fila dice el nombre de la carpeta, su estado, dónde está (el
          servicio y el enlace, o la ruta y el computador), cómo está ordenada y
          cuánto se ha traído: «12 traídos · 3 ya estaban · 5 descartados ·
          última pasada …» («pasada en curso» mientras el agente la recorre), o
          «Todavía no se ha traído nada».
        </p>
        <ManualTable
          head={["Estado", "Qué significa"]}
          rows={[
            [
              "«En uso»",
              "Registrada; el agente aún no ha traído nada de ella.",
            ],
            [
              "«Trayendo»",
              "El agente ya empezó a recorrerla y a anotar lo que trae, ya estaba o descarta.",
            ],
            [
              "«Lista para retirar»",
              "Una pasada completa no encontró nada nuevo: lo que servía ya está en Nexus.",
            ],
            ["«Retirada»", "El agente ya no busca en ella."],
            [
              "«Computador apagado»",
              "La carpeta está en un computador que ahora no tiene Nexus abierto.",
            ],
          ]}
        />
        <Screenshot
          id="documentos/carpetas-de-origen"
          caption="Documentos → «Carpetas de origen»: una carpeta en Google Drive «Trayendo», con 3 traídos, 1 que ya estaba y 1 descartado en la pasada en curso, y una en SharePoint «Lista para retirar», cada una con su enlace y cómo está ordenada."
        />
      </ArticleSection>

      <ArticleSection id="lo-que-se-trajo" title="Ver lo que se trajo">
        <p>
          Un clic en el nombre de la carpeta, o «Ver lo que se trajo» en su menú
          «Más acciones», abre su detalle. Arriba, las cifras «Traídos», «Ya
          estaban», «Descartados» y «En la última pasada»; debajo, cada archivo
          con su ruta en la carpeta, lo que pasó con él, la póliza o el cliente
          donde quedó y la fecha.
        </p>
        <ManualTable
          head={["El archivo dice", "Qué significa"]}
          rows={[
            ["«Traído a Nexus»", "Se guardó una copia en Documentos."],
            ["«Ya estaba en Nexus»", "Nexus ya tenía ese documento."],
            ["«Descartado»", "No servía para Nexus."],
          ]}
        />
        <p>
          «Más recientes» y «Más antiguos» pasan de una página a otra. Sin nada
          traído, el detalle dice «Todavía no se ha traído nada de esta
          carpeta».
        </p>
      </ArticleSection>

      <ArticleSection id="propuestas" title="Carpetas que propone el agente">
        <p>
          Si alguien le dice al agente dónde guarda la agencia su archivo en la
          nube, el agente puede proponer la carpeta. Aparece con la marca
          «Propuesta por el agente» y no se usa hasta que una persona con
          «Organizar documentos» hace clic en «Confirmar»: Nexus dice «Carpeta
          confirmada: el agente ya puede usarla». «Descartar», en su menú, deja
          la propuesta sin efecto; la carpeta, donde esté, no se toca.
        </p>
      </ArticleSection>

      <ArticleSection
        id="retirar-o-quitar"
        title="Retirar o quitar una carpeta"
      >
        <ManualTable
          head={["En el menú «Más acciones»", "Qué pasa"]}
          rows={[
            [
              "«Marcar como retirada»",
              "«Carpeta retirada: el agente ya no busca en ella». Lo que se trajo sigue en Nexus.",
            ],
            [
              "«Volver a usar»",
              "En una carpeta retirada: «La carpeta vuelve a usarse».",
            ],
            [
              "«Quitar de Nexus»",
              "«Nexus deja de saber dónde está y olvida lo que anotó de ella. Los documentos que se trajeron siguen en Nexus, y la carpeta, donde esté, no se toca.»",
            ],
          ]}
        />
        <p>
          Cuando una carpeta dice «Lista para retirar», la agencia decide si la
          marca como retirada. Los cambios quedan en la bitácora, en el módulo
          «Carpetas de origen» (<ArticleLink to="configuracion/bitacora" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
