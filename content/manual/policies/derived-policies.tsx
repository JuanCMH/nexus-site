import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es una póliza derivada" },
  { id: "polizas-relacionadas", title: "«Pólizas relacionadas»" },
  { id: "indicar-la-principal", title: "Indicar la póliza principal" },
  { id: "quitar-la-principal", title: "Quitar la póliza principal" },
  { id: "ramos-que-derivan", title: "Ramos cuyas pólizas derivan de otra" },
  { id: "terminada", title: "«Terminada» y no «Vencida»" },
  { id: "el-agente", title: "Lo que hace el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es una póliza derivada">
        <p>
          Una póliza derivada depende de otra póliza del mismo cliente, su
          principal. El caso típico es la RCE que acompaña a un contrato de
          cumplimiento: se expide con el cumplimiento y termina con él.
        </p>
        <p>
          Una derivada no se renueva por sí misma: no pide renovación, no sale
          en Pólizas › Necesitan atención y, al llegar a su fin, queda
          «Terminada». Una póliza es principal de otras o derivada de una, no
          las dos cosas.
        </p>
        <p>
          En el listado de pólizas, la segunda línea de una derivada empieza por
          «Derivada de» y el número y el ramo de su principal; la de una
          principal, por «Principal · 1 derivada» o «Principal · N derivadas».
          El filtro «Derivadas» deja «Solo derivadas» o «Sin derivadas» (
          <ArticleLink to="polizas/listado-de-polizas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="polizas-relacionadas" title="«Pólizas relacionadas»">
        <p>
          En el Resumen de la ficha de la póliza, la tarjeta «Pólizas
          relacionadas» aparece cuando hay algo que decir:
        </p>
        <ManualTable
          head={["La póliza", "Qué dice la tarjeta"]}
          rows={[
            [
              "Es derivada",
              "«Deriva de otra póliza del cliente: no se renueva por sí misma.», con las filas «Principal» y «Esta póliza».",
            ],
            [
              "Es principal",
              "«Estas pólizas derivan de ésta y no se renuevan por sí mismas.», con una fila «Derivada» por cada una.",
            ],
            [
              "Su ramo pide principal y no la tiene",
              "«Las pólizas de «…» derivan de otra. Indica de cuál deriva ésta.»",
            ],
            [
              "Tiene candidatas claras",
              "«Puede ser derivada de una de estas pólizas del cliente.», con cada candidata como «Sugerida» (misma aseguradora y mismo inicio) o «Posible» y el botón «Deriva de esta».",
            ],
          ]}
        />
        <p>
          Cada fila dice el número, el ramo, la vigencia y el estado; el número
          abre la ficha de esa póliza. Las candidatas se ofrecen solas cuando
          son del mismo cliente, empiezan el mismo día y no se renuevan, como un
          cumplimiento. Las candidatas y los botones los ve quien tiene el
          permiso «Editar pólizas».
        </p>
        <Screenshot
          id="polizas/polizas-relacionadas"
          caption="La tarjeta «Pólizas relacionadas» de una RCE: el cumplimiento del mismo cliente, con el mismo inicio, aparece como «Sugerida» con «Deriva de esta»."
        />
      </ArticleSection>

      <ArticleSection
        id="indicar-la-principal"
        title="Indicar la póliza principal"
      >
        <p>
          Pide el permiso «Editar pólizas» y que la póliza tenga cliente. No se
          ofrece en una póliza que ya es derivada ni en una que es principal de
          otras.
        </p>
        <Steps>
          <Step title="Abre «Indicar la póliza principal»">
            <p>
              Está en «Más acciones», los tres puntos de la ficha, y en «Elegir
              la principal», en la tarjeta «Pólizas relacionadas». Si la tarjeta
              ya propone la principal, basta con «Deriva de esta» en su fila.
            </p>
          </Step>
          <Step title="Elige la principal">
            <p>
              La ventana dice «Elige la póliza de la que deriva la …. Una
              derivada no se renueva por sí misma.» y lista las demás pólizas
              del cliente que no son derivadas, primero las más probables. Cada
              una dice por qué está: «Misma aseguradora y mismo inicio», «Mismo
              inicio», «Vigente cuando ésta empieza» u «Otra póliza del
              cliente». Si no hay ninguna, dice «El cliente no tiene otras
              pólizas que puedan ser la principal.»
            </p>
            <Screenshot
              id="polizas/indicar-principal"
              caption="La ventana «Indicar la póliza principal»: las pólizas del cliente, de la más probable a la menos, con el motivo de cada una; el cumplimiento de «Misma aseguradora y mismo inicio» está elegido."
            />
          </Step>
          <Step title="Haz clic en «Indicar la principal»">
            <p>
              Aparece «Póliza principal indicada». La póliza deja de pedir
              renovación y la tarjeta «Pólizas relacionadas» enseña su
              principal.
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Cuando se renueva una principal, sus derivadas no pasan solas a la
            nueva vigencia: la ficha de la nueva ofrece «Pasarlas a esta» (
            <ArticleLink to="polizas/renovar-una-poliza" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="quitar-la-principal"
        title="Quitar la póliza principal"
      >
        <p>
          Si se ligó la que no era, «Quitar la póliza principal», en «Más
          acciones» de la derivada, deshace el vínculo. Nexus pide confirmar:
          «Esta póliza deja de ser derivada y vuelve a seguir la regla de su
          ramo: si el ramo se renueva, pide renovación.» Con «Quitar la
          principal» aparece «La póliza ya no es derivada». Pide el permiso
          «Editar pólizas».
        </p>
        <p>
          Si se elimina una principal, sus derivadas quedan sueltas y vuelven a
          seguir la regla de su ramo.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ramos-que-derivan"
        title="Ramos cuyas pólizas derivan de otra"
      >
        <p>
          En la configuración de un ramo, «Sus pólizas derivan de otra» marca
          que toda póliza de ese ramo se liga a su principal, como la RC
          derivada de cumplimiento (
          <ArticleLink to="configuracion/ramos" />
          ). La ficha del ramo lo dice en «Póliza principal».
        </p>
        <p>
          Una póliza de ese ramo sin principal lo dice en «Pólizas relacionadas»
          y ofrece como candidatas todas las del cliente que empiezan el mismo
          día o están vigentes cuando ella empieza.
        </p>
      </ArticleSection>

      <ArticleSection id="terminada" title="«Terminada» y no «Vencida»">
        <p>
          Una póliza que no se renueva, porque su ramo no se renueva o porque
          deriva de otra, no vence: termina. Pasado su fin, su estado dice
          «Terminada», en gris, en el listado, en la ficha y en la ficha del
          cliente, y la barra de vigencia dice «Terminó hace N días». Antes del
          fin no hay aviso de vencimiento (
          <ArticleLink to="polizas/ficha-de-la-poliza" />
          ).
        </p>
        <p>
          Estas pólizas salen en Pólizas › No renovables, también las que ya
          terminaron, y no en «Vencidas». El filtro «Renovación» separa
          «Renovables» de «No renovables».
        </p>
      </ArticleSection>

      <ArticleSection id="el-agente" title="Lo que hace el agente">
        <p>
          Cuando el agente registra una póliza y un documento dice de cuál
          deriva, la deja ligada a su principal. Si solo lo dicen las fechas,
          por ejemplo una RCE que empieza el mismo día que un cumplimiento del
          mismo cliente, no la liga: lo propone en una solicitud que aprueba una
          persona con el permiso «Editar pólizas» (
          <ArticleLink to="agente/permisos-y-solicitudes" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
