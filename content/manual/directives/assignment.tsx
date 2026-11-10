import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "como-se-reparte", title: "Cómo se reparte" },
  { id: "persona-de-respaldo", title: "La persona de respaldo" },
  { id: "escribir-una-regla", title: "Escribir una regla" },
  { id: "propuestas-del-agente", title: "Lo que propone el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="como-se-reparte" title="Cómo se reparte">
        <p>
          Directrices → Reparto reúne las reglas de quién lleva qué, escritas en
          frases: «Las tareas de siniestros y de cobro las lleva Paola Andrea
          Suárez Lozano». Cada regla nombra a las personas de las que habla.
        </p>
        <p>
          Nexus no interpreta las frases: las lee el agente. Cuando una tarea,
          una duda o una confirmación nace sin responsable, el agente la asigna
          según las reglas. Si la agencia configuró la activación del agente,
          Nexus le avisa en cuanto algo nace sin responsable (
          <ArticleLink to="agente/conectar-el-asistente" />
          ). Lo que abre él mismo desde un correo ya lo abre asignado, leyendo
          las mismas reglas.
        </p>
        <Screenshot
          id="directrices/reparto"
          caption="Directrices → Reparto: la persona de respaldo, la lista de reglas y, al lado, una regla propuesta por el agente."
        />
        <p>
          Todo el equipo ve las reglas. Escribirlas, confirmarlas y archivarlas
          pide el permiso «Definir el reparto y los plazos». Los plazos de cada
          trámite y las tareas automáticas no están aquí: están en{" "}
          <ArticleLink to="tareas/plazos-y-tareas-automaticas" />.
        </p>
      </ArticleSection>

      <ArticleSection id="persona-de-respaldo" title="La persona de respaldo">
        <p>
          La «Persona de respaldo» recibe la tarea, la duda o la confirmación
          que nace sin responsable cuando ninguna regla dice de quién es, o
          cuando no hay agente conectado. «Cambiar» deja elegir a otra persona o
          «Queda sin asignar».
        </p>
        <Callout type="warning">
          <p>
            Sin un agente conectado, las reglas no reparten. La pantalla lo
            dice: «La agencia no tiene un agente conectado que lea las reglas:
            hoy toda tarea, duda o confirmación que nace sin responsable va a
            esta persona».
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="escribir-una-regla" title="Escribir una regla">
        <Video id="directrices/reparto" />
        <Steps>
          <Step title="Haz clic en «Nueva regla»">
            <p>
              Si tu rol solo puede proponer cambios en la configuración, el
              botón dice «Proponer regla».
            </p>
          </Step>
          <Step title="Escribe la regla">
            <p>
              En «Regla», qué tareas y quién las lleva, con el nombre de la
              persona. Puedes hablar del tipo de trámite, del ramo, de la
              aseguradora o del cliente: «Las renovaciones de autos las lleva
              Laura.».
            </p>
          </Step>
          <Step title="Elige a las personas que nombra">
            <p>
              En «Personas que nombra», las mismas de la frase. Así el agente
              sabe exactamente a quién asignar, y Nexus avisa si alguna deja la
              agencia. El «Tema» agrupa la regla en la lista.
            </p>
            <Screenshot
              id="directrices/regla-nueva"
              caption="La ventana «Nueva regla de reparto»: la regla, el tema y las personas que nombra."
            />
          </Step>
          <Step title="Haz clic en «Añadir regla»">
            <p>
              La regla queda vigente: el agente la lee cada vez que reparte.
            </p>
          </Step>
        </Steps>
        <p>
          «Archivar», en la lectura de una regla, hace que el agente deje de
          repartir con ella. Las tareas que ya asignó no cambian.
        </p>
      </ArticleSection>

      <ArticleSection
        id="propuestas-del-agente"
        title="Lo que propone el agente"
      >
        <p>
          Cuando alguien corrige un reparto del agente, él puede proponer el
          ajuste de la regla. La propuesta llega con «Por confirmar» y su
          motivo, y el agente no reparte con ella hasta que una persona la
          confirma con «Confirmar». «Editar» la corrige antes y «Descartar» la
          retira.
        </p>
        <p>
          Como en los criterios, con dos reglas vigentes o más, «Pedir que las
          ordene» abre una tarea para el agente con el encargo de unirlas,
          separarlas, reescribirlas o archivarlas siguiendo el flujo
          «Reestructurar criterios y reglas». Nada cambia hasta que una persona
          lo aprueba (<ArticleLink to="directrices/criterios" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
