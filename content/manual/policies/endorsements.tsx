import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es un anexo" },
  { id: "registrar", title: "Registrar un anexo" },
  { id: "prorroga", title: "Un anexo que prorroga la póliza" },
  { id: "la-pestana", title: "La pestaña «Anexos»" },
  { id: "corregir-o-quitar", title: "Corregir, quitar o dar por revisado" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es un anexo">
        <p>
          Un anexo es lo que la aseguradora cambia de una póliza después de
          expedirla: una inclusión, una modificación con cobro o devolución, una
          prórroga. En Nexus se registra en la ficha de la póliza, con su
          número, su vigencia y su prima.
        </p>
        <p>
          La prima de la póliza no cambia: conserva la de su carátula. Cada
          anexo suma o resta su propia prima en la producción del tablero de la
          agencia, en la fecha en que empieza su movimiento (
          <ArticleLink to="inicio/tablero-de-la-agencia" />
          ). En una póliza cancelada solo cuentan los anexos anteriores a la
          cancelación.
        </p>
        <ManualTable
          head={["Efecto en la prima", "Qué hace en la producción"]}
          rows={[
            ["Aumento", "Suma su prima sin IVA."],
            ["Disminución", "Resta su prima sin IVA."],
            ["Sin cobro", "No suma ni resta. No lleva prima."],
          ]}
        />
        <Callout type="note">
          <p>
            Una cancelación no es un anexo: se registra con «Cancelar la
            póliza», con su fecha y su devolución (
            <ArticleLink to="polizas/cancelar-o-cerrar-una-poliza" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="registrar" title="Registrar un anexo">
        <Video id="polizas/anexos-de-una-poliza" />
        <p>
          Pide el permiso «Editar pólizas». Si el anexo está en un PDF,
          adjúntalo antes a la póliza, en su panel «Documentos» (
          <ArticleLink to="documentos/subir-y-vincular" />
          ), para elegirlo en la ventana.
        </p>
        <Steps>
          <Step title="Abre «Registrar anexo»">
            <p>
              En la ficha de la póliza, en «Más acciones», los tres puntos. Si
              la póliza ya tiene anexos, también con «Registrar anexo» en su
              pestaña «Anexos».
            </p>
          </Step>
          <Step title="Completa el anexo">
            <ul className="list-disc space-y-2 pl-5">
              <li>«Número del anexo» y «Fecha de expedición», obligatorios.</li>
              <li>
                «Efecto en la prima»: «Aumento», «Disminución» o «Sin cobro».
              </li>
              <li>
                «Qué cambió», como lo escribe la aseguradora, de hasta 200
                caracteres.
              </li>
              <li>
                «Vigencia del movimiento, desde», obligatoria: desde esa fecha
                produce. «Hasta», si el movimiento tiene fin.
              </li>
              <li>
                «Prima sin IVA», obligatoria en un aumento o una disminución. Se
                escribe en positivo: el efecto dice si suma o resta.
              </li>
              <li>
                «Nueva fecha de fin de la póliza», solo si el anexo prorroga la
                póliza.
              </li>
              <li>
                «Documento»: el PDF del anexo, entre los guardados en esta
                póliza, o «Sin documento».
              </li>
            </ul>
            <Screenshot
              id="polizas/registrar-anexo"
              caption="La ventana «Registrar anexo» de la póliza de cumplimiento 21-44-101962318: un «Aumento» con «Qué cambió» «Modificación: aumento del valor del contrato», su vigencia, su «Prima sin IVA» y el PDF del anexo en «Documento»."
            />
          </Step>
          <Step title="Haz clic en «Registrar anexo»">
            <p>
              Aparece «Anexo registrado» y la ficha suma la pestaña «Anexos»,
              que lista los anexos de la póliza.
            </p>
          </Step>
        </Steps>
        <p>
          Si la póliza ya tiene un anexo con ese número, se corrige ese anexo en
          vez de crear otro.
        </p>
      </ArticleSection>

      <ArticleSection id="prorroga" title="Un anexo que prorroga la póliza">
        <p>
          Si «Nueva fecha de fin de la póliza» es posterior al fin actual, Nexus
          mueve el fin de vigencia de la póliza a esa fecha y dice «Anexo
          registrado; la vigencia de la póliza se prorrogó». La barra de
          vigencia, el estado y los avisos de vencimiento siguen la fecha nueva.
        </p>
        <Callout type="warning">
          <p>
            Quitar un anexo que prorrogó la póliza no devuelve la fecha de fin
            anterior: se corrige aparte, editando la póliza.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="la-pestana" title="La pestaña «Anexos»">
        <p>
          La pestaña aparece cuando la póliza tiene al menos un anexo, entre las
          de la plantilla y «Actividad». Encabeza la tarjeta lo que suman los
          anexos a la producción, en total y en el año en curso, y cuántos
          registró el agente sin que nadie los revise.
        </p>
        <p>
          La tabla trae «Anexo» (el número, la fecha de expedición y, si lo
          registró el agente sin revisar, «Registrado por el agente»), «Tipo»
          (el efecto, lo que cambió y el documento), «Produce desde», «Vigencia
          del movimiento» (con «Nueva fecha de fin» si prorrogó) y «Prima sin
          IVA», con signo: más en verde, menos en rojo.
        </p>
        <Screenshot
          id="polizas/anexos"
          caption="La pestaña «Anexos»: un aumento, una disminución y un anexo sin cobro que prorroga la póliza, cada uno con su tipo, desde cuándo produce y su prima con signo; encima, lo que suman a la producción."
        />
        <p>
          Quien no tiene el permiso «Editar pólizas» ve la pestaña sin el botón
          ni el menú de cada fila.
        </p>
      </ArticleSection>

      <ArticleSection
        id="corregir-o-quitar"
        title="Corregir, quitar o dar por revisado"
      >
        <p>El menú de cada fila, los tres puntos, trae:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Corregir»: abre la ventana «Corregir anexo» con sus datos. Al
            guardar con «Guardar» aparece «Anexo corregido».
          </li>
          <li>
            «Quitar»: Nexus pide confirmar («Quitar el anexo»), porque deja de
            sumar en la producción. Aparece «Anexo quitado».
          </li>
          <li>
            «Dar por revisado», en un anexo que registró el agente: aparece
            «Anexo revisado» y la fila deja de decir «Registrado por el agente».
          </li>
        </ul>
        <p>
          El agente registra anexos citando el documento guardado en la póliza.
          Cada registro, corrección o retiro queda en la bitácora de la póliza.
        </p>
      </ArticleSection>
    </>
  );
}
