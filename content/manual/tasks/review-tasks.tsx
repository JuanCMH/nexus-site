import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "para-que", title: "Para qué es «Por revisar»" },
  { id: "motivos", title: "Los motivos" },
  { id: "revisar-una", title: "Revisar una tarea" },
  { id: "quien", title: "Quién la ve" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="para-que" title="Para qué es «Por revisar»">
        <p>
          Tareas → Por revisar reúne las tareas que piden una segunda mirada de
          quien dirige: lo que se cerró y ya no está respaldado en Nexus, lo que
          encontró el agente al auditar y los encargos que su responsable
          recortó. Cada fila dice el motivo, el tipo de trámite y, si está
          cerrada, cuándo y quién la cerró.
        </p>
        <p>
          Si no hay nada, la sección dice «No hay nada por revisar». Enseña las
          200 más recientes; al dar una por revisada sale de la lista y entra la
          siguiente.
        </p>
        <Screenshot
          id="tareas/por-revisar"
          caption="Tareas → Por revisar: cada tarea con su motivo («Perdió su resultado», «Hallazgo del agente»), su tipo de trámite y la fecha y la persona que la cerró."
        />
      </ArticleSection>

      <ArticleSection id="motivos" title="Los motivos">
        <ManualTable
          head={["Motivo", "Cuándo aparece"]}
          rows={[
            [
              "Perdió su resultado",
              "La tarea se cerró con su resultado en Nexus y ya no lo tiene: se borró la póliza o se deshizo la renovación. Queda «Sin comprobar».",
            ],
            [
              "Hallazgo del agente",
              "El agente auditó la tarea y dejó un hallazgo, con su nota.",
            ],
            [
              "Modificada por su responsable",
              "Quien la tiene a cargo le quitó trabajo a una tarea que abrió otra persona: le cambió el tipo, quitó o reescribió pasos, acortó la descripción o alejó la fecha límite.",
            ],
            [
              "Cerrada por el agente, en la muestra",
              <>
                El agente la cerró con su fuente, como hecha o como no hecha, y
                la tarea cayó en la muestra que la agencia revisa (
                <ArticleLink to="agente/verificacion-y-supervision" />
                ).
              </>,
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="revisar-una" title="Revisar una tarea">
        <p>
          Abre la tarea. Sobre sus datos, un aviso en ámbar enumera sus motivos
          y, si el agente la auditó, su nota. Si hubo que corregir algo con otra
          tarea, el aviso la enlaza en «Corrección:».
        </p>
        <p>
          Cuando la hayas mirado, haz clic en «Dar por revisada». Nexus dice
          «Tarea revisada», la tarea sale de «Por revisar» y la actividad dice
          «La dio por revisada». Si después aparece un motivo nuevo, vuelve.
        </p>
        <p>
          Una auditoría conforme queda en el panel como «Auditada por el agente:
          conforme»; un hallazgo ya revisado, como «Hallazgo del agente, ya
          revisado».
        </p>
      </ArticleSection>

      <ArticleSection id="quien" title="Quién la ve">
        <p>
          «Por revisar» y «Dar por revisada» piden el permiso «Revisar las
          tareas cerradas», que a su vez pide «Ver las tareas de toda la
          agencia». Sin él, la sección no sale en el menú de Tareas.
        </p>
        <p>
          La auditoría de las tareas cerradas la hace el agente cuando se le
          pide; el flujo que sigue está en Directrices (
          <ArticleLink to="directrices/flujos" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
