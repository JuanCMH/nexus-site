import Link from "next/link";
import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "antes-de-empezar", title: "Antes de empezar" },
  { id: "crear-la-cuenta", title: "Crear la cuenta" },
  { id: "la-contrasena", title: "La contraseña" },
  { id: "despues", title: "Qué pasa después" },
];

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

const code = "font-mono text-sm";

export function Article() {
  return (
    <>
      <ArticleSection id="antes-de-empezar" title="Antes de empezar">
        <p>
          Nexus está en beta cerrada: para crear una cuenta hace falta un
          código. Cuál necesitas depende de lo que vas a hacer.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              Si vas a trabajar en una agencia que ya usa Nexus
            </strong>
            , pide el código a quien la administra. Puede ser el código de la
            agencia, de ocho caracteres (<code className={code}>HQ7MRT4B</code>
            ), o una invitación a tu nombre, que empieza por{" "}
            <code className={code}>INV-</code>.
          </li>
          <li>
            <strong className="font-medium">Si vas a crear la agencia</strong>,
            necesitas un código de activación, que empieza por{" "}
            <code className={code}>NEXUS-</code>. Se pide en{" "}
            <Link href="/solicitar-acceso" className={linkClassName}>
              Solicitar acceso
            </Link>
            .
          </li>
        </ul>
        <p>
          La cuenta es la misma en el navegador, en la aplicación para Windows y
          en el celular: se crea una vez.
        </p>
      </ArticleSection>

      <ArticleSection id="crear-la-cuenta" title="Crear la cuenta">
        <p>
          La pantalla de acceso abre en «Entrar a Nexus». Haz clic en «Crear
          cuenta», arriba a la derecha o debajo del botón «Entrar». La creación
          va en tres pasos: «Código», «Tus datos» y «Contraseña». Con «Atrás»
          vuelves al paso anterior sin perder lo que escribiste.
        </p>
        <Steps>
          <Step title="Escribe el código">
            <p>
              En «Código de invitación o de activación», el que te entregaron.
              Da igual si lo escribes en mayúsculas o en minúsculas. Por su
              forma, Nexus te dice qué código es y qué pasará al crear la
              cuenta: «Código de la agencia», «Invitación personal» o «Código de
              activación». Haz clic en «Continuar».
            </p>
            <Screenshot
              id="primeros-pasos/crear-cuenta-codigo"
              caption="El paso «Código» con una invitación escrita: Nexus la reconoce como «Invitación personal» y dice que entrarás con el rol que te asignaron."
            />
          </Step>
          <Step title="Escribe tu nombre y tu correo">
            <p>
              En «Tus datos», el «Nombre» con el que te verá el resto de la
              agencia y el «Correo» con el que vas a entrar. Haz clic en
              «Continuar».
            </p>
          </Step>
          <Step title="Pon una contraseña">
            <p>
              Escríbela en «Contraseña». Debajo, Nexus marca los requisitos que
              ya cumple.
            </p>
          </Step>
          <Step title="Haz clic en «Crear cuenta»">
            <p>
              El botón se activa cuando la contraseña cumple los requisitos. Si
              todo está bien, la sesión queda abierta.
            </p>
          </Step>
        </Steps>
        <p>
          Que el código sirva lo comprueba Nexus al final, al hacer clic en
          «Crear cuenta». Si no sirve, la pantalla vuelve al paso «Código» con
          el mensaje debajo del campo, y lo demás que escribiste se conserva.
        </p>
      </ArticleSection>

      <ArticleSection id="la-contrasena" title="La contraseña">
        <p>
          La contraseña necesita al menos 8 caracteres y tres de estos cuatro
          tipos: minúsculas, mayúsculas, números y símbolos. Bajo el campo, cada
          requisito se marca al cumplirse: «8 caracteres o más», «Minúsculas»,
          «Mayúsculas», «Números» y «Símbolos».
        </p>
        <p>
          La línea de abajo resume el estado. Mientras falte algo dice «Faltan
          requisitos: 8 caracteres y 3 de los 4 tipos.»; cuando la contraseña
          sirve, «Cumple. Seguridad: aceptable.» o, con los cuatro tipos,
          «Cumple. Seguridad: fuerte.».
        </p>
        <Screenshot
          id="primeros-pasos/crear-cuenta-contrasena"
          caption="El paso «Contraseña»: los requisitos cumplidos van marcados y la línea de abajo dice «Cumple. Seguridad: aceptable.»."
        />
        <p>
          El icono del ojo, a la derecha del campo, muestra lo que escribiste;
          otro clic lo vuelve a ocultar.
        </p>
      </ArticleSection>

      <ArticleSection id="despues" title="Qué pasa después">
        <p>
          Al crear la cuenta pasas a «Tus agencias». Lo que ves ahí depende del
          código que usaste:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Con el código de una agencia o una invitación, Nexus te une a esa
            agencia sin volver a pedirte el código.
          </li>
          <li>
            Con un código de activación, se abre la ventana «Nueva agencia» para
            crear la tuya.
          </li>
        </ul>
        <p>
          Los dos casos siguen en{" "}
          <ArticleLink to="primeros-pasos/entrar-a-tu-agencia" />.
        </p>
        <Callout type="note">
          <p>
            Si el mensaje empieza por «Para crear una cuenta necesitas un código
            vigente», el código no sirve: no existe, ya se usó, caducó o fue
            anulado. Pide uno nuevo a quien te lo entregó. Los demás mensajes
            están en <ArticleLink to="primeros-pasos/si-no-puedes-entrar" />.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
