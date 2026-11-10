import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-bandeja", title: "La bandeja" },
  { id: "apartados", title: "Los apartados" },
  { id: "abrir-y-posponer", title: "Abrir, marcar leída y posponer" },
  { id: "que-te-avisa", title: "Qué te avisa y dónde" },
  { id: "cuando", title: "Cuándo, y «No molestar»" },
  { id: "tus-equipos", title: "Este equipo y tus equipos" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-bandeja" title="La bandeja">
        <p>
          Lo que te toca a ti llega a tu bandeja de notificaciones: una tarea
          que te asignan, la que el agente te devuelve, un mensaje en una tarea
          tuya, el aviso de una fecha, una duda del agente, una propuesta o un
          correo por enviar a tu cargo, un mensaje o una mención en un chat, o
          el código que pide el portal de una aseguradora. Lo que haces tú mismo
          no te llega.
        </p>
        <p>
          La bandeja se abre con la campana, junto al nombre de la agencia,
          arriba del menú. La cifra de la campana es lo que tienes por atender
          sin leer. La bandeja guarda lo que te llegó en los últimos 90 días, de
          lo más reciente a lo más antiguo, agrupado por día.
        </p>
        <Screenshot
          id="primeros-pasos/bandeja"
          caption="La bandeja «Notificaciones» en el apartado «Todas», con lo del día de hoy: avisos de Nexus sobre tareas, mensajes de un grupo y avisos del agente. Las que siguen sin leer llevan un punto azul junto a la hora."
        />
      </ArticleSection>

      <ArticleSection id="apartados" title="Los apartados">
        <ManualTable
          head={["Apartado", "Qué reúne"]}
          rows={[
            [
              "Por atender",
              "Las tareas que te asignan, lo que el agente te devuelve, lo que espera tu decisión y lo que te escriben.",
            ],
            [
              "Por decidir",
              "Las dudas del agente, las propuestas por confirmar, los correos por enviar y las solicitudes de accesos.",
            ],
            ["Menciones", "Cada vez que alguien te nombra con «@» en un chat."],
            ["Todas", "Todo lo que te llegó en los últimos 90 días."],
            [
              "Pospuestas",
              "Lo que pospusiste. Vuelve sin leer a la hora que elegiste, y te avisa.",
            ],
          ]}
        />
        <p>
          Lo que llega de un mismo registro mientras no lo lees se junta en una
          sola notificación, por ejemplo «te escribió 2 mensajes».
        </p>
      </ArticleSection>

      <ArticleSection
        id="abrir-y-posponer"
        title="Abrir, marcar leída y posponer"
      >
        <p>
          Al hacer clic en una notificación, queda leída y se abre lo que
          nombra: una tarea, en su panel sobre la pantalla en que estás; un
          mensaje en una tarea, en la página de la tarea, con su conversación;
          un mensaje de un chat, en su chat; una duda, una propuesta o un correo
          por enviar, en su panel de «Por resolver», en Mi día; lo de la bóveda,
          en Accesos.
        </p>
        <p>
          El botón de acciones (los tres puntos) de una notificación sin leer
          ofrece «Marcar leída» y, bajo «Posponer», «En 1 hora», «Al abrir» (la
          próxima vez que empieza el horario de atención de la agencia) y «La
          próxima semana» (el lunes, al empezar ese horario). Una pospuesta se
          trae antes con «Traer ahora». «Marcar todo leído», arriba de la
          bandeja, deja leídas todas.
        </p>
      </ArticleSection>

      <ArticleSection id="que-te-avisa" title="Qué te avisa y dónde">
        <p>
          Además de llegar a la bandeja, una notificación puede avisarte con un
          aviso del sistema, aunque Nexus esté cerrado. Qué te avisa se elige en
          Configuración → Notificaciones, en «Qué te avisa y dónde»: una fila
          por categoría y un interruptor por canal.
        </p>
        <ManualTable
          head={["Categoría", "Qué incluye"]}
          rows={[
            [
              "Tareas",
              "Las que te asignan, las que el agente te devuelve, las que salen de espera y los avisos de fechas.",
            ],
            [
              "Por decidir",
              "Dudas del agente, propuestas por confirmar, correos por enviar y solicitudes de accesos.",
            ],
            [
              "Conversaciones",
              "Mensajes y menciones de los chats, y lo que se escribe en tus tareas.",
            ],
            ["Avisos", "Hallazgos del agente y accesos que te conceden."],
          ]}
        />
        <p>
          Los canales son «Computador» (Nexus instalado en Windows), «Celular»
          (Nexus en el celular) y «Navegador» (Nexus en un navegador). Lo que
          eliges vale en todos tus equipos. Haz clic en el nombre de una
          categoría para elegir tipo por tipo.
        </p>
        <Screenshot
          id="primeros-pasos/que-te-avisa"
          caption="«Qué te avisa y dónde», en Configuración → Notificaciones: las categorías «Tareas», «Por decidir», «Conversaciones» y «Avisos», con un interruptor para «Computador», «Celular» y «Navegador»."
        />
        <Callout type="note">
          <p>
            Lo urgente avisa siempre, en todos los canales, y no se puede
            apagar. Es urgente, por ejemplo, «Códigos de los portales»: el
            portal de una aseguradora pide el código de la app autenticadora
            para seguir. El aviso dice el nombre del portal seguido de «pide el
            código de la app autenticadora», y el código se escribe en la
            ventana que abre Nexus, con «Enviar código». La bandeja tampoco se
            apaga: todo lo que te toca llega a ella.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="cuando" title="Cuándo, y «No molestar»">
        <p>
          Lo que te escribe o te asigna una persona avisa al instante, a
          cualquier hora. Lo que crean Nexus y el agente avisa en el horario de
          atención de la agencia; lo que llegó fuera de él sale al abrir.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«No molestar»</strong> pausa los
            avisos en todos tus equipos. Haz clic en «Pausar» y elige «Durante 1
            hora», «Hasta mañana» o «Hasta la próxima semana». Mientras tanto
            solo avisa lo urgente; lo demás queda en la bandeja y sale en un
            aviso al terminar. «Reanudar» la quita antes.
          </li>
          <li>
            <strong className="font-medium">
              «En la pantalla bloqueada del celular»
            </strong>{" "}
            elige qué dice el aviso del celular: «Todo el contenido» o «Solo el
            tipo». Con «Solo el tipo» no aparecen nombres de clientes ni de
            personas.
          </li>
          <li>
            <strong className="font-medium">
              «El celular mientras usas el computador»
            </strong>
            : con «Si no lo leo ahí», si estás usando Nexus en el computador o
            el navegador, el celular espera dos minutos y avisa solo si no lo
            leíste. Con «Siempre, al instante», avisa enseguida.
          </li>
        </ul>
        <Screenshot
          id="primeros-pasos/cuando-te-avisa"
          caption="El bloque «Cuándo»: «No molestar» con el botón «Pausar», «En la pantalla bloqueada del celular» y «El celular mientras usas el computador»."
        />
      </ArticleSection>

      <ArticleSection id="tus-equipos" title="Este equipo y tus equipos">
        <p>
          El primer bloque de Configuración → Notificaciones es el del equipo
          desde el que entras («Este computador» en Windows, «Este dispositivo»
          en el navegador y el celular). Ahí se activa «Avisar en este
          computador» o «Avisar en este dispositivo» y se manda un «Aviso de
          prueba» para comprobar que llega. Se elige en cada dispositivo. Si el
          dispositivo no avisa, la bandeja lo dice arriba, por ejemplo «Activa
          los avisos en este dispositivo».
        </p>
        <p>
          «Tus equipos», al final, lista dónde tienes Nexus abierto y si cada
          uno recibe avisos. Un equipo aparece al abrir Nexus en él, y se retira
          con «Quitar».
        </p>
        <p>
          En el iPhone, los avisos llegan solo con Nexus instalado en la
          pantalla de inicio:{" "}
          <ArticleLink to="primeros-pasos/nexus-en-el-celular" />.
        </p>
      </ArticleSection>
    </>
  );
}
