import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "campos-del-sistema", title: "Los campos del sistema de la póliza" },
  { id: "reservados", title: "Datos reservados" },
  { id: "condiciones", title: "Campos que aparecen según otro" },
  { id: "calculados", title: "Campos calculados y valores sugeridos" },
  { id: "seguimiento", title: "Fechas con seguimiento" },
  { id: "filtros-y-reglas", title: "Campos de filtro y reglas" },
];

export function Article() {
  return (
    <>
      <ArticleSection
        id="campos-del-sistema"
        title="Los campos del sistema de la póliza"
      >
        <Video id="configuracion/plantilla-de-polizas" />
        <p>
          La plantilla de pólizas está en Configuración → Plantillas →
          «Pólizas». Se edita con el mismo editor que la de clientes (
          <ArticleLink to="configuracion/plantillas-de-clientes" />
          ), y cambiarla pide «Editar la plantilla de pólizas».
        </p>
        <p>
          Toda plantilla de pólizas trae estos campos, con la marca «Del
          sistema». No se pueden quitar ni cambiar de tipo; la etiqueta, la
          ayuda y el ancho sí se ajustan.
        </p>
        <ManualTable
          head={["Campo", "Cómo viene"]}
          rows={[
            [
              "Número de póliza, Estado",
              "Obligatorios. «Estado» trae sus opciones: Vigente, Por iniciar, Vencida y Cancelada.",
            ],
            [
              "Cliente, Aseguradora, Ramo",
              "Se eligen del registro y de los catálogos.",
            ],
            [
              "Fecha de expedición, Inicio de vigencia, Fin de vigencia",
              "Obligatorios. «Fin de vigencia» viene con seguimiento.",
            ],
            [
              "Prima neta",
              "Opcional. Sin IVA ni gastos de expedición: de ella salen el Inicio y la comisión.",
            ],
            ["Valor asegurado", "Opcional."],
            [
              "Tipo de negocio",
              "Opcional: Nuevo o Renovación. Vacío, Nexus lo deduce de si la póliza renueva otra.",
            ],
            [
              "Forma de pago",
              "Opcional: Pago único, Anual, Semestral, Trimestral o Mensual. Vacío, la póliza toma la forma de pago de su ramo o, si el ramo no tiene, pago único. De ella sale la producción causada del tablero.",
            ],
            ["% de comisión, % del comercial", "Opcionales y reservados."],
          ]}
        />
        <Screenshot
          id="configuracion/campo-del-sistema"
          caption="La sección «Valores» de la plantilla de pólizas, con «Prima» abierto: «Campo del sistema: no se puede quitar ni cambiar de tipo. Lo demás sí se ajusta»."
        />
        <p>
          Si la plantilla ya tenía un campo propio con uno de estos datos (una
          «Prima» que la agencia creó antes), «Usar un campo que ya tengo» pasa
          sus respuestas al campo del sistema.
        </p>
      </ArticleSection>

      <ArticleSection id="reservados" title="Datos reservados">
        <p>
          «Dato reservado», en la pestaña «General» de un campo, lo deja solo
          para quienes tienen «Ver datos reservados y comisiones». Quien no lo
          tiene no ve el campo en sus formularios ni su valor en las fichas y
          los listados, y al guardar no borra lo que no se le enseñó.
        </p>
        <p>
          «% de comisión» y «% del comercial» nacen reservados y no se pueden
          dejar de reservar. Un campo reservado no puede ser obligatorio.
        </p>
      </ArticleSection>

      <ArticleSection id="condiciones" title="Campos que aparecen según otro">
        <p>
          En «Comportamiento» → «Se muestra cuando», un campo puede depender de
          otra respuesta: «Agencia del convenio» se muestra si «Clave del
          intermediario» es igual a «Convenio con otra agencia». Las condiciones
          se arman con el campo, la comparación («es igual a», «es distinto de»,
          «es alguno de», «es mayor que», «es anterior a», «está vacío», «está
          marcada»…) y el valor; cada tipo de campo ofrece solo las
          comparaciones que le sirven.
        </p>
        <p>
          Mientras está oculto, el campo no se exige y lo que tuviera escrito no
          se guarda. Si es obligatorio, lo es «cuando se muestra». Una sección
          entera también puede llevar una condición: sus campos la heredan.
        </p>
      </ArticleSection>

      <ArticleSection
        id="calculados"
        title="Campos calculados y valores sugeridos"
      >
        <p>
          En «Comportamiento» → «Valor», un campo puede calcularse a partir de
          otros. Nadie lo escribe, y por eso no puede ser obligatorio. Lo que
          depende de la fecha de hoy se calcula al abrir el formulario y no se
          guarda.
        </p>
        <ManualTable
          head={["Cálculo", "Qué hace"]}
          rows={[
            [
              "Porcentaje de un campo",
              "Un porcentaje de un número o un importe: el IVA de una prima.",
            ],
            [
              "Operación entre campos",
              "Suma, resta, multiplica o divide dos o más campos.",
            ],
            [
              "Días hasta una fecha",
              "Cuántos días faltan. Cambia cada día, así que no se guarda.",
            ],
            ["Días desde una fecha", "Cuántos días han pasado. No se guarda."],
            ["Años desde una fecha", "Edad o antigüedad, en años cumplidos."],
            [
              "Fecha más un plazo",
              "Una fecha a partir de otra: la expedición más un año.",
            ],
            [
              "Conteo de marcadas",
              "Cuántas opciones de una lista múltiple están marcadas.",
            ],
            ["Texto compuesto", "Une campos y texto fijo: «Cliente - Placa»."],
            [
              "Fórmula",
              "Campos, números y operadores, con × y ÷ antes de + y −.",
            ],
          ]}
        />
        <p>
          «Valor sugerido», en campos de lista, casilla, texto corto y fecha,
          completa el campo según otra respuesta. Se aplica la primera regla que
          se cumpla, y quien responde puede cambiar el valor después.
        </p>
      </ArticleSection>

      <ArticleSection id="seguimiento" title="Fechas con seguimiento">
        <p>
          Una fecha con seguimiento enseña en cada ficha y en el listado si está
          «Vigente», «Por vencer» o «Vencida», y hace que Nexus cree una tarea
          antes de que llegue. Nexus no envía correos por su cuenta: lo que crea
          es una tarea.
        </p>
        <Steps>
          <Step title="Abre el comportamiento de la fecha">
            <p>
              Haz clic en el campo, pestaña «Comportamiento», y en
              «Seguimiento». Se abre «Comportamiento de …».
            </p>
          </Step>
          <Step title="Di desde cuándo está por vencer">
            <p>
              En «“Por vencer” desde», cuántos días antes de la fecha. Antes de
              eso la fecha está vigente; al pasarla, vencida.
            </p>
          </Step>
          <Step title="Elige la antelación de la tarea">
            <p>
              Los días antes de la fecha en que Nexus crea la tarea: 30, 15 o 7
              días, «El mismo día» u otro número con «Añadir».
            </p>
            <Screenshot
              id="configuracion/seguimiento-de-fecha"
              caption="El seguimiento de «Fin de vigencia»: «Por vencer» desde 30 días antes y tareas a los 30, 15 y 7 días, para el reparto de la agencia."
            />
          </Step>
          <Step title="Elige el responsable y los pasos">
            <p>
              En «Responsable», una persona o «Reparto de la agencia», que sigue
              las reglas de Directrices → Reparto (
              <ArticleLink to="directrices/reparto" />
              ). «Paso “Avisar al cliente”» añade a la tarea el paso de
              avisarle, con el correo de un campo de la plantilla; si la agencia
              tiene agente, él redacta el correo y una persona lo envía.
            </p>
          </Step>
          <Step title="Haz clic en «Listo» y guarda la plantilla" />
        </Steps>
        <Callout type="note">
          <p>
            En «Fin de vigencia», la tarea es la de renovación de la póliza. Si
            la agencia tiene activadas las tareas de renovación automáticas en
            Tareas → Plazos, se usa esa antelación y no la de la plantilla (
            <ArticleLink to="tareas/plazos-y-tareas-automaticas" />
            ).
          </p>
        </Callout>
        <p>
          En otra fecha, la tarea lleva la fecha como límite. Si la fecha se
          escribe tarde, Nexus crea solo la del plazo más cercano; si la tarea
          anterior sigue abierta, la vuelve a mostrar como nueva en vez de crear
          otra; y si la fecha cambia, los plazos cuentan de nuevo.
        </p>
      </ArticleSection>

      <ArticleSection id="filtros-y-reglas" title="Campos de filtro y reglas">
        <p>
          En «De toda la plantilla», «Campos de filtro» elige hasta 3 campos por
          los que se podrá filtrar el listado de pólizas, además del buscador,
          en el orden en que se ponen.
        </p>
        <p>
          «Reglas y cálculos» reúne cada campo con reglas, en una frase por
          regla: «Prima total», «“Prima” + “Gastos de expedición” + “Asistencia”
          + “IVA”». Al hacer clic en uno, se abre.
        </p>
      </ArticleSection>
    </>
  );
}
