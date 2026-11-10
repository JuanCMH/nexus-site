import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "nuevo-flujo", title: "Escribir un flujo propio" },
  { id: "editar-el-borrador", title: "Editar el borrador" },
  { id: "publicar", title: "Publicar" },
  { id: "versiones", title: "Versiones" },
  { id: "ponerse-al-dia", title: "Ponerse al día con Nexus" },
  { id: "archivar", title: "Archivar un flujo" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="nuevo-flujo" title="Escribir un flujo propio">
        <p>
          Hace falta el permiso «Crear y cambiar flujos». Si el trabajo ya
          existe entre los flujos de Nexus, es más corto traerlo y adaptarlo (
          <ArticleLink to="directrices/flujos" />
          ).
        </p>
        <Steps>
          <Step title="Haz clic en «Nuevo flujo»">
            <p>Está arriba a la derecha, en Directrices → Flujos.</p>
          </Step>
          <Step title="Completa el nombre y el para qué">
            <p>
              El «Nombre» es como lo verá el equipo y como lo pide el agente.
              «Para qué» son una o dos frases: el agente las lee para decidir
              cuándo usarlo. La «Categoría» dice dónde sale en el listado y se
              puede cambiar después.
            </p>
            <Screenshot
              id="directrices/nuevo-flujo"
              caption="La ventana «Nuevo flujo», con el nombre, el para qué y la categoría."
            />
          </Step>
          <Step title="Haz clic en «Crear flujo»">
            <p>
              El flujo nace en borrador y se abre en su editor para escribir los
              pasos. El agente no lo sigue hasta que lo publiques.
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="editar-el-borrador" title="Editar el borrador">
        <Video id="directrices/editar-y-publicar-un-flujo" />
        <p>
          En la ficha de un flujo, haz clic en «Editar». Lo que cambias es un
          borrador: un aviso lo recuerda, «Estás editando el borrador. El agente
          sigue con la versión 1 hasta que publiques.».
        </p>
        <p>El editor tiene tres pestañas:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Pasos</strong>: lo que hace el
            agente, en orden. Cada paso lleva un título opcional y su texto, que
            admite listas, tablas y código. «Añadir paso» suma uno al final;
            para moverlo, se arrastra.
          </li>
          <li>
            <strong className="font-medium">Datos</strong>: el «Nombre», «En una
            línea» (la frase del listado), el «Para qué» y las «Referencias» de
            la agencia que el agente recibe con el flujo.
          </li>
          <li>
            <strong className="font-medium">Límites</strong>: lo que queda en
            Nexus cuando el agente termina, lo que no le toca a este flujo y en
            qué casos se detiene en vez de seguir.
          </li>
        </ul>
        <p>
          A la derecha, «Así lo lee el agente» enseña el flujo como quedará, y
          se actualiza mientras escribes.
        </p>
        <Screenshot
          id="directrices/flujo-editor"
          caption="El editor de «Leer correos»: el aviso del borrador, las pestañas «Pasos», «Datos» y «Límites», y al lado «Así lo lee el agente»."
        />
        <p>
          «Guardar borrador» deja los cambios guardados sin publicarlos.
          «Cancelar» sale del editor; si hay cambios sin guardar, Nexus pide
          confirmarlo.
        </p>
        <Callout type="note">
          <p>
            Con el permiso «Proponer cambios en la configuración» y sin el de
            cambiar flujos, la ficha enseña «Proponer cambios» en vez de
            «Editar». Lo que guardas queda en el borrador y lo publica quien
            lleva los flujos.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="publicar" title="Publicar">
        <p>
          Publicar es lo que cambia lo que sigue el agente. Se hace desde el
          editor o desde la ficha, en el aviso del borrador.
        </p>
        <Steps>
          <Step title="Haz clic en «Publicar»">
            <p>
              Se abre «Publicar la versión 2» (o el número que corresponda).
            </p>
          </Step>
          <Step title="Escribe qué cambia, si quieres">
            <p>
              «Qué cambia» es opcional y se lee en el historial de versiones.
            </p>
          </Step>
          <Step title="Confirma con «Publicar»">
            <p>
              Desde ese momento, es lo que sigue el agente cada vez que use el
              flujo. La versión anterior queda en el historial.
            </p>
          </Step>
        </Steps>
        <p>
          Si el borrador no te convence, «Descartar» en el aviso lo elimina y la
          versión vigente no cambia. En un flujo que nunca se publicó, descartar
          el borrador elimina el flujo entero.
        </p>
        <p>
          Lo que el agente escribe en un flujo también queda en borrador, con su
          aviso: «El agente dejó cambios en borrador…». Cuando el agente pide
          publicarlo, lo resuelve una persona (
          <ArticleLink to="agente/permisos-y-solicitudes" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="versiones" title="Versiones">
        <p>
          La pestaña «Versiones» lista cada publicación: su número, quién la
          publicó y cuándo, y la nota de «Qué cambia». La que sigue el agente
          lleva «Vigente».
        </p>
        <Screenshot
          id="directrices/flujo-versiones"
          caption="La pestaña «Versiones» de «Leer correos», con la versión vigente, traída de Nexus 0.51.0."
        />
        <p>
          Para volver a una anterior, abre el menú de esa versión y elige
          «Restaurar como borrador». Queda como borrador, y se publica como
          cualquier otro.
        </p>
        <p>
          En «Ejecuciones», cada vez que el agente siguió el flujo dice qué
          versión usó. Las ejecuciones se explican en{" "}
          <ArticleLink to="agente/ejecuciones" />.
        </p>
      </ArticleSection>

      <ArticleSection id="ponerse-al-dia" title="Ponerse al día con Nexus">
        <p>
          Un flujo que salió de uno de Nexus no cambia solo cuando Nexus cambia
          el suyo. La ficha lo avisa con la insignia «Cambió en Nexus» y un
          aviso: «Nexus cambió este flujo desde la versión 0.51.0, la que tiene
          la agencia. En las novedades, lo que cambió solo Nexus se trae y lo
          que cambió la agencia se conserva; si cambiaron los dos, eliges tú.».
          Lo ve quien puede cambiar flujos.
        </p>
        <Screenshot
          id="directrices/flujo-aviso-nexus"
          caption="La ficha de «Leer correos» con la insignia «Cambió en Nexus» y el aviso de Nexus, con «Ya lo revisé» y «Ver novedades»."
        />
        <Steps>
          <Step title="Haz clic en «Ver novedades»">
            <p>
              Está en el aviso; «Comparar», arriba en la ficha, abre lo mismo.
              Se abre «Novedades de «Leer correos»» (o el nombre del flujo), con
              lo que cambió en el flujo de Nexus desde la versión que tiene la
              agencia.
            </p>
          </Step>
          <Step title="Lee cada diferencia">
            <p>
              Arriba, un resumen cuenta lo que hay («2 se traen · 1 choque · 1
              tuyo se conserva»). Cada parte que difiere —el nombre, el «Para
              qué», cada paso y los límites— lleva su estado y el motivo:
            </p>
            <ManualTable
              head={["Estado", "Qué pasa al actualizar"]}
              rows={[
                [
                  "«Se trae»",
                  "Solo la cambió Nexus: entra lo de Nexus. Un paso nuevo de Nexus entra en su sitio.",
                ],
                [
                  "«Se conserva»",
                  "Solo la cambió la agencia: queda como la tiene la agencia. Los pasos propios de la agencia se conservan.",
                ],
                [
                  "«Choque»",
                  "La cambiaron la agencia y Nexus: eliges qué texto queda con «El mío» o «Nexus».",
                ],
              ]}
            />
            <p>
              Mientras falte elegir en algún choque, la hoja lo dice («Elige en
              cada choque qué texto queda (1 por elegir). Lo demás se aplica
              solo.»).
            </p>
          </Step>
          <Step title="Haz clic en «Actualizar y publicar»">
            <p>
              «Qué cambia» es opcional; sin ella, la versión queda con la nota
              «Actualizado con Nexus» y la versión de Nexus. Actualizar aplica
              la lista y publica una versión nueva en un solo paso: desde ese
              momento es lo que sigue el agente («Versión 3 publicada con lo de
              Nexus»).
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="directrices/flujo-novedades"
          caption="«Novedades de «Leer correos»» cuando la agencia no cambió el flujo: «3 se traen», cada paso con lo que sale del flujo de la agencia y lo que entra de Nexus, y al pie «Marcar como revisado» y «Actualizar y publicar»."
        />
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Con un borrador.</strong> Si el
            flujo tiene un borrador, la actualización parte de él y, al
            publicarla, sale también lo que tiene ese borrador. El aviso de la
            ficha ofrece entonces «Descartar borrador», «Publicar borrador» y
            «Ver novedades».
          </li>
          <li>
            <strong className="font-medium">Sin nada que traer.</strong> Si lo
            que cambió en Nexus ya está en el flujo de la agencia, o la agencia
            lo cambió a su manera, «Marcar como revisado» retira el aviso hasta
            el próximo cambio. En el aviso, «Ya lo revisé» hace lo mismo sin
            abrir las novedades.
          </li>
          <li>
            <strong className="font-medium">Empezar de nuevo.</strong> En el
            menú «Más acciones», «Volver a traer de Nexus» crea un borrador con
            el texto actual del flujo de Nexus, sin lo de la agencia.
          </li>
        </ul>
        <p>
          Al agente no le toca poner al día una copia: la actualiza una persona.
        </p>
      </ArticleSection>

      <ArticleSection id="archivar" title="Archivar un flujo">
        <p>
          En el menú «Más acciones» de la ficha, «Archivar» quita el flujo de lo
          que ve y sigue el agente. Se conserva con sus versiones: en el
          listado, el filtro «Archivados» lo enseña, y «Recuperar», en el mismo
          menú, lo vuelve a activar. Ahí mismo está «Cambiar categoría».
        </p>
        <Callout type="tip">
          <p>
            Con muchos flujos activos, el listado lo recuerda: el agente recibe
            la lista de todos en cada trabajo. Archivar los que no se usan
            reduce lo que consume y el tiempo de respuesta.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
