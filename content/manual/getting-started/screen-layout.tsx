import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-menu", title: "El menú principal" },
  { id: "el-riel", title: "El riel y el menú de cada módulo" },
  { id: "la-cabecera", title: "La agencia y la campana" },
  { id: "la-cuenta", title: "Tu cuenta, al pie" },
  { id: "atras-y-adelante", title: "Atrás y adelante en Windows" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-menu" title="El menú principal">
        <Video id="primeros-pasos/conocer-la-pantalla" />
        <p>
          Dentro de una agencia, el menú va a la izquierda y la pantalla abierta
          a la derecha. Las entradas van en tres grupos:
        </p>
        <ManualTable
          head={["Grupo", "Entradas"]}
          rows={[
            ["Sin título, arriba", "Inicio, Tareas, Correos, Chats y Agente"],
            ["Cartera", "Clientes, Pólizas, Cumplimiento y Documentos"],
            ["Recursos", "Directrices, Contactos y Accesos"],
          ]}
        />
        <p>
          Configuración va aparte, en el pie del menú, sobre tu cuenta. Cada
          persona ve las entradas que su rol le permite: una entrada sin permiso
          no aparece.
        </p>
        <Screenshot
          id="primeros-pasos/pantalla"
          caption="«Mi día» en el Inicio de Altavista Seguros: a la izquierda el menú con sus grupos «Cartera» y «Recursos», y la cifra de lo pendiente junto a Tareas, Chats y Contactos."
        />
        <p>
          La cifra junto a una entrada dice lo que espera en ella: tus tareas
          abiertas, los correos por enviar, los chats con mensajes sin leer, los
          pasos pendientes del agente o lo que hay por confirmar en Contactos.
          Con el menú recogido en el riel, al pasar el ratón por un icono se lee
          qué cuenta («Tareas · 12 abiertas a tu cargo, 1 vencida»). El color
          dice el estado: en rojo hay algo vencido, que falló o que llegó al
          límite del plan; en ámbar, algo que espera a una persona.
        </p>
        <p>
          El botón «Mostrar u ocultar el menú», arriba a la izquierda de cada
          pantalla, recoge el menú y lo vuelve a abrir. El atajo es Ctrl+B.
        </p>
      </ArticleSection>

      <ArticleSection id="el-riel" title="El riel y el menú de cada módulo">
        <p>
          Los módulos con secciones (Tareas, Correos, Chats, Agente, Clientes,
          Pólizas, Cumplimiento, Documentos, Directrices, Contactos, Accesos y
          Configuración) tienen su propio menú. También lo tiene el tablero de
          la agencia, «Agencia», para quien lo ve:{" "}
          <ArticleLink to="inicio/tablero-de-la-agencia" />. Al abrir uno, el
          menú principal queda en iconos, en una columna estrecha (el riel), y
          el menú del módulo aparece a su lado, con su nombre arriba y una
          entrada por sección. Las de configurar el módulo van al final, bajo
          «Ajustes».
        </p>
        <Screenshot
          id="primeros-pasos/riel-y-menu-del-modulo"
          caption="Tareas abierta: el menú principal en iconos a la izquierda y, a su lado, el menú de Tareas con «Mías», «Agencia», «Por revisar», «Cerradas», «Recurrentes» y, bajo «Ajustes», «Plazos»."
        />
        <p>
          En el riel, la cifra de cada módulo se vuelve un punto, y el nombre se
          lee al pasar el ratón por el icono. Para cambiar de módulo, haz clic
          en su icono. Dentro de un módulo, «Mostrar u ocultar el menú» recoge
          el menú del módulo; el riel se queda.
        </p>
        <p>
          Con la ventana angosta, de menos de 1024 píxeles de ancho (por
          ejemplo, a media pantalla), el menú del módulo entra recogido para
          dejarle el ancho al contenido. Lo que abras o recojas así se recuerda
          aparte del tamaño ancho. Más angosta aún, Nexus se ordena como en el
          celular: <ArticleLink to="primeros-pasos/nexus-en-el-celular" />.
        </p>
      </ArticleSection>

      <ArticleSection id="la-cabecera" title="La agencia y la campana">
        <p>
          Arriba del menú está la agencia en la que trabajas, con tu rol debajo.
          Al hacer clic en ella se abre su menú:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Cambiar de agencia» vuelve a «Tus agencias», para abrir otra
            agencia a la que perteneces.
          </li>
          <li>
            «Salir de la agencia» te retira del equipo. Dejas de ver sus datos;
            tu cuenta sigue existiendo y, para volver, necesitas un código de
            invitación vigente. El propietario no tiene esta opción.
          </li>
        </ul>
        <Screenshot
          id="primeros-pasos/menu-de-la-agencia"
          caption="El menú de la agencia: «Agencia actual», el nombre de la agencia y «Cambiar de agencia». A la derecha de la agencia, la campana con la cifra de notificaciones."
        />
        <p>
          Junto a la agencia está la campana, con la cifra de lo que tienes por
          atender. Abre la bandeja de notificaciones sobre la pantalla en que
          estás: <ArticleLink to="primeros-pasos/tus-notificaciones" />.
        </p>
      </ArticleSection>

      <ArticleSection id="la-cuenta" title="Tu cuenta, al pie">
        <p>
          Al pie del menú están tu nombre y tu correo. Al hacer clic se abre el
          menú de tu cuenta:
        </p>
        <ManualTable
          head={["Opción", "Qué hace"]}
          rows={[
            [
              "Tema",
              "«Claro», «Oscuro» o «Como el sistema». Se marca el que está puesto.",
            ],
            ["Ayuda", "Abre la ayuda de Nexus en el navegador del sistema."],
            [
              "Enviar una idea o un problema",
              "Escribe a quien hace Nexus. El mensaje llega con tu nombre y el de la agencia; no incluyas claves ni datos de clientes.",
            ],
            [
              "Tu perfil",
              "Tu foto, tu nombre, tu firma y tu correo principal.",
            ],
            [
              "Seguridad de la cuenta",
              <>
                La verificación en dos pasos y, si eres el propietario, la
                recuperación por correo:{" "}
                <ArticleLink to="primeros-pasos/proteger-tu-cuenta" />.
              </>,
            ],
            ["Cerrar sesión", "Cierra la sesión y bloquea la bóveda."],
          ]}
        />
        <Screenshot
          id="primeros-pasos/menu-de-la-cuenta"
          caption="El menú de la cuenta, abierto desde el pie del menú: el tema, «Ayuda», «Enviar una idea o un problema», «Tu perfil», «Seguridad de la cuenta» y «Cerrar sesión»."
        />
        <p>
          En «Tu perfil», el apartado «Correo principal» aparece si tienes algún
          correo vinculado desde el que se puede enviar. En «Correo» eliges uno
          de ellos o «Sin correo principal». El agente redacta desde ese correo
          lo que le pidas sin indicar otro; sin correo principal, pregunta desde
          cuál. Los cambios se guardan con «Guardar cambios».
        </p>
        <Screenshot
          id="primeros-pasos/perfil-correo-principal"
          caption="«Tu perfil», con el selector «Correo» del apartado «Correo principal» desplegado: el correo desde el que el agente redacta lo que le pides."
        />
      </ArticleSection>

      <ArticleSection id="atras-y-adelante" title="Atrás y adelante en Windows">
        <p>
          En la aplicación de Windows, la franja de arriba de la ventana lleva
          los botones «Atrás» y «Adelante». Al pasar el ratón, dicen a qué
          pantalla vuelven. Los atajos son Alt+← y Alt+→.
        </p>
        <p>
          Volver enseña la pantalla como la dejaste: la pestaña, el panel
          abierto y hasta dónde habías bajado. En el navegador se usan los
          botones de atrás y adelante del propio navegador.
        </p>
      </ArticleSection>
    </>
  );
}
