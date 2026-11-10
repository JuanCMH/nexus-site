import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es Mi día" },
  { id: "la-cabecera", title: "El saludo y el progreso del día" },
  { id: "las-cifras", title: "Las cuatro cifras" },
  { id: "lo-siguiente", title: "Lo siguiente" },
  { id: "por-resolver", title: "Por resolver" },
  { id: "semana-y-espera", title: "Tu semana y lo que espera a otros" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es Mi día">
        <Video id="inicio/mi-dia" />
        <p>
          «Mi día» es la primera vista del Inicio: tu trabajo, el de quien
          entra. La tiene todo miembro de la agencia, y nada de lo que enseña es
          de otra persona. Quien además puede ver el tablero de la agencia tiene
          las dos pestañas, «Mi día» y «Agencia», y el Inicio abre en «Agencia»:{" "}
          <ArticleLink to="inicio/tablero-de-la-agencia" />. En el celular, las
          dos van en la cabecera, como un selector.
        </p>
        <Screenshot
          id="inicio/mi-dia"
          caption="«Mi día» de Carolina Restrepo Vélez: la foto con la fecha y el saludo, la línea de lo que queda, el progreso del día, las cuatro cifras y, debajo, «Lo siguiente» y «Por resolver»."
        />
        <p>
          Lo que se abre desde Mi día (una lista, una tarea, una duda, un
          correo) se abre en un panel a un lado, sin salir de la pantalla.
        </p>
      </ArticleSection>

      <ArticleSection id="la-cabecera" title="El saludo y el progreso del día">
        <p>
          Arriba van tu foto, la fecha y el saludo de la hora («Buenos días»,
          «Buenas tardes» o «Buenas noches») con tu nombre. Debajo, una línea
          con lo que te queda, por ejemplo «Tienes 1 tarea para hoy y 8 por
          resolver.». Si no tienes foto de perfil, la línea termina con «Pon tu
          foto».
        </p>
        <p>
          A la derecha, el progreso del día: cuántas tareas cerraste de las del
          día («1 de 2») y una barra en tramos, «Cerradas», «Para hoy» y
          «Vencidas», cada uno con su número. Cuando no queda nada para hoy ni
          vencido, dice «Hoy quedó al día».
        </p>
      </ArticleSection>

      <ArticleSection id="las-cifras" title="Las cuatro cifras">
        <ManualTable
          head={["Cifra", "Qué cuenta", "Al hacer clic"]}
          rows={[
            [
              "Vencidas",
              "Tus tareas abiertas cuya fecha límite ya pasó, también las nuevas y las que están en espera.",
              "Abre su lista.",
            ],
            [
              "Para hoy",
              "Tus tareas que vencen hoy y las que estaban en espera y ya llegaron a su fecha de seguimiento.",
              "Abre su lista.",
            ],
            [
              "Por resolver",
              "Las dudas del agente, lo que propuso a tu cargo y tus correos por enviar.",
              "Lleva a la tarjeta «Por resolver».",
            ],
            [
              "Cerradas esta semana",
              "Las tareas que cerraste desde el lunes, y cuántas después de su fecha límite.",
              "Abre su lista.",
            ],
          ]}
        />
        <p>
          «Vencidas» va en verde cuando está en cero y en rojo cuando no; «Por
          resolver», en ámbar cuando algo espera tu decisión.
        </p>
      </ArticleSection>

      <ArticleSection id="lo-siguiente" title="Lo siguiente">
        <p>
          «Lo siguiente» son tus tareas abiertas, agrupadas por cuándo hay que
          mirarlas: «Nuevas», «Vencidas», «Hoy», «Esta semana», «Después», «Sin
          fecha» y «Por cerrar». Enseña hasta ocho; el resto está en Tareas, con
          «Ver todo mi trabajo». No incluye lo que delegaste al agente ni lo que
          está en espera: eso va en «En espera de otros».
        </p>
        <p>
          Haz clic en una tarea para abrirla en su panel. Si no tienes tareas
          abiertas, la tarjeta dice «No tienes tareas abiertas» y, si tu rol
          permite crear tareas, ofrece «Nueva tarea». Cómo se trabaja una tarea
          está en <ArticleLink to="tareas/trabajar-una-tarea" />.
        </p>
      </ArticleSection>

      <ArticleSection id="por-resolver" title="Por resolver">
        <p>
          «Por resolver» es lo que no avanza hasta que tú decidas: una fila por
          cosa, con su tipo («Duda», «Correo por enviar», «Contacto por
          confirmar» y los demás registros por confirmar), su título y desde
          cuándo espera, de lo más antiguo a lo más reciente.
        </p>
        <Screenshot
          id="inicio/por-resolver"
          caption="La tarjeta «Por resolver» con 8 cosas: una duda del agente, correos por enviar y un contacto por confirmar."
        />
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Las dudas y lo que el agente propuso aparecen si tu rol puede ver al
            agente. Los correos por enviar, si tu rol puede enviarlos, y solo
            los de los correos vinculados que tienes a cargo.
          </li>
          <li>
            Si administras la agencia o consultas correos vinculados de otras
            personas, una fila «N correos del equipo por enviar» cuenta los de
            ellas y lleva a Correos, en «Del equipo».
          </li>
          <li>
            Cada fila abre su panel aquí mismo: el de la duda, el del correo o
            el de la propuesta. Lo que resuelves sale de la lista. Una
            referencia o una plantilla abren su propia pantalla.
          </li>
          <li>
            Si tu rol puede resolver lo de otros, una fila «sin asignar» cuenta
            lo que nadie lleva y lleva a Agente, para tomarlo o repartirlo.
          </li>
        </ul>
        <p>
          Cuando nada espera tu decisión, la tarjeta dice «Nada espera tu
          decisión». Cómo se confirma lo que propone el agente:{" "}
          <ArticleLink to="agente/por-confirmar" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="semana-y-espera"
        title="Tu semana y lo que espera a otros"
      >
        <p>
          «Tu semana» enseña los siete días, de lunes a domingo, con un cuadro
          por tarea: gris si se cerró ese día, azul si está abierta y en su
          fecha, rojo si está vencida. Cada día dice cuántas tiene abiertas o
          cerradas, o «Libre». Haz clic en un día para ver sus tareas; las
          flechas pasan a la semana anterior o a la siguiente.
        </p>
        <Screenshot
          id="inicio/tu-semana"
          caption="«Tu semana» del 26 de octubre al 1 de noviembre: el día de hoy resaltado y los días con sus tareas cerradas y abiertas."
        />
        <p>
          «En espera de otros» reúne lo que dejaste en otras manos: «Con el
          agente», las tareas que le delegaste, y «Espera a un tercero», las que
          están en espera con su fecha de seguimiento. Lo que el agente te
          devuelve vuelve a «Lo siguiente» como nueva, y lo que espera vuelve en
          su fecha. Si no hay nada, dice «Nada está en espera».
        </p>
      </ArticleSection>
    </>
  );
}
