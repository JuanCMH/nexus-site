# Precios

> **Estado: implementado** · 2026-10-14, aprobado por el dueño el mismo día. Encargo de la sesión «Nexus App ·
> Implementación», con los precios que el dueño aprobó allí. Cierra la
> decisión abierta «Precios» (`00` §7). Primera revisión del dueño, el mismo
> día: los planes pasan a Independiente, Agencia, Agencia+ y Corredora
> (Corredora es el más grande, a convenir); los precios van en dólares con su
> valor en pesos a la TRM del día, que se actualiza sola; la calculadora no
> llega a Corredora.

## Para quién y para qué

Para quien dirige una agencia o una corredora, ya sabe qué es Nexus y quiere
saber cuánto le costaría. Tiene que salir de la página sabiendo:

1. Qué plan le corresponde y cuánto paga al mes o al año.
2. Que se paga por el tamaño del equipo y no por el trabajo: pólizas,
   clientes, documentos, tareas y flujos no tienen límite.
3. Que el agente usa la suscripción de Claude de su agencia y que esa
   suscripción **se paga aparte**, a Anthropic.
4. Que Nexus está en beta cerrada: hoy no se paga en línea, se empieza con
   una solicitud de acceso.

## Lo que cambia en las directivas (en el mismo cambio)

- `00` §7: sale la fila «Precios». Si el dueño responde lo abierto de este
  documento, también sale la regla de que `/precios` no se construye.
- `02` §6 se reescribe con los planes, los adicionales, la implementación
  acompañada y las reglas de cobro. La fecha de corte pasa a 2026-10-14.
  `02` §7 gana una fila: «Prueba gratis», «precio de fundador»: no están
  decididos.
- `03` §1: lo que viene de fuera ya no es solo la última versión: también
  la TRM del día (§«Los pesos» de este documento). Nueva sección en `03`,
  junto a la de descarga, con la fuente y qué pasa si no responde.
- `03` §3: `/precios` deja de estar marcado como «No se construye».
- `03` §2: `lib/pricing.ts` es la única fuente de los precios.
- `05` §2: las pruebas de `lib/pricing.ts` se suman a la lista.

## Arquitectura

- `app/precios/page.tsx`: componente de servidor, con `metadata` propia
  («Precios · Nexus»). Entra en `app/sitemap.ts`.
- `lib/pricing.ts`: los planes, los adicionales y la función que elige el
  plan. Es lógica pura y lleva sus pruebas en `lib/pricing.test.ts`
  (`05` §2). Las tarjetas, la tabla y la calculadora leen de aquí; ningún
  precio se escribe en el JSX.
- `components/precios/`: las piezas de la página. Lo único cliente es el
  conmutador Mensual / Anual y la calculadora: comparten un estado
  (`billing-context.tsx`), y las tarjetas de precio lo leen para cambiar la
  cifra. El resto es servidor.
- `lib/trm.ts`: lee la TRM en el servidor (§«Los pesos»), con sus pruebas
  en `lib/trm.test.ts` para elegir la TRM vigente.
- `lib/site.ts` gana `TRM_URL` y `CLAUDE_PLANS_URL` (la página de planes de Claude,
  `https://claude.com/pricing`; se comprueba que existe antes de publicar).
  Es un enlace, no un origen: no toca la política de seguridad (`03` §6).
- `nav-links.ts`: «Precios» entra en la cabecera, el menú y el pie, antes
  de «Descargar».
- Sin dependencias nuevas.

## Las cifras (`lib/pricing.ts`)

Todas en dólares. Pagando el año se pagan 10 meses de 12.

| Plan | Mensual | Anual (al mes · al año · ahorro) | Usuarios incluidos / máximo | Usuario adicional (mes · anual) | Correos vinculados | Almacenamiento |
|---|---|---|---|---|---|---|
| Independiente | 39 | 32 · 384 · 84 | 1 / 1 | — | 2 | 15 GB |
| Agencia | 129 | 107 · 1.284 · 264 | 5 / 10 | 19 · 16 | 7 | 100 GB |
| Agencia+ | 279 | 232 · 2.784 · 564 | 15 / 25 | 15 · 12 | 17 | 300 GB |
| Corredora | A convenir | — | desde 26 | — | a medida | a medida |

- Correos vinculados: uno por usuario más 2 de la agencia. Cada usuario
  adicional trae el suyo. Correo extra: 5 al mes, 4 pagando el año.
- 50 GB extra: 5 al mes, 4 pagando el año.
- Documentos: 1 GB ≈ 1.000 documentos (medido el 2026-10-14 en una agencia
  real: un documento pesa en promedio unos 970 KB).
- Formato: «USD 1.284», separador de miles con punto, `tabular-nums`.

**La función que elige el plan.** Recibe usuarios, documentos y forma de
pago. Un plan sirve si los usuarios no pasan de su máximo. Total = base +
(usuarios − incluidos) × adicional + bloques de 50 GB por encima de lo
incluido × precio del bloque. Gana el total más bajo. Corredora no entra
en la calculadora: es a convenir y para equipos de más de 25. Los correos salen de los usuarios (uno por usuario + 2), así que
nunca hay correos extra en la calculadora.

Casos que van en las pruebas: 1 usuario y 10.000 documentos → Independiente,
39. 2 usuarios → Agencia, 129. 10 usuarios → Agencia, 224. 11 usuarios →
Agencia+, 279 (Agencia no admite el 11). 25 usuarios → Agencia+, 429.
1 usuario y 200.000 documentos → Independiente con 4 bloques, 59. En anual,
10 usuarios → 107 + 5 × 16 = 187.

## Los pesos

Los precios son en dólares. Debajo de cada cifra va su valor en pesos, como
referencia, a la TRM del día, y se actualiza solo.

- **Fuente:** la TRM oficial que publica la Superintendencia Financiera en
  datos abiertos (`datos.gov.co`, conjunto `32sa-8pi3`), sin credenciales.
  Comprobado el 2026-10-14: responde `valor`, `vigenciadesde` y
  `vigenciahasta`, y publica la del día siguiente por adelantado.
- **Cómo se lee:** en el servidor, con revalidación cada 6 horas, como
  `latest.yml` (`03` §5). Se pide la más reciente y se toma la que **rige
  hoy** en hora de Colombia (`vigenciadesde ≤ hoy ≤ vigenciahasta`), no la
  de mañana. El navegador no habla con nadie: la política de seguridad no
  cambia.
- **Cómo se enseña:** el valor en pesos redondeado a miles, con «≈»:
  «≈ COP 411.000 al mes». Bajo los planes, auxiliar: «Valores en pesos a la
  TRM del 14/10/2026 (COP 3.181,74). Son una referencia: el precio es en
  dólares».
- **Si no responde:** solo dólares, sin la línea de pesos. Nunca una TRM
  escrita a mano ni una cifra vieja sin su fecha.
- La calculadora recibe la TRM desde el servidor y enseña el total también
  en pesos.

## La página, de arriba abajo

Texto real. Una frase sola va sin punto (`01` §6.2).

### 1. Encabezado

- Antetítulo: «Precios»
- `h1`: «Pagas por el tamaño de tu equipo, no por tu trabajo»
- Entradilla: «Pólizas, clientes, documentos, tareas y flujos no tienen
  límite en ningún plan. Todos los planes traen todas las funciones de
  Nexus.»
- El conmutador, con nombre «Forma de pago»: **Mensual** · **Anual**, y a
  su lado «Pagando el año, 2 meses gratis».
- Auxiliar: «Precios en dólares, con su valor en pesos a la TRM del día.
  El agente trabaja con la suscripción de Claude de tu agencia, que se paga
  aparte a Anthropic.»

### 2. Los planes

Cuatro columnas en `lg`, dos en `md`, una en celular. Cada plan es una
superficie con borde (`rounded-lg border`), sin luz: son datos, no
escenario. Ninguno se destaca como «recomendado»: no hay dato que lo
sostenga.

Cada tarjeta, en este orden: nombre (`h3`), para quién, precio, condiciones,
botón.

| | Independiente | Agencia | Agencia+ | Corredora |
|---|---|---|---|---|
| Para quién | Para quien trabaja solo | Para un equipo de hasta 10 usuarios | Para equipos con áreas, de hasta 25 usuarios | Para más de 25 usuarios |
| Precio, mensual | USD 39 al mes | USD 129 al mes | USD 279 al mes | A convenir |
| En pesos, mensual | ≈ COP 124.000 | ≈ COP 410.000 | ≈ COP 888.000 | — |
| Debajo, mensual | Sin permanencia | Sin permanencia | Sin permanencia | — |
| Precio, anual | USD 32 al mes | USD 107 al mes | USD 232 al mes | A convenir |
| Debajo, anual | USD 384 al año · ahorras USD 84 | USD 1.284 al año · ahorras USD 264 | USD 2.784 al año · ahorras USD 564 | — |
| Usuarios | 1 usuario | 5 usuarios incluidos, hasta 10 | 15 usuarios incluidos, hasta 25 | Los que necesites |
| Usuario adicional | Para sumar otro, pasa a Agencia | USD 19 al mes, con su correo vinculado (16 pagando el año) | USD 15 al mes, con su correo vinculado (12 pagando el año) | — |
| Correos vinculados | 2 | 7 | 17 | A medida |
| Almacenamiento | 15 GB, unos 15.000 documentos | 100 GB, unos 100.000 documentos | 300 GB, unos 300.000 documentos | A medida |
| Botón | Solicitar acceso | Solicitar acceso | Solicitar acceso | Escribir a soporte (correo) |

Los pesos del ejemplo son a la TRM del 14/10/2026 (3.181,74); en la página
salen de la TRM vigente. En anual, los pesos siguen al precio al mes.

En anual, el precio del usuario adicional cambia con el conmutador (19 → 16,
15 → 12) en vez de ir entre paréntesis; la tabla lo pone así solo para
leerla.

Botones: los de las tarjetas son secundarios (`border bg-background`); la
acción principal de la página está en el cierre (§9). Así se cumple «una
principal por pantalla» (`04` §3.1) sin elegir un plan por la persona.

Debajo de las tarjetas, auxiliar:

> En cualquier plan: correo vinculado extra, USD 5 al mes; 50 GB más, unos
> 50.000 documentos, USD 5 al mes. Pagando el año, USD 4 cada uno. El
> agente no cuenta como usuario.

### 3. Todo Nexus, en todos los planes

- `h2`: «Todo Nexus, en todos los planes»
- «Los planes cambian de tamaño, no de funciones. No hay módulos que se
  compren aparte.»
- Lista en dos columnas, con icono de línea (`RiCheckLine`, decorativo):
  - Clientes, pólizas, documentos, tareas y flujos ilimitados
  - El agente, conectado con el Claude de tu agencia
  - Flujos que tu agencia adapta a su forma de trabajar
  - Cotizaciones de cumplimiento con el logo y los datos de tu agencia
  - La bóveda de accesos
  - Roles, permisos y bitácora
  - Importar clientes y pólizas desde Excel
  - Nexus para escritorio, en Windows, y Nexus en la web

Todo está en `02` §3 y §4.

### 4. Calculadora

- `h2`: «Calcula tu plan»
- «Elige cuántos usuarios y cuántos documentos tiene tu agencia. Te
  mostramos el plan que menos cuesta.»
- Dos controles deslizantes con su `label` y su valor visible:
  - «Usuarios»: de 1 a 25. Debajo, auxiliar: «¿Más de 25 usuarios? El
    plan Corredora es a convenir». Corredora no se calcula: su precio se
    conviene con cada corredora.
  - «Documentos»: de 5.000 a 500.000, en pasos de 5.000. Debajo, auxiliar:
    «Unos 1.000 documentos ocupan 1 GB».
- Respeta el conmutador de la página; no tiene uno propio.
- Resultado (región `aria-live="polite"`):
  - «Plan Agencia»
  - «USD 129 al mes» (anual: «USD 107 al mes · USD 1.284 al año»), y
    debajo «≈ COP 410.000 al mes» si hay TRM
  - «USD 25,80 por usuario al mes»
  - Lo que suma, si hay algo: «Incluye 2 usuarios adicionales y 50 GB más».
  - Lo que trae: «7 correos vinculados y 100 GB».
- Sin barras ni comparación con nadie.
- Versión sin JavaScript: no hay; la calculadora se pinta con sus valores
  iniciales (5 usuarios, 20.000 documentos) desde el servidor y la tabla de
  planes ya dice todo lo necesario.

### 5. Implementación

- `h2`: «Empiezas por tu cuenta, o con ayuda»
- «Nexus se implementa por cuenta propia: una plantilla de Excel para
  importar clientes y pólizas y los flujos de Nexus listos para usar. Si
  prefieres que te acompañemos, se contrata aparte y se paga una sola vez.
  Ningún plan lo exige.»
- Tabla (`divide-y`, sin tarjetas):

| Plan | Implementación acompañada | Qué incluye |
|---|---|---|
| Independiente | USD 150 | Una sesión, la importación de clientes y pólizas y la conexión del agente |
| Agencia | USD 500 | Sesión de inicio, importación, plantillas, correos vinculados, conexión del agente, 2 o 3 flujos adaptados y 2 sesiones de formación |
| Agencia+ | USD 1.000 | Lo de Agencia, más la carga de documentos históricos con el agente, los roles armados y formación por áreas |
| Corredora | A convenir | — |

Los precios de implementación también llevan su valor en pesos.

En celular la tabla pasa a filas apiladas (plan y precio arriba, alcance
debajo), sin desplazamiento horizontal.

### 6. Por qué Nexus

- `h2`: «Lo que no vas a encontrar en la factura»
- «Sin cupos, sin módulos aparte y sin permanencia.»
- Cuatro grupos en columnas (dos en `md`, una en celular), con título
  `h3` y su lista, sin tarjetas:

**Sin cupos**
- Pólizas, clientes y documentos ilimitados. No hay cupos de correos, de
  lecturas ni de gigas por usuario.
- El agente no tiene cupo de lecturas en Nexus: trabaja con la suscripción
  de Claude de tu agencia, que se paga aparte a Anthropic. → enlace «Ver
  los planes de Claude» (`CLAUDE_PLANS_URL`).
- El almacenamiento es de la agencia, no de cada usuario: 100 GB en
  Agencia.

**Sin letra pequeña**
- Todas las funciones en todos los planes.
- Mensual sin permanencia, o anual con 2 meses gratis.
- Implementación por tu cuenta, o acompañada a precio fijo.

**Con control**
- El agente propone y una persona confirma. Lo que registra puede llevar
  su cita, su página y su documento.
- Las claves de la bóveda se cifran en el computador de quien las guarda.
  El agente no tiene acceso.
- Roles armados permiso por permiso, y una bitácora de quién hizo qué.

**A la medida de tu agencia**
- Flujos que tu agencia adapta a su forma de trabajar.
- Cotizaciones de cumplimiento con la marca de tu agencia.
- Nexus para escritorio y en la web, con los mismos datos.

Cambios respecto al encargo, para que cada frase esté en `02`:
- Sin «en el mercado es común…»: la página no habla de otros. «No hay cupos
  de correos, de lecturas ni de gigas por usuario» dice lo mismo sin
  afirmar nada de nadie.
- «Cada dato con su cita, página y documento» pasa a «puede llevar»: `02`
  §3.3 dice que la evidencia es opcional y que Nexus no la coteja.

### 7. Preguntas frecuentes

- `h2`: «Preguntas frecuentes»
- Con `<details>` y `<summary>` nativos: sin JavaScript, se operan con
  teclado.

**¿Qué cuenta como usuario?**
Cada persona de tu equipo que entra a Nexus. El agente no cuenta.

**¿Qué es un correo vinculado?**
Una cuenta de correo de tu agencia que el agente puede leer para proponer lo
que encuentre. Cada plan trae uno por usuario, más 2 para la agencia, como
siniestros@ o renovaciones@.

**¿Necesito una suscripción de Claude?**
Sí, para usar el agente. Se paga a Anthropic, no a Nexus. Tu equipo puede
usar Nexus sin agente. → «Ver los planes de Claude».

**¿Qué pasa si llego al límite de mi plan?**
Nunca se bloquea lo que ya tienes. Lo que no puedes es sumar otro usuario u
otro correo vinculado, o seguir subiendo archivos, hasta ajustar el plan.
Te avisamos al llegar al 80 %.

**¿Puedo cambiar de plan?**
Sí. Subir se aplica de inmediato y se cobra la diferencia. Bajar se aplica
en la renovación.

**¿Puedo cancelar?**
El plan mensual, cuando quieras. El pago anual no se devuelve, salvo en los
primeros 14 días.

**¿Qué pasa con mis datos si cancelo?**
Se conservan 90 días y se pueden exportar.

**¿Puedo pagar hoy?**
Todavía no. Nexus está en beta cerrada y no tiene pago en línea. Solicita
acceso y, si hay cupo, te llega un código de activación.

### 8. Cierre

Sección de medianoche con `stage-glow`, como el cierre de la landing:

- `h2`: «Nexus está en beta cerrada»
- «Deja tu correo y el nombre de tu agencia. Revisamos cada solicitud y, si
  hay cupo, te llega un código de activación.» (`03` §8)
- Botón principal sobre medianoche: «Solicitar acceso» → `/solicitar-acceso`.
- Enlace: «Ya tengo una agencia: iniciar sesión» → `APP_URL` (si existe).

## Interfaz

- Conmutador: dos botones en un grupo (`role="radiogroup"` con
  `aria-checked`, o dos `radio` nativos), `rounded-md`, no píldora. El
  seleccionado con el par tonal de zafiro (`04` §3).
- «2 meses gratis» y «ahorras» van en texto normal o zafiro, **no
  esmeralda**: no es un estado de la app (`01` §4).
- Las cifras con `tabular-nums`; «USD» en tamaño menor junto a la cifra.
  El precio cambia sin animación de números (`04` §9: sin texto que se
  escribe solo); a lo sumo un fundido de 150 ms, nada con movimiento
  reducido.
- Una sola entrada orquestada (`rise`) en el encabezado.
- Sin réplica de la app en esta página.
- Verificación: 360, 768 y 1280 px, claro y oscuro, teclado (conmutador,
  deslizadores, preguntas), movimiento reducido (`05` §3).

## Fuera de esta página

- Datos estructurados con `Offer`: cuando se abra el pago, no antes.
- Prueba gratis y precio de fundador: no están decididos y no se anuncian.
- La página no nombra a ningún competidor ni compara precios con nadie.

## Lo que cambió al implementar

- **Correos de Independiente.** La regla «uno por usuario más 2» da 3 con
  un usuario, pero la cifra aprobada es 2. Se respeta la cifra; la
  pregunta frecuente dice «Agencia y Agencia+ traen uno por usuario
  incluido, más 2…; Independiente trae 2». Si debía ser 3, se cambia en
  `lib/pricing.ts`.
- **Cierre.** Va con la luz del escenario, como el cierre de la landing, y
  no en medianoche: así las dos páginas terminan igual.
- **Nombres de plan como `h2`.** El `h1` es el titular; cada tarjeta es
  una sección de la página y lleva `h2`, para no saltar niveles.
- La implementación acompañada también enseña su valor en pesos.

## Segunda revisión del dueño (2026-10-14)

- **Titular:** «Un plan para cada tipo de agencia», con «Desde quien
  trabaja solo hasta la corredora con áreas y decenas de usuarios. Todos
  los planes traen todas las funciones de Nexus; lo que cambia es el
  tamaño.» La página deja de hacer bandera de lo que no se cobra: Nexus
  está en beta y los planes pueden ajustarse. Sale «ilimitados» de la lista
  de lo incluido, y «Lo que no vas a encontrar en la factura» pasa a «Por
  qué Nexus», sin el grupo «Sin cupos».
- **Agencia, recomendado:** etiqueta «Recomendado» (par tonal de zafiro),
  borde zafiro con `stage-edge` y el único botón principal de las
  tarjetas. No «el más popular» (`02` §7).
- **Usuario adicional:** «USD 19 al mes cada uno; suma 1 correo vinculado»
  (Agencia), 15 (Agencia+), «desde USD 14» (Corredora). En anual mantiene
  su descuento (16 y 12). No suma almacenamiento.
- **Claude recomendado** en cada tarjeta y en la calculadora: Pro, Max 5x,
  Max 20x, Max 20x; bajo las tarjetas, qué significa y el enlace a los
  planes de Claude.

## Tercera revisión del dueño (2026-10-14)

- **Sale la calculadora.** No hace falta: las cuatro tarjetas ya dicen lo
  necesario. Se borran `price-calculator.tsx`, `calculator-section.tsx` y
  la función `quote` de `lib/pricing.ts` con sus pruebas. Lo que este
  documento dice de la calculadora (§4 de la página, «La función que elige
  el plan») queda superado.

## Comprobado en la app (2026-10-15)

`nexus-app` 0.24.0 (en `main`, sin publicar) trae «Uso y plan», el aviso
y la exportación (`02` §6). Las preguntas frecuentes se ajustan a lo que
hace: el aviso es desde el 80 % de los correos vinculados o del
almacenamiento, no de los usuarios; los datos de una agencia cancelada se
conservan «al menos 90 días», porque el borrado no está automatizado; y la
exportación es un Excel que descarga el propietario. Quedan los pendientes
1 (contacto) y 4 (la guía); los 2 y 3 se cierran cuando la 0.24.0 se
publique.

## Pendiente

Respondido por el dueño el 2026-10-14. Lo que queda se cierra antes de
publicar, no antes de construir.

1. **Contacto de Corredora.** Cerrado el 2026-10-15: soporte, en
   `SUPPORT_EMAIL` de `lib/site.ts` (provisional, el mismo de la app). El
   botón de Corredora dice «Escribir a soporte», y la implementación, los
   extras y cambiar o cancelar el plan remiten a ese correo. Nada dice
   «Hablar con Nexus»: Nexus no es una persona (`02` §7).
2. **«Te avisamos al llegar al 80 %»** y **el uso del plan**: el dueño está
   construyendo en la app la sección de uso, donde se ve todo eso. La
   pregunta se publica cuando esa sección exista; se comprueba en
   `nexus-app` y se anota en `02`.
3. **«Se pueden exportar».** La exportación de los datos de la agencia
   entra en la app. Mismo caso que el anterior.
4. **La guía.** El manual de usuario se arma después de ajustar la app.
   Hasta entonces, el texto de §5 no la menciona; cuando exista, se enlaza.
5. **Cobro.** Los precios son en dólares; el valor en pesos es una
   referencia a la TRM del día (§«Los pesos»). En qué moneda se cobra se
   decide al abrir el pago.
6. **Nombres de los planes.** Independiente, Agencia, Agencia+ y Corredora
   tienen que ser los mismos en la sección de uso de la app.
