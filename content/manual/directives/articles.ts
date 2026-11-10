import type { ManualArticleMeta } from "../types";

/** Los artículos de «directrices», en su orden de lectura (03 §3.2). */
export const DIRECTIVES_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "flujos",
    category: "directrices",
    title: "Los flujos",
    description:
      "Qué es un flujo, cómo se lee su ficha, de dónde salen los de la agencia y quién tiene acceso a cada uno",
    keywords: [
      "flujo",
      "procedimiento",
      "pasos del agente",
      "flujos de nexus",
      "traer",
      "responsable",
      "ejecuciones",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "portales",
    category: "directrices",
    title: "Los recorridos de los portales",
    description:
      "Qué recorridos sigue el computador de los portales en cada aseguradora conectada, qué flujo los usa y cómo se corre uno",
    keywords: [
      "portal",
      "recorrido",
      "aseguradora",
      "correr",
      "conciliar",
      "pólizas vigentes",
      "pólizas canceladas",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "editar-y-publicar-un-flujo",
    category: "directrices",
    title: "Editar y publicar un flujo",
    description:
      "Escribe un flujo propio o edita uno, publícalo como versión nueva y ponlo al día con el flujo de Nexus del que salió",
    keywords: [
      "borrador",
      "publicar",
      "versión",
      "restaurar",
      "comparar",
      "novedades",
      "actualizar y publicar",
      "nuevo flujo",
      "archivar",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "criterios",
    category: "directrices",
    title: "Criterios",
    description:
      "Las reglas en una frase que sigue el agente: cómo se escriben, su alcance y cómo se confirma lo que propone",
    keywords: [
      "regla",
      "instrucción",
      "alcance",
      "siempre",
      "según el trabajo",
      "corregir al agente",
      "reestructurar",
      "comprobación",
      "bloquear el registro",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "reparto",
    category: "directrices",
    title: "Reparto de tareas",
    description:
      "Las reglas de quién lleva qué, la persona de respaldo y cómo el agente asigna lo que nace sin responsable",
    keywords: [
      "asignar",
      "responsable",
      "reglas de reparto",
      "persona de respaldo",
      "sin asignar",
      "quién lleva",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "referencias",
    category: "directrices",
    title: "Referencias de la agencia",
    description:
      "Los archivos modelo que usa el agente, como el comparativo, la hoja membrete o el logo, y cómo se suben y se mantienen",
    keywords: [
      "modelo a seguir",
      "archivo base",
      "plantilla",
      "membrete",
      "logo",
      "comparativo",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "categorias-y-temas",
    category: "directrices",
    title: "Categorías y temas",
    description:
      "Ordena el listado de flujos con categorías y agrupa criterios y reglas de reparto con temas",
    keywords: [
      "categoría",
      "tema",
      "renombrar",
      "unir",
      "ordenar flujos",
      "ajustes",
    ],
    appVersion: "0.68.3",
  },
];
