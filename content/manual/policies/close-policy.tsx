import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-seguimiento", title: "El seguimiento de una póliza" },
  { id: "no-se-renueva", title: "Marcar que no se renueva" },
  { id: "reabrir", title: "Reabrir el seguimiento" },
  { id: "cancelar", title: "Cancelar una póliza" },
  { id: "corregir-la-cancelacion", title: "Corregir la cancelación" },
  { id: "reactivar", title: "Reactivar una póliza cancelada" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-seguimiento" title="El seguimiento de una póliza">
        <p>
          Toda póliza que llega a su fin tiene que quedar con un cierre, que
          dice qué pasó con ella. Mientras no lo tiene, la póliza pide una
          decisión: sale en Pólizas › Necesitan atención y, si ya venció, su
          ficha dice «Sin resolver» y «Venció sin renovación registrada:
          renuévala, encadénala con la que la reemplazó o indica que no se
          renueva».
        </p>
        <ManualTable
          head={["Cierre", "Cómo se llega"]}
          rows={[
            [
              "Renovada",
              <>
                Al renovarla o al encadenarla con su renovación (
                <ArticleLink to="polizas/renovar-una-poliza" />
                ).
              </>,
            ],
            ["Reemplazada", "Al encadenarla con la póliza que la reemplazó."],
            [
              "No se renueva",
              "Una persona lo marca, con una nota que dice por qué.",
            ],
            [
              "Terminada",
              "Sola: la póliza llegó a su fin y no se renueva, porque su ramo no se renueva o porque deriva de otra póliza.",
            ],
          ]}
        />
        <p>
          Un ramo no se renueva cuando en su configuración está apagado «Sus
          pólizas se renuevan», como el de un contrato (
          <ArticleLink to="configuracion/ramos" />
          ). Tampoco se renueva por sí misma una póliza que deriva de otra, como
          la RCE de un contrato de cumplimiento (
          <ArticleLink to="polizas/polizas-derivadas" />
          ). Estas pólizas no piden decisión: al llegar a su fin quedan
          «Terminada» y no «Vencida», y salen en Pólizas › No renovables.
        </p>
        <p>
          Las acciones de este artículo están en el menú «Más acciones» de la
          ficha, los tres puntos de la barra superior. Cada una aparece solo
          cuando aplica y si tu rol la permite.
        </p>
        <Screenshot
          id="polizas/mas-acciones"
          caption="El menú «Más acciones» de una póliza vigente y renovada de otra: «Registrar anexo», «Desvincular de la anterior», «Indicar la póliza principal», «No se renueva», «Cancelar la póliza» y «Eliminar la póliza»."
        />
      </ArticleSection>

      <ArticleSection id="no-se-renueva" title="Marcar que no se renueva">
        <p>
          Cuando el cliente no va a renovar (vendió el bien, se fue con otro
          intermediario, terminó el contrato), la póliza se cierra con «No se
          renueva». Pide el permiso «Editar pólizas».
        </p>
        <Steps>
          <Step title="Elige «No se renueva»">
            <p>
              En «Más acciones». Aparece mientras la póliza requiere
              seguimiento.
            </p>
          </Step>
          <Step title="Escribe por qué">
            <p>
              «Por qué no se renueva» es obligatorio: los motivos son muy
              variados para una lista, así que es una nota libre, de hasta 500
              caracteres.
            </p>
            <Screenshot
              id="polizas/no-se-renueva"
              caption="La ventana «No se renueva» con la nota «La copropiedad contrató la póliza con otro intermediario.» en «Por qué no se renueva»."
            />
          </Step>
          <Step title="Haz clic en «No se renueva»">
            <p>
              Aparece «Póliza marcada como «no se renueva»». La póliza deja de
              requerir seguimiento y su ficha dice «No se renueva:» con la nota.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="reabrir" title="Reabrir el seguimiento">
        <p>
          Si el cliente cambia de idea, «Reabrir el seguimiento», en «Más
          acciones», quita el cierre «No se renueva». La póliza vuelve a pedir
          una decisión y Nexus dice «Seguimiento reabierto». Pide el permiso
          «Editar pólizas».
        </p>
      </ArticleSection>

      <ArticleSection id="cancelar" title="Cancelar una póliza">
        <Video id="polizas/cancelar-una-poliza" />
        <p>
          Cancelar pone la póliza en estado «Cancelada», a mano, con la fecha en
          que la aseguradora la canceló y lo que devolvió. Pide el permiso
          «Cancelar y reactivar pólizas». La opción no aparece en una póliza
          vencida ni en una ya cancelada.
        </p>
        <Steps>
          <Step title="Elige «Cancelar la póliza»">
            <p>
              En «Más acciones». Se abre la ventana «Cancelar póliza»: «La
              póliza … pasa a Cancelada y deja de requerir seguimiento. Se puede
              reactivar.»
            </p>
          </Step>
          <Step title="Escribe la fecha de cancelación">
            <p>
              «Fecha de cancelación» es obligatoria y viene con la de hoy:
              cámbiala por la que indica la aseguradora. No puede ser posterior
              a hoy ni anterior a la más temprana entre la fecha de expedición y
              el inicio de vigencia. Así, una renovación expedida después de su
              inicio se puede cancelar desde el inicio.
            </p>
          </Step>
          <Step title="Escribe la devolución y el motivo">
            <p>
              «Devolución», si la aseguradora devolvió prima. «Motivo» es
              opcional, de hasta 300 caracteres («Falta de pago, venta del
              vehículo, solicitud del cliente…»), y queda en la bitácora.
            </p>
            <Screenshot
              id="polizas/cancelar"
              caption="La ventana «Cancelar póliza»: «Fecha de cancelación» 15/09/2026, «Devolución» $ 1.250.000 y el motivo «Venta del vehículo.», con «Volver» y «Cancelar póliza»."
            />
          </Step>
          <Step title="Haz clic en «Cancelar póliza»">
            <p>
              Aparece «Póliza cancelada». La cabecera de la ficha dice
              «Cancelada desde el…» y, si hubo devolución, «con devolución de…».
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Una póliza cancelada sale de la cartera vigente del cliente y ya no
            se puede renovar. La fecha y la devolución definen lo que la póliza
            cuenta en la producción del tablero de la agencia (
            <ArticleLink to="inicio/tablero-de-la-agencia" />
            ): una cancelada sin fecha no suma.
          </p>
        </Callout>
        <p>
          El agente también puede cancelar una póliza, siempre diciendo por qué;
          el motivo queda en la bitácora. Si la canceló el agente y no se lo
          pidió el responsable del cliente, Nexus le avisa al responsable. Si la
          agencia pidió que el agente pregunte siempre en Pólizas, queda como
          solicitud (<ArticleLink to="agente/permisos-y-solicitudes" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="corregir-la-cancelacion"
        title="Corregir la cancelación"
      >
        <p>
          En una póliza cancelada, «Más acciones» trae «Registrar la fecha de
          cancelación», si la póliza se canceló sin fecha (por ejemplo, porque
          se importó como «Cancelada»), o «Corregir la cancelación», si ya la
          tiene. Pide el permiso «Cancelar y reactivar pólizas».
        </p>
        <p>
          Se abre la ventana «Cancelación», con la «Fecha de cancelación», la
          «Devolución» y el «Motivo». Al guardar con «Guardar» aparece
          «Cancelación registrada». La póliza sigue cancelada: solo cambian la
          fecha y la devolución.
        </p>
      </ArticleSection>

      <ArticleSection id="reactivar" title="Reactivar una póliza cancelada">
        <p>
          En una póliza cancelada, «Reactivar la póliza», en «Más acciones»,
          quita la cancelación. El estado vuelve a ser el que dan sus fechas
          (vigente, por iniciar o vencida) y Nexus dice «Póliza reactivada». La
          fecha de cancelación y la devolución se borran: la póliza vuelve a
          contar entera en la producción. Pide el permiso «Cancelar y reactivar
          pólizas».
        </p>
      </ArticleSection>
    </>
  );
}
