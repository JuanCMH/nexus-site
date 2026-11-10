import type { ManualArticleMeta } from "../types";

/** Los artículos de «cotizaciones-de-cumplimiento», en su orden de lectura (03 §3.2). */
export const COMPLIANCE_QUOTES_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "crear-una-cotizacion",
    category: "cotizaciones-de-cumplimiento",
    title: "Crear una cotización de cumplimiento",
    description:
      "Cotiza una póliza de cumplimiento o de seriedad de la oferta: el contrato, los amparos, sus tasas y la prima que resulta",
    keywords: [
      "nueva cotización",
      "cotizar",
      "seriedad de la oferta",
      "amparos",
      "tasa",
      "prima",
      "tomador",
      "asegurado",
      "beneficiario",
      "contrato",
      "IVA",
      "gastos de expedición",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "estados-de-una-cotizacion",
    category: "cotizaciones-de-cumplimiento",
    title: "Estados de una cotización",
    description:
      "Borrador, enviada, aceptada, rechazada y convertida: qué significa cada estado, cómo se cambia y cómo una cotización pasa a póliza",
    keywords: [
      "borrador",
      "enviada",
      "aceptada",
      "rechazada",
      "convertida",
      "vencida",
      "por vencer",
      "por revisar",
      "crear póliza",
      "convertir en póliza",
      "eliminar cotización",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "exportar-una-cotizacion",
    category: "cotizaciones-de-cumplimiento",
    title: "Exportar una cotización",
    description:
      "Genera el PDF o el Excel de una cotización con la marca de la agencia; el archivo queda guardado en Documentos",
    keywords: [
      "PDF",
      "Excel",
      "descargar cotización",
      "logo",
      "color de marca",
      "imprimir",
      "enviar al cliente",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "calculo-y-amparos",
    category: "cotizaciones-de-cumplimiento",
    title: "Reglas de cálculo y amparos de la agencia",
    description:
      "Cómo calcula la agencia la prima de sus cotizaciones, qué amparos ofrece y quién puede cambiarlo",
    keywords: [
      "ajustes",
      "cálculo",
      "base del año",
      "360 días",
      "prima mínima",
      "redondeo",
      "IVA",
      "por mil",
      "lista de amparos",
      "nuevo amparo",
      "configurar el cotizador",
    ],
    appVersion: "0.68.3",
  },
];
