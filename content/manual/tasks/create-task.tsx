import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde", title: "Dónde se crea" },
  { id: "crear", title: "Crear la tarea" },
  { id: "los-campos", title: "Los campos" },
  { id: "el-responsable", title: "El responsable" },
  { id: "editar", title: "Cambiar lo que se pidió" },
  { id: "repetir", title: "Repetir una tarea" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde" title="Dónde se crea">
        <p>
          Crear tareas pide el permiso «Crear tareas». Con él, el botón «Nueva
          tarea» aparece en:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            La cabecera de Tareas, en cualquier sección salvo «Recurrentes»: ahí
            el botón es «Nueva recurrente» (
            <ArticleLink to="tareas/tareas-recurrentes" />
            ).
          </li>
          <li>
            La sección «Tareas» de la ficha de un cliente o de una póliza: el
            formulario abre con ese cliente y esa póliza puestos. En la ficha
            del cliente está también la acción rápida «Tarea».
          </li>
          <li>
            El menú de un mensaje de un chat, como «Crear tarea» (
            <ArticleLink to="chats/escribir-en-un-chat" />
            ).
          </li>
        </ul>
        <p>
          Lo que llega por una llamada, un mensaje o en persona lo registra
          quien lo atiende. Lo que llega por correo lo registra el agente al
          leer los correos vinculados.
        </p>
      </ArticleSection>

      <ArticleSection id="crear" title="Crear la tarea">
        <Video id="tareas/crear-una-tarea" />
        <Steps>
          <Step title="Haz clic en «Nueva tarea»">
            <p>Se abre el formulario «Nueva tarea».</p>
          </Step>
          <Step title="Escribe el título">
            <p>
              Qué hay que hacer, en una frase: «Cotizar todo riesgo para la
              camioneta nueva». Es el único campo obligatorio y admite hasta 140
              caracteres.
            </p>
          </Step>
          <Step title="Elige el tipo de trámite">
            <p>
              Bajo el campo, «Se cumple con» dice qué tiene que quedar en Nexus
              para darla por terminada. Por defecto es «Otra».
            </p>
          </Step>
          <Step title="Completa lo demás que sepas">
            <p>
              El responsable, la fecha límite, el cliente y la póliza, el canal
              por el que llegó, la prioridad, la descripción y los pasos.
            </p>
            <Screenshot
              id="tareas/nueva-tarea"
              caption="El formulario «Nueva tarea»: «Título», «Tipo de trámite» con la línea «Se cumple con», «Responsable» en «Reparto de la agencia» y los demás campos."
            />
          </Step>
          <Step title="Haz clic en «Crear tarea»">
            <p>Nexus dice «Tarea creada» y abre el panel de la tarea nueva.</p>
          </Step>
        </Steps>
      </ArticleSection>

      <ArticleSection id="los-campos" title="Los campos">
        <ManualTable
          head={["Campo", "Qué se pone"]}
          rows={[
            ["Título", "Qué hay que hacer. Obligatorio."],
            [
              "Tipo de trámite",
              <>
                Emisión, Renovación, Modificación, Cancelación, Cotización,
                Certificado o documento, Completar el registro, Siniestro, Cobro
                u Otra (
                <ArticleLink to="tareas/que-es-una-tarea" />
                ).
              </>,
            ],
            ["Responsable", "Quién la lleva. Ver la sección siguiente."],
            [
              "Fecha límite",
              "Para cuándo. Si la dejas vacía, se usa el plazo de su tipo en Tareas → Plazos, si tiene uno.",
            ],
            [
              "Cliente y Póliza",
              "El registro sobre el que se trabaja. Al cambiar el cliente, la póliza elegida se quita.",
            ],
            [
              "Canal de entrada",
              "Por dónde llegó: «Llamada», «Mensaje», «En persona», «Correo» u «Otro». Puede quedar «Sin indicar».",
            ],
            ["Prioridad", "«Normal» o «Urgente»."],
            [
              "Delegación",
              <>
                «Sin delegar» o «Al agente» (
                <ArticleLink to="tareas/delegar-al-agente" />
                ).
              </>,
            ],
            [
              "Descripción",
              "Lo que pidió el cliente, con qué coberturas, qué falta.",
            ],
            [
              "Pasos",
              "Uno por línea. Se van marcando mientras se trabaja la tarea.",
            ],
          ]}
        />
      </ArticleSection>

      <ArticleSection id="el-responsable" title="El responsable">
        <p>El selector «Responsable» ofrece:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Reparto de la agencia</strong>, la
            opción por defecto. Si la agencia tiene reglas de reparto vigentes y
            el agente conectado, la tarea nace sin responsable y el agente la
            asigna según esas reglas (
            <ArticleLink to="directrices/reparto" />
            ). Si no, la tarea queda a tu cargo.
          </li>
          <li>
            <strong className="font-medium">Sin asignar</strong>: queda libre.
            Quien la ve en su panel puede tomarla con «Asignármela».
          </li>
          <li>
            Una persona de la agencia. Para dársela a otra persona hace falta el
            permiso «Asignar tareas a otras personas»; sin él, la lista solo te
            ofrece a ti.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="editar" title="Cambiar lo que se pidió">
        <p>
          Mientras la tarea está abierta, quien la creó, quien la tiene a cargo
          o un administrador puede cambiarla: en el panel, abre «Más acciones de
          la tarea» (los tres puntos de arriba) y elige «Editar». El formulario
          «Editar tarea» cambia el título, el tipo, la fecha límite, el cliente,
          la póliza, la prioridad, la descripción y los pasos; el responsable se
          cambia en el panel.
        </p>
        <p>
          Cada cambio queda en la actividad de la tarea con el valor anterior.
          Cambiar el tipo cambia lo que se comprueba al cerrar, así que pide el
          «Motivo del cambio de tipo».
        </p>
        <Callout type="note">
          <p>
            Si quien tiene la tarea a cargo le quita trabajo a una tarea que
            abrió otra persona (otro tipo, pasos que desaparecen, una
            descripción más corta o una fecha límite más lejana), la tarea llega
            a «Por revisar» con el motivo «Modificada por su responsable».
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="repetir" title="Repetir una tarea">
        <p>
          Si una tarea se va a repetir con un ritmo fijo, abre «Más acciones de
          la tarea» y elige «Repetir esta tarea». Abre el formulario «Nueva
          tarea recurrente» con el título, el tipo, la descripción, los pasos,
          el cliente, la póliza, el responsable y la delegación de la tarea;
          falta decir cada cuánto se repite (
          <ArticleLink to="tareas/tareas-recurrentes" />
          ).
        </p>
        <p>
          La opción sale con el permiso «Crear tareas» y solo en una tarea que
          no es ya la ocurrencia de una recurrente.
        </p>
      </ArticleSection>
    </>
  );
}
