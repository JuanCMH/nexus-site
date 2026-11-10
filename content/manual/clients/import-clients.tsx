import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-plantilla", title: "La plantilla de Excel" },
  { id: "subir-el-archivo", title: "Subir el archivo" },
  { id: "la-revision", title: "La revisión, fila por fila" },
  { id: "la-carga", title: "La carga" },
  { id: "el-resumen", title: "El resumen" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-plantilla" title="La plantilla de Excel">
        <p>
          Importar clientes pide el permiso «Crear clientes». En Clientes, haz
          clic en «Importar»: se abre «Importar clientes». En el celular,
          «Importar» está en «Más acciones», los tres puntos de la barra.
        </p>
        <p>
          El primer paso ofrece «Descargar plantilla». La plantilla la arma
          Nexus con los datos de la plantilla de clientes de tu agencia: trae
          una columna por cada dato, una fila de ejemplo y una hoja,
          «Instrucciones», que dice de cada columna si es obligatoria, qué va en
          ella y qué valores acepta. Los archivos, las imágenes y los campos que
          Nexus calcula no van en la plantilla.
        </p>
        <Screenshot
          id="clientes/importar"
          caption="La ventana «Importar clientes»: «Plantilla de Excel» con «Descargar plantilla» y, debajo, la zona para arrastrar o elegir el archivo."
        />
        <p>Al completarla:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Escribe un cliente por fila en la hoja «Clientes», desde la fila 2.
          </li>
          <li>
            No cambies los títulos de la fila 1: Nexus reconoce cada columna por
            su título, en cualquier orden.
          </li>
          <li>
            La fila que empieza por «EJEMPLO:» es una muestra; Nexus no la
            importa y puedes borrarla.
          </li>
          <li>
            Una columna que no uses puede quedar vacía o borrarse, salvo las
            obligatorias.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="subir-el-archivo" title="Subir el archivo">
        <p>
          Arrastra el archivo a la ventana o haz clic en la zona para elegirlo.
          Nexus acepta un libro de Excel (.xlsx) de hasta 20.000 filas. Mientras
          lo lee dice «Revisando el archivo…». Todavía no se importa nada.
        </p>
      </ArticleSection>

      <ArticleSection id="la-revision" title="La revisión, fila por fila">
        <p>
          El segundo paso, «Revisa el archivo antes de importar», cuenta las
          filas: «Filas con datos», «Listas para importar», «Ya están en Nexus»
          y «Con errores». Debajo, una tabla dice de cada error la «Fila», la
          «Columna» y «Qué hay que corregir».
        </p>
        <ManualTable
          head={["Lo que encuentra", "Qué pasa"]}
          rows={[
            [
              "Una columna obligatoria que falta",
              "No se puede importar ninguna fila. Añade la columna con ese título y vuelve a subir el archivo.",
            ],
            [
              "Una columna que no es de la plantilla",
              "No se importa. Nexus la nombra para que la revises.",
            ],
            ["Una columna repetida", "Se toma la primera."],
            [
              "Un cliente con una identificación que ya está en Nexus",
              "Cuenta en «Ya están en Nexus» y no se vuelve a importar.",
            ],
            [
              "Dos filas con la misma identificación",
              "La segunda queda con error: «repite la identificación de la fila N».",
            ],
            [
              "Un dato que no cumple su campo",
              "La fila queda con error y la tabla dice por qué: un correo mal escrito, una opción que no existe, un texto demasiado largo.",
            ],
          ]}
        />
        <p>
          Con filas válidas y otras con errores, puedes importar las válidas
          («Importar solo N clientes») y dejar las demás fuera, o corregir el
          archivo y subirlo con «Elegir otro archivo».
        </p>
      </ArticleSection>

      <ArticleSection id="la-carga" title="La carga">
        <p>
          Al importar, la ventana enseña el avance («Importando clientes…»).
          Nexus envía las filas por lotes: cada lote entra completo o no entra.
        </p>
        <Steps>
          <Step title="Deja Nexus abierto">
            <p>
              No cierres Nexus mientras termina. «Detener» para la carga al
              terminar el lote que está en curso; lo que ya entró se conserva, y
              «Continuar» la retoma.
            </p>
          </Step>
          <Step title="Si Nexus no acepta una fila">
            <p>
              La carga se detiene y dice qué fila y por qué. Puedes «Omitir la
              fila N», «Reintentar» o «Terminar aquí». Al continuar no se repite
              nada de lo que ya entró.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="el-resumen" title="El resumen">
        <p>
          El último paso, «Resumen de la importación», cuenta las filas
          «Importadas», las que «Ya estaban en Nexus» y las que tenían errores.
          Los clientes importados quedan confirmados, con la relación «Cliente»,
          y ya están en el listado, sin responsable: asígnalo con «Reasignar
          varios» (
          <ArticleLink to="clientes/responsable-del-cliente" />
          ).
        </p>
        <p>
          Las filas con errores no se importaron: corrígelas y súbelas en otro
          archivo con «Importar otro archivo».
        </p>
        <Callout type="tip">
          <p>
            Si la carga no terminó, vuelve a subir el mismo archivo: lo que ya
            está en Nexus no se importa otra vez.
          </p>
        </Callout>
        <p>
          El agente también puede proponer clientes en lote; esos entran «Por
          confirmar» o confirmados, según cómo supervise la agencia (
          <ArticleLink to="agente/por-confirmar" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
