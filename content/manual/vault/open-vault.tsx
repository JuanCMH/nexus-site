import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-la-boveda", title: "Qué es la bóveda" },
  { id: "crear-tu-clave", title: "Crear tu clave" },
  { id: "abrirla", title: "Abrir la bóveda" },
  { id: "cuando-se-cierra", title: "Cuándo se cierra" },
  { id: "si-olvidas-la-clave", title: "Si olvidas la clave" },
  { id: "como-se-protege", title: "Cómo se protege" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-la-boveda" title="Qué es la bóveda">
        <p>
          Accesos, en el menú principal, es la bóveda de la agencia: el usuario,
          la contraseña y la clave del autenticador de cada cuenta que usa el
          equipo, como los portales de las aseguradoras, los correos o la banca.
          Cada persona ve y usa los accesos que le concedieron.
        </p>
        <p>
          La bóveda se abre con una clave propia, distinta de la contraseña con
          la que entras a Nexus, y solo en un computador o un navegador de
          confianza. Junto al título del menú, «Abierta» o «Cerrada» dice en qué
          estado está.
        </p>
        <Screenshot
          id="accesos/crear-clave"
          caption="Accesos con la bóveda «Cerrada»: el menú del módulo, por tipo, «Por atender», «Administración» y «Ajustes», y la pantalla para crear la clave."
        />
      </ArticleSection>

      <ArticleSection id="crear-tu-clave" title="Crear tu clave">
        <p>
          La primera vez que entras a Accesos, Nexus pide crear tu clave de la
          bóveda.
        </p>
        <Screenshot
          id="accesos/crear-clave-detalle"
          caption="«Crea tu clave de la bóveda»: la clave, su confirmación y el botón «Crear la bóveda»."
        />
        <Steps>
          <Step title="Escribe la clave dos veces">
            <p>
              En «Clave de la bóveda» y en «Confirmación de la clave». Necesita
              al menos 10 caracteres; una frase que recuerdes es mejor que una
              palabra difícil.
            </p>
          </Step>
          <Step title="Haz clic en «Crear la bóveda»">
            <p>
              El navegador o el computador donde la creas queda como el primero
              de confianza.
            </p>
          </Step>
          <Step title="Guarda la clave de recuperación">
            <p>
              Nexus enseña una clave de recuperación una sola vez: no la guarda.
              Es lo único que abre tu bóveda si olvidas la clave, y lo que
              aprueba un computador nuevo cuando no tienes otro a mano.
              Imprímela o escríbela, y déjala fuera de este computador. «Copiar»
              la copia; «Ya la guardé» sigue.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="abrirla" title="Abrir la bóveda">
        <p>
          En un computador o un navegador de confianza, Accesos enseña «La
          bóveda está cerrada». Escribe tu «Clave de la bóveda» y haz clic en
          «Abrir la bóveda». La clave se comprueba en tu computador: no viaja al
          servidor.
        </p>
        <p>
          Si el computador o el navegador todavía no es de confianza, Accesos
          dice «… aún no es de confianza» y la bóveda no se abre hasta que lo
          aprueben. Cómo se aprueba está en{" "}
          <ArticleLink to="accesos/equipos-de-confianza" />.
        </p>
        <Callout type="warning">
          <p>
            En una ventana privada, o con el almacenamiento del navegador
            bloqueado, la bóveda no se puede abrir: el navegador no deja guardar
            su identificación. Ábrela en una ventana normal o desde la
            aplicación para Windows.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="cuando-se-cierra" title="Cuándo se cierra">
        <p>La bóveda se cierra sola:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>tras diez minutos sin usar Nexus;</li>
          <li>al cerrar sesión;</li>
          <li>al cerrar la aplicación.</li>
        </ul>
        <p>
          Con la bóveda abierta, el pie del menú de Accesos dice cuánto falta
          («Se cierra en») y tiene «Bloquear», para cerrarla al levantarte del
          puesto. Cada clic o tecla en Nexus vuelve a contar los diez minutos.
        </p>
      </ArticleSection>

      <ArticleSection id="si-olvidas-la-clave" title="Si olvidas la clave">
        <p>
          En la pantalla para abrirla, «Olvidé mi clave» pide la «Clave de
          recuperación» y una «Clave nueva de la bóveda». Tus accesos no
          cambian, y la clave de recuperación sigue siendo válida después de
          usarla.
        </p>
        <p>
          Si tampoco tienes la de recuperación, queda «Restablecer la bóveda».
          Pierdes todos los accesos que te habían concedido, y lo que solo tú
          podías abrir se borra. Después creas una clave nueva y alguien que
          tenga cada acceso te lo vuelve a conceder.
        </p>
        <p>
          En Accesos → «Tu clave», con la bóveda abierta, puedes cambiar la
          clave (pide la actual) o generar una clave de recuperación nueva; la
          anterior deja de ser válida.
        </p>
      </ArticleSection>

      <ArticleSection id="como-se-protege" title="Cómo se protege">
        <p>
          El usuario, la contraseña, la dirección web, la clave del autenticador
          y las notas de cada acceso se cifran en tu computador o navegador
          antes de guardarse. Al servidor solo sube texto cifrado, y Nexus no
          tiene tu clave de la bóveda, así que no puede leerlo.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Tu clave de la bóveda protege la parte de tu identificación con la
            que abres lo que te concedieron. Esa parte nunca sale de tu
            computador sin cifrar.
          </li>
          <li>
            Cada acceso se cifra por separado y se entrega cifrado a cada
            persona que lo usa. Solo ella lo puede abrir, con su propia clave.
          </li>
          <li>
            Quitarle un acceso a una persona borra la copia que tenía; el acceso
            se vuelve a proteger.
          </li>
          <li>
            El nombre del acceso, su tipo y su relación con una aseguradora o un
            correo vinculado no van cifrados: son los que permiten ordenarlo y
            buscarlo.
          </li>
        </ul>
        <p>
          El agente no abre la bóveda: no lee ni escribe contraseñas (
          <ArticleLink to="accesos/accesos-del-agente" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
