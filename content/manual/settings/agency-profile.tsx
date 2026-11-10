import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "quien-la-ve", title: "Quién la ve y quién la cambia" },
  { id: "identidad", title: "Identidad y contacto" },
  { id: "color", title: "Color de marca" },
  { id: "logos", title: "Logos" },
  { id: "chats", title: "Cuánto se conservan los chats" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="quien-la-ve" title="Quién la ve y quién la cambia">
        <p>
          Configuración abre en «Perfil», en el grupo «Agencia». Todo el equipo
          ve los datos de la agencia; cambiarlos pide el permiso «Editar los
          datos de la agencia», que es delicado porque cambia la identidad de la
          agencia.
        </p>
        <p>
          Quien no tiene ese permiso ve los datos como lectura, sin formulario.
          Si su rol tiene «Proponer cambios en la configuración», el botón dice
          «Proponer cambios»: lo que escriba queda como una propuesta que aplica
          quien edita los datos de la agencia.
        </p>
        <Screenshot
          id="configuracion/perfil-agencia"
          caption="Configuración → Perfil: «Identidad y contacto» con los datos de Altavista Seguros y, debajo, «Logos» con el logo principal."
        />
      </ArticleSection>

      <ArticleSection id="identidad" title="Identidad y contacto">
        <p>
          El bloque reúne el nombre, la identificación tributaria y los datos de
          contacto de la agencia: «Nombre comercial», «Razón social», «Tipo de
          identificación» y «Número de identificación», «Correo», «Sitio web»,
          «Teléfono», «WhatsApp», «Ciudad» y «Dirección». Solo el nombre
          comercial es obligatorio.
        </p>
        <Steps>
          <Step title="Haz clic en «Editar»">
            <p>
              Está a la derecha de «Identidad y contacto». Los datos pasan a ser
              un formulario.
            </p>
          </Step>
          <Step title="Cambia lo que haga falta">
            <p>
              «Tipo de identificación» se elige de una lista; el número va
              aparte, en «Número de identificación».
            </p>
          </Step>
          <Step title="Haz clic en «Guardar cambios»">
            <p>
              Aparece «Datos de la agencia guardados». Si propones el cambio, el
              formulario trae además «Por qué», opcional, que lee quien aplica
              la propuesta, y el botón es «Enviar propuesta».
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="color" title="Color de marca">
        <p>
          «Color de marca» se elige de una paleta de colores con nombre
          (Cobalto, Turquesa, Carmesí, entre otros). Sin elegir ninguno, queda
          «Sin color».
        </p>
        <p>
          Si el color es muy claro para imprimirse, el selector lo marca como
          «Muy claro para el PDF»: las cotizaciones de cumplimiento en PDF salen
          entonces en azul, y en Nexus el color sí se usa.
        </p>
      </ArticleSection>

      <ArticleSection id="logos" title="Logos">
        <p>
          El «Logo principal» sale en el menú, en el selector de agencias y en
          los PDF de cumplimiento. Se sube con «Subir logo» y se reemplaza con
          «Cambiar logo». Si lo quitas, la agencia vuelve a mostrarse con el
          icono de Nexus.
        </p>
        <p>
          Las variantes (horizontal, en blanco, monocromo) se suben con «Subir
          variantes» y se eligen en los correos, en Correos → Presentación (
          <ArticleLink to="correos/presentacion-y-firma" />
          ). Cada variante se puede renombrar o quitar.
        </p>
        <p>
          Se admiten PNG, JPG, WebP y SVG, hasta 5 MB cada archivo y hasta 12
          variantes. Cada tarjeta dice el formato, las medidas y la forma, y si
          el archivo «Sirve para correo»: en un correo solo se ven PNG y JPG. En
          el PDF de una cotización va el principal si es PNG o JPG y no pasa de
          2 MB.
        </p>
        <Callout type="tip">
          <p>
            Si el logo tiene partes blancas, el botón «Ver sobre fondo oscuro»
            de la tarjeta enseña cómo se ve sobre un fondo oscuro.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="chats" title="Cuánto se conservan los chats">
        <p>
          El bloque «Chats», al final de Perfil, decide cuánto se conservan los
          mensajes de los chats de la agencia y sus archivos. «Conservar los
          mensajes» ofrece «Sin plazo», 3 meses, 6 meses, 1 año, 2 años y 5
          años.
        </p>
        <Callout type="warning">
          <p>
            Con un plazo, cada madrugada se borra lo que lo pasó, en todos los
            chats, y no se puede deshacer. Lo que se guardó como documento no se
            borra con ellos.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
