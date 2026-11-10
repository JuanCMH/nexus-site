import type { ManualArticleBody } from "../types";
import * as cantSignIn from "./cant-sign-in";
import * as createAccount from "./create-account";
import * as joinAgency from "./join-agency";
import * as mobile from "./mobile";
import * as notifications from "./notifications";
import * as protectAccount from "./protect-account";
import * as resetPassword from "./reset-password";
import * as screenLayout from "./screen-layout";
import * as signIn from "./sign-in";
import * as windows from "./windows";

/** El cuerpo de cada artículo de «primeros-pasos», por su slug. */
export const GETTING_STARTED_BODIES: Record<string, ManualArticleBody> = {
  "crear-tu-cuenta": createAccount,
  "entrar-a-tu-agencia": joinAgency,
  "entrar-a-nexus": signIn,
  "conocer-la-pantalla": screenLayout,
  "tus-notificaciones": notifications,
  "nexus-en-el-celular": mobile,
  "nexus-en-windows": windows,
  "proteger-tu-cuenta": protectAccount,
  "recuperar-tu-contrasena": resetPassword,
  "si-no-puedes-entrar": cantSignIn,
};
