/**
 * Los vídeos del manual. **Generado** por el estudio de vídeo (fuera del
 * repo, como el arnés de capturas) a partir de los MP4 de
 * `public/manual/videos/`: no se edita a mano.
 *
 * Cada clave es `<categoría>/<clave>` y sirve `<clave>-<version>.mp4` y su
 * cartel `.jpg`. `version` es la huella del archivo y va en el nombre para
 * que una regrabación no se quede servida desde la caché. Los capítulos son
 * los pasos rotulados del vídeo: ningún navegador pinta los capítulos de un
 * MP4, así que son dato del manual y la lista la dibuja `Video`.
 *
 * `recorded` y `appVersion` se enseñan bajo el vídeo: un vídeo envejece en
 * silencio, enseñando una pantalla que ya no existe (03 §3.2).
 */
export type ManualVideoChapter = {
  /** Lo que dice el rótulo del paso. */
  title: string;
  detail?: string;
  /** Segundo en el que empieza. */
  start: number;
};

export type ManualVideo = {
  title: string;
  description: string;
  /** En segundos. */
  duration: number;
  width: number;
  height: number;
  /** `YYYY-MM-DD`. */
  recorded: string;
  appVersion: string;
  version: string;
  chapters: readonly ManualVideoChapter[];
};

export const MANUAL_VIDEOS = {
  "accesos/guardar-un-acceso": {
    title: "Guardar un acceso",
    description:
      "El usuario y la contraseña se cifran en tu computador antes de guardarse",
    duration: 73,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "cc945e71",
    chapters: [
      {
        title: "En el menú, abre «Accesos»",
        detail: "La bóveda de la agencia: portales, correos y otras cuentas",
        start: 4.3,
      },
      {
        title: "Escribe tu clave de la bóveda y haz clic en «Abrir la bóveda»",
        detail:
          "Es distinta de la contraseña de Nexus y se comprueba en tu computador",
        start: 8.3,
      },
      { title: "Haz clic en «Añadir acceso»", start: 15.4 },
      {
        title: "Escribe el nombre y elige el tipo",
        detail:
          "El tipo decide la sección: «Correos», «Portales» u «Otras cuentas»",
        start: 19.1,
      },
      {
        title: "Completa el usuario y la contraseña",
        detail: "«Generar» propone una contraseña al azar; el ojo la muestra",
        start: 26.7,
      },
      {
        title: "En «Opciones avanzadas», elige la aseguradora",
        detail: "El acceso sale también en la ficha de esa aseguradora",
        start: 35.9,
      },
      { title: "Haz clic en «Guardar acceso»", start: 44.2 },
      {
        title: "Para usarlo, copia el usuario o la contraseña",
        detail: "Lo copiado se borra del portapapeles a los 30 segundos",
        start: 52.5,
      },
      {
        title: "Al levantarte del puesto, haz clic en «Bloquear»",
        detail:
          "La bóveda también se cierra sola tras diez minutos sin usar Nexus",
        start: 61.9,
      },
    ],
  },
  "agente/permisos-y-solicitudes": {
    title: "Una solicitud del agente",
    description:
      "Lo que el agente no puede hacer sin preguntar no se aplica hasta que alguien lo aprueba",
    duration: 56.8,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "288f6adb",
    chapters: [
      {
        title:
          "Cuando una solicitud espera por ti, se abre sola «El agente pide permiso»",
        detail: "En cualquier pantalla de la agencia, una vez por solicitud",
        start: 3.3,
      },
      {
        title: "Lee los cambios",
        detail: "Cada uno con su casilla: desmarca lo que no quieras aplicar",
        start: 9.5,
      },
      {
        title: "Decide",
        detail:
          "«Aprobar 1 cambio» lo aplica con tus permisos. «Corregir…» se lo devuelve al agente. «Descartar» no aplica nada",
        start: 14,
      },
      {
        title: "«Más tarde» la cierra",
        detail:
          "La solicitud sigue esperando en Agente › Por confirmar y en «Mi día»",
        start: 25.1,
      },
      { title: "En Agente, abre «Permisos»", start: 28.8 },
      {
        title: "«Permisos vigentes»",
        detail:
          "Lo que el agente aplica sin preguntar y quién lo dio. «Revocar» lo apaga en el acto",
        start: 33,
      },
      {
        title: "«Qué pregunta siempre»",
        detail:
          "Qué hace el agente en cada área. Quien administra la cambia con «Editar»",
        start: 36.7,
      },
      {
        title: "«Historial de solicitudes»",
        detail:
          "Lo que pidió, cómo quedó y quién lo decidió. Lo aplicado se deshace durante siete días",
        start: 43.1,
      },
    ],
  },
  "agente/por-confirmar": {
    title: "Confirmar una propuesta del agente",
    description:
      "Lo que propone el agente no se aplica hasta que una persona lo confirma",
    duration: 41.7,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "7c97328b",
    chapters: [
      {
        title: "En Agente, abre «Por confirmar»",
        detail:
          "Lo que propuso el agente, por grupos, cada propuesta con su responsable",
        start: 3.3,
      },
      {
        title: "Haz clic en la propuesta",
        detail: "Se abre su panel, sin salir de la lista",
        start: 10.8,
      },
      {
        title: "Lee la propuesta",
        detail: "«Propuesta» dice la «Fecha» y quién «La resuelve»",
        start: 15.5,
      },
      {
        title: "Decide",
        detail:
          "«Confirmar» lo deja en firme. «Descartar» lo quita. «Abrir la ficha» lleva al registro",
        start: 23.5,
      },
      { title: "Haz clic en «Confirmar»", start: 28.3 },
    ],
  },
  "chats/chats-y-grupos": {
    title: "Crear un grupo",
    description:
      "Quien crea el grupo lo administra. Quien entra lee todo lo que se ha escrito",
    duration: 60.1,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "416e8f30",
    chapters: [
      {
        title: "Haz clic en «Nuevo chat» y elige «Crear un grupo»",
        detail: "Se abre «Nuevo grupo»",
        start: 4.3,
      },
      {
        title: "Ponle nombre y descripción",
        detail:
          "El «Nombre» es obligatorio; la foto, opcional. La descripción la ven todas sus personas",
        start: 9.2,
      },
      {
        title: "Decide si es un grupo de avisos",
        detail:
          "Encendido, solo escribe quien lo administra; aquí queda apagado",
        start: 18.5,
      },
      {
        title: "Elige las personas",
        detail: "Hasta 100, sin contar al agente",
        start: 22.3,
      },
      { title: "Haz clic en «Crear grupo»", start: 29.3 },
      {
        title: "Escribe el primer mensaje y envíalo",
        detail: "Enter lo envía",
        start: 39.2,
      },
    ],
  },
  "clientes/crear-un-cliente": {
    title: "Crear un cliente",
    description: "El formulario sigue la plantilla de clientes de la agencia",
    duration: 64,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "7983f248",
    chapters: [
      { title: "En Clientes, haz clic en «Nuevo cliente»", start: 4.3 },
      {
        title: "Completa «Identificación»",
        detail: "Los datos obligatorios llevan un asterisco",
        start: 9.1,
      },
      {
        title: "Revisa «Cómo queda»",
        detail:
          "El cliente como se verá: iniciales, nombre, identificación y tipo de persona",
        start: 28.2,
      },
      { title: "Pasa a «Contacto» con el botón del pie", start: 32.3 },
      {
        title: "Deja la «Relación» en «Cliente»",
        detail:
          "«Prospecto» es para quien pidió una cotización y aún no compra",
        start: 45.2,
      },
      { title: "Haz clic en «Crear cliente»", start: 48.3 },
    ],
  },
  "clientes/prospectos": {
    title: "Registrar un prospecto",
    description:
      "Quien pidió una cotización y aún no compra, hasta que compra o se cierra sin compra",
    duration: 59.4,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "d275b3e1",
    chapters: [
      { title: "En Clientes, haz clic en «Nuevo cliente»", start: 4.3 },
      { title: "Escribe sus datos como los de cualquier cliente", start: 8.3 },
      {
        title: "En «Relación», elige «Prospecto»",
        detail: "Pasa a cliente solo con su primera póliza vigente o pendiente",
        start: 22.2,
      },
      { title: "Haz clic en «Crear cliente»", start: 27.5 },
      { title: "Si no compra, haz clic en el lápiz de «Relación»", start: 36 },
      {
        title: "Elige «No se convirtió» y escribe el motivo, si se conoce",
        start: 39.5,
      },
      { title: "Haz clic en «Marcar»", start: 47.1 },
    ],
  },
  "configuracion/invitar-a-una-persona": {
    title: "Invitar a una persona",
    description:
      "Un código de un solo uso, con el rol con el que entra a la agencia",
    duration: 45.8,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "f736170e",
    chapters: [
      { title: "Haz clic en «Invitar a una persona»", start: 7.7 },
      {
        title: "En «Persona invitada», escribe su nombre o su correo",
        detail: "Para reconocer la invitación en la lista",
        start: 10.6,
      },
      {
        title: "Elige el «Rol» con el que entra",
        detail: "Miembro o un rol de la agencia; nunca el de administrador",
        start: 15.1,
      },
      {
        title: "Elige la «Caducidad»",
        detail: "1, 3, 7, 15 o 30 días; si no la cambias, 7",
        start: 19.9,
      },
      { title: "Haz clic en «Crear invitación»", start: 23.5 },
      {
        title: "Copia el código o el mensaje para enviarle",
        detail: "El código no se vuelve a mostrar: cópialo antes de cerrar",
        start: 27.3,
      },
    ],
  },
  "configuracion/plantilla-de-polizas": {
    title: "Añadir un campo a la plantilla de pólizas",
    description:
      "Cada campo de la plantilla sale en el formulario y en la ficha de cada póliza",
    duration: 61.4,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "6a504ffb",
    chapters: [
      {
        title: "Elige la sección",
        detail: "Aquí, «Riesgo asegurado»",
        start: 7.5,
      },
      {
        title: "Haz clic en «Añadir campo» y elige su tipo",
        detail: "Aquí, «Texto corto»",
        start: 11.5,
      },
      {
        title: "En «General», escribe su «Etiqueta» y su «Ayuda»",
        detail: "También el ancho, si es obligatorio y si es un dato reservado",
        start: 18,
      },
      {
        title: "En «Agente», di cómo debe obtener el campo",
        detail:
          "La «Indicación para el agente»: la persona no la ve en el formulario",
        start: 32.6,
      },
      {
        title: "Haz clic en «Guardar»",
        detail:
          "Mientras no guardes, el editor dice cuántos cambios hay sin guardar",
        start: 43.9,
      },
      { title: "Comprueba el formulario en «Vista previa»", start: 50.5 },
    ],
  },
  "configuracion/roles-y-permisos": {
    title: "Armar un rol",
    description: "Cada rol reúne los permisos que da, módulo por módulo",
    duration: 54,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "514af4cf",
    chapters: [
      { title: "Haz clic en «Nuevo rol»", start: 7.5 },
      {
        title: "Escribe su «Nombre» y una «Descripción»",
        detail: "Para qué es el rol",
        start: 10.4,
      },
      {
        title: "Elige un módulo",
        detail:
          "A la izquierda, en «Operación» y «Configuración»; cada uno dice cuántos permisos da",
        start: 19.3,
      },
      {
        title: "Marca los permisos",
        detail: "Ordenados en «Ver», «Acciones» y «Administrar»",
        start: 23.2,
      },
      {
        title: "Revisa «Todo lo concedido»",
        detail: "Lo que el rol da, módulo por módulo",
        start: 36.2,
      },
      { title: "Haz clic en «Crear rol»", start: 40.9 },
    ],
  },
  "contactos/contactos-y-empresas": {
    title: "Buscar un contacto",
    description:
      "Cada contacto dice de qué se encarga y quién de la agencia lo atiende",
    duration: 48.9,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "bdc4d1ea",
    chapters: [
      {
        title: "En Contactos, escribe en el buscador",
        detail: "Encuentra por nombre, cargo o correo",
        start: 4.3,
      },
      {
        title: "Haz clic en el contacto",
        detail: "Su ficha se abre a la derecha, sin salir de la lista",
        start: 9.2,
      },
      {
        title: "Lee la cabecera",
        detail:
          "El cargo, la empresa, su «Función» y quién la atiende en la agencia («Lo atiende»)",
        start: 13,
      },
      {
        title: "«Se encarga de»: sus responsabilidades",
        detail: "Cada una con su clase y sus ramos",
        start: 16,
      },
      {
        title: "«Datos de contacto»: cómo se le escribe",
        detail:
          "Correos, teléfonos, canal preferido y ciudad. El icono junto a un correo o un teléfono lo copia",
        start: 20.2,
      },
      {
        title: "Abre «Empresas»",
        detail:
          "Las aseguradoras y las empresas de contacto, con cuántas personas tiene cada una",
        start: 31.1,
      },
      {
        title: "Haz clic en la empresa",
        detail: "Sus contactos, sus datos y lo que la agencia sabe de ella",
        start: 35.3,
      },
    ],
  },
  "correos/escribir-un-correo": {
    title: "Escribir un correo",
    description:
      "Desde una ficha, el modelo se completa con los datos del cliente o la póliza",
    duration: 51.1,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "d127e454",
    chapters: [
      {
        title: "En la ficha de la póliza, haz clic en «Enviar correo»",
        detail:
          "Es el mismo panel que «Nuevo correo» en Correos, en un cliente o en una tarea",
        start: 4.3,
      },
      {
        title: "Elige «Desde»",
        detail:
          "El correo vinculado del que sale; viene elegido tu correo principal, si tienes uno",
        start: 8.1,
      },
      {
        title: "Elige un «Modelo»",
        detail: "Llena el asunto y el mensaje, con los datos de la póliza",
        start: 12,
      },
      {
        title: "Revisa «Para» y «Asunto»",
        detail:
          "Desde una ficha, «Para» trae las direcciones del registro. Varias van separadas por comas",
        start: 17.5,
      },
      {
        title: "Escribe el mensaje",
        detail: "En la pestaña «Editar»",
        start: 22.6,
      },
      {
        title: "Mira la «Vista previa»",
        detail: "La firma, el logo y el pie de la agencia se añaden al enviar",
        start: 29.1,
      },
      {
        title: "Haz clic en «Guardar»",
        detail:
          "Lo deja en «Por enviar» sin enviarlo. «Enviar» pide confirmación antes de que salga",
        start: 38.8,
      },
    ],
  },
  "correos/reglas-de-correo": {
    title: "Crear una regla de correo",
    description:
      "Nexus la aplica antes de que el agente lea el correo. Ningún correo se borra",
    duration: 49.3,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "fbef86f9",
    chapters: [
      {
        title: "En Correos, abre «Reglas»",
        detail: "Cada regla dice su condición, su motivo y lo que hace",
        start: 4.3,
      },
      { title: "Haz clic en «Nueva regla»", start: 8.6 },
      {
        title: "Escribe la condición",
        detail: "Un remitente o un dominio, un texto del asunto, o los dos",
        start: 11.4,
      },
      {
        title: "Elige el «Correo vinculado»",
        detail: "«Todos», o solo uno",
        start: 16.8,
      },
      {
        title: "Elige «Qué hace»",
        detail:
          "«No crear tareas»: el agente ve el correo y no abre tareas por él",
        start: 21.6,
      },
      {
        title: "Escribe el «Motivo»",
        detail:
          "Es obligatorio: dice por qué la agencia no atiende esos correos",
        start: 27.9,
      },
      { title: "Haz clic en «Añadir regla»", start: 35 },
    ],
  },
  "correos/revisar-y-enviar": {
    title: "Revisar y enviar un correo",
    description:
      "Lo que redacta el agente espera en «Por enviar» hasta que una persona lo revisa",
    duration: 61.4,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "5c54d85e",
    chapters: [
      {
        title: "En Correos → Por enviar, abre «Del equipo»",
        detail:
          "«Míos» tiene los de los correos vinculados que tienes a cargo; «Del equipo», todos los que puedes ver",
        start: 4.3,
      },
      {
        title: "Haz clic en el correo",
        detail: "Se lee a la derecha, como llegará",
        start: 8.7,
      },
      {
        title: "Lee el correo",
        detail:
          "Quién lo redactó, el responsable y «Por qué lo propone el agente»",
        start: 12.7,
      },
      {
        title: "Haz clic en «Editar»",
        detail:
          "«Para», «Con copia», «Asunto», el mensaje y los adjuntos se pueden cambiar",
        start: 23.4,
      },
      {
        title: "Corrige lo que haga falta",
        detail: "Aquí, una copia para comercial@altavistaseguros.co",
        start: 26.3,
      },
      {
        title: "Haz clic en «Enviar»",
        detail: "Con cambios sin guardar, el botón dice «Guardar y enviar»",
        start: 34.9,
      },
      {
        title: "Revisa la confirmación",
        detail:
          "Desde, Para, Copia y Adjuntos, uno por línea. Es de otra responsable: lo advierte",
        start: 39,
      },
    ],
  },
  "cotizaciones-de-cumplimiento/crear-una-cotizacion": {
    title: "Crear una cotización de cumplimiento",
    description:
      "Nexus calcula la prima a partir del contrato y de sus amparos",
    duration: 57,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "a2b1a7e0",
    chapters: [
      { title: "En Cumplimiento, haz clic en «Nueva cotización»", start: 4.3 },
      {
        title: "Elige el tipo y, si aplica, el cliente",
        detail:
          "Su nombre y su identificación pasan a «Tomador» y «NIT o cédula»",
        start: 7.1,
      },
      {
        title: "Completa el contrato",
        detail:
          "El inicio propone la fecha de hoy y el fin, seis meses después",
        start: 15.4,
      },
      { title: "Haz clic en «Crear cotización»", start: 22.4 },
      {
        title: "Revisa los amparos y el resultado",
        detail:
          "«Resultado» se recalcula con cada cambio; «Cómo se calculó» enseña la cuenta",
        start: 30.1,
      },
      {
        title: "Haz clic en «Exportar» y elige «PDF»",
        detail:
          "El archivo sale de lo guardado: con cambios sin guardar, «Exportar» queda desactivado",
        start: 40,
      },
    ],
  },
  "directrices/criterios": {
    title: "Añadir un criterio",
    description:
      "Una regla de la agencia que el agente tiene en cuenta al trabajar",
    duration: 54.1,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "4dbe6f95",
    chapters: [
      { title: "Haz clic en «Añadir criterio»", start: 7.5 },
      {
        title: "En «Criterio», escribe la regla en una frase",
        detail: "Una sola idea, dicha como una instrucción",
        start: 11.4,
      },
      {
        title: "Elige su «Tema»",
        detail: "Uno que ya existe, o escribe uno nuevo",
        start: 18.9,
      },
      {
        title: "Elige el alcance: «Según el trabajo»",
        detail: "Lo que dejas vacío no restringe",
        start: 22.4,
      },
      {
        title: "Haz clic en «Añadir criterio»",
        detail: "Si ya hay uno vigente que dice lo mismo, Nexus lo avisa",
        start: 33,
      },
      {
        title: "Haz clic en el criterio para abrir su lectura",
        detail: "Alcance, tema, origen, uso y actividad",
        start: 38.4,
      },
    ],
  },
  "directrices/editar-y-publicar-un-flujo": {
    title: "Editar y publicar un flujo",
    description:
      "Lo que cambias queda en un borrador; el agente sigue la versión vigente hasta que publiques",
    duration: 64.2,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "545dece2",
    chapters: [
      { title: "En Directrices → Flujos, abre el flujo", start: 3.3 },
      {
        title: "Haz clic en «Editar»",
        detail: "Lo que cambias es un borrador",
        start: 7.9,
      },
      {
        title: "En «Pasos», haz clic en «Añadir paso» y escríbelo",
        detail: "El título es opcional; para moverlo, se arrastra",
        start: 13.5,
      },
      {
        title: "Comprueba «Así lo lee el agente»",
        detail: "Se actualiza mientras escribes",
        start: 26.3,
      },
      {
        title: "Haz clic en «Guardar borrador»",
        detail: "Los cambios quedan guardados sin publicar",
        start: 34,
      },
      {
        title: "Para que el agente lo siga, haz clic en «Publicar»",
        detail:
          "«Qué cambia» es opcional y se lee en el historial de versiones",
        start: 39.1,
      },
      {
        title:
          "Si el borrador no te convence, sal con «Cancelar» y, en el aviso, haz clic en «Descartar»",
        detail: "La versión vigente no cambia",
        start: 49.5,
      },
    ],
  },
  "directrices/reparto": {
    title: "Escribir una regla de reparto",
    description:
      "El agente la lee cada vez que reparte una tarea sin responsable",
    duration: 42.9,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "c3254a6b",
    chapters: [
      { title: "Haz clic en «Nueva regla»", start: 9.5 },
      {
        title: "En «Regla», di qué tareas y quién las lleva",
        detail: "Con el nombre de la persona",
        start: 13.4,
      },
      {
        title: "En «Personas que nombra», marca a la misma persona",
        detail: "Nexus avisa si alguna deja la agencia",
        start: 19.9,
      },
      { title: "Haz clic en «Añadir regla»", start: 23.6 },
    ],
  },
  "documentos/adjuntar-y-vincular": {
    title: "Adjuntar un documento a una póliza",
    description:
      "El documento queda vinculado a la póliza y a su cliente, en la carpeta de la póliza",
    duration: 49.4,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "391c1704",
    chapters: [
      {
        title: "En el bloque «Documentos», haz clic en «Adjuntar»",
        detail:
          "También está en Documentos, en la ficha de un cliente y en una tarea",
        start: 7.3,
      },
      {
        title: "Comprueba dónde van a quedar",
        detail: "Bajo el título: «Se vinculan a la póliza 0219550930»",
        start: 12.6,
      },
      {
        title: "Elige los archivos",
        detail:
          "Arrástralos a la ventana o haz clic para elegirlos: PDF, imágenes u Office, hasta 25 MB",
        start: 16.5,
      },
      {
        title: "Elige la «Clase»",
        detail: "Vale para todos los archivos elegidos",
        start: 19.6,
      },
      { title: "Haz clic en «Adjuntar»", start: 24.8 },
    ],
  },
  "documentos/carpetas-de-origen": {
    title: "Registrar una carpeta de origen",
    description:
      "El agente busca en ella y trae a Nexus lo que sirve; la carpeta no se cambia",
    duration: 53,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "2e533c03",
    chapters: [
      {
        title: "En Documentos, abre «Carpetas de origen»",
        detail: "Está en el grupo «Ajustes» del menú del módulo",
        start: 4.3,
      },
      { title: "Haz clic en «Añadir carpeta»", start: 11.8 },
      {
        title: "Escribe su «Nombre»",
        detail: "Un nombre para reconocerla",
        start: 15.6,
      },
      {
        title: "En «Dónde está», deja «En la nube» y pega el enlace",
        detail: "Google Drive, OneDrive, SharePoint o Dropbox",
        start: 20.4,
      },
      {
        title: "Describe «Cómo está ordenada»",
        detail: "Opcional: lo lee el agente para buscar",
        start: 25.8,
      },
      { title: "Haz clic en «Registrar carpeta»", start: 31.4 },
    ],
  },
  "inicio/mi-dia": {
    title: "Mi día",
    description:
      "Tus tareas, lo que espera tu decisión y tu semana, en el Inicio",
    duration: 52.3,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "2f0058c0",
    chapters: [
      {
        title: "En el Inicio, abre «Mi día»",
        detail: "Quien ve el tablero de la agencia entra en «Agencia»",
        start: 4.3,
      },
      {
        title: "Arriba, el saludo y lo que te queda",
        detail:
          "A la derecha, el progreso del día: cerradas, para hoy y vencidas",
        start: 8.7,
      },
      {
        title: "Las cuatro cifras",
        detail: "Vencidas, Para hoy, Por resolver y Cerradas esta semana",
        start: 14.8,
      },
      {
        title: "«Lo siguiente»: tus tareas abiertas",
        detail:
          "Agrupadas por cuándo hay que mirarlas. Haz clic en una para abrir su panel",
        start: 22.9,
      },
      {
        title: "«Por resolver»: lo que espera tu decisión",
        detail:
          "Dudas del agente, registros por confirmar y correos por enviar",
        start: 31.1,
      },
      {
        title: "«Tu semana»: haz clic en un día para ver sus tareas",
        detail: "Gris, cerrada; azul, abierta en su fecha; rojo, vencida",
        start: 35.4,
      },
      {
        title: "«En espera de otros»",
        detail: "Lo que delegaste al agente y lo que espera a un tercero",
        start: 43.9,
      },
    ],
  },
  "inicio/produccion-y-cierre-del-ano": {
    title: "Producción y cierre del año",
    description:
      "La producción anual y la causada del período, por grupo, ramo, aseguradora y responsable",
    duration: 57.8,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "6b4a27ef",
    chapters: [
      {
        title: "En el tablero de la agencia, abre «Producción»",
        detail: "Los filtros de arriba valen también aquí",
        start: 3.4,
      },
      {
        title: "Arriba, el período y si el año está abierto o cerrado",
        detail:
          "Abierto, las cifras cambian si se registra o corrige una póliza",
        start: 7.7,
      },
      {
        title: "Las cuatro cifras del período",
        detail:
          "Producción anual, producción causada, anexos y pólizas producidas",
        start: 13.2,
      },
      {
        title: "La gráfica «Producción anual y causada»",
        detail: "Las dos cifras por mes. En el período en curso marca «hoy»",
        start: 17.9,
      },
      {
        title: "«Por grupo»: renovables, no renovables y los ramos aparte",
        detail:
          "Pólizas, anual, causada y la anual del año anterior al mismo corte",
        start: 23.7,
      },
      {
        title: "«Por ramo, como la aseguradora»",
        detail:
          "Nueva, renovación, aumentos, disminuciones y cancelaciones, para compararla con su informe",
        start: 29.7,
      },
      {
        title: "«Por ramo», «Por aseguradora» y «Por responsable»",
        detail:
          "La producción anual del período de cada uno, con su número de pólizas",
        start: 34.4,
      },
      {
        title: "El cierre del año va en la tarjeta «Cierre de» el año",
        detail:
          "El botón aparece cuando el año ya terminó, para el propietario y los administradores",
        start: 40.2,
      },
    ],
  },
  "inicio/tablero-de-la-agencia": {
    title: "El tablero de la agencia",
    description: "La cartera en cifras y el trabajo del equipo, por apartados",
    duration: 67.1,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "82e84b67",
    chapters: [
      {
        title: "En el Inicio, abre «Agencia»",
        detail: "Su menú, junto al riel, tiene una entrada por apartado",
        start: 4.3,
      },
      {
        title: "Elige el período",
        detail:
          "Año, semestre, trimestre o mes. Las flechas pasan de uno a otro",
        start: 8.4,
      },
      {
        title: "Filtra por ramo, aseguradora o responsable",
        detail: "Los filtros valen para todo el tablero",
        start: 16.9,
      },
      {
        title: "Cambia de apartado",
        detail: "Los filtros se conservan",
        start: 25,
      },
      {
        title: "Haz clic en una barra para ver su detalle",
        detail:
          "En «Ramos», las pólizas del ramo y cómo se reparten por aseguradora",
        start: 34.3,
      },
      {
        title: "«Clientes»: la cartera por cliente y por responsable",
        start: 47.4,
      },
      {
        title: "«Tareas»: el trabajo abierto de toda la agencia",
        detail: "Este apartado no lleva filtros",
        start: 54.3,
      },
    ],
  },
  "polizas/anexos-de-una-poliza": {
    title: "Registrar un anexo",
    description:
      "Cada anexo suma o resta su prima en la producción; la prima de la póliza no cambia",
    duration: 55,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "0e8e4c29",
    chapters: [
      {
        title: "En la ficha de la póliza, abre «Más acciones»",
        detail: "Los tres puntos de la barra superior",
        start: 4.3,
      },
      { title: "Elige «Registrar anexo»", start: 7.7 },
      {
        title: "Escribe el número del anexo y su fecha de expedición",
        start: 11.7,
      },
      {
        title: "Elige el efecto en la prima y escribe qué cambió",
        detail: "«Aumento», «Disminución» o «Sin cobro»",
        start: 16.5,
      },
      {
        title: "Escribe la vigencia del movimiento y la prima sin IVA",
        detail:
          "Desde esa fecha produce. La prima va en positivo: el efecto dice si suma o resta",
        start: 23.9,
      },
      { title: "Haz clic en «Registrar anexo»", start: 36.8 },
    ],
  },
  "polizas/cancelar-una-poliza": {
    title: "Cancelar una póliza",
    description:
      "Con la fecha en que la aseguradora la canceló y lo que devolvió",
    duration: 41.4,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "0ea99dad",
    chapters: [
      {
        title: "En la ficha, abre «Más acciones» y elige «Cancelar la póliza»",
        detail: "Pide el permiso «Cancelar y reactivar pólizas»",
        start: 4.3,
      },
      {
        title: "Escribe la fecha de cancelación",
        detail:
          "Viene con la de hoy: cámbiala por la que indica la aseguradora",
        start: 12.5,
      },
      {
        title: "Escribe la devolución y el motivo",
        detail:
          "La devolución, si la aseguradora devolvió prima; el motivo queda en la bitácora",
        start: 16.9,
      },
      { title: "Haz clic en «Cancelar póliza»", start: 24.2 },
    ],
  },
  "polizas/registrar-una-poliza": {
    title: "Registrar una póliza",
    description: "El estado no se pide: lo dan las fechas de vigencia",
    duration: 60.3,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "d98d523d",
    chapters: [
      { title: "En Pólizas, haz clic en «Nueva póliza»", start: 4.3 },
      {
        title: "Escribe el número y elige la aseguradora, el ramo y el cliente",
        start: 8.4,
      },
      {
        title: "Pasa a «Vigencia» en la lista de secciones",
        detail: "La lista dice lo que falta en cada una",
        start: 26.9,
      },
      { title: "En «Valores», escribe la prima", start: 38.9 },
      {
        title: "Haz clic en «Crear póliza»",
        detail:
          "Si falta un dato obligatorio, el formulario lo nombra y lleva a él",
        start: 47.2,
      },
    ],
  },
  "polizas/renovar-una-poliza": {
    title: "Renovar una póliza",
    description:
      "Nexus crea la póliza de la vigencia siguiente y la encadena a la anterior",
    duration: 49.3,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "c9bd5a6c",
    chapters: [
      {
        title: "En la ficha de la póliza, haz clic en «Renovar»",
        detail: "Pide el permiso «Renovar pólizas»",
        start: 4.3,
      },
      {
        title: "Revisa lo que se copió",
        detail: "Los datos de la anterior, con el número en blanco",
        start: 8.2,
      },
      { title: "Escribe el número de la nueva póliza", start: 12.5 },
      {
        title: "Comprueba la vigencia nueva",
        detail:
          "Empieza el día en que termina la anterior y dura un año; la expedición es la de hoy",
        start: 17.6,
      },
      { title: "Ajusta lo que haya cambiado, como la prima", start: 24.3 },
      { title: "Haz clic en «Renovar póliza»", start: 31.9 },
    ],
  },
  "primeros-pasos/conocer-la-pantalla": {
    title: "Conocer la pantalla",
    description:
      "El menú, el riel de cada módulo, las cifras de lo pendiente, la agencia y tu cuenta",
    duration: 64.5,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "41d58b5e",
    chapters: [
      {
        title: "A la izquierda, el menú principal",
        detail:
          "Inicio, Tareas, Correos, Chats y Agente; después «Cartera» y «Recursos»",
        start: 4.3,
      },
      {
        title: "La cifra junto a una entrada dice lo que espera en ella",
        detail:
          "En rojo, algo vencido; en ámbar, algo que espera a una persona",
        start: 10.6,
      },
      {
        title: "«Mostrar u ocultar el menú» lo recoge y lo vuelve a abrir",
        detail: "El atajo es Ctrl+B",
        start: 15.8,
      },
      {
        title: "Arriba, la agencia: haz clic para abrir su menú",
        detail: "«Cambiar de agencia» vuelve a «Tus agencias»",
        start: 25.5,
      },
      {
        title: "Junto a la agencia, la campana",
        detail:
          "Con la cifra de lo que tienes por atender. Abre la bandeja de notificaciones",
        start: 32,
      },
      {
        title: "Al pie, tu cuenta: haz clic para abrir su menú",
        detail:
          "Tema, ayuda, tu perfil, la seguridad de la cuenta y cerrar sesión",
        start: 36.1,
      },
      {
        title: "Abre un módulo: el menú principal queda en el riel",
        detail:
          "A su lado, el menú del módulo, con su nombre arriba y una entrada por sección",
        start: 41.8,
      },
      {
        title: "En el riel, haz clic en un icono para cambiar de módulo",
        detail:
          "El nombre se lee al pasar el ratón; la cifra se vuelve un punto",
        start: 48.4,
      },
    ],
  },
  "tareas/cerrar-una-tarea": {
    title: "Cerrar una tarea",
    description: "Sin el resultado en Nexus, tu nota es la prueba del cierre",
    duration: 47.8,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "69296ed1",
    chapters: [
      {
        title: "Abre la tarea",
        detail: "Haz clic en ella, en tu lista de Tareas",
        start: 4.3,
      },
      {
        title: "Haz clic en «Cerrar tarea»",
        detail: "En el pie del panel",
        start: 9,
      },
      {
        title: "Lee lo que dice el cierre",
        detail: "Aquí, el resultado aún no aparece en Nexus",
        start: 13,
      },
      {
        title: "Escribe qué pasó",
        detail: "Tu nota es la prueba del cierre",
        start: 19.8,
      },
      {
        title: "Desmarca «Que el agente termine y la cierre»",
        detail: "Para cerrarla tú. Marcada, el botón dice «Encargar al agente»",
        start: 27.2,
      },
      { title: "Haz clic en «Cerrar tarea»", start: 31.8 },
    ],
  },
  "tareas/crear-una-tarea": {
    title: "Crear una tarea",
    description: "Qué hay que hacer, para quién y para cuándo",
    duration: 69,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "7200ca19",
    chapters: [
      { title: "En Tareas, haz clic en «Nueva tarea»", start: 4.3 },
      {
        title: "Escribe el título",
        detail:
          "Qué hay que hacer, en una frase. Es el único campo obligatorio",
        start: 8.1,
      },
      {
        title: "Elige el tipo de trámite",
        detail:
          "«Se cumple con» dice qué tiene que quedar en Nexus para darla por terminada",
        start: 14.8,
      },
      {
        title: "Elige el responsable y la fecha límite",
        detail: "Por defecto, «Reparto de la agencia»",
        start: 21.8,
      },
      {
        title: "Completa lo demás que sepas",
        detail: "Cliente, canal de entrada, descripción y pasos",
        start: 29.2,
      },
      { title: "Haz clic en «Crear tarea»", start: 51.3 },
    ],
  },
  "tareas/crear-una-tarea-recurrente": {
    title: "Crear una tarea recurrente",
    description: "Nexus abre cada ocurrencia como una tarea, en su fecha",
    duration: 71.9,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "edf30317",
    chapters: [
      { title: "En Tareas, abre «Recurrentes»", start: 4.3 },
      { title: "Haz clic en «Nueva recurrente»", start: 8.2 },
      {
        title: "Escribe la tarea",
        detail: "Título, tipo de trámite, responsable y, si quieres, los pasos",
        start: 11.9,
      },
      {
        title: "Elige cada cuánto se repite",
        detail: "Aquí, cada mes, el último día hábil",
        start: 27.7,
      },
      {
        title: "Decide con cuánta anticipación se abre",
        detail: "3 días antes de su fecha límite",
        start: 35.5,
      },
      { title: "Comprueba las próximas fechas límite", start: 39.3 },
      {
        title: "Elige quién la hace",
        detail: "El responsable, o el agente a nombre del responsable",
        start: 43.4,
      },
      { title: "Haz clic en «Crear recurrente»", start: 46.9 },
    ],
  },
  "tareas/trabajar-una-tarea": {
    title: "Trabajar una tarea",
    description:
      "El panel, la conversación, los pasos y la actividad de una tarea",
    duration: 55.4,
    width: 1280,
    height: 800,
    recorded: "2026-11-10",
    appVersion: "0.68.3",
    version: "f9f00626",
    chapters: [
      {
        title: "Haz clic en la tarea para abrir su panel",
        detail: "Arriba, el título y el tipo de trámite",
        start: 4.3,
      },
      {
        title: "Lee el estado, la descripción y los datos",
        detail:
          "Responsable, delegación, fecha límite, cliente y quién la creó",
        start: 9.2,
      },
      {
        title: "Marca los pasos que vas haciendo",
        detail: "Marcar un paso no cierra la tarea",
        start: 14.3,
      },
      {
        title: "Haz clic en «Abrir tarea»",
        detail: "Lleva a la página de la tarea",
        start: 21.3,
      },
      {
        title: "Escribe en la conversación",
        detail: "Con «@» avisas a una persona que ve la tarea",
        start: 28.8,
      },
      { title: "Haz clic en «Enviar»", start: 38.4 },
      {
        title: "Abre «Actividad»",
        detail:
          "Cada cambio, con quién lo hizo y cuándo. No se edita ni se borra",
        start: 44.5,
      },
    ],
  },
} as const satisfies Record<string, ManualVideo>;

export type ManualVideoId = keyof typeof MANUAL_VIDEOS;
