import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-puesta-en-marcha", title: "La puesta en marcha" },
  { id: "los-pasos", title: "Los pasos" },
  { id: "rutinas", title: "Las rutinas de la agencia" },
  { id: "asistentes-de-cada-persona", title: "Los asistentes de cada persona" },
  { id: "memoria", title: "Lo que recuerda el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-puesta-en-marcha" title="La puesta en marcha">
        <p>
          Agente › Configuración la ve quien tiene el permiso «Conectar el
          agente y definir su horario». Arriba, la franja «Puesta en marcha»
          dice cuántos pasos van hechos u omitidos («5 de 6 pasos hechos u
          omitidos») y cuándo usó Nexus el agente por última vez.
        </p>
        <p>
          Los pasos están en fila, cada uno con su estado: «Pendiente», «En
          curso», «Hecho» u «Omitido». Debajo se ve el primero que falta, con lo
          que lo avanza: un botón que lleva a su bloque («Ir a la conexión», «Ir
          a la activación», «Ir a las rutinas»), a su pantalla («Ir a Correos»,
          «Ir a Plantillas») o, si se hace conversando con el asistente, «Copiar
          indicación» y el botón para abrirlo. Haz clic en otro paso de la fila
          para verlo.
        </p>
        <p>
          Un paso que la agencia no necesita se salta con «Omitir», y vuelve con
          «Retomar». Terminados todos, la franja se pliega y «Ver los pasos» la
          abre.
        </p>
      </ArticleSection>

      <ArticleSection id="los-pasos" title="Los pasos">
        <ManualTable
          head={["Paso", "Qué es"]}
          rows={[
            [
              "Conectar el asistente",
              <>
                Añadir el conector de la agencia al asistente y aprobar la
                conexión (<ArticleLink to="agente/conectar-el-asistente" />
                ).
              </>,
            ],
            [
              "Activación del agente",
              "Cómo activa Nexus al agente cuando alguien le deja trabajo: una rutina de Claude, un agente de ChatGPT u otro asistente que recibe un webhook firmado.",
            ],
            [
              "Datos de la agencia",
              "Datos y logo de la agencia, plantillas de clientes y pólizas, aseguradoras y ramos. Se hace conversando con el asistente: puedes darle tus formatos en Excel o una carátula.",
            ],
            [
              "Correos",
              "Los correos que leerá el agente. Se registran conversando con el asistente y la clave de cada uno se pone en Correos.",
            ],
            [
              "Histórico de correos",
              "El agente lee los mensajes anteriores de cada correo vinculado, por tramos. Si se interrumpe, sigue donde quedó.",
            ],
            [
              "Rutinas de la agencia",
              "Las rutinas que la agencia quiera, cada una con sus flujos y su frecuencia, creadas en el asistente.",
            ],
          ]}
        />
        <p>
          Lo que el agente configura en estos pasos (plantillas, catálogos,
          roles) llega como propuesta: se confirma en{" "}
          <ArticleLink to="agente/por-confirmar" />. Para configurar roles sin
          una solicitud por cada uno, Agente › Permisos ofrece «Dar 48 horas» de
          puesta en marcha (
          <ArticleLink to="agente/permisos-y-solicitudes" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="rutinas" title="Las rutinas de la agencia">
        <p>
          Una rutina es un trabajo que la agencia programa en su asistente: qué
          flujos hace y con qué frecuencia. La rutina vive en el asistente;
          Nexus prepara el texto que se pega en ella.
        </p>
        <Steps>
          <Step title="Haz clic en «Nueva rutina»">
            <p>Está en el bloque «Rutinas de la agencia».</p>
          </Step>
          <Step title="Elige lo que hará">
            <p>
              En «Qué hace», marca los flujos que hará en cada ejecución (por
              ejemplo, «Leer correos», «Atender tareas» o «Auditar tareas»). Los
              hace en el orden de la lista.
            </p>
          </Step>
          <Step title="Copia la indicación y crea la rutina">
            <p>
              «Copiar nombre» y «Copiar indicación» dan el nombre y el texto de
              la rutina. «Al crearla» dice cómo hacerlo en el asistente; la
              frecuencia se pone allí. No le pongas disparador por API: ese es
              solo de la activación del agente. Deja desactivado el envío de
              correo de otros conectores: los correos salen por Nexus.
            </p>
          </Step>
        </Steps>
        <p>
          «Trabajo del agente en los últimos 30 días» enseña, por flujo, cuántas
          ejecuciones hubo, cuándo fue la última y cómo terminó. Nexus no ve las
          rutinas del asistente: lo deduce de sus ejecuciones. Si una rutina no
          aparece, no ha corrido. El detalle de cada ejecución está en{" "}
          <ArticleLink to="agente/ejecuciones" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="asistentes-de-cada-persona"
        title="Los asistentes de cada persona"
      >
        <p>
          Si alguien del equipo conectó su propio asistente en «Mi asistente»,
          Agente › Configuración lo enseña en «Asistente de cada persona», con
          el programa y su último uso. «Cortar la conexión» le quita el acceso a
          ese asistente.
        </p>
        <Callout type="note">
          <p>
            El asistente de una persona trabaja con lo que ella puede, y lo que
            registra queda por confirmar. No ejecuta las rutinas de la agencia
            ni atiende las tareas delegadas al agente (
            <ArticleLink to="agente/mi-asistente" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="memoria" title="Lo que recuerda el agente">
        <p>
          El agente guarda en Nexus los datos útiles que aprende al trabajar,
          para no perderlos entre una conversación y otra, entre rutinas o si la
          agencia cambia de asistente. Una memoria informa; no es una regla. Lo
          que el agente debe cumplir siempre se escribe como criterio (
          <ArticleLink to="directrices/criterios" />
          ).
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            La memoria del asistente de una persona es solo de esa persona. Un
            asistente personal no lee la del agente de la agencia.
          </li>
          <li>
            La memoria no se lee en pantalla. Va en la exportación de los datos
            de la agencia, en <ArticleLink to="configuracion/uso-y-plan" />.
          </li>
        </ul>
        <p>
          El propietario ve en Agente › Configuración el bloque «Memoria del
          agente», con cuántos datos hay guardados («12 datos guardados»). El
          bloque aparece cuando hay al menos uno.
        </p>
        <Steps>
          <Step title="Haz clic en «Vaciar memoria»">
            <p>Está en el bloque «Memoria del agente».</p>
          </Step>
          <Step title="Confirma con «Vaciar»">
            <p>
              La ventana «Vaciar la memoria del agente» avisa: «Se elimina todo
              lo que el agente guardó en Nexus. Esta acción no se deshace.».
              Vaciarla borra la memoria de toda la agencia, también la de los
              asistentes de cada persona, y queda en la bitácora.
            </p>
          </Step>
        </Steps>
        {/* CAPTURA agente/memoria: Agente › Configuración, bloque «Memoria del agente» con datos guardados, sesión del propietario | El bloque «Memoria del agente» de Agente › Configuración: cuántos datos guardó el agente y «Vaciar memoria». */}
      </ArticleSection>
    </>
  );
}
