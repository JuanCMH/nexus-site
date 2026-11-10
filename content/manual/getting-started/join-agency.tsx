import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "tus-agencias", title: "Tus agencias" },
  { id: "los-codigos", title: "Los tres códigos" },
  { id: "unirte", title: "Unirte a otra agencia" },
  { id: "crear", title: "Crear tu agencia" },
  { id: "acuerdo", title: "El acuerdo de uso" },
];

const code = "font-mono text-sm";

export function Article() {
  return (
    <>
      <ArticleSection id="tus-agencias" title="Tus agencias">
        <p>
          «Tus agencias» enseña las agencias a las que perteneces, cada una con
          el rol que tienes en ella. Haz clic en una para abrirla. Arriba a la
          derecha están tu nombre y «Cerrar sesión».
        </p>
        <p>
          Al abrir Nexus o al entrar, quien pertenece a una sola agencia entra
          directamente en ella; con varias, o con ninguna, Nexus enseña «Tus
          agencias». A la pantalla se vuelve siempre con «Cambiar de agencia»,
          en el menú de la agencia.
        </p>
        <Screenshot
          id="primeros-pasos/tus-agencias"
          caption="«Tus agencias» con una agencia, Altavista Seguros, y el rol «Propietario». Arriba, el nombre de quien entró y «Cerrar sesión»; debajo, «Tengo un código»."
        />
        <p>
          Si todavía no perteneces a ninguna, dice «Aún no perteneces a ninguna
          agencia». Si tu cuenta tiene un código de activación sin usar, aparece
          además el botón «Crear agencia».
        </p>
      </ArticleSection>

      <ArticleSection id="los-codigos" title="Los tres códigos">
        <ManualTable
          head={["Código", "Cómo es", "Qué hace"]}
          rows={[
            [
              "De la agencia",
              <>
                Ocho caracteres: <code className={code}>HQ7MRT4B</code>
              </>,
              "Entras con el rol Miembro. Sirve todas las veces, hasta que la agencia lo regenere.",
            ],
            [
              "Invitación",
              <>
                Empieza por <code className={code}>INV-</code>
              </>,
              "Entras con el rol que eligió quien te invitó. Es de un solo uso y caduca en el plazo que se fijó al crearla.",
            ],
            [
              "Activación",
              <>
                Empieza por <code className={code}>NEXUS-</code>
              </>,
              "Te deja crear una agencia, de la que serás el propietario.",
            ],
          ]}
        />
        <p>
          Al escribir un código da igual usar mayúsculas o minúsculas, y los
          espacios y guiones no cuentan.
        </p>
      </ArticleSection>

      <ArticleSection id="unirte" title="Unirte a otra agencia">
        <p>
          Si creaste la cuenta con el código de una agencia o con tu invitación,
          esa agencia ya está en «Tus agencias». Para unirte a otra:
        </p>
        <Steps>
          <Step title="Haz clic en «Tengo un código»">
            <p>Está debajo de la lista de agencias.</p>
          </Step>
          <Step title="Escribe el código y haz clic en «Continuar»">
            <p>
              En «Código de invitación o de activación». Si el código sirve,
              aparece «Te uniste a la agencia» y Nexus la abre.
            </p>
            <Screenshot
              id="primeros-pasos/tengo-un-codigo"
              caption="La ventana «Tengo un código», con el código de una agencia escrito en «Código de invitación o de activación»."
            />
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Si la agencia llegó al máximo de usuarios de su plan, Nexus no te
            deja entrar hasta que la agencia amplíe el plan. Avísale a quien la
            administra.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="crear" title="Crear tu agencia">
        <p>
          Si creaste la cuenta con un código de activación, la ventana «Nueva
          agencia» se abre sola. Si tu cuenta ya existía, escribe el código en
          «Tengo un código»: al aceptarlo aparece «Código de activación
          aceptado» y se abre la misma ventana. Más tarde también la abre el
          botón «Crear agencia» de «Tus agencias».
        </p>
        <Steps>
          <Step title="Escribe el nombre de la agencia">
            <p>En «Nombre de la agencia». Se puede cambiar después.</p>
          </Step>
          <Step title="Acepta el acuerdo de uso">
            <p>
              Marca «Leí y acepto el Acuerdo de uso de Nexus en nombre de la
              agencia». El enlace «Acuerdo de uso» abre su texto completo.
            </p>
          </Step>
          <Step title="Haz clic en «Crear agencia»">
            <p>
              Quedas como propietario de la agencia y Nexus abre Agente →
              Configuración, con los pasos para poner la agencia en marcha:{" "}
              <ArticleLink to="agente/configuracion-del-agente" />.
            </p>
          </Step>
        </Steps>
        <Callout type="warning">
          <p>
            Un código de activación sirve una sola vez. Lo gasta la cuenta que
            lo usa primero, aunque todavía no haya creado la agencia.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="acuerdo" title="El acuerdo de uso">
        <p>
          El acuerdo de uso lo acepta solo el propietario, en nombre de la
          agencia: al crearla y cada vez que se publica una versión nueva. Si
          hay una versión que no ha aceptado, al abrir la agencia Nexus enseña
          el acuerdo, con su versión, y no deja pasar hasta marcar «Leí el
          acuerdo y lo acepto en nombre de» la agencia y hacer clic en «Aceptar
          acuerdo». Desde esa pantalla también se puede ir a «Cambiar de
          agencia» o cerrar la sesión.
        </p>
        <p>Al resto del equipo el acuerdo no le pide nada.</p>
        <p>
          Lo siguiente es{" "}
          <ArticleLink to="primeros-pasos/conocer-la-pantalla" />.
        </p>
      </ArticleSection>
    </>
  );
}
