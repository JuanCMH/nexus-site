import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "adjuntar", title: "Adjuntar documentos" },
  { id: "a-quien-queda-vinculado", title: "A quién queda vinculado" },
  { id: "renombrar", title: "Renombrar" },
  { id: "contenido-por-revisar", title: "Contenido por revisar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="adjuntar" title="Adjuntar documentos">
        <Video id="documentos/adjuntar-y-vincular" />
        <p>
          Para subir archivos, tu rol necesita el permiso «Subir y editar
          documentos». El botón es «Adjuntar» en Documentos, en el bloque
          «Documentos» de la ficha de un cliente o de una póliza, y en una
          tarea.
        </p>
        <Steps>
          <Step title="Haz clic en «Adjuntar»">
            <p>
              Se abre «Adjuntar documentos». Bajo el título, una línea dice
              dónde van a quedar los archivos.
            </p>
          </Step>
          <Step title="Elige los archivos">
            <p>
              Arrástralos a la ventana o haz clic en ella para elegirlos. Se
              admiten PDF, imágenes y archivos de Office, hasta 25 MB cada uno;
              un archivo más grande no se adjunta y Nexus lo avisa. Lo elegido
              se lista antes de subir, y cada archivo se puede quitar de la
              lista.
            </p>
            <Screenshot
              id="documentos/adjuntar"
              caption="La ventana «Adjuntar documentos» abierta desde la carpeta de un cliente: la línea «Se vinculan a…», el área para arrastrar archivos y dónde se guarda la copia."
            />
          </Step>
          <Step title="Elige la clase, si la agencia tiene clases">
            <p>
              El campo «Clase» aparece cuando la agencia tiene clases de
              documento, y vale para todos los archivos elegidos.
            </p>
          </Step>
          <Step title="Haz clic en «Adjuntar»">
            <p>Nexus dice «Documento adjuntado» o cuántos se adjuntaron.</p>
          </Step>
        </Steps>
        <p>
          En el celular, la ventana tiene además «Tomar foto»: la foto se guarda
          con la fecha y la hora en que se tomó, como{" "}
          <code className="font-mono text-sm">
            Foto 2026-10-29 10.42.15.jpg
          </code>
          .
        </p>
      </ArticleSection>

      <ArticleSection
        id="a-quien-queda-vinculado"
        title="A quién queda vinculado"
      >
        <p>
          Un documento queda vinculado según desde dónde se adjunta, y su
          carpeta sale de ese vínculo:
        </p>
        <ManualTable
          head={["Desde", "Dónde queda"]}
          rows={[
            [
              "La ficha de una póliza, o su carpeta en Documentos",
              "Vinculado a la póliza y a su cliente, en la carpeta de la póliza.",
            ],
            [
              "La ficha de un cliente, o su carpeta en Documentos",
              "Vinculado al cliente, en su carpeta.",
            ],
            [
              "Una carpeta de la agencia",
              "En esa carpeta, dentro de «Información de la agencia».",
            ],
            [
              "Una tarea",
              "En la lista de documentos de la tarea y vinculado a su cliente o a su póliza. Sin cliente ni póliza, con los informes de la agencia.",
            ],
            ["Documentos, en la raíz", "Sin vincular, en «Sin cliente»."],
          ]}
        />
        <p>
          La línea bajo «Adjuntar documentos» lo dice antes de subir: «Se
          vinculan a la póliza…», «Se guardan en la agencia sin vincular» o «Se
          guardan en la carpeta… de la agencia».
        </p>
        <p>
          Un documento que quedó en «Sin cliente» se puede llevar a una carpeta
          de la agencia con «Clasificar o mover», en el menú «Más acciones» del
          documento. Vincularlo después a un cliente o a una póliza lo hace el
          agente, que puede vincular un documento ya guardado; Nexus lo lleva
          entonces a la carpeta de su dueño.
        </p>
        <Callout type="note">
          <p>
            La pantalla no pide la carpeta de un documento de un cliente: la
            pone el orden de la carpeta de la agencia, que se explica en{" "}
            <ArticleLink to="documentos/clases-y-carpetas" />.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="renombrar" title="Renombrar">
        <p>
          «Renombrar», en el menú «Más acciones» del documento, abre «Renombrar
          documento» con su «Nombre». Si escribes el nombre sin extensión,
          conserva la que tenía. El cambio renombra también su copia en la
          carpeta de la agencia; Nexus dice «Documento renombrado».
        </p>
      </ArticleSection>

      <ArticleSection id="contenido-por-revisar" title="Contenido por revisar">
        <p>
          Al guardar un archivo, Nexus compara su contenido con el tipo que dice
          su nombre. Un archivo llamado{" "}
          <code className="font-mono text-sm">.pdf</code> que no es un PDF, o un
          programa con otro nombre, no se rechaza ni se borra: se guarda y queda
          marcado.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Al adjuntarlo, el aviso dice que quedó guardado pero que su
            contenido no corresponde al tipo de archivo, y pide revisarlo.
          </li>
          <li>
            En su fila se lee «Contenido por revisar» y, al elegirlo, «El
            contenido no corresponde a un archivo .pdf. Revísalo antes de
            abrirlo: no se puede adjuntar a un correo.»
          </li>
          <li>
            El menú de Documentos enseña «Contenido por revisar», con su cifra,
            mientras haya alguno.
          </li>
        </ul>
        <Callout type="warning">
          <p>
            Un documento marcado no se puede adjuntar a un correo. Revisa el
            archivo antes de abrirlo y, si no es lo que dice ser, elimínalo y
            adjunta el correcto.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
