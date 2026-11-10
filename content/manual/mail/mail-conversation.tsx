import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde", title: "Dónde se abre" },
  { id: "leer", title: "Leer la conversación" },
  { id: "adjuntos", title: "Los adjuntos" },
  { id: "responder", title: "Responder o reenviar" },
  { id: "pedir-al-agente", title: "Pedirle la respuesta al agente" },
  { id: "correo-nuevo", title: "Si llega un correo nuevo antes de enviar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde" title="Dónde se abre">
        <p>
          Un cliente, una póliza, una tarea, una cotización o un contacto que
          salió de un correo dice su procedencia en una línea: «Se encontró en
          el correo …, remitente …» y la fecha. Al lado, «Ver la conversación»
          abre en un panel lateral todos los correos de esa conversación: los
          que llegaron y los que salieron.
        </p>
        <p>«Ver la conversación» aparece si se cumplen tres condiciones:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            El correo vinculado lo lee Nexus, con la clave en la nube (
            <ArticleLink to="correos/vincular-un-correo" />
            ).
          </li>
          <li>Tienes acceso a ese correo vinculado.</li>
          <li>
            Tienes el permiso «Ver el agente» o «Enviar los correos que redacta
            el agente».
          </li>
        </ul>
        <p>
          Una respuesta que espera en «Correos → Por enviar» enseña la misma
          conversación encima del mensaje (
          <ArticleLink to="correos/revisar-y-enviar" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="leer" title="Leer la conversación">
        <p>
          El panel lleva el asunto como título y, debajo, cuántos correos tiene
          y de qué correo vinculado se leyó («4 correos ·
          operaciones@altavistaseguros.co»). Mientras lee el buzón dice «Leyendo
          la conversación en el buzón…».
        </p>
        <p>
          Los correos van del más antiguo al más reciente. Cada fila cerrada
          dice quién escribió, la fecha y el principio del mensaje; un clic la
          abre y otro la cierra. Un correo abierto enseña a quiénes fue, su
          texto y sus adjuntos. El texto citado de correos anteriores va oculto:
          el botón bajo el mensaje lo muestra o lo esconde.
        </p>
        <ManualTable
          head={["Marca", "Qué significa"]}
          rows={[
            [
              "«Lo redactó el agente» o «Se escribió en Nexus»",
              "El correo salió desde Nexus. Si lo envió una persona, sigue «lo envió …».",
            ],
            ["«El agente lo leyó …»", "Cuándo lo leyó el agente."],
            [
              "«Unido por el asunto: puede no ser de esta conversación»",
              "Nexus lo unió a la conversación solo porque el asunto coincide. Compruébalo antes de contestar.",
            ],
          ]}
        />
        <p>
          Si la conversación es muy larga, el panel lo dice: «La conversación es
          más larga: aquí están los … correos más recientes.». Si ya hay una
          respuesta esperando envío, un aviso lo dice («Hay una respuesta de
          esta conversación esperando envío en Correos › Por enviar.») y
          «Revisarla» la abre.
        </p>
        {/* CAPTURA correos/conversacion: la ficha de un cliente con «Ver la conversación» pulsado; el panel lateral con cuatro correos, el último abierto con dos adjuntos, y al pie «Responder», «Responder a todos», «Reenviar» y «Pedir al agente» | La conversación de un correo: los correos del hilo, del más antiguo al más reciente, y las formas de contestar bajo el último. */}
      </ArticleSection>

      <ArticleSection id="adjuntos" title="Los adjuntos">
        <p>
          Cada adjunto dice su nombre y su tamaño. «Abrir» lo abre en una
          ventana nueva. «Guardar» lo guarda en Documentos, en el registro desde
          cuya ficha abriste la conversación o, si no hay registro, en
          «Información de la agencia → Correos enviados», y aparece «… quedó
          guardado en Documentos». «Guardar» requiere el permiso «Subir y editar
          documentos».
        </p>
      </ArticleSection>

      <ArticleSection id="responder" title="Responder o reenviar">
        <p>
          Bajo el último correo están «Responder», «Responder a todos» y
          «Reenviar». Contestan al último correo que llegó de fuera de la
          agencia. Para contestar otro, usa el menú de tres puntos de ese
          correo, con las mismas tres opciones.
        </p>
        <p>
          Cada una abre el panel de escribir con los destinatarios, el asunto y
          el correo vinculado puestos. Una respuesta sale en la misma
          conversación (
          <ArticleLink to="correos/escribir-un-correo" />
          ).
        </p>
        <Callout type="note">
          <p>
            Responder y reenviar requieren el permiso «Enviar los correos que
            redacta el agente» y que el correo vinculado tenga el envío
            permitido. Si no lo tiene, el panel dice «… no tiene permitido
            enviar: se permite en Correos › Correos vinculados.».
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="pedir-al-agente"
        title="Pedirle la respuesta al agente"
      >
        <p>
          «Pedir al agente», junto a los botones de responder, le encarga la
          respuesta al agente. Requiere el permiso «Crear tareas».
        </p>
        <Steps>
          <Step title="Haz clic en «Pedir al agente»">
            <p>Se abre el recuadro «Pedir respuesta al agente».</p>
          </Step>
          <Step title="Escribe qué debe decir">
            <p>
              Por ejemplo: «Confirma que el cliente acepta las condiciones y que
              enviamos la aceptación firmada el lunes». Sin texto, el encargo no
              se envía.
            </p>
          </Step>
          <Step title="Elige a quién responde">
            <p>
              «Responder a todos», que viene elegido, o «Solo a quien escribió».
              El recuadro recuerda: «Responde al correo de …. La revisas tú
              antes de que salga.».
            </p>
          </Step>
          <Step title="Haz clic en «Pedir respuesta»">
            <p>
              Aparece «El agente recibió el encargo. La respuesta quedará en
              Correos › Por enviar para que la revises.».
            </p>
          </Step>
        </Steps>
        {/* CAPTURA correos/pedir-respuesta: el panel de la conversación con el recuadro «Pedir respuesta al agente» abierto, la instrucción escrita y «Responder a todos» elegido | El encargo de la respuesta al agente: qué debe decir, a quién responde y «Pedir respuesta». */}
        <p>
          El encargo es una tarea delegada al agente, con el título «Responder a
          …» y tu instrucción como descripción (
          <ArticleLink to="tareas/trabajar-una-tarea" />
          ). El agente lee la conversación entera y deja la respuesta en
          «Correos → Por enviar». La tarea se cierra sola cuando una persona
          envía esa respuesta.
        </p>
      </ArticleSection>

      <ArticleSection
        id="correo-nuevo"
        title="Si llega un correo nuevo antes de enviar"
      >
        <p>
          Una respuesta por enviar compara la conversación con el momento en que
          se redactó. Si llegó otro correo después, la revisión lo avisa en
          ámbar («Llegó un correo nuevo a esta conversación») y marca ese correo
          con «Llegó después del borrador».
        </p>
        <p>
          Si la respuesta la redactó el agente y nadie la cambió, el aviso
          ofrece «Pedir al agente»: el agente la corrige con lo nuevo en el
          mismo correo por enviar. Al hacer clic en «Enviar», Nexus vuelve a
          leer la conversación; si llegó algo, pregunta con «Llegó un correo
          nuevo» antes de seguir, y «Enviar de todos modos» la envía igual.
        </p>
      </ArticleSection>
    </>
  );
}
