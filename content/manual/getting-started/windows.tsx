import Link from "next/link";
import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "instalar", title: "Instalar Nexus" },
  { id: "actualizaciones", title: "Las actualizaciones" },
  { id: "segundo-plano", title: "El arranque y el icono junto al reloj" },
  { id: "solo-en-windows", title: "Lo que solo hay en Windows" },
  { id: "este-computador", title: "Este computador" },
];

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function Article() {
  return (
    <>
      <ArticleSection id="instalar" title="Instalar Nexus">
        <Steps>
          <Step title="Descarga el instalador">
            <p>
              En{" "}
              <Link href="/descargar" className={linkClassName}>
                Descargar
              </Link>
              , haz clic en «Descargar para Windows». La página dice la versión,
              su fecha y el tamaño del instalador.
            </p>
          </Step>
          <Step title="Abre el instalador">
            <p>
              El instalador aún no está firmado, y por eso Windows muestra un
              aviso antes de abrirlo. Haz clic en «Más información» y luego en
              «Ejecutar de todas formas».
            </p>
          </Step>
          <Step title="Entra con tu cuenta">
            <p>
              Es la misma cuenta del navegador:{" "}
              <ArticleLink to="primeros-pasos/entrar-a-nexus" />.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="actualizaciones" title="Las actualizaciones">
        <p>
          Nexus instalado se actualiza solo. Busca versiones nuevas al arrancar
          y cada pocas horas, y las descarga en segundo plano; mientras tanto,
          el pie del menú dice «Descargando» con el porcentaje.
        </p>
        <p>
          Nexus no se reinicia delante de ti. Cuando la versión está descargada,
          el pie del menú enseña «Reiniciar y actualizar»: haz clic para
          instalarla en ese momento. Si no lo haces, la versión nueva entra
          cuando Nexus está en segundo plano o la próxima vez que se cierra. El
          agente trabaja en la nube: reiniciar Nexus no lo interrumpe.
        </p>
        <p>
          Para comprobarlo sin esperar, en Configuración → Este computador,
          «Versión de Nexus» dice la versión instalada y tiene el botón «Buscar
          actualizaciones».
        </p>
      </ArticleSection>

      <ArticleSection
        id="segundo-plano"
        title="El arranque y el icono junto al reloj"
      >
        <p>
          Nexus instalado arranca con el computador, en segundo plano. Cerrar la
          ventana no lo cierra: queda junto al reloj de Windows, con la sesión
          abierta, para avisarte de lo que te llega y cuidar la carpeta de
          documentos. La primera vez que cierras la ventana, Nexus lo dice con
          el aviso «Nexus sigue abierto».
        </p>
        <p>
          Al pasar el ratón por el icono se lee cuántas notificaciones tienes
          sin leer. Su menú tiene «Abrir Nexus» y «Salir de Nexus», que lo
          cierra del todo.
        </p>
        <p>
          El arranque se cambia en Configuración → Este computador, con «Abrir
          Nexus al encender el computador».
        </p>
      </ArticleSection>

      <ArticleSection id="solo-en-windows" title="Lo que solo hay en Windows">
        <ManualTable
          head={["Función", "En Windows"]}
          rows={[
            [
              "Carpeta de documentos",
              <>
                Una copia de los documentos de la agencia en una carpeta del
                computador, que Nexus vigila:{" "}
                <ArticleLink to="documentos/carpeta-en-el-computador" />.
              </>,
            ],
            [
              "Carpetas de origen de este computador",
              <>
                El archivo que la agencia tenía antes de Nexus en una carpeta
                del computador. Se registra desde ese computador, y para traer
                sus archivos hace falta que esté encendido y con Nexus abierto:{" "}
                <ArticleLink to="documentos/carpetas-de-origen" />.
              </>,
            ],
            [
              "Avisos del computador",
              "Los avisos de Windows, aunque la ventana de Nexus esté cerrada.",
            ],
            [
              "Arranque con el equipo",
              "Nexus abre al encender el computador y sigue junto al reloj.",
            ],
            [
              "Atrás y adelante",
              "Botones en la franja de la ventana, con los atajos Alt+← y Alt+→.",
            ],
          ]}
        />
        <p>Los datos son los mismos que ves en el navegador y en el celular.</p>
        <p>
          La ventana se puede achicar hasta 400 × 320 píxeles, para dejarla en
          cualquier parte de la pantalla. Angosta, Nexus se ordena como en el
          celular, con la barra de abajo:{" "}
          <ArticleLink to="primeros-pasos/nexus-en-el-celular" />.
        </p>
      </ArticleSection>

      <ArticleSection id="este-computador" title="Este computador">
        <p>
          Configuración → Este computador reúne lo que se guarda en ese
          computador y no en la nube: la carpeta de documentos, «Abrir Nexus al
          encender el computador» y «Versión de Nexus». Solo aparece en la
          aplicación instalada.
        </p>
        <Callout type="note">
          <p>
            En el navegador no hay «Este computador»: la versión de Nexus va al
            pie del menú de Configuración, como «Versión web», y se actualiza
            sola al recargar la página.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
