import type { ManualArticleMeta } from "../types";

/** Los artículos de «inicio», en su orden de lectura (03 §3.2). */
export const HOME_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "mi-dia",
    category: "inicio",
    title: "Mi día",
    description:
      "Tus tareas de hoy, lo que espera tu decisión, tu semana y lo que dejaste en manos de otros",
    keywords: [
      "inicio",
      "tablero",
      "por resolver",
      "lo siguiente",
      "tu semana",
      "en espera de otros",
      "vencidas",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "tablero-de-la-agencia",
    category: "inicio",
    title: "El tablero de la agencia",
    description:
      "La cartera en cifras, las renovaciones, los ramos, las aseguradoras, los clientes y el trabajo del equipo, para quien dirige",
    keywords: [
      "inicio",
      "agencia",
      "prima anualizada",
      "tasa de renovación",
      "comisión estimada",
      "necesitan atención",
      "grupo asegurador",
      "conversión de prospectos",
      "filtros",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "produccion-y-cierre-del-ano",
    category: "inicio",
    title: "La producción y el cierre del año",
    description:
      "La producción anual y causada por período, por grupo y como la cuenta la aseguradora, y cómo se cierra y se reabre un año",
    keywords: [
      "producción",
      "producción causada",
      "anexos",
      "forma de pago",
      "cerrar el año",
      "reabrir",
      "período",
      "semestre",
      "trimestre",
    ],
    appVersion: "0.68.3",
  },
];
