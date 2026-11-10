import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es-un-flujo", title: "Qué es un flujo" },
  { id: "el-listado", title: "El listado" },
  { id: "la-ficha", title: "La ficha de un flujo" },
  {
    id: "nexus-y-la-agencia",
    title: "Los flujos de Nexus y los de la agencia",
  },
  { id: "quien-tiene-acceso", title: "Quién tiene acceso" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es-un-flujo" title="Qué es un flujo">
        <p>
          Un flujo es un trabajo del agente escrito paso a paso: leer un correo
          vinculado, registrar un documento, atender las tareas delegadas,
          cotizar cumplimiento. Los criterios de la agencia mandan sobre el
          flujo: si un criterio dice otra cosa, el agente sigue el criterio.
          Cada flujo dice para qué sirve, qué hace el agente en orden, qué deja
          en Nexus, qué no le toca y cuándo se detiene.
        </p>
        <p>
          El agente sigue la versión publicada de cada flujo cuando se le pide
          ese trabajo. Nexus no ejecuta los flujos por su cuenta ni los ata a un
          horario: un flujo es un texto, y quien decide cuándo se usa es la
          agencia.
        </p>
        <p>
          Los flujos están en{" "}
          <strong className="font-medium">Directrices</strong>, en el grupo
          «Recursos» del menú principal. El menú del módulo tiene «Flujos»,
          «Portales», «Criterios», «Reparto» y «Referencias» y, bajo «Ajustes»,
          «Flujos de Nexus», «Categorías» y «Temas». «Portales» lo ve quien ve
          las aseguradoras (<ArticleLink to="directrices/portales" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="el-listado" title="El listado">
        <p>
          «Flujos» enseña los flujos de la agencia que puedes ver, en el orden
          de sus categorías. Cada fila lleva el nombre, la categoría, una línea
          que dice qué hace, su responsable y, si el agente ya lo siguió, cuándo
          fue la última vez («Se ejecutó hace 4 h»).
        </p>
        <Screenshot
          id="directrices/flujos-lista"
          caption="Directrices → Flujos: los flujos de la agencia con su categoría, la insignia «Cambió en Nexus» en los que Nexus cambió, su responsable y la última ejecución."
        />
        <p>
          Arriba se busca por nombre o por para qué sirve. El filtro de estado
          tiene «Activos», «Con borrador» y «Archivados»; el de categoría
          aparece cuando hay flujos en más de una.
        </p>
        <p>Junto al nombre, una insignia dice lo que pide una decisión:</p>
        <ManualTable
          head={["Insignia", "Qué significa"]}
          rows={[
            [
              "Sin insignia",
              "El flujo está publicado y no tiene cambios pendientes.",
            ],
            [
              "«Borrador»",
              "Una persona dejó cambios sin publicar. El agente sigue con la versión vigente.",
            ],
            [
              "«Sin publicar»",
              "El flujo nunca se ha publicado. El agente no lo ve.",
            ],
            [
              "«Por confirmar»",
              "El agente escribió el flujo y nadie lo ha publicado.",
            ],
            [
              "«Cambio por confirmar»",
              "El agente dejó cambios en un flujo publicado.",
            ],
            [
              "«Archivado»",
              "El agente no lo ve ni lo sigue. Se puede recuperar.",
            ],
            [
              "«Cambió en Nexus»",
              "Nexus cambió el flujo del que salió esta copia. La copia de la agencia no cambió.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="la-ficha" title="La ficha de un flujo">
        <p>
          Al abrir un flujo, la cabecera dice su «Versión vigente», su
          «Categoría», su «Origen» («Nexus 0.51.0» si salió de un flujo de
          Nexus, «De la agencia» o «Creado por el agente») y su «Responsable».
          Debajo va el «Para qué» entero.
        </p>
        <Screenshot
          id="directrices/flujo-ficha"
          caption="La ficha de «Leer correos»: la versión vigente, la categoría, el origen, el responsable, el aviso de que el flujo cambió en Nexus y la pestaña «Pasos»."
        />
        <p>La ficha tiene cinco pestañas:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Pasos</strong>: lo que el agente
            hace, en orden, y las referencias de la agencia que recibe con el
            flujo.
          </li>
          <li>
            <strong className="font-medium">Límites</strong>: «Qué deja en
            Nexus», «Qué no hace» y «Cuándo se detiene». Debajo, el «Marco de
            Nexus», que pone Nexus y no se edita: alcance, contexto, permisos y
            cómo se registra la ejecución.
          </li>
          <li>
            <strong className="font-medium">Ejecuciones</strong>: las últimas
            veces que el agente siguió el flujo, con la versión que usó, su
            resumen y su estado («En curso», «Terminada», «Incompleta», «Con
            error» o «Abandonada»). Si tu rol tiene el permiso «Ver el agente»,
            cada una se abre con su detalle.
          </li>
          <li>
            <strong className="font-medium">Versiones</strong>: cada
            publicación, de la más reciente a la más antigua.
          </li>
          <li>
            <strong className="font-medium">Acceso</strong>: el responsable y
            quién más ve el flujo.
          </li>
        </ul>
        <p>
          Si un flujo nombra una herramienta que la versión de Nexus no tiene,
          la ficha lo avisa: el agente se detendrá al llegar a ese paso.
        </p>
      </ArticleSection>

      <ArticleSection
        id="nexus-y-la-agencia"
        title="Los flujos de Nexus y los de la agencia"
      >
        <p>
          Nexus trae sus propios flujos, en Directrices → «Flujos de Nexus»,
          agrupados por tema: «Correo y documentos», «Clientes y pólizas»,
          «Tareas y dudas», «Consultas e informes» y «Agencia y equipo». No se
          editan y cambian con cada versión de Nexus.
        </p>
        <p>
          En «Clientes y pólizas» está «Traer una carpeta de origen»: el agente
          recorre una carpeta de origen de la agencia por partes, trae a Nexus
          lo que sirve, lo liga a su cliente y a su póliza y completa los
          registros. No mueve ni borra nada en la carpeta (
          <ArticleLink to="documentos/carpetas-de-origen" />
          ).
        </p>
        <p>
          El agente no sigue los flujos de Nexus sino los de la agencia. Para
          usar uno, quien puede cambiar flujos hace clic en «Traer»: la agencia
          recibe una copia, que es la que se adapta y la que sigue el agente.
          Los que ya están en la agencia llevan «En la agencia». Al hacer clic
          en un flujo de Nexus se lee entero antes de traerlo.
        </p>
        <Screenshot
          id="directrices/flujos-de-nexus"
          caption="Directrices → Flujos de Nexus: los flujos que trae Nexus, por grupo, con «Traer una carpeta de origen» en «Clientes y pólizas» y «En la agencia» en los que la agencia ya trajo."
        />
        <p>
          La agencia también puede escribir flujos propios con «Nuevo flujo».
          Cómo se crea, se edita y se publica un flujo está en{" "}
          <ArticleLink to="directrices/editar-y-publicar-un-flujo" />.
        </p>
      </ArticleSection>

      <ArticleSection id="quien-tiene-acceso" title="Quién tiene acceso">
        <p>
          Cada flujo tiene un responsable y una lista de personas que lo ven.
          Quien administra la agencia los ve todos. Quien no tiene acceso a un
          flujo no lo ve en Nexus, y el agente no lo sigue por encargo suyo.
        </p>
        <p>
          En la pestaña «Acceso», quien administra la agencia hace clic en
          «Cambiar». En «Personas con acceso» elige el «Responsable» y activa a
          cada persona que debe ver el flujo. El propietario, los
          administradores y el responsable quedan activados sin poder quitarse.
          «Guardar cambios» aplica el cambio.
        </p>
        <Screenshot
          id="directrices/flujo-acceso"
          caption="«Personas con acceso» de «Leer correos»: el responsable y, en la lista, quién administra la agencia y quién lo ve."
        />
        <p>Lo que cada persona puede hacer depende de su rol:</p>
        <ManualTable
          head={["Quién", "Qué puede hacer"]}
          rows={[
            [
              "Todo el equipo",
              "Ve los flujos que le habilitaron y los que tiene a cargo.",
            ],
            [
              "«Crear y cambiar flujos»",
              "Trae un flujo de Nexus, escribe uno propio, lo edita, lo publica y lo archiva, entre los flujos que puede ver.",
            ],
            [
              "«Proponer cambios en la configuración»",
              "Edita el borrador de un flujo con «Proponer cambios». Lo publica quien lleva los flujos.",
            ],
            [
              "Propietario y administradores",
              "Ven todos los flujos y deciden quién ve cada uno y quién es su responsable.",
            ],
          ]}
        />
        <Callout type="note">
          <p>
            Si no ves «Flujos» en el menú de Directrices, no tienes ningún flujo
            habilitado ni el permiso para cambiarlos. Pídelo a quien administra
            la agencia.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
