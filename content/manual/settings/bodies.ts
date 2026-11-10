import type { ManualArticleBody } from "../types";
import * as account from "./account";
import * as agencyProfile from "./agency-profile";
import * as clientTemplate from "./client-template";
import * as connections from "./connections";
import * as insurers from "./insurers";
import * as invitations from "./invitations";
import * as linesOfBusiness from "./lines-of-business";
import * as logs from "./logs";
import * as members from "./members";
import * as plan from "./plan";
import * as policyTemplate from "./policy-template";
import * as roles from "./roles";
import * as thisComputer from "./this-computer";

/** El cuerpo de cada artículo de «configuracion», por su slug. */
export const SETTINGS_BODIES: Record<string, ManualArticleBody> = {
  "datos-de-la-agencia": agencyProfile,
  "uso-y-plan": plan,
  miembros: members,
  invitaciones: invitations,
  "roles-y-permisos": roles,
  bitacora: logs,
  aseguradoras: insurers,
  ramos: linesOfBusiness,
  conexiones: connections,
  "plantillas-de-clientes": clientTemplate,
  "plantillas-de-polizas": policyTemplate,
  "este-computador": thisComputer,
  "tu-cuenta": account,
};
