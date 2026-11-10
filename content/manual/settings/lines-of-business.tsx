import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "el-catalogo", title: "El catálogo" },
  { id: "crear", title: "Crear un ramo" },
  { id: "comision", title: "La comisión por defecto" },
  { id: "no-se-renueva", title: "Ramos que no se renuevan" },
  { id: "derivan-de-otra", title: "Pólizas que derivan de otra" },
  { id: "forma-de-pago", title: "La forma de pago" },
  { id: "separar-en-el-tablero", title: "Separar en el tablero" },
  { id: "mantener", title: "Desactivar, fusionar y eliminar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="el-catalogo" title="El catálogo">
        <p>
          Configuración → Catálogos → «Ramos» lista las líneas de negocio con
          las que la agencia emite pólizas: Automóviles, Hogar, Cumplimiento.
          Pide los mismos permisos que las aseguradoras: «Ver aseguradoras y
          ramos» para verlo y «Administrar aseguradoras y ramos» para cambiarlo.
        </p>
        <p>
          Cada fila dice el código del ramo, si «No se renueva», si «Deriva de
          otra póliza», su comisión por defecto y su descripción. Se busca por
          nombre o código y se filtra por estado, como en{" "}
          <ArticleLink to="configuracion/aseguradoras" />.
        </p>
        <p>
          Una agencia que empieza puede precargar el catálogo de Colombia, con
          los ramos según la clasificación de la Superintendencia Financiera:
          menú «…», «Precargar catálogo».
        </p>
      </ArticleSection>

      <ArticleSection id="crear" title="Crear un ramo">
        <Steps>
          <Step title="Haz clic en «Nuevo ramo»" />
          <Step title="Completa sus datos">
            <p>
              «Nombre», obligatorio. «Código», si el ramo lo tiene (como «03»).
              «Comisión por defecto (%)», opcional, entre 0 y 100.
              «Descripción», una frase sobre su alcance.
            </p>
            <Screenshot
              id="configuracion/nuevo-ramo"
              caption="«Nuevo ramo»: nombre, código, comisión por defecto, los interruptores «Sus pólizas se renuevan», «Sus pólizas derivan de otra» y «Separar en el tablero de la agencia», la forma de pago de sus pólizas y la descripción."
            />
          </Step>
          <Step title="Decide si sus pólizas se renuevan">
            <p>«Sus pólizas se renuevan» viene encendido.</p>
          </Step>
          <Step title="Ajusta lo demás, si hace falta">
            <p>
              «Sus pólizas derivan de otra» y «Separar en el tablero de la
              agencia» vienen apagados. «Forma de pago de sus pólizas» viene en
              «Pago único». Se explican más abajo.
            </p>
          </Step>
          <Step title="Haz clic en «Crear ramo»" />
        </Steps>
        <p>
          Quien tiene «Proponer cambios en la configuración» y no administra el
          catálogo ve «Proponer ramo»: el ramo queda «Por confirmar» hasta que
          lo revisa quien lleva los catálogos.
        </p>
      </ArticleSection>

      <ArticleSection id="comision" title="La comisión por defecto">
        <p>
          La comisión estimada de una póliza es su prima neta por su «% de
          comisión». Si la póliza no lo tiene, Nexus usa la comisión por defecto
          de su ramo. La comisión es un dato reservado: solo la ve quien tiene
          «Ver datos reservados y comisiones».
        </p>
      </ArticleSection>

      <ArticleSection id="no-se-renueva" title="Ramos que no se renuevan">
        <p>
          Apaga «Sus pólizas se renuevan» si el ramo ampara algo que termina,
          como un contrato. Sus pólizas se cierran automáticamente al vencer y
          no requieren seguimiento de renovación: pasado su fin, la póliza dice
          «Terminada», no «Vencida». En el listado, el ramo dice «No se
          renueva».
        </p>
      </ArticleSection>

      <ArticleSection id="derivan-de-otra" title="Pólizas que derivan de otra">
        <p>
          Enciende «Sus pólizas derivan de otra» en un ramo cuyas pólizas
          acompañan a otra póliza del mismo cliente. La ventana lo explica así:
          «Como la RC derivada de cumplimiento: cada póliza se liga a su póliza
          principal y no se renueva por sí misma. La ficha de una póliza sin
          principal pide indicarla.»
        </p>
        <p>
          Una póliza derivada no pide renovación: al pasar su fin queda
          «Terminada». En el listado de ramos, el ramo dice «Deriva de otra
          póliza». Cómo se liga una póliza a su principal está en{" "}
          <ArticleLink to="polizas/ficha-de-la-poliza" />.
        </p>
      </ArticleSection>

      <ArticleSection id="forma-de-pago" title="La forma de pago">
        <p>
          «Forma de pago de sus pólizas» ofrece «Pago único», «Anual»,
          «Semestral», «Trimestral» y «Mensual». Es «La que toma una póliza del
          ramo sin forma de pago propia. De ella sale la producción causada del
          tablero.» Una póliza con su propia «Forma de pago» usa la suya (
          <ArticleLink to="configuracion/plantillas-de-polizas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="separar-en-el-tablero" title="Separar en el tablero">
        <p>
          «Separar en el tablero de la agencia» «Permite ver las cifras sin este
          ramo cuando su peso distorsiona las comparaciones». Con él encendido,
          el tablero de la agencia ofrece un filtro para quitar ese ramo de las
          cifras (<ArticleLink to="inicio/tablero-de-la-agencia" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="mantener" title="Desactivar, fusionar y eliminar">
        <p>
          El menú de cada ramo tiene «Editar», «Confirmar» (si está por
          confirmar), «Fusionar con otro…», «Desactivar» o «Activar», y
          «Eliminar». Un ramo desactivado deja de ofrecerse al registrar
          pólizas. Al fusionar, las pólizas del ramo pasan al que elijas y el
          ramo desaparece del catálogo; no se puede deshacer. Un ramo con
          pólizas no se elimina: se desactiva.
        </p>
      </ArticleSection>
    </>
  );
}
