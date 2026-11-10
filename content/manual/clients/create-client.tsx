import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "antes-de-empezar", title: "Antes de empezar" },
  { id: "crear-el-cliente", title: "Crear el cliente" },
  { id: "los-avisos", title: "Los avisos del formulario" },
  { id: "editar", title: "Editar un cliente" },
  { id: "eliminar", title: "Eliminar un cliente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="antes-de-empezar" title="Antes de empezar">
        <p>
          Crear clientes pide el permiso «Crear clientes». Los datos que pide el
          formulario, y cuáles son obligatorios, los define la plantilla de
          clientes de tu agencia (
          <ArticleLink to="configuracion/plantillas-de-clientes" />
          ). Toda plantilla pide el nombre y el número de identificación; los
          demás datos son los que la agencia añadió.
        </p>
        <p>
          Si vas a registrar muchos clientes de una vez, es más rápido{" "}
          <ArticleLink to="clientes/importar-clientes">
            importarlos desde Excel
          </ArticleLink>
          .
        </p>
      </ArticleSection>

      <ArticleSection id="crear-el-cliente" title="Crear el cliente">
        <Video id="clientes/crear-un-cliente" />
        <Steps>
          <Step title="Haz clic en «Nuevo cliente»">
            <p>
              Está en la barra superior de Clientes. Se abre la página «Nuevo
              cliente», con el formulario de la plantilla.
            </p>
          </Step>
          <Step title="Completa cada sección">
            <p>
              El formulario enseña una sección a la vez. A la izquierda está la
              lista de secciones con lo que falta en cada una («Faltan 3», «0 de
              5»), y arriba, «Obligatorios», con cuántos datos obligatorios van
              completos. Los obligatorios llevan un asterisco.
            </p>
            <p>
              Para pasar de una sección a otra, haz clic en su nombre o usa los
              botones del pie, que dicen la sección anterior y la siguiente.
            </p>
            <Screenshot
              id="clientes/nuevo-cliente"
              caption="La página «Nuevo cliente»: a la izquierda las secciones Identificación y Contacto; en el centro los campos de Identificación; a la derecha, «Cómo queda» con el nombre y la identificación que se van escribiendo y, debajo, «Relación» con «Cliente» marcado."
            />
          </Step>
          <Step title="Revisa «Cómo queda»">
            <p>
              El panel de la derecha enseña al cliente como se verá: sus
              iniciales, su nombre, su identificación y el tipo de persona.
            </p>
          </Step>
          <Step title="Elige la «Relación»">
            <p>
              Debajo de «Cómo queda», «Relación» ofrece «Cliente», que viene
              marcado, y «Prospecto». Elige «Prospecto» si la persona pidió una
              cotización y aún no compra: pasa a cliente sola con su primera
              póliza vigente o pendiente (
              <ArticleLink to="clientes/prospectos" />
              ).
            </p>
          </Step>
          <Step title="Haz clic en «Crear cliente»">
            <p>
              Si falta un dato obligatorio, el formulario lo dice con «Falta 1
              dato obligatorio» o «Faltan N datos obligatorios» y el nombre de
              cada uno; al hacer clic en un nombre, el formulario va a ese
              campo. Con todo completo, aparece «Cliente creado» y se abre la
              ficha del cliente.
            </p>
          </Step>
        </Steps>
        <p>
          El cliente se crea sin responsable. Desde su ficha se le asigna
          responsable y se le añaden pólizas, documentos y tareas (
          <ArticleLink to="clientes/ficha-del-cliente" />
          ).
        </p>
        <Callout type="note">
          <p>
            Si sales con «Cancelar» después de escribir algo, Nexus pregunta
            «Salir sin guardar»: lo que escribiste en el formulario se pierde.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="los-avisos" title="Los avisos del formulario">
        <p>Mientras escribes, Nexus revisa dos cosas de la identificación:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «Ya existe un cliente con esta identificación».
            </strong>{" "}
            Nexus no guarda dos clientes con la misma. El aviso dice quién la
            tiene y ofrece «Abrir su ficha».
          </li>
          <li>
            <strong className="font-medium">
              El dígito de verificación de un NIT.
            </strong>{" "}
            Si el dígito que escribiste no es el que le corresponde al número,
            el campo lo advierte y pide revisar que el número esté bien copiado.
            Es una advertencia: si el documento lo trae así, puedes guardarlo
            igual.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="editar" title="Editar un cliente">
        <p>
          En la ficha del cliente, «Editar» abre el mismo formulario con sus
          datos, en la sección de la pestaña que estabas viendo. Pide el permiso
          «Editar clientes». Al guardar con «Guardar cambios» aparece «Cliente
          actualizado» y vuelves a donde estabas.
        </p>
        <p>
          El responsable no se cambia en este formulario: se explica en{" "}
          <ArticleLink to="clientes/responsable-del-cliente" />. Tampoco la
          relación: se cambia en la ficha, en el bloque «Relación» (
          <ArticleLink to="clientes/prospectos" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="eliminar" title="Eliminar un cliente">
        <p>
          Quien tiene el permiso «Eliminar clientes» encuentra «Eliminar el
          cliente» en el menú «Más acciones» de la ficha (los tres puntos de la
          barra superior). Nexus pide confirmar.
        </p>
        <Callout type="warning">
          <p>
            Eliminar no se deshace: se borran también sus respuestas de
            plantilla. Un cliente con pólizas no se puede eliminar.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
