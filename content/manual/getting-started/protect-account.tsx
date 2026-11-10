import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde", title: "Dónde está" },
  { id: "dos-pasos", title: "Activar la verificación en dos pasos" },
  { id: "codigos", title: "Los códigos de recuperación" },
  { id: "desactivar", title: "Desactivarla" },
  { id: "verificar-correo", title: "Verificar tu correo (propietario)" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde" title="Dónde está">
        <p>
          Haz clic en tu nombre, al pie del menú, y luego en «Seguridad de la
          cuenta». La ventana dice si la verificación en dos pasos está activada
          y, si eres el propietario de una agencia, si lo está la recuperación
          por correo.
        </p>
        <Screenshot
          id="primeros-pasos/seguridad-de-la-cuenta"
          caption="«Seguridad de la cuenta» de la propietaria: la verificación en dos pasos está desactivada y la recuperación por correo, activada. Abajo, «Cerrar» y «Activar dos pasos»."
        />
      </ArticleSection>

      <ArticleSection
        id="dos-pasos"
        title="Activar la verificación en dos pasos"
      >
        <p>
          Con la verificación en dos pasos, entrar pide la contraseña y, además,
          un código de seis dígitos de una aplicación autenticadora en tu
          celular (Google Authenticator, Microsoft Authenticator, Authy u otra).
          Quien consiga tu contraseña no puede entrar sin ese código. Es
          opcional.
        </p>
        <Steps>
          <Step title="Haz clic en «Activar dos pasos»">
            <p>Nexus enseña un código QR y una clave.</p>
          </Step>
          <Step title="Añade la cuenta en tu aplicación autenticadora">
            <p>
              Escanea el código QR con la aplicación. Si no puedes escanearlo,
              escribe en ella la «Clave manual»; el botón «Copiar clave» la
              copia.
            </p>
          </Step>
          <Step title="Escribe el código que muestra la aplicación">
            <p>
              En «Código de la aplicación», los seis dígitos que aparecen en ese
              momento, y haz clic en «Activar».
            </p>
          </Step>
          <Step title="Guarda los códigos de recuperación">
            <p>
              Nexus enseña ocho códigos. Cópialos con «Copiar códigos» o
              imprímelos, y haz clic en «Ya los guardé».
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="codigos" title="Los códigos de recuperación">
        <p>
          Cada código de recuperación sirve una sola vez para entrar en lugar
          del código de la aplicación, por ejemplo si cambias de celular: en la
          pantalla de acceso, haz clic en «Usar un código de recuperación».
          «Seguridad de la cuenta» dice cuántos te quedan.
        </p>
        <Callout type="warning">
          <p>
            Los códigos no se vuelven a mostrar. Guárdalos fuera del computador
            donde usas Nexus.
          </p>
        </Callout>
        <p>
          «Generar códigos nuevos» crea otros ocho; pide un código de la
          aplicación, y los anteriores dejan de servir.
        </p>
        <p>
          Si perdiste la aplicación y los códigos, el propietario de la agencia
          puede quitarte la verificación en dos pasos desde Configuración →
          Miembros, con «Quitar verificación en dos pasos» en tu fila. Entras
          solo con la contraseña y la activas de nuevo.
        </p>
      </ArticleSection>

      <ArticleSection id="desactivar" title="Desactivarla">
        <p>
          En «Seguridad de la cuenta», haz clic en «Desactivar dos pasos» y
          escribe un código de la aplicación o uno de recuperación. Desde ese
          momento entras solo con la contraseña.
        </p>
      </ArticleSection>

      <ArticleSection
        id="verificar-correo"
        title="Verificar tu correo (propietario)"
      >
        <p>
          A una persona del equipo que olvida la contraseña le da el código
          quien administra la agencia. El propietario no tiene a nadie por
          encima: por eso puede verificar su correo, y desde entonces el código
          para cambiar la contraseña le llega ahí.
        </p>
        <p>
          Mientras no lo verifique, su cuenta, al pie del menú, lleva un punto
          ámbar, y en su menú «Seguridad de la cuenta» lleva la marca «Verificar
          correo». Si lo olvida sin haberlo verificado, el código se lo genera
          el soporte de Nexus.
        </p>
        <Steps>
          <Step title="Haz clic en «Verificar mi correo»">
            <p>
              En «Seguridad de la cuenta». Llega un correo con el asunto
              «Verifica tu correo en Nexus».
            </p>
          </Step>
          <Step title="Escribe el código del correo">
            <p>
              En «Código del correo», el código de ocho caracteres que llegó (
              <code className="font-mono text-sm">K7QM-2XPA</code>), y haz clic
              en «Verificar correo». El código vale 15 minutos; si no llega,
              revisa el correo no deseado o haz clic en «Enviar otro código».
            </p>
          </Step>
        </Steps>
        <p>
          Con el correo verificado, «Seguridad de la cuenta» dice «La
          recuperación por correo está activada». Cómo se usa está en{" "}
          <ArticleLink to="primeros-pasos/recuperar-tu-contrasena" />.
        </p>
      </ArticleSection>
    </>
  );
}
