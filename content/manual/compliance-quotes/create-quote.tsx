import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-cotiza", title: "Qué cotiza Nexus" },
  { id: "empezar", title: "Empezar una cotización" },
  { id: "el-contrato", title: "El contrato" },
  { id: "los-amparos", title: "Los amparos y sus tasas" },
  { id: "el-resultado", title: "El resultado" },
  { id: "del-agente", title: "Las que crea el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-cotiza" title="Qué cotiza Nexus">
        <p>
          Una cotización de cumplimiento calcula la prima de una póliza de
          cumplimiento o de seriedad de la oferta a partir de un contrato y de
          sus amparos. Nexus no cotiza otros ramos ni compara aseguradoras: la
          aseguradora se elige al convertir la cotización en póliza.
        </p>
        <p>
          Las cotizaciones están en «Cumplimiento», en el menú principal. Para
          crearlas y editarlas, tu rol necesita el permiso «Crear y editar
          cotizaciones de cumplimiento».
        </p>
      </ArticleSection>

      <ArticleSection id="empezar" title="Empezar una cotización">
        <Video id="cotizaciones-de-cumplimiento/crear-una-cotizacion" />
        <Steps>
          <Step title="Haz clic en «Nueva cotización»">
            <p>
              El botón está en el listado de «Cumplimiento» y en el bloque
              «Cotizaciones de cumplimiento» de la ficha de un cliente. Desde la
              ficha, el cliente ya viene elegido.
            </p>
          </Step>
          <Step title="Elige el tipo y, si aplica, el cliente">
            <p>
              En «Tipo», «Cumplimiento» o «Seriedad de la oferta». El «Cliente»
              es opcional: se puede cotizar a quien aún no es cliente. Si eliges
              uno, su nombre y su identificación pasan a «Tomador» y «NIT o
              cédula».
            </p>
          </Step>
          <Step title="Completa el contrato">
            <p>
              «Valor del contrato», «Inicio del contrato» y «Fin del contrato».
              El inicio propone la fecha de hoy y el fin, seis meses después.
            </p>
            <Screenshot
              id="cotizaciones-de-cumplimiento/nueva-cotizacion"
              caption="La ventana «Nueva cotización de cumplimiento»: tipo, cliente, tomador con su NIT o cédula, valor del contrato y sus fechas de inicio y fin."
            />
          </Step>
          <Step title="Haz clic en «Crear cotización»">
            <p>
              La cotización nace en borrador, con un número como{" "}
              <code className="font-mono text-sm">COT-2026-0007</code>, y se
              abre su ficha. Trae el primer amparo de la lista de la agencia
              para su tipo y los gastos de expedición de sus reglas de cálculo.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="el-contrato" title="El contrato">
        <p>
          La tarjeta «Contrato» reúne las partes y el contrato que ampara la
          póliza. Además de lo que escribiste al crearla, tiene «Tipo de
          contrato», «Asegurado y beneficiario» con su NIT o cédula, «Vigente
          hasta», «Objeto del contrato» y «Notas». Las notas salen al final del
          PDF y del Excel.
        </p>
        <p>
          Bajo «Fin del contrato» se lee cuántos días dura. «Vigente hasta» es
          la fecha hasta la que vale la cotización: después de ese día, una
          cotización enviada queda vencida.
        </p>
        <p>
          Los cambios se guardan con «Guardar», arriba a la derecha. Si sales de
          la ficha con cambios sin guardar, Nexus te pide confirmarlo en «Salir
          sin guardar».
        </p>
      </ArticleSection>

      <ArticleSection id="los-amparos" title="Los amparos y sus tasas">
        <p>
          Cada amparo es una fila con su nombre, «% contrato», «Valor
          asegurado», «Desde», «Hasta», «Días», «Tasa anual %» y la prima que
          resulta. El porcentaje y el valor asegurado se siguen el uno al otro:
          si cambias uno, Nexus calcula el otro con el valor del contrato.
        </p>
        <p>
          «Agregar amparo» ofrece los de la lista de la agencia que la
          cotización aún no tiene, cada uno con sus valores usuales, y «Otro
          amparo» para escribir uno que no está en la lista. Todo se puede
          cambiar en la fila. Una cotización admite hasta 20 amparos.
        </p>
        <Screenshot
          id="cotizaciones-de-cumplimiento/amparos"
          caption="La tarjeta «Amparos» de un borrador con dos amparos: cada fila con su porcentaje del contrato, valor asegurado, fechas, días, tasa anual y prima."
        />
        <p>
          Si después cambias el valor o las fechas del contrato, el valor
          asegurado de cada amparo sigue a su porcentaje, y las fechas que
          venían propuestas se mueven con el contrato. Una fecha que cambiaste a
          mano no se toca.
        </p>
      </ArticleSection>

      <ArticleSection id="el-resultado" title="El resultado">
        <p>La tarjeta «Resultado» se recalcula con cada cambio, sin guardar:</p>
        <ManualTable
          head={["Línea", "Qué es"]}
          rows={[
            [
              "Prima neta",
              "La suma de las primas de los amparos. Si las reglas fijan una prima mínima por cotización y la suma no la alcanza, la mínima.",
            ],
            [
              "Gastos de expedición",
              "Los que trae la cotización de las reglas de la agencia. Se cambian en cada una.",
            ],
            [
              "IVA sobre los gastos",
              "Encendido, el IVA se calcula sobre la prima y los gastos; apagado, solo sobre la prima.",
            ],
            ["IVA", "El porcentaje de las reglas de cálculo y su valor."],
            ["Total a pagar", "La prima neta, los gastos y el IVA."],
          ]}
        />
        <p>
          Debajo, «Cómo se calculó» enseña la fórmula y la cuenta de cada amparo
          con sus números. Esa cuenta es para quien cotiza: el PDF lleva solo
          las cifras.
        </p>
        <Screenshot
          id="cotizaciones-de-cumplimiento/resultado"
          caption="La tarjeta «Resultado»: prima neta, gastos de expedición, IVA, «Total a pagar» y, en «Cómo se calculó», la cuenta de cada amparo."
        />
        <p>
          Las reglas con que se calcula la prima (base del año, días que se
          cobran, mínimos, redondeo e IVA) son de la agencia y se explican en{" "}
          <ArticleLink to="cotizaciones-de-cumplimiento/calculo-y-amparos" />.
        </p>
      </ArticleSection>

      <ArticleSection id="del-agente" title="Las que crea el agente">
        <p>
          El agente también puede preparar una cotización, siempre en borrador.
          La ficha dice «Creada por el agente» y, mientras sea borrador, el
          aviso «Revisa el contrato, los amparos y las tasas antes de enviarla».
          Esos borradores se reúnen en la vista «Por revisar» del menú de
          Cumplimiento.
        </p>
        <Callout type="note">
          <p>
            Marcarla como enviada, convertirla en póliza y eliminarla es siempre
            de una persona. Lo explica{" "}
            <ArticleLink to="cotizaciones-de-cumplimiento/estados-de-una-cotizacion" />
            .
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
