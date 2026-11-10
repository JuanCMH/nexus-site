import type { ManualArticleBody } from "../types";
import * as confirmContacts from "./confirm-contacts";
import * as contactsAndCompanies from "./contacts-and-companies";
import * as whatWeKnow from "./what-we-know";

/** El cuerpo de cada artículo de «contactos», por su slug. */
export const CONTACTS_BODIES: Record<string, ManualArticleBody> = {
  "contactos-y-empresas": contactsAndCompanies,
  "lo-que-sabemos": whatWeKnow,
  "confirmar-contactos": confirmContacts,
};
