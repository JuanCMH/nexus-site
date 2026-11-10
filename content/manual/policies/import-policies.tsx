import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "antes-de-empezar", title: "Antes de empezar" },
  { id: "las-columnas", title: "Las columnas de las pólizas" },
  { id: "la-revision", title: "Lo que revisa Nexus" },
  { id: "despues", title: "Después de importar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="antes-de-empezar" title="Antes de empezar">
        <p>
          Importar pólizas pide el permiso «Crear pólizas». El recorrido es el
          mismo que el de los clientes: descargar la plantilla, completarla,
          subirla, revisar las filas e importar. Cada paso se explica en{" "}
          <ArticleLink to="clientes/importar-clientes" />; aquí va lo que es
          propio de las pólizas.
        </p>
        <Callout type="warning">
          <p>
            El cliente de cada póliza tiene que estar ya en Nexus. Importa
            primero los clientes.
          </p>
        </Callout>
        <p>
          En Pólizas, haz clic en «Importar» (en el celular, en «Más acciones»).
          La ventana es «Importar pólizas».
        </p>
        <Screenshot
          id="polizas/importar"
          caption="La ventana «Importar pólizas»: «Plantilla de Excel» con «Descargar plantilla», el aviso de que el cliente de cada póliza tiene que estar ya en Nexus y la zona para subir el archivo."
        />
      </ArticleSection>

      <ArticleSection id="las-columnas" title="Las columnas de las pólizas">
        <p>
          La plantilla trae una columna por cada dato de la plantilla de pólizas
          de tu agencia, en la hoja «Pólizas». La hoja «Instrucciones» dice qué
          va en cada una. Lo propio de las pólizas:
        </p>
        <ManualTable
          head={["Columna", "Qué va"]}
          rows={[
            [
              "Cliente (identificación)",
              "El número de identificación del cliente, no su nombre.",
            ],
            [
              "Aseguradora y Ramo",
              "El nombre de una aseguradora o de un ramo de la agencia, como aparece en las instrucciones. Si la agencia aún no tiene ninguno, créalos antes de importar.",
            ],
            [
              "Estado",
              "Vacía: Nexus calcula el estado con las fechas. Escribe «Cancelada» solo si la póliza se canceló.",
            ],
            [
              "Forma de pago",
              "Una de las opciones que dicen las instrucciones: «Pago único», «Anual», «Semestral», «Trimestral» o «Mensual». Vacía, la póliza toma la de su ramo.",
            ],
            [
              "Las fechas",
              "Día, mes y año (31/12/2026), o una celda con formato de fecha.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="la-revision" title="Lo que revisa Nexus">
        <p>
          Además de que cada dato cumpla su campo, Nexus revisa dos cosas de
          cada fila antes de importar:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Que el cliente exista.</strong> Si
            no hay un cliente con esa identificación, la fila queda con error.
          </li>
          <li>
            <strong className="font-medium">
              Que la póliza no esté ya en Nexus.
            </strong>{" "}
            Si el mismo número ya está con una vigencia que se cruza con la de
            la fila, la fila cuenta en «Ya están en Nexus» y no se importa otra
            vez. Por eso se puede volver a subir el mismo archivo si una carga
            no terminó.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="despues" title="Después de importar">
        <p>
          Las pólizas importadas quedan confirmadas y ya están en el listado.
          Cada una toma el responsable de su cliente, y su estado sale de sus
          fechas. Si el cliente era un prospecto y la póliza está vigente o por
          iniciar, el cliente pasa a «Cliente» (
          <ArticleLink to="clientes/prospectos" />
          ).
        </p>
        <p>
          Una póliza importada como «Cancelada» queda sin fecha de cancelación.
          Se registra después en su ficha, con «Registrar la fecha de
          cancelación» (
          <ArticleLink to="polizas/cancelar-o-cerrar-una-poliza" />
          ).
        </p>
        <p>
          Una importación no encadena las renovaciones. Si importaste varias
          vigencias de la misma póliza, la ficha de cada una puede proponer su
          «Posible póliza anterior» para encadenarlas (
          <ArticleLink to="polizas/renovar-una-poliza" />
          ). Tampoco liga las derivadas con su principal: se indica en la ficha
          de cada derivada (<ArticleLink to="polizas/polizas-derivadas" />
          ), y los anexos se registran en la ficha de su póliza (
          <ArticleLink to="polizas/anexos-de-una-poliza" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
