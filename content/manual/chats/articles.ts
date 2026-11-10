import type { ManualArticleMeta } from "../types";

/** Los artículos de «chats», en su orden de lectura (03 §3.2). */
export const CHATS_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "chats-y-grupos",
    category: "chats",
    title: "Chats y grupos",
    description:
      "La lista de chats, los chats con una persona, los grupos y cómo se administran, y el estado de cada persona",
    keywords: [
      "mensajería",
      "grupo",
      "nuevo chat",
      "no leídos",
      "menciones",
      "fijar",
      "silenciar",
      "archivar",
      "grupo de avisos",
      "en línea",
      "ocupado",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "escribir-en-un-chat",
    category: "chats",
    title: "Escribir en un chat",
    description:
      "Mensajes, menciones, registros y archivos, lo que se hace con un mensaje, los envíos programados y la búsqueda",
    keywords: [
      "mensaje",
      "mencionar",
      "archivo",
      "guardar como documento",
      "reenviar",
      "programar envío",
      "borrador",
      "marcar como no leído",
      "recordármelo",
      "reacciones",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "el-agente-en-un-chat",
    category: "chats",
    title: "El agente en un chat",
    description:
      "Añade el agente a un grupo y menciónalo para dejarle una tarea delegada; quién puede hacerlo",
    keywords: [
      "agente",
      "añadir el agente",
      "mencionar al agente",
      "tarea delegada",
      "grupo",
    ],
    appVersion: "0.68.3",
  },
];
