import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es «Lo que sabemos»" },
  { id: "escribir", title: "Escribir una nota" },
  { id: "persona-o-cargo", title: "Sobre la persona o sobre el cargo" },
  { id: "cada-nota", title: "Lo que dice cada nota" },
  { id: "archivar", title: "Corregir y archivar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es «Lo que sabemos»">
        <p>
          «Lo que sabemos» es el bloque de notas de la ficha de un contacto y de
          la de una empresa de contacto. Guarda lo que la agencia aprendió de
          esa persona o esa empresa: cómo trabaja, qué pide, por dónde responde.
          El agente lo lee entero antes de escribirle o pedirle algo.
        </p>
        <Screenshot
          id="contactos/lo-que-sabemos"
          caption="«Lo que sabemos» de Mariana Valencia Ruiz: una nota que propuso el agente, «Por confirmar», con el botón «Confirmar», y una nota vigente que escribió una persona."
        />
        <p>
          La cifra junto al título cuenta las notas vigentes. Si no hay ninguna,
          el bloque dice «Aún no hay notas sobre …: cómo trabaja, qué pide, por
          dónde responde.».
        </p>
        <Callout type="note">
          <p>
            Lo que la agencia sabe de una aseguradora no va aquí: son las notas
            de la aseguradora, en su ficha de «Configuración → Aseguradoras» (
            <ArticleLink to="configuracion/aseguradoras" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="escribir" title="Escribir una nota">
        <Steps>
          <Step title="Haz clic en «Nueva nota»">
            <p>En el bloque «Lo que sabemos» de la ficha.</p>
          </Step>
          <Step title="Escribe la «Nota»">
            <p>
              Una idea por nota, y solo de trabajo: «Para expedir cumplimiento
              pide el contrato firmado y el SARLAFT del tomador». Bajo el campo,
              un contador lleva la cuenta hasta 600 caracteres.
            </p>
          </Step>
          <Step title="Elige «Sobre»">
            <p>
              «Sobre la persona» o «Sobre el cargo». Solo en las notas de un
              contacto; las de una empresa no lo llevan.
            </p>
          </Step>
          <Step title="Di la «Fuente» y el «Tema»">
            <p>
              La fuente es de dónde salió («Correo del 14/10/2026»). El tema
              agrupa las notas: «Expedición», «Canal», «Documentos».
            </p>
          </Step>
          <Step title="Haz clic en «Añadir nota»">
            <p>
              Si ya hay una nota que dice lo mismo, Nexus lo avisa y no la
              repite.
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="contactos/nueva-nota"
          caption="La ventana «Nueva nota» para Lina Castro Bermúdez, con «Nota», «Sobre», «Fuente» y «Tema»."
        />
        <p>
          Quien tiene «Ver los contactos» pero no «Llevar los contactos» ve
          «Proponer nota». Su nota queda por confirmar hasta que la confirma
          quien lleva los contactos (
          <ArticleLink to="contactos/confirmar-contactos" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="persona-o-cargo"
        title="Sobre la persona o sobre el cargo"
      >
        <p>
          La diferencia importa cuando alguien deja su empresa y se marca «Ya no
          está» con quién lo reemplaza:
        </p>
        <ManualTable
          head={["Sobre", "Qué pasa si deja su empresa"]}
          rows={[
            [
              "«Sobre la persona»",
              "Se queda con la persona. Ejemplo: «Responde más rápido por WhatsApp que por correo».",
            ],
            [
              "«Sobre el cargo»",
              "Pasa a quien la reemplace en el cargo. Ejemplo: «Pide el formulario SARLAFT firmado antes de expedir pólizas de persona jurídica».",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="cada-nota" title="Lo que dice cada nota">
        <p>
          Bajo el texto de cada nota, una línea dice su tema, si es sobre la
          persona o sobre el cargo, la fuente, quién la escribió y cuándo: «La
          escribió una persona», «La propuso el agente» o «La propuso el agente
          y se confirmó».
        </p>
        <p>
          Las notas propuestas llevan la marca «Por confirmar» y, si traen su
          razón, «Por qué:». Si una propuesta corrige una nota vigente, dice a
          cuál con «Sustituye a: «…»». Quien lleva los contactos la confirma con
          «Confirmar»: aparece «Nota confirmada: ya está vigente».
        </p>
      </ArticleSection>

      <ArticleSection id="archivar" title="Corregir y archivar">
        <p>
          El menú «Acciones de la nota», a la derecha de cada una, tiene
          «Editar» y «Archivar». Una nota archivada deja de verse en la ficha y
          el agente deja de tenerla en cuenta. En una nota propuesta, la segunda
          opción es «Descartar»: la nota no se guarda, y si vuelve a hacer falta
          se puede proponer otra vez.
        </p>
        <p>
          Editar y archivar notas requiere el permiso «Llevar los contactos».
        </p>
      </ArticleSection>
    </>
  );
}
