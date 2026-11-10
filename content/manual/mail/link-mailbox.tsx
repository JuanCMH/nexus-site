import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es un correo vinculado" },
  { id: "vincular", title: "Vincular un correo" },
  { id: "la-clave", title: "Registrar la clave" },
  { id: "lo-que-lee", title: "Qué carpetas se leen" },
  { id: "quien", title: "Quién lo ve" },
  { id: "el-panel", title: "El panel del correo" },
  { id: "correo-principal", title: "Correo principal de" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es un correo vinculado">
        <p>
          Un correo vinculado es una dirección de la agencia que el agente
          revisa en busca de clientes, pólizas y documentos, y desde la que, si
          se permite, salen los correos que se envían desde Nexus.
        </p>
        <p>
          Están en «Correos → Correos vinculados». Cada fila dice la dirección,
          para qué es, cada cuánto se revisa y quién lo lee, con el avance del
          análisis y su estado: «Pendiente», «Activo», «En pausa» o «Con error».
        </p>
        <Screenshot
          id="correos/vinculados"
          caption="«Correos → Correos vinculados» con dos correos «Activo»: cada fila dice su propósito, «revisión diaria», quién lo lee y el avance del análisis al 100 %."
        />
        <p>
          Vincular correos, editarlos y elegir quién los lee requiere el permiso
          «Vincular correos y decidir quién los lee».
        </p>
      </ArticleSection>

      <ArticleSection id="vincular" title="Vincular un correo">
        <Steps>
          <Step title="Haz clic en «Vincular correo»">
            <p>
              Se abre «Vincular un correo». Si aún no hay ninguno, el botón está
              en el centro de la lista vacía.
            </p>
          </Step>
          <Step title="Escribe la «Dirección» y elige el «Proveedor»">
            <p>«Gmail», «Microsoft 365», «IMAP» u «Otro».</p>
          </Step>
          <Step title="Di el «Propósito» y el «Responsable»">
            <p>
              El propósito es para qué es el correo: «Renovaciones»,
              «Comercial». El responsable es la persona del equipo que lo lleva;
              también firma los correos que salen de él (
              <ArticleLink to="correos/presentacion-y-firma" />
              ).
            </p>
          </Step>
          <Step title="Elige la «Lectura del correo»">
            <p>
              «Lo lee Nexus (clave en la nube)»: Nexus lo lee con una clave que
              guarda cifrada. Es la opción que permite, además, enviar desde él.
              «Lo lee el asistente con su conector de correo»: lo lee el
              asistente conectado, con su propio acceso al correo, y Nexus no
              guarda clave.
            </p>
          </Step>
          <Step title="Elige la «Revisión» y «Analizar desde»">
            <p>
              La revisión es cada cuánto lo revisa el agente: «Diaria»,
              «Semanal» o «Manual». «Analizar desde» es la fecha desde la que
              recorre los mensajes en el análisis inicial; viene puesta un año
              atrás.
            </p>
          </Step>
          <Step title="Añade «Notas», si hace falta, y haz clic en «Vincular correo»">
            <p>
              Las notas le dicen al agente qué llega a ese correo, qué ignorar o
              quién lo escribe.
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="correos/vincular-un-correo"
          caption="La ventana «Vincular un correo», con «Dirección», «Proveedor», «Propósito», «Responsable», «Lectura del correo», «Revisión», «Analizar desde» y «Notas»."
        />
        <p>
          La lista vacía ofrece también dejar que el agente lo haga con el flujo
          «Vincular correos».
        </p>
      </ArticleSection>

      <ArticleSection id="la-clave" title="Registrar la clave">
        <p>
          Un correo que lee Nexus necesita su clave. Ábrelo en la lista y, en
          «Clave del correo», haz clic en «Registrar la clave».
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">En Gmail</strong> la clave es una
            contraseña de aplicación, no la de la cuenta. La ventana lo explica:
            activa la verificación en dos pasos de esa cuenta de Google, abre
            «Contraseñas de aplicaciones», crea una con el nombre «Nexus» y pega
            las 16 letras que te muestra.
          </li>
          <li>
            <strong className="font-medium">En Microsoft 365</strong> el acceso
            por IMAP con contraseña suele estar apagado. Si la clave no es
            aceptada, debe habilitarlo quien administra el correo.
          </li>
          <li>
            <strong className="font-medium">En los demás</strong>, el servidor
            IMAP y la clave los da tu proveedor de correo.
          </li>
        </ul>
        <p>
          «Servidor IMAP», «Puerto» y «Usuario» vienen puestos para Gmail y
          Microsoft 365; el usuario casi siempre es la dirección del correo.
          «Comprobar y guardar» prueba la clave antes de guardarla. Si funciona,
          aparece «Clave guardada en Nexus» con cuántos mensajes tiene y qué
          carpetas lee. La clave se guarda cifrada y no se vuelve a mostrar.
        </p>
        <Callout type="note">
          <p>
            En versiones anteriores, la clave se guardaba en un computador. Un
            correo así dice «Clave guardada en este computador» y solo ese
            computador puede leerlo. En la aplicación para Windows, «Pasar a la
            nube» la guarda en Nexus y la quita del computador.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="lo-que-lee" title="Qué carpetas se leen">
        <p>
          Nexus lee las carpetas según su uso, y el panel del correo lo dice en
          «Conexión»:
        </p>
        <ManualTable
          head={["Proveedor", "Lo que se lee"]}
          rows={[
            [
              "Gmail",
              "Todos los correos (recibidos, enviados y archivados) y el spam de remitentes conocidos.",
            ],
            [
              "Los demás",
              "La bandeja de entrada, los enviados, el archivo y el spam de remitentes conocidos.",
            ],
          ]}
        />
        <p>
          Nunca se leen la papelera ni los borradores. Del spam solo se lee lo
          que envían remitentes conocidos: los que están en Contactos y los
          demás correos vinculados de la agencia.
        </p>
        <p>
          Nexus vuelve a comprobar la conexión cada tres horas. «Probar
          conexión» la comprueba en el momento. El estado es «Conectado», «Clave
          rechazada», «Sin clave» o «Sin conexión»; si es uno de los tres
          últimos, el panel dice qué hacer y la fila de la lista lleva la marca.
        </p>
      </ArticleSection>

      <ArticleSection id="quien" title="Quién lo ve">
        <p>
          Un correo vinculado no existe para quien no tiene acceso a él: no lo
          ve en Nexus, no ve sus correos por enviar ni enviados, y el agente no
          le cuenta nada de él aunque se lo pida.
        </p>
        <p>
          Lo ven siempre los administradores de la agencia y el responsable del
          correo. A los demás se les da acceso en «Personas con acceso», con
          «Cambiar personas»: un interruptor por persona.
        </p>
      </ArticleSection>

      <ArticleSection id="el-panel" title="El panel del correo">
        <p>
          Al abrir un correo en la lista se ve su estado y su última revisión,
          el «Análisis inicial», «Lo que ha encontrado el agente» (mensajes
          revisados, pólizas y clientes propuestos, documentos guardados), sus
          datos y quién tiene acceso.
        </p>
        <Screenshot
          id="correos/correo-vinculado"
          caption="El panel de operaciones@altavistaseguros.co: estado «Activo», el análisis inicial, lo que ha encontrado el agente, sus datos, «Personas con acceso», «Correo principal de» y «Envío»."
        />
        <p>
          En un correo que lee Nexus aparece también «Envío». Está apagado al
          vincularlo: que Nexus lea un correo no le da permiso para enviar desde
          él. Quien tiene el permiso «Enviar los correos que redacta el agente»
          lo enciende con «Permitir envío», y elige el «Nombre del remitente»
          que ve quien recibe y, si hace falta, «Responder a», la dirección a la
          que llegan las respuestas. En los proveedores que no son Gmail ni
          Microsoft 365 se pide además el «Servidor de salida (SMTP)» y su
          «Puerto».
        </p>
        <p>Al pie del panel:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Editar»</strong> cambia el
            propósito, el responsable, la lectura y la revisión.
          </li>
          <li>
            <strong className="font-medium">«Pausar»</strong> detiene la
            revisión; «Reactivar» la retoma.
          </li>
          <li>
            <strong className="font-medium">«Desvincular»</strong> hace que el
            agente deje de revisarlo. Las ejecuciones y los registros que
            salieron de él se conservan. Sus correos enviados y por enviar los
            ven, desde entonces, solo quienes administran la agencia.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="correo-principal" title="Correo principal de">
        <p>
          En un correo con el envío permitido, el bloque «Correo principal de»
          dice qué personas lo usan como correo principal, o «No es el correo
          principal de ninguna persona». El agente redacta desde el correo
          principal de quien le pide un correo sin indicar otro, y «Nuevo
          correo» lo trae elegido en «Desde».
        </p>
        <Steps>
          <Step title="Haz clic en «Cambiar personas»">
            <p>
              En el bloque «Correo principal de». Lo ve quien tiene el permiso
              «Vincular correos y decidir quién los lee».
            </p>
          </Step>
          <Step title="Enciende a las personas">
            <p>
              La lista trae a quienes consultan ese correo, con un interruptor
              cada una. Cada persona tiene un solo correo principal: marcarlo
              aquí reemplaza el que tuviera.
            </p>
          </Step>
          <Step title="Haz clic en «Guardar cambios»">
            <p>Aparece «Correo principal actualizado».</p>
          </Step>
        </Steps>
        <Screenshot
          id="correos/correo-principal"
          caption="La ventana «Correo principal de»: un interruptor por cada persona que consulta el correo."
        />
        <p>
          Cada persona también elige el suyo en «Tu perfil» (
          <ArticleLink to="configuracion/tu-cuenta" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
