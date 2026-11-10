import type { ManualArticleBody } from "../types";
import * as linkMailbox from "./link-mailbox";
import * as mailConversation from "./mail-conversation";
import * as mailRules from "./mail-rules";
import * as mailTemplates from "./mail-templates";
import * as presentationAndSignature from "./presentation-and-signature";
import * as reviewAndSend from "./review-and-send";
import * as sentAndDiscarded from "./sent-and-discarded";
import * as writeMail from "./write-mail";

/** El cuerpo de cada artículo de «correos», por su slug. */
export const MAIL_BODIES: Record<string, ManualArticleBody> = {
  "revisar-y-enviar": reviewAndSend,
  "escribir-un-correo": writeMail,
  "conversacion-de-un-correo": mailConversation,
  "modelos-de-correo": mailTemplates,
  "vincular-un-correo": linkMailbox,
  "reglas-de-correo": mailRules,
  "presentacion-y-firma": presentationAndSignature,
  "enviados-y-descartados": sentAndDiscarded,
};
