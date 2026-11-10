import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "antes-de-empezar", title: "Antes de empezar" },
  { id: "registrar-la-poliza", title: "Registrar la póliza" },
  { id: "como-queda", title: "«Cómo queda»" },
  { id: "los-avisos", title: "Los avisos del formulario" },
  { id: "datos-reservados", title: "Los datos reservados" },
  { id: "forma-de-pago", title: "La forma de pago" },
  { id: "editar-o-eliminar", title: "Editar o eliminar una póliza" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="antes-de-empezar" title="Antes de empezar">
        <p>
          Registrar pólizas pide el permiso «Crear pólizas». El formulario es el
          de la plantilla de pólizas de tu agencia (
          <ArticleLink to="configuracion/plantillas-de-polizas" />
          ). Toda plantilla trae el número de póliza, el cliente, la
          aseguradora, el ramo y las fechas de expedición, inicio y fin de
          vigencia. El estado no se pide: lo dan las fechas.
        </p>
        <p>
          La aseguradora y el ramo se eligen de los catálogos de la agencia (
          <ArticleLink to="configuracion/aseguradoras" /> y{" "}
          <ArticleLink to="configuracion/ramos" />
          ), y el cliente, entre los que ya están en Nexus. Si el cliente es
          nuevo, créalo primero (<ArticleLink to="clientes/crear-un-cliente" />
          ). Si el cliente es un prospecto, pasa a cliente con su primera póliza
          vigente o por iniciar (<ArticleLink to="clientes/prospectos" />
          ).
        </p>
        <p>
          El formulario no pide la póliza principal. Si la póliza deriva de
          otra, como la RCE de un contrato de cumplimiento, se liga después
          desde su ficha (<ArticleLink to="polizas/polizas-derivadas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="registrar-la-poliza" title="Registrar la póliza">
        <Video id="polizas/registrar-una-poliza" />
        <Steps>
          <Step title="Abre «Nueva póliza»">
            <p>
              Desde Pólizas, con «Nueva póliza» en la barra superior, o desde la
              ficha de un cliente, con el acceso «Póliza»: entonces el
              formulario nace con ese cliente puesto.
            </p>
          </Step>
          <Step title="Completa cada sección">
            <p>
              El formulario enseña una sección a la vez. A la izquierda, la
              lista de secciones dice lo que falta en cada una, y
              «Obligatorios», cuántos van completos. Una sección que depende de
              otro dato lo dice debajo de su nombre (por ejemplo, «Cuando «Ramo»
              es alguno de…») y aparece cuando se cumple.
            </p>
            <Screenshot
              id="polizas/nueva-poliza"
              caption="La página «Nueva póliza» en la sección Información general: Número de póliza, Aseguradora, Ramo, Cliente y Clave del intermediario; a la derecha, «Cómo queda»."
            />
          </Step>
          <Step title="Haz clic en «Crear póliza»">
            <p>
              Si falta un dato obligatorio, el formulario lo nombra y lleva a
              él. Con todo completo aparece «Póliza creada» y se abre la ficha
              de la nueva póliza.
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            En una ventana estrecha, la lista de secciones es un selector, y
            «Cómo queda» se abre con «Resumen».
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="como-queda" title="«Cómo queda»">
        <p>El panel de la derecha se completa mientras escribes:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            La póliza: el número, el ramo y la aseguradora, la barra de vigencia
            (cuando hay inicio y fin) y la prima.
          </li>
          <li>
            El cliente elegido, con su cartera vigente y la frase «La póliza
            queda a cargo de…»: la póliza toma el responsable del cliente (
            <ArticleLink to="clientes/responsable-del-cliente" />
            ).
          </li>
          <li>
            «Posible póliza anterior»: si tu rol puede renovar, las pólizas del
            mismo cliente y ramo de las que esta podría ser la renovación.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="los-avisos" title="Los avisos del formulario">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «La vigencia se cruza con otra».
            </strong>{" "}
            El número ya está en Nexus con una vigencia que se pisa con la que
            escribiste. Nexus no la guarda: si es la misma póliza, edita esa; si
            es su renovación, la nueva vigencia empieza cuando termina la
            anterior.
          </li>
          <li>
            <strong className="font-medium">«Posible póliza anterior»</strong>.
            Si la que registras es la renovación de una de las que propone, haz
            clic en su «Es su renovación»: el aviso cambia a «Renueva la
            póliza…» y el botón, a «Crear y encadenar». Al guardar quedan
            encadenadas y la anterior deja de requerir seguimiento. «No es su
            renovación» deshace la elección.
          </li>
        </ul>
        <p>
          Para renovar una póliza que ya tienes abierta, es más directo
          «Renovar», en su ficha (
          <ArticleLink to="polizas/renovar-una-poliza" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="datos-reservados" title="Los datos reservados">
        <p>
          Toda plantilla de pólizas trae, opcionales, «Prima neta», «Valor
          asegurado», «Tipo de negocio», «Forma de pago», «% de comisión» y «%
          del comercial» (la agencia puede cambiarles la etiqueta). Los dos
          porcentajes son datos reservados: solo los ve quien tiene el permiso
          «Ver datos reservados y comisiones». La agencia puede marcar como
          reservado cualquier otro campo de su plantilla.
        </p>
        <p>
          Quien no tiene ese permiso ve el formulario y la ficha sin los datos
          reservados. Al guardar, los que ya tenían valor se conservan.
        </p>
        <Callout type="tip">
          <p>
            «% de comisión» vacío toma el porcentaje del ramo. «Tipo de negocio»
            vacío lo deduce Nexus de si la póliza renueva otra. «Forma de pago»
            vacía toma la del ramo.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="forma-de-pago" title="La forma de pago">
        <p>
          «Forma de pago» dice cómo se cobra la prima: «Pago único», «Anual»,
          «Semestral», «Trimestral» o «Mensual». Se llena con lo que diga la
          carátula. Vacía, la póliza toma la forma de pago de su ramo, «Forma de
          pago de sus pólizas» en su configuración (
          <ArticleLink to="configuracion/ramos" />
          ), y si el ramo no tiene, pago único.
        </p>
        <p>
          De la forma de pago sale la producción causada del tablero de la
          agencia: cada cuota cuenta en la fecha en que empieza su período de
          cobro. Nexus no registra pagos. Se explica en
          <ArticleLink to="inicio/tablero-de-la-agencia" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="editar-o-eliminar"
        title="Editar o eliminar una póliza"
      >
        <p>
          En la ficha, «Editar» abre el formulario con los datos de la póliza,
          en la sección de la pestaña que estabas viendo. Pide el permiso
          «Editar pólizas». Al guardar aparece «Póliza actualizada».
        </p>
        <p>
          Con el permiso «Eliminar pólizas», «Eliminar la póliza» está al final
          del menú «Más acciones» de la ficha. Nexus pide confirmar.
        </p>
        <Callout type="warning">
          <p>
            Eliminar no se deshace. Los documentos de la póliza quedan en la
            agencia, sin vincular, y sus anexos se borran. Si otras pólizas
            derivaban de ella, quedan sueltas y vuelven a seguir la regla de su
            ramo. Para una póliza que se canceló o que no se renueva están
            «Cancelar la póliza» y «No se renueva» (
            <ArticleLink to="polizas/cancelar-o-cerrar-una-poliza" />
            ).
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
