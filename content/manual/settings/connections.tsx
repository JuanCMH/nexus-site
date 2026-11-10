import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es esta pantalla" },
  { id: "cada-portal", title: "Lo que dice cada portal" },
  { id: "el-computador", title: "El computador de los portales" },
  { id: "conectar", title: "Conectar un portal" },
  { id: "acciones", title: "Las acciones de cada portal" },
  { id: "el-codigo", title: "Cuando el portal pide el código" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es esta pantalla">
        <p>
          Configuración → Catálogos → «Conexiones» abre «Conexiones con
          aseguradoras». La ve quien tiene «Ver aseguradoras y ramos». Su bloque
          «Aseguradoras» lo describe así: «Nexus consulta el portal de cada
          aseguradora habilitada con un acceso de la bóveda, en un navegador
          interno del computador de los portales. La clave se escribe en ese
          computador y no sale de él».
        </p>
        <p>
          Los portales de la lista son los que trae Nexus; la agencia no agrega
          otros. En la versión 0.68.3 son dos: Sura y AXA Colpatria. Nexus solo
          consulta esos portales y baja sus documentos; no emite pólizas en
          ellos.
        </p>
        <Screenshot
          id="configuracion/conexiones"
          caption="«Conexiones con aseguradoras»: la línea del computador de los portales, el enlace a Directrices › Portales, y Sura y AXA Colpatria «Sin conectar», cada uno con lo que trae y lo que pide para entrar."
        />
      </ArticleSection>

      <ArticleSection id="cada-portal" title="Lo que dice cada portal">
        <ManualTable
          head={["En la fila", "Qué significa"]}
          rows={[
            [
              "El nombre del portal",
              "El portal de la aseguradora al que se entra, como «Sucursal en Línea».",
            ],
            [
              "«Trae: …»",
              "Lo que se consulta en ese portal. En Sura, «Pólizas vigentes y canceladas, con tomador, ramo y vigencia»; en AXA Colpatria, «Pólizas vigentes de cada cliente, con ramo, producto, número, prima, vigencia y anexos».",
            ],
            [
              "«Para entrar pide: …»",
              "Lo que pide el portal para abrir la sesión: usuario y clave, un código de autenticador y, si lo recuerda, cuántos días recuerda el computador.",
            ],
            [
              "«Acceso: …»",
              "El acceso de la bóveda con el que se entra. Si no lo tienes abierto, dice «abre la bóveda para ver cuál».",
            ],
            [
              "«Última ejecución: …»",
              "El último recorrido, cómo terminó y cuándo y, si bajó documentos, cuántos archivos quedaron en Documentos.",
            ],
            ["«Sin conectar»", "La agencia aún no le asignó un acceso."],
            [
              "«Sesión abierta»",
              "Hay una sesión abierta en el portal. La fila dice quién la abrió, en qué computador y desde cuándo.",
            ],
            [
              "«Espera a una persona»",
              "El portal pide algo que tiene que hacer una persona para seguir, como el código del autenticador.",
            ],
            ["«Sin sesión»", "Tiene acceso, pero ahora no hay sesión abierta."],
            [
              "«Conectada»",
              "No hay sesión, pero el computador de los portales la abre solo cuando el agente o un recorrido la necesitan.",
            ],
            [
              "«Sin conceder»",
              "Falta concederle el acceso al computador de los portales: mientras tanto, la sesión la abre una persona con la bóveda abierta.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="el-computador" title="El computador de los portales">
        <p>
          Bajo la descripción, una línea dice qué computador corre los portales:
        </p>
        <ManualTable
          head={["La línea dice", "Qué significa"]}
          rows={[
            [
              "«Ningún computador corre los portales»",
              "La sesión de cada portal la abre una persona con la bóveda abierta.",
            ],
            [
              "«Computador de los portales: …, encendido»",
              "Ese computador abre las sesiones solo, sin que nadie abra la bóveda.",
            ],
            [
              "«Computador de los portales: …, apagado o sin Nexus»",
              "Mientras tanto no se consulta ningún portal.",
            ],
          ]}
        />
        <p>
          El computador de los portales es una instalación de Nexus para
          Windows. Un administrador o el propietario lo designa con «Usar este
          computador», desde ese mismo computador.
        </p>
        <p>
          Debajo, otra línea lleva a Directrices: «Qué hace cada recorrido, qué
          flujo lo usa y su última ejecución están en Directrices › Portales» (
          <ArticleLink to="directrices/portales" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="conectar" title="Conectar un portal">
        <p>
          Conectar pide el permiso «Conectar con aseguradoras», que es delicado:
          guarda las credenciales de la agencia con cada aseguradora. El agente
          no lo tiene. Se hace en la aplicación de Windows; en la web, la
          pantalla solo enseña los portales y su estado.
        </p>
        <Steps>
          <Step title="Guarda el acceso en la bóveda">
            <p>
              El usuario y la clave del portal van en Accesos (
              <ArticleLink to="accesos/guardar-un-acceso" />
              ).
            </p>
          </Step>
          <Step title="Haz clic en «Conectar»">
            <p>En la fila del portal, en Configuración → Conexiones.</p>
          </Step>
          <Step title="Elige el acceso">
            <p>
              En «Acceso», el de la bóveda con el que Nexus entra al portal. Si
              el portal pide un código de autenticador, la ventana dice si el
              acceso guarda su secreto, y entonces Nexus escribe el código solo.
              Si no lo guarda, Nexus pide el código a una persona cada vez que
              el portal lo exige, como se explica en «Cuando el portal pide el
              código».
            </p>
          </Step>
          <Step title="Haz clic en «Conectar»" />
        </Steps>
        <Callout type="note">
          <p>
            Desconectar un portal deja de usar su acceso y cierra la sesión. El
            acceso sigue en la bóveda y los documentos que se trajeron no
            cambian.
          </p>
        </Callout>
        <p>
          Consultar un portal con la sesión abierta pide el permiso «Operar los
          portales de las aseguradoras». Quien lo tiene, persona o agente, nunca
          ve las claves.
        </p>
      </ArticleSection>

      <ArticleSection id="acciones" title="Las acciones de cada portal">
        <p>
          Quien tiene «Conectar con aseguradoras» ve el menú «…» de cada portal
          conectado. Lo que ofrece depende de dónde estás y del estado de la
          sesión:
        </p>
        <ManualTable
          head={["Acción", "Qué hace"]}
          rows={[
            [
              "«Dejar que abra su sesión sola»",
              "Concede el acceso al computador de los portales, para que abra la sesión sin que nadie abra la bóveda. La ven el propietario y los administradores, en la aplicación para Windows.",
            ],
            [
              "«Abrir sesión» o «Abrir sesión en este computador»",
              "Abre la sesión del portal en tu computador, con la bóveda abierta.",
            ],
            [
              "«Abrir sesión y ver el portal», «Ver el portal»",
              "Abre la sesión y enseña el portal en una ventana, o enseña la sesión que ya está abierta en tu computador.",
            ],
            [
              "«Correr un recorrido»",
              "Lista los recorridos del portal, como «Pólizas vigentes». Elegir uno lo pone en marcha: «Recorrido «…» en curso».",
            ],
            ["«Cerrar sesión»", "Cierra la sesión abierta en el portal."],
            [
              "«Cambiar acceso»",
              "Elige otro acceso de la bóveda para ese portal. Solo en la aplicación para Windows.",
            ],
            [
              "«Desconectar»",
              "Pide confirmarlo: deja de usar el acceso y cierra la sesión.",
            ],
          ]}
        />
        <p>
          Los documentos que se bajan de un portal quedan en Documentos,
          vinculados a su póliza o a su cliente (
          <ArticleLink to="documentos/explorador-de-documentos" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="el-codigo" title="Cuando el portal pide el código">
        <p>
          Si el portal pide el código de la app autenticadora y el acceso no
          guarda su secreto, Nexus no detiene el trabajo: se lo pide a una
          persona en una ventana, en cualquier pantalla de Nexus, en Windows, en
          la web o en el celular. Mientras tanto, la fila del portal dice «El
          portal pide el código de la app autenticadora» con «Espera a una
          persona».
        </p>
        <Steps>
          <Step title="Abre la ventana">
            <p>
              Se titula «… pide el código de la app autenticadora», con el
              nombre del portal. También llega una notificación con el mismo
              texto.
            </p>
          </Step>
          <Step title="Escribe el código">
            <p>
              Abre la app autenticadora de la agencia y escribe el código que
              muestra en ese momento: «El código cambia cada 30 segundos:
              escribe el que se ve ahora». Solo admite números.
            </p>
          </Step>
          <Step title="Haz clic en «Enviar código»">
            <p>
              El computador de los portales lo escribe en el portal y sigue con
              el trabajo. «Ahora no» cierra la ventana sin responder.
            </p>
          </Step>
        </Steps>
        {/* CAPTURA configuracion/codigo-del-portal: la ventana «Sura pide el código de la app autenticadora» abierta sobre cualquier pantalla, con el campo del código vacío y los botones «Ahora no» y «Enviar código» | La ventana con la que Nexus pide el código del autenticador de Sura: el campo del código y «Enviar código». */}
        <ManualTable
          head={["Quién recibe el pedido", "Cuándo"]}
          rows={[
            [
              "Quien pidió el trabajo al agente",
              "En cuanto el portal pide el código.",
            ],
            [
              "El propietario y los administradores",
              "Si nadie lo escribió en 2 minutos, o desde el principio si nadie pidió el trabajo.",
            ],
          ]}
        />
        <p>
          El portal espera el código 5 minutos. El agente nunca recibe ni
          escribe el código. La notificación se llama «Códigos de los portales»
          en las preferencias de Configuración → Notificaciones (
          <ArticleLink to="primeros-pasos/tus-notificaciones" />
          ).
        </p>
        <Callout type="tip">
          <p>
            Para que el computador de los portales escriba el código solo,
            guarda la clave del autenticador en el acceso del portal (
            <ArticleLink to="accesos/guardar-un-acceso" />
            ).
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
