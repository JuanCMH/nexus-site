# Política de privacidad y guía del conector · Diseño

**Fecha:** 2026-10-21 · **Estado:** propuesta, ya construida en la rama
`privacidad-y-conector` para revisarla en pantalla; no entra a `main`
hasta que el dueño apruebe el texto. El texto de la política lo
aprueba el dueño (`00` §7), con revisión legal recomendada (Ley 1581 de
2012).

## Para qué

Para publicar el conector de Nexus en el directorio de Claude, Anthropic
exige dos direcciones públicas
([submission](https://claude.com/docs/connectors/building/submission),
[review criteria](https://claude.com/docs/connectors/building/review-criteria)):

- **Una política de privacidad** que diga qué datos se recogen, cómo se usan
  y se guardan, con quién se comparten, cuánto se conservan y a quién se
  escribe. Si falta o está incompleta, el rechazo es inmediato.
- **Documentación pública** de cómo se configura y se usa el conector,
  publicada antes que el conector.

Lo pide el dueño para la versión de `nexus-app` que sigue a la 0.28.0. Los
hechos salen del anexo «Hechos para la política de privacidad» de
`nexus-app/docs/plans/2026-10-21-directorio-de-conectores-design.md` (rama
`directorio-de-conectores`, commit d27f97b) y del Acuerdo de uso
(`src/shared/legal/agency-agreement.ts`, versión 1).

## Quién lo lee

- **Los revisores de Anthropic**, en inglés.
- **Una agencia que va a conectar su Claude**: la persona con el permiso
  «Conectar el agente y definir su horario».
- **Cualquier persona** cuyos datos estén en Nexus: quien lo usa, o un
  cliente de una agencia.

## Las cuatro páginas

| Ruta | Qué es |
|---|---|
| `/privacidad` | La política de privacidad. |
| `/en/privacy` | Su traducción al inglés. |
| `/agente` | La guía del conector: conectar Claude, qué hace el agente, desconectar. |
| `/en/agent` | Su traducción al inglés. |

**La guía vive en `/agente`, no en el manual.** El manual está en espera
(decisión del dueño, 2026-10-21) y la guía no puede depender de él. `03` §3
ya reservaba `/agente` para «cómo se conecta Claude a Nexus y qué hace».
Cuando el manual se publique, su categoría «Agente» enlaza aquí en vez de
repetirlo.

### Excepción de idioma

`00` §4 y §6 dicen: sin capa de traducción, rutas en español. Excepción
acotada, decidida por el dueño el 2026-10-21, que se anota en `00` §6:

- Solo estas dos páginas tienen versión en inglés, en `/en/…`, con ruta en
  inglés. Ninguna otra.
- Sin sistema de traducción: cada versión es su propio archivo, con el texto
  escrito en el código. Los datos que comparten (el responsable, la fecha,
  los proveedores) salen de una sola constante.
- Cabecera y pie siguen en español. El contenido en inglés va en un
  contenedor con `lang="en"`.
- Cada par se declara con `alternates.languages` (`es-CO`, `en`) y
  `og:locale` propio, y los dos entran en el sitemap.
- Cada página enlaza a la otra arriba: «Read in English» / «Leer en
  español».
- La versión que rige es la española; la inglesa lo dice.

### Forma

Páginas de lectura: título de página interior, entradilla, una línea con
la versión y la fecha, y el cuerpo a `max-w-2xl` con `h2` por sección.
Sin escenario ni réplicas: no hay nada que enseñar de la app que ayude más
que el nombre exacto de cada pantalla. Una pieza compartida,
`components/site/document-page.tsx` (cabecera del documento y estilos del
cuerpo), porque la usan las cuatro.

El pie suma «Privacidad» y «Conectar Claude». La cabecera no cambia.

## Texto · `/privacidad`

**Título (h1):** Política de privacidad

**Entradilla:** Qué datos trata Nexus, para qué, con quién los comparte,
cuánto los conserva y cómo pedir que se consulten, corrijan o borren.

**Línea:** Versión 1 · vigente desde el `<fecha de publicación>`

### Quién es el responsable

Nexus es de MAIN Módulos, Aplicaciones e Innovación S.A.S. («MAIN»), NIT
901.510.461-9, con domicilio en la Carrera 7 B n.º 123-46, Bogotá D.C.,
Colombia. Para todo lo de esta política, el contacto es `SUPPORT_EMAIL`.

Esta política se rige por la ley colombiana, en particular por la Ley 1581
de 2012 de protección de datos personales.

### A qué se aplica

A Nexus en todas sus formas: la aplicación de escritorio, la versión web
(`app.n3xus.cloud`) y el conector por el que el agente de una agencia entra
a Nexus. También a este sitio.

Nexus trata dos clases de datos, con papeles distintos:

- **Los de las personas que usan Nexus.** MAIN es el responsable.
- **Los que una agencia registra sobre sus clientes.** La agencia es la
  responsable: obtiene la autorización de sus clientes y atiende sus
  reclamos. MAIN es el encargado y los trata solo para prestar el servicio,
  como establece el Acuerdo de uso que acepta cada agencia.

### Qué datos de las personas que usan Nexus

- **Cuenta:** nombre, correo, contraseña y, si la pone, foto de perfil.
  De la contraseña se guarda solo su huella, nunca la contraseña. Si la
  persona activa la verificación en dos pasos, se guardan su secreto y las
  huellas de los códigos de recuperación.
- **En cada agencia:** el rol, los permisos adicionales y, si la agencia
  los registra, el cargo y el teléfono de trabajo.
- **Seguridad:** los computadores y navegadores aprobados para abrir la
  bóveda (su nombre y cuándo se usaron) y sus sesiones; los códigos de
  recuperación de contraseña y de verificación del correo, que caducan.
- **Actividad:** la bitácora de la agencia (quién creó, cambió o eliminó
  qué, y cuándo) y la aceptación del Acuerdo de uso (quién, cuándo y qué
  versión).
- **Diagnóstico:** los errores de la aplicación (el mensaje técnico, la
  pantalla, la versión, el sistema y la persona en la que ocurrieron) y los
  fallos de las herramientas del agente.
- **Ideas y problemas** que la persona envía desde la aplicación, con la
  pantalla y la versión.
- **Facturación:** el plan de la agencia, su uso, sus estados de cuenta en
  dólares y en pesos, y los datos legales de la agencia que aparecen en
  ellos.

### Qué datos registra una agencia

- **Su cartera:** clientes y pólizas, con los campos que define la agencia
  en sus plantillas (identificación, contacto, bienes asegurados, valores,
  entre otros) y la evidencia de cada dato (la cita, la página y el
  documento de donde salió).
- **Su trabajo:** documentos y sus archivos, tareas y su historial,
  cotizaciones de cumplimiento, correos redactados y por enviar, modelos de
  correo, referencias, flujos y criterios.
- **Sus correos vinculados:** Nexus lee los buzones que la agencia vincula,
  en los servidores de correo que ella usa, y envía un correo solo cuando
  una persona lo decide. La clave de cada buzón se guarda cifrada.
- **Su bóveda:** las claves se cifran en el computador de quien las guarda
  antes de enviarse. Nexus guarda solo el texto cifrado y no puede leerlo
  ni recuperarlo.

### Para qué se usan

Para prestar el servicio, proteger las cuentas, dar soporte, corregir
fallos y emitir los estados de cuenta. Nexus envía por correo los códigos
de recuperación de contraseña y de verificación del correo, y los estados
de cuenta.

MAIN no vende, cede ni comparte los datos de una agencia, y no los
consulta salvo para prestar el servicio, a solicitud de la agencia o para
corregir un fallo. Nexus no usa analítica de terceros ni publicidad.

### El agente: Claude, con la cuenta de la agencia

Nexus no trae inteligencia artificial. Cada agencia puede conectar **su
propia cuenta de Claude**, de Anthropic, por el conector de Nexus.

- Lo que el agente lee por el conector (clientes, pólizas, correos,
  documentos) llega a Claude por decisión de la agencia y se trata según la
  cuenta y las condiciones que la agencia tiene con Anthropic. La agencia
  elige qué conectar y puede cortar la conexión en Nexus cuando quiera.
- La conexión puede ver y hacer lo mismo que la persona que la aprobó.
- Para mantener la conexión, Nexus guarda la huella del acceso y de su
  renovación, el nombre del programa conectado, quién la aprobó y cuándo se
  usó.
- Los archivos que el agente lee o sube viajan por enlaces que caducan a
  los treinta minutos.
- Si la agencia guarda un disparador para avisar a su rutina de Claude,
  Nexus le envía avisos que llevan solo identificadores y lo que pasó,
  nunca datos de clientes. El token del disparador se guarda cifrado.

### Con quién se comparten

Con los proveedores que hacen funcionar Nexus, y solo con lo que cada uno
necesita:

| Proveedor | Para qué | Qué datos |
|---|---|---|
| Convex | La base de datos, los archivos y el servidor de Nexus y del conector | Todos los anteriores |
| Vercel | Sirve la versión web y este sitio | Los datos técnicos de cada visita; los datos de la agencia van directo a Convex |
| Resend | Envía los correos de la cuenta y los estados de cuenta | El destinatario y el contenido de esos correos |
| Anthropic | Recibe los avisos a la rutina de la agencia | Solo identificadores y lo que pasó |
| GitHub | Distribuye las actualizaciones de la aplicación de escritorio | Ninguno de la agencia |

Lo que el agente lee por el conector va a la cuenta de Claude de la
agencia, como se explica arriba.

### Dónde se guardan

En los servidores de Convex, en Estados Unidos. La agencia autoriza ese
almacenamiento fuera de Colombia en el Acuerdo de uso. La aplicación de
escritorio guarda además en el computador sus ajustes, la sesión, los
registros de las actualizaciones y, en el computador del propietario, la
carpeta de documentos de la agencia, que Nexus mantiene como copia.

### Cómo se protegen

Las comunicaciones van cifradas y cada persona entra con su usuario y sus
permisos. Las contraseñas se guardan como huella, las claves de los buzones
cifradas, y la bóveda se cifra en el computador antes de salir. Si ocurre
un incidente de seguridad que afecte los datos de una agencia, MAIN lo
informa a su propietario dentro de las 72 horas siguientes a conocerlo.

### Cuánto se conservan

- Mientras la agencia use Nexus. Las personas borran sus registros desde la
  aplicación; lo que se borra en Nexus sale también de la carpeta de
  documentos.
- Durante una suspensión o tras la terminación, treinta días calendario
  para exportarlos. Después se eliminan.
- Los registros de errores y de fallos de las herramientas, treinta días.
- Los enlaces de archivos del agente, treinta minutos. Los códigos y las
  solicitudes de conexión, diez minutos.

### Este sitio

`n3xus.cloud` no usa cookies, analítica ni servicios de terceros. Guarda
en el navegador solo el tema elegido (claro u oscuro). Lo sirve Vercel.

### Tus derechos

Conforme a la Ley 1581 de 2012, puedes conocer, actualizar y corregir tus
datos; pedir que se borren o revocar tu autorización cuando no haya un
deber legal o contractual de conservarlos; pedir prueba de la autorización;
saber cómo se han usado; y presentar una queja ante la Superintendencia de
Industria y Comercio.

- **Si usas Nexus:** escribe a `SUPPORT_EMAIL` desde el correo de tu
  cuenta. Las consultas se responden en un máximo de diez días hábiles y
  los reclamos en quince, como fija la ley. Tu nombre y tu foto los cambias
  tú mismo en la aplicación.
- **Si eres cliente de una agencia:** tus datos los decide la agencia.
  Dirígete a ella.

### Cambios

Si esta política cambia, la nueva versión se publica en esta página con su
número y su fecha.

## Texto · `/agente`

**Título (h1):** Conectar Claude con Nexus

**Entradilla:** Cómo se conecta el Claude de tu agencia a Nexus, qué puede
hacer una vez conectado y cómo se desconecta.

**Línea:** Escrita para Nexus `<versión>`

### Antes de empezar

- **Una cuenta de Claude** que admita conectores. Qué planes los incluyen lo
  define Anthropic ([sus planes](https://claude.com/pricing)).
- **Una cuenta en Nexus con el permiso «Conectar el agente y definir su
  horario»**. Se da por rol, en Configuración → Equipo.

La conexión puede ver y hacer lo mismo que la persona que la aprueba. Que
la apruebe alguien con los permisos que el agente necesita.

### Conectar desde el directorio de Claude

1. En Claude, abre el directorio de conectores, busca Nexus y conéctalo.
2. Claude abre la página de autorización de Nexus, que enseña un código de
   ocho caracteres. Vale diez minutos.
3. En Nexus, ve a **Agente → Puesta en marcha → Código de Claude**, escribe
   el código y haz clic en «Conectar». Escribirlo es aprobar la conexión.
4. La página de autorización sigue sola y vuelve a Claude.

La conexión queda unida a la agencia de quien escribió el código.

### Conectar una segunda agencia con «Añadir a Claude»

Una cuenta de Claude conecta una sola vez un conector del directorio. Si
trabajas con dos agencias en Nexus, la segunda se conecta con su propio
conector:

1. En Nexus, entra a esa agencia y ve a **Agente → Puesta en marcha**.
2. Haz clic en «Añadir a Claude». Claude añade el conector de esa agencia y
   abre su página de autorización, que enseña un código corto.
3. En Nexus aparece una «Solicitud de conexión» con un código. Si coincide
   con el de la página de Claude, haz clic en «Aprobar».

### Qué puede hacer el agente

El agente trabaja con lo que la agencia tiene en Nexus y con los flujos que
la agencia le da: leer los correos vinculados, registrar documentos,
actualizar la cartera, atender tareas, redactar correos y cotizar
cumplimiento, entre otros.

- **Lee y propone.** Lo que el agente crea queda en **Agente → Por
  confirmar** hasta que una persona lo confirma o lo descarta. Si corrige
  un registro ya confirmado, el cambio queda marcado hasta que una persona
  lo da por revisado.
- **No hace lo que es de una persona:** enviar un correo (lo deja «Por
  enviar»), confirmar lo que propuso, abrir la bóveda o borrar registros.
- **No puede más que quien aprobó la conexión.**
- **Todo queda en la bitácora**, con el agente como autor y, si actuó por
  encargo, a petición de quién.

### Desconectar

En Nexus, en **Agente → Puesta en marcha**, «Conexiones activas» enseña
cada programa conectado. «Cortar la conexión» le quita el acceso de
inmediato. Para que el agente deje de entrar, la conexión se corta en
Nexus.

### Tus datos

Lo que el agente lee por el conector llega a tu cuenta de Claude y se trata
según tus condiciones con Anthropic. El detalle está en la
[política de privacidad](/privacidad).

### Ayuda

Escribe a soporte: `SUPPORT_EMAIL`.

## Verificación contra `02`

Cada frase de la guía sale de `02` §2 y §3.2–3.3 o del diseño del directorio
en `nexus-app` (§1, §5). Los nombres de pantalla se comprobaron en
`nexus-app` (rama `directorio-de-conectores`): «Conectar el agente y definir
su horario» (`src/shared/permissions/catalog.ts`), «Solicitud de conexión»,
«Aprobar» y «Cortar la conexión». «Código de Claude» y su botón «Conectar»
se construyen en esa misma versión; si cambian, la sesión de la app avisa.
`02` §8 («Conector») se actualiza: ya no se autoriza solo con el código de
conexión.

## Preguntas abiertas

1. **Conservación tras cancelar: 30 o 90 días.** El Acuerdo de uso (v1,
   2026-10-20) dice treinta días y luego se eliminan. `02` §6 y la FAQ de
   `/precios` dicen «al menos 90 días» y que no se promete un borrado.
   La política sigue al Acuerdo, que es lo que aceptaron las agencias.
   Volver a 90 días exige cambiar primero el Acuerdo y subir
   `AGENCY_AGREEMENT_VERSION` en `nexus-app`: cada propietario lo acepta
   otra vez. Si se queda en 30, `/precios` y `02` §6 se alinean.
2. **La fecha de vigencia** de la política: la del día que se publique.
3. **«Rige la versión española»** en la versión inglesa: propuesta, para la
   revisión legal.
4. **Lo que no dice la política y quizás debería** (revisión legal):
   menores de edad, entrega a autoridades por orden legal, y la
   autorización de transferencia internacional para las personas que usan
   Nexus (el Acuerdo la da solo por la agencia).
5. **Solicitar acceso:** cuando se abra el formulario (`03` §8), la política
   suma el correo y el nombre de la agencia que recoge, y el formulario su
   casilla de autorización.
6. **La versión de la guía:** «Escrita para Nexus 0.29.0»
   (`CONNECTOR_GUIDE_APP_VERSION`, en `lib/legal.ts`). Confirmada por la
   sesión de la app el 2026-10-21; el sitio no se publica antes que esa
   versión. Todos los nombres de pantalla y de botón de la guía los
   confirmó la sesión de textos de la app (commit 3289816).
7. **«Este sitio»:** «Vercel recibe los datos técnicos de cada visita» es
   lo que hace cualquier servidor; Vercel no tiene registro de visitantes
   activado en este proyecto que haya que declarar aparte (confirmar).
