import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-se-propone", title: "Lo que se propone" },
  { id: "revisar", title: "Revisar un contacto propuesto" },
  { id: "notas", title: "Las notas propuestas" },
  { id: "varios", title: "Confirmar varios a la vez" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-se-propone" title="Lo que se propone">
        <p>
          El agente lee los correos de la agencia y, cuando encuentra a alguien
          que no está en Contactos o algo que vale la pena anotar, lo propone:
          un contacto, una empresa de contacto o una nota en «Lo que sabemos».
          También proponen las personas del equipo que tienen el permiso «Ver
          los contactos» y no «Llevar los contactos».
        </p>
        <p>
          Nada de eso vale hasta que lo confirma quien tiene «Llevar los
          contactos». Mientras tanto, lo propuesto lleva la marca «Por
          confirmar» y la vista «Contactos → Por confirmar», en el grupo
          «Revisión» del menú, lo reúne con su cifra al lado.
        </p>
        <Callout type="note">
          <p>
            Los contactos y las notas por confirmar también aparecen en «Agente
            → Por confirmar», en el grupo «Contactos», junto con lo demás que
            espera a una persona (
            <ArticleLink to="agente/por-confirmar" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="revisar" title="Revisar un contacto propuesto">
        <p>
          La ficha de un contacto propuesto empieza con el aviso «Por
          confirmar»: dice quién lo propuso («Lo propuso el agente.» o «Lo
          propuso una persona del equipo.») y, debajo, «Por qué:» con la razón.
          El resto de la ficha se lee como la de cualquier contacto.
        </p>
        <Screenshot
          id="contactos/por-confirmar"
          caption="«Contactos → Por confirmar» con Felipe Ortega Lara abierto: el aviso «Lo propuso el agente», su razón y, arriba, «Editar» y «Confirmar»."
        />
        <Steps>
          <Step title="Comprueba los datos">
            <p>
              La empresa, el cargo, los correos y «Se encarga de». Si algo no
              está bien, «Editar» lo corrige antes de confirmar.
            </p>
          </Step>
          <Step title="Haz clic en «Confirmar»">
            <p>
              Aparece «Contacto confirmado» y el contacto pasa a ser uno más del
              directorio.
            </p>
          </Step>
        </Steps>
        <p>
          Si no debe quedar, «Descartar», en el menú «Más acciones», lo quita:
          el contacto no se guarda, y si vuelve a hacer falta se puede proponer
          otra vez.
        </p>
      </ArticleSection>

      <ArticleSection id="notas" title="Las notas propuestas">
        <p>
          Una nota propuesta se confirma en la ficha de su contacto, en «Lo que
          sabemos», con el «Confirmar» de esa nota. En la lista, el contacto que
          la tiene lleva la marca «1 nota por confirmar». Cómo se lee cada nota
          está en <ArticleLink to="contactos/lo-que-sabemos" />.
        </p>
      </ArticleSection>

      <ArticleSection id="varios" title="Confirmar varios a la vez">
        <Steps>
          <Step title="Abre «Por confirmar» y haz clic en «Confirmar varios»">
            <p>
              La barra sobre la lista dice «Elige los contactos por confirmar».
            </p>
          </Step>
          <Step title="Marca los contactos">
            <p>La barra cuenta los contactos seleccionados.</p>
          </Step>
          <Step title="Confirma">
            <p>
              Se confirman cada contacto propuesto y sus notas propuestas. El
              aviso dice cuántos: «Se confirmaron 2 contactos y 1 nota».
            </p>
          </Step>
        </Steps>
        <p>
          Lo que está a cargo de otra persona se salta, y el aviso lo dice: «…
          quedaron sin confirmar: están a cargo de otra persona».
        </p>
        <Screenshot
          id="contactos/confirmar-varios"
          caption="«Contactos → Por confirmar» después de «Confirmar varios»: cada contacto tiene su casilla y la barra pide «Elige los contactos por confirmar»."
        />
      </ArticleSection>
    </>
  );
}
