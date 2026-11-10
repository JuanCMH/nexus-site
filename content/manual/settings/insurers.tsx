import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-catalogo", title: "El catálogo" },
  { id: "anadir", title: "Añadir aseguradoras" },
  { id: "la-ficha", title: "La ficha de una aseguradora" },
  { id: "lo-que-sabemos", title: "Lo que sabemos" },
  { id: "mantener", title: "Desactivar, fusionar y eliminar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-catalogo" title="El catálogo">
        <p>
          Configuración → Catálogos → «Aseguradoras» lista las compañías con las
          que la agencia emite pólizas. Son las que se eligen al registrar una
          póliza. La pantalla la ve quien tiene el permiso «Ver aseguradoras y
          ramos»; quien ve pólizas las elige al completarlas aunque no lo tenga.
        </p>
        <p>
          Se busca por nombre o NIT y se filtra con «Todos los estados»,
          «Activos», «Inactivos» o «Por confirmar». Al elegir una, su resumen
          sale a la derecha, con «Editar» y «Abrir la ficha».
        </p>
        <p>
          Crear, editar, fusionar y eliminar, llevar las notas de cada
          aseguradora y confirmar lo que propone el agente pide el permiso
          «Administrar aseguradoras y ramos».
        </p>
      </ArticleSection>

      <ArticleSection id="anadir" title="Añadir aseguradoras">
        <p>
          Una agencia que empieza puede precargar el catálogo de Colombia, con
          las compañías autorizadas por la Superintendencia Financiera: en el
          menú «…» de la pantalla, «Precargar catálogo», y luego «Precargar». Si
          alguna ya estaba, no se repite.
        </p>
        <Steps>
          <Step title="Haz clic en «Nueva aseguradora»">
            <p>Arriba a la derecha.</p>
          </Step>
          <Step title="Completa sus datos">
            <p>
              «Nombre», obligatorio, y si los tienes, «NIT», «Grupo asegurador»,
              «Correo de contacto», «Teléfono» y «Sitio web».
            </p>
          </Step>
          <Step title="Haz clic en «Crear aseguradora»">
            <p>
              Si ya está en el catálogo, Nexus lo dice («Ya está en el catálogo:
              …») y no crea otra.
            </p>
          </Step>
        </Steps>
        <p>
          «Grupo asegurador» reúne las compañías de un mismo grupo, como las de
          vida y las de generales de Sura: se escribe el mismo nombre de grupo
          en cada una. El tablero de la agencia suma las aseguradoras por grupo;
          sin grupo, cada compañía es su propio grupo.
        </p>
        <p>
          Quien no administra el catálogo pero tiene «Proponer cambios en la
          configuración» ve «Proponer aseguradora»: la aseguradora queda «Por
          confirmar» hasta que la revisa quien lleva los catálogos. Lo mismo
          pasa con las que propone el agente.
        </p>
      </ArticleSection>

      <ArticleSection id="la-ficha" title="La ficha de una aseguradora">
        <p>
          «Abrir la ficha» lleva a la página de la aseguradora. La cabecera
          tiene sus cifras: «Contactos», «Notas vigentes» y «Pólizas vigentes»,
          que lleva al listado de pólizas filtrado por ella.
        </p>
        <ManualTable
          head={["Bloque", "Qué tiene"]}
          rows={[
            [
              "Datos",
              "El NIT, el grupo asegurador, el correo de contacto, el teléfono y el sitio web.",
            ],
            [
              "Contactos",
              <>
                Quién es quién en la aseguradora y de qué se encarga cada uno.
                Se llevan en Contactos (
                <ArticleLink to="contactos/contactos-y-empresas" />
                ).
              </>,
            ],
            [
              "Accesos",
              "Las cuentas de esta aseguradora que tienes en la bóveda, con «Abrir Accesos». Solo sale si tienes alguna y estás en un computador de confianza.",
            ],
            [
              "Lo que sabemos",
              "Las notas de la agencia sobre la aseguradora. En una pantalla ancha va a la derecha.",
            ],
          ]}
        />
        <Screenshot
          id="configuracion/ficha-de-aseguradora"
          caption="La ficha de Seguros Generales Suramericana: sus cifras en la cabecera, «Datos», «Contactos» con cuatro personas y «Lo que sabemos», todavía sin notas."
        />
      </ArticleSection>

      <ArticleSection id="lo-que-sabemos" title="Lo que sabemos">
        <p>
          Lo que la agencia sabe de una aseguradora va en notas: su apetito
          comercial, lo que pide, cómo opera. Una idea por nota. El agente las
          lee al elegir aseguradora.
        </p>
        <Steps>
          <Step title="Haz clic en «Nueva nota»">
            <p>En el bloque «Lo que sabemos» de la ficha.</p>
          </Step>
          <Step title="Escribe la nota">
            <p>
              En «Nota», el texto. En «Tema», con qué se agrupa en la ficha
              (Apetito comercial, Requisitos, Operación). En «Ramos», a cuáles
              aplica; sin ramos, vale para todos. En «Fuente», de dónde salió:
              un correo, una circular, una reunión.
            </p>
          </Step>
          <Step title="Haz clic en «Añadir nota»" />
        </Steps>
        <Callout type="note">
          <p>
            Una nota describe; un criterio decide. Si una nota choca con un
            criterio de la agencia, manda el criterio.
          </p>
        </Callout>
        <p>
          Las notas que propone el agente, o una persona sin el permiso, esperan
          a que alguien que lleva el catálogo las confirme; confirmada, la nota
          «ya está vigente». «Archivar» quita una nota de la ficha, y el agente
          deja de tenerla en cuenta.
        </p>
      </ArticleSection>

      <ArticleSection id="mantener" title="Desactivar, fusionar y eliminar">
        <p>
          El menú de cada aseguradora en el listado tiene «Editar», «Confirmar»
          (si está por confirmar), «Fusionar con otra…», «Desactivar» o
          «Activar», y «Eliminar».
        </p>
        <ManualTable
          head={["Acción", "Qué pasa"]}
          rows={[
            [
              "Desactivar",
              "Deja de ofrecerse al registrar pólizas. Las pólizas que ya la tienen siguen diciendo su nombre.",
            ],
            [
              "Fusionar con otra…",
              "Las pólizas de esta aseguradora pasan a la que elijas, y esta desaparece del catálogo. No se puede deshacer.",
            ],
            [
              "Eliminar",
              "La quita del catálogo. Si tiene pólizas, no se puede eliminar: se desactiva.",
            ],
          ]}
        />
      </ArticleSection>
    </>
  );
}
