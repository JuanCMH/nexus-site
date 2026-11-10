import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-un-criterio", title: "Qué es un criterio" },
  { id: "la-lista", title: "La lista de criterios" },
  { id: "anadir-un-criterio", title: "Añadir un criterio" },
  { id: "el-alcance", title: "El alcance" },
  { id: "comprobacion", title: "Lo que Nexus comprueba" },
  { id: "propuestas-del-agente", title: "Lo que propone el agente" },
  { id: "ordenar-los-criterios", title: "Ordenar los criterios" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-un-criterio" title="Qué es un criterio">
        <p>
          Un criterio es una regla de la agencia, dicha en una frase, que el
          agente tiene en cuenta al trabajar: «Los números de póliza de Seguros
          del Estado se registran con los guiones, como vienen en la carátula».
          Una sola idea, escrita como una instrucción.
        </p>
        <p>
          Un criterio es una regla que el agente cumple, no una sugerencia.
          Manda sobre lo que dicen los flujos, y uno con alcance manda sobre uno
          que vale siempre. Si dos criterios del mismo alcance se contradicen,
          el agente no elige: deja la pregunta para una persona y sigue con lo
          demás. Lo que el agente guarda en su memoria informa, pero no manda
          como un criterio.
        </p>
        <p>
          Los criterios están en Directrices → Criterios. Todo el equipo los ve.
          Añadirlos, editarlos, confirmarlos y archivarlos pide el permiso
          «Confirmar y editar los criterios»; con «Proponer cambios en la
          configuración», el botón es «Proponer criterio» y lo propuesto espera
          a quien los lleva.
        </p>
      </ArticleSection>

      <ArticleSection id="la-lista" title="La lista de criterios">
        <p>
          Arriba, un recuadro dice cuántos lee el agente en cada trabajo: los
          que valen siempre y los que no tienen alcance. Los demás los lee
          cuando el trabajo casa con su alcance. La barra llega hasta el aviso
          («Aviso desde 60»); pasado ese número, un aviso al pie explica por qué
          conviene dar alcance a los criterios o unirlos.
        </p>
        <p>
          La lista se filtra por tema y por alcance («Siempre», «Según el
          trabajo» o «Sin alcance»). Cada fila dice su alcance y su origen; lo
          propuesto va arriba, con «Por confirmar». Al elegir uno, su lectura se
          abre al lado con el «Alcance», el «Tema», el «Origen», el «Uso» (en
          cuántas ejecuciones el agente dijo que lo aplicó), el «Motivo» si lo
          tiene y la «Actividad».
        </p>
        <Screenshot
          id="directrices/criterios"
          caption="Directrices → Criterios: el recuadro de cuántos lee el agente, la lista y, al lado, un criterio propuesto por el agente con su motivo y los botones «Confirmar», «Editar» y «Descartar»."
        />
      </ArticleSection>

      <ArticleSection id="anadir-un-criterio" title="Añadir un criterio">
        <Video id="directrices/criterios" />
        <Steps>
          <Step title="Haz clic en «Añadir criterio»">
            <p>Está arriba a la derecha, en Directrices → Criterios.</p>
          </Step>
          <Step title="Escribe el criterio">
            <p>
              En «Criterio», la regla en una frase. En «Tema», con qué se agrupa
              en la lista; puedes elegir uno que ya existe o escribir uno nuevo.
            </p>
          </Step>
          <Step title="Elige el alcance">
            <p>
              «Siempre» o «Según el trabajo», como se explica abajo. Si la regla
              no admite excepciones, puedes añadirle una comprobación de Nexus
              (más abajo).
            </p>
            <Screenshot
              id="directrices/criterio-nuevo"
              caption="La ventana «Añadir criterio» con «Según el trabajo» elegido: flujos, registros, aseguradoras y ramos."
            />
          </Step>
          <Step title="Haz clic en «Añadir criterio»">
            <p>
              El criterio queda vigente. Si ya hay uno que dice lo mismo, Nexus
              lo avisa y no lo duplica.
            </p>
          </Step>
        </Steps>
        <p>
          «Editar», en la lectura de un criterio, cambia su texto, su tema o su
          alcance. «Archivar» hace que el agente deje de tenerlo en cuenta desde
          su próxima ejecución.
        </p>
      </ArticleSection>

      <ArticleSection id="el-alcance" title="El alcance">
        <p>
          El alcance dice cuándo aplica un criterio. Con él, el agente no tiene
          que leer todos en cada trabajo.
        </p>
        <ManualTable
          head={["Alcance", "Cuándo lo lee el agente"]}
          rows={[
            ["«Siempre»", "Entero, en cada trabajo."],
            [
              "«Según el trabajo»",
              "Cuando el trabajo casa con lo que elegiste en «Flujos», «Registros» (clientes, pólizas, documentos, correos o tareas), «Aseguradoras» y «Ramos». Lo que dejas vacío no restringe.",
            ],
            [
              "«Sin alcance»",
              "En cada trabajo, hasta que alguien lo clasifique. Es el de los criterios que se escribieron sin elegir alcance.",
            ],
          ]}
        />
        <Callout type="tip">
          <p>
            Dar alcance a los criterios que no valen en todo trabajo, o unir los
            que tratan lo mismo, reduce lo que consume el agente y su tiempo de
            respuesta.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="comprobacion" title="Lo que Nexus comprueba">
        <p>
          El texto de un criterio lo lee el agente. Una regla sin excepciones
          que se dice como un campo y sus valores puede llevar además una
          comprobación: Nexus la aplica al verificar los clientes y las pólizas
          que registra el agente, dentro del alcance del criterio, sin depender
          de que el agente la lea.
        </p>
        <p>
          En la ventana del criterio, «Comprobación de Nexus» es opcional. Marca
          «Comprobar un campo» y completa:
        </p>
        <ManualTable
          head={["Campo", "Qué se elige"]}
          rows={[
            ["«Registro»", "«Clientes» o «Pólizas»."],
            ["«Campo»", "Un campo de la plantilla de ese registro."],
            [
              "«Incumple cuando»",
              "«Trae uno de estos valores» o «Trae un valor distinto de estos».",
            ],
            [
              "«Acción»",
              "«Bloquear el registro»: no entra hasta que una persona decide. «Dejar una duda»: entra con ese dato por revisar.",
            ],
            ["«Valores»", "Uno por línea."],
          ]}
        />
        <p>
          Un campo vacío no incumple la comprobación. La lectura del criterio la
          enseña en «Comprobación», en una frase con la acción, el campo y los
          valores. Un registro que la incumple aparece en Agente › Verificación
          como «Incumple un criterio de la agencia» o «Criterio de la agencia
          por revisar», con el criterio que se cita (
          <ArticleLink to="agente/verificacion-y-supervision" />
          ).
        </p>
        <Screenshot
          id="directrices/criterio-comprobacion"
          caption="La ventana «Añadir criterio» con «Comprobar un campo» marcado: el registro, el campo, cuándo incumple, la acción y los valores, uno por línea."
        />
      </ArticleSection>

      <ArticleSection
        id="propuestas-del-agente"
        title="Lo que propone el agente"
      >
        <p>
          Cuando corriges al agente en la conversación, puede proponer la regla
          para no repetir el error. La propuesta aparece en la lista con «Por
          confirmar» y su «Motivo», y no se aplica hasta que una persona la
          confirma.
        </p>
        <p>
          En la lectura de la propuesta, «Confirmar» la deja vigente, «Editar»
          la corrige antes y «Descartar» la retira. Si la propuesta sustituye a
          un criterio vigente, se lee como «Cambio propuesto» y dice «Al
          confirmarlo: El criterio vigente queda archivado». Un criterio que una
          persona corrigió ya no lo cambia el agente.
        </p>
        <p>
          Las propuestas del agente también se revisan en{" "}
          <ArticleLink to="agente/por-confirmar" />.
        </p>
      </ArticleSection>

      <ArticleSection id="ordenar-los-criterios" title="Ordenar los criterios">
        <p>
          Con dos criterios vigentes o más, «Pedir que los ordene» abre una
          tarea para el agente con el encargo ya escrito: revisar los criterios
          con el flujo «Reestructurar criterios y reglas» y proponer cómo unir
          los que se repiten, separar los que mezclan temas, reescribir los
          confusos y archivar los que sobran. Puedes leer y ajustar el encargo
          antes de crear la tarea.
        </p>
        <p>
          Nada cambia hasta que una persona aprueba lo que propone el agente,
          grupo por grupo, y nada se borra. El botón pide que la agencia tenga
          ese flujo publicado; si no lo tiene, se trae desde Directrices →
          Flujos de Nexus.
        </p>
      </ArticleSection>
    </>
  );
}
