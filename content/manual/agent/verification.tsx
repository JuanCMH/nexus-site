import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "la-verificacion", title: "La verificación de Nexus" },
  { id: "las-causas", title: "Las causas" },
  { id: "la-bandeja", title: "Agente › Verificación" },
  { id: "los-niveles", title: "Los niveles de supervisión" },
  { id: "cambiar-la-supervision", title: "Cambiar la supervisión" },
  { id: "calibracion", title: "Calibración y lo que entró solo" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="la-verificacion" title="La verificación de Nexus">
        <p>
          Cada cliente y cada póliza que registra el agente pasa por una
          verificación de Nexus, que lo deja en uno de tres carriles. El carril
          no lo declara el agente: sale de lo que Nexus comprueba en el
          registro.
        </p>
        <ManualTable
          head={["Carril", "Qué significa"]}
          rows={[
            ["Verificado", "Pasa todas las comprobaciones."],
            [
              "Con una duda",
              "Un dato sin respaldo, leído con poca confianza o fuera de lo usual. Puede entrar y trabajar; una persona revisa ese dato.",
            ],
            [
              "Bloqueado",
              "Un posible repetido o algo que solo puede decidir una persona: un cliente sin confirmar, una aseguradora o un ramo nuevos, un dato que incumple un criterio de la agencia. No entra hasta que una persona decide.",
            ],
          ]}
        />
        <p>
          En la ficha del registro, un aviso dice el resultado («Verificación de
          Nexus: con una duda») y qué se encontró.
        </p>
      </ArticleSection>

      <ArticleSection id="las-causas" title="Las causas">
        <p>
          Lo que la verificación puede encontrar, con su nombre en pantalla:
        </p>
        <ManualTable
          head={["Causa", "Carril", "Qué hacer"]}
          rows={[
            [
              "Falta un dato",
              "Con una duda",
              "Complétalo en la ficha si lo tienes; si la póliza no lo lleva, dalo por revisado.",
            ],
            [
              "Dato sin respaldo",
              "Con una duda",
              "El agente no dijo de dónde salió: compáralo con su fuente.",
            ],
            [
              "Sin documento de la aseguradora",
              "Con una duda",
              "Salió de un correo, del portal o de una tabla: no hay carátula ni otro documento de la aseguradora en Nexus.",
            ],
            [
              "Leído con poca confianza",
              "Con una duda",
              "Una imagen borrosa, un texto ambiguo: compáralo con el documento.",
            ],
            [
              "Dígito de verificación que no cuadra",
              "Con una duda",
              "El dígito de verificación del NIT no es el que le corresponde: revisa la identificación.",
            ],
            [
              "Importe fuera de lo usual",
              "Con una duda",
              "La prima se aparta mucho de la usual de su ramo en la agencia. Puede ser correcta; conviene mirarla.",
            ],
            [
              "Duda del agente",
              "Con una duda",
              "El agente dejó escrito lo que no pudo comprobar: léelo en cada registro.",
            ],
            [
              "Aseguradora en revisión por la muestra",
              "Con una duda",
              "En la muestra reciente de esa aseguradora apareció un error.",
            ],
            [
              "Criterio de la agencia por revisar",
              "Con una duda",
              "El registro incumple la comprobación de un criterio de la agencia. Revisa el dato contra el criterio que se cita.",
            ],
            [
              "Posible cliente repetido",
              "Bloqueado",
              "Hay otro cliente con un nombre casi igual. Si es el mismo, únelos; si no, confírmalo.",
            ],
            [
              "Posible póliza repetida",
              "Bloqueado",
              "El cliente ya tiene otra póliza de la misma aseguradora y ramo con vigencias que se cruzan. Puede ser un número mal leído.",
            ],
            [
              "Incumple un criterio de la agencia",
              "Bloqueado",
              "El registro incumple la comprobación de un criterio de la agencia y no entra hasta que una persona lo decida.",
            ],
            [
              "Su cliente no está confirmado",
              "Bloqueado",
              "Al confirmar el cliente, la póliza sigue sola. Si el cliente tiene muchas pólizas, se verifican por partes y las últimas pueden tardar un momento en entrar.",
            ],
            [
              "Aseguradora o ramo nuevo",
              "Bloqueado",
              "Confirmarlos, o unirlos con uno que ya existe, es de una persona.",
            ],
          ]}
        />
        <p>
          La verificación mira los datos clave —el nombre y la identificación de
          un cliente; el número, la vigencia, la aseguradora y el ramo de una
          póliza—, los «Datos que deben venir» que fije la supervisión (abajo) y
          las comprobaciones de los criterios de la agencia, dentro del alcance
          de cada criterio (
          <ArticleLink to="directrices/criterios" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="la-bandeja" title="Agente › Verificación">
        <p>
          Agente › Verificación reúne lo que la verificación dejó para una
          persona, agrupado por causa. La ve quien puede ver los clientes o las
          pólizas. El selector de arriba elige la bandeja, con cuántos hay en
          cada una:
        </p>
        <ManualTable
          head={["Bandeja", "Qué tiene"]}
          rows={[
            [
              "Bloqueados",
              "No entran hasta que una persona decide: un posible repetido, un cliente sin confirmar, una aseguradora o un ramo nuevos, un criterio de la agencia incumplido.",
            ],
            [
              "Con una duda",
              "Entraron y trabajan con lo seguro; falta revisar el dato que dice cada grupo. Corrígelo en la ficha o dalo por revisado.",
            ],
            [
              "Muestra",
              "Una parte de lo que entró verificado, al azar. Lo que se marque con error deja la aseguradora en revisión.",
            ],
            [
              "Verificados por confirmar",
              "Pasaron la verificación, pero la agencia revisa todo: se confirman de una vez.",
            ],
          ]}
        />
        <p>
          Haz clic en un grupo para leer qué significa su causa y sus registros,
          cada uno con lo que se encontró en él. El botón del grupo confirma los
          que esperan confirmación y da por revisados los demás («Confirmar los
          4», «Dar por revisados los 3»). En la muestra, cada registro lleva
          «Estaba bien» o «Tenía un error»; con un error, lo que el agente
          registre de esa aseguradora pasa por revisión hasta que las revisiones
          siguientes salgan bien. Revisar pide poder editar los clientes o las
          pólizas.
        </p>
        <Screenshot
          id="agente/verificacion-criterio"
          caption="Agente › Verificación en «Bloqueados»: el grupo «Incumple un criterio de la agencia», con la explicación de la causa y la póliza que lo incumple, que cita el texto del criterio."
        />
      </ArticleSection>

      <ArticleSection id="los-niveles" title="Los niveles de supervisión">
        <p>
          Agente › Supervisión dice qué hace Nexus con lo que registra el agente
          después de verificarlo. El nivel se fija por separado para clientes y
          para pólizas:
        </p>
        <ManualTable
          head={["Nivel", "Qué pasa"]}
          rows={[
            [
              "Revisar todo",
              "Todo lo que registra el agente espera a una persona, ordenado por carril y por causa. Es el nivel con que empieza la agencia.",
            ],
            [
              "Revisar excepciones",
              "Lo verificado entra confirmado. Lo que tiene una duda entra y espera la revisión de ese dato; lo bloqueado no entra.",
            ],
            [
              "Revisar solo lo bloqueado",
              "Lo verificado y lo que tiene una duda entran confirmados; la duda queda en su ficha. Solo lo bloqueado espera a una persona.",
            ],
          ]}
        />
        <p>
          «Muestra» es qué parte de lo que entra verificado vuelve a una persona
          para comprobarlo: 5 %, 10 %, 20 % o 50 % (la agencia empieza en el 10
          %). «Datos que deben venir», para clientes y para pólizas, son los
          que, además de los obligatorios de la plantilla, tienen que llegar:
          sin ellos, el registro queda con una duda.
        </p>
        <Screenshot
          id="agente/supervision"
          caption="Agente › Supervisión: «Nivel de supervisión» con «Revisar todo» en clientes y en pólizas, la «Muestra» del 10 % y los «Datos que deben venir»; debajo, «Calibración»."
        />
      </ArticleSection>

      <ArticleSection
        id="cambiar-la-supervision"
        title="Cambiar la supervisión"
      >
        <p>
          Supervisión la ve quien tiene el permiso «Conectar el agente y definir
          su horario»; la cambian el propietario y los administradores de la
          agencia, con «Editar». Quien no puede cambiarla lee «Lo cambian el
          propietario y los administradores de la agencia.». Al guardar, Nexus
          vuelve a verificar lo que espera confirmación: si el nivel nuevo deja
          entrar solo lo verificado, eso entra confirmado en ese momento.
        </p>
        <Screenshot
          id="agente/supervision-editar"
          caption="La ventana «Supervisión de lo que registra el agente», con el nivel de clientes y de pólizas, la muestra y los datos que deben venir."
        />
        <Callout type="note">
          <p>
            La supervisión vale para los clientes y las pólizas que registra el
            agente. Lo que pide como solicitud sigue sus propias reglas (
            <ArticleLink to="agente/permisos-y-solicitudes" />
            ).
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="calibracion" title="Calibración y lo que entró solo">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Calibración»</strong>: de lo que el
            agente registró y una persona confirmó o revisó, cuánto quedó como
            estaba, por carril («Sin cambios», «Con cambios», «Acierto»). Sirve
            para decidir si lo verificado puede entrar solo.
          </li>
          <li>
            <strong className="font-medium">
              «Revisiones recientes por aseguradora»
            </strong>
            : las últimas diez revisiones de lo que el agente registró de cada
            aseguradora. Con un error entre ellas, lo que llega de esa
            aseguradora pasa por revisión («En revisión»).
          </li>
          <li>
            <strong className="font-medium">«Lo que entró solo»</strong>: lo que
            Nexus confirmó porque pasó la verificación, por día. Si algo de un
            día no te convence, «Devolver clientes» o «Devolver pólizas» lo
            devuelve entero a «Por confirmar», con su responsable. Lo que
            alguien ya tocó después se queda como está, y no se borra nada.
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}
