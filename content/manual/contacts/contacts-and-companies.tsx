import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-directorio", title: "El directorio" },
  { id: "la-ficha", title: "La ficha de un contacto" },
  { id: "se-encarga-de", title: "«Se encarga de»" },
  { id: "anadir", title: "Añadir un contacto" },
  { id: "empresas", title: "Las empresas" },
  { id: "ya-no-esta", title: "Cuando alguien deja su empresa" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-directorio" title="El directorio">
        <p>
          «Contactos», en el grupo «Recursos» del menú, reúne a las personas con
          las que la agencia trabaja fuera de ella: en cada aseguradora y en
          cada empresa con la que trata, como un proveedor, un ajustador o un
          taller. De cada una dice de qué se encarga y lo que la agencia sabe de
          ella. El agente las consulta para saber a quién dirigirse.
        </p>
        <p>El menú del módulo tiene estas vistas:</p>
        <ManualTable
          head={["Vista", "Qué enseña"]}
          rows={[
            ["«Todos»", "Los contactos de la agencia, agrupados por empresa."],
            ["«Los que atiendo»", "Los que tienen tu nombre en «Lo atiende»."],
            [
              "«Empresas»",
              "Las aseguradoras con contactos y las empresas de contacto, con cuántas personas tiene cada una.",
            ],
            [
              "«Por tipo de empresa»",
              "Un acceso por tipo («Aseguradora», «Proveedor», «Taller»…), con su cifra de contactos activos.",
            ],
            [
              "«Por confirmar»",
              <>
                Los contactos propuestos y los que tienen notas propuestas (
                <ArticleLink to="contactos/confirmar-contactos" />
                ).
              </>,
            ],
            [
              "«Ya no están»",
              "Los contactos marcados «Ya no está», con quién los reemplaza.",
            ],
          ]}
        />
        <p>
          Sobre la lista, el buscador encuentra por nombre, cargo o correo;
          «Todas las empresas» filtra por empresa, y «Filtro» por función, ramo,
          «Se encarga de» o «Lo atiende». El contacto elegido se lee a la
          derecha; con la ventana estrecha, en un panel lateral.
        </p>
        <Screenshot
          id="contactos/todos"
          caption="«Contactos → Todos»: los contactos agrupados por empresa y, a la derecha, la ficha de Luisa Fernanda Ríos con «Se encarga de», «Datos de contacto» y «Lo que sabemos»."
        />
        <p>
          Ver los contactos requiere el permiso «Ver los contactos». Crearlos,
          editarlos y confirmarlos, «Llevar los contactos».
        </p>
      </ArticleSection>

      <ArticleSection id="la-ficha" title="La ficha de un contacto">
        <Video id="contactos/contactos-y-empresas" />
        <p>
          La cabecera da el nombre, el cargo y la empresa, con su «Función» y
          quién de la agencia lo atiende («Lo atiende»). Si el contacto salió de
          un correo, una línea dice su procedencia («Se encontró en el correo …,
          remitente …» y la fecha) con «Ver la conversación» (
          <ArticleLink to="correos/conversacion-de-un-correo" />
          ). Debajo:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Se encarga de»</strong>: sus
            responsabilidades.
          </li>
          <li>
            <strong className="font-medium">«Datos de contacto»</strong>:
            correos, teléfonos, canal preferido, horario y ciudad. El icono
            junto a un correo o un teléfono lo copia.
          </li>
          <li>
            <strong className="font-medium">«En …»</strong>: las demás personas
            de su empresa.
          </li>
          <li>
            <strong className="font-medium">«Lo que sabemos»</strong>: las notas
            de la agencia sobre esa persona (
            <ArticleLink to="contactos/lo-que-sabemos" />
            ).
          </li>
        </ul>
        <p>
          «Abrir la ficha» la abre en su propia página. «Editar» abre el
          formulario.
        </p>
      </ArticleSection>

      <ArticleSection id="se-encarga-de" title="«Se encarga de»">
        <p>
          Cada responsabilidad es una frase con su clase y, si aplica, sus
          ramos. Con esto el agente sabe a quién pedirle algo y quién envía qué.
          Sin ramos, la responsabilidad vale para todos.
        </p>
        <ManualTable
          head={["Clase", "Para qué"]}
          rows={[
            [
              "«Atiende»",
              "Lo que se le pide o lleva: expedir, modificar, cotizar.",
            ],
            [
              "«Nos envía»",
              "Lo que manda a la agencia: comisiones, cartera, circulares.",
            ],
            ["«Aprueba»", "Lo que autoriza: cupos, excepciones, tasas."],
            ["«Para escalar»", "A quien se acude cuando lo demás no responde."],
          ]}
        />
        <p>
          En la lista se lee en una línea: «Atiende · Cotización y expedición ·
          Cumplimiento».
        </p>
      </ArticleSection>

      <ArticleSection id="anadir" title="Añadir un contacto">
        <Steps>
          <Step title="Haz clic en «Nuevo contacto»">
            <p>En la barra superior de «Contactos».</p>
          </Step>
          <Step title="Elige la «Empresa»">
            <p>
              Una aseguradora del catálogo o una empresa de contacto. Si la
              empresa aún no está, «Nueva empresa», bajo el campo, la crea.
            </p>
          </Step>
          <Step title="Completa sus datos">
            <p>
              «Nombre», «Ciudad», «Cargo» (como lo firma), «Área» y «Función»,
              que es con lo que se busca: «Gerente», «Analista», «Siniestros».
              En «Lo atiende», la persona del equipo que lleva la relación, o
              «Nadie en particular».
            </p>
          </Step>
          <Step title="Di cómo se le escribe">
            <p>
              «Correos» (el primero es el principal), «Teléfonos» con su
              etiqueta, «Canal preferido» y «Horario». Una dirección de correo
              es de un solo contacto.
            </p>
          </Step>
          <Step title="Añade lo que hace">
            <p>
              Con «Añadir responsabilidad»: la «Clase», «Qué hace» y los
              «Ramos».
            </p>
          </Step>
          <Step title="Haz clic en «Añadir contacto»" />
        </Steps>
        <Callout type="note">
          <p>
            Quien tiene «Ver los contactos» pero no «Llevar los contactos» ve
            «Proponer contacto» en lugar de «Nuevo contacto». Lo que propone
            queda por confirmar hasta que lo confirma quien lleva los contactos.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="empresas" title="Las empresas">
        <p>
          Una empresa de contacto es una empresa con la que trabaja la agencia y
          que no es una aseguradora: un proveedor, un ajustador, un taller. Se
          crea con «Nueva empresa», con su «Nombre», su «Tipo», «Correo»,
          «Teléfono» y «Sitio web». El tipo lo escribe la agencia, y con él se
          agrupan las empresas en «Por tipo de empresa».
        </p>
        <Screenshot
          id="contactos/empresas"
          caption="«Contactos → Empresas»: aseguradoras y empresas de contacto, con su tipo, cuántas personas tienen y las clases de responsabilidad que cubren."
        />
        <p>
          Las aseguradoras no se crean aquí: son las del catálogo de la agencia
          (<ArticleLink to="configuracion/aseguradoras" />
          ). Al elegir una en «Empresas» se ven sus contactos, y «Abrir en
          Configuración» lleva a su ficha, donde están las notas de la agencia
          sobre la aseguradora.
        </p>
      </ArticleSection>

      <ArticleSection id="ya-no-esta" title="Cuando alguien deja su empresa">
        <p>
          En el menú «Más acciones» de un contacto, «Ya no está…» lo marca como
          fuera de su empresa. Sigue en Contactos, en la vista «Ya no están», y
          el agente deja de escribirle.
        </p>
        <p>
          Al marcarlo se elige quién «Lo reemplaza» entre los contactos activos
          de su empresa. Lo que se sabía de su cargo pasa a esa persona; lo que
          se sabía de la persona se queda con ella. «Vuelve a estar» deshace la
          marca.
        </p>
        <Callout type="warning">
          <p>
            «Eliminar» borra el contacto y todo lo que se sabía de esa persona,
            y no se puede deshacer. Si dejó su empresa, márcalo «Ya no está» en
            su lugar.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
