import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-hay", title: "Qué hay en Por confirmar" },
  { id: "revisar", title: "Revisar una propuesta" },
  { id: "la-evidencia", title: "La evidencia de cada dato" },
  { id: "varias", title: "Confirmar varias a la vez" },
  { id: "cambios-del-agente", title: "Los cambios del agente" },
  { id: "responsable", title: "El responsable" },
  { id: "en-otra-pantalla", title: "Lo que se confirma en otra pantalla" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-hay" title="Qué hay en Por confirmar">
        <p>
          Agente › «Por confirmar» reúne lo que propuso el agente y espera a una
          persona. Cada propuesta tiene responsable, por las reglas de reparto
          de la agencia (
          <ArticleLink to="directrices/reparto" />
          ). Arriba a la derecha eliges de quién: «A mi cargo» (la entrada),
          «Sin asignar», «Todas» o una persona del equipo.
        </p>
        <ManualTable
          head={["Grupo", "Qué tiene"]}
          rows={[
            [
              "Solicitudes",
              <>
                Lo que el agente pide permiso para hacer. No se aplica nada
                hasta que alguien con el permiso lo aprueba (
                <ArticleLink to="agente/permisos-y-solicitudes" />
                ).
              </>,
            ],
            [
              "Cartera",
              "Pólizas y clientes por confirmar, y pólizas y clientes con cambios por revisar.",
            ],
            [
              "Catálogos, plantillas y referencias",
              "Aseguradoras, notas de aseguradoras, ramos, plantillas con cambios y referencias.",
            ],
            ["Contactos", "Contactos y notas de contactos."],
            ["Equipo", "Roles o cambios de rol, y accesos de miembros."],
            [
              "Reglas del trabajo",
              "Reglas de reparto, reglas de correo y criterios.",
            ],
            [
              "Ajustes de la agencia",
              "Cambios en los datos de la agencia, en los plazos y en las reglas de cálculo de cumplimiento, y modelos de correo.",
            ],
          ]}
        />
        <p>
          Cada fila dice qué es, a cargo de quién está y, si el agente lo hizo
          por encargo, quién se lo pidió. De cada tipo se ven hasta 20; «Ver N
          más» lleva a su pantalla.
        </p>
        <p>
          Una regla de correo propuesta sale en «Reglas del trabajo». Su panel
          dice la «Condición», «Qué hace» y el «Motivo», e «Ir a Reglas» lleva a
          Correos → Reglas (<ArticleLink to="correos/reglas-de-correo" />
          ). Un criterio propuesto que lleva una comprobación de Nexus la enseña
          en «Comprobación» (
          <ArticleLink to="directrices/criterios" />
          ).
        </p>
        <Screenshot
          id="agente/por-confirmar"
          caption="Agente › Por confirmar con «Todas»: en «Cartera», pólizas y clientes por confirmar y pólizas con cambios por revisar, cada una con su responsable."
        />
      </ArticleSection>

      <ArticleSection id="revisar" title="Revisar una propuesta">
        <Video id="agente/por-confirmar" />
        <Steps>
          <Step title="Haz clic en la propuesta">
            <p>
              Se abre su panel, sin salir de la lista. Una referencia o una
              plantilla llevan a su pantalla.
            </p>
          </Step>
          <Step title="Lee la propuesta">
            <p>
              «Propuesta» dice la «Fecha», «A petición de» quién la hizo el
              agente, quién «La resuelve» y, si la asignó una regla de reparto,
              «Por qué». Debajo, el registro tal como lo propuso.
            </p>
          </Step>
          <Step title="Decide">
            <p>
              «Confirmar» lo deja en firme. «Corregir», en un cliente o una
              póliza, abre su formulario para cambiar lo que haga falta antes.
              «Descartar» lo quita: una póliza o un cliente descartados se
              eliminan con sus respuestas de plantilla, y los documentos de la
              póliza quedan en la agencia sin vincular. Un cliente que ya tiene
              pólizas no se puede descartar. «Abrir la ficha» lleva al registro.
            </p>
          </Step>
        </Steps>
        <p>
          Lo mismo se decide desde «Mi día», que abre el mismo panel (
          <ArticleLink to="inicio/mi-dia" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="la-evidencia" title="La evidencia de cada dato">
        <p>
          Bajo los datos de una póliza o un cliente propuestos, una línea cuenta
          cuántos datos llegaron con evidencia, cuántos están «por verificar» y
          cuántos «sin evidencia», y nombra los que no tienen. El icono de
          comillas junto a un dato abre su evidencia: la cita del documento, la
          página, si se leyó del texto o de una imagen y el documento.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «El agente no está seguro de este dato» marca lo que leyó con poca
            confianza: compáralo con el documento.
          </li>
          <li>
            Si alguien cambió el dato después, la evidencia lo advierte: la cita
            respalda el valor que propuso el agente, no el de ahora.
          </li>
        </ul>
        <Screenshot
          id="agente/panel-poliza"
          caption="El panel de una póliza por confirmar: «Propuesta», los datos de la póliza y la evidencia de «Número de póliza», con la cita, «Página 1» y «Leído del texto»."
        />
        <Callout type="note">
          <p>
            Nexus no coteja la cita con el documento: la muestra como la dejó el
            agente. La verificación de Nexus mira otras cosas, como los datos
            que faltan o un posible repetido (
            <ArticleLink to="agente/verificacion-y-supervision" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="varias" title="Confirmar varias a la vez">
        <p>
          Lo que se confirma sin más que leerlo —registros, catálogos, reglas,
          criterios— se elige también de a varias, un tipo a la vez.
        </p>
        <Steps>
          <Step title="Haz clic en «Elegir varias»">
            <p>
              Está a la derecha del grupo. Elige el tipo («Pólizas por
              confirmar», «Contactos por confirmar»…): salen las casillas en las
              filas de ese tipo, con todas las que esperan.
            </p>
          </Step>
          <Step title="Marca las que quieras y confirma">
            <p>
              La barra dice cuántas van elegidas («3 elegidas»). Haz clic en
              «Confirmar» o, para los cambios por revisar, en «Dar por
              revisados».
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="cambios-del-agente" title="Los cambios del agente">
        <p>
          Si el agente corrige una póliza o un cliente ya confirmados, el
          registro no vuelve a por confirmar: sigue confirmado y sus cambios
          cuentan en las cifras. Queda marcado hasta que alguien lo da por
          revisado. El aviso dice cuántos datos cambió, cuándo y a petición de
          quién, con cada dato y lo que decía antes («Forma de pago: Contado →
          Financiada»).
        </p>
        <p>
          «Dar por revisado» quita la marca; lo puede hacer quien puede editar
          el registro. En Pólizas y en Clientes, la vista «Cambios del agente»
          lista los registros que el agente cambió y nadie ha revisado.
        </p>
        <Screenshot
          id="agente/cambios-del-agente"
          caption="Una póliza con cambios por revisar: «El agente cambió 2 datos», con el número de cuotas y la forma de pago antes y después, y «Dar por revisado»."
        />
      </ArticleSection>

      <ArticleSection id="responsable" title="El responsable">
        <p>
          El responsable se cambia en la lista o en el campo «La resuelve» del
          panel: una persona del equipo o «Sin asignar». Resuelves lo que está a
          tu cargo y lo que no tiene responsable. Para resolver lo que está a
          cargo de otra persona hace falta el permiso «Resolver lo que está a
          cargo de otra persona»; sin él, el panel lo dice.
        </p>
      </ArticleSection>

      <ArticleSection
        id="en-otra-pantalla"
        title="Lo que se confirma en otra pantalla"
      >
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Tareas recurrentes.</strong> Una
            serie que propone el agente no sale en esta lista: se confirma en
            Tareas → Recurrentes (
            <ArticleLink to="tareas/tareas-recurrentes" />
            ).
          </li>
          <li>
            <strong className="font-medium">Carpetas de origen.</strong> Una
            carpeta que propone el agente se confirma en Documentos → Carpetas
            de origen (<ArticleLink to="documentos/carpetas-de-origen" />
            ).
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}
