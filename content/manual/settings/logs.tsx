import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-guarda", title: "Qué guarda la bitácora" },
  { id: "un-movimiento", title: "Cómo se lee un movimiento" },
  { id: "el-agente", title: "Lo que hizo el agente" },
  { id: "filtrar", title: "Filtrar la bitácora" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-guarda" title="Qué guarda la bitácora">
        <p>
          Configuración → Equipo → «Bitácora» es el registro de quién creó,
          cambió o eliminó cada cosa de la agencia, y cuándo. La ve quien tiene
          el permiso «Ver la bitácora». Lo más reciente va primero; al final de
          la lista se cargan los movimientos anteriores.
        </p>
        <Screenshot
          id="configuracion/bitacora"
          caption="La bitácora de Altavista Seguros: cada movimiento con su autor, la fecha y la hora y su módulo; la edición de una póliza, desplegada, dice «Valor asegurado» antes y después."
        />
        <p>
          La ficha de un cliente o de una póliza tiene además su pestaña
          «Actividad», con los movimientos de ese registro.
        </p>
      </ArticleSection>

      <ArticleSection id="un-movimiento" title="Cómo se lee un movimiento">
        <p>
          Cada fila dice en una frase lo que se hizo («Editó la póliza»,
          «Confirmó la póliza propuesta por el agente») y, debajo, quién lo
          hizo, la fecha y la hora exactas con el tiempo que ha pasado, y el
          módulo.
        </p>
        <p>
          Lo que pasó en un correo vinculado que no consultas se enseña como
          «Actividad en un correo que no consultas»: dice quién lo hizo y
          cuándo, sin el asunto ni los destinatarios.
        </p>
        <ManualTable
          head={["En la fila", "Qué significa"]}
          rows={[
            [
              "El icono de la izquierda",
              "El tipo de movimiento: creación, cambio, eliminación (en rojo) o información.",
            ],
            [
              "«1 dato cambiado», «3 datos cambiados»",
              "La edición de un cliente o de una póliza. Al hacer clic se despliega cada dato con lo que decía y lo que dice ahora: «Valor asegurado: $118.000.000 → $112.500.000».",
            ],
            [
              "El módulo (Pólizas, Tareas, Agencia…)",
              "Dónde está lo que se tocó.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="el-agente" title="Lo que hizo el agente">
        <p>
          Lo que hizo el agente lleva la marca «Agente» junto al autor. Si lo
          hizo para alguien, la fila dice por quién:
        </p>
        <ManualTable
          head={["La fila dice", "Qué significa"]}
          rows={[
            [
              "«a petición de …»",
              "El agente trabajaba en una tarea que esa persona le delegó.",
            ],
            [
              "«con el asistente de …»",
              "Lo hizo el asistente propio de esa persona, conectado a Nexus.",
            ],
            [
              "«con la conexión que autorizó …»",
              "Lo hizo el agente de la agencia sin una tarea delegada; lo respalda quien autorizó su conexión.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="filtrar" title="Filtrar la bitácora">
        <p>
          «Lo hizo el agente» deja solo los movimientos del agente. «Filtro»
          añade más filtros: «Autor», «A petición de», «Módulo», «Acción» y
          «Fecha». A la derecha, el número de movimientos que quedan. El módulo
          «Carpetas de origen» reúne lo que se registra, se confirma o se retira
          en Documentos → Carpetas de origen.
        </p>
        <Callout type="tip">
          <p>
            Para saber quién cambió una póliza, filtra por el módulo «Pólizas» y
            la acción «Cambio», o abre la pestaña «Actividad» de la póliza.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
