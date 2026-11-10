/**
 * El texto del Acuerdo de uso de Nexus, que `/terminos` publica
 * (docs/plans/2026-11-10-terminos-design.md). Es copia fiel de
 * `nexus-app/src/shared/legal/agency-agreement.ts`, la única fuente: mismas
 * cláusulas, mismo orden, mismas palabras. Aquí no se redacta; si allá
 * cambia, se copia aquí y se actualiza `AGENCY_AGREEMENT` en `lib/legal.ts`
 * en el mismo cambio.
 */

import { CONTROLLER } from "@/lib/legal";
import { SUPPORT_EMAIL } from "@/lib/site";

export type AgreementSection = {
  title: string;
  /** Sin su número: lo pone la página («2.3.»), como en la app. */
  clauses: readonly string[];
};

export const AGENCY_AGREEMENT_TITLE = "Acuerdo de uso de Nexus";

// La dirección va sin «, Colombia», como en el texto de la app.
export const AGENCY_AGREEMENT_INTRO = `Este acuerdo se celebra entre ${CONTROLLER.name}, NIT ${CONTROLLER.nit}, con domicilio en la Carrera 7 B n.º 123-46, Bogotá D.C. (el «Proveedor»), titular de Nexus, y la agencia que crea una cuenta en Nexus (la «Agencia»), representada por el usuario que la creó (el «Propietario»). El Propietario lo acepta al crear la Agencia o, si esta ya existe, la primera vez que abre Nexus después de su publicación.`;

export const AGENCY_AGREEMENT_SECTIONS: readonly AgreementSection[] = [
  {
    title: "El servicio",
    clauses: [
      "El Proveedor concede a la Agencia el uso de Nexus y de todas las funciones incluidas en su plan mientras este esté vigente. Las funciones pueden cambiar con el tiempo; las disponibles son las que Nexus ofrece al plan de la Agencia en cada momento. Toda la información que la Agencia y sus usuarios registran en Nexus constituye los «Datos de la Agencia».",
      "El Proveedor no es aseguradora ni intermediario de seguros, y no asesora ni decide sobre las pólizas o los clientes de la Agencia.",
      "Las funciones que dependen de un servicio que la Agencia contrata con un tercero, como la inteligencia artificial, se rigen también por los términos de ese tercero, y su costo corre por cuenta de la Agencia.",
    ],
  },
  {
    title: "Compromisos del Proveedor",
    clauses: [
      "Mantener Nexus disponible, corregir sus fallos y acusar recibo de cada reporte dentro de dos (2) días hábiles.",
      "Alojar los Datos de la Agencia solo en proveedores de infraestructura con una certificación de seguridad de la información vigente, emitida por un auditor independiente, y protegerlos con medidas técnicas y administrativas de seguridad, incluidos el cifrado de las comunicaciones y el control de acceso por usuario.",
      "No vender, ceder ni compartir los Datos de la Agencia, ni usarlos o consultarlos salvo para prestar el servicio, a solicitud de la Agencia o para corregir un fallo.",
      "Avisar con treinta (30) días calendario de anticipación los cambios de precio, los de este acuerdo y los que reduzcan las funciones de Nexus.",
      "Permitir que el Propietario exporte los Datos de la Agencia en cualquier momento, sin costo.",
    ],
  },
  {
    title: "Compromisos de la Agencia",
    clauses: [
      "Usar Nexus conforme a la ley colombiana, con datos veraces y actualizados.",
      "Mantener en reserva sus credenciales de acceso e informar al Proveedor cualquier acceso no autorizado dentro de las veinticuatro (24) horas siguientes a conocerlo.",
      "Definir quién ingresa y con qué permisos. El Propietario y los administradores pueden consultar toda la información y la actividad de los demás usuarios, y la Agencia se lo informa a ellos.",
      "Responder por la exactitud de los Datos de la Agencia y revisar lo que una función automatizada o de inteligencia artificial le proponga antes de confirmarlo.",
      "Pagar el plan en el plazo de cada estado de cuenta, y abstenerse de acceder a información ajena, copiar el software o usarlo para dañar a terceros.",
    ],
  },
  {
    title: "Datos personales",
    clauses: [
      "Los Datos de la Agencia son de la Agencia. Conforme a la Ley 1581 de 2012, la Agencia es la responsable del tratamiento de los datos de sus clientes, obtiene su autorización y atiende sus reclamos; el Proveedor es el encargado y los trata solo para prestar el servicio.",
      "La Agencia autoriza que sus datos se almacenen en servidores ubicados fuera de Colombia, en proveedores que cumplan el numeral 2.2.",
      "La información que Nexus cifra en el equipo de la Agencia antes de enviarla no puede ser leída ni recuperada por el Proveedor. Los registros técnicos de errores se conservan treinta (30) días.",
      "El Proveedor informará al Propietario cualquier incidente de seguridad que afecte los Datos de la Agencia dentro de las setenta y dos (72) horas siguientes a conocerlo.",
    ],
  },
  {
    title: "Plan, pagos y terminación",
    clauses: [
      "Cada plan tiene los límites de uso que Nexus indica para él. Superarlos impide crear elementos nuevos, pero nunca bloquea ni elimina los existentes.",
      "En cada periodo el Proveedor emite un estado de cuenta con el valor del plan y su plazo de pago.",
      "La Agencia puede cambiar o cancelar su plan por escrito al correo de soporte. La cancelación surte efecto al final del periodo pagado.",
      "El Proveedor puede suspender el acceso quince (15) días calendario después de un aviso escrito por falta de pago, y cinco (5) días después por un uso contrario a la ley o a este acuerdo, o de inmediato si ese uso pone en riesgo a terceros.",
      "Durante una suspensión o tras la terminación, los Datos de la Agencia se conservan treinta (30) días calendario para su exportación y luego se eliminan.",
    ],
  },
  {
    title: "Responsabilidad, cambios y ley aplicable",
    clauses: [
      "La responsabilidad del Proveedor se limita a lo pagado por la Agencia en los doce (12) meses anteriores al hecho, y no cubre las decisiones de la Agencia, lo que un usuario confirme de una propuesta automatizada ni los servicios de terceros.",
      "Si este acuerdo cambia, el Propietario debe aceptar la nueva versión para seguir usando Nexus. Si no la acepta, puede terminarlo y exportar sus datos.",
      `Este acuerdo se rige por la ley colombiana. Las comunicaciones al Proveedor van a ${SUPPORT_EMAIL}, y las dirigidas a la Agencia, al correo con que el Propietario ingresa a Nexus.`,
    ],
  },
];

export const AGENCY_AGREEMENT_ACCEPTANCE =
  "Al marcar «Acepto», el Propietario declara que leyó este acuerdo, que puede obligar a la Agencia y que lo acepta en su nombre. Nexus registra quién lo aceptó, cuándo y qué versión.";
