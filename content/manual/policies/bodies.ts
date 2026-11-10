import type { ManualArticleBody } from "../types";
import * as closePolicy from "./close-policy";
import * as createPolicy from "./create-policy";
import * as derivedPolicies from "./derived-policies";
import * as endorsements from "./endorsements";
import * as importPolicies from "./import-policies";
import * as policyList from "./policy-list";
import * as policyRecord from "./policy-record";
import * as renewPolicy from "./renew-policy";

/** El cuerpo de cada artículo de «polizas», por su slug. */
export const POLICIES_BODIES: Record<string, ManualArticleBody> = {
  "listado-de-polizas": policyList,
  "registrar-una-poliza": createPolicy,
  "ficha-de-la-poliza": policyRecord,
  "anexos-de-una-poliza": endorsements,
  "renovar-una-poliza": renewPolicy,
  "polizas-derivadas": derivedPolicies,
  "cancelar-o-cerrar-una-poliza": closePolicy,
  "importar-polizas": importPolicies,
};
