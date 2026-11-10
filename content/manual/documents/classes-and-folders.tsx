import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "organizacion", title: "Documentos → Organización" },
  { id: "clases", title: "Clases de documento" },
  { id: "carpetas-de-la-agencia", title: "Carpetas de la agencia" },
  { id: "orden-de-la-carpeta", title: "El orden de la carpeta" },
  { id: "el-agente", title: "Lo que hace el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="organizacion" title="Documentos → Organización">
        <p>
          Cada agencia decide cómo se organizan sus documentos: qué clases usa,
          qué carpetas propias tiene y en qué orden se arma la carpeta de cada
          cliente. Las tres cosas están en Documentos → Organización, en el
          grupo «Ajustes» del menú del módulo. En el mismo grupo está «Carpetas
          de origen», el archivo que la agencia tenía antes de Nexus (
          <ArticleLink to="documentos/carpetas-de-origen" />
          ).
        </p>
        <p>
          Todos los que ven los documentos leen la organización. Para crear,
          editar o eliminar clases y carpetas, y para cambiar el orden, tu rol
          necesita el permiso «Organizar documentos».
        </p>
      </ArticleSection>

      <ArticleSection id="clases" title="Clases de documento">
        <p>
          Una clase dice qué es un documento: una póliza, un anexo, una cédula.
          Cada documento tiene una clase o ninguna. La agencia empieza sin
          clases, y la tarjeta «Clases de documento» ofrece una lista de
          partida, sacada de lo que guardan las agencias de seguros: se marcan
          las que sirven y se crean con «Crear las elegidas». Después se editan
          como cualquier otra.
        </p>
        <Screenshot
          id="documentos/clases-sugeridas"
          caption="La tarjeta «Clases de documento» de una agencia sin clases: la lista de partida, cada clase con su descripción, y el botón «Crear las elegidas»."
        />
        <p>
          «Nueva clase» pide «Nombre», «Color» y «Cuándo se usa»: qué documentos
          lleva. El agente lee esa descripción para clasificar lo que guarda. El
          menú de cada clase tiene «Editar» y «Eliminar o fusionar».
        </p>
        <p>
          Al eliminar una clase con documentos, «Sus documentos pasan a» pide a
          qué clase pasan, o «Quedan sin clase». Elegir otra clase es
          fusionarlas. Ningún documento se borra.
        </p>
        <p>
          La clase de un documento se pone al adjuntarlo, o después con
          «Clasificar», en su menú «Más acciones». Con clases, el menú del
          módulo enseña una entrada por clase y «Sin clase», con lo que falta
          clasificar.
        </p>
      </ArticleSection>

      <ArticleSection
        id="carpetas-de-la-agencia"
        title="Carpetas de la agencia"
      >
        <p>
          Las carpetas de la agencia van dentro de «Información de la agencia» y
          son para lo que no es de ningún cliente: formatos, convenios,
          circulares. Pueden tener subcarpetas.
        </p>
        <p>
          «Nueva carpeta», en la tarjeta «Carpetas de la agencia» o dentro de
          «Información de la agencia», pide «Nombre», «Dentro de» (la carpeta
          madre) y «Descripción»: qué va en ella, que es lo que lee el agente
          para decidir qué guarda ahí. El menú de cada carpeta tiene «Editar o
          mover» y la opción de eliminarla. Si cambia el nombre o el lugar,
          Nexus mueve sus documentos en cada computador.
        </p>
        <p>
          Al eliminar una carpeta, sus documentos y subcarpetas pasan a la que
          elijas. Sin carpeta, los documentos quedan en «Sin cliente» y las
          subcarpetas, en el primer nivel. No se borra ningún documento.
        </p>
        <p>
          Las carpetas de Nexus (Informes, Correos enviados, Referencias, Logo y
          Estados de cuenta) aparecen en la misma tarjeta con «De Nexus: no se
          renombra ni se elimina». Un documento de un cliente o de una póliza no
          va a una carpeta de la agencia: su carpeta es la de su dueño.
        </p>
      </ArticleSection>

      <ArticleSection id="orden-de-la-carpeta" title="El orden de la carpeta">
        <p>
          «Orden de la carpeta» dice con qué carpetas arma Nexus la ruta de cada
          documento de un cliente, en la carpeta del propietario y en el
          explorador. Por omisión es Cliente / Póliza / archivo. Lleva de uno a
          cuatro niveles, sin repetir, y el nombre del archivo va siempre al
          final.
        </p>
        <ManualTable
          head={["Nivel", "Nombre de la carpeta", "Si falta el dato"]}
          rows={[
            ["Cliente", "El nombre del cliente.", "«Sin cliente»"],
            ["Póliza", "«Póliza» y su número.", "«General»"],
            ["Ramo", "El ramo de la póliza.", "«Sin ramo»"],
            [
              "Aseguradora",
              "La aseguradora de la póliza.",
              "«Sin aseguradora»",
            ],
            ["Año de vigencia", "El año del inicio de vigencia.", "«Sin año»"],
            ["Clase de documento", "La clase del documento.", "«Sin clase»"],
          ]}
        />
        <p>
          Los campos de selección y de fecha de las plantillas también pueden
          ser un nivel; los campos reservados, no. Al editar, «Así quedarían»
          enseña la ruta de ejemplo de documentos reales, y «Orden de siempre»
          vuelve a Cliente / Póliza.
        </p>
        <Screenshot
          id="documentos/orden-de-la-carpeta"
          caption="La tarjeta «Orden de la carpeta» en edición: los niveles del primero al último, los niveles disponibles y «Así quedarían», con la ruta de documentos reales."
        />
        <p>
          «Guardar orden» pide confirmarlo: Nexus reubica los documentos de
          clientes en la carpeta de cada computador, sin borrar ningún archivo,
          y se puede volver al orden de antes. Mientras reubica, la tarjeta dice
          cuántos lleva revisados y movidos, y el orden no se vuelve a cambiar
          hasta que termina. Lo que no es de ningún cliente no cambia con el
          orden.
        </p>
      </ArticleSection>

      <ArticleSection id="el-agente" title="Lo que hace el agente">
        <p>
          El agente crea y edita clases y carpetas de la agencia, y clasifica
          los documentos que guarda. Lo que crea o cambia lleva la marca «Creada
          por el agente» o «Cambiada por el agente» hasta que una persona con
          «Organizar documentos» lo da por revisado con «Dar por revisada».
        </p>
        <Callout type="note">
          <p>
            Eliminar o fusionar una clase, eliminar una carpeta y cambiar el
            orden, el agente solo los puede pedir, y los aprueba una persona con
            «Organizar documentos». El agente nunca elimina un documento. Cómo
            se revisa lo que pide está en{" "}
            <ArticleLink to="agente/permisos-y-solicitudes" />.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
