import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { SUPPORT_EMAIL } from "@/lib/site";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-plan", title: "El plan" },
  { id: "el-uso", title: "El uso" },
  { id: "avisos", title: "Los avisos de límite" },
  { id: "exportar", title: "Exportar los datos" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-plan" title="El plan">
        <p>
          «Uso y plan» está en Configuración, en el grupo «Agencia». La ve quien
          tiene el permiso «Ver el plan y su uso»; el propietario y los
          administradores la tienen siempre.
        </p>
        <p>
          El bloque «Plan» dice el plan de la agencia, la «Forma de pago» y el
          «Valor», con los usuarios adicionales que incluye. Cuando hay un corte
          programado aparece «Próximo corte», y si el plan va a cambiar al
          renovarse, «En la renovación» dice a cuál pasa.
        </p>
        <p>
          En Nexus no se paga ni se cambia el plan: para cambiarlo, ampliarlo o
          cancelarlo se escribe a soporte, a{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {SUPPORT_EMAIL}
          </a>
          , como lo dice la propia pantalla.
        </p>
        <p>
          Cuando la agencia tiene estados de cuenta, aparece el bloque «Estados
          de cuenta»: uno por corte, en dólares y en pesos a la TRM de ese día,
          con su PDF. Cada uno dice si está «Por pagar», «Pagado» o «Anulado».
        </p>
      </ArticleSection>

      <ArticleSection id="el-uso" title="El uso">
        <p>
          El bloque «Uso» enseña lo que la agencia lleva de su plan, con una
          barra por cada límite del plan: usuarios, correos vinculados y
          almacenamiento.
        </p>
        <ManualTable
          head={["Límite", "Qué cuenta"]}
          rows={[
            [
              "Usuarios",
              "Las personas del equipo, cuántas incluye el plan y hasta cuántas admite con usuarios adicionales. Las invitaciones pendientes también ocupan su lugar en la barra. El agente no cuenta.",
            ],
            [
              "Correos vinculados",
              "Los correos de la agencia vinculados a Nexus, frente a los que permite el plan.",
            ],
            [
              "Almacenamiento",
              "El espacio que ocupan los archivos de la agencia, con el número aproximado de documentos que caben.",
            ],
          ]}
        />
        <Screenshot
          id="configuracion/uso-del-plan"
          caption="Los bloques «Uso» y «Exportar los datos» de Configuración → Uso y plan: usuarios, correos vinculados y almacenamiento, cada uno con su barra."
        />
      </ArticleSection>

      <ArticleSection id="avisos" title="Los avisos de límite">
        <p>
          Cuando la agencia se acerca a un límite o lo alcanza, «Uso y plan»
          abre con un aviso, y la entrada del menú lleva una marca del mismo
          color.
        </p>
        <ManualTable
          head={["Aviso", "Cuándo sale"]}
          rows={[
            [
              "«La agencia ya usa el 80 % o más de … de su plan» (ámbar)",
              "Desde el 80 % de los correos vinculados o del almacenamiento.",
            ],
            [
              "«La agencia llegó al límite de … de su plan, o lo pasó» (rojo)",
              "Al llegar al límite de correos vinculados o de almacenamiento. De los usuarios, solo si la agencia queda por encima de su plan.",
            ],
          ]}
        />
        <Callout type="note">
          <p>
            Al llegar a un límite, lo que ya existe sigue igual. Lo que no se
            puede es sumar más (otro usuario, otro correo vinculado, más
            archivos) hasta ampliar el plan con soporte.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="exportar" title="Exportar los datos">
        <p>
          El bloque «Exportar los datos» lo ve solo el propietario. Prepara un
          Excel con clientes, pólizas, tareas, documentos y catálogos, una hoja
          por registro. La hoja «Memoria del agente» trae los datos que el
          agente guardó en su memoria, con las columnas «Dato», «De», «Fuente»,
          «Estado» y «Guardado». Los archivos no van en el Excel: están en la
          carpeta de documentos.
        </p>
        <Steps>
          <Step title="Haz clic en «Exportar»">
            <p>
              El bloque dice «Nexus está armando el Excel. Puedes seguir
              trabajando: el enlace aparece aquí cuando esté listo».
            </p>
          </Step>
          <Step title="Haz clic en «Descargar»">
            <p>
              Cuando el Excel está listo, el bloque dice cuándo se preparó y que
              se puede descargar durante 7 días. Para uno más reciente,
              «Exportar de nuevo».
            </p>
          </Step>
        </Steps>
        <p>
          Si la exportación falla, el bloque dice «La última exportación no se
          pudo terminar. Inténtalo de nuevo».
        </p>
      </ArticleSection>
    </>
  );
}
