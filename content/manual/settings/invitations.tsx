import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "dos-maneras", title: "Dos maneras de entrar" },
  { id: "codigo-de-la-agencia", title: "El código de la agencia" },
  { id: "invitar", title: "Invitar a una persona" },
  { id: "la-lista", title: "Las invitaciones personales" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="dos-maneras" title="Dos maneras de entrar">
        <p>
          Configuración → Equipo → «Invitaciones» reúne las dos maneras de
          entrar a la agencia. La ve quien tiene el permiso «Invitar personas»,
          que es delicado: el código deja entrar a la agencia.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">El código de la agencia</strong>:
            uno solo, de 8 caracteres, que sirve todas las veces. Quien entra
            con él lo hace como Miembro.
          </li>
          <li>
            <strong className="font-medium">Una invitación personal</strong>: un
            código de un solo uso, para una persona, con su rol y una fecha de
            caducidad. Empieza por{" "}
            <code className="font-mono text-sm">INV-</code>.
          </li>
        </ul>
        <p>
          Lo que hace la persona con el código está en{" "}
          <ArticleLink to="primeros-pasos/entrar-a-tu-agencia" />.
        </p>
      </ArticleSection>

      <ArticleSection id="codigo-de-la-agencia" title="El código de la agencia">
        <p>
          El bloque «Código de invitación» enseña el «Código vigente». «Copiar»
          lo lleva al portapapeles.
        </p>
        <p>
          «Regenerar» crea uno nuevo. El anterior deja de funcionar de
          inmediato, y quien lo esté usando en ese momento ya no puede unirse
          con él. Es lo que conviene hacer si el código llegó a quien no debía.
        </p>
      </ArticleSection>

      <ArticleSection id="invitar" title="Invitar a una persona">
        <Video id="configuracion/invitar-a-una-persona" />
        <Steps>
          <Step title="Haz clic en «Invitar a una persona»">
            <p>Arriba a la derecha, en «Invitaciones» o en «Miembros».</p>
          </Step>
          <Step title="Completa la invitación">
            <p>
              En «Persona invitada», su nombre o su correo, para reconocer la
              invitación en la lista. En «Rol», el rol con el que entra: Miembro
              o uno de los roles de la agencia que puedes asignar. Dar un rol
              distinto de Miembro pide el permiso «Asignar roles y permisos
              adicionales», y una invitación nunca da el rol de administrador.
              En «Caducidad», 1, 3, 7, 15 o 30 días; si no la cambias, 7.
            </p>
            <Screenshot
              id="configuracion/invitar-a-una-persona"
              caption="«Invitar a una persona»: la persona invitada, el rol Miembro y la caducidad «En 7 días»."
            />
          </Step>
          <Step title="Haz clic en «Crear invitación»">
            <p>
              Se abre «Invitación creada» con el código y un «Mensaje para
              enviarle» que lo incluye. «Copiar código» y «Copiar mensaje» los
              llevan al portapapeles.
            </p>
          </Step>
        </Steps>
        <Callout type="warning">
          <p>
            El código no se vuelve a mostrar: cópialo antes de cerrar. Si se
            pierde, anula la invitación y crea otra.
          </p>
        </Callout>
        <p>
          Si la agencia tiene un correo vinculado desde el que se puede enviar y
          tu rol tiene «Enviar los correos que redacta el agente» y «Conectar el
          agente y definir su horario», la ventana ofrece además «Preparar un
          correo»: escribes el correo de la persona, eliges el correo vinculado
          y el mensaje queda en Correos → Por enviar, para que una persona lo
          revise y lo envíe.
        </p>
      </ArticleSection>

      <ArticleSection id="la-lista" title="Las invitaciones personales">
        <p>
          El bloque «Invitaciones personales» lista las pendientes y las últimas
          que se usaron, caducaron o se anularon. Cada invitación pendiente
          ocupa un lugar de usuario en «Uso y plan» hasta que se usa, caduca o
          se anula.
        </p>
        <ManualTable
          head={["La fila dice", "Qué significa"]}
          rows={[
            [
              "«Caduca el …»",
              "Está pendiente. Lleva el rol con el que entra y quién la creó. «Anular» la deja sin efecto de inmediato.",
            ],
            ["«La usó … el …»", "La persona ya entró con ella."],
            ["«Caducó el …»", "Pasó su fecha sin usarse."],
            ["«Anulada el …»", "Alguien la anuló antes de que se usara."],
          ]}
        />
        <p>
          Para invitar otra vez a alguien cuya invitación caducó o se anuló, se
          crea una invitación nueva.
        </p>
      </ArticleSection>
    </>
  );
}
