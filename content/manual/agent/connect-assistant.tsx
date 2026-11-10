import Link from "next/link";
import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "antes-de-empezar", title: "Antes de empezar" },
  { id: "anadir-el-conector", title: "Añadir el conector al asistente" },
  { id: "instrucciones", title: "Las instrucciones del agente" },
  { id: "aprobar-la-conexion", title: "Aprobar la conexión" },
  { id: "la-activacion", title: "La activación del agente" },
  { id: "cortar-o-reemplazar", title: "Cortar o reemplazar la conexión" },
];

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function Article() {
  return (
    <>
      <ArticleSection id="antes-de-empezar" title="Antes de empezar">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            La conexión del agente se hace en Agente › Configuración, que ve
            quien tiene el permiso «Conectar el agente y definir su horario».
          </li>
          <li>
            La aprueban el propietario o un administrador. Aprobada, el
            asistente trabaja como el agente de la agencia, con sus permisos.
          </li>
          <li>
            La agencia tiene una sola conexión del agente, y por ella entran
            todas sus rutinas. Una conexión nueva reemplaza a la anterior.
          </li>
          <li>
            Una cuenta del asistente que admita conectores. Qué planes los
            incluyen lo define cada proveedor.
          </li>
        </ul>
        <p>
          Para conectar tu propio asistente, que trabaja con tus permisos y no
          es el agente de la agencia, sigue{" "}
          <ArticleLink to="agente/mi-asistente" />.
        </p>
      </ArticleSection>

      <ArticleSection
        id="anadir-el-conector"
        title="Añadir el conector al asistente"
      >
        <p>
          En «Conexión del agente», «Conector de esta agencia» enseña el nombre
          del conector, «Nexus - Agente de la agencia», y su dirección. Quien
          pertenece a varias agencias ve también la agencia entre paréntesis
          («Nexus - Agente de la agencia (Altavista Seguros)»), para distinguir
          los conectores en su asistente. La dirección es la misma para todos
          los asistentes; lo que cambia es dónde se pega. Elige el tuyo en las
          pestañas «Claude», «ChatGPT» u «Otro cliente MCP».
        </p>
        <ManualTable
          head={["Asistente", "Cómo se añade"]}
          rows={[
            [
              "Claude",
              "«Añadir a Claude» abre Claude con el conector listo. En Claude Team o Enterprise lo añade un Owner de la organización, con el enlace que copia «Enlace para Owner».",
            ],
            [
              "ChatGPT",
              "«Copiar dirección» y «Abrir ChatGPT». En ChatGPT, abre Plugins, haz clic en «+» y elige «Add custom MCP server». Pega la dirección del conector y elige OAuth como autenticación.",
            ],
            [
              "Otro cliente MCP",
              "«Copiar dirección». En tu asistente o en tu orquestador, añade un servidor MCP remoto con la dirección del conector y autenticación OAuth.",
            ],
          ]}
        />
        <Screenshot
          id="agente/configuracion"
          caption="Agente › Configuración con el agente conectado y «Datos del conector» abierto: la franja «Puesta en marcha» con sus pasos y, debajo, «Conexión del agente» con «Nexus - Agente de la agencia», las pestañas «Claude», «ChatGPT» y «Otro cliente MCP» e «Instrucciones del agente»."
        />
      </ArticleSection>

      <ArticleSection id="instrucciones" title="Las instrucciones del agente">
        <p>
          Debajo del conector, «Instrucciones del agente» enseña el texto con
          que Nexus se presenta al asistente: qué es el agente, cómo empieza
          cada trabajo y sus reglas de fondo. Nexus lo entrega solo al
          conectarse.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Si el asistente trabaja por proyectos, «Copiar instrucciones» copia
            el texto para pegarlo también en las instrucciones del proyecto.
          </li>
          <li>
            En las rutinas de la agencia, deja desactivado el envío de correo de
            otros conectores: los correos salen por Nexus, después de que una
            persona los revisa.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection id="aprobar-la-conexion" title="Aprobar la conexión">
        <p>
          Al conectar, el asistente abre la página de autorización de Nexus. Lo
          que pasa después depende de cómo se añadió el conector.
        </p>
        <Steps>
          <Step title="Con el conector de la agencia: compara el código">
            <p>
              En Agente › Configuración aparece, arriba, una «Solicitud de
              conexión»: el nombre del programa que «pide conectarse como agente
              de» la agencia y un código. Haz clic en «Aprobar» solo si el
              código coincide con el que ves en la página de autorización. Si no
              lo reconoces, «Rechazar».
            </p>
          </Step>
          <Step title="Con la dirección general: escribe el código">
            <p>
              Si conectaste Nexus con la dirección general del conector, como
              desde el directorio de Claude, la página de autorización muestra
              un código de ocho caracteres. Escríbelo en «¿El asistente muestra
              un código de ocho caracteres?» y haz clic en «Conectar».
              Escribirlo une la conexión a esta agencia y la aprueba.
            </p>
          </Step>
          <Step title="Vuelve al asistente">
            <p>
              Al aprobarla, el aviso dice «Conexión aprobada». La página de
              autorización sigue sola y vuelve al asistente.
            </p>
          </Step>
        </Steps>
        <p>
          Con la conexión hecha, el bloque dice «Conectado como agente de» la
          agencia, con el programa, quién la autorizó, cuándo y su «Último uso».
        </p>
      </ArticleSection>

      <ArticleSection id="la-activacion" title="La activación del agente">
        <p>
          «Activación del agente» es cómo Nexus avisa al asistente cuando
          alguien le delega una tarea, le deja una nota o responde una duda
          suya. También lo avisa cuando abre la ocurrencia de una tarea
          recurrente delegada al agente, cuando una tarea en espera llega a su
          fecha de seguimiento y cuando algo nace sin responsable y hay que
          repartirlo. Se configura una vez, en el asistente que usa la agencia.
          En «Cómo despierta Nexus al agente» se elige el tipo:
        </p>
        <ManualTable
          head={["Opción", "Qué es"]}
          rows={[
            ["Claude", "Una rutina de Claude con disparador por API."],
            [
              "ChatGPT",
              "Un agente de espacio de trabajo con disparador por API. La pantalla indica que requiere ChatGPT Business o Enterprise.",
            ],
            [
              "Otro asistente",
              "Para un asistente sin disparador propio. Nexus envía un webhook firmado a una dirección https.",
            ],
          ]}
        />
        <Steps>
          <Step title="Crea la rutina en el asistente">
            <p>
              Copia la indicación de Nexus con «Copiar indicación»: le dice al
              agente que atienda solo los avisos de Nexus. La pantalla da, paso
              a paso, cómo crear la rutina en el asistente elegido.
            </p>
          </Step>
          <Step title="Pega el disparador">
            <p>
              En «Pegar el disparador», la «Dirección del disparador» y la
              «Clave del disparador» que da el asistente, y haz clic en «Guardar
              disparador». La clave se guarda cifrada en Nexus y no se vuelve a
              mostrar. Con «Otro asistente», escribes la dirección a la que
              Nexus envía el webhook firmado.
            </p>
          </Step>
          <Step title="Comprueba la prueba">
            <p>
              Al guardar el disparador, Nexus envía una prueba: activa al agente
              sin nada que atender, y él solo comprueba que llega a Nexus. El
              resultado aparece en «Probar la activación»; «Enviar prueba» la
              repite.
            </p>
          </Step>
        </Steps>
        <p>
          Con el disparador guardado, «Activar al agente» enciende o apaga la
          activación sin borrar el disparador. Apagada, lo que se le delega
          espera a que alguien se lo pida en el asistente. «Horario de atención»
          fija los días y las horas en que Nexus activa al agente: fuera de ese
          horario, lo que se le delega espera y la activación sale al abrir.
          «Últimas activaciones» enseña cómo salió cada una.
        </p>
        <Callout type="warning" title="Si la activación no llega">
          <p>
            El bloque dice «La última activación no llegó» con el motivo. Revisa
            el disparador en el asistente y, si cambió, «Cambiar disparador».
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="cortar-o-reemplazar"
        title="Cortar o reemplazar la conexión"
      >
        <ul className="list-disc space-y-2 pl-5">
          <li>
            «Cortar la conexión», en el bloque de la conexión, hace que el
            asistente deje de entrar en Nexus de inmediato. Para volver a
            usarlo, hay que conectarlo otra vez.
          </li>
          <li>
            Para cambiar de asistente, «Datos del conector» vuelve a enseñar el
            conector. Al aprobar la conexión nueva («Aprobar y reemplazar», o
            «Reemplazar» si escribes un código), la actual deja de funcionar en
            cuanto el asistente nuevo termine de conectarse.
          </li>
        </ul>
        <p>
          La guía pública, con la conexión desde el directorio de Claude, está
          en{" "}
          <Link href="/agente" className={linkClassName}>
            Conectar Claude con Nexus
          </Link>
          . Los demás pasos de la puesta en marcha siguen en{" "}
          <ArticleLink to="agente/configuracion-del-agente" />.
        </p>
      </ArticleSection>
    </>
  );
}
