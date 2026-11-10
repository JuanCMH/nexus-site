import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde-estan", title: "Dónde están" },
  { id: "reglas-de-calculo", title: "Las reglas de cálculo" },
  { id: "cotizaciones-existentes", title: "Las cotizaciones ya creadas" },
  { id: "la-lista-de-amparos", title: "La lista de amparos" },
  { id: "quien-las-cambia", title: "Quién las cambia" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde-estan" title="Dónde están">
        <p>
          Cada agencia decide cómo calcula la prima de sus cotizaciones y qué
          amparos ofrece. Las dos cosas están en el menú de Cumplimiento, bajo
          «Ajustes»: «Cálculo» y «Amparos». Cada pantalla tiene una pestaña por
          tipo de cotización, «Cumplimiento» y «Seriedad de la oferta», y cada
          tipo lleva sus propios valores.
        </p>
        <p>
          Una agencia que no cambia nada cotiza con las reglas y los amparos de
          Nexus: el cumplimiento se cobra por su vigencia real y la seriedad de
          la oferta, por un año completo.
        </p>
      </ArticleSection>

      <ArticleSection id="reglas-de-calculo" title="Las reglas de cálculo">
        <p>
          «Reglas de cálculo» dice cómo calcula Nexus la prima de cada amparo,
          en la pantalla, en el PDF, en el Excel y para el agente. La fórmula es
          la misma en todos: valor asegurado × tasa anual ÷ base del año × días
          que se cobran.
        </p>
        <ManualTable
          head={["Regla", "Opciones"]}
          rows={[
            [
              "Unidad de la tasa",
              "«Porcentaje anual» o «Por mil anual». Solo cambia cómo se lee y se escribe la tasa.",
            ],
            [
              "Base del año",
              "«365 días» o «360 días (año comercial)»: los días entre los que se divide la tasa anual.",
            ],
            [
              "Días que se cobran",
              "«Vigencia real» (los días entre el inicio y el fin de cada amparo), «Año completo», «Por mes iniciado» (cada mes iniciado cuenta como 30 días) o «Vigencia, con un mínimo», que pide el «Mínimo de días».",
            ],
            [
              "Prima mínima por amparo",
              "Vacía, sin mínimo. Si la prima de un amparo queda por debajo, se cobra la mínima.",
            ],
            [
              "Prima mínima por cotización",
              "Vacía, sin mínimo. Se compara con la suma de los amparos.",
            ],
            [
              "Redondeo de cada prima",
              "«Al peso», «A la centena» o «Al millar».",
            ],
            ["IVA (%)", "El porcentaje que se aplica."],
            [
              "Gastos de expedición",
              "Los gastos con que nace una cotización. En cada una se pueden cambiar.",
            ],
            [
              "IVA sobre los gastos",
              "Encendido, una cotización nueva calcula el IVA sobre la prima y los gastos; apagado, solo sobre la prima.",
            ],
          ]}
        />
        <p>
          Al lado, «Así se calcula» enseña la fórmula con las reglas guardadas y
          un ejemplo con sus cifras: un amparo de $ 10.000.000 a una tasa de 0,6
          % con 75 días de vigencia.
        </p>
        <Screenshot
          id="cotizaciones-de-cumplimiento/reglas-de-calculo"
          caption="Cumplimiento › Cálculo, pestaña «Cumplimiento»: las reglas de la agencia y, en «Así se calcula», la fórmula y el ejemplo con prima, gastos, IVA y total."
        />
      </ArticleSection>

      <ArticleSection
        id="cotizaciones-existentes"
        title="Las cotizaciones ya creadas"
      >
        <p>
          Las reglas valen para las cotizaciones que se creen después. Cada
          cotización guarda las reglas con que nació, así que cambiar los
          ajustes no mueve una cifra que ya salió.
        </p>
        <p>
          Si las reglas cambiaron mientras una cotización está en borrador, su
          ficha lo dice: «Esta cotización se calcula con las reglas que tenía la
          agencia cuando se creó. Las de hoy son otras: con ellas, las cifras
          pueden cambiar.» «Usar las vigentes» recalcula con las de hoy, y el
          cambio se guarda con «Guardar», como cualquier otro. Cambiar el tipo
          de la cotización también la pasa a las reglas vigentes de su nuevo
          tipo.
        </p>
      </ArticleSection>

      <ArticleSection id="la-lista-de-amparos" title="La lista de amparos">
        <p>
          «Amparos» es la lista que se ofrece al cotizar, con el porcentaje del
          contrato, la tasa anual y cuántos meses amparan después del fin del
          contrato. Son valores de partida: en cada cotización se cambian, y lo
          ya cotizado no cambia.
        </p>
        <Screenshot
          id="cotizaciones-de-cumplimiento/amparos-de-la-agencia"
          caption="Cumplimiento › Amparos, pestaña «Cumplimiento»: los nueve amparos de Nexus con su porcentaje del contrato, tasa anual y meses después del contrato."
        />
        <p>
          «Nuevo amparo» añade uno de la agencia con «Nombre», «% del contrato»,
          la tasa anual y «Meses después» del fin del contrato. El menú de cada
          fila tiene:
        </p>
        <ManualTable
          head={["Acción", "Qué hace"]}
          rows={[
            ["Editar", "Cambia sus valores de partida o su nombre."],
            [
              "Desactivar · Activar",
              "Un amparo desactivado deja de ofrecerse en «Agregar amparo» y se marca «No se ofrece».",
            ],
            [
              "Restablecer los de Nexus",
              "Solo en un amparo de Nexus que la agencia cambió o desactivó: le devuelve los valores de Nexus.",
            ],
            [
              "Eliminar",
              "Solo en un amparo de la agencia. Deja de ofrecerse al cotizar; las cotizaciones que ya lo tienen lo conservan.",
            ],
          ]}
        />
        <p>
          La segunda línea de cada amparo dice de dónde viene: «De Nexus», «De
          Nexus, con valores de la agencia» o «De la agencia».
        </p>
      </ArticleSection>

      <ArticleSection id="quien-las-cambia" title="Quién las cambia">
        <p>
          Todos los que ven las cotizaciones leen las reglas y la lista de
          amparos. Las cambia quien tiene el permiso «Configurar el cotizador de
          cumplimiento»: en las reglas, con «Editar», y en los amparos, con
          «Nuevo amparo» y el menú de cada fila.
        </p>
        <p>
          Quien no lo tiene pero puede «Proponer cambios en la configuración» ve
          «Proponer cambio» en vez de «Editar». El formulario lleva un «Motivo»,
          que lee quien confirma el cambio; al enviarlo, Nexus dice «Cambio
          propuesto: queda por confirmar». La lista de amparos no admite
          propuestas: la cambia solo una persona con el permiso.
        </p>
        <Callout type="note">
          <p>
            El agente lee las reglas y los amparos, y puede proponer un cambio
            de reglas, que espera a que una persona con el permiso lo confirme.
            Nunca las cambia por su cuenta. Lo propuesto se revisa en{" "}
            <ArticleLink to="agente/por-confirmar" />.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
