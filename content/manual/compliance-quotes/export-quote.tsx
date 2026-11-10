import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "exportar", title: "Exportar" },
  { id: "que-lleva", title: "Qué lleva cada archivo" },
  { id: "la-marca", title: "La marca de la agencia" },
  { id: "donde-queda", title: "Dónde queda guardado" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="exportar" title="Exportar">
        <p>
          Una cotización se exporta en PDF, para entregarla al cliente, o en
          Excel. Hace falta el permiso «Crear y editar cotizaciones de
          cumplimiento» y, como el archivo queda guardado en Documentos, también
          «Subir y editar documentos».
        </p>
        <Steps>
          <Step title="Guarda los cambios">
            <p>
              Con cambios sin guardar, «Exportar» queda desactivado: el archivo
              sale de lo guardado.
            </p>
          </Step>
          <Step title="Haz clic en «Exportar» y elige el formato">
            <p>
              El botón está en la barra de la ficha y ofrece «PDF» y «Excel».
              Mientras trabaja dice «Exportando…».
            </p>
            <Screenshot
              id="cotizaciones-de-cumplimiento/exportar"
              caption="El menú «Exportar» de una cotización, con sus dos formatos: «PDF» y «Excel»."
            />
          </Step>
          <Step title="Abre el archivo">
            <p>
              Al terminar, el aviso dice que el archivo quedó guardado en
              Documentos. En Nexus para Windows, el aviso ofrece además «Abrir»,
              que abre la copia de la carpeta de documentos del computador; en
              la web, el archivo se abre desde Documentos.
            </p>
          </Step>
        </Steps>
        <p>
          Se exporta en cualquier estado. El archivo se llama con el número de
          la cotización seguido del nombre del tomador. El agente también puede
          exportar una cotización, y el archivo que genera es el mismo.
        </p>
      </ArticleSection>

      <ArticleSection id="que-lleva" title="Qué lleva cada archivo">
        <ManualTable
          head={["Formato", "Qué lleva"]}
          rows={[
            [
              "PDF",
              "El título «Cotización de cumplimiento» o «Cotización de seriedad de la oferta», el número, el contrato, una tabla con los amparos y su prima, la prima neta, los gastos de expedición, el IVA, el total a pagar y las notas. Lleva el logo y el color de la agencia.",
            ],
            [
              "Excel",
              "Los mismos datos en una hoja, con los datos de la agencia arriba. Las primas, el IVA y el total son fórmulas que repiten las reglas de cálculo de la cotización.",
            ],
          ]}
        />
        <p>
          La cuenta de cada amparo que se lee en «Cómo se calculó» no sale en el
          PDF: es para quien cotiza.
        </p>
      </ArticleSection>

      <ArticleSection id="la-marca" title="La marca de la agencia">
        <p>
          El archivo toma de la agencia su nombre comercial, su razón social, su
          identificación, su teléfono, su correo y su sitio web, y en el PDF,
          además, el logo y el color de marca. Todo sale de Configuración →
          Perfil; lo que no está completo no aparece.
        </p>
        <Callout type="note">
          <p>
            El PDF solo incluye un logo en PNG o JPG. Con otro formato, o si el
            logo no se puede leer, la cotización se exporta sin logo, con el
            nombre de la agencia. Cómo se pone el logo está en{" "}
            <ArticleLink to="configuracion/datos-de-la-agencia" />.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="donde-queda" title="Dónde queda guardado">
        <p>
          Cada exportación se guarda como un documento de la agencia, vinculado
          al cliente de la cotización, y aparece en su carpeta de Documentos y
          en su ficha. Una cotización sin cliente queda en «Sin cliente».
        </p>
        <p>
          Exportar dos veces sin cambios no deja dos documentos: el aviso dice
          «Esa cotización ya se había exportado: es el mismo documento». Si
          cambiaste la cotización, el archivo es otro y se guarda como un
          documento nuevo.
        </p>
        <p>
          Eliminar la cotización no borra los documentos exportados. Cómo se
          organizan los documentos está en{" "}
          <ArticleLink to="documentos/explorador-de-documentos" />.
        </p>
      </ArticleSection>
    </>
  );
}
