import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "quien-lo-ve", title: "Quién lo ve y cómo se llega" },
  { id: "los-filtros", title: "Los filtros" },
  { id: "resumen", title: "Resumen" },
  { id: "polizas-y-renovaciones", title: "Pólizas y Renovaciones" },
  { id: "ramos-y-aseguradoras", title: "Ramos y Aseguradoras" },
  { id: "clientes", title: "Clientes" },
  { id: "tareas", title: "Tareas" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="quien-lo-ve" title="Quién lo ve y cómo se llega">
        <Video id="inicio/tablero-de-la-agencia" />
        <p>
          El tablero de la agencia reúne la cartera en cifras y el trabajo del
          equipo, para quien dirige. Lo ve quien tiene en su rol el permiso «Ver
          la vista “Agencia”», que pide además «Ver pólizas». Para esa persona,
          Inicio abre en el tablero; la pestaña «Mi día» vuelve a su propio
          trabajo: <ArticleLink to="inicio/mi-dia" />.
        </p>
        <p>
          El tablero tiene su propio menú, «Agencia», junto al riel, con una
          entrada por apartado: «Resumen», «Producción», «Pólizas»,
          «Renovaciones», «Ramos», «Aseguradoras», «Clientes» y «Tareas». En el
          celular, el menú es un selector bajo la cabecera.
        </p>
        <Screenshot
          id="inicio/agencia"
          caption="El tablero de la agencia en «Resumen»: el menú «Agencia» junto al riel, los filtros, las cinco cifras de arriba y, debajo, «Vencimientos renovables» y «Prima por ramo»."
        />
        <p>Algunas partes piden además su propio permiso:</p>
        <ManualTable
          head={["Parte", "Permiso que pide"]}
          rows={[
            [
              "Comisión estimada y «Prima y comisión por ramo»",
              "Ver datos reservados y comisiones",
            ],
            ["El apartado «Tareas»", "Ver las tareas de toda la agencia"],
            ["«Conversión de prospectos»", "Ver clientes"],
          ]}
        />
        <p>
          Sin el permiso, esa parte no aparece. Sin «Ver las tareas de toda la
          agencia», la tarjeta «Gestión de lo próximo a vencer» dice «Requiere
          permiso para ver las tareas de la agencia.». Los roles se arman en{" "}
          <ArticleLink to="configuracion/roles-y-permisos" />.
        </p>
      </ArticleSection>

      <ArticleSection id="los-filtros" title="Los filtros">
        <p>
          Arriba de cada apartado, salvo «Tareas», van los filtros. Valen para
          todo el tablero y se conservan al cambiar de apartado:
        </p>
        <ManualTable
          head={["Filtro", "Qué hace"]}
          rows={[
            [
              "Período",
              "«Año», «Semestre», «Trimestre» o «Mes». Las flechas «Período anterior» y «Período siguiente» pasan de uno a otro; sin elegir, es el período en curso.",
            ],
            ["Ramo", "«Todos los ramos» o uno."],
            [
              "Aseguradora",
              "«Todas las aseguradoras» o un grupo asegurador, que suma las compañías del mismo grupo.",
            ],
            ["Responsable", "«Todos los responsables» o una persona."],
            [
              "«Sin …»",
              "Deja fuera los ramos marcados con «Separar en el tablero de la agencia». Solo aparece si la agencia marcó alguno.",
            ],
          ]}
        />
        <p>
          En el celular, los filtros van en un botón que dice el período y
          cuántos filtros hay puestos, por ejemplo «Año 2026 · Sin filtros», y
          se eligen en la hoja «Filtros».
        </p>
        <Screenshot
          id="inicio/tablero-filtros-celular"
          caption="La hoja «Filtros» del tablero en el celular: el tipo de período con sus flechas, y los selectores de ramo, aseguradora y responsable."
        />
      </ArticleSection>

      <ArticleSection id="resumen" title="Resumen">
        <p>«Resumen» abre con cinco cifras:</p>
        <ManualTable
          head={["Cifra", "Qué es"]}
          rows={[
            [
              "Prima anualizada",
              "La prima de las pólizas vigentes, por año: en las de vigencia de más de un año, la prima se reparte entre sus años. Debajo, cuántas pólizas vigentes y cuántos clientes.",
            ],
            [
              "Comisión estimada",
              "La cifra que ve quien tiene el permiso «Ver datos reservados y comisiones»: «Por año, según el % de cada póliza».",
            ],
            [
              "Tasa de renovación",
              "De las pólizas que se renuevan y vencieron en el período, las renovadas sobre las ya resueltas («X de Y en el período»).",
            ],
            [
              "Por renovar en 60 días",
              "Las pólizas vigentes que se renuevan, sin renovación ni cierre, que vencen en los próximos 60 días, con la prima que suman.",
            ],
            [
              "Vencidas sin resolver",
              "Las pólizas que se renuevan, vencidas y sin renovación ni cierre: «Requieren renovación o cierre».",
            ],
          ]}
        />
        <p>
          Las cifras incluyen las pólizas por confirmar, y la línea de abajo
          dice cuántas son: «Incluye N pólizas por confirmar.».
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Vencimientos renovables»</strong>:
            la prima de las pólizas que se renuevan, por el mes en que terminan,
            en los próximos 12 meses. Haz clic en un mes para ver sus pólizas.
          </li>
          <li>
            <strong className="font-medium">«Prima por ramo»</strong>: la prima
            anualizada de las pólizas vigentes de los ramos principales.
          </li>
          <li>
            <strong className="font-medium">«Calidad del registro»</strong>: lo
            que falta revisar o completar, como «Pólizas por confirmar»,
            «Pólizas con cambios por revisar», «Vigentes sin prima» o «Clientes
            sin responsable». Cada fila abre su listado. Cuando no falta nada,
            dice «Todo confirmado y completo».
          </li>
        </ul>
        <p>
          Lo que se abre al hacer clic en un mes o en una barra aparece a un
          lado, con sus pólizas, sin salir del tablero. «Producción» tiene su
          propio artículo:{" "}
          <ArticleLink to="inicio/produccion-y-cierre-del-ano" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="polizas-y-renovaciones"
        title="Pólizas y Renovaciones"
      >
        <p>«Pólizas» dice cómo está la cartera registrada:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Estado de la cartera»</strong>:
            todas las pólizas en «Vigentes», «Por iniciar», «Vencidas» y
            «Canceladas».
          </li>
          <li>
            <strong className="font-medium">
              «Cómo terminaron las pólizas»
            </strong>
            : «Renovadas», «Reemplazadas», «No se renuevan», «Terminadas: el
            ramo no se renueva» y «Vencidas sin resolver». Separa lo que acabó
            con su contrato de lo que se perdió.
          </li>
          <li>
            <strong className="font-medium">
              «Vigentes por año de vencimiento»
            </strong>
            : cuántas pólizas vigentes terminan cada año, y cuántas tienen una
            vigencia de más de un año.
          </li>
        </ul>
        <p>«Renovaciones» reúne lo que viene y cómo se resolvió:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «Calendario de renovaciones»
            </strong>
            : la prima de las pólizas que se renuevan, por mes de vencimiento.
            Haz clic en un mes para ver sus pólizas.
          </li>
          <li>
            <strong className="font-medium">
              «Resultado de renovación por mes»
            </strong>
            : las «Renovadas» y las que «No se renuevan», por mes de
            vencimiento, con el porcentaje por prima del período.
          </li>
          <li>
            <strong className="font-medium">
              «Gestión de lo próximo a vencer»
            </strong>
            : de las pólizas que vencen en 60 días, cuántas tienen una tarea de
            renovación abierta («Con tarea de renovación»).
          </li>
          <li>
            <strong className="font-medium">«Motivos de no renovación»</strong>:
            la nota con que se cerró cada póliza que no se renovó, de la más
            reciente a la más antigua.
          </li>
          <li>
            <strong className="font-medium">«Necesitan atención»</strong>: las
            pólizas que se renuevan sin renovación ni cierre, en «Vencidas sin
            resolver» y «Por vencer». El plazo de las por vencer se elige en «En
            los próximos 30 días», 60 o 90. Cómo se resuelve una:{" "}
            <ArticleLink to="polizas/renovar-una-poliza" />.
          </li>
        </ul>
        <Screenshot
          id="inicio/tablero-renovaciones"
          caption="El apartado «Renovaciones»: el calendario de renovaciones, el resultado de cada mes, la gestión de lo que vence en 60 días, los motivos de no renovación y «Necesitan atención»."
        />
      </ArticleSection>

      <ArticleSection id="ramos-y-aseguradoras" title="Ramos y Aseguradoras">
        <p>«Ramos» reparte la cartera vigente por ramo:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Prima por ramo»</strong>: la prima
            anualizada y el número de pólizas de cada ramo. Haz clic en un ramo
            para ver sus pólizas y cómo se reparten por aseguradora.
          </li>
          <li>
            <strong className="font-medium">«Prima y comisión por ramo»</strong>
            : el peso de cada ramo en la prima y en la comisión. Un ramo sin
            porcentaje de comisión dice «Sin %».
          </li>
          <li>
            <strong className="font-medium">
              «Valor asegurado vigente por ramo»
            </strong>
            : la suma de lo asegurado en las pólizas vigentes. Las que no tienen
            valor asegurado no suman.
          </li>
        </ul>
        <p>«Aseguradoras» agrupa las compañías de un mismo grupo asegurador:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «Prima por grupo asegurador»
            </strong>
            : la prima anualizada de cada grupo, y cuánto suman las tres
            mayores. Haz clic en un grupo para ver sus pólizas.
          </li>
          <li>
            <strong className="font-medium">«Aseguradora por ramo»</strong>: la
            prima de cada grupo en cada ramo principal. Cuanto más intenso el
            color, mayor la prima.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="clientes" title="Clientes">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">
              «Concentración de la cartera»
            </strong>
            : los diez clientes con más prima, con el porcentaje acumulado. Haz
            clic en uno para abrir su ficha.
          </li>
          <li>
            <strong className="font-medium">«Ramos por cliente»</strong>:
            cuántos clientes tienen uno, dos o más ramos.
          </li>
          <li>
            <strong className="font-medium">
              «Cartera vigente por responsable»
            </strong>
            : la prima vigente de los clientes de cada persona, y una fila «Sin
            responsable». Haz clic en una fila para ver sus pólizas. Quién lleva
            un cliente: <ArticleLink to="clientes/responsable-del-cliente" />.
          </li>
          <li>
            <strong className="font-medium">
              «Clientes por tipo y origen»
            </strong>
            : los clientes con pólizas vigentes por «Tipo de persona» y por
            «Origen», con la prima que suman.
          </li>
          <li>
            <strong className="font-medium">«Conversión de prospectos»</strong>:
            los prospectos de los últimos doce meses, por el mes en que se
            registraron, en «Convertidos», «No se convirtieron» y «Abiertos»,
            con el porcentaje convertido y los días que tardaron en promedio
            hasta la primera póliza. Toma solo el filtro de responsable.
          </li>
        </ul>
        <Screenshot
          id="inicio/tablero-clientes"
          caption="El apartado «Clientes»: la concentración de la cartera, los ramos por cliente, la cartera por responsable, los clientes por tipo y origen, y la conversión de prospectos."
        />
      </ArticleSection>

      <ArticleSection id="tareas" title="Tareas">
        <p>
          «Tareas» enseña el trabajo abierto de toda la agencia. No lleva
          filtros.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Tareas abiertas por tipo»</strong>:
            haz clic en un tipo para abrir esas tareas en Tareas.
          </li>
          <li>
            <strong className="font-medium">«Antigüedad de lo abierto»</strong>:
            los días desde que se creó cada tarea.
          </li>
          <li>
            <strong className="font-medium">«Condición de lo abierto»</strong>:
            cuántas tienen «Con fecha límite», cuántas están «En espera de un
            tercero» y cuántas «Vencidas».
          </li>
          <li>
            <strong className="font-medium">«El equipo»</strong>: cada persona
            con sus tareas abiertas y vencidas, las cerradas y el porcentaje a
            tiempo. «Ver en Tareas» abre las de la agencia.
          </li>
          <li>
            <strong className="font-medium">«Tareas cerradas por mes»</strong>:
            las cerradas a tiempo, después de su fecha y sin fecha límite.
          </li>
        </ul>
        <Screenshot
          id="inicio/equipo"
          caption="El apartado «Tareas» del tablero: las tareas abiertas por tipo, su antigüedad y condición, y «El equipo» con las tareas de cada persona."
        />
        <Callout type="note">
          <p>
            El tablero enseña el dinero de la agencia. Antes de dar el permiso
            «Ver la vista “Agencia”» a un rol, revisa quién lo tiene.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
