import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "enviados", title: "Enviados" },
  { id: "mios-y-del-equipo", title: "Míos y del equipo" },
  { id: "como-salio", title: "El correo como salió" },
  { id: "descartados", title: "Descartados" },
  { id: "en-la-ficha", title: "Los correos de un cliente o una póliza" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="enviados" title="Enviados">
        <p>
          «Correos → Enviados» guarda cada correo que una persona envió desde
          Nexus, del último al primero. Al abrir uno se lee quién lo envió y
          cuándo («Lo envió Laura Valentina Ortiz Peña el 24/10/2026 11:56»),
          desde qué correo vinculado salió, a quién fue y qué adjuntos llevó. Si
          lo redactó el agente, se sigue viendo «Por qué lo propone el agente».
        </p>
        <Screenshot
          id="correos/enviados"
          caption="«Correos → Enviados» en «Del equipo»: lo que salió, agrupado por día, cada fila con «Desde» y su responsable, y al lado un correo con el estado «Enviado», quién lo envió y su responsable."
        />
        <p>
          Cada fila dice desde qué correo salió («Desde …») y, en «Del equipo»,
          su responsable. «Lo envió …» aparece cuando lo envió una persona
          distinta del responsable. La lista se carga por partes: «Cargar más»,
          al pie, trae los anteriores. Un correo enviado ya no se edita ni se
          vuelve a enviar.
        </p>
      </ArticleSection>

      <ArticleSection id="mios-y-del-equipo" title="Míos y del equipo">
        <p>
          Como en «Por enviar», «Enviados» y «Descartados» abren en «Míos»: los
          correos de los correos vinculados que tienes a cargo. «Del equipo»,
          para quien administra o tiene acceso a correos vinculados ajenos,
          enseña todos los que puedes ver, agrupados por día: «Hoy», «Ayer»,
          «Últimos 7 días» y «Antes». Ahí cada fila dice también su responsable
          («Responsable: …» o «Sin responsable»).
        </p>
        <p>
          Los filtros «Responsable» y «Correo de salida» funcionan igual que en
          «Por enviar» (
          <ArticleLink to="correos/revisar-y-enviar" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="como-salio" title="El correo como salió">
        <p>
          El mensaje de un enviado se ve como llegó, con la presentación y la
          firma que tenía al salir. Si después cambian la presentación de la
          agencia o la firma del correo vinculado, lo enviado no cambia.
        </p>
        <p>
          Un correo enviado antes de que Nexus guardara cómo sale cada correo lo
          dice: «Aquí se ve el texto que se escribió; el diseño, el logo y la
          firma con que llegó pueden haber sido otros».
        </p>
        <Callout type="note">
          <p>
            Cada correo enviado queda también en la carpeta de enviados del
            correo vinculado. Si el servidor de correo no acepta la copia, el
            enviado lo dice: «Salió, pero no quedó copia en la carpeta de
            enviados de …». El correo salió igual.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="descartados" title="Descartados">
        <p>
          «Correos → Descartados» guarda lo que no salió: los correos que una
          persona descartó y los que el agente retiró antes de que se enviaran.
          Cada uno dice quién lo descartó y cuándo, y «No se envió». Si quien lo
          descartó escribió un motivo, sigue «Motivo: …».
        </p>
        <Screenshot
          id="correos/descartado"
          caption="Un correo en «Descartados»: el estado «Descartado», quién lo redactó, su responsable, el aviso «Lo descartó Carolina Restrepo Vélez el 10/11/2026 00:44 … No se envió. Motivo: El cliente ya respondió por teléfono.» y su contenido."
        />
        <p>
          El agente ve que el correo se descartó, y su motivo. Un descartado no
          se puede recuperar para enviarlo: si hace falta, se escribe de nuevo (
          <ArticleLink to="correos/escribir-un-correo" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="en-la-ficha"
        title="Los correos de un cliente o una póliza"
      >
        <p>
          La ficha de un cliente y la de una póliza tienen un bloque «Correos»
          con lo que se le escribió desde Nexus —desde la ficha, desde una tarea
          o por el agente— que espera envío o ya salió, del más reciente al más
          antiguo. Cada correo se abre en el mismo panel que en «Correos».
        </p>
        <p>
          Sin correos, el bloque dice «Aún no se le ha escrito desde Nexus», y
          solo lo ve quien puede enviar.
        </p>
      </ArticleSection>
    </>
  );
}
