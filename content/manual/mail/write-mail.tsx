import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import { Video } from "@/components/manual/video";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "donde", title: "Desde dónde se escribe" },
  { id: "escribir", title: "Escribir el correo" },
  { id: "responder", title: "Responder o reenviar" },
  { id: "correo-principal", title: "Tu correo principal" },
  { id: "formato", title: "El formato del mensaje" },
  { id: "adjuntos", title: "Los adjuntos" },
  { id: "guardar-o-enviar", title: "Guardar, probar o enviar" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="donde" title="Desde dónde se escribe">
        <p>
          Un correo se escribe en el panel «Nuevo correo». Se abre desde varios
          sitios, y es el mismo panel en todos:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            En «Correos», con el botón «Nuevo correo» de la barra superior.
          </li>
          <li>
            En la ficha de un cliente, con la acción «Correo». El panel abre con
            las direcciones del cliente en «Para».
          </li>
          <li>En la ficha de una póliza, con «Enviar correo».</li>
          <li>
            En una tarea, con «Enviar correo», en el bloque de sus documentos.
          </li>
          <li>
            En la conversación de un correo, con «Responder», «Responder a
            todos» o «Reenviar» (
            <ArticleLink to="correos/conversacion-de-un-correo" />
            ).
          </li>
        </ul>
        <p>
          Lo que se escribe desde una ficha o una tarea queda asociado a ese
          registro: aparece en el bloque «Correos» de la ficha, y un modelo
          completa sus datos con los del cliente o la póliza (
          <ArticleLink to="correos/modelos-de-correo" />
          ).
        </p>
        <Callout type="note">
          <p>
            Escribir correos requiere el permiso «Enviar los correos que redacta
            el agente». Sin él, el botón no aparece.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="escribir" title="Escribir el correo">
        <Video id="correos/escribir-un-correo" />
        <Steps>
          <Step title="Elige «Desde»">
            <p>
              El correo vinculado del que sale. Solo aparecen los que tienen el
              envío permitido. Viene elegido tu correo principal, si tienes uno;
              si no, y hay uno solo, ese. Si no hay ninguno, el panel dice
              «Ningún correo vinculado tiene el envío permitido».
            </p>
          </Step>
          <Step title="Elige un «Modelo», si hay uno que sirva">
            <p>
              Llena el asunto y el mensaje con los del modelo. Si ya habías
              escrito algo, Nexus pregunta antes de reemplazarlo. «Sin modelo»
              deja el correo en blanco.
            </p>
          </Step>
          <Step title="Completa «Para» y «Asunto»">
            <p>
              Varias direcciones van separadas por comas. Desde una ficha, bajo
              «Para» aparecen las direcciones del registro que aún no están
              puestas: un clic las añade. «Con copia» y, con «Añadir copia
              oculta», «Copia oculta» completan los destinatarios.
            </p>
          </Step>
          <Step title="Escribe el mensaje">
            <p>
              En la pestaña «Editar». La firma, el logo y el pie de la agencia
              no se escriben: se añaden al enviar, y se ven en «Vista previa».
            </p>
          </Step>
        </Steps>
        <Screenshot
          id="correos/nuevo-correo"
          caption="El panel «Nuevo correo» con «Desde», «Para», «Asunto» y el mensaje escritos, y al pie «Enviarme una prueba», «Guardar» y «Enviar»."
        />
      </ArticleSection>

      <ArticleSection id="responder" title="Responder o reenviar">
        <p>
          Desde la conversación de un correo, el panel se abre con el nombre del
          botón y los datos puestos:
        </p>
        <ManualTable
          head={["Botón", "Qué trae"]}
          rows={[
            [
              "«Responder»",
              "«Para» con quien escribió y el asunto con «Re:» delante. El panel dice «Sale desde …, en la misma conversación», y «Desde» queda fijo en el correo vinculado de la conversación. El correo original va citado debajo de la respuesta.",
            ],
            [
              "«Responder a todos»",
              "Lo mismo, con los demás destinatarios del original en «Para» y «Con copia», sin el correo vinculado desde el que se responde.",
            ],
            [
              "«Reenviar»",
              "El asunto con «RV:» delante y el correo original debajo de «---------- Mensaje reenviado ----------». «Para» queda vacío, y «Desde» viene con el correo vinculado de la conversación.",
            ],
          ]}
        />
        <p>Lo demás se escribe, se guarda y se envía como cualquier correo.</p>
      </ArticleSection>

      <ArticleSection id="correo-principal" title="Tu correo principal">
        <p>
          El correo principal es el correo vinculado desde el que escribes por
          omisión. Viene elegido en «Desde» al abrir «Nuevo correo», y el agente
          redacta desde él lo que le pidas sin indicar otro correo. Sin correo
          principal, el agente pregunta desde cuál.
        </p>
        <p>
          Cada persona elige el suyo en «Tu perfil», en «Correo principal» (
          <ArticleLink to="configuracion/tu-cuenta" />
          ). Quien vincula correos también lo asigna desde el panel del correo,
          en «Correo principal de» (
          <ArticleLink to="correos/vincular-un-correo" />
          ). Solo puede ser principal un correo que la persona consulta y que
          tiene el envío permitido.
        </p>
      </ArticleSection>

      <ArticleSection id="formato" title="El formato del mensaje">
        <p>
          La barra sobre el mensaje da formato al texto seleccionado. Cada botón
          dice su nombre al pasar el cursor:
        </p>
        <ManualTable
          head={["Botón", "Qué hace"]}
          rows={[
            ["«Negrita», «Cursiva», «Subrayado»", "Resaltan el texto."],
            [
              "«Lista», «Lista numerada»",
              "Convierten los párrafos en una lista.",
            ],
            [
              "«Enlace»",
              "Pide la «Dirección del enlace»: una dirección web o un correo. «Quitar el enlace» lo deshace.",
            ],
            [
              "«Tabla»",
              "Inserta una tabla. Dentro de ella aparecen «Añadir fila», «Añadir columna» y «Quitar la tabla».",
            ],
            ["«Cita», «Separador»", "Un bloque citado o una línea divisoria."],
            [
              "«Insertar dato»",
              "Añade un dato entre llaves, como {cliente} o {poliza}, que Nexus completa con los datos del registro.",
            ],
          ]}
        />
        <p>
          Un dato entre llaves solo se completa si el correo se escribe desde la
          ficha de un cliente o una póliza. Si queda alguno sin completar, Nexus
          lo avisa y no deja enviar hasta reemplazarlo por el texto que
          corresponde.
        </p>
      </ArticleSection>

      <ArticleSection id="adjuntos" title="Los adjuntos">
        <p>Bajo el mensaje, «Adjuntos» tiene dos botones:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Añadir documento»</strong> busca
            entre los documentos guardados en Nexus. Desde una ficha o una tarea
            propone primero los de ese registro; si escribes, busca en toda la
            agencia.
          </li>
          <li>
            <strong className="font-medium">«Subir archivo»</strong> toma un
            archivo de tu computador. Se guarda como documento del registro
            desde el que escribes o, si no hay registro, en «Información de la
            agencia → Correos enviados».
          </li>
        </ul>
        <p>
          «Añadir documento» aparece si tu rol puede ver los documentos; «Subir
          archivo», si puede gestionarlos. Un correo lleva hasta 10 adjuntos:
          con alguno puesto, una línea dice cuántos van y cuánto pesan, junto a
          una barra con lo que cabe en un correo.
        </p>
      </ArticleSection>

      <ArticleSection id="guardar-o-enviar" title="Guardar, probar o enviar">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">«Guardar»</strong> deja el correo en
            «Por enviar» sin enviarlo, para terminarlo después o para que lo
            envíe otra persona.
          </li>
          <li>
            <strong className="font-medium">«Enviarme una prueba»</strong> lo
            manda a tu propia dirección, sin los adjuntos.
          </li>
          <li>
            <strong className="font-medium">«Enviar»</strong> pide confirmación:
            «Se envía ahora. Un correo enviado no se puede deshacer.», con una
            línea para «Desde», «Para», «Copia», «Copia oculta» y «Adjuntos».
            «Enviar correo» lo envía. Si el envío falla, el correo queda en «Por
            enviar» para reintentarlo.
          </li>
        </ul>
        <p>
          Lo que pasa después con un correo guardado está en{" "}
          <ArticleLink to="correos/revisar-y-enviar" />.
        </p>
      </ArticleSection>
    </>
  );
}
