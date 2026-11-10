import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-una-duda", title: "Qué es una duda" },
  { id: "la-lista", title: "La lista de dudas" },
  { id: "responder", title: "Responder una duda" },
  { id: "quien-responde", title: "Quién responde" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-una-duda" title="Qué es una duda">
        <p>
          Cuando el agente no sabe decidir algo —un cliente que no está en la
          cartera, un dato que no cuadra—, lo deja escrito como una duda en vez
          de detenerse. La duda puede citar el correo del que salió y lleva la
          ejecución en que la dejó.
        </p>
        <p>
          Cada duda tiene responsable, por las mismas reglas de reparto que las
          propuestas (<ArticleLink to="directrices/reparto" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="la-lista" title="La lista de dudas">
        <p>
          Agente › «Dudas» se abre en «A mi cargo»; el selector cambia a «Sin
          asignar», «Todas» o una persona. Las pestañas «Abiertas» y «Resueltas»
          llevan su cuenta. Cada fila dice si alguien le dejó una indicación al
          agente («Con una indicación para el agente») o si el agente contestó,
          y a cargo de quién está. «Marcar resuelta», en la fila, la cierra sin
          abrirla.
        </p>
      </ArticleSection>

      <ArticleSection id="responder" title="Responder una duda">
        <p>Haz clic en la duda. Su panel tiene:</p>
        <ManualTable
          head={["Parte", "Qué dice"]}
          rows={[
            [
              "Responsable",
              "Quién «La resuelve» y, si la asignó una regla de reparto, «Por qué».",
            ],
            [
              "Correo de origen",
              "El asunto, el remitente, la fecha y el correo vinculado del que salió, si el agente lo citó.",
            ],
            [
              "Conversación con el agente",
              "Lo que se le ha indicado y lo que contestó.",
            ],
            [
              "Ejecución de origen",
              "El trabajo del agente en que dejó la duda.",
            ],
          ]}
        />
        <p>
          En «Indicación o respuesta» escribe lo que el agente necesita saber y
          elige:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Enviar indicación»</strong> se la
            deja al agente y la duda sigue abierta: él la lee en su siguiente
            ejecución, hace lo que le pides y la cierra. Si la agencia configuró
            la activación del agente, responder lo activa (
            <ArticleLink to="agente/conectar-el-asistente" />
            ).
          </li>
          <li>
            <strong className="font-medium">«Marcar resuelta»</strong> la cierra
            ya, con ese texto como respuesta.
          </li>
        </ul>
        <p>
          Una duda resuelta vuelve a abrirse con «Reabrir». «Copiar el texto»
          copia la pregunta.
        </p>
        <Screenshot
          id="agente/duda"
          caption="Una duda abierta: la pregunta del agente, su responsable con el porqué, el correo de origen y «Indicación o respuesta», con «Enviar indicación» y «Marcar resuelta»."
        />
      </ArticleSection>

      <ArticleSection id="quien-responde" title="Quién responde">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Responder y cerrar dudas pide el permiso «Responder las preguntas
            del agente».
          </li>
          <li>
            Cada persona resuelve las suyas y las que no tienen responsable.
            Para las que están a cargo de otra persona hace falta «Resolver lo
            que está a cargo de otra persona».
          </li>
          <li>El responsable se cambia en el panel, en «La resuelve».</li>
        </ul>
      </ArticleSection>
    </>
  );
}
