import type { ManualArticleBody } from "../types";
import * as accessRequests from "./access-requests";
import * as agentAccesses from "./agent-accesses";
import * as emergencyCopy from "./emergency-copy";
import * as openVault from "./open-vault";
import * as rotationAndHealth from "./rotation-and-health";
import * as saveAccess from "./save-access";
import * as shareAccesses from "./share-accesses";
import * as trustedDevices from "./trusted-devices";

/** El cuerpo de cada artículo de «accesos», por su slug. */
export const VAULT_BODIES: Record<string, ManualArticleBody> = {
  "abrir-la-boveda": openVault,
  "guardar-un-acceso": saveAccess,
  "compartir-accesos": shareAccesses,
  "por-cambiar-y-salud": rotationAndHealth,
  "accesos-del-agente": agentAccesses,
  "solicitudes-de-acceso": accessRequests,
  "equipos-de-confianza": trustedDevices,
  "copia-de-emergencia": emergencyCopy,
};
