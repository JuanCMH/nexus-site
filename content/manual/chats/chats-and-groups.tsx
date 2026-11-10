import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-lista", title: "La lista de chats" },
  { id: "de-a-dos", title: "Un chat con una persona" },
  { id: "grupos", title: "Crear un grupo" },
  { id: "administrar", title: "Administrar un grupo" },
  { id: "estado", title: "Tu estado y el de los demás" },
  { id: "quien-lee", title: "Quién lee un chat" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-lista" title="La lista de chats">
        <p>
          Chats, en el menú principal, es la mensajería interna de la agencia:
          chats de a dos y grupos. La lista está en el menú del módulo, con el
          buscador «Buscar en los chats» arriba y tres filtros: «Todos», «No
          leídos» y «Menciones», cada uno con su cifra.
        </p>
        <p>
          Cada fila dice el nombre del chat, la hora del último mensaje, el
          mensaje (o tu borrador, con «Borrador:» delante) y cuántos te faltan
          por leer. Los fijados van arriba, en «Fijados»; los archivados,
          plegados al final en «Archivados». Ctrl+K busca un chat o una persona.
        </p>
        <p>
          Al pasar el cursor sobre una fila aparecen sus acciones: «Marcar como
          leído» o «Marcar como no leído», «Fijar arriba», «Silenciar» y
          «Archivar». Un chat archivado vuelve a la lista cuando te escriben.
        </p>
        <Screenshot
          id="chats/conversacion"
          caption="Chats con el grupo «Comercial» abierto: a la izquierda, la lista con «Todos», «No leídos» y «Menciones»; en el centro, los mensajes; a la derecha, el contexto del grupo."
        />
      </ArticleSection>

      <ArticleSection id="de-a-dos" title="Un chat con una persona">
        <p>
          Haz clic en «Nuevo chat» y elige «Escribir a una persona». El chat con
          cada persona es uno: si ya existe, lo encuentras otra vez en la lista.
          Lo leen solo ustedes dos.
        </p>
        <p>
          Si la otra persona deja la agencia, el chat queda para leer y ya no
          recibe mensajes.
        </p>
      </ArticleSection>

      <ArticleSection id="grupos" title="Crear un grupo">
        <Video id="chats/chats-y-grupos" />
        <p>
          Crear un grupo pide el permiso «Crear grupos». Quien lo crea lo
          administra.
        </p>
        <Steps>
          <Step title="Haz clic en «Nuevo chat» y elige «Crear un grupo»">
            <p>Se abre «Nuevo grupo».</p>
          </Step>
          <Step title="Ponle nombre, foto y descripción">
            <p>
              El «Nombre» es obligatorio. La foto es opcional, de hasta 15 MB.
              La «Descripción» dice para qué es el grupo; la ven todas sus
              personas.
            </p>
          </Step>
          <Step title="Decide si es un grupo de avisos">
            <p>
              Con «Grupo de avisos» encendido, solo escribe quien lo administra;
              los demás leen y reaccionan.
            </p>
          </Step>
          <Step title="Elige las personas y haz clic en «Crear grupo»">
            <p>
              Un grupo admite hasta 100 personas, sin contar al agente. Quien
              entra lee todo lo que se ha escrito.
            </p>
            <Screenshot
              id="chats/nuevo-grupo"
              caption="El formulario «Nuevo grupo»: «Nombre», la foto, «Descripción», el interruptor «Grupo de avisos» y «Personas»."
            />
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="administrar" title="Administrar un grupo">
        <p>
          El contexto del grupo, a la derecha de los mensajes («Ver el
          contexto»), tiene sus personas, los registros que se trajeron al chat,
          los mensajes fijados y los archivos. Quien administra el grupo puede,
          además:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>«Añadir» personas: entran y leen todo lo que ya se escribió.</li>
          <li>
            En el menú de cada persona, «Nombrar administrador» o «Dejar de
            administrar», y «Quitar del grupo».
          </li>
          <li>
            «Editar» el nombre, la foto, la descripción y si es de avisos.
          </li>
          <li>
            «Archivar grupo»: se sigue leyendo y ya no recibe mensajes.
            «Recuperar grupo» lo abre otra vez.
          </li>
        </ul>
        <p>
          Cualquiera puede irse con «Salir del grupo»; para volver, alguien que
          lo administre tiene que añadirlo. Con el permiso «Administrar todos
          los grupos», una persona cambia las personas, el nombre y el estado de
          cualquier grupo de la agencia, pero no lee los mensajes de un grupo
          donde no participa.
        </p>
        <p>
          En «Para ti», cada persona decide lo suyo: «Fijar arriba», «Silenciar»
          (no te avisa de cada mensaje; una mención te avisa igual) y
          «Archivar».
        </p>
      </ArticleSection>

      <ArticleSection id="estado" title="Tu estado y el de los demás">
        <p>
          Tu foto, junto al título «Chats», abre «Tu estado». Elige
          «Disponible», «Ocupado» o «Ausente», escribe una nota si quieres (por
          ejemplo, «En reunión con la aseguradora») y por cuánto tiempo: «Sin
          plazo», «1 hora», «4 horas» u «Hoy».
        </p>
        <ManualTable
          head={["Lo que ves", "Qué significa"]}
          rows={[
            ["En línea", "Tuvo Nexus abierto hace un momento."],
            ["Ocupado o Ausente", "El estado que eligió, con su nota."],
            [
              "Fuera de horario",
              "No está en línea y es fuera del horario de la agencia.",
            ],
            ["Sin conexión", "No tiene Nexus abierto."],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="quien-lee" title="Quién lee un chat">
        <p>
          Un chat lo leen solo quienes participan en él: un chat de a dos, sus
          dos personas, y nadie más. Ningún permiso abre un chat ajeno. El
          agente solo está en los grupos donde lo añaden (
          <ArticleLink to="chats/el-agente-en-un-chat" />
          ).
        </p>
        <p>
          Usar los chats pide el permiso «Usar los chats». La agencia puede
          fijar cuánto se conservan los mensajes, en el bloque «Chats» de
          Configuración; con un plazo, cada madrugada se borra lo que lo pasó.
        </p>
        <Callout type="note">
          <p>
            Lo que se guardó como documento desde un chat no se borra con los
            mensajes (
            <ArticleLink to="chats/escribir-en-un-chat" />
            ).
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
