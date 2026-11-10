import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué hace una regla" },
  { id: "crear", title: "Crear una regla" },
  { id: "que-hace", title: "No crear tareas o ignorar" },
  { id: "propuestas", title: "Las reglas que propone el agente" },
  { id: "quitar", title: "Corregir y quitar una regla" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué hace una regla">
        <p>
          Una regla de correo dice qué correos no le dan trabajo al agente:
          promociones, boletines o remitentes que la agencia no atiende. Nexus
          la aplica antes de que el agente lea el correo. Ningún correo se
          borra.
        </p>
        <p>
          Están en «Correos → Reglas», en el grupo «Ajustes» del menú. Cada fila
          dice su condición («Dominio @boletines.co · En
          operaciones@altavistaseguros.co», «Remitente …», «Asunto con «…»»), su
          motivo y lo que hace. Sin reglas, la lista dice «Aún no hay reglas de
          correo».
        </p>
        <Screenshot
          id="correos/reglas"
          caption="«Correos → Reglas»: la condición de cada regla, el correo vinculado si es solo uno, su motivo y lo que hace, con «Quitar»."
        />
        <p>
          Las ve quien entra en Correos. Escribirlas, confirmarlas y quitarlas
          requiere el permiso «Llevar las reglas de correo». Al darlo, el rol
          advierte: «Una regla puede hacer que el agente deje de atender correos
          que sí importan».
        </p>
      </ArticleSection>

      <ArticleSection id="crear" title="Crear una regla">
        <Video id="correos/reglas-de-correo" />
        <Steps>
          <Step title="Haz clic en «Nueva regla»">
            <p>
              En la barra superior de «Correos → Reglas». Se abre «Nueva regla
              de correo».
            </p>
          </Step>
          <Step title="Escribe la condición">
            <p>
              «Remitente o dominio»: una dirección o un dominio, como
              @empresa.com. «El asunto contiene»: un texto del asunto, de al
              menos 4 caracteres. Hace falta al menos uno de los dos; con los
              dos, el correo tiene que cumplir ambos.
            </p>
          </Step>
          <Step title="Elige el «Correo vinculado»">
            <p>«Todos», o solo uno de los correos vinculados.</p>
          </Step>
          <Step title="Elige «Qué hace»">
            <p>«No crear tareas» o «Ignorar» (ver abajo).</p>
          </Step>
          <Step title="Escribe el «Motivo» y haz clic en «Añadir regla»">
            <p>
              El motivo es obligatorio: dice por qué la agencia no atiende esos
              correos. Aparece «Regla añadida», y la regla vale desde ese
              momento.
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="correos/regla-nueva"
          caption="La ventana «Nueva regla de correo»: la condición, el correo vinculado, lo que hace y su motivo."
        />
        <p>
          Si ya hay una regla vigente con la misma condición, Nexus lo avisa:
          «Ya existe una regla vigente con esa condición».
        </p>
      </ArticleSection>

      <ArticleSection id="que-hace" title="No crear tareas o ignorar">
        <ManualTable
          head={["Qué hace", "Qué pasa con el correo"]}
          rows={[
            [
              "«No crear tareas»",
              "El agente ve el correo y no abre tareas por él. Es la opción recomendada.",
            ],
            [
              "«Ignorar»",
              "El correo no llega al agente. Sirve solo para publicidad o boletines: un correo ignorado no se revisa.",
            ],
          ]}
        />
        <p>Si un correo cumple varias reglas, vale «Ignorar».</p>
      </ArticleSection>

      <ArticleSection id="propuestas" title="Las reglas que propone el agente">
        <p>
          Cuando una persona le pide al agente dejar de atender un remitente, el
          agente propone la regla. La propuesta lleva la marca «Por confirmar» y
          no vale hasta que la confirma quien lleva las reglas, con «Confirmar»:
          aparece «Regla confirmada: ya está vigente». Editar una propuesta no
          la confirma.
        </p>
        <p>
          Las propuestas también aparecen en «Agente → Por confirmar», en el
          grupo «Reglas del trabajo», con su condición, lo que hace, su motivo y
          «Confirmar» o «Descartar» (
          <ArticleLink to="agente/por-confirmar" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="quitar" title="Corregir y quitar una regla">
        <p>
          Un clic en la fila abre «Editar regla de correo»; «Guardar» aplica el
          cambio. «Quitar», en la fila, pregunta antes: «El agente volverá a
          atender estos correos desde la próxima lectura.». Aparece «Regla
          quitada».
        </p>
        <Callout type="warning">
          <p>
            Una regla demasiado amplia hace que el agente deje de atender
            correos que importan. Antes de usar «Ignorar» con un dominio,
            comprueba que de ese dominio no escriben clientes ni aseguradoras.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
