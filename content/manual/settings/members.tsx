import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-lista", title: "La lista del equipo" },
  { id: "cambiar-el-rol", title: "Cambiar el rol" },
  { id: "permisos-adicionales", title: "Permisos adicionales" },
  { id: "restablecer", title: "Restablecer la contraseña de un miembro" },
  { id: "dos-pasos", title: "Quitar la verificación en dos pasos" },
  { id: "retirar", title: "Retirar del equipo" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-lista" title="La lista del equipo">
        <p>
          Configuración → Equipo → «Miembros» enseña a las personas de la
          agencia. La ve quien tiene el permiso «Ver quién está en la agencia».
          Se busca por nombre o correo y se filtra por rol con «Todos los
          roles».
        </p>
        <p>
          Cada fila dice el nombre, el correo, desde cuándo está en la agencia y
          su rol. Si la persona tiene permisos además de los de su rol, la fila
          lo dice («1 permiso adicional»), y también si tiene activada la
          «Verificación en dos pasos». Tu propia fila lleva «(tú)».
        </p>
        <p>
          Las acciones de cada persona están en el menú «Acciones de…», al final
          de su fila. Lo que aparece en él depende de tu rol y del de ella.
        </p>
        <p>
          Para sumar a alguien, «Invitar a una persona» (
          <ArticleLink to="configuracion/invitaciones" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="cambiar-el-rol" title="Cambiar el rol">
        <p>
          Con el permiso «Asignar roles y permisos adicionales», el rol de cada
          fila es un selector. Ofrece los «Roles fijos» (Miembro y, si eres
          administrador o propietario, Administrador) y los «Roles de la
          agencia». Al elegir uno aparece «Rol de … actualizado».
        </p>
        <p>
          Desde la lista no se cambia el rol del propietario ni el tuyo, y el de
          un administrador solo lo cambia otro administrador o el propietario.
          Qué permite cada rol está en{" "}
          <ArticleLink to="configuracion/roles-y-permisos" />.
        </p>
      </ArticleSection>

      <ArticleSection id="permisos-adicionales" title="Permisos adicionales">
        <p>
          Una persona puede tener permisos además de los de su rol, solo para
          ella. Los permisos adicionales solo suman: no le quitan nada de lo que
          da su rol.
        </p>
        <Steps>
          <Step title="Abre «Ver y ajustar su acceso»">
            <p>
              En el menú «Acciones de…» de la persona. No aparece para un
              administrador, que ya lo tiene todo.
            </p>
          </Step>
          <Step title="Elige un módulo y marca los permisos">
            <p>
              El panel «Acceso de…» dice el rol de la persona y si tiene
              exactamente lo que da su rol o, además, permisos adicionales. A la
              izquierda están los módulos con cuántos permisos tiene de cada
              uno; «Todo lo concedido» los reúne. Lo que ya da el rol aparece
              marcado y bloqueado, con «Ya lo concede su rol».
            </p>
            <Screenshot
              id="configuracion/acceso-de-un-miembro"
              caption="«Acceso de Laura Valentina Ortiz Peña»: su rol es Operaciones y «Todo lo concedido» lista lo que permite, módulo por módulo."
            />
          </Step>
          <Step title="Haz clic en «Guardar cambios»">
            <p>Aparece «Acceso de … actualizado».</p>
          </Step>
        </Steps>
        <p>
          Si el agente propone cambiar el acceso de alguien, la propuesta sale
          bajo su fila, «Acceso propuesto para…», con el rol al que pasaría y
          los permisos adicionales. Nada cambia hasta que una persona con el
          permiso la confirma.
        </p>
      </ArticleSection>

      <ArticleSection
        id="restablecer"
        title="Restablecer la contraseña de un miembro"
      >
        <p>
          Un miembro que olvidó su contraseña recibe un código de quien
          administra la agencia. Lo generan los administradores y el
          propietario; para un administrador, solo el propietario.
        </p>
        <Steps>
          <Step title="Haz clic en «Restablecer contraseña»">
            <p>En el menú «Acciones de…» de la persona.</p>
          </Step>
          <Step title="Entrégale el código">
            <p>
              Se abre «Código para restablecer la contraseña». El código vale 30
              minutos y sirve una sola vez. Entrégalo en persona o por teléfono:
              no se vuelve a mostrar. «Copiar» lo lleva al portapapeles.
            </p>
          </Step>
          <Step title="La persona cambia su contraseña">
            <p>
              En la pantalla de acceso, con «Olvidé mi contraseña», su correo,
              el código y la contraseña nueva (
              <ArticleLink to="primeros-pasos/recuperar-tu-contrasena" />
              ).
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Cada persona tiene un solo código vigente: si generas otro, el
            anterior deja de servir. Al usarlo, se cierran todas las sesiones de
            esa persona.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="dos-pasos"
        title="Quitar la verificación en dos pasos"
      >
        <p>
          Si un miembro perdió su aplicación autenticadora y sus códigos de
          recuperación, el propietario le quita la verificación con «Quitar
          verificación en dos pasos», en el menú de su fila. La opción solo
          aparece para el propietario y para quien la tiene activada.
        </p>
        <p>
          Al confirmar con «Quitar», la persona entra solo con su contraseña
          hasta que la active de nuevo, como se explica en{" "}
          <ArticleLink to="primeros-pasos/proteger-tu-cuenta" />.
        </p>
      </ArticleSection>

      <ArticleSection id="retirar" title="Retirar del equipo">
        <p>
          Con el permiso «Retirar personas», el menú lleva «Retirar del equipo».
          Al confirmar con «Retirar», la persona pierde el acceso a la agencia
          de inmediato. Podría volver a entrar con el código de invitación de la
          agencia, por lo que conviene regenerarlo si no debe volver (
          <ArticleLink to="configuracion/invitaciones" />
          ).
        </p>
        <p>
          El propietario no se puede retirar, ni puedes retirarte tú desde esta
          lista. A un administrador solo lo retira otro administrador o el
          propietario.
        </p>
      </ArticleSection>
    </>
  );
}
