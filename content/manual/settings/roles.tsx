import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "roles-fijos", title: "Los roles fijos" },
  { id: "roles-de-la-agencia", title: "Los roles de la agencia" },
  { id: "armar-un-rol", title: "Armar un rol" },
  { id: "leer-un-permiso", title: "Cómo se lee un permiso" },
  { id: "delicados", title: "Los permisos delicados" },
  { id: "propuestos", title: "Roles que propone el agente" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="roles-fijos" title="Los roles fijos">
        <p>
          Configuración → Equipo → «Roles» lista los roles de la agencia. La ve
          quien tiene el permiso «Ver los roles». Cada fila dice para qué es el
          rol, cuántos permisos da y en cuántos módulos, cuántos de ellos son
          delicados y cuántas personas lo tienen.
        </p>
        <p>
          Cuatro roles vienen con Nexus. Se pueden abrir para leer lo que
          permiten, pero no se editan.
        </p>
        <ManualTable
          head={["Rol", "Qué permite"]}
          rows={[
            [
              "Propietario",
              "Quien creó la agencia. Puede hacer todo, incluido lo reservado al propietario.",
            ],
            ["Administrador", "Puede hacer todo en la agencia."],
            [
              "Miembro",
              "Lo que tiene quien entra con el código de invitación, hasta que se le asigne un rol.",
            ],
            [
              "Agente",
              "Lo que puede el agente de la agencia. Cuando trabaja para una persona, puede lo mismo que ella. Nunca ve la comisión.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="roles-de-la-agencia" title="Los roles de la agencia">
        <p>
          Además de los fijos, la agencia arma los suyos («Comercial»,
          «Operaciones»). Crearlos, editarlos y eliminarlos pide el permiso
          «Crear, editar y eliminar roles». El menú de cada rol ofrece «Editar»,
          «Duplicar» (abre un rol nuevo con los mismos permisos) y «Eliminar».
        </p>
        <p>
          Si eliminas un rol que tienen personas, esas personas pasan a ser
          Miembro. El rol que tienes asignado no lo puedes cambiar tú: solo otra
          persona.
        </p>
        <p>
          A quién se le da cada rol se decide en{" "}
          <ArticleLink to="configuracion/miembros" />.
        </p>
      </ArticleSection>

      <ArticleSection id="armar-un-rol" title="Armar un rol">
        <Video id="configuracion/roles-y-permisos" />
        <Steps>
          <Step title="Haz clic en «Nuevo rol»">
            <p>
              Se abre la página del rol. Escribe su «Nombre», obligatorio, y una
              «Descripción» que diga para qué es.
            </p>
          </Step>
          <Step title="Elige un módulo">
            <p>
              A la izquierda están los módulos, en dos grupos: «Operación»
              (Inicio, Tareas, Chats, Clientes, Pólizas, Directrices, Contactos,
              Documentos, Accesos) y «Configuración» (Agencia, Catálogos,
              Plantillas, Equipo, Agente, Bitácora). Cada uno dice cuántos de
              sus permisos da el rol. «Buscar un permiso» encuentra uno por su
              nombre.
            </p>
          </Step>
          <Step title="Marca los permisos">
            <p>
              Los permisos de cada módulo se ordenan en «Ver», «Acciones» y
              «Administrar». «Marcar todo» marca los del módulo de una vez.
              «Todo lo concedido» reúne lo que el rol da, módulo por módulo.
            </p>
            <Screenshot
              id="configuracion/rol-nuevo"
              caption="Un rol nuevo, «Auxiliar de emisión», en el módulo Pólizas: los permisos bajo «Ver», «Acciones» y «Administrar», con dos marcados como «Delicado»."
            />
          </Step>
          <Step title="Haz clic en «Crear rol»">
            <p>
              Aparece «Rol creado». Al editar un rol, el botón es «Guardar
              cambios».
            </p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="leer-un-permiso" title="Cómo se lee un permiso">
        <ManualTable
          head={["En el permiso", "Qué significa"]}
          rows={[
            [
              "«Necesita: …»",
              "Ese permiso no sirve sin otro. Al marcarlo, Nexus marca también el que necesita y lo dice («También se marcó …: este permiso lo necesita»); al quitar el necesario, quita los que dependen de él.",
            ],
            [
              "«Delicado»",
              "Tiene un riesgo, que dice su descripción. Solo lo concede un administrador o el propietario.",
            ],
            [
              "«Siempre»",
              "Lo que todo miembro tiene en ese módulo, sin permiso.",
            ],
            [
              "«Reservado»",
              "Lo que no es un permiso: es del propietario o de los administradores.",
            ],
            [
              "«Solo lo concede un administrador o el propietario»",
              "Es delicado y tú no eres ni lo uno ni lo otro.",
            ],
            [
              "«No puedes conceder un permiso que no tienes»",
              "Solo se da lo que uno mismo tiene.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="delicados" title="Los permisos delicados">
        <p>
          Estos permisos llevan la marca «Delicado» en la versión 0.68.3. Solo
          los concede un administrador o el propietario.
        </p>
        <ManualTable
          head={["Permiso", "Por qué es delicado"]}
          rows={[
            ["Ver la vista «Agencia»", "Enseña el dinero de la agencia."],
            [
              "Ver datos reservados y comisiones",
              "Enseña el dinero de la agencia.",
            ],
            [
              "Eliminar tareas, Eliminar clientes, Eliminar pólizas, Eliminar documentos",
              "No se puede deshacer.",
            ],
            [
              "Añadir el agente a un grupo",
              "Una IA lee lo que el equipo escribe en ese grupo.",
            ],
            [
              "Cancelar y reactivar pólizas",
              "Saca la póliza de la cartera vigente.",
            ],
            [
              "Crear y cambiar flujos",
              "Cambia lo que el agente hace en cada trabajo.",
            ],
            [
              "Guardar y editar accesos",
              "Escribe las credenciales de la agencia.",
            ],
            [
              "Editar los datos de la agencia",
              "Cambia la identidad de la agencia.",
            ],
            [
              "Conectar con aseguradoras",
              "Guarda las credenciales de la agencia con cada aseguradora.",
            ],
            [
              "Operar los portales de las aseguradoras",
              "Consulta los portales con el acceso de la agencia.",
            ],
            ["Invitar personas", "El código deja entrar a la agencia."],
            [
              "Asignar roles y permisos adicionales, Retirar personas, Crear, editar y eliminar roles",
              "Cambia quién puede hacer qué en la agencia.",
            ],
            [
              "Enviar los correos que redacta el agente",
              "Un correo enviado sale de la agencia y no se deshace.",
            ],
            [
              "Llevar las reglas de correo",
              "Una regla puede hacer que el agente deje de atender correos que sí importan.",
            ],
            [
              "Conectar su propio asistente",
              "Una IA actúa en Nexus con lo que esta persona puede.",
            ],
            [
              "Vincular correos y decidir quién los lee",
              "Maneja las claves de los correos.",
            ],
            [
              "Conectar el agente y definir su horario",
              "El agente actúa con lo que puede quien lo conecta.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="propuestos" title="Roles que propone el agente">
        <p>
          El agente puede proponer un rol nuevo o un cambio en uno que existe.
          El rol propuesto sale en la lista con «Por confirmar», un cambio en
          uno existente con «Cambio por confirmar», y la entrada «Roles» del
          menú lleva el número de los que esperan.
        </p>
        <p>
          Al abrirlo, el bloque «Rol propuesto por el agente» (o «Cambio
          propuesto por el agente») dice qué se añade y qué se quita. Un rol
          propuesto aún no se puede asignar: puedes ajustar sus permisos antes,
          y «Confirmar» lo deja con lo que está guardado. «Descartar» deja la
          propuesta sin efecto.
        </p>
        <Callout type="note">
          <p>
            Lo decide quien tiene el permiso «Crear, editar y eliminar roles».
            Hasta entonces, el rol sigue como estaba.
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
