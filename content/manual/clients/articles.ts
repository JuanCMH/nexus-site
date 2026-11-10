import type { ManualArticleMeta } from "../types";

/** Los artículos de «clientes», en su orden de lectura (03 §3.2). */
export const CLIENTS_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "listado-de-clientes",
    category: "clientes",
    title: "El listado de clientes",
    description:
      "Las vistas de Clientes, qué dice cada fila y cómo buscar y filtrar",
    keywords: [
      "clientes",
      "cartera",
      "míos",
      "sin responsable",
      "por confirmar",
      "cambios del agente",
      "prospectos",
      "no se convirtieron",
      "buscar cliente",
      "filtro",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "crear-un-cliente",
    category: "clientes",
    title: "Crear un cliente",
    description:
      "Registra un cliente con el formulario de la plantilla, edítalo o elimínalo",
    keywords: [
      "nuevo cliente",
      "registrar cliente",
      "identificación",
      "NIT",
      "dígito de verificación",
      "editar cliente",
      "eliminar cliente",
      "duplicado",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "prospectos",
    category: "clientes",
    title: "Prospectos",
    description:
      "Registra a quien pidió una cotización como prospecto, márcalo como «No se convirtió» y cómo pasa solo a cliente",
    keywords: [
      "prospecto",
      "conversión",
      "no se convirtió",
      "relación",
      "cotización",
      "motivo",
      "convertidos",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "ficha-del-cliente",
    category: "clientes",
    title: "La ficha del cliente",
    description:
      "Qué hay en la ficha: sus datos, su relación, su cartera vigente, sus pólizas por listas, sus tareas y documentos y su actividad",
    keywords: [
      "ficha",
      "cartera vigente",
      "pólizas del cliente",
      "historial de pólizas",
      "otras pólizas",
      "relación",
      "actividad",
      "conversaciones",
      "anterior",
      "siguiente",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "responsable-del-cliente",
    category: "clientes",
    title: "El responsable del cliente",
    description:
      "Asigna quién lleva cada cliente, reasigna varios a la vez y qué recibe el responsable",
    keywords: [
      "responsable",
      "asesor",
      "reasignar",
      "reasignar varios",
      "reasignar cartera",
      "cartera por persona",
      "a mi cargo",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "importar-clientes",
    category: "clientes",
    title: "Importar clientes desde Excel",
    description:
      "Descarga la plantilla, complétala y súbela: Nexus revisa cada fila antes de importar",
    keywords: [
      "importar",
      "excel",
      "xlsx",
      "carga masiva",
      "plantilla de importación",
      "migrar clientes",
      "errores de importación",
    ],
    appVersion: "0.68.3",
  },
];
