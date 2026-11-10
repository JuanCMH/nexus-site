import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { APP_URL } from "@/lib/site";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "en-el-telefono", title: "Nexus en el teléfono" },
  { id: "instalar", title: "Instalarlo en la pantalla de inicio" },
  { id: "la-pantalla", title: "La pantalla del teléfono" },
  { id: "avisos", title: "Los avisos en el celular" },
  { id: "sin-conexion", title: "Sin conexión" },
];

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function Article() {
  return (
    <>
      <ArticleSection id="en-el-telefono" title="Nexus en el teléfono">
        <p>
          En el celular, Nexus se abre en el navegador del teléfono, en{" "}
          {APP_URL ? (
            <a href={APP_URL} className={linkClassName}>
              {APP_URL.replace(/^https?:\/\//, "")}
            </a>
          ) : (
            "la dirección de la app"
          )}
          , con tu misma cuenta y los mismos datos. En una pantalla estrecha la
          aplicación se ordena para el teléfono, y todo se puede hacer en ella.
        </p>
        <p>
          Se puede usar así, en una pestaña, o instalar en la pantalla de
          inicio. Instalado, Nexus abre como aplicación y te avisa aunque esté
          cerrado.
        </p>
      </ArticleSection>

      <ArticleSection id="instalar" title="Instalarlo en la pantalla de inicio">
        <p>
          Al abrir Nexus en el navegador del teléfono, Mi día enseña «Recibe los
          avisos en este teléfono» con el botón «Instalar Nexus». «Ahora no» lo
          esconde dos semanas.
        </p>
        <p>
          En Android, «Instalar Nexus» abre el ofrecimiento del navegador. Si el
          navegador no lo ofrece, Nexus enseña los pasos:
        </p>
        <Steps>
          <Step title="Abre el menú del navegador">
            <p>Los tres puntos junto a la dirección.</p>
          </Step>
          <Step title="Elige «Instalar aplicación» o «Añadir a la pantalla principal»" />
          <Step title="Abre Nexus desde su icono">
            <p>Y activa los avisos en Configuración → Notificaciones.</p>
          </Step>
        </Steps>
        <p>En el iPhone, con Safari:</p>
        <Steps>
          <Step title="Toca «Compartir» en la barra de Safari" />
          <Step title="Elige «Añadir a pantalla de inicio» y toca «Añadir»" />
          <Step title="Abre Nexus desde su icono">
            <p>
              Entra con tu cuenta y activa los avisos en Configuración →
              Notificaciones.
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Nexus instalado tiene su propia sesión: la primera vez pide entrar
            otra vez, y Accesos pide aprobar el teléfono como equipo de
            confianza: <ArticleLink to="accesos/equipos-de-confianza" />.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="la-pantalla" title="La pantalla del teléfono">
        <p>
          Abajo va una barra con lo de todos los días: «Inicio», «Tareas»,
          «Chats», «Avisos» (la bandeja de notificaciones) y «Más». «Tareas»,
          «Chats» y «Avisos» llevan su cifra, como en el menú del computador.
        </p>
        <p>
          «Más» abre una hoja desde abajo con la agencia, los demás módulos en
          cuadros (con su cifra el que tiene algo pendiente), y al final
          Configuración y tu cuenta. Cuando algo espera en uno de esos módulos,
          «Más» lleva un punto: ámbar si espera a una persona, rojo si hay algo
          vencido o que falló.
        </p>
        <Screenshot
          id="primeros-pasos/mas-celular"
          caption="La hoja «Más» en el celular: la agencia, los demás módulos con lo que espera en cada uno, Configuración y la cuenta."
        />
        <Screenshot
          id="primeros-pasos/celular"
          caption="Mi día en un teléfono: el selector «Mi día» y «Agencia» en la cabecera, las cifras de dos en dos, las tarjetas en una columna y, abajo, la barra con «Inicio», «Tareas», «Chats», «Avisos» y «Más»."
        />
        <ul className="list-disc space-y-2 pl-5">
          <li>
            El menú de un módulo va bajo la cabecera de la pantalla: hasta cinco
            entradas, como una fila de botones; desde seis, como un selector que
            dice dónde estás y abre las demás en una hoja. En Documentos y
            Contactos, en una hoja que se abre desde ahí.
          </li>
          <li>
            Los listados se leen como tarjetas, con el buscador arriba y, a su
            lado, el botón «Filtros y orden», que abre la hoja «Filtros». Si hay
            filtros puestos, el botón dice cuántos. Los paneles que en el
            computador se abren al lado ocupan la pantalla entera.
          </li>
          <li>
            Un formulario o una conversación usan todo el alto: mientras están
            abiertos no hay barra de abajo. La barra vuelve al salir.
          </li>
          <li>
            Lo que en el computador sale al pasar el ratón, en el teléfono sale
            al tocar. Un chat se maneja manteniéndolo presionado, y las listas
            que se ordenan a mano se arrastran manteniendo presionado.
          </li>
          <li>
            Al adjuntar un documento, «Tomar foto» abre la cámara del teléfono.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="avisos" title="Los avisos en el celular">
        <p>
          Con Nexus instalado, el celular avisa de lo que te llega aunque la
          aplicación esté cerrada. En el iPhone, los avisos llegan solo con
          Nexus instalado en la pantalla de inicio.
        </p>
        <p>
          Qué te avisa, qué dice el aviso con la pantalla bloqueada y si el
          celular espera mientras usas el computador se eligen en Configuración
          → Notificaciones:{" "}
          <ArticleLink to="primeros-pasos/tus-notificaciones" />.
        </p>
      </ArticleSection>

      <ArticleSection id="sin-conexion" title="Sin conexión">
        <p>
          Nexus necesita internet para mostrar y guardar los datos de la
          agencia; no guarda datos en el teléfono para leerlos sin red. Sin
          conexión, la pantalla dice «Sin conexión» y vuelve sola en cuanto hay
          red; «Reintentar» recarga la página. Lo que estabas escribiendo sigue
          ahí cuando vuelve la conexión.
        </p>
      </ArticleSection>
    </>
  );
}
