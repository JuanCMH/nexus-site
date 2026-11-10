import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-cabecera", title: "La cabecera" },
  { id: "la-vigencia", title: "La vigencia y el estado" },
  { id: "los-datos", title: "Los datos, en pestañas" },
  { id: "la-evidencia", title: "La evidencia de lo que leyó el agente" },
  { id: "al-lado", title: "El cliente, las tareas y los documentos" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-cabecera" title="La cabecera">
        <p>
          La ficha se abre al hacer clic en una póliza del listado, o en la
          ficha de su cliente. Arriba está el número de la póliza con su estado
          y, debajo, el cliente (un enlace a su ficha), la aseguradora, el ramo
          y «Actualizada el», con la fecha del último cambio. A la derecha, la
          «Prima neta», el «Valor asegurado» si lo tiene y la fecha en que fue
          «Expedida».
        </p>
        <p>Debajo, cuando aplica, una línea dice algo más de la póliza:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            En una cancelada con fecha: «Cancelada desde el…» y, si la
            aseguradora devolvió prima, «con devolución de…».
          </li>
          <li>
            En una que no se renueva: «No se renueva: deriva de la póliza…» si
            es derivada, o «No se renueva: las pólizas de… terminan con su
            vigencia» si su ramo no se renueva. Al terminar, «Terminó con su
            vigencia».
          </li>
          <li>En una que se marcó «No se renueva», la nota que lo explica.</li>
          <li>
            En una vencida sin cierre, «Venció sin renovación registrada:
            renuévala, encadénala con la que la reemplazó o indica que no se
            renueva».
          </li>
        </ul>
        <p>
          En la barra superior, según tu rol: «Confirmar» si la propuso el
          agente, el menú «Más acciones» (los tres puntos), compartirla en un
          chat, «Enviar correo», «Renovar» y «Editar». Como en Clientes, si la
          abriste desde el listado, la barra dice su posición («6 de 50+») y
          trae «Anterior» y «Siguiente».
        </p>
        <p>
          En el celular, la barra deja «Más acciones» y «Editar»; «Confirmar»,
          «Compartir», «Enviar correo» y «Renovar» van con su texto bajo la
          cabecera, y no están «Anterior» ni «Siguiente».
        </p>
        <Screenshot
          id="polizas/ficha"
          caption="La ficha de la póliza 8001901347, Vigente: la cabecera con el cliente, la aseguradora y el ramo; la barra de vigencia con «Quedan 197 días»; el Resumen con «Renovaciones»; y a la derecha Cliente, Tareas, Correos y Documentos."
        />
      </ArticleSection>

      <ArticleSection id="la-vigencia" title="La vigencia y el estado">
        <p>
          Bajo la cabecera, la barra de vigencia va del «Inicio» al «Fin», con
          lo que va corrido hasta hoy. Al final marca el tramo de los días de
          aviso de la plantilla de pólizas. En el centro dice cuánto falta, y su
          color repite el estado.
        </p>
        <p>
          El estado no se escribe: Nexus lo saca de las fechas cada día. Solo
          «Cancelada» se pone a mano.
        </p>
        <ManualTable
          head={["Estado", "Cuándo", "Qué dice la barra"]}
          rows={[
            [
              "Por iniciar",
              "El inicio de vigencia es posterior a hoy.",
              "«Inicia mañana» o «Inicia en N días».",
            ],
            [
              "Vigente",
              "Hoy está entre el inicio y el fin.",
              "«Quedan N días»; dentro de los días de aviso, «Vence en N días», «Vence mañana» o «Vence hoy», en ámbar.",
            ],
            [
              "Vencida",
              "El fin de vigencia ya pasó.",
              "«Venció ayer» o «Venció hace N días», en rojo.",
            ],
            ["Cancelada", "Alguien la canceló.", "«Cancelada»."],
          ]}
        />
        <p>
          Una póliza que no se renueva, porque su ramo no se renueva o porque
          deriva de otra, no vence: termina. Pasado su fin, su estado dice
          «Terminada» en gris, y la barra, «Terminó ayer» o «Terminó hace N
          días». Antes del fin, la barra dice «Quedan N días» y, en el tramo
          final, «Termina en N días», «Termina mañana» o «Termina hoy», sin
          ámbar y sin tramo de aviso (
          <ArticleLink to="polizas/polizas-derivadas" />
          ).
        </p>
        <p>
          Junto al estado puede ir el cierre de la póliza: «Renovada»,
          «Reemplazada», «No se renueva» o «Terminada». Una vencida sin cierre
          dice «Sin resolver» y pide una decisión; se explica en{" "}
          <ArticleLink to="polizas/cancelar-o-cerrar-una-poliza" />.
        </p>
      </ArticleSection>

      <ArticleSection id="los-datos" title="Los datos, en pestañas">
        <p>
          Los datos van en pestañas, una por sección de la plantilla de pólizas;
          después, «Anexos», si la póliza tiene alguno (
          <ArticleLink to="polizas/anexos-de-una-poliza" />
          ), y al final «Actividad», con lo que la bitácora registró de la
          póliza. La primera, «Resumen», aparece cuando hay algo que decir de la
          póliza además de sus datos:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Renovaciones»: la cadena de la póliza, de izquierda a derecha
            («Anterior», «Esta póliza», «Renovación» o «Reemplazo»), con la
            vigencia de cada una.
          </li>
          <li>
            «Posible póliza anterior», si la póliza se registró sin anterior y
            Nexus encuentra candidatas (
            <ArticleLink to="polizas/renovar-una-poliza" />
            ).
          </li>
          <li>
            «Pólizas relacionadas»: la principal de la que deriva la póliza, o
            las que derivan de ella, y las candidatas a principal cuando las hay
            (<ArticleLink to="polizas/polizas-derivadas" />
            ).
          </li>
          <li>«Actividad reciente», con «Ver toda».</li>
          <li>
            Lo que propuso o cambió el agente, con «Confirmar» o «Dar por
            revisado».
          </li>
        </ul>
        <Callout type="note">
          <p>
            Los datos reservados, como «% de comisión» y «% del comercial», solo
            los ve quien tiene el permiso «Ver datos reservados y comisiones».
            Quien no lo tiene ve la ficha sin ellos.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="la-evidencia"
        title="La evidencia de lo que leyó el agente"
      >
        <p>
          Cuando el agente registra una póliza a partir de un documento o un
          correo, puede dejar de cada dato la evidencia: de dónde lo sacó. En
          una póliza que propuso, el Resumen cuenta cuántos datos traen
          evidencia, cuántos están «por verificar» y cuántos no traen nada, y
          nombra la evidencia de los datos de la cabecera.
        </p>
        <p>
          Junto a cada dato con evidencia hay una marca. Al hacer clic se abre
          la «Evidencia de» ese dato: la cita entre comillas, la página, si se
          leyó del texto o de una imagen y el documento. Si el agente no está
          seguro, la marca dice «Por verificar» y la evidencia lo advierte. La
          pestaña que tiene datos por verificar lleva su número.
        </p>
        <Screenshot
          id="polizas/evidencia"
          caption="La pestaña Valores de una póliza Por confirmar: la Prima lleva «Por verificar» y su evidencia dice «PRIMA $6.250.000», Página 2, Leído del texto, y «El agente no está seguro de este dato»."
        />
        <Callout type="warning">
          <p>
            Nexus no coteja la cita con el documento: la enseña. Quien confirma
            revisa que el dato coincida con lo que dice el documento.
          </p>
        </Callout>
        <p>
          Si alguien cambia a mano un dato que traía evidencia, la evidencia lo
          dice: la cita respalda el valor que propuso el agente, no el de ahora.
          Cómo se confirma o se descarta lo propuesto, en{" "}
          <ArticleLink to="agente/por-confirmar" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="al-lado"
        title="El cliente, las tareas y los documentos"
      >
        <p>A la derecha, o debajo en una ventana estrecha:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Cliente»: su nombre, su identificación, su responsable y sus datos
            de contacto, para llamarlo o escribirle sin salir de la póliza.
          </li>
          <li>
            «Tareas», con «Nueva tarea»: la tarea nace con la póliza y su
            cliente puestos.
          </li>
          <li>
            «Correos», los que se escribieron sobre la póliza desde Nexus.
          </li>
          <li>
            «Documentos», con «Adjuntar» (
            <ArticleLink to="documentos/subir-y-vincular" />
            ).
          </li>
          <li>
            «Conversaciones», los chats donde se habló de la póliza, si hay
            alguno en los que estás.
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}
