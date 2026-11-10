import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es tu asistente" },
  { id: "conectarlo", title: "Conectarlo" },
  { id: "tus-conexiones", title: "Tus conexiones" },
  { id: "sin-el-permiso", title: "Si tu rol no lo permite" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es tu asistente">
        <p>
          Agente › «Mi asistente» sirve para conectar tu Claude, tu ChatGPT u
          otro cliente MCP y trabajar con Nexus desde tus conversaciones. Pide
          el permiso «Conectar su propio asistente», que se da por rol.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Ve y hace lo mismo que tú: lo que no puedes ver o cambiar, tu
            asistente tampoco.
          </li>
          <li>
            Lo que registra queda por confirmar, como lo del agente, y la
            bitácora lo dice.
          </li>
          <li>
            No es el agente de la agencia: no ejecuta sus rutinas ni atiende las
            tareas delegadas.
          </li>
          <li>
            Redacta correos en los correos vinculados que tú consultas. Quedan
            por enviar hasta que una persona con el permiso «Enviar los correos
            que redacta el agente» los envía (
            <ArticleLink to="correos/revisar-y-enviar" />
            ).
          </li>
        </ul>
        <Callout type="note">
          <p>
            Quien tiene el permiso «Conectar el agente y definir su horario» no
            ve «Mi asistente»: su asistente es el agente que configura (
            <ArticleLink to="agente/conectar-el-asistente" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="conectarlo" title="Conectarlo">
        <Steps>
          <Step title="Añade tu conector al asistente">
            <p>
              En «1. Añade tu conector al asistente» está tu conector, «Nexus -
              Agente personal», distinto del del agente. Si perteneces a varias
              agencias, lleva también la agencia entre paréntesis. Elige la
              pestaña de tu asistente: con Claude, «Añadir a Claude» lo abre con
              el conector listo; con ChatGPT u otro cliente MCP, copia la
              dirección y añádela como servidor MCP con autenticación OAuth.
            </p>
            <p>
              Debajo, «Instrucciones del agente» enseña el texto con que Nexus
              se presenta a tu asistente. Si tu asistente trabaja por proyectos,
              «Copiar instrucciones» lo copia para pegarlo en las instrucciones
              del proyecto.
            </p>
          </Step>
          <Step title="Escribe el código de la página de Nexus">
            <p>
              Al conectarlo, el asistente abre una página de Nexus que te enseña
              un código. Escríbelo en «2. Escribe el código de la página de
              Nexus» y haz clic en «Conectar». Escribirlo aprueba tu propia
              conexión. Solo sirve el código que te muestra la página que abrió
              tu asistente.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="tus-conexiones" title="Tus conexiones">
        <p>
          «Tus conexiones» enseña cada programa conectado, cuándo se conectó y
          su «Último uso». «Cortar la conexión» hace que tu asistente deje de
          entrar en Nexus de inmediato; para volver a usarlo, conéctalo otra
          vez.
        </p>
        <p>
          Si dejas de tener el permiso, tus conexiones dejan de valer solas.
          Quien lleva al agente también las ve en Agente › Configuración y puede
          cortarlas (<ArticleLink to="agente/configuracion-del-agente" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="sin-el-permiso" title="Si tu rol no lo permite">
        <p>
          Sin el permiso, «Mi asistente» dice que tu rol no incluye conectar tu
          propio asistente y que lo conceden el propietario y los
          administradores. Debajo, «Pedir ayuda al agente» ofrece «Nueva tarea»:
          crea una tarea y delégala al agente de la agencia. La atiende con tus
          permisos, deja en la tarea lo que hizo y te la devuelve (
          <ArticleLink to="tareas/delegar-al-agente" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
