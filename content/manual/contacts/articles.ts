import type { ManualArticleMeta } from "../types";

/** Los artículos de «contactos», en su orden de lectura (03 §3.2). */
export const CONTACTS_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "contactos-y-empresas",
    category: "contactos",
    title: "Contactos y empresas",
    description:
      "Las personas de cada aseguradora y de cada empresa con la que trabaja la agencia, de qué se encarga cada una y su ficha",
    keywords: [
      "directorio",
      "se encarga de",
      "lo atiende",
      "proveedor",
      "ajustador",
      "taller",
      "aseguradora",
      "ya no está",
      "nuevo contacto",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "lo-que-sabemos",
    category: "contactos",
    title: "Lo que sabemos de un contacto",
    description:
      "Anota lo que la agencia sabe de una persona o de su cargo: cómo trabaja, qué pide y por dónde responde",
    keywords: [
      "notas",
      "nota de contacto",
      "sobre la persona",
      "sobre el cargo",
      "archivar nota",
      "conocimiento",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "confirmar-contactos",
    category: "contactos",
    title: "Confirmar contactos y notas",
    description:
      "Revisa los contactos y las notas que propone el agente o el equipo, y confírmalos uno a uno o varios a la vez",
    keywords: [
      "por confirmar",
      "propuesta",
      "confirmar varios",
      "descartar",
      "agente propone",
      "llevar los contactos",
    ],
    appVersion: "0.68.3",
  },
];
