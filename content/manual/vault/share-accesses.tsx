import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "quien-decide", title: "Quién decide" },
  { id: "por-acceso", title: "Compartir un acceso" },
  { id: "por-persona", title: "Los accesos de una persona" },
  { id: "al-quitar", title: "Al quitar un acceso" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="quien-decide" title="Quién decide">
        <p>
          Los accesos son de la agencia. El propietario y los administradores
          los tienen todos y deciden quién usa cada uno. Los demás ven y usan
          solo los que les concedieron.
        </p>
        <ManualTable
          head={["Quién", "Qué puede hacer en Accesos"]}
          rows={[
            [
              "Propietario",
              "Todo: tiene todos los accesos, decide quién usa cada uno, configura la copia de emergencia y aprueba los computadores de todo el equipo.",
            ],
            [
              "Administrador",
              "Tiene todos los accesos y decide quién usa cada uno, en Personas y en Solicitudes.",
            ],
            [
              "«Guardar y editar accesos»",
              "Guarda accesos nuevos, edita los que usa e importa. Cada acceso nuevo queda también para el propietario y los administradores.",
            ],
            [
              "Miembro",
              "Usa los accesos que le concedieron, ve la salud de los suyos y pide los que le faltan.",
            ],
          ]}
        />
        <Callout type="note">
          <p>
            Una persona solo puede recibir accesos cuando ya creó su clave de la
            bóveda. Hasta entonces, Personas la enseña con «Aún no ha creado su
            clave de la bóveda».
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="por-acceso" title="Compartir un acceso">
        <Steps>
          <Step title="Elige el acceso">
            <p>
              Con la bóveda abierta, en cualquier sección de accesos. Su detalle
              dice «Quién lo usa».
            </p>
          </Step>
          <Step title="Abre «Personas con acceso»">
            <p>
              Desde el menú «Más acciones» del detalle. Solo estas personas
              reciben la contraseña y los códigos; el propietario y los
              administradores los tienen todos y no se pueden desmarcar.
            </p>
          </Step>
          <Step title="Activa o quita a cada persona">
            <p>
              Nexus confirma cada cambio: «… ya tiene el acceso» al darlo, o el
              aviso de que se le retiró al quitarlo.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="por-persona" title="Los accesos de una persona">
        <p>
          Accesos → «Personas», bajo «Administración», es de quien administra la
          agencia. Lista a cada persona del equipo con cuántos accesos tiene («3
          de 12 accesos», «Sin accesos»); el propietario y los administradores
          aparecen con «tiene todos los accesos».
        </p>
        <p>
          Al elegir a una persona se abre «Accesos de…», con todos los accesos y
          los suyos marcados, y un buscador. Marca o desmarca y haz clic en
          «Guardar»: lo nuevo se concede y lo desmarcado se quita, todo a la
          vez. Es la forma de preparar los accesos de alguien que entra a la
          agencia.
        </p>
      </ArticleSection>

      <ArticleSection id="al-quitar" title="Al quitar un acceso">
        <p>
          Quitar un acceso borra la copia que tenía la persona y lo protege de
          nuevo. Pero ella ya conoce la contraseña, así que conviene cambiarla
          en la cuenta. Nexus lo recuerda al quitarlo y deja el acceso en «Por
          cambiar» hasta que alguien guarde la contraseña nueva (
          <ArticleLink to="accesos/por-cambiar-y-salud" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
