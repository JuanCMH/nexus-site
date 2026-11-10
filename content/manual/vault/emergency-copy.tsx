import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "para-que-sirve", title: "Para qué sirve" },
  { id: "configurarla", title: "Configurarla" },
  { id: "windows-y-web", title: "En Windows y en la web" },
  { id: "abrirla", title: "Abrir la copia" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="para-que-sirve" title="Para qué sirve">
        <p>
          La copia de emergencia es un archivo con todos los accesos, cifrado,
          para que la agencia no se quede sin sus contraseñas si Nexus, el
          servidor o internet fallan. Solo la configura y la abre el
          propietario, en Accesos → «Copia de emergencia», bajo «Ajustes».
        </p>
        <p>
          Mientras no está configurada, la sección dice «Sin copia de
          emergencia»: si Nexus no está disponible, nadie puede consultar las
          contraseñas guardadas.
        </p>
      </ArticleSection>

      <ArticleSection id="configurarla" title="Configurarla">
        <Steps>
          <Step title="Haz clic en «Configurar»">
            <p>Con la bóveda abierta.</p>
          </Step>
          <Step title="Escribe la clave de emergencia dos veces">
            <p>
              Al menos 16 caracteres: una frase larga. Es distinta de tu clave
              de la bóveda.
            </p>
          </Step>
          <Step title="Elige la carpeta, en la aplicación para Windows">
            <p>
              En «Carpeta de este computador». Se recomienda una carpeta
              sincronizada (OneDrive, Google Drive) o una memoria USB: el
              archivo va cifrado.
            </p>
          </Step>
          <Step title="Haz clic en «Configurar»">
            <p>La copia queda configurada.</p>
          </Step>
        </Steps>
        <Callout type="warning">
          <p>
            Nexus no guarda la clave de emergencia y no se puede recuperar.
            Escríbela en papel y guárdala fuera del computador.
          </p>
        </Callout>
        <p>
          «Cambiar», junto a «Clave de emergencia», pone una clave nueva. La
          copia nueva se abre solo con la clave nueva; los archivos anteriores,
          con la anterior.
        </p>
      </ArticleSection>

      <ArticleSection id="windows-y-web" title="En Windows y en la web">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              En la aplicación para Windows
            </strong>
            , la copia se escribe en la carpeta elegida y se renueva sola cuando
            abres la bóveda. La sección dice la fecha de la última copia y tiene
            «Abrir la carpeta» y «Renovar». En otro computador del propietario,
            «Elegir carpeta» hace que la copia se escriba también ahí.
          </li>
          <li>
            <strong className="font-medium">En la web</strong>, la copia se
            descarga con «Descargar copia» y trae los accesos como están en ese
            momento. No se renueva sola: descárgala de nuevo cuando cambien.
          </li>
        </ul>
        <p>
          Si hay accesos que tu clave no abre, la sección lo dice: la copia no
          los incluye.
        </p>
      </ArticleSection>

      <ArticleSection id="abrirla" title="Abrir la copia">
        <p>
          El archivo se llama «Copia de emergencia de Nexus.html». Se abre con
          doble clic, en cualquier navegador, sin Nexus y sin conexión a
          internet. Pide la clave de emergencia y enseña las contraseñas y los
          códigos de verificación de cada acceso.
        </p>
        <p>
          El archivo trae todo lo que necesita para abrirse y no pide nada a
          internet. Sin la clave de emergencia, lo que contiene es texto
          cifrado.
        </p>
      </ArticleSection>
    </>
  );
}
