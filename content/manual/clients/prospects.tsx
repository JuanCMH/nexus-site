import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es un prospecto" },
  { id: "registrar", title: "Registrar un prospecto" },
  { id: "cambiar-la-relacion", title: "Cambiar la relación desde la ficha" },
  { id: "paso-a-cliente", title: "Cuándo pasa a cliente" },
  { id: "las-vistas", title: "Las vistas de Conversión" },
  { id: "la-conversion", title: "Dónde se mide la conversión" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es un prospecto">
        <p>
          Un prospecto es una persona o empresa que pidió una cotización y aún
          no compra. En Nexus es un cliente más, con su ficha, sus tareas, sus
          documentos y sus cotizaciones, que lleva además su relación con la
          agencia:
        </p>
        <ManualTable
          head={["Relación", "Qué significa"]}
          rows={[
            [
              "Cliente",
              "Tiene o tuvo pólizas con la agencia. Es la relación con la que nace todo cliente, salvo que se elija otra.",
            ],
            [
              "Prospecto",
              "Pidió una cotización y aún no tiene pólizas. Lleva la insignia «Prospecto».",
            ],
            [
              "No se convirtió",
              "Fue prospecto y se cerró sin compra. Lleva la insignia «No se convirtió» y, si se conoce, el motivo.",
            ],
          ]}
        />
        <p>
          Los clientes que se registraron antes de esta función, y los que se
          importan desde Excel, son «Cliente».
        </p>
      </ArticleSection>

      <ArticleSection id="registrar" title="Registrar un prospecto">
        <Video id="clientes/prospectos" />
        <p>
          Al crear un cliente (<ArticleLink to="clientes/crear-un-cliente" />
          ), la página «Nuevo cliente» trae, debajo de «Cómo queda», el bloque
          «Relación» con «Cliente», que viene marcado, y «Prospecto». Elige
          «Prospecto» y crea el cliente como siempre.
        </p>
        <Screenshot
          id="clientes/relacion-nuevo"
          caption="La columna «Cómo queda» de «Nuevo cliente» con el bloque «Relación» en «Prospecto»: «Pidió una cotización y aún no compra. Pasa a cliente con su primera póliza vigente o pendiente, y cuenta en la conversión del tablero.»"
        />
        <p>
          El agente también puede registrar a alguien como prospecto, por
          ejemplo a quien escribió pidiendo una cotización. Entra «Por
          confirmar» o confirmado, según cómo supervise la agencia (
          <ArticleLink to="agente/por-confirmar" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="cambiar-la-relacion"
        title="Cambiar la relación desde la ficha"
      >
        <p>
          La relación se cambia en la ficha del cliente, no en el formulario.
          Pide el permiso «Editar clientes».
        </p>
        <Steps>
          <Step title="Abre la ficha del cliente">
            <p>
              El bloque «Relación» está en la columna de la izquierda, bajo
              «Responsable». Dice la relación y la fecha: «Desde el…» en un
              prospecto, «Prospecto desde el…, cliente desde el…» en uno que
              compró, o «Prospecto desde el…, cerrado el…» en uno que no se
              convirtió.
            </p>
          </Step>
          <Step title="Haz clic en el lápiz">
            <p>
              Junto a la relación está «Cambiar la relación». Se abren los
              botones «Cliente», «Prospecto» y «No se convirtió». A quien es
              cliente solo se le ofrecen «Cliente» y «Prospecto»: «No se
              convirtió» se marca sobre un prospecto.
            </p>
          </Step>
          <Step title="Elige la relación">
            <p>
              «Cliente» y «Prospecto» se guardan al elegirlos. «No se convirtió»
              pide antes el «Motivo», si se conoce (hasta 500 caracteres), y se
              guarda con «Marcar». Aparece «Relación actualizada».
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="clientes/relacion"
          caption="«Cambiar la relación» en la ficha de un prospecto: «Cliente», «Prospecto» y «No se convirtió», con el motivo «Eligió otra agencia por precio.» y el botón «Marcar»."
        />
        <Callout type="note">
          <p>
            Volver a marcar «Prospecto» a quien no se convirtió conserva la
            fecha desde la que es prospecto: la cuenta no empieza de nuevo. El
            cambio queda en la bitácora.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="paso-a-cliente" title="Cuándo pasa a cliente">
        <p>
          Un prospecto pasa solo a «Cliente» cuando tiene su primera póliza
          vigente o por iniciar, la registre una persona, el agente o una
          importación. La fecha de ese momento queda como la fecha en que se
          convirtió. Lo mismo pasa con quien estaba como «No se convirtió» y al
          final compró.
        </p>
        <p>
          Cuando una cotización de cumplimiento se convierte en póliza (
          <ArticleLink to="cotizaciones-de-cumplimiento/estados-de-una-cotizacion" />
          ), su cliente pasa a «Cliente» si era prospecto.
        </p>
        <p>
          «No se convirtió» no se marca solo: lo marca una persona cuando sabe
          que el prospecto no va a comprar.
        </p>
      </ArticleSection>

      <ArticleSection id="las-vistas" title="Las vistas de Conversión">
        <p>
          En el menú de Clientes, el grupo «Conversión» trae dos vistas (
          <ArticleLink to="clientes/listado-de-clientes" />
          ):
        </p>
        <ManualTable
          head={["Vista", "Qué trae"]}
          rows={[
            [
              "Prospectos",
              "Quienes pidieron una cotización y aún no tienen pólizas. Vacía, dice «Ningún prospecto abierto».",
            ],
            [
              "No se convirtieron",
              "Los prospectos marcados como «No se convirtió». Vacía, dice «Ningún prospecto cerrado sin compra».",
            ],
          ]}
        />
        <p>
          En las demás vistas, la fila de un prospecto lleva bajo su nombre la
          insignia «Prospecto» o «No se convirtió».
        </p>
      </ArticleSection>

      <ArticleSection id="la-conversion" title="Dónde se mide la conversión">
        <p>
          El tablero de la agencia trae la tarjeta «Conversión de prospectos»:
          los prospectos por el mes en que se registraron, repartidos en
          «Convertidos», «No se convirtieron» y «Abiertos», con el porcentaje de
          convertidos y los días en promedio hasta la primera póliza. Se explica
          en <ArticleLink to="inicio/tablero-de-la-agencia" />.
        </p>
        <Callout type="note">
          <p>
            La conversión cuenta a los clientes que pasaron por prospecto. Un
            cliente registrado directamente como «Cliente» no cuenta en ella.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
