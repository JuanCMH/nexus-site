import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "antes-de-empezar", title: "Antes de empezar" },
  { id: "anadir-un-acceso", title: "Añadir un acceso" },
  { id: "importar", title: "Importar desde Excel o CSV" },
  { id: "usar-un-acceso", title: "Usar un acceso" },
  { id: "editar-o-eliminar", title: "Editar, restaurar o eliminar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="antes-de-empezar" title="Antes de empezar">
        <p>
          Guardar accesos pide el permiso «Guardar y editar accesos» y la bóveda
          abierta (<ArticleLink to="accesos/abrir-la-boveda" />
          ). Sin ese permiso, en Accesos ves «Pedir acceso» en lugar de «Añadir
          acceso» (<ArticleLink to="accesos/solicitudes-de-acceso" />
          ).
        </p>
        <p>
          Cada acceso tiene un tipo, que decide en qué sección del menú aparece:
          «Correo» en «Correos», «Portal» en «Portales» (como el de cada
          aseguradora) y «Otra cuenta» en «Otras cuentas» (banca, nómina,
          facturación). «Todos los accesos» los reúne y tiene un buscador.
        </p>
      </ArticleSection>

      <ArticleSection id="anadir-un-acceso" title="Añadir un acceso">
        <Steps>
          <Step title="Haz clic en «Añadir acceso»">
            <p>
              Está arriba a la derecha en las secciones de accesos. Con la
              bóveda vacía, en el centro de la pantalla.
            </p>
          </Step>
          <Step title="Completa los datos de la cuenta">
            <p>
              «Nombre» (por ejemplo, «Correo de gerencia»), «Tipo», «Usuario»,
              «Dirección web», «Contraseña» y «Notas». «Generar», junto a la
              contraseña, propone una al azar; el icono del ojo la muestra o la
              oculta.
            </p>
          </Step>
          <Step title="Abre «Opciones avanzadas» si hace falta">
            <p>
              Ahí van la «Clave del autenticador», si la cuenta pide un código
              al entrar, y, según el tipo, la «Aseguradora» del portal o el
              «Correo vinculado» del que es la cuenta. Un acceso con aseguradora
              sale también en la ficha de esa aseguradora, para quien lo tiene.
            </p>
          </Step>
          <Step title="Haz clic en «Guardar acceso»">
            <p>
              El acceso queda para ti, el propietario y los administradores.
              Quién más lo usa lo deciden ellos (
              <ArticleLink to="accesos/compartir-accesos" />
              ). Si eres propietario o administrador, el formulario trae además
              «Personas con acceso», para elegirlas al guardar.
            </p>
          </Step>
        </Steps>
        <Callout type="tip" title="La clave del autenticador">
          <p>
            En la cuenta, activa la verificación con aplicación autenticadora y
            pega en «Clave del autenticador» la clave que muestra junto al
            código QR. Desde entonces, el detalle del acceso enseña el «Código
            de verificación» vigente de esa cuenta.
          </p>
          <p>
            En el acceso de un portal de aseguradora, la clave del autenticador
            permite que el computador de los portales escriba el código solo.
            Sin ella, cada vez que el portal pide el código, Nexus se lo pide a
            una persona en una ventana (
            <ArticleLink to="configuracion/conexiones" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="importar" title="Importar desde Excel o CSV">
        <p>
          «Importar», junto a «Añadir acceso», trae varios accesos de una vez.
          La ventana ofrece la «Plantilla de Excel», con una columna por cada
          dato, una fila de ejemplo y una hoja que explica qué va en cada
          columna. También lee un CSV con encabezados, como el que exportan
          otros gestores de contraseñas.
        </p>
        <p>
          El archivo se lee en tu computador o navegador y cada acceso se cifra
          ahí antes de guardarse. Nexus revisa cada fila y dice cuáles no se
          importan y por qué. Una importación admite hasta 200 filas.
        </p>
        <Callout type="warning">
          <p>Al terminar, borra el archivo: tiene las contraseñas en claro.</p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="usar-un-acceso" title="Usar un acceso">
        <p>
          Al elegir un acceso en la lista, su detalle se abre al lado: usuario,
          contraseña oculta, código de verificación si lo tiene, dirección web,
          notas, con qué aseguradora o correo se relaciona y su «Actividad». El
          usuario, la contraseña y el código tienen su botón para copiarlo.
        </p>
        <p>
          Lo que copias de la bóveda se borra del portapapeles a los 30
          segundos. Algunos usos quedan en la bitácora de la agencia, que nombra
          la cuenta y nunca la contraseña:
        </p>
        <ManualTable
          head={["Lo que haces", "Lo que dice la bitácora"]}
          rows={[
            ["Copiar la contraseña", "«Copió la contraseña»"],
            ["Ver la contraseña", "«Vio la contraseña»"],
            [
              "Copiar el código de verificación",
              "«Usó un código de verificación»",
            ],
          ]}
        />
        <p>
          La bitácora de toda la agencia está en{" "}
          <ArticleLink to="configuracion/bitacora" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="editar-o-eliminar"
        title="Editar, restaurar o eliminar"
      >
        <p>
          «Editar», en el detalle, abre el mismo formulario. Lo tiene quien
          puede guardar accesos.
        </p>
        <p>
          El propietario y los administradores tienen además el menú «Más
          acciones»:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>«Personas con acceso», para decidir quién lo usa.</li>
          <li>
            «Restaurar versión anterior», que devuelve el acceso a lo que
            guardaba antes de su última edición, por si alguien sobrescribió la
            contraseña. Lo que tiene ahora queda como versión anterior.
          </li>
          <li>
            «Eliminar», que lo borra de la bóveda para todos los que lo tenían.
            La cuenta sigue existiendo: solo se pierde lo guardado en Nexus.
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}
