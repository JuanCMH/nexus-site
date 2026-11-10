import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "por-cambiar", title: "Por cambiar" },
  { id: "salud", title: "Salud de las contraseñas" },
  { id: "que-ve-cada-uno", title: "Qué ve cada persona" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="por-cambiar" title="Por cambiar">
        <p>
          Accesos → «Por cambiar», bajo «Por atender», lista las cuentas cuya
          contraseña conviene cambiar. Un acceso llega aquí cuando se le retira
          a una persona: ella ya conocía la contraseña.
        </p>
        <p>
          Para sacarlo de la lista, cambia la contraseña en la cuenta (en el
          portal, en el correo) y guarda la nueva en el acceso con «Editar». Al
          guardar la contraseña nueva, el acceso sale de «Por cambiar».
        </p>
        <p>
          Sin cuentas pendientes, la sección dice «No hay contraseñas por
          cambiar».
        </p>
      </ArticleSection>

      <ArticleSection id="salud" title="Salud de las contraseñas">
        <p>Accesos → «Salud» agrupa las contraseñas que piden cambio:</p>
        <ManualTable
          head={["Grupo", "Qué significa"]}
          rows={[
            ["«Repetidas»", "La misma contraseña está en otro acceso."],
            ["«Cortas»", "Tiene menos de 12 caracteres."],
            [
              "«Sin cambiar en más de un año»",
              "La contraseña no cambia desde hace más de un año.",
            ],
          ]}
        />
        <p>
          Al hacer clic en un acceso se abre su detalle, que repite el aviso en
          «Salud de la contraseña». Sin problemas, la sección dice «Ninguna
          contraseña pide cambio».
        </p>
        <Callout type="note">
          <p>
            La salud se calcula en tu computador o navegador, con los accesos
            que tienes abiertos. Nada del cálculo sube al servidor.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="que-ve-cada-uno" title="Qué ve cada persona">
        <p>
          El propietario y los administradores ven la salud de todos los accesos
          de la agencia. Cada miembro ve solo la de los accesos que usa. Las dos
          secciones piden la bóveda abierta.
        </p>
      </ArticleSection>
    </>
  );
}
