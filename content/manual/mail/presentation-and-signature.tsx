import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "dos-partes", title: "Presentación y firma" },
  { id: "presentacion", title: "La presentación de la agencia" },
  { id: "pie", title: "El pie del correo" },
  { id: "firma", title: "La firma de un correo vinculado" },
  { id: "quien-firma", title: "Quién firma" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="dos-partes" title="Presentación y firma">
        <p>
          Cada correo que sale de Nexus lleva dos cosas que no se escriben en el
          mensaje:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">La presentación</strong>, que es de
            la agencia y vale para todos los correos: el color de acento, la
            letra, el encabezado con el logo y el pie. Está en «Correos →
            Presentación».
          </li>
          <li>
            <strong className="font-medium">La firma</strong>, que es de cada
            correo vinculado. Se pone en el panel de ese correo, en «Correos →
            Correos vinculados».
          </li>
        </ul>
        <p>
          Las dos se ven en la pestaña «Vista previa» de cualquier correo antes
          de enviarlo.
        </p>
      </ArticleSection>

      <ArticleSection id="presentacion" title="La presentación de la agencia">
        <p>
          «Correos → Presentación» enseña la presentación vigente y, en «Así se
          ve», un correo de ejemplo con ella. La cambia quien tiene el permiso
          «Editar los datos de la agencia», con «Editar»:
        </p>
        <ManualTable
          head={["Campo", "Qué decide"]}
          rows={[
            [
              "«Color de acento»",
              "«El de la agencia» o uno de los colores de la lista.",
            ],
            [
              "«Tipo de letra»",
              "«La del sistema», Arial, Calibri, Georgia o Verdana: solo las que se ven igual en Outlook, Gmail y el celular.",
            ],
            [
              "«Encabezado con el logo»",
              "El logo de la agencia, centrado sobre el correo nuevo. Las respuestas no lo llevan. Con él encendido se eligen el «Logo del encabezado» y su «Tamaño del logo»: «Pequeño», «Mediano» o «Grande».",
            ],
            [
              "«Logo de la firma»",
              "El logo para los correos vinculados que firman con el logo y no con la foto de quien envía, con su tamaño.",
            ],
            [
              "«Datos de la agencia en el pie»",
              "Qué datos de la agencia van al pie (ver abajo).",
            ],
            [
              "«Aviso legal al pie»",
              "Un texto bajo los datos de la agencia, centrado y en letra menor: confidencialidad, tratamiento de datos.",
            ],
          ]}
        />
        <Screenshot
          id="correos/presentacion-editar"
          caption="«Correos → Presentación» en edición: «Color de acento», «Tipo de letra», «Encabezado con el logo», el logo y su tamaño, con la vista previa «Así se ve» al lado."
        />
        <p>
          «Guardar cambios» aplica la presentación a los correos que se envíen
          desde ese momento. Los que ya salieron se siguen viendo como salieron.
        </p>
        <Callout type="note">
          <p>
            Los logos se suben en «Configuración → Agencia» (
            <ArticleLink to="configuracion/datos-de-la-agencia" />
            ). En un correo solo se ven logos PNG o JPG. Si la agencia no tiene
            logo, el encabezado lleva su nombre.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="pie" title="El pie del correo">
        <p>«Datos de la agencia en el pie» tiene tres opciones:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «Los de la ficha de la agencia»
            </strong>
            : se marcan cuáles salen en «Qué datos salen»: «Razón social»,
            «Documento (NIT)», «Dirección», «Teléfono» y «Sitio web». Se toman
            de «Configuración → Agencia»: si cambian allá, cambian en el pie.
          </li>
          <li>
            <strong className="font-medium">«Escritos a mano»</strong>: un
            «Texto del pie» propio, con negrita y enlaces, que reemplaza los
            datos de la ficha.
          </li>
          <li>
            <strong className="font-medium">«Ninguno»</strong>: el pie lleva
            solo el aviso legal, si hay.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="firma" title="La firma de un correo vinculado">
        <p>
          La firma aparece en el panel de un correo vinculado que lee Nexus y
          tiene el envío permitido, en el bloque «Firma». Dice «Sin firma»,
          «Firma construida en Nexus» o «Firma de imagen». La crea o la cambia
          quien tiene el permiso «Enviar los correos que redacta el agente».
        </p>
        <Steps>
          <Step title="Abre el correo vinculado">
            <p>
              En «Correos → Correos vinculados», haz clic en la fila del correo.
            </p>
          </Step>
          <Step title="Haz clic en «Crear firma» o «Cambiar firma»">
            <p>
              Se abre «Firma del correo», con dos pestañas: «Construida en
              Nexus» e «Imagen».
            </p>
          </Step>
          <Step title="Escribe la firma o elige la imagen">
            <p>
              En «Construida en Nexus», el «Texto de la firma» lleva datos entre
              llaves que Nexus completa: {"{nombre}"}, {"{cargo}"},{" "}
              {"{telefono}"}, {"{correo}"}, {"{agencia}"} y {"{web}"}. La
              negrita es el nombre: va más grande y oscura; lo demás, en gris.
              «Foto de quien firma» pone la foto de su perfil a la izquierda; en
              un correo compartido conviene apagarla y encender «Logo de la
              agencia cuando no va la foto».
            </p>
            <p>
              En «Imagen» se sube la firma que la agencia ya tiene diseñada: PNG
              o JPG, hasta 512 KB. Va igual en cada correo, envíe quien envíe.
            </p>
          </Step>
          <Step title="Haz clic en «Guardar firma»">
            <p>
              «Vista previa de la firma» enseña cómo queda antes de guardar.
            </p>
          </Step>
        </Steps>
        <p>
          El agente no cambia una firma por su cuenta: puede pedir un cambio,
          que aprueba quien envía desde ese correo (
          <ArticleLink to="agente/permisos-y-solicitudes" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="quien-firma" title="Quién firma">
        <p>
          Los datos de una firma construida en Nexus son los de quien firma:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Si el correo vinculado tiene responsable, firma él, envíe quien
            envíe.
          </li>
          <li>Sin responsable, firma cada persona que envía.</li>
        </ul>
        <p>
          El nombre y el correo salen de la cuenta; el cargo y el teléfono, del
          perfil de esa persona; la agencia y su sitio web, de la ficha de la
          agencia. Si falta un dato, la firma sale sin él. Cuando eres tú quien
          firma y te falta el cargo o el teléfono, la «Vista previa» lo avisa
          con «Completar perfil».
        </p>
      </ArticleSection>
    </>
  );
}
