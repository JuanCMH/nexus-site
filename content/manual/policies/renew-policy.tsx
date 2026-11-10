import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-renovar", title: "Qué es renovar en Nexus" },
  { id: "renovar", title: "Renovar una póliza" },
  { id: "las-derivadas", title: "Las derivadas de la anterior" },
  { id: "encadenar", title: "Encadenar con la anterior" },
  { id: "desvincular", title: "Desvincular de la anterior" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-renovar" title="Qué es renovar en Nexus">
        <p>
          Renovar crea la póliza de la vigencia siguiente y la deja encadenada a
          la anterior. La anterior queda «Renovada» y deja de requerir
          seguimiento; las dos se ven en «Renovaciones», en el Resumen de cada
          ficha. La nueva queda con «Tipo de negocio» «Renovación».
        </p>
        <p>
          Renovar pide el permiso «Renovar pólizas». «Renovar» no aparece en una
          póliza cancelada ni en una que ya se renovó o se reemplazó.
        </p>
      </ArticleSection>

      <ArticleSection id="renovar" title="Renovar una póliza">
        <Video id="polizas/renovar-una-poliza" />
        <Steps>
          <Step title="Haz clic en «Renovar»">
            <p>
              Está en la barra superior de la ficha de la póliza. Se abre la
              página «Renovar», con el aviso «Renueva la póliza…».
            </p>
          </Step>
          <Step title="Revisa lo que se copió">
            <p>
              El formulario trae los datos de la anterior. Cambian tres cosas:
              el número queda en blanco, la vigencia nueva empieza el día en que
              termina la anterior y dura un año, y la fecha de expedición es la
              de hoy. Ajusta el número, las fechas y lo que haya cambiado, como
              la prima.
            </p>
            <Screenshot
              id="polizas/renovar"
              caption="La página «Renovar» de la póliza 8001901347: el aviso «Renueva la póliza 8001901347», el número en blanco y los demás datos copiados; en «Cómo queda», la vigencia del 14/05/2027 al 14/05/2028 y el responsable del cliente."
            />
          </Step>
          <Step title="Haz clic en «Renovar póliza»">
            <p>
              Aparece «Póliza renovada» y se abre la ficha de la nueva. Las dos
              quedan encadenadas.
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Se puede renovar por adelantado: la anterior sigue vigente hasta su
            fin, y la nueva queda «Por iniciar» hasta que empiece.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="las-derivadas" title="Las derivadas de la anterior">
        <p>
          Si de la póliza anterior derivaban otras, como la RCE de un contrato,
          esas derivadas no pasan solas a la nueva. En el Resumen de la nueva,
          «Pólizas relacionadas» lo dice: «La vigencia anterior, …, tiene una
          derivada (…)», o «… N derivadas», «Si siguen con esta vigencia,
          pásalas a esta póliza.» «Pasarlas a esta» las liga a la nueva y Nexus
          dice «Derivadas pasadas a esta póliza». Pide el permiso «Editar
          pólizas».
        </p>
        <p>
          Las pólizas derivadas se explican en{" "}
          <ArticleLink to="polizas/polizas-derivadas" />.
        </p>
      </ArticleSection>

      <ArticleSection id="encadenar" title="Encadenar con la anterior">
        <p>
          Una póliza que se registró suelta, sin «Renovar», se puede encadenar
          después con la que renovó o reemplazó. Si Nexus encuentra candidatas
          del mismo cliente y ramo, el Resumen de la ficha lo dice con «Posible
          póliza anterior».
        </p>
        <Steps>
          <Step title="Abre «Encadenar con la anterior»">
            <p>
              Está en el menú «Más acciones» de la ficha, o en «Posible póliza
              anterior». Pide el permiso «Renovar pólizas».
            </p>
          </Step>
          <Step title="Elige la anterior">
            <p>
              La ventana propone las del mismo cliente y ramo, por fecha.
              Cualquier otra se busca por su número exacto en «Número de la
              anterior».
            </p>
          </Step>
          <Step title="Di qué es esta póliza">
            <p>
              En «Esta póliza es», «Su renovación» o «Su reemplazo». Después haz
              clic en «Encadenar».
            </p>
          </Step>
        </Steps>
        <p>
          Aparece «Pólizas encadenadas». La anterior queda cerrada, «Renovada» o
          «Reemplazada», y deja de requerir seguimiento.
        </p>
      </ArticleSection>

      <ArticleSection id="desvincular" title="Desvincular de la anterior">
        <p>
          Si se encadenó con la que no era, «Desvincular de la anterior», en
          «Más acciones», deshace la cadena. Nexus pide confirmar: la póliza
          deja de ser la renovación de la anterior, que vuelve a requerir
          seguimiento.
        </p>
        <p>
          En una cadena de pólizas que no se renuevan solas, como las de un ramo
          que no se renueva, «Renovaciones» dice de la anterior «Terminó el…» o
          «Termina el…», en vez de «Venció el…» o «Vence el…».
        </p>
        <p>
          Las tareas de renovación, que Nexus abre con los avisos del fin de
          vigencia que tiene la plantilla, se explican en{" "}
          <ArticleLink to="tareas/plazos-y-tareas-automaticas" />.
        </p>
      </ArticleSection>
    </>
  );
}
