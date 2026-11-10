import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "anual-y-causada", title: "Producción anual y causada" },
  { id: "el-periodo", title: "El período y sus cifras" },
  { id: "las-tarjetas", title: "Por grupo, por ramo y como la aseguradora" },
  { id: "el-cierre", title: "Cerrar el año" },
  { id: "reabrir", title: "Reabrir un año cerrado" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="anual-y-causada" title="Producción anual y causada">
        <Video id="inicio/produccion-y-cierre-del-ano" />
        <p>
          «Producción» es un apartado del tablero de la agencia:{" "}
          <ArticleLink to="inicio/tablero-de-la-agencia" />. Lo ve quien ve el
          tablero, y los filtros de arriba (período, ramo, aseguradora,
          responsable y ramos aparte) valen también aquí. Cuenta la producción
          de dos formas:
        </p>
        <ManualTable
          head={["Cifra", "Qué cuenta"]}
          rows={[
            [
              "Producción anual",
              "La prima de cada póliza, en su inicio de vigencia, con las cuotas que aún no empiezan.",
            ],
            [
              "Producción causada",
              "Las cuotas cuyo período de cobro ya empezó, cada una en su fecha.",
            ],
          ]}
        />
        <p>
          Las cuotas salen de la forma de pago de la póliza o, si no la tiene,
          de la forma de pago de su ramo («Forma de pago de sus pólizas»). Sin
          ninguna de las dos, la póliza se cuenta como pago único.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Una póliza cancelada cuenta lo causado hasta su fecha de
            cancelación, y la devolución se resta en el mes de la cancelación.
            Una cancelada sin fecha de cancelación no suma.
          </li>
          <li>
            Los anexos se cuentan en su mes, aparte de la prima de la póliza:
            los aumentos suman y las disminuciones restan.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="el-periodo" title="El período y sus cifras">
        <p>
          Arriba va el período que se mira, por ejemplo «1 ene 2026 al 9 nov
          2026 · período en curso» o «· período completo», y si el año está
          abierto o cerrado:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «2026 abierto: las cifras cambian si se registra o corrige una
            póliza».
          </li>
          <li>«2025 cerrado: cifras de la foto del cierre».</li>
        </ul>
        <p>Debajo, cuatro cifras:</p>
        <ManualTable
          head={["Cifra", "Qué dice"]}
          rows={[
            [
              "Producción anual",
              "La del período, frente a la del año anterior al mismo corte, por ejemplo «+12 % frente a … al mismo corte de 2025».",
            ],
            [
              "Producción causada",
              "La del período, y qué porcentaje es de la anual.",
            ],
            [
              "Anexos",
              "Los aumentos menos las disminuciones del período, con cada uno debajo.",
            ],
            [
              "Pólizas producidas",
              "Cuántas pólizas iniciaron vigencia en el período, frente al año anterior al mismo corte.",
            ],
          ]}
        />
        <p>
          Si hay pólizas sin forma de pago o canceladas sin fecha, la línea de
          abajo lo dice: «N pólizas sin forma de pago: se causan como pago
          único.» o «N pólizas canceladas sin fecha de cancelación no suman.».
        </p>
        <p>
          La gráfica «Producción anual y causada» enseña las dos cifras por mes
          o, en el período «Mes», por semana. En el período en curso marca
          «hoy».
        </p>
        <Screenshot
          id="inicio/tablero-produccion"
          caption="El apartado «Producción» en el año en curso: la producción anual y causada, los anexos, las pólizas producidas, la gráfica por mes y, debajo, «Por grupo» y «Cierre de 2026»."
        />
      </ArticleSection>

      <ArticleSection
        id="las-tarjetas"
        title="Por grupo, por ramo y como la aseguradora"
      >
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Por grupo»</strong>: las pólizas,
            la producción anual, la causada y la anual del año anterior al mismo
            corte, en «Renovables», «No renovables» y los ramos aparte, con su
            total.
          </li>
          <li>
            <strong className="font-medium">
              «Por ramo, como la aseguradora»
            </strong>
            : la producción anual de cada ramo separada en «Nueva»,
            «Renovación», «Aumentos», «Disminuciones» y «Cancelaciones», con su
            «Total». Sirve para compararla, columna a columna, con el informe de
            producción de una aseguradora.
          </li>
          <li>
            <strong className="font-medium">«Por ramo»</strong>,{" "}
            <strong className="font-medium">«Por aseguradora»</strong> y{" "}
            <strong className="font-medium">«Por responsable»</strong>: la
            producción anual del período de cada uno, con su número de pólizas.
          </li>
        </ul>
        <p>
          Qué ramos van aparte se marca en cada ramo, con «Separar en el tablero
          de la agencia».
        </p>
      </ArticleSection>

      <ArticleSection id="el-cierre" title="Cerrar el año">
        <p>
          Mientras un año está abierto, sus cifras se calculan con lo que hay en
          Nexus en cada momento. Al cerrarlo, Nexus guarda la foto de la
          producción del año: el tablero enseña esa foto, y lo que cambie
          después aparece aparte como ajuste. La cartera se sigue pudiendo
          editar.
        </p>
        <p>
          El cierre está en la tarjeta «Cierre de» el año, en el apartado
          «Producción». El botón para cerrar aparece cuando el año ya terminó y
          sigue abierto («Abierto: el año terminó y no se ha cerrado»), y solo
          para el propietario y quien tiene el rol Administrador.
        </p>
        <Steps>
          <Step title="Elige el año en los filtros">
            <p>Con «Año» y las flechas, el año que vas a cerrar.</p>
          </Step>
          <Step title="Haz clic en «Cerrar» el año">
            <p>Por ejemplo «Cerrar 2025», en la tarjeta «Cierre de 2025».</p>
          </Step>
          <Step title="Confirma">
            <p>
              La ventana explica qué pasa al cerrar. Al confirmar aparece «La
              producción de 2025 quedó cerrada».
            </p>
          </Step>
        </Steps>
        <p>
          Un año cerrado dice quién lo cerró y cuándo, los «Ajustes posteriores,
          anual» y «Ajustes posteriores, causada», y la lista de pólizas del año
          que cambiaron después del cierre, cada una con enlace a su ficha. Si
          ninguna cambió, dice «Ninguna póliza del año cambió después del
          cierre.».
        </p>
      </ArticleSection>

      <ArticleSection id="reabrir" title="Reabrir un año cerrado">
        <p>
          Quien puede cerrar un año puede reabrirlo, con «Reabrir» en la tarjeta
          del cierre. La ventana pide «Por qué se reabre», y el motivo es
          obligatorio. Al reabrir se borra la foto del cierre y el año vuelve a
          calcularse con lo que hay en Nexus hasta que se cierre otra vez.
        </p>
        <Callout type="note">
          <p>
            El cierre y la reapertura quedan en la bitácora de la agencia; la
            reapertura, con su motivo.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
