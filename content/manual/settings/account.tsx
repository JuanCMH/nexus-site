import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-menu", title: "El menú de tu cuenta" },
  { id: "tu-perfil", title: "Tu perfil" },
  { id: "la-foto", title: "La foto" },
  { id: "la-contrasena", title: "La contraseña" },
  { id: "seguridad-y-avisos", title: "Seguridad y notificaciones" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-menu" title="El menú de tu cuenta">
        <p>
          Lo que es de cada persona, y no de la agencia, está en el menú de tu
          cuenta: haz clic en tu foto o en tus iniciales, al pie del menú
          principal. Ofrece:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>«Tema»: «Claro», «Oscuro» o «Como el sistema».</li>
          <li>«Ayuda» y «Enviar una idea o un problema».</li>
          <li>«Tu perfil» y «Seguridad de la cuenta».</li>
          <li>«Cerrar sesión».</li>
        </ul>
        <p>
          En Configuración, el grupo «Tu cuenta» lleva «Notificaciones» y, en la
          aplicación de Windows, «Este computador» (
          <ArticleLink to="configuracion/este-computador" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="tu-perfil" title="Tu perfil">
        <p>
          «Tu perfil» reúne tu foto, tu nombre, tu firma y tu correo principal.
        </p>
        <Screenshot
          id="configuracion/tu-perfil"
          caption="«Tu perfil»: la foto, el nombre, el correo, la «Firma en Altavista Seguros» con su cargo y su teléfono, y el «Correo principal»."
        />
        <Steps>
          <Step title="Revisa tu nombre">
            <p>
              «Nombre» es obligatorio y es el que ve el equipo. El Inicio te
              saluda con su primera palabra, y la ventana lo dice: «El Inicio te
              saluda como “Carolina”». Debajo va tu correo, que no se cambia
              aquí.
            </p>
          </Step>
          <Step title="Completa tu firma">
            <p>
              «Firma en …» lleva tu «Cargo» y tu «Teléfono» en esa agencia: cada
              agencia guarda los suyos. «Lo que tu firma toma de aquí» enseña
              cómo quedan. La firma de los correos se arma en{" "}
              <ArticleLink to="correos/presentacion-y-firma" />.
            </p>
          </Step>
          <Step title="Elige tu correo principal">
            <p>
              «Correo principal» aparece si consultas algún correo vinculado
              desde el que se puede enviar. «El agente redacta desde este correo
              lo que le pidas sin indicar otro. Sin correo principal, pregunta
              desde cuál.» En «Correo», elige uno o «Sin correo principal».
            </p>
          </Step>
          <Step title="Haz clic en «Guardar cambios»">
            <p>Aparece «Perfil actualizado».</p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="la-foto" title="La foto">
        <p>
          Haz clic en la foto (o en «Subir», si aún no tienes) o suelta una
          imagen encima. Se admiten PNG, JPG y WebP, hasta 15 MB; la foto se
          recorta en cuadrado desde el centro y se reduce en tu computador antes
          de subirse. No cuenta en el almacenamiento del plan.
        </p>
        <p>
          Tu foto sale en lugar de tus iniciales en la lista del equipo, en el
          menú y en el Inicio de la agencia.
        </p>
      </ArticleSection>

      <ArticleSection id="la-contrasena" title="La contraseña">
        <p>
          La contraseña se cambia desde la pantalla de acceso, con «Olvidé mi
          contraseña» y un código de un solo uso. Si eres el propietario y
          verificaste tu correo, el código te llega ahí; si no, te lo genera
          quien administra la agencia. Los pasos están en{" "}
          <ArticleLink to="primeros-pasos/recuperar-tu-contrasena" />.
        </p>
        <Callout type="note">
          <p>
            Cambiar la contraseña con un código cierra todas tus sesiones
            abiertas, en cualquier navegador o computador.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="seguridad-y-avisos"
        title="Seguridad y notificaciones"
      >
        <p>
          «Seguridad de la cuenta» activa la verificación en dos pasos y, si
          eres el propietario, verifica tu correo para recuperar la cuenta por
          tu cuenta: <ArticleLink to="primeros-pasos/proteger-tu-cuenta" />.
        </p>
        <p>
          Qué te avisa Nexus, en qué equipos y cuándo se elige en Configuración
          → Notificaciones:{" "}
          <ArticleLink to="primeros-pasos/tus-notificaciones" />.
        </p>
      </ArticleSection>
    </>
  );
}
