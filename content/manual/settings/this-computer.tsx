import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde-esta", title: "Dónde está" },
  { id: "carpeta", title: "La carpeta de documentos" },
  { id: "arranque", title: "Abrir Nexus al encender el computador" },
  { id: "version", title: "La versión y las actualizaciones" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde-esta" title="Dónde está">
        <p>
          «Este computador» está en Configuración, en el grupo «Tu cuenta», y
          solo en la aplicación de Windows. Reúne lo que se guarda en ese
          computador y no en la nube, así que cada computador tiene el suyo.
        </p>
        <p>
          En el navegador no aparece en el menú: no hay computador que
          configurar. La versión de la web va al pie del menú de Configuración,
          «Versión web», y se actualiza sola al recargar la página. Cómo se
          instala la aplicación está en{" "}
          <ArticleLink to="primeros-pasos/nexus-en-windows" />.
        </p>
      </ArticleSection>

      <ArticleSection id="carpeta" title="La carpeta de documentos">
        <p>
          La carpeta de documentos es del propietario. En su computador, la fila
          «Carpeta de documentos» enseña la ruta, o «Sin carpeta configurada»,
          con «Elegir carpeta» o «Cambiar carpeta». Nexus guarda ahí una copia
          de cada documento, del logo, de las referencias y de los archivos de
          las fichas, y la mantiene igual a sus registros. El propietario la
          elige en cada computador donde entra.
        </p>
        <Callout type="warning">
          <p>
            No guardes, cambies ni borres archivos en esa carpeta: hazlo desde
            Nexus.
          </p>
        </Callout>
        <p>
          Con la carpeta elegida aparece «Verificación de la carpeta». Nexus
          compara la carpeta con sus registros al abrir y cada tres horas; si un
          documento falta o fue cambiado por fuera de Nexus, lo restaura.
          «Verificar ahora» lo hace en el momento. Los archivos que Nexus no
          reconoce no se borran: la fila los lista para que los adjuntes desde
          Documentos o los muevas a otra carpeta.
        </p>
        <p>
          Para el resto del equipo, la fila dice que la carpeta la tiene el
          propietario, en su computador, y que desde ahí los documentos se abren
          y se guardan en la nube. Si ese computador tenía una carpeta de la
          agencia, Nexus dejó de mantenerla sin borrar nada, y «Dejar de usarla»
          la olvida.
        </p>
        <p>
          Más sobre la carpeta en{" "}
          <ArticleLink to="documentos/carpeta-en-el-computador" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="arranque"
        title="Abrir Nexus al encender el computador"
      >
        <p>
          Con el interruptor «Abrir Nexus al encender el computador», Nexus
          arranca en segundo plano para que el agente lo encuentre abierto. Al
          cerrar la ventana, Nexus sigue junto al reloj; se cierra del todo
          desde ese icono.
        </p>
      </ArticleSection>

      <ArticleSection id="version" title="La versión y las actualizaciones">
        <ManualTable
          head={["En «Versión de Nexus»", "Qué hace"]}
          rows={[
            [
              "«Buscar actualizaciones»",
              "Comprueba si hay una versión nueva. Debajo del número de versión, una línea dice lo que encontró.",
            ],
            [
              "«Reiniciar y actualizar»",
              "Aparece cuando la versión nueva ya se descargó: cierra Nexus y lo abre actualizado.",
            ],
          ]}
        />
      </ArticleSection>
    </>
  );
}
