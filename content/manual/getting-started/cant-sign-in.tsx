import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "al-entrar", title: "Al entrar" },
  { id: "al-crear-la-cuenta", title: "Al crear la cuenta" },
  { id: "con-un-codigo", title: "Con un código" },
  { id: "dos-pasos", title: "En la verificación en dos pasos" },
  { id: "demasiados-intentos", title: "Demasiados intentos" },
  { id: "otras-pantallas", title: "Otras pantallas" },
];

type Problem = { message: string; answer: React.ReactNode };

function Problems({ items }: { items: Problem[] }) {
  return (
    <dl className="divide-y divide-border/60 border-y border-border/60">
      {items.map((item) => (
        <div key={item.message} className="py-4">
          <dt className="font-medium">«{item.message}»</dt>
          <dd className="mt-1 text-muted-foreground">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Article() {
  return (
    <>
      <ArticleSection id="al-entrar" title="Al entrar">
        <Problems
          items={[
            {
              message: "No se pudo entrar. Revisa el correo y la contraseña.",
              answer: (
                <>
                  El correo o la contraseña no coinciden con ninguna cuenta.
                  Revisa que el correo esté bien escrito y usa el icono del ojo
                  para ver la contraseña. Al tercer intento, el mensaje ofrece
                  «restablécela con un código»; también puedes seguir{" "}
                  <ArticleLink to="primeros-pasos/recuperar-tu-contrasena" />.
                </>
              ),
            },
          ]}
        />
        <p>
          Si la pantalla dice «Hola de nuevo» con un correo que no es el tuyo,
          haz clic en «Usar otra cuenta».
        </p>
      </ArticleSection>

      <ArticleSection id="al-crear-la-cuenta" title="Al crear la cuenta">
        <Problems
          items={[
            {
              message:
                "Para crear una cuenta necesitas un código vigente: el de invitación de tu agencia, que te entrega su administrador, o uno de activación de Nexus sin usar",
              answer:
                "El código no existe, ya se usó, caducó o fue anulado. La pantalla vuelve al paso «Código» sin perder lo demás. Pide uno nuevo a quien te lo entregó.",
            },
            {
              message: "No se pudo entrar. Revisa el correo y la contraseña.",
              answer:
                "Al crear la cuenta, lo más frecuente es que ese correo ya tenga una. Entra con él desde «Entrar»; si no recuerdas la contraseña, restablécela.",
            },
            {
              message:
                "La contraseña debe tener al menos 8 caracteres y tres de estos tipos: minúsculas, mayúsculas, números y símbolos",
              answer:
                "Mira los requisitos bajo el campo: cada uno se marca al cumplirse, y la línea de abajo tiene que decir «Cumple».",
            },
          ]}
        />
        <p>
          Si el botón «Continuar» del paso «Código» no se activa, lo escrito no
          tiene la forma de ningún código: revisa que esté completo.
        </p>
      </ArticleSection>

      <ArticleSection id="con-un-codigo" title="Con un código">
        <Problems
          items={[
            {
              message:
                "Ese código no es válido: no existe, ya se usó, caducó o fue anulado.",
              answer:
                "En «Tengo un código»: el código de la agencia pudo haberse regenerado, o la invitación ya se usó o caducó. Pide uno nuevo a quien administra la agencia.",
            },
            {
              message:
                "Ese código de activación no es válido: no existe, ya se usó, venció o fue anulado.",
              answer:
                "Un código de activación sirve una sola vez. Si no lo usaste tú, escribe a soporte.",
            },
            {
              message:
                "La agencia llegó al máximo de usuarios de su plan. Para sumar más, hay que ampliar el plan",
              answer:
                "El código sirve, pero la agencia no tiene cupo. Avísale a quien la administra.",
            },
            {
              message:
                "El código para restablecer la contraseña no es válido o ya venció. Pide uno nuevo",
              answer:
                "Pasaron más de 30 minutos, el código está mal copiado o se generó otro después. Pide uno nuevo.",
            },
            {
              message:
                "El código no es correcto o ya venció. Revisa el último correo o pide otro",
              answer:
                "Al verificar tu correo: usa el código del último correo que llegó, antes de 15 minutos.",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="dos-pasos" title="En la verificación en dos pasos">
        <Problems
          items={[
            {
              message:
                "El código no es correcto o ya se usó. Espera a que la aplicación muestre uno nuevo e inténtalo otra vez",
              answer:
                "El código de la aplicación cambia cada pocos segundos. Escribe el que aparece en ese momento o, con «Usar un código de recuperación», uno de tus códigos de recuperación. Si la hora de tu celular no está en automático, los códigos no coinciden.",
            },
          ]}
        />
        <p>
          Si perdiste la aplicación y los códigos de recuperación, el
          propietario de la agencia puede quitarte la verificación en dos pasos:{" "}
          <ArticleLink to="primeros-pasos/proteger-tu-cuenta" />.
        </p>
      </ArticleSection>

      <ArticleSection id="demasiados-intentos" title="Demasiados intentos">
        <p>
          Los códigos tienen un límite de intentos: los de la verificación en
          dos pasos, los de restablecer la contraseña, los del correo y los de
          invitación y activación. Al pasarlo, Nexus responde «Has hecho
          demasiadas solicitudes. Intenta de nuevo en…» con los segundos que
          faltan. Espera ese tiempo y vuelve a intentarlo.
        </p>
      </ArticleSection>

      <ArticleSection id="otras-pantallas" title="Otras pantallas">
        <Problems
          items={[
            {
              message: "Recarga Nexus",
              answer:
                "En el navegador, la pestaña quedó con una versión anterior de Nexus. Haz clic en «Recargar la página».",
            },
            {
              message: "Actualiza Nexus",
              answer:
                "En Windows, la versión instalada ya no funciona con Nexus. Espera a que descargue la nueva y haz clic en «Reiniciar y actualizar».",
            },
            {
              message: "Sin conexión",
              answer:
                "En el navegador o en el celular, el equipo no tiene internet. Nexus necesita red para mostrar y guardar los datos, y vuelve solo en cuanto la hay; «Reintentar» recarga la página.",
            },
          ]}
        />
        <p>
          Si nada de esto lo resuelve, escribe a soporte: la dirección está al
          pie de la pantalla de acceso, en «¿Necesitas ayuda? Escribe a
          soporte».
        </p>
      </ArticleSection>
    </>
  );
}
