import type { ComponentType } from "react";

/**
 * Las categorías del manual siguen el menú de la app
 * (docs/directives/03-reglas-sitio.md §3.2). El slug es la ruta: va en
 * español.
 */
export type ManualCategorySlug =
  | "primeros-pasos"
  | "inicio"
  | "tareas"
  | "correos"
  | "chats"
  | "agente"
  | "clientes"
  | "polizas"
  | "cotizaciones-de-cumplimiento"
  | "documentos"
  | "directrices"
  | "contactos"
  | "accesos"
  | "configuracion";

export type ManualCategory = {
  slug: ManualCategorySlug;
  title: string;
  /** Una frase: qué cubre. Sin punto final (01 §6.2). */
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type ManualArticleMeta = {
  /** Segmento de la ruta, en español. */
  slug: string;
  category: ManualCategorySlug;
  title: string;
  /** Qué resuelve el artículo, en una frase. Es también su metadescripción. */
  description: string;
  /** Palabras con las que alguien lo buscaría y que no están en el título. */
  keywords: string[];
  /**
   * La versión de `nexus-app` contra la que se escribió. Un artículo que
   * describe una pantalla que cambió se corrige o se retira (03 §3.2).
   */
  appVersion: string;
};

export type ManualArticleSection = {
  /** Ancla del encabezado. Tiene que coincidir con la de `ArticleSection`. */
  id: string;
  title: string;
};

export type ManualArticleBody = {
  sections: ManualArticleSection[];
  Article: ComponentType;
};
