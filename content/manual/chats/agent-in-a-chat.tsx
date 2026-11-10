import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde-esta", title: "Dónde está el agente" },
  { id: "anadirlo", title: "Añadir el agente a un grupo" },
  { id: "mencionarlo", title: "Pedirle algo" },
  { id: "lo-que-no-hace", title: "Lo que no hace en un chat" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde-esta" title="Dónde está el agente">
        <p>
          El agente de la agencia solo está en los grupos donde una persona lo
          añade. No tiene chats de a dos y no lee ningún otro chat. En un grupo
          con el agente, la cabecera lo dice («4 personas y el agente») y la
          lista de personas lo enseña al final: «Lee y escribe en este grupo.
          Mencionarlo le deja una tarea.».
        </p>
      </ArticleSection>

      <ArticleSection id="anadirlo" title="Añadir el agente a un grupo">
        <p>
          Añadirlo pide el permiso «Añadir el agente a un grupo» y que la
          agencia tenga su agente conectado (
          <ArticleLink to="agente/conectar-el-asistente" />
          ). Al darlo, el rol advierte: «Una IA lee lo que el equipo escribe en
          ese grupo».
        </p>
        <Steps>
          <Step title="Abre el contexto del grupo">
            <p>
              Con «Ver el contexto», en la cabecera del grupo. En «Personas», al
              final, la fila del agente dice «Con el agente en el grupo, se le
              escribe aquí: lee los mensajes del grupo y responde a quien lo
              menciona.».
            </p>
          </Step>
          <Step title="Haz clic en «Añadir»">
            <p>El agente entra al grupo y lee lo que se escribió.</p>
            <Screenshot
              id="chats/anadir-agente"
              caption="El contexto del grupo «Comercial»: sus personas y, al final, la fila del agente con «Añadir»."
            />
          </Step>
        </Steps>
        <p>
          Para sacarlo, «Quitar» en su fila. Lo puede quitar quien administra el
          grupo o quien tiene el permiso de añadirlo. En un grupo archivado no
          se añade.
        </p>
      </ArticleSection>

      <ArticleSection id="mencionarlo" title="Pedirle algo">
        <p>
          Escribe <code className="font-mono text-sm">@</code> y elige «Agente»:
          en la lista dice «Le deja una tarea». Al enviar el mensaje, Nexus crea
          una tarea delegada al agente, a tu cargo, con el título «Mensaje de»
          tu nombre «en» el grupo y tu mensaje como descripción. El mensaje
          enlaza «Ver la tarea».
        </p>
        <Screenshot
          id="chats/mencion-agente"
          caption="El grupo «Operaciones» con «@» escrito: la lista de personas del chat y, al final, «Agente» con «Le deja una tarea»."
        />
        <p>
          El agente la atiende con tus permisos, como cualquier tarea que le
          delegas, y responde en el mismo grupo (
          <ArticleLink to="tareas/delegar-al-agente" />
          ). En su panel, «Creada por» dice «Desde un mensaje de un chat» y
          lleva al mensaje.
        </p>
        <Callout type="note">
          <p>
            Mencionar al agente pide el permiso «Crear tareas». Sin él, el
            mensaje no se envía.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="lo-que-no-hace" title="Lo que no hace en un chat">
        <ul className="list-disc space-y-2 pl-5">
          <li>No adjunta archivos: escribe y trae registros.</li>
          <li>No escribe en un grupo de avisos.</li>
          <li>
            Una mención al agente no se puede programar: va en un mensaje
            enviado al momento.
          </li>
          <li>
            Lo que propone por la tarea (un cliente, una póliza, un correo por
            enviar) espera a una persona, igual que fuera del chat.
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}
