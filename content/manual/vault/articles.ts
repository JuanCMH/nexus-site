import type { ManualArticleMeta } from "../types";

/** Los artículos de «accesos», en su orden de lectura (03 §3.2). */
export const VAULT_ARTICLES: ManualArticleMeta[] = [
  {
    slug: "abrir-la-boveda",
    category: "accesos",
    title: "Abrir la bóveda",
    description:
      "Crea tu clave de la bóveda, ábrela en un computador o navegador de confianza y qué hacer si la olvidas",
    keywords: [
      "bóveda",
      "clave de la bóveda",
      "clave de recuperación",
      "contraseñas",
      "cifrado",
      "bloquear",
      "olvidé mi clave",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "guardar-un-acceso",
    category: "accesos",
    title: "Guardar y usar un acceso",
    description:
      "Guarda el usuario, la contraseña y la clave del autenticador de una cuenta, impórtalos desde Excel y cópialos al usarlos",
    keywords: [
      "añadir acceso",
      "contraseña",
      "portal",
      "autenticador",
      "código de verificación",
      "importar",
      "excel",
      "csv",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "compartir-accesos",
    category: "accesos",
    title: "Compartir accesos",
    description:
      "Quién decide qué cuentas usa cada persona y cómo se dan y se quitan accesos, uno por uno o por persona",
    keywords: [
      "conceder",
      "quitar acceso",
      "personas con acceso",
      "administrador",
      "propietario",
      "permisos",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "por-cambiar-y-salud",
    category: "accesos",
    title: "Por cambiar y salud de las contraseñas",
    description:
      "Las cuentas cuya contraseña conviene cambiar y las que están repetidas, son cortas o llevan más de un año sin cambiar",
    keywords: [
      "cambiar contraseña",
      "repetidas",
      "cortas",
      "antiguas",
      "seguridad",
      "rotar",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "accesos-del-agente",
    category: "accesos",
    title: "Accesos preparados por el agente",
    description:
      "El agente prepara los accesos sin la contraseña y una persona los guarda con la suya",
    keywords: [
      "del agente",
      "preparar accesos",
      "agente",
      "portales",
      "correos vinculados",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "solicitudes-de-acceso",
    category: "accesos",
    title: "Solicitudes de acceso",
    description:
      "Pide una cuenta que necesitas o, si administras la agencia, concede o rechaza lo que piden",
    keywords: ["pedir acceso", "solicitud", "conceder", "rechazar", "retirar"],
    appVersion: "0.68.3",
  },
  {
    slug: "equipos-de-confianza",
    category: "accesos",
    title: "Computadores de confianza",
    description:
      "Aprueba los computadores y navegadores donde se abre la bóveda y quita los que ya no se usan",
    keywords: [
      "equipos de confianza",
      "computador nuevo",
      "navegador",
      "aprobar",
      "espera aprobación",
      "dispositivo",
    ],
    appVersion: "0.68.3",
  },
  {
    slug: "copia-de-emergencia",
    category: "accesos",
    title: "Copia de emergencia",
    description:
      "Un archivo cifrado con todos los accesos que se abre sin Nexus y sin internet, configurado por el propietario",
    keywords: [
      "respaldo",
      "copia",
      "sin internet",
      "clave de emergencia",
      "propietario",
      "descargar",
    ],
    appVersion: "0.68.3",
  },
];
