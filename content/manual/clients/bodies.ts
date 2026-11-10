import type { ManualArticleBody } from "../types";
import * as clientAdvisor from "./client-advisor";
import * as clientList from "./client-list";
import * as clientRecord from "./client-record";
import * as createClient from "./create-client";
import * as importClients from "./import-clients";
import * as prospects from "./prospects";

/** El cuerpo de cada artículo de «clientes», por su slug. */
export const CLIENTS_BODIES: Record<string, ManualArticleBody> = {
  "listado-de-clientes": clientList,
  "crear-un-cliente": createClient,
  prospectos: prospects,
  "ficha-del-cliente": clientRecord,
  "responsable-del-cliente": clientAdvisor,
  "importar-clientes": importClients,
};
