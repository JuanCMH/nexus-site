import { ArticleLink } from "@/components/manual/article-link";
import { ArticleSection } from "@/components/manual/article-section";
import { Callout } from "@/components/manual/callout";
import { ManualTable } from "@/components/manual/manual-table";
import { Screenshot } from "@/components/manual/screenshot";
import { Step, Steps } from "@/components/manual/steps";
import type { ManualArticleSection } from "../types";

export const sections: ManualArticleSection[] = [
  { id: "que-es", title: "Qué es un modelo" },
  { id: "crear", title: "Crear un modelo" },
  { id: "datos", title: "Los datos entre llaves" },
  { id: "usar", title: "Usar un modelo" },
  { id: "quien", title: "Quién los escribe" },
];

export function Article() {
  return (
    <>
      <ArticleSection id="que-es" title="Qué es un modelo">
        <p>
          Un modelo es un correo tipo de la agencia: un aviso de renovación, un
          cobro, una bienvenida. Tiene un asunto y un mensaje con datos entre
          llaves que Nexus completa con los del cliente o la póliza desde cuya
          ficha se escribe. El agente los lee y los sigue al redactar.
        </p>
        <p>
          Están en «Correos → Modelos», en el grupo «Ajustes» del menú. La lista
          da el nombre de cada modelo y cuándo usarlo; el elegido se ve al lado,
          como quedaría. Si no hay ninguno, la lista dice «Aún no hay modelos de
          correo».
        </p>
      </ArticleSection>

      <ArticleSection id="crear" title="Crear un modelo">
        <Steps>
          <Step title="Haz clic en «Nuevo modelo»">
            <p>En la barra superior de «Correos → Modelos».</p>
          </Step>
          <Step title="Ponle «Nombre» y «Cuándo usarlo»">
            <p>
              El nombre es el que aparece al elegirlo («Aviso de renovación»).
              «Cuándo usarlo» es para el agente: lo lee para saber cuándo seguir
              este modelo.
            </p>
          </Step>
          <Step title="Escribe el «Asunto» y el «Mensaje»">
            <p>
              Con el mismo editor y el mismo formato que un correo (
              <ArticleLink to="correos/escribir-un-correo" />
              ). «Insertar dato» pone los datos entre llaves.
            </p>
          </Step>
          <Step title="Añade los adjuntos fijos, si los hay">
            <p>
              Los documentos que acompañan siempre a este correo salen en cada
              correo que use el modelo.
            </p>
          </Step>
          <Step title="Haz clic en «Crear modelo»" />
        </Steps>
        <Screenshot
          id="correos/modelo-nuevo"
          caption="La ventana «Nuevo modelo de correo»: «Nombre», «Cuándo usarlo», «Asunto» con {poliza} y el mensaje con el dato {cliente} insertado."
        />
        <p>
          Un modelo se cambia con «Editar», junto a su vista previa. «Borrar»,
          dentro del formulario, lo quita; los correos que ya se escribieron con
          él no cambian.
        </p>
      </ArticleSection>

      <ArticleSection id="datos" title="Los datos entre llaves">
        <p>
          «Insertar dato» ofrece los datos del sistema y los campos de las
          plantillas de clientes y de pólizas de la agencia. Los del sistema son
          estos:
        </p>
        <ManualTable
          head={["Se escribe", "Se completa con"]}
          rows={[
            ["{cliente}", "Cliente"],
            ["{poliza}", "Número de póliza"],
            ["{aseguradora}", "Aseguradora"],
            ["{ramo}", "Ramo"],
            ["{inicio_vigencia}", "Inicio de vigencia"],
            ["{fin_vigencia}", "Fin de vigencia"],
          ]}
        />
        <p>
          Desde la ficha de un cliente o de una póliza, Nexus los completa al
          elegir el modelo. Desde «Correos», sin un registro, quedan entre
          llaves y Nexus avisa «Faltan datos del modelo»: hay que escribirlos a
          mano antes de enviar.
        </p>
      </ArticleSection>

      <ArticleSection id="usar" title="Usar un modelo">
        <p>
          En el panel «Nuevo correo», el campo «Modelo» lista los de la agencia.
          Al elegir uno, el asunto y el mensaje se reemplazan por los del modelo
          y sus adjuntos se suman a los que ya había. Si ya habías escrito algo,
          Nexus pregunta antes con «Usar el modelo».
        </p>
        <p>
          Lo que sale del modelo se puede corregir como cualquier correo antes
          de enviarlo: el modelo no cambia.
        </p>
      </ArticleSection>

      <ArticleSection id="quien" title="Quién los escribe">
        <p>
          Los modelos son la voz de la agencia frente a sus clientes. Los crea y
          los cambia quien tiene el permiso «Enviar los correos que redacta el
          agente».
        </p>
        <p>
          Quien no lo tiene pero tiene «Proponer cambios en la configuración» ve
          «Proponer modelo» en la barra y «Proponer cambios» en cada modelo. Lo
          que propone no cambia los modelos de la agencia hasta que lo aplica
          quien envía correos. Los demás los abren para leerlos.
        </p>
        <Callout type="note">
          <p>
            El agente no cambia un modelo por su cuenta: puede pedirlo en una
            solicitud que aprueba una persona (
            <ArticleLink to="agente/permisos-y-solicitudes" />
            ).
          </p>
        </Callout>
      </ArticleSection>
    </>
  );
}
