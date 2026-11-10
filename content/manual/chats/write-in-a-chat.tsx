import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "escribir", title: "Escribir un mensaje" },
  { id: "menciones-y-registros", title: "Menciones y registros" },
  { id: "archivos", title: "Archivos" },
  { id: "acciones", title: "Lo que se hace con un mensaje" },
  { id: "programar", title: "Programar un envío" },
  { id: "buscar", title: "Buscar en los chats" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="escribir" title="Escribir un mensaje">
        <p>
          El campo de escribir está al pie del chat: «Escribe a» la persona, o
          «Escribe en» el grupo. Enter envía; Mayús+Enter pasa a otra línea. Un
          mensaje admite hasta 4.000 caracteres. Bajo el campo están «Adjuntar
          archivos», «Mencionar a una persona», «Traer un registro», «Negrita»,
          «Cursiva», «Lista» y «Enlace».
        </p>
        <p>
          En el celular, el campo ocupa una fila con el botón «+» a la izquierda
          y el de enviar, solo con su icono, a la derecha. «+» («Adjuntar y dar
          formato») abre debajo la fila de herramientas, con «Programar envío»
          al final.
        </p>
        <p>
          Lo que dejas escrito sin enviar queda como borrador del chat: la lista
          lo enseña con «Borrador:» delante, y al volver al chat sigue en el
          campo.
        </p>
        <p>
          Bajo tu último mensaje, «visto» dice que lo leyeron todos; en un
          grupo, «visto por» y cuántos. Haz clic para ver «Lo leyeron», con la
          hora de cada persona.
        </p>
      </ArticleSection>

      <ArticleSection id="menciones-y-registros" title="Menciones y registros">
        <p>
          Escribe <code className="font-mono text-sm">@</code> (o haz clic en
          «Mencionar a una persona») y elige a alguien del chat: le llega un
          aviso, y el mensaje sale en su filtro «Menciones». En un grupo con el
          agente, mencionarlo le deja una tarea (
          <ArticleLink to="chats/el-agente-en-un-chat" />
          ).
        </p>
        <p>
          Escribe <code className="font-mono text-sm">#</code> (o «Traer un
          registro») para traer al mensaje un cliente, una póliza, una tarea o
          una cotización, hasta 5 por mensaje. El registro sale como una tarjeta
          que lleva a su ficha. El contexto del chat los reúne en «Registros en
          el chat», y la ficha del cliente o de la póliza enseña en
          «Conversaciones» los chats donde se habló de él.
        </p>
        <p>
          Desde la ficha de un cliente o de una póliza, «Compartir en un chat»
          lo manda a un chat con un mensaje opcional. Cada quien lo ve con lo
          que puede ver.
        </p>
      </ArticleSection>

      <ArticleSection id="archivos" title="Archivos">
        <p>
          Adjunta con «Adjuntar archivos», arrastrándolos al chat o pegándolos
          en el campo: hasta 10 por mensaje y 25 MB cada uno. Los archivos del
          chat cuentan en el almacenamiento del plan.
        </p>
        <p>
          Sobre un archivo recibido, «Descargar» lo guarda en tu computador y
          «Guardar como documento» lo pasa a los documentos del cliente o de la
          póliza que elijas; sin ninguno, queda en los documentos de la agencia.
          El documento guardado no se borra aunque el chat borre sus mensajes
          viejos.
        </p>
      </ArticleSection>

      <ArticleSection id="acciones" title="Lo que se hace con un mensaje">
        <p>
          Al pasar el cursor sobre un mensaje aparecen «Responder», «Reaccionar»
          y «Más acciones». En el celular, aparecen al tocar el mensaje, encima
          de él. Las reacciones son «De acuerdo», «Hecho», «Lo estoy viendo»,
          «Gracias» y «Me alegra».
        </p>
        <ManualTable
          head={["En «Más acciones»", "Qué hace"]}
          rows={[
            [
              "Editar",
              "Solo en tus mensajes. Enter guarda; Esc cancela. El mensaje queda «editado» y la versión anterior no se guarda. Con el campo vacío, la flecha ↑ edita tu último mensaje.",
            ],
            ["Reenviar", "Lo manda a otro de tus chats."],
            [
              "Copiar enlace",
              "Copia un enlace que abre el chat en ese mensaje.",
            ],
            [
              "Marcar como no leído",
              "En los mensajes de otros: el chat vuelve a contar como no leído desde ahí.",
            ],
            [
              "Recordármelo",
              "«Hoy», «Mañana», «El lunes» o «En una semana»: crea una tarea a tu cargo, «Retomar:» y el mensaje, con esa fecha límite.",
            ],
            [
              "Crear tarea",
              <>
                Abre «Nueva tarea» con el mensaje como descripción (
                <ArticleLink to="tareas/crear-una-tarea" />
                ). El mensaje enlaza después «Ver la tarea».
              </>,
            ],
            [
              "Fijar en el chat",
              "Lo deja en «Mensajes fijados», arriba del chat y en su contexto. Hasta 20 por chat.",
            ],
            [
              "Eliminar",
              "Solo en tus mensajes. Queda «Mensaje eliminado» en su lugar para todos, sin su texto ni sus archivos. No se puede deshacer.",
            ],
          ]}
        />
        <p>«Recordármelo» y «Crear tarea» piden el permiso «Crear tareas».</p>
        <Screenshot
          id="chats/menu-mensaje"
          caption="«Más acciones» de un mensaje recibido: «Reenviar», «Copiar enlace», «Marcar como no leído», «Recordármelo», «Crear tarea» y «Fijar en el chat»."
        />
      </ArticleSection>

      <ArticleSection id="programar" title="Programar un envío">
        <p>
          Un mensaje programado sale a la hora elegida; hasta entonces solo tú
          lo ves y puedes enviarlo antes o cancelarlo. Escribe el mensaje, haz
          clic en la flecha junto a «Enviar» («Más formas de enviar») y elige
          «Programar envío»; en el celular, se elige entre las herramientas de
          «+». Las opciones son «Dentro de 1 hora», «Mañana a las 8:00», «El
          lunes a las 8:00» u «Otro momento», con su «Día» y su «Hora».
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Sale entre un minuto y 60 días después. Puedes tener hasta 20
            esperando en un chat.
          </li>
          <li>
            Lleva texto, menciones y registros. Los archivos y la mención al
            agente van en un mensaje enviado al momento.
          </li>
          <li>
            Mientras espera, sale encima del campo de escribir, con «Enviar
            ahora» y «Cancelar».
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="buscar" title="Buscar en los chats">
        <p>
          «Buscar en los chats», sobre la lista, busca en todos tus chats:
          palabras, nombres, números de póliza. La última palabra puede ir a
          medias. Los filtros son «Chat», «De», «Fecha», «Con archivos», «Con
          registros» y «Me mencionan». La lupa de la cabecera, «Buscar en este
          chat», busca solo en el abierto.
        </p>
        <p>La búsqueda solo recorre los chats donde participas.</p>
      </ArticleSection>
    </>
  );
}
