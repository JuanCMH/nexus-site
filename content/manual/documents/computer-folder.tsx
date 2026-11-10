import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es la carpeta" },
  { id: "elegirla", title: "Elegir la carpeta" },
  { id: "la-verificacion", title: "La verificación" },
  { id: "los-demas", title: "Los demás computadores" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es la carpeta">
        <p>
          En la aplicación para Windows, el propietario de la agencia tiene una
          carpeta en su computador con una copia de cada documento, del logo, de
          las referencias y de los archivos de las fichas. Nexus la mantiene
          igual a sus registros, con el mismo orden que se ve en Documentos.
          Solo existe en la aplicación para Windows y solo para el propietario;
          en la web no hay carpeta.
        </p>
        <Callout type="warning">
          <p>
            Nadie trabaja en la carpeta: ni las personas ni el agente. No
            guardes, cambies ni borres archivos en ella. Lo que se adjunta, se
            renombra o se elimina, se hace en Nexus, y Nexus lleva el cambio a
            la carpeta.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="elegirla" title="Elegir la carpeta">
        <Steps>
          <Step title="Abre Configuración → Este computador">
            <p>
              La pantalla está en la aplicación para Windows, en el grupo «Tu
              cuenta» de Configuración. También se llega desde «Este
              computador», en el menú de Documentos.
            </p>
          </Step>
          <Step title="Haz clic en «Elegir carpeta»">
            <p>
              En «Carpeta de documentos», elige dónde la quieres en tu
              computador. Si ya tiene una, el botón es «Cambiar carpeta» y la
              ruta se lee encima.
            </p>
          </Step>
          <Step title="Espera la primera verificación">
            <p>
              Nexus dice «Carpeta de documentos actualizada» y trae a la carpeta
              los documentos de la agencia.
            </p>
          </Step>
        </Steps>
        <p>
          La carpeta se elige en cada computador donde entras como propietario.
          Con ella elegida, lo que adjuntas desde ese computador se guarda en la
          carpeta y en la nube; sin ella, solo en la nube, y la ventana de
          adjuntar lo dice.
        </p>
      </ArticleSection>

      <ArticleSection id="la-verificacion" title="La verificación">
        <p>
          Nexus compara la carpeta con sus registros al abrir la aplicación y
          cada tres horas, y «Verificar ahora», en «Verificación de la carpeta»,
          lo hace en el momento. La línea de estado dice, por ejemplo, cuántos
          documentos coinciden con Nexus y cuándo se verificó.
        </p>
        <ManualTable
          head={["Si en la carpeta…", "Nexus…"]}
          rows={[
            ["Falta un documento", "Lo vuelve a traer de la nube."],
            [
              "Un documento cambió por fuera de Nexus",
              "Conserva el archivo cambiado al lado, con otro nombre, y repone el original.",
            ],
            [
              "Un documento cambió de carpeta en Nexus",
              "Lo mueve a su carpeta nueva.",
            ],
            [
              "Un documento se eliminó en Nexus",
              "Lo quita de la carpeta, si su contenido es el mismo que se eliminó.",
            ],
            [
              "Hay un archivo que Nexus no reconoce",
              "No lo borra: lo lista en «Verificación de la carpeta».",
            ],
          ]}
        />
        <p>
          Cuando tuvo que reparar algo, Nexus lo avisa al abrir, con lo que
          hizo: «Nexus restauró 1 documento que faltaba en la carpeta de este
          computador», por ejemplo. El detalle queda en Configuración → Este
          computador.
        </p>
        <Callout type="tip">
          <p>
            Si un archivo que Nexus no reconoce debe estar en Nexus, adjúntalo
            desde Documentos (
            <ArticleLink to="documentos/subir-y-vincular" />
            ); si no, muévelo a otra carpeta de tu computador.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="los-demas" title="Los demás computadores">
        <p>
          Quien no es el propietario no tiene carpeta. En Configuración → Este
          computador se lee: «La carpeta de la agencia la tiene el propietario,
          en su computador. Desde aquí los documentos se abren y se guardan en
          la nube.»
        </p>
        <p>
          Si ese computador tenía una carpeta de la agencia, Nexus deja de
          mantenerla y no borra nada de ella. «Dejar de usarla» la olvida en ese
          computador; los archivos se pueden conservar o borrar.
        </p>
        <p>
          La pantalla completa de Configuración → Este computador se explica en{" "}
          <ArticleLink to="configuracion/este-computador" />.
        </p>
      </ArticleSection>
    </>
  );
}
