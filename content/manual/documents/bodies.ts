import type { ManualArticleBody } from "../types";
import * as classesAndFolders from "./classes-and-folders";
import * as computerFolder from "./computer-folder";
import * as explorer from "./explorer";
import * as sourceFolders from "./source-folders";
import * as uploadAndLink from "./upload-and-link";

/** El cuerpo de cada artículo de «documentos», por su slug. */
export const DOCUMENTS_BODIES: Record<string, ManualArticleBody> = {
  "explorador-de-documentos": explorer,
  "subir-y-vincular": uploadAndLink,
  "clases-y-carpetas": classesAndFolders,
  "carpetas-de-origen": sourceFolders,
  "carpeta-en-el-computador": computerFolder,
};
