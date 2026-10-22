# 02 · Producto

> Qué es Nexus hoy y **qué se puede afirmar de él en el sitio**. Este
> documento existe para que nadie tenga que abrir el código de la app para
> escribir una frase, y para que ninguna frase prometa algo que la app no
> hace.
>
> **Corte: `nexus-app` 0.22.0, 2026-10-12; precios, 2026-10-14.** El producto cambia cada semana.
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
| **Inicio** | «Mi día»: lo que tiene pendiente quien entra. «Agencia»: la cartera y el equipo, para quien dirige (con su permiso), con la prima vigente mes a mes y la tasa de renovación de los últimos 90 días frente a los 90 anteriores (comprobado en `nexus-app` 0.25.0, publicada, el 2026-10-16). |
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

Aprobados por el dueño el 2026-10-14. Las cifras viven en `lib/pricing.ts`
y solo ahí; la página es `/precios` (`docs/plans/2026-10-14-precios-design.md`).

**Un plan para cada tipo de agencia.** Todos los planes traen todas las
funciones; lo que cambia es el tamaño. Precios en dólares; el sitio enseña
al lado su valor en pesos a la TRM del día, como referencia.

**Sin promesas de gratuidad.** Nexus está en beta y los planes se pueden
ajustar. El sitio no hace bandera de lo que no se cobra («ilimitado», «sin
cupos», «gratis para siempre»): describe lo que trae cada plan (dueño,
2026-10-14).

| Plan | Mensual | Anual, al mes | Usuarios incluidos / máximo | Usuario adicional (mes · anual) | Correos vinculados | Almacenamiento |
|---|---|---|---|---|---|---|
| Independiente | 39 | 32 (384 al año) | 1 / 1 | — | 2 | 15 GB |
| Agencia | 129 | 107 (1.284 al año) | 5 / 10 | 19 · 16 | 7 | 100 GB |
| Agencia+ | 279 | 232 (2.784 al año) | 15 / 25 | 15 · 12 | 17 | 300 GB |
| Corredora | A convenir | — | desde 26 | desde 14 | a medida | a medida |

- **Agencia es el plan recomendado** y la página lo destaca. No se dice «el
  más popular»: no hay datos que lo sostengan (§7).
- **Claude recomendado:** Pro para Independiente, Max 5x para Agencia, Max
  20x para Agencia+ y Corredora. Es una recomendación, no un requisito; se
  nombra el plan y se enlaza a Anthropic, sin copiar su precio. Nombres
  comprobados en claude.com/pricing el 2026-10-14.

- Anual: 2 meses gratis. Mensual: sin permanencia.
- Correos vinculados: uno por usuario incluido más 2 de la agencia
  (Independiente, 2). Un usuario adicional trae un correo vinculado más y
  no cambia el almacenamiento. No se ofrecen correos ni almacenamiento
  extra sueltos: no están acordados.
- 1 GB ≈ 1.000 documentos (medido el 2026-10-14 en una agencia real).
- El agente no cuenta como usuario.
- **Implementación acompañada**, opcional y de un solo pago: 150
  (Independiente), 500 (Agencia), 1.000 (Agencia+), a convenir
  (Corredora). Sin ella, la agencia se implementa por su cuenta.
- **Reglas de cobro:** al llegar a un límite nunca se bloquea lo que existe;
  solo no se puede sumar otro usuario u otro correo, o seguir subiendo
  archivos, hasta ajustar el plan. Subir de plan se aplica de inmediato y se
  cobra la diferencia; bajar, en la renovación. El mensual se cancela cuando
  se quiera; el anual no se devuelve, salvo en los primeros 14 días. Al
  cancelar, los datos se conservan 30 días (abajo).
- **Uso y plan** (comprobado en `nexus-app` 0.24.0, en `main` y sin
  publicar, el 2026-10-15): Configuración → Agencia → «Uso y plan», para el
  propietario y los administradores (permiso «Ver el plan y su uso»).
  Enseña el plan, la forma de pago, el valor del mes, el próximo corte y el
  uso de usuarios, correos vinculados y almacenamiento. Avisa en ámbar
  desde el 80 % de los correos vinculados o del almacenamiento, y en rojo
  al llegar al límite; de los usuarios, solo si la agencia queda por encima
  de su plan.
- **Exportar los datos:** el propietario, en «Uso y plan». Un Excel con una
  hoja por registro (clientes y pólizas con sus campos, tareas, documentos,
  aseguradoras y ramos) que se descarga durante 7 días. Los archivos no van
  en el Excel.
- **Datos de una agencia cancelada:** la cancelación surte efecto al final
  del periodo pagado; desde ahí se conservan 30 días para exportarlos y
  luego se eliminan. Lo dice el Acuerdo de uso (versión 1), y el dueño lo
  confirmó el 2026-10-21; la política de privacidad dice lo mismo.
  Cambiarlo exige antes una versión nueva del Acuerdo en `nexus-app`.
- **Estados de cuenta:** uno por corte, en PDF, en dólares y en pesos a la
  TRM oficial del día. Se dicen «estado de cuenta», no factura. En la beta
  no se emiten.
- **Soporte** (comprobado en `nexus-app`, commits b58db52 y c23059e, el
  2026-10-15): cambiar, ampliar o cancelar el plan, los extras, la
  implementación acompañada y el plan Corredora se piden a soporte, en el
  correo `SUPPORT_EMAIL` de `lib/site.ts` (provisional, el mismo de la
  app). «Uso y plan», el aviso de límite y el pie del estado de cuenta
  remiten a ese correo. **Nexus no es una persona** (§7).
- **Quién emite el estado de cuenta:** MAIN Modulos Aplicaciones e
  Innovación SAS (NIT 901.510.461-9). Si el sitio dice quién cobra, es esa
  empresa; el documento sigue siendo un estado de cuenta, no una factura
  electrónica.
- **Antes de publicar `/precios`:** que la 0.24.0 esté publicada.
- Hoy no hay pago en línea: la beta sigue cerrada y cada plan empieza con
  una solicitud de acceso.

La IA la paga la agencia en su suscripción de Claude, no a Nexus.
`docs/referencia/2026-07-23-plan-monetizacion.md` es investigación del
modelo anterior; contexto, no lista de precios.

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
| «Prueba gratis», «precio de fundador» | No están decididos (2026-10-14). |
| «Ilimitado», «sin cupos», «gratis para siempre» como promesa | Los planes pueden ajustarse durante la beta (§6). |
| «El plan más popular» | Hay una agencia usando Nexus; se dice «Recomendado». |
| «Habla con Nexus», «escríbele a Nexus», «Nexus te contacta» | Nexus no es una persona (pedido del dueño, 2026-10-15): quien atiende es soporte (§6). |
| Comparaciones de precio con otros productos | La página de precios dice lo que Nexus no cobra, no lo que cobran los demás. |
| Requisitos exactos del plan de Claude | Los define Anthropic y cambian. Se enlaza a su documentación en vez de copiarla. |

## 8. Glosario

| Término | Qué es |
|---|---|
| **Agencia** | La cuenta de una agencia en Nexus: su equipo, sus datos y su agente. |
| **Agente** | El Claude de la agencia, conectado a Nexus como un miembro más. Uno por agencia. |
| **Conector** | La dirección por la que Claude entra a Nexus. Desde el directorio de Claude se autoriza escribiendo en Nexus el «Código de Claude»; con «Añadir a Claude», aprobando la «Solicitud de conexión» (`/agente`). |
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
