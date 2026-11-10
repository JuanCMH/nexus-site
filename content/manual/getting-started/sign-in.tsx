import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { APP_URL } from "@/lib/site";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde", title: "Dónde se entra" },
  { id: "entrar", title: "Entrar" },
  { id: "dos-pasos", title: "Con la verificación en dos pasos" },
  { id: "la-sesion", title: "Cuánto dura la sesión" },
  { id: "cerrar-sesion", title: "Cerrar la sesión" },
  { id: "actualizar", title: "Si Nexus pide actualizar" },
];

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function Article() {
  return (
    <>
      <ArticleSection id="donde" title="Dónde se entra">
        <p>
          Nexus es el mismo producto, con los mismos datos y la misma cuenta, en
          tres sitios:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">En el navegador</strong>, en{" "}
            {APP_URL ? (
              <a href={APP_URL} className={linkClassName}>
                {APP_URL.replace(/^https?:\/\//, "")}
              </a>
            ) : (
              "la dirección de la app"
            )}
            . No hay que instalar nada.
          </li>
          <li>
            <strong className="font-medium">En Windows</strong>, con la
            aplicación instalada:{" "}
            <ArticleLink to="primeros-pasos/nexus-en-windows" />.
          </li>
          <li>
            <strong className="font-medium">En el celular</strong>, desde el
            navegador del teléfono o instalado en su pantalla de inicio:{" "}
            <ArticleLink to="primeros-pasos/nexus-en-el-celular" />.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="entrar" title="Entrar">
        <Steps>
          <Step title="Escribe tu correo y tu contraseña">
            <p>En «Entrar a Nexus», la pantalla con la que abre Nexus.</p>
            <Screenshot
              id="primeros-pasos/entrar"
              caption="«Entrar a Nexus», con el correo, la contraseña, el enlace «Olvidé mi contraseña» y el botón «Entrar»."
            />
          </Step>
          <Step title="Haz clic en «Entrar»">
            <p>
              Si tu cuenta tiene la verificación en dos pasos, Nexus pide además
              un código. Lo explica la sección siguiente.
            </p>
          </Step>
          <Step title="Elige la agencia">
            <p>
              Si perteneces a varias, en «Tus agencias», haz clic en la agencia
              con la que vas a trabajar. Si perteneces a una sola, Nexus entra
              directamente en ella.
            </p>
          </Step>
        </Steps>
        <p>
          En un navegador o computador donde ya entraste, Nexus recuerda el
          último correo: la pantalla dice «Hola de nuevo» y pide solo la
          contraseña. Para entrar con otra cuenta, haz clic en «Usar otra
          cuenta», bajo el correo.
        </p>
        <p>
          Si la contraseña no entra, el mensaje queda encima de los campos y el
          correo se conserva. Al tercer intento fallido, el mensaje ofrece
          «restablécela con un código». Si no la recuerdas, sigue{" "}
          <ArticleLink to="primeros-pasos/recuperar-tu-contrasena" />.
        </p>
      </ArticleSection>

      <ArticleSection id="dos-pasos" title="Con la verificación en dos pasos">
        <p>
          Tras la contraseña aparece «Verificación en dos pasos». En «Código de
          la aplicación», escribe los seis dígitos que muestra tu aplicación
          autenticadora: al escribir el sexto, Nexus lo comprueba solo.
        </p>
        <p>
          Si no tienes la aplicación contigo, haz clic en «Usar un código de
          recuperación» y escribe uno de los códigos que guardaste al activar la
          verificación; luego haz clic en «Entrar». Cada uno sirve una sola vez.
          «Entrar con otra cuenta», arriba a la derecha, vuelve a la pantalla de
          acceso.
        </p>
        <p>
          Cómo se activa: <ArticleLink to="primeros-pasos/proteger-tu-cuenta" />
          .
        </p>
      </ArticleSection>

      <ArticleSection id="la-sesion" title="Cuánto dura la sesión">
        <p>
          La sesión dura 30 días en cada navegador o computador donde entraste.
          Pasado ese tiempo, Nexus vuelve a la pantalla de acceso y basta con
          entrar otra vez. Cambiar la contraseña con un código cierra todas tus
          sesiones.
        </p>
        <Callout type="warning">
          <p>
            En un computador que no es tuyo, cierra la sesión al terminar: la
            sesión queda abierta en ese navegador hasta que la cierres o pasen
            los 30 días.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="cerrar-sesion" title="Cerrar la sesión">
        <p>
          Haz clic en tu nombre, al pie del menú, y luego en «Cerrar sesión». Al
          cerrarla, la bóveda queda bloqueada. En «Tus agencias», «Cerrar
          sesión» está arriba a la derecha.
        </p>
      </ArticleSection>

      <ArticleSection id="actualizar" title="Si Nexus pide actualizar">
        <p>
          Cuando la versión que tienes abierta ya no funciona con Nexus, la app
          lo dice antes de dejar entrar:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            En el navegador aparece «Recarga Nexus». Haz clic en «Recargar la
            página».
          </li>
          <li>
            En Windows aparece «Actualiza Nexus». La aplicación descarga la
            versión nueva; cuando termina, haz clic en «Reiniciar y actualizar».
          </li>
        </ul>
        <p>Tus datos no se pierden en ninguno de los dos casos.</p>
      </ArticleSection>
    </>
  );
}
