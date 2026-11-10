# Manual completo

> **Estado: implementado** · 2026-10-29, puesto al día a la **0.68.3** el
> 2026-11-10 (sección final), pendiente de la revisión del dueño. Sigue a
> `2026-10-20-manual-design.md` (la estructura, las piezas y la búsqueda no
> cambian). Pedido del dueño: que el manual cubra toda la aplicación, con
> capturas de la agencia de demostración y sin vídeo, escrito para la última
> versión publicada.

## La versión

`nexus-app` **0.51.0**, publicada el 2026-10-29 (`latest.yml` de
`nexus-app-releases`), que es el commit `0982536` de `main`. Todos los
artículos dicen «Escrito para Nexus 0.51.0», también los seis de la primera
entrega, que se reescriben: describían `main` del 2026-10-20 y la pantalla
de acceso cambió (ahora pide el código, los datos y la contraseña en tres
pasos).

## Las capturas

De la app web en local, contra un backend de Convex **local y aislado**
(un worktree de `nexus-app` en `0982536`, puertos 3310 y 3311), para no
tocar el deployment de desarrollo que comparten los demás worktrees. La
agencia es **Altavista Seguros** (`convex/demoSeed.ts`), ficticia, creada
por la app como una de verdad y sembrada después: 123 clientes, 990
pólizas, tareas, propuestas del agente, chats y correos. La propietaria es
Carolina Restrepo Vélez (`carolina.restrepo@altavistaseguros.co`).

Para el manual se amplió la semilla (rama `manual-capturas` de
`nexus-app`, `convex/demoAgent.ts`): el agente conectado, sus solicitudes
y permisos, la verificación, tareas por cerrar y devueltas, un correo
vinculado con clave, modelos de correo, pólizas sin resolver, notas de
aseguradoras, un chat con archivo, clases y carpetas de documentos. La
bóveda de la propietaria se creó por la app, con siete accesos ficticios.

Cada captura es un par claro y oscuro a doble densidad, a 1280 × 800 salvo
que el encuadre pida otro. El arnés (Playwright, con un perfil de Chromium
persistente para que la bóveda reconozca el computador) sigue fuera del
repo (`03` §3.2).

## Categorías

Las del menú de la app, en su orden. Se suman cinco a las de `03` §3.2:
Inicio, Correos, Chats, Directrices y Contactos.

| Ruta | Carpeta | Qué cubre |
|---|---|---|
| `primeros-pasos` | `getting-started/` | Cuenta, agencia, entrar, la pantalla, el celular, Windows, notificaciones, seguridad de la cuenta |
| `inicio` | `home/` | Mi día y Agencia |
| `tareas` | `tasks/` | Vistas, crear, trabajar, delegar, cerrar, revisar, plazos |
| `correos` | `mail/` | Por enviar, escribir, modelos, correos vinculados, presentación |
| `chats` | `chats/` | Chats, grupos y el agente en un grupo |
| `agente` | `agent/` | Conectar, Mi asistente, Por confirmar, Verificación, Dudas, Permisos, Ejecuciones |
| `clientes` | `clients/` | Listado, crear, ficha, responsable, importar |
| `polizas` | `policies/` | Listado, registrar, ficha, renovar, cancelar y cerrar, importar |
| `cotizaciones-de-cumplimiento` | `compliance-quotes/` | Cotizar, estados, exportar, cálculo y amparos |
| `documentos` | `documents/` | Explorador, subir y vincular, clases y carpetas, carpeta del computador |
| `directrices` | `directives/` | Flujos, criterios, reparto, referencias, categorías y temas |
| `contactos` | `contacts/` | Contactos, empresas y lo que se sabe de ellos |
| `accesos` | `vault/` | La bóveda, compartir, salud, accesos del agente, copia de emergencia |
| `configuracion` | `settings/` | Agencia, plan, equipo, roles, bitácora, catálogos, conexiones, plantillas, tu cuenta |

## El índice

87 artículos:

- **Primeros pasos** (10): Crear tu cuenta · Entrar a tu agencia o crear la tuya · Entrar a Nexus · Conocer la pantalla · Tus notificaciones · Nexus en el celular · Nexus en Windows · Proteger tu cuenta · Recuperar tu contraseña · Si no puedes entrar
- **Inicio** (2): Mi día · La vista Agencia
- **Tareas** (8): Qué es una tarea · Tus tareas · Crear una tarea · Trabajar una tarea · Delegar una tarea al agente · Cerrar una tarea · Revisar tareas · Plazos y tareas automáticas
- **Correos** (6): Revisar y enviar un correo por enviar · Escribir un correo · Modelos de correo · Vincular un correo · Presentación y firma de los correos · Enviados y descartados
- **Chats** (3): Chats y grupos · Escribir en un chat · El agente en un chat
- **Agente** (9): Cómo trabaja el agente · Conectar el asistente de la agencia · La puesta en marcha del agente · Conectar tu propio asistente · Confirmar lo que propone el agente · Verificación y supervisión · Las dudas del agente · Permisos y solicitudes del agente · Las ejecuciones del agente
- **Clientes** (5): El listado de clientes · Crear un cliente · La ficha del cliente · El responsable del cliente · Importar clientes desde Excel
- **Pólizas** (6): El listado de pólizas · Registrar una póliza · La ficha de la póliza · Renovar una póliza · Cancelar o cerrar una póliza · Importar pólizas desde Excel
- **Cotizaciones de cumplimiento** (4): Crear una cotización de cumplimiento · Estados de una cotización · Exportar una cotización · Reglas de cálculo y amparos de la agencia
- **Documentos** (4): El explorador de documentos · Adjuntar, vincular y renombrar documentos · Clases, carpetas y orden de la carpeta · La carpeta de documentos en el computador
- **Directrices** (6): Los flujos · Editar y publicar un flujo · Criterios · Reparto de tareas · Referencias de la agencia · Categorías y temas
- **Contactos** (3): Contactos y empresas · Lo que sabemos de un contacto · Confirmar contactos y notas
- **Accesos** (8): Abrir la bóveda · Guardar y usar un acceso · Compartir accesos · Por cambiar y salud de las contraseñas · Accesos preparados por el agente · Solicitudes de acceso · Computadores de confianza · Copia de emergencia
- **Configuración** (13): Datos de la agencia · Uso y plan · Miembros del equipo · Invitar a una persona · Roles y permisos · Bitácora · Aseguradoras · Ramos · Conexiones con aseguradoras · Plantilla de clientes · Plantilla de pólizas · Este computador · Tu cuenta

## Lo que cambió respecto al plan

- Con 87 artículos, la portada del manual pasa a una tarjeta por
  categoría (con cuántos artículos tiene) y el índice lateral despliega
  solo la categoría abierta: con todo desplegado no cabía en la pantalla.
- Lo que es solo de Windows (la carpeta de documentos, «Este computador»,
  la franja de la ventana) se describe desde el código, sin captura: la
  web no lo enseña.

## Decisiones abiertas

Del dueño, encontradas al escribir el manual contra la 0.51.0:

- **El agente aplica por su cuenta** y la supervisión puede dejar entrar lo
  verificado sin una persona (`02` §3.5). La landing dice «el agente
  propone, una persona confirma»; cómo decirlo ahora es decisión del dueño.
- **Cualquier asistente**: el conector sirve a Claude, ChatGPT y otros
  clientes MCP; el sitio dice «conecta tu Claude».
- **La guía `/agente`** (escrita para la 0.29.0) nombra pantallas que ya no
  existen («Código de Claude», «Conexiones activas»): hay que ponerla al
  día, y con ella `/en/agent`.
- **Comisiones**: `02` §7 dice que no existen; la 0.51.0 tiene «Comisión
  estimada» y los campos «% de comisión» (reservados).
- **`/ayuda`**: el botón «Ayuda» de la app y el mensaje de la invitación
  abren `n3xus.cloud/ayuda`, que no existe. O la app enlaza a `/manual`, o
  el sitio redirige `/ayuda` a `/manual`.

Para llevar a `nexus-app` (textos que no coinciden con su pantalla): el
aviso «Correo guardado en Envíos» (la sección es «Por enviar»); «lo verá en
Accesos → Seguridad» (es «Equipos de confianza»); «Configuración → Agencia
→ Este computador» (está en «Tu cuenta»); «Se vinculan a el cliente»; el
permiso que nombra la pestaña «Para revisar» (es «Por revisar»); el
ejemplo «Atención de siniestros» de «Nuevo flujo»; y Supervisión, que dice
que cancelar pregunta siempre mientras Permisos lo da como «Lo aplica por
su cuenta».

## Puesta al día a la 0.68.3 (2026-11-10)

Entre la redacción y la revisión se publicaron 17 versiones (0.51.1 a
0.68.3, `dfe601e`, `latest.yml` del 2026-11-09). Se auditó cada artículo
contra el código de `nexus-app` por grupos de categorías y se corrigió lo
que ya no era cierto. Los 96 artículos dicen «Escrito para Nexus 0.68.3».

**Artículos nuevos** (10):

| Ruta | Por qué |
|---|---|
| `inicio/tablero-de-la-agencia` | Sustituye a «La vista Agencia» (`la-agencia`): desde la 0.56.0 es un tablero con menú propio. |
| `inicio/produccion-y-cierre-del-ano` | Producción anual y causada, períodos y cierre del año (0.62.0). |
| `tareas/tareas-recurrentes` | Tareas → Recurrentes y la agenda de dos semanas (0.64.0, 0.65.0). |
| `correos/conversacion-de-un-correo` | La conversación de un correo y «Pedir respuesta al agente» (0.52.0). |
| `correos/reglas-de-correo` | Correos → Reglas y su permiso (0.55.0). |
| `clientes/prospectos` | Prospectos y conversión (0.57.0). |
| `polizas/polizas-derivadas` | Pólizas derivadas y «Terminada» (0.61.0). |
| `polizas/anexos-de-una-poliza` | Anexos (0.63.0). |
| `documentos/carpetas-de-origen` | Carpetas de origen (0.65.0). |
| `directrices/portales` | Los recorridos de los portales. |

**Reescritos a fondo:** «Trabajar una tarea» (la página de la tarea con
«Conversación» y «Actividad» sustituye al «Hilo», 0.53.0), «Editar y
publicar un flujo» («Ponerse al día con Nexus» sustituye a «Comparar con el
de Nexus», 0.60.0), «Conexiones con aseguradoras» (el código del
autenticador que Nexus pide a una persona, 0.59.0) y «Cancelar o cerrar una
póliza» (fecha y devolución, 0.62.0).

**Capturas:** de la 0.68.3 en local, contra el mismo backend aislado
(worktree `nexus-app-manual`, rama local `manual-capturas` con `main`
fusionado, sin push), resembrado el 2026-11-10 para que las fechas caigan
alrededor de hoy. La contraseña de la propietaria de demostración se
restableció con `support:reset` contra ese backend local. El arnés sigue
fuera del repo; ahora regenera `screenshots.ts` desde `public/manual`.

**Vídeos:** el dueño aprobó el piloto «Crear una tarea recurrente» el
2026-11-10 y pidió la serie entera. Hay 30, uno por tarea, de 41 a 73 s
(24 MB en total), en el artículo y la sección que enseñan esa tarea. La
regla está en `03` §3.2. Se grabaron con un estudio adaptado del de Harmony
(fuera del repo): cada paso rotulado es un capítulo del reproductor y un
subtítulo del `.vtt`. Ninguno envía un correo, cierra un año ni publica una
versión: lo que no se puede deshacer se enseña hasta la confirmación.

| Categoría | Vídeos |
|---|---|
| Primeros pasos | Conocer la pantalla |
| Inicio | Mi día · El tablero de la agencia · La producción y el cierre del año |
| Tareas | Crear · Trabajar · Cerrar · Crear una tarea recurrente |
| Correos | Revisar y enviar · Escribir un correo · Reglas de correo |
| Chats | Chats y grupos |
| Agente | Por confirmar · Permisos y solicitudes |
| Clientes | Crear un cliente · Prospectos |
| Pólizas | Registrar · Renovar · Anexos · Cancelar |
| Cumplimiento | Crear una cotización |
| Documentos | Adjuntar y vincular · Carpetas de origen |
| Directrices | Criterios · Editar y publicar un flujo · Reparto |
| Contactos | Contactos y empresas |
| Configuración | Invitar a una persona · Roles y permisos · Plantilla de pólizas |

Accesos no tiene vídeo: la bóveda de la propietaria de demostración pide
una clave maestra que no se conoce. Hace falta crear una bóveda de
demostración para grabarlo.

**Capturas pendientes** (9), que siguen como comentario `CAPTURA` en su
artículo porque en local no se pueden producir: las que necesitan un buzón
leído en el servidor (`correos/conversacion`, `correos/pedir-respuesta`,
`correos/por-enviar-respuesta`), un portal conectado
(`configuracion/codigo-del-portal`, `directrices/portales`) o algo que
solo crea el agente (`agente/memoria`, `agente/ejecucion-incompleta`,
`agente/encargo-cerrar-tareas`, `tareas/recurrente-propuesta`). Esos
artículos se leen completos sin ellas.

### Decisiones abiertas nuevas

- **Comisiones:** el tablero enseña «Comisión estimada» («Por año, según
  el % de cada póliza») a quien tiene el permiso de datos reservados. El
  manual lo describe en una línea; `02` §7 sigue diciendo que el sitio no
  afirma «comisiones».
- Siguen abiertas las de la entrega anterior (el agente que aplica por su
  cuenta, «cualquier asistente», la guía `/agente`, `/ayuda`).

### Para llevar a `nexus-app`

Textos de la app que no coinciden con lo que hace (el manual describe lo
que hace):

- La ventana «Conectar» de un portal dice que el código del autenticador
  «se le da al agente en la conversación»; desde la 0.59.0 Nexus se lo pide
  a una persona en una ventana.
- La notificación de una tarea que sale de espera por su fecha dice «El
  agente sacó de espera»; lo hace Nexus. El cuadro de espera dice «vuelve a
  tu lista»; vuelve a «Por hacer».
- El permiso «Revisar las tareas cerradas» nombra la pestaña «Para
  revisar» (es «Por revisar»); «Organizar documentos» no menciona las
  carpetas de origen.
- La ficha de una recurrente propuesta enseña «Confirmar» a quien no puede
  confirmarla.
- «Vaciar memoria» borra hasta 500 datos por clic y dice «Se elimina
  todo»; cuenta también la memoria personal de cada persona.
- Las recurrentes propuestas por el agente no salen en Agente › Por
  confirmar.
- «Renovar» sigue en la barra de una póliza derivada o no renovable; una
  devolución registrada no se puede borrar desde «Cancelación».
- «Equipos de confianza» (Accesos) frente a «dispositivo de confianza»
  (guía de instalación) y «Este dispositivo» (Notificaciones).
- «Pedir al agente» y «Pedir respuesta al agente» nombran lo mismo; la
  ayuda de «Ignorar» trata de «usted»; las rutas mezclan «›» y «→».
- Desde «Mi día» (`?vista=dia`), una entrada del menú principal vuelve sola
  al tablero, también con «Atrás».
- A 1280 px, con el menú del módulo abierto, la barra de un correo por
  enviar en edición no cabe y el panel corta la lista.
- Un correo del agente que no se envió dice «Lo envió <persona>» en la
  lista de «Del equipo».
- Una comprobación de criterio sobre «Aseguradora», «Ramo» o «Cliente»
  compara contra ids internos y nunca coincide con un nombre; el aviso de
  la póliza enseña el id del criterio.
- La exportación de una cotización en la web no ofrece «Abrir» (solo en
  Windows); el registro de un anexo no abre la pestaña «Anexos».
- El panel de un correo vinculado y su aviso dicen «Envíos»; la pestaña es
  «Por enviar».
