import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "por-enviar", title: "Lo que llega a «Por enviar»" },
  { id: "mios-y-del-equipo", title: "Míos y del equipo" },
  { id: "leer", title: "Leer el correo" },
  { id: "corregir", title: "Corregirlo" },
  { id: "enviar-o-descartar", title: "Enviarlo o descartarlo" },
  { id: "si-no-sale", title: "Si no se puede enviar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="por-enviar" title="Lo que llega a «Por enviar»">
        <p>
          El agente no envía correos: los redacta. Cada correo que redacta queda
          en «Correos → Por enviar» hasta que una persona lo revisa y lo envía o
          lo descarta. Ahí llegan también los que una persona escribió con
          «Nuevo correo» y guardó sin enviar.
        </p>
        <p>
          La lista está a la izquierda, del más reciente al más antiguo. Cada
          fila dice a quién va, el asunto, el principio del mensaje, desde qué
          correo sale («Desde operaciones@altavistaseguros.co») y su estado, con
          el cliente o la póliza si tiene uno; a la izquierda, el icono del
          agente o la foto de la persona que lo escribió. El correo elegido se
          lee a la derecha. Con la ventana estrecha, la lista ocupa todo el
          ancho y el correo se abre en un panel lateral.
        </p>
        <Screenshot
          id="correos/por-enviar"
          caption="«Correos → Por enviar» en «Del equipo», como lo ve quien administra: los correos agrupados por responsable, cada uno con su «Desde», y a la derecha el elegido, con «Responsable:», «Por qué lo propone el agente», los destinatarios y el mensaje como llega."
        />
        <p>
          Para ver «Correos» hace falta el permiso «Ver el agente». Para
          corregir y enviar, el permiso «Enviar los correos que redacta el
          agente». Sin él, el correo se lee entero y abajo aparece «Puedes
          verlo, pero no enviarlo: hace falta el permiso de enviar correos de la
          agencia».
        </p>
        <Callout type="note">
          <p>
            Un correo sale de un correo vinculado. Si no tienes acceso a ese
            correo vinculado, sus correos por enviar no aparecen en tu lista (
            <ArticleLink to="correos/vincular-un-correo">
              Vincular un correo
            </ArticleLink>
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="mios-y-del-equipo" title="Míos y del equipo">
        <p>
          Cada correo por enviar tiene un responsable: el responsable del correo
          vinculado del que sale. Si cambia el responsable de ese correo
          vinculado, sus correos pasan a la nueva persona.
        </p>
        <p>
          Sobre la lista, «Míos» enseña los correos de los correos vinculados
          que tienes a cargo, y «Del equipo», todos los que puedes ver. Cada
          pestaña lleva su cifra («Míos · 3», «Del equipo · 12»). La lista abre
          siempre en «Míos», también para quien administra. «Del equipo» lo ve
          quien administra la agencia o tiene acceso a algún correo vinculado
          que no es suyo; los demás ven solo los suyos, sin pestañas.
        </p>
        <ManualTable
          head={["En «Del equipo»", "Qué enseña"]}
          rows={[
            [
              "Los grupos",
              "Un grupo por responsable, con su foto, su nombre y cuántos correos tiene. Primero «Sin responsable», en ámbar; luego el tuyo, con «(tú)»; luego los demás por nombre. Un clic en la cabecera pliega el grupo.",
            ],
            [
              "«Responsable»",
              "Filtra por una persona o por «Sin responsable».",
            ],
            [
              "«Correo de salida»",
              "Filtra por el correo vinculado del que sale. Aparece si hay más de uno; en «Míos», solo los que tienes a cargo.",
            ],
          ]}
        />
        <p>
          Si un filtro no deja ningún correo, la lista dice «Ningún correo
          cumple estos filtros». Si no tienes correos propios, «Míos» dice «No
          tienes correos por enviar» y, si el equipo tiene alguno, cuántos hay
          en «Del equipo».
        </p>
        <p>
          La marca de «Por enviar» en el menú cuenta solo tus correos. A quien
          administra y no tiene correos propios por enviar le muestra, en gris,
          los que están sin responsable. El aviso de un correo nuevo por enviar
          («… redactó un correo por enviar») llega al responsable y a quien le
          pidió el correo al agente; solo si ninguno de los dos puede enviarlo,
          llega a todas las personas que pueden.
        </p>
        <Callout type="note">
          <p>
            Un correo sin responsable sale de un correo vinculado que no tiene
            una persona a cargo. El responsable se asigna en el panel de ese
            correo, en «Correos → Correos vinculados» (
            <ArticleLink to="correos/vincular-un-correo" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="leer" title="Leer el correo">
        <Video id="correos/revisar-y-enviar" />
        <p>
          Arriba, el asunto y desde qué correo sale («Desde Altavista Seguros ·
          Operaciones &lt;operaciones@altavistaseguros.co&gt;»). Debajo, el
          estado y quién lo redactó y cuándo: «Lo redactó el agente el…», o el
          nombre de la persona. Si alguien lo cambió, se añade «lo corrigió» con
          su nombre. Debajo, el responsable: «Responsable: Laura Valentina Ortiz
          Peña (tú), responsable de operaciones@altavistaseguros.co». Si el
          correo vinculado no tiene responsable, dice «Sin responsable: el
          correo del que sale no tiene una persona a cargo. Se asigna en Correos
          → Correos vinculados.».
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «Por qué lo propone el agente»
            </strong>{" "}
            es la razón que dejó el agente al redactarlo. En un correo que
            escribió una persona, el recuadro se llama «Para qué es».
          </li>
          <li>
            <strong className="font-medium">«Conversación»</strong> aparece si
            el correo contesta otro: enseña, con su cifra, los correos de esa
            conversación, y la respuesta se envía en ella (
            <ArticleLink to="correos/conversacion-de-un-correo" />
            ). Si el destinatario no es quien escribió el original, Nexus lo
            advierte bajo «Para»: «Este correo no va a quien escribió el
            original (…). Comprueba que el destinatario sea el correcto.».
          </li>
          <li>
            <strong className="font-medium">«Mensaje»</strong> enseña el correo
            como llega: con el logo, la firma y el pie de la agencia.
          </li>
          <li>
            <strong className="font-medium">«Adjuntos»</strong> lista los
            documentos que lleva, o «Este correo no lleva adjuntos».
          </li>
        </ul>
        <p>
          Si a la conversación llegó un correo después de redactar la respuesta,
          un aviso en ámbar lo dice: «Llegó un correo nuevo a esta
          conversación», y el correo nuevo lleva la marca «Llegó después del
          borrador». Si la respuesta la redactó el agente, nadie la ha cambiado
          y tienes el permiso «Crear tareas», el aviso ofrece «Pedir al agente»:
          el agente la actualiza con lo nuevo en el mismo correo por enviar.
        </p>
        {/* CAPTURA correos/por-enviar-respuesta: Correos → Por enviar con una respuesta del agente abierta, la sección «Conversación» con tres correos y el aviso ámbar «Llegó un correo nuevo a esta conversación» con «Pedir al agente» | Una respuesta por enviar: la conversación a la que contesta, el correo que llegó después del borrador y «Pedir al agente». */}
      </ArticleSection>

      <ArticleSection id="corregir" title="Corregirlo">
        <p>
          El correo se abre para leerlo. Con «Editar» pasa a formulario: «Para»,
          «Con copia», «Asunto», el mensaje y los adjuntos. «Añadir copia
          oculta» abre el campo «Copia oculta», cuyas direcciones no ve nadie
          más.
        </p>
        <Screenshot
          id="correos/por-enviar-editar"
          caption="El correo por enviar después de «Editar»: arriba, «Responsable:»; los campos se pueden cambiar y el mensaje tiene las pestañas «Editar» y «Vista previa»."
        />
        <p>
          La pestaña «Vista previa» enseña cómo quedará con lo que acabas de
          escribir. Cuando hay cambios aparece «Guardar cambios», que los guarda
          sin enviar; «Cancelar» descarta lo escrito y vuelve a lo guardado.
          Cómo se escribe el mensaje y qué formato admite está en{" "}
          <ArticleLink to="correos/escribir-un-correo" />.
        </p>
        <p>
          Si el asunto o el mensaje tienen un dato entre llaves que Nexus no
          pudo completar, aparece «Faltan datos del modelo: …. Escríbelos en el
          correo antes de enviarlo.», y «Enviar» no se activa hasta
          reemplazarlos.
        </p>
      </ArticleSection>

      <ArticleSection id="enviar-o-descartar" title="Enviarlo o descartarlo">
        <Steps>
          <Step title="Pruébalo, si quieres">
            <p>
              «Enviarme una prueba» manda el correo a tu propia dirección, tal
              como saldría, para verlo en tu bandeja. La prueba sale sin los
              adjuntos.
            </p>
          </Step>
          <Step title="Haz clic en «Enviar»">
            <p>
              Si cambiaste algo sin guardar, el botón dice «Guardar y enviar».
              En una respuesta, Nexus vuelve a leer la conversación antes de
              seguir, y el botón dice «Comprobando…». Si llegó un correo nuevo,
              pregunta con «Llegó un correo nuevo»: «Enviar de todos modos» lo
              envía igual.
            </p>
          </Step>
          <Step title="Revisa la confirmación y haz clic en «Enviar correo»">
            <p>
              La confirmación dice «Se envía ahora. Un correo enviado no se
              puede deshacer.» y, debajo, una línea por dato: «Desde», «Para»,
              «Copia», «Copia oculta» y «Adjuntos», con cada dirección y cada
              archivo en su línea, o «Sin adjuntos».
            </p>
            <Screenshot
              id="correos/confirmar-envio"
              caption="La confirmación de envío de un correo de otro responsable: desde qué correo sale, a quién va, la copia y los dos adjuntos, uno por línea."
            />
            <p>
              Sale lo que hay en la revisión en ese momento. Aparece «Correo
              enviado» y el correo pasa a «Enviados», con tu nombre y la hora.
            </p>
          </Step>
        </Steps>
        <p>
          Puedes enviar un correo de otro responsable, por ejemplo para cubrir
          una ausencia. La confirmación lo advierte: «Este correo es de …,
          responsable de …. Queda como enviado por ti. Un correo enviado no se
          puede deshacer.».
        </p>
        <p>
          Si el correo salió de una tarea en la que se le pidió la respuesta al
          agente, la tarea se cierra al enviarlo, con la nota «Se envió la
          respuesta «…».» (<ArticleLink to="tareas/cerrar-una-tarea" />
          ).
        </p>
        <p>
          Si el correo no debe salir, «Descartar» lo retira. La confirmación
          dice «No se envía. Queda en la lista como descartado.» (si lo redactó
          el agente, añade «y el agente lo verá así») y ofrece «Motivo
          (opcional)», hasta 300 caracteres: por ejemplo, «el cliente ya
          respondió por teléfono». El agente ve el motivo. El correo pasa a
          «Descartados» (
          <ArticleLink to="correos/enviados-y-descartados" />
          ).
        </p>
        <Screenshot
          id="correos/descartar-motivo"
          caption="La confirmación de descarte, con el «Motivo (opcional)» escrito."
        />
        <Callout type="warning">
          <p>
            Un correo enviado sale de la agencia y no se deshace. Revisa los
            destinatarios y los adjuntos en la confirmación antes de aceptarla.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="si-no-sale" title="Si no se puede enviar">
        <p>
          Cuando algo impide el envío, un aviso en ámbar lo dice sobre los
          botones y «Enviar» queda apagado:
        </p>
        <ManualTable
          head={["Aviso", "Qué hacer"]}
          rows={[
            [
              "«El correo desde el que salía ya no está vinculado.»",
              "El correo vinculado se desvinculó. Escribe el correo de nuevo desde otro con «Nuevo correo».",
            ],
            [
              "«… ya no tiene permitido enviar.»",
              "Alguien apagó el envío de ese correo vinculado. Se vuelve a permitir en su panel, en «Correos → Correos vinculados».",
            ],
            [
              "«Este computador no tiene la clave de …»",
              "La clave de ese correo está guardada en otro computador. Envíalo desde ese computador, o pasa la clave a la nube.",
            ],
            [
              "«Un adjunto ya no está entre los documentos de la agencia.»",
              "Se eliminó el documento. Quítalo del correo.",
            ],
            [
              "«Un correo lleva hasta 10 adjuntos.»",
              "Quita alguno. Lo mismo si los adjuntos pesan más de lo que cabe en un correo.",
            ],
          ]}
        />
        <p>
          Si el servidor de correo rechaza el envío, el correo queda en «Por
          enviar» con el estado «No se envió», un aviso en rojo con la causa y
          el botón «Reintentar el envío»:
        </p>
        <ManualTable
          head={["Causa", "Lo que dice el aviso"]}
          rows={[
            [
              "La clave",
              "«El servidor de correo rechazó la clave. Pasa al cambiar la contraseña de la cuenta: registra una clave nueva en Correos → Correos vinculados.»",
            ],
            [
              "La conexión",
              "«No se pudo conectar con el servidor de correo. Revisa la conexión a internet y vuelve a intentarlo.»",
            ],
            [
              "Los destinatarios",
              "«El servidor de correo no aceptó el mensaje. Revisa las direcciones de los destinatarios.»",
            ],
            [
              "Un adjunto",
              "«No se pudo leer uno de los adjuntos, o ya no es el archivo que Nexus registró. Comprueba que el documento sigue entre los de la agencia.»",
            ],
            [
              "El servidor de salida",
              "«Falta el servidor de salida de ese correo. Complétalo en el panel de ese correo, en «Envío».»",
            ],
          ]}
        />
        <p>
          Si el envío se interrumpe antes de confirmarse, el aviso pide revisar
          en la carpeta de enviados de ese correo si alcanzó a salir antes de
          reintentar.
        </p>
      </ArticleSection>
    </>
  );
}
