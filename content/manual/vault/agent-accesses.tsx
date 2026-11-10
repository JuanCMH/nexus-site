import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "lo-que-hace-el-agente", title: "Lo que hace el agente" },
  { id: "guardar-lo-preparado", title: "Guardar lo que preparó" },
  { id: "lo-que-no-hace", title: "Lo que no hace" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="lo-que-hace-el-agente" title="Lo que hace el agente">
        <p>
          El agente puede preparar los accesos de la agencia sin la clave: por
          ejemplo, los de los portales de las aseguradoras o los de los correos
          vinculados. De cada uno deja el nombre, el tipo, la dirección web, el
          usuario, las notas y, si aplica, la aseguradora o el correo vinculado.
          Nunca la contraseña.
        </p>
        <p>
          Lo preparado llega en una solicitud del agente, que siempre espera a
          una persona (<ArticleLink to="agente/permisos-y-solicitudes" />
          ). Mientras la solicitud está vigente, cada acceso aparece en Accesos
          → «Del agente», bajo «Por atender».
        </p>
      </ArticleSection>

      <ArticleSection id="guardar-lo-preparado" title="Guardar lo que preparó">
        <p>
          «Del agente» es de quien tiene el permiso «Guardar y editar accesos»,
          y pide la bóveda abierta.
        </p>
        <Steps>
          <Step title="Abre Accesos → «Del agente»">
            <p>
              «Preparados por el agente» lista cada acceso con su tipo, su
              usuario, su dirección y la solicitud de la que viene.
            </p>
          </Step>
          <Step title="Haz clic en «Guardar»">
            <p>
              Se abre «Añadir acceso» con lo que dejó el agente ya completado.
            </p>
          </Step>
          <Step title="Escribe la contraseña y guarda">
            <p>
              La contraseña se cifra en tu computador o navegador: el agente
              nunca la ve. Revisa lo demás y haz clic en «Guardar acceso».
            </p>
          </Step>
        </Steps>
        <p>
          «No guardar» descarta el acceso preparado. Sin nada pendiente, la
          sección dice «No hay accesos preparados».
        </p>
      </ArticleSection>

      <ArticleSection id="lo-que-no-hace" title="Lo que no hace">
        <p>
          El agente no abre la bóveda: no lee ni escribe contraseñas, ni códigos
          de verificación, ni decide quién usa cada acceso. Eso lo hacen las
          personas. Cómo trabaja el agente con la agencia está en{" "}
          <ArticleLink to="agente/como-trabaja-el-agente" />.
        </p>
        <p>
          Cuando el agente consulta el portal de una aseguradora, quien entra es
          el computador de los portales: escribe el usuario y la contraseña del
          acceso en ese computador, y el agente no los ve. Si el portal pide el
          código del autenticador y el acceso no guarda su clave, Nexus se lo
          pide a una persona, nunca al agente (
          <ArticleLink to="configuracion/conexiones" />
          ).
        </p>
      </ArticleSection>
    </>
  );
}
