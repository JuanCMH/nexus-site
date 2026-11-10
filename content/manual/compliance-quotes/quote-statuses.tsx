import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "los-estados", title: "Los estados" },
  { id: "cambiar-el-estado", title: "Cambiar el estado" },
  { id: "convertir-en-poliza", title: "Convertir en póliza" },
  { id: "las-vistas", title: "Las vistas del menú" },
  { id: "eliminar", title: "Eliminar una cotización" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="los-estados" title="Los estados">
        <p>
          El estado de una cotización dice en qué punto está con el cliente.
          Nexus no envía la cotización: quien la gestiona marca lo que pasó.
          Solo un borrador se edita.
        </p>
        <ManualTable
          head={["Estado", "Qué significa"]}
          rows={[
            [
              "Borrador",
              "La cotización aún no sale. Es el único estado en que se edita.",
            ],
            ["Enviada", "Se marcó como enviada al cliente. Ya no se edita."],
            [
              "Vencida",
              "Una enviada cuyo «Vigente hasta» ya pasó. Nexus la enseña así sin que nadie la marque.",
            ],
            ["Aceptada", "El cliente la aceptó y aún no tiene póliza."],
            ["Rechazada", "El cliente no la aceptó."],
            [
              "Convertida",
              "Tiene su póliza vinculada. Nexus la enseña así al vincularla.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="cambiar-el-estado" title="Cambiar el estado">
        <p>
          El estado se cambia con el botón «Estado», arriba a la derecha de la
          ficha. Hace falta el permiso «Crear y editar cotizaciones de
          cumplimiento», y es siempre de una persona: el agente prepara
          borradores, pero no cambia su estado. Cada cambio queda en la
          bitácora.
        </p>
        <ManualTable
          head={["Desde", "Opciones del menú «Estado»"]}
          rows={[
            ["Borrador", "«Marcar como enviada»."],
            [
              "Enviada o vencida",
              "«Aceptada», «Rechazada» y «Volver a borrador».",
            ],
            ["Aceptada o rechazada", "«Volver a borrador»."],
          ]}
        />
        <Screenshot
          id="cotizaciones-de-cumplimiento/menu-estado"
          caption="El menú «Estado» de una cotización enviada: «Aceptada», «Rechazada» y «Volver a borrador»."
        />
        <p>
          «Marcar como enviada» se desactiva si la cotización tiene cambios sin
          guardar («Guarda los cambios antes de enviarla») o si le falta algo.
          En ese caso, el menú dice qué falta: el asegurado o beneficiario, el
          valor del contrato, al menos un amparo, o el valor asegurado y la tasa
          de cada amparo.
        </p>
        <p>
          Una cotización que ya salió enseña el aviso «Una cotización que ya
          salió no se edita. Para cambiarla, devuélvela a borrador.»
        </p>
      </ArticleSection>

      <ArticleSection id="convertir-en-poliza" title="Convertir en póliza">
        <p>
          Cuando el cliente acepta, la póliza se registra desde la misma
          cotización. Además del permiso de cotizaciones, hace falta «Crear
          pólizas».
        </p>
        <Steps>
          <Step title="Marca la cotización como «Aceptada»">
            <p>Aparece el botón «Crear póliza».</p>
          </Step>
          <Step title="Haz clic en «Crear póliza»">
            <p>
              Se abre el formulario de póliza nueva con lo que trae la
              cotización: el cliente, la vigencia desde el inicio del contrato
              hasta el fin del último amparo, el ramo de cumplimiento del
              catálogo de la agencia y la prima neta. Lo que la agencia no tiene
              en su catálogo o en su plantilla queda en blanco.
            </p>
          </Step>
          <Step title="Elige la aseguradora y guarda la póliza">
            <p>
              La aseguradora se elige aquí. Al guardar, Nexus dice «Póliza
              creada y vinculada a la cotización» y vuelve a la cotización, que
              queda «Convertida».
            </p>
          </Step>
        </Steps>
        <p>
          La tarjeta «Vínculos» de la ficha enseña el cliente y la póliza.
          «Desvincular» suelta la póliza: la cotización vuelve a «Aceptada». Si
          la póliza se eliminó, la tarjeta lo dice y pide desvincularla para
          volver a convertirla. El registro de pólizas se explica en{" "}
          <ArticleLink to="polizas/registrar-una-poliza" />.
        </p>
        <p>
          Si el cliente de la cotización era un prospecto, pasa a «Cliente» con
          esa póliza (<ArticleLink to="clientes/prospectos" />
          ). Si el ramo de cumplimiento tiene apagado «Sus pólizas se renuevan»,
          la póliza sale en Pólizas › No renovables y, al llegar a su fin, queda
          «Terminada». La RCE que la acompaña se puede ligar a ella como
          derivada (
          <ArticleLink to="polizas/polizas-derivadas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="las-vistas" title="Las vistas del menú">
        <p>
          El menú de Cumplimiento ordena las cotizaciones por vistas. El
          buscador del listado busca por número, tomador o asegurado dentro de
          la vista abierta.
        </p>
        <ManualTable
          head={["Vista", "Qué reúne"]}
          rows={[
            ["Todas", "Todas las cotizaciones de la agencia."],
            ["Mías", "Las que creaste tú."],
            ["Borradores", "Las que aún no salen."],
            ["Enviadas", "Las marcadas como enviadas, también las vencidas."],
            ["Aceptadas", "Las aceptadas que aún no tienen póliza."],
            ["Convertidas", "Las que ya tienen su póliza vinculada."],
            ["Rechazadas", "Las que el cliente no aceptó."],
            [
              "Por vencer",
              "Las enviadas cuyo «Vigente hasta» llega en los próximos 7 días.",
            ],
            [
              "Por revisar",
              "Los borradores que creó el agente, para revisarlos antes de enviarlos.",
            ],
          ]}
        />
        <Screenshot
          id="cotizaciones-de-cumplimiento/listado"
          caption="Cumplimiento › Todas: el menú con sus vistas y el listado con cotización, tomador, valor del contrato, total, estado y «Vigente hasta»."
        />
      </ArticleSection>

      <ArticleSection id="eliminar" title="Eliminar una cotización">
        <p>
          El icono de la papelera, en la barra de la ficha, abre «Eliminar
          cotización». Eliminar es de una persona con el permiso «Crear y editar
          cotizaciones de cumplimiento».
        </p>
        <Callout type="warning">
          <p>
            Se borra la cotización. Los documentos que se exportaron de ella se
            conservan en Documentos.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
