import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-una-ejecucion", title: "Qué es una ejecución" },
  { id: "la-lista", title: "La lista de ejecuciones" },
  { id: "abrir-una", title: "Abrir una ejecución" },
  { id: "fallos-recientes", title: "Fallos recientes" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-una-ejecucion" title="Qué es una ejecución">
        <p>
          Una ejecución es un trabajo del agente de principio a fin: leer los
          correos de un correo vinculado, atender las tareas que le delegaron,
          auditar las cerradas, registrar documentos o seguir un flujo de la
          agencia. Al terminar, el agente escribe su resumen.
        </p>
        <p>
          Agente › «Ejecuciones» la ve quien tiene el permiso «Conectar el
          agente y definir su horario». «Lo último que hizo», en Agente ›
          Resumen, enseña las más recientes y «Ver todas» lleva a la lista.
        </p>
      </ArticleSection>

      <ArticleSection id="la-lista" title="La lista de ejecuciones">
        <p>
          Van de la más reciente a la más antigua. Cada fila dice qué hizo
          («Lectura de correos · comercial@altavistaseguros.co», «Atención de
          tareas»), cuándo, cuánto duró, sus cifras y, si dejó dudas abiertas,
          cuántas. El selector de arriba filtra por estado:
        </p>
        <ManualTable
          head={["Estado", "Qué significa"]}
          rows={[
            ["En curso", "El agente está trabajando en ella."],
            ["Terminada", "El agente la cerró con todo hecho."],
            [
              "Incompleta",
              "El agente la cerró con algo sin hacer, y dice qué en el panel.",
            ],
            ["Con error", "Terminó con un error."],
            [
              "Abandonada",
              "El agente dejó de dar señales durante 30 minutos sin cerrarla.",
            ],
          ]}
        />
        <Screenshot
          id="agente/ejecuciones"
          caption="Agente › Ejecuciones: cada ejecución con su nombre, hace cuánto empezó, cuánto duró, sus cifras y su estado."
        />
      </ArticleSection>

      <ArticleSection id="abrir-una" title="Abrir una ejecución">
        <p>Haz clic en una ejecución. Su panel tiene:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Quién la inició, su estado, cuándo empezó y cuánto duró.</li>
          <li>
            Sus cifras: «Mensajes revisados», «Pólizas propuestas», «Clientes
            propuestos», «Documentos guardados» y «Mensajes omitidos».
          </li>
          <li>
            Cuántos criterios le entregó Nexus para ese trabajo y cuántos dijo
            el agente que aplicó: «Criterios por este trabajo: 4 entregados por
            Nexus, 2 que el agente dijo aplicar».
          </li>
          <li>El «Resumen» que escribió el agente al terminar.</li>
          <li>
            «Quedó sin hacer», si cerró la ejecución con algo pendiente: cada
            cosa que faltó y por qué.
          </li>
          <li>
            «Pasos del flujo que no hizo», si siguió un flujo de la agencia y
            saltó algún paso.
          </li>
          <li>
            Las «Dudas» que dejó, con «Marcar resuelta» o «Reabrir» en cada una
            (<ArticleLink to="agente/dudas-del-agente" />
            ).
          </li>
        </ul>
        <Screenshot
          id="agente/ejecucion"
          caption="El panel de una «Atención de tareas» terminada: sus cifras, el resumen que escribió el agente y sus dudas, dos abiertas de tres."
        />
        {/* CAPTURA agente/ejecucion-incompleta: Agente › Ejecuciones, panel de una ejecución «Incompleta» de un flujo de la agencia, con criterios entregados y aplicados, «Quedó sin hacer» y «Pasos del flujo que no hizo» | El panel de una ejecución incompleta: los criterios del trabajo, el resumen, «Quedó sin hacer» y los pasos del flujo que no hizo. */}
      </ArticleSection>

      <ArticleSection id="fallos-recientes" title="Fallos recientes">
        <p>
          Debajo de la lista, «Fallos recientes» enseña lo que el agente intentó
          hacer en Nexus y no se pudo, en los últimos siete días: cuántos fallos
          tuvo cada herramienta y cada fallo con su motivo. Si el fallo es de
          una ejecución, se abre desde ahí.
        </p>
        <p>
          Cada fallo lleva su motivo: «Sin permiso», «Datos no válidos», «Regla
          de Nexus», «Freno» o «Fallo de Nexus». «Sin permiso» es lo esperado
          cuando el agente trabaja a petición de alguien que no puede hacer eso
          (<ArticleLink to="agente/como-trabaja-el-agente" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
