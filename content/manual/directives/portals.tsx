import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-un-recorrido", title: "Qué es un recorrido" },
  { id: "la-lista", title: "La lista de recorridos" },
  { id: "correr-un-recorrido", title: "Correr un recorrido" },
  { id: "cuando-el-portal-cambia", title: "Cuando el portal cambia" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-un-recorrido" title="Qué es un recorrido">
        <p>
          Un recorrido es la secuencia que el computador de los portales sigue
          en el portal de una aseguradora para traer información, sin usar el
          asistente: por ejemplo, «Pólizas vigentes» o «Pólizas canceladas». Los
          recorridos los trae Nexus para cada portal que admite, y un flujo los
          usa para cruzar la cartera con lo que dice la aseguradora.
        </p>
        <p>
          Están en Directrices › «Portales», que ve quien tiene el permiso «Ver
          aseguradoras y ramos». La pantalla es de consulta: enseña qué hace
          cada recorrido, qué flujo lo usa y su última ejecución, pero no sus
          pasos.
        </p>
        <p>
          Un portal aparece aquí cuando está conectado en Configuración ›
          Conexiones (<ArticleLink to="configuracion/conexiones" />
          ). Sin ninguno, la pantalla dice «La agencia no tiene portales
          conectados» y ofrece «Ir a Conexiones».
        </p>
      </ArticleSection>

      <ArticleSection id="la-lista" title="La lista de recorridos">
        <p>
          Hay un bloque por portal conectado, con el nombre de la aseguradora,
          el portal y cuántos recorridos tiene. Cada recorrido dice:
        </p>
        <ManualTable
          head={["Parte", "Qué dice"]}
          rows={[
            ["Nombre y para qué", "Qué trae el recorrido del portal."],
            [
              "Origen",
              "«De Nexus · versión N» o, si se corrigió para la agencia, «Corregido por … el … · versión N», con la insignia «De la agencia».",
            ],
            [
              "Qué flujo lo usa",
              "«Lo usa:» y los flujos de la agencia que lo usan. Si la agencia todavía no trajo el flujo, «Lo usa el flujo de Nexus …, que la agencia aún no ha traído». Si lo usa un flujo que no tienes habilitado, «Lo usa un flujo de la agencia que no tienes habilitado». Si ninguno lo usa, «Ningún flujo lo declara».",
            ],
            [
              "Última ejecución",
              "Su estado y cuándo fue y, si bajó documentos, cuántos archivos quedaron en Documentos. Sin ninguna, «Sin ejecuciones».",
            ],
          ]}
        />
        <ManualTable
          head={["Estado", "Qué significa"]}
          rows={[
            ["En cola", "Espera a que el computador de los portales lo corra."],
            ["En curso", "El computador lo está corriendo."],
            ["Terminó", "Se corrió entero."],
            ["Se detuvo", "Se detuvo en un paso, con el motivo."],
            ["Falló", "No se pudo correr, con el motivo."],
          ]}
        />
        <p>
          El nombre de un flujo en «Lo usa» abre su ficha. El de un flujo de
          Nexus abre su lectura en Flujos de Nexus, desde donde se trae (
          <ArticleLink to="directrices/flujos" />
          ).
        </p>
        {/* CAPTURA directrices/portales: Directrices › Portales con un portal conectado (Sura) y sus recorridos «Pólizas vigentes» y «Pólizas canceladas», uno con su última ejecución «Terminó» y archivos en Documentos | Directrices › Portales: los recorridos de un portal conectado, con su origen, el flujo que los usa, su última ejecución y «Correr». */}
      </ArticleSection>

      <ArticleSection id="correr-un-recorrido" title="Correr un recorrido">
        <p>
          Quien tiene el permiso «Conectar con aseguradoras» ve «Correr» en cada
          recorrido. Al hacer clic, el recorrido se pone en marcha en el
          computador de los portales y el aviso lo dice («Recorrido «Pólizas
          vigentes» en curso en …»). Es la misma acción de Configuración ›
          Conexiones.
        </p>
        <p>«Correr» queda apagado, con el motivo al pasar el puntero, si:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            la sesión del portal está cerrada y el computador de los portales no
            la abre solo;
          </li>
          <li>
            el computador de los portales está apagado o sin Nexus abierto;
          </li>
          <li>ya hay un recorrido en curso en ese portal;</li>
          <li>
            el recorrido pide datos al correr: «Pide datos al correr: lo corre
            el agente».
          </li>
        </ul>
        <p>
          En el celular no hay puntero: el motivo va escrito debajo del
          recorrido.
        </p>
      </ArticleSection>

      <ArticleSection
        id="cuando-el-portal-cambia"
        title="Cuando el portal cambia"
      >
        <p>
          Si la aseguradora cambia su portal y un paso falla, el agente corrige
          el recorrido. La corrección queda como versión de la agencia: el
          recorrido pasa a decir «Corregido por el agente el …» y lleva «De la
          agencia». Desde entonces, el computador de los portales corre esa
          versión en ese portal.
        </p>
        <Callout type="note">
          <p>
            Los recorridos traen datos y documentos del portal. Lo que el agente
            hace con ellos —corregir una póliza, registrar un anexo, bajar una
            carátula— lo dice el flujo que los usa, y queda en su ejecución (
            <ArticleLink to="agente/ejecuciones" />
            ).
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
