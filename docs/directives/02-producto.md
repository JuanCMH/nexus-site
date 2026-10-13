# 02 · Producto

> Qué es Nexus hoy y **qué se puede afirmar de él en el sitio**. Este
> documento existe para que nadie tenga que abrir el código de la app para
> escribir una frase, y para que ninguna frase prometa algo que la app no
> hace.
>
> **Corte: `nexus-app` 0.22.0, 2026-10-12.** El producto cambia cada semana.
> Antes de publicar una afirmación concreta (una función, un requisito, una
> cifra), se comprueba contra la versión publicada de la app; si ya no es
> cierta, se corrige aquí primero y luego en la página.

## 1. En una frase

Nexus es el sistema de registro de una agencia de seguros —clientes,
pólizas, documentos y tareas—, hecho para que lo operen **dos tipos de
usuario: las personas del equipo y el agente de IA de la agencia**.

**Hacia dónde va:** que toda la agencia esté en un solo lugar. No solo la
cartera: también el trabajo de cada día, cómo se hace cada cosa (los
flujos), con qué claves se entra a cada portal (la bóveda) y quién puede
qué. El sitio lo dice así y enseña todos los módulos que existen; lo que
aún no existe sigue en §7.

## 2. La idea que lo distingue

La generación anterior de Nexus traía una IA por dentro. Esta no.

- **La agencia conecta su propio Claude.** Con su suscripción, en su cuenta.
  Nexus no vende IA ni cobra por uso de IA.
- **El agente es un usuario más**, con sus propios permisos, que entra por
  un conector. Puede consultar lo que hay, registrar y actualizar clientes y
  pólizas, guardar documentos, crear tareas y repartirlas, y redactar
  correos.
- **Nexus pone las barandas**: la estructura de los datos, la validación,
  los permisos, el estado «Por confirmar» y la bitácora. Lo que el agente
  propone espera a que una persona lo confirme.
- **Funciona con todo apagado.** El conector vive en la nube: el agente
  puede trabajar de madrugada, en tareas programadas, sin un computador
  encendido.
- **Nexus se puede usar sin agente.** El equipo trabaja en las mismas
  pantallas; el agente quita trabajo, no es requisito.

La frase que resume la postura: *Nexus no pone la IA; pone el sistema que
impide que la IA se equivoque.*

## 3. Qué hay en Nexus

Es el menú de la app, con los nombres que la persona ve.

| Área | Qué hace |
|---|---|
| **Inicio** | «Mi día»: lo que tiene pendiente quien entra. «Agencia»: la cartera y el equipo, para quien dirige (con su permiso). |
| **Tareas** | Una tarea es un compromiso con un resultado que Nexus comprueba: se cierra automáticamente cuando el resultado aparece en el registro (la póliza renovada, el documento guardado). Tienen tipo de trámite, responsable y fecha límite. Cada madrugada Nexus crea una tarea por cada aviso que la plantilla tiene en una fecha con seguimiento; en el fin de vigencia de una póliza es la **tarea de renovación** (comprobado el 2026-10-12 en el `CLAUDE.md` de `nexus-app` 0.22.0). Nexus no envía correo por su cuenta; su historial no se edita ni se borra. Las reglas de quién lleva qué se escriben en frases. |
| **Clientes** | La ficha de cada cliente, con sus pólizas, documentos y tareas. Los campos los define cada agencia en su plantilla. |
| **Pólizas** | Cada póliza con su aseguradora, ramo y vigencia. El estado (por iniciar, vigente, vencida) no se escribe: sale de las fechas. Toda póliza de un ramo que se renueva debe terminar renovada, reemplazada o con la nota de por qué no. |
| **Cumplimiento** (la pantalla se llama «Cotizaciones de cumplimiento») | La exportación lleva el logo, el color y los datos de la agencia. Cotiza pólizas de cumplimiento y de seriedad de la oferta: un contrato y sus amparos, con PDF y Excel. **Solo eso**: Nexus no cotiza otros ramos ni compara aseguradoras. |
| **Documentos** | Los archivos de la agencia, ligados a su cliente o póliza. En la app de escritorio, además, una copia en una carpeta del computador que Nexus vigila y repara. |
| **Flujos** | Cómo hace cada trabajo el agente, paso a paso y por escrito. Nexus trae los suyos (leer correos, registrar un documento, atender tareas, cotizar cumplimiento, entre otros); cada agencia tiene su copia y la adapta, o escribe los propios. Un cambio queda en borrador hasta que una persona lo publica; cada flujo guarda sus versiones, sus ejecuciones y quién tiene acceso, y se puede comparar con el de Nexus. Las categorías del listado son de la agencia. Los criterios (reglas en una frase que el agente sigue) viven aquí. Nexus no dispara los flujos ni los ata a un horario: el agente los usa cuando se lo piden. |
| **Accesos** (la bóveda) | Las contraseñas de portales y aseguradoras, compartidas persona por persona. Se cifran en el computador de quien las guarda: al servidor solo sube texto cifrado y el agente no tiene acceso. Solo abre en un computador o un navegador aprobado como de confianza. Usar un acceso se anota en la bitácora, que nombra la cuenta y nunca la clave. Al copiar una clave, el portapapeles se borra a los 30 segundos. Tiene copia de emergencia, que no depende de internet. |
| **Configuración** | Agencia (datos, logo y color), catálogos (aseguradoras y ramos), plantillas, equipo (roles, permisos e invitaciones de un solo uso, con rol y caducidad), agente (conexión, correos vinculados, envíos) y bitácora. |

**Importar desde Excel.** Clientes y pólizas se cargan desde un Excel, con
plantilla descargable, validación por fila y carga por lotes. Lo que carga
una persona nace confirmado; lo que propone el agente, «Por confirmar».

### 3.1 Las plantillas

Cada agencia arma sus formularios de cliente y de póliza. Puede añadir 14
tipos de campo (texto corto y largo, número, moneda, fecha, hora, lista,
selección múltiple, casilla, teléfono, correo, enlace, archivo e imagen), con
campos calculados, campos que aparecen según otro, y fechas con
seguimiento. El agente puede proponer una plantilla a partir de los Excel
que la agencia ya usa; la persona la revisa antes de aplicarla.

### 3.2 Lo que hace el agente

Cada trabajo del agente es un flujo. Los que existen en este corte:

- **Leer correos** de los correos vinculados y proponer lo que encuentre.
- **Registrar un documento**: leer una carátula y proponer la póliza y el cliente.
- **Actualizar la cartera** y **consultar** («¿qué vence este mes?»).
- **Atender tareas** que le delegaron y **auditar** las cerradas.
- **Redactar un correo**, que queda «Por enviar» hasta que una persona lo envía.
- **Cotizar cumplimiento**.
- **Configurar la agencia**: plantillas, catálogos y roles, siempre como propuesta.
- **Informar el estado** de la agencia y **preparar la confirmación** de lo que propuso.

Lo que el agente **no** hace: enviar un correo, confirmar su propia
propuesta, abrir la bóveda, borrar registros. Eso es de personas.

### 3.3 Control y rastro

- **Roles y permisos** por persona; un rol se arma permiso por permiso.
- **Bitácora** de quién hizo qué y cuándo, con origen: una persona o el
  agente, y a petición de quién.
- **Procedencia**: una póliza propuesta desde un correo dice de qué correo
  salió.
- **Segundo factor** opcional para entrar.
- **Evidencia por dato**: lo que el agente registra puede llevar su cita,
  su página y su documento, y la ficha lo enseña. Nexus no coteja la cita:
  la muestra como llegó.
- **Cambios por revisar**: si el agente corrige un registro ya confirmado,
  queda marcado hasta que una persona lo da por revisado, y la bitácora
  guarda qué dato cambió y qué decía antes.

## 4. Dónde se usa

| Superficie | Estado en este corte |
|---|---|
| **Windows** (instalador, se actualiza automáticamente) | Publicado. |
| **Web** (`app.n3xus.cloud`) | Publicada (0.22.0). La misma aplicación, sin instalar nada. No tiene lo que es del computador: la carpeta de documentos, las notificaciones del sistema ni el arranque con el equipo. |
| **macOS** | Planeado, sin fecha. No se anuncia. |
| **Móvil** | No existe. La app está pensada para pantalla de escritorio. |

Los datos viven en la nube: las dos superficies y el agente ven lo mismo al
instante. La app de escritorio añade lo que un navegador no puede: la
carpeta de documentos en el computador y el arranque con el equipo.

## 5. Para quién

Agencias y corredores de seguros en **Colombia**, de equipos pequeños, que
llevan su cartera en Excel y correo. Nexus trae el catálogo de aseguradoras
y ramos de Colombia listo para cargar.

**Estado comercial: beta cerrada.** Crear una agencia exige un código de
activación de un solo uso. A 2026-10-11 hay una agencia usando Nexus.

## 6. Precios

**Sin definir.** No hay precio publicado ni decidido para esta generación.
`docs/referencia/2026-07-23-plan-monetizacion.md` es investigación del
modelo anterior (cuando Nexus pagaba la IA); sirve de contexto sobre
pasarelas y facturación en Colombia, no como lista de precios.

Lo que sí se puede decir: la IA la paga la agencia en su suscripción de
Claude, no a Nexus.

## 7. Lo que no se afirma

Cada línea es algo que el sitio anterior decía, o que es tentador decir, y
que **hoy es falso**.

| No se dice | Por qué |
|---|---|
| «Nexus lee tus PDF y extrae los datos» | Nexus no extrae contenido. Lo lee el agente de la agencia y lo propone. |
| «IA incluida», «sin configurar nada» | La agencia conecta su propio Claude y lo paga aparte. |
| «Cotizador», «compara aseguradoras» | Solo cotizaciones de cumplimiento. |
| «Te avisamos por correo», «recordatorios automáticos» | Nexus no envía avisos: crea tareas. Los correos los redacta el agente y los envía una persona. |
| «Disponible para Mac», «en tu celular» | Ver §4. |
| «Comisiones», «cartera y cobranza», «siniestros», «WhatsApp», «portal de clientes», «conexión con las aseguradoras» | No existen. «Toda tu agencia en un solo lugar» se sostiene con los módulos de §3, sin dar a entender ninguno de estos. |
| «Flujos automáticos», «automatizaciones» | Un flujo es un texto que sigue el agente. Nexus no lo dispara ni tiene motor de ejecución. |
| «Usado por N agencias», testimonios, logos de clientes | No hay nada de eso que sea cierto y publicable. No se inventa prueba social. |
| «Seguridad de nivel bancario», sellos, certificaciones | No hay certificación alguna. Se describe el mecanismo real (§3, Accesos). |
| «El agente trabaja solo» | El agente propone; una persona confirma y envía. |
| Requisitos exactos del plan de Claude | Los define Anthropic y cambian. Se enlaza a su documentación en vez de copiarla. |

## 8. Glosario

| Término | Qué es |
|---|---|
| **Agencia** | La cuenta de una agencia en Nexus: su equipo, sus datos y su agente. |
| **Agente** | El Claude de la agencia, conectado a Nexus como un miembro más. Uno por agencia. |
| **Conector** | La dirección por la que Claude entra a Nexus. Se autoriza con un código de conexión. |
| **Por confirmar** | El estado de todo lo que el agente propone hasta que una persona lo confirma o lo descarta. |
| **Correo vinculado** | Una cuenta de correo de la agencia que el agente puede leer. |
| **Correo por enviar** | Un correo redactado que espera a que una persona lo envíe. |
| **Criterio** | Una regla de la agencia que el agente sigue («las pólizas de cumplimiento no se renuevan»). |
| **Flujo** | Los pasos, por escrito, de un trabajo del agente. De Nexus (no se edita) o de la agencia (sí). |
| **Plantilla** | El formulario de clientes o de pólizas de una agencia. |
| **Ramo** | La línea de seguro: autos, vida, cumplimiento. |
| **Bóveda** (en el menú, «Accesos») | Las contraseñas de la agencia, cifradas. |
| **Bitácora** | El registro de todo lo que se hizo y quién lo hizo. |
| **Código de activación** | Lo que hace falta para crear una agencia durante la beta. |
| **Código de invitación** | Lo que una agencia da a una persona para que entre a su equipo. |

## 9. Dónde comprobar

En `nexus-app` (`~/work/nexus/nexus-app`), solo para leer:

- `docs/directives/00-reglas-generales.md` §2 y §3: qué es Nexus y su modelo.
- `CLAUDE.md`: el resumen operativo, con cada función y su documento de diseño.
- `apps/mcp/manual/manual.md` y `flows/`: lo que hace el agente, paso a paso.
- `src/shared/agent/release-notes.ts`: qué cambió en cada versión.
- `docs/directives/03-reglas-interfaz.md` §0.7: el vocabulario.
