import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-editor", title: "El editor de plantillas" },
  { id: "secciones-y-campos", title: "Secciones y campos" },
  { id: "tipos-de-campo", title: "Los tipos de campo" },
  { id: "campos-del-sistema", title: "Los campos del sistema del cliente" },
  { id: "listas-de-polizas", title: "Las listas de pólizas de la ficha" },
  { id: "guardar", title: "Guardar o proponer" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-editor" title="El editor de plantillas">
        <p>
          La plantilla de clientes es el formulario con el que se crea y se
          edita un cliente, y la forma de su ficha. Está en Configuración →
          Plantillas → «Clientes». Verla pide «Ver las plantillas»; cambiarla,
          «Editar la plantilla de clientes». Quien ve clientes ya ve los campos
          de su ficha sin estos permisos.
        </p>
        <p>
          Al abrirla, el menú de Configuración deja su sitio al de la plantilla:
          arriba, «Clientes» y «Pólizas» para pasar de una plantilla a la otra;
          debajo, las «Secciones» con cuántos campos tiene cada una, y «De toda
          la plantilla»: «Campos de filtro» y «Reglas y cálculos». Arriba a la
          derecha, «Estructura» y «Vista previa», que enseña el formulario como
          lo verá quien lo completa.
        </p>
        <Screenshot
          id="configuracion/plantilla-clientes"
          caption="La plantilla de clientes de Altavista Seguros abierta en «Identificación»: los campos de la sección a la izquierda y su configuración a la derecha."
        />
        <p>
          Lo que el editor enseña de comportamiento (campos que aparecen según
          otro, campos calculados, valores sugeridos, fechas con seguimiento) es
          igual en las dos plantillas y se explica en{" "}
          <ArticleLink to="configuracion/plantillas-de-polizas" />.
        </p>
      </ArticleSection>

      <ArticleSection id="secciones-y-campos" title="Secciones y campos">
        <p>
          Una sección es un grupo de campos, con su nombre y una descripción
          opcional; en el formulario sale como un paso. «Nueva sección» añade
          una; «Duplicar sección» y «Eliminar» están al pie de su configuración.
          Una «Sección del sistema» se renombra y se mueve, pero no se elimina.
        </p>
        <p>
          «Añadir campo» abre la lista de tipos. Cada campo sale como una
          tarjeta con su tipo y su ancho, y marcas como «Del sistema», «En el
          listado» o «Reservado». Al hacer clic en uno, su configuración se abre
          a la derecha en tres pestañas:
        </p>
        <ManualTable
          head={["Pestaña", "Qué se ajusta"]}
          rows={[
            [
              "General",
              "«Etiqueta», «Ayuda», «Ancho» (un cuarto, media, tres cuartos o fila entera), «Texto de ejemplo», «Obligatorio», «Dato reservado» y «Mostrar como columna en el listado». En una lista, sus «Opciones»; en un archivo, los «Formatos admitidos» y el «Tamaño máximo».",
            ],
            [
              "Comportamiento",
              "Cuándo se muestra, si se calcula, qué valor sugiere y, en una fecha, su seguimiento.",
            ],
            [
              "Agente",
              "«Indicación para el agente»: cómo debe obtener o interpretar el campo al leer documentos. La persona no la ve en el formulario.",
            ],
          ]}
        />
        <Callout type="warning">
          <p>
            Si quitas un campo que ya tiene respuestas, el editor dice cuántas
            tiene: al guardar la plantilla se borran y no se pueden recuperar.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="tipos-de-campo" title="Los tipos de campo">
        <p>Una agencia puede añadir 14 tipos de campo, en cuatro grupos:</p>
        <ManualTable
          head={["Tipo", "Para qué"]}
          rows={[
            ["Texto corto", "Una línea."],
            ["Texto largo", "Varias líneas."],
            ["Correo", "Con formato de correo."],
            ["Teléfono", "Número de contacto."],
            ["Enlace", "Una dirección web."],
            ["Número", "Entero o decimal."],
            ["Moneda", "Importe en pesos."],
            ["Fecha", "Un día del calendario."],
            ["Hora", "Una hora del día."],
            ["Lista", "Una opción de varias."],
            ["Lista múltiple", "Varias opciones."],
            ["Casilla", "Sí o no."],
            ["Archivo", "Un documento adjunto."],
            ["Imagen", "Una foto."],
          ]}
        />
        <p>
          El tipo de un campo del sistema no se cambia. Hay dos tipos más que
          solo traen los campos del sistema de la plantilla de pólizas:
          «Catálogo» (la aseguradora y el ramo) y «Cliente».
        </p>
      </ArticleSection>

      <ArticleSection
        id="campos-del-sistema"
        title="Los campos del sistema del cliente"
      >
        <p>
          Toda plantilla de clientes trae el nombre y el número de
          identificación, obligatorios, y dos campos opcionales: «Tipo de
          persona» (Persona natural, Persona jurídica) y «Origen», de dónde
          llegó el cliente a la agencia (Referido, Gestión comercial, Canal
          digital, Otro). Llevan la marca «Del sistema»: no se pueden quitar ni
          cambiar de tipo, y lo demás (la etiqueta, la ayuda, el ancho) sí se
          ajusta.
        </p>
        <p>
          Si la plantilla ya tenía un campo propio con ese mismo dato, «Usar un
          campo que ya tengo» pasa sus respuestas al campo del sistema, que toma
          su lugar y su etiqueta; el campo propio deja de existir. Se hace con
          la plantilla guardada.
        </p>
      </ArticleSection>

      <ArticleSection
        id="listas-de-polizas"
        title="Las listas de pólizas de la ficha"
      >
        <p>
          La plantilla de clientes decide también cómo se reparten las pólizas
          de un cliente en su ficha. Cada sección puede llevar «Listas de
          pólizas», que salen debajo de sus campos, hasta 30 en la plantilla.
          Las listas no son campos: no guardan datos, ordenan lo que ya existe.
        </p>
        <Steps>
          <Step title="Abre la sección y haz clic en «Añadir lista»">
            <p>Está en la configuración de la sección, a la derecha.</p>
          </Step>
          <Step title="Dile qué pólizas trae">
            <p>
              En «Qué pólizas trae», reglas sobre los campos de la plantilla de
              pólizas («Cuando el campo», «Cumple», «Valor»): «Ramo» es igual a
              «Automóviles». Sin reglas, trae todas las pólizas del cliente.
              También se puede preguntar si la póliza está «Vencida sin
              resolver» o si su «Ramo renovable».
            </p>
            <Screenshot
              id="configuracion/lista-de-polizas"
              caption="La lista «Generales · Autos»: trae las pólizas cuyo «Ramo» es igual a «Automóviles», ordenadas por «Fin de vigencia», la más reciente primero, y se presenta «Destacada»."
            />
          </Step>
          <Step title="Elige el orden y la presentación">
            <p>
              «Orden», por fin de vigencia, inicio de vigencia o fecha de
              expedición; lo vencido sin resolver va siempre primero.
              «Presentación»: «Destacada», abierta, con todas sus filas a la
              vista, o «Discreta», una línea con el nombre y el conteo que se
              abre para consultar.
            </p>
          </Step>
          <Step title="Haz clic en «Listo» y guarda la plantilla" />
        </Steps>
        <p>
          Sin ninguna lista, la ficha enseña lo vigente a la vista y el
          historial aparte. Lo que ninguna lista recoge sale en «Otras pólizas».
          Cómo se ve en la ficha está en{" "}
          <ArticleLink to="clientes/ficha-del-cliente" />.
        </p>
      </ArticleSection>

      <ArticleSection id="guardar" title="Guardar o proponer">
        <p>
          Junto a los botones, el editor dice si la plantilla está «Guardada» o
          cuántos cambios tiene sin guardar («3 cambios sin guardar»). «Guardar»
          aplica los cambios; «Descartar» vuelve a la versión guardada.
        </p>
        <p>
          Quien no puede editarla pero tiene «Proponer cambios en la
          configuración» ve «Proponer cambios». Al terminar, «Enviar propuesta»
          pide «Qué cambia y por qué»: la plantilla vigente no cambia hasta que
          la revisa y la guarda quien edita las plantillas. Las propuestas del
          agente llegan igual, y la entrada de la plantilla en el menú lleva una
          marca mientras esperan.
        </p>
      </ArticleSection>
    </>
  );
}
