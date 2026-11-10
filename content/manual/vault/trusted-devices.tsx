import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es un computador de confianza" },
  { id: "uno-nuevo", title: "Abrir la bóveda en uno nuevo" },
  { id: "aprobar-o-quitar", title: "Aprobar o quitar un computador" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es un computador de confianza">
        <p>
          Tu bóveda solo se abre en los computadores y los navegadores que
          tienes aprobados. El primero es aquel donde creaste tu clave de la
          bóveda. Cualquier otro queda pendiente hasta que lo aprueben, aunque
          tengas la contraseña de Nexus y la clave de la bóveda.
        </p>
        <p>
          Accesos → «Equipos de confianza», bajo «Ajustes», lista los tuyos como
          «Computadores de confianza». Esa sección se abre aunque la bóveda esté
          cerrada.
        </p>
      </ArticleSection>

      <ArticleSection id="uno-nuevo" title="Abrir la bóveda en uno nuevo">
        <p>
          Al entrar a Accesos desde un computador o navegador nuevo, la pantalla
          dice que aún no es de confianza y que está esperando aprobación. Hay
          tres formas de aprobarlo:
        </p>
        <Steps>
          <Step title="Desde otro computador tuyo de confianza">
            <p>
              En Accesos → «Equipos de confianza», el nuevo aparece con «Espera
              aprobación». Haz clic en «Aprobar».
            </p>
          </Step>
          <Step title="Pidiéndoselo al propietario">
            <p>
              El propietario ve los computadores de todo el equipo y aprueba el
              tuyo desde los suyos.
            </p>
          </Step>
          <Step title="Con tu clave de recuperación">
            <p>
              En la misma pantalla de espera, escribe la «Clave de recuperación»
              que guardaste al crear la bóveda y haz clic en «Marcar de
              confianza». Es la salida si no tienes otro computador ni a quién
              pedírselo.
            </p>
          </Step>
        </Steps>
        <p>La pantalla de espera cambia sola cuando lo aprueban.</p>
      </ArticleSection>

      <ArticleSection
        id="aprobar-o-quitar"
        title="Aprobar o quitar un computador"
      >
        <p>
          Cada fila dice el nombre del computador, de quién es y cuándo se usó
          por última vez; el actual lleva su propia marca. En uno pendiente,
          «Aprobar» o «Rechazar»; en uno aprobado, «Quitar».
        </p>
        <p>
          Desde un computador quitado ya no se puede abrir la bóveda, aunque se
          tenga la contraseña de Nexus y la clave de la bóveda de esa persona.
          Para volver a usarlo hay que aprobarlo otra vez. Uno rechazado puede
          volver a pedirlo.
        </p>
        <Callout type="warning">
          <p>
            Aprueba solo un computador que reconozcas: quien lo use, con la
            contraseña de Nexus y la clave de la bóveda de esa persona, puede
            ver sus accesos.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
