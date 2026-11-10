import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { Screenshot } from "@/components/manual/screenshot";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "categorias", title: "Las categorías de los flujos" },
  { id: "cambiar-la-categoria", title: "Cambiar la categoría de un flujo" },
  { id: "temas", title: "Los temas de criterios y reglas" },
  { id: "renombrar-o-unir", title: "Renombrar o unir temas" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="categorias" title="Las categorías de los flujos">
        <p>
          Las categorías ordenan el listado de Directrices → Flujos. Son de la
          agencia: se llevan en Directrices → «Categorías», bajo «Ajustes», con
          el permiso «Crear y cambiar flujos».
        </p>
        <Screenshot
          id="directrices/categorias"
          caption="Directrices → Categorías: cada categoría con cuántos flujos tiene y el campo para añadir una."
        />
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Para crear una, escribe su nombre en «Nueva categoría» y haz clic en
            «Añadir».
          </li>
          <li>
            Para renombrarla, haz clic en su nombre, escribe el nuevo y presiona
            Intro o sal del campo. Con Escape, el nombre queda como estaba.
          </li>
          <li>
            Para moverla, arrástrala: el orden de las categorías es el del
            listado de flujos.
          </li>
          <li>
            El icono de la papelera, «Quitar», la elimina. Sus flujos no se
            eliminan: quedan sin categoría, al final del listado, y los puedes
            pasar a otra.
          </li>
        </ul>
        <p>
          El agente no crea categorías: solo pone un flujo en una que ya existe.
        </p>
      </ArticleSection>

      <ArticleSection
        id="cambiar-la-categoria"
        title="Cambiar la categoría de un flujo"
      >
        <p>
          En la ficha del flujo, abre el menú «Más acciones» y elige «Cambiar
          categoría». La categoría solo dice dónde sale el flujo en el listado:
          no cambia lo que hace el agente. Al crear un flujo también se elige (
          <ArticleLink to="directrices/editar-y-publicar-un-flujo" />
          ).
        </p>
      </ArticleSection>

      <ArticleSection id="temas" title="Los temas de criterios y reglas">
        <p>
          Un tema agrupa los criterios y las reglas de reparto, en la lista y
          para el agente. Agrupa, pero no cambia cuándo lee el agente un
          criterio o una regla. Un tema nace al escribirlo en un criterio o en
          una regla.
        </p>
        <p>
          Directrices → «Temas», bajo «Ajustes», lista cada tema con cuántos
          criterios y cuántas reglas de reparto lo llevan. La sección es de
          quien tiene «Confirmar y editar los criterios» o «Definir el reparto y
          los plazos».
        </p>
        <Screenshot
          id="directrices/temas"
          caption="Directrices → Temas: cada tema con cuántos criterios lo llevan y «Renombrar»."
        />
      </ArticleSection>

      <ArticleSection id="renombrar-o-unir" title="Renombrar o unir temas">
        <p>
          «Renombrar», en la fila de un tema, lo cambia en todos los criterios y
          reglas que lo llevan. Si en «Tema nuevo» escribes uno que ya existe,
          los dos quedan unidos en ese. El texto de los criterios y las reglas
          no cambia.
        </p>
        <p>
          Cuando dos temas se parecen, la fila lo marca con «Parecido a…» y
          ofrece «Unir».
        </p>
        <Callout type="note">
          <p>
            Cada persona cambia el tema solo en lo que su permiso le deja: con
            el de los criterios, en los criterios; con el del reparto, en las
            reglas de reparto.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
