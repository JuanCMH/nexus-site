import type { ManualArticleMeta } from "../types";

/** Los artículos de «documentos», en su orden de lectura (03 §3.2). */
export const DOCUMENTS_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "explorador-de-documentos",
    category: "documentos",
    title: "El explorador de documentos",
    description:
      "Recorre la carpeta de la agencia, sus carpetas por cliente y por póliza, y abre, descarga o elimina un documento",
    keywords: [
      "archivos",
      "carpetas",
      "buscar documento",
      "abrir",
      "descargar",
      "eliminar documento",
      "recientes",
      "sin cliente",
      "información de la agencia",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "subir-y-vincular",
    category: "documentos",
    title: "Adjuntar, vincular y renombrar documentos",
    description:
      "Adjunta archivos a un cliente, a una póliza o a la agencia, cámbiales el nombre y revisa los que no son lo que dicen ser",
    keywords: [
      "subir",
      "adjuntar",
      "vincular",
      "cliente",
      "póliza",
      "renombrar",
      "tomar foto",
      "25 MB",
      "contenido por revisar",
      "tipo de archivo",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "clases-y-carpetas",
    category: "documentos",
    title: "Clases, carpetas y orden de la carpeta",
    description:
      "Organiza los documentos de la agencia con clases, carpetas propias y el orden en que se arma la carpeta de cada cliente",
    keywords: [
      "organización",
      "clase de documento",
      "clasificar",
      "fusionar",
      "carpeta de la agencia",
      "nueva carpeta",
      "orden de la carpeta",
      "niveles",
      "organizar documentos",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "carpetas-de-origen",
    category: "documentos",
    title: "Carpetas de origen",
    description:
      "Registra el archivo que la agencia tenía antes de Nexus, en la nube o en un computador, y revisa lo que el agente trajo de él",
    keywords: [
      "archivo anterior",
      "Google Drive",
      "OneDrive",
      "SharePoint",
      "Dropbox",
      "traer documentos",
      "retirar carpeta",
      "lista para retirar",
      "pasada",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "carpeta-en-el-computador",
    category: "documentos",
    title: "La carpeta de documentos en el computador",
    description:
      "En Windows, el propietario tiene una copia de los documentos en su computador que Nexus vigila y repara",
    keywords: [
      "Windows",
      "escritorio",
      "copia local",
      "propietario",
      "verificar carpeta",
      "este computador",
      "elegir carpeta",
    ],
    appVersion: "0.68.3",
  },
];
