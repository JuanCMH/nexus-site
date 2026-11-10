import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "pedir-un-acceso", title: "Pedir un acceso" },
  { id: "resolver-una-solicitud", title: "Resolver una solicitud" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="pedir-un-acceso" title="Pedir un acceso">
        <p>
          Quien no puede guardar accesos ve «Pedir acceso» en Accesos, con la
          bóveda abierta. La solicitud se escribe: quien no tiene un acceso no
          ve su nombre, así que no se elige de una lista.
        </p>
        <Steps>
          <Step title="Haz clic en «Pedir acceso»">
            <p>
              Está arriba a la derecha o, si aún no tienes accesos, en el centro
              de la pantalla.
            </p>
          </Step>
          <Step title="Escribe la cuenta y para qué la necesitas">
            <p>
              En «Cuenta», cuál necesitas: «Portal de intermediarios de SURA».
              En «Para qué la necesitas», el motivo: «Descargar las carátulas de
              las renovaciones».
            </p>
          </Step>
          <Step title="Haz clic en «Enviar»">
            <p>
              Le llega al propietario y a los administradores. Mientras espera,
              Accesos te lo recuerda: «Pediste «Portal de intermediarios de
              SURA». Le llegó al propietario y a los administradores.».
              «Retirar», en ese aviso, la cancela.
            </p>
          </Step>
        </Steps>
        <p>
          Cuando te conceden el acceso, aparece en tu bóveda y te llega una
          notificación (<ArticleLink to="primeros-pasos/tus-notificaciones" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection
        id="resolver-una-solicitud"
        title="Resolver una solicitud"
      >
        <p>
          Las solicitudes llegan a la bandeja de quien administra la agencia y a
          Accesos → «Solicitudes», bajo «Administración». «Por resolver» dice
          quién pide qué cuenta, para qué y cuándo.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Conceder» abre los accesos de esa persona con su pedido arriba
            («Pidió «…». Marca los accesos que le concedes.»). Marca los que le
            das y haz clic en «Conceder».
          </li>
          <li>«Rechazar» la cierra sin darle nada.</li>
        </ul>
        <p>«Resueltas» guarda las últimas, con quién las resolvió.</p>
        <Callout type="note">
          <p>
            Si la persona aún no ha creado su clave de la bóveda, la solicitud
            lo advierte: no se le puede entregar nada todavía. Pídele que abra
            Accesos y la cree (<ArticleLink to="accesos/abrir-la-boveda" />
            ).
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
