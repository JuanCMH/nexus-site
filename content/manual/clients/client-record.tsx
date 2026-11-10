import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-identidad", title: "La columna del cliente" },
  { id: "los-datos", title: "Los datos, en pestañas" },
  { id: "las-polizas", title: "Las pólizas del cliente" },
  { id: "al-lado", title: "Tareas, documentos y lo demás" },
  { id: "actividad", title: "La actividad" },
  { id: "recorrer", title: "Anterior y siguiente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-identidad" title="La columna del cliente">
        <p>
          La ficha se abre al hacer clic en un cliente del listado. A la
          izquierda está la columna del cliente, con lo que se consulta todos
          los días:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Sus iniciales, su nombre, su identificación y el tipo de persona. Si
            lo propuso el agente y falta confirmarlo, «Por confirmar». Si es un
            prospecto, «Prospecto», o «No se convirtió» si se cerró sin compra.
          </li>
          <li>
            Cuatro accesos: «Correo» (escribirle desde Nexus), «Chat» (traerlo a
            un chat del equipo), «Póliza» (registrarle una póliza, que nace con
            este cliente) y «Tarea» (crear una tarea sobre él). Cada uno aparece
            si tu rol lo permite.
          </li>
          <li>«Responsable»: la persona del equipo que lo lleva.</li>
          <li>
            «Relación»: «Cliente», «Prospecto» o «No se convirtió», con la fecha
            desde la que es prospecto y, si ya se cerró, la fecha y el motivo.
            Quien tiene el permiso «Editar clientes» la cambia con el lápiz
            «Cambiar la relación» (
            <ArticleLink to="clientes/prospectos" />
            ).
          </li>
          <li>
            «Datos de contacto»: los campos de contacto de la plantilla que
            tienen valor.
          </li>
          <li>
            «Cartera vigente»: cuántas pólizas vigentes tiene, la «Prima neta
            vigente», los ramos con su número de pólizas y el «Próximo
            vencimiento», con los días que faltan. Si alguna vigente no tiene la
            prima registrada, lo dice: la suma es un mínimo.
          </li>
        </ul>
        <p>
          Al pie, «Actualizado el» y la fecha del último cambio; la hora sale al
          pasar el cursor. Debajo, de dónde salió el registro: si salió de un
          documento, «Ver el documento» lo abre; si salió de un correo, «Ver la
          conversación» abre la conversación entera. Este enlace aparece si el
          correo se lee en el servidor y tu rol tiene el permiso «Ver el agente»
          o «Enviar los correos que redacta el agente».
        </p>
        <Screenshot
          id="clientes/ficha"
          caption="La ficha de Edificio Plaza Usaquén P.H. en la pestaña «Pólizas del cliente»: la columna del cliente con Responsable, Relación, Datos de contacto y Cartera vigente; las listas de pólizas en el centro; Tareas, Cotizaciones de cumplimiento, Correos y Documentos a la derecha."
        />
      </ArticleSection>

      <ArticleSection id="los-datos" title="Los datos, en pestañas">
        <p>
          En el centro están los datos del cliente, una pestaña por cada sección
          de la plantilla de clientes. Cada sección se ve como la armó la
          agencia. Para cambiar algo, «Editar», en la barra superior, abre el
          formulario en la sección que estás viendo.
        </p>
        <p>
          Si el agente propuso el cliente o cambió alguno de sus datos, la ficha
          lo dice encima de los datos, con la evidencia de cada uno y
          «Confirmar» o «Dar por revisado». Se explica en{" "}
          <ArticleLink to="agente/por-confirmar" />.
        </p>
        <Callout type="note">
          <p>
            Los datos que la plantilla marca como reservados solo los ve quien
            tiene el permiso «Ver datos reservados y comisiones». Quien no lo
            tiene ve la ficha sin ellos.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="las-polizas" title="Las pólizas del cliente">
        <p>
          Las pólizas del cliente salen repartidas en listas. Cada fila dice el
          número, el ramo y la aseguradora, la vigencia y el estado; al hacer
          clic se abre la ficha de la póliza. La primera lista lleva «Ver en el
          listado», que abre Pólizas filtrado por este cliente.
        </p>
        <ManualTable
          head={["Cómo se reparten", "Qué se ve"]}
          rows={[
            [
              "La agencia no definió listas",
              "«Pólizas», con las vigentes, las por iniciar y las vencidas sin resolver, y aparte «Historial de pólizas», con las vencidas y las canceladas.",
            ],
            [
              "La plantilla trae listas",
              "Las listas que armó la agencia, con su nombre y en la pestaña que eligió (en la captura, «Generales · Áreas comunes» y «Generales · Otros»). Lo que ninguna recoge sale en «Otras pólizas».",
            ],
          ]}
        />
        <p>
          Una lista puede estar destacada, abierta y con sus filas, o discreta:
          una línea con su nombre y su conteo que se abre al hacer clic y enseña
          10 pólizas a la vez, con «Mostrar N más». Una lista sin pólizas no
          aparece; si el cliente no tiene ninguna, la ficha dice «Este cliente
          todavía no tiene pólizas». Las listas se arman en la plantilla de
          clientes (
          <ArticleLink to="configuracion/plantillas-de-clientes" />
          ).
        </p>
        <p>
          Una póliza que no se renueva, porque su ramo no se renueva o porque
          deriva de otra, dice «Terminada» y no «Vencida» cuando pasa su fin (
          <ArticleLink to="polizas/polizas-derivadas" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="al-lado" title="Tareas, documentos y lo demás">
        <p>
          A la derecha, en una ventana ancha, o debajo, en una estrecha, van los
          paneles de lo que tiene que ver con el cliente:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Tareas», con «Nueva tarea» (
            <ArticleLink to="tareas/crear-una-tarea" />
            ).
          </li>
          <li>
            «Cotizaciones de cumplimiento», con «Nueva cotización» (
            <ArticleLink to="cotizaciones-de-cumplimiento/crear-una-cotizacion" />
            ).
          </li>
          <li>«Correos», los que se le escribieron desde Nexus.</li>
          <li>
            «Documentos», con «Adjuntar» (
            <ArticleLink to="documentos/subir-y-vincular" />
            ).
          </li>
          <li>
            «Conversaciones», los chats donde se habló del cliente. Solo aparece
            si hay alguno, y solo con los chats en los que estás.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="actividad" title="La actividad">
        <p>
          La última pestaña, «Actividad», es lo que la bitácora registró del
          cliente, lo más reciente primero. Si no hay nada, dice «Aún no hay
          movimientos de este registro».
        </p>
        <p>
          Cuando el cliente tiene movimientos, o listas de pólizas que no van en
          una sección, la primera pestaña es «Resumen»: ahí están esas listas y
          «Actividad reciente», con «Ver toda» para pasar a «Actividad».
        </p>
      </ArticleSection>

      <ArticleSection id="recorrer" title="Anterior y siguiente">
        <p>
          Si abriste la ficha desde el listado, la barra superior dice qué
          posición ocupa el cliente («4 de 50+») y trae las flechas «Anterior» y
          «Siguiente», para revisar un cliente tras otro sin volver al listado.
          Ir atrás desde la ficha vuelve al listado, no a cada cliente
          recorrido.
        </p>
      </ArticleSection>
    </>
  );
}
