import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-codigo", title: "De dónde sale el código" },
  { id: "cambiarla", title: "Poner la contraseña nueva" },
  { id: "para-administradores", title: "Si administras la agencia" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-codigo" title="De dónde sale el código">
        <p>
          Para poner una contraseña nueva hace falta un código de un solo uso,
          de doce caracteres en tres grupos (
          <code className="font-mono text-sm">K7QM-2XPA-9RTV</code>), que vale
          30 minutos. Hay dos formas de conseguirlo:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              Si eres el propietario y verificaste tu correo
            </strong>
            , te llega a ese correo. Cómo se verifica está en{" "}
            <ArticleLink to="primeros-pasos/proteger-tu-cuenta" />. Si no lo
            verificaste, escribe a soporte: la dirección está al pie de la
            pantalla de acceso.
          </li>
          <li>
            <strong className="font-medium">Si eres miembro</strong>, pídelo a
            quien administra tu agencia, que lo genera en Configuración →
            Miembros (grupo «Equipo») y te lo entrega en persona o por teléfono.
          </li>
        </ul>
        <p>
          Solo hay un código vigente por persona: si se genera otro, el anterior
          deja de servir.
        </p>
      </ArticleSection>

      <ArticleSection id="cambiarla" title="Poner la contraseña nueva">
        <p>
          En la pantalla de acceso, haz clic en «Olvidé mi contraseña», debajo
          del campo de la contraseña. Se abre «Restablecer la contraseña», en
          tres pasos: «Correo», «Código» y «Contraseña nueva».
        </p>
        <Steps>
          <Step title="Elige de dónde sale el código y escribe tu correo">
            <p>
              Marca «Soy el propietario de la agencia» o «Soy miembro de una
              agencia», y escribe en «Correo de tu cuenta» el correo con el que
              entras. Si ya lo habías escrito al intentar entrar, aparece ahí.
            </p>
            <Screenshot
              id="primeros-pasos/restablecer"
              caption="El primer paso de «Restablecer la contraseña»: «Soy el propietario de la agencia», «Soy miembro de una agencia» y el «Correo de tu cuenta»."
            />
          </Step>
          <Step title="Pide el código o continúa">
            <p>
              Si eres el propietario, haz clic en «Enviarme el código»: llega un
              correo con el asunto «Código para cambiar tu contraseña de Nexus».
              Revisa también el correo no deseado. Si eres miembro, haz clic en
              «Tengo el código».
            </p>
          </Step>
          <Step title="Escribe el código">
            <p>
              En «Código», el que recibiste, y haz clic en «Continuar». Si el
              correo no llegó, «Enviar otro código» pide uno nuevo; entre un
              envío y otro hay que esperar 60 segundos.
            </p>
          </Step>
          <Step title="Escribe la contraseña nueva">
            <p>
              En «Contraseña nueva». Sigue la misma regla que al crear la
              cuenta: al menos 8 caracteres y tres de los cuatro tipos
              (minúsculas, mayúsculas, números y símbolos).
            </p>
          </Step>
          <Step title="Haz clic en «Guardar y entrar»">
            <p>
              Aparece «Contraseña cambiada» y quedas dentro de Nexus. Si el
              código no sirve, la pantalla vuelve al paso «Código» con el
              mensaje.
            </p>
          </Step>
        </Steps>
        <Callout type="note">
          <p>
            Al cambiar la contraseña con un código se cierran todas tus sesiones
            abiertas, en cualquier navegador o computador. Si tienes la
            verificación en dos pasos, Nexus te la sigue pidiendo al entrar.
          </p>
        </Callout>
        <p>
          Tras «Enviarme el código», Nexus responde lo mismo exista o no la
          cuenta, o tenga o no la recuperación por correo: el formulario no
          revela qué correos están registrados.
        </p>
      </ArticleSection>

      <ArticleSection
        id="para-administradores"
        title="Si administras la agencia"
      >
        <p>
          Cuando alguien del equipo olvida su contraseña, el código lo generas
          tú:
        </p>
        <Steps>
          <Step title="Abre Configuración → Miembros">
            <p>
              En la fila de la persona, haz clic en el botón de acciones y luego
              en «Restablecer contraseña».
            </p>
          </Step>
          <Step title="Entrega el código">
            <p>
              Nexus enseña el código en «Código para restablecer la contraseña»,
              una sola vez. Cópialo con «Copiar» y entrégaselo a la persona en
              persona o por teléfono. Vale 30 minutos y sirve una vez.
            </p>
          </Step>
        </Steps>
        <p>
          Lo puede hacer un administrador o el propietario. Nadie restablece su
          propia contraseña desde aquí ni la del propietario, y la de un
          administrador solo la restablece el propietario. Cada código generado
          queda en la bitácora.
        </p>
      </ArticleSection>
    </>
  );
}
