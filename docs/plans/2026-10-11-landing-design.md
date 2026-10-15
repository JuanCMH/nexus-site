# Landing

> **Estado: implementado** · tercera versión, 2026-10-12. La primera
> (2026-10-11) explicaba cómo está hecho Nexus; la segunda empezó por lo
> que le resuelve a la agencia; esta, además, enseña todo lo que Nexus
> tiene, al corte de `nexus-app` 0.22.0. Los textos están en el código y
> **pendientes de la revisión del dueño**.

## Para quién y para qué

Quien dirige una agencia o corretaje de seguros pequeño en Colombia y lleva
su cartera en Excel y correo. Al terminar de leer debe entender tres cosas:
qué deja de hacer a mano (renovaciones, digitación, Excel), que el agente
propone y una persona confirma, y cómo se empieza.

Acción principal: **«Solicitar acceso»** → `/solicitar-acceso`.
Secundaria: «Iniciar sesión» → `APP_URL`, solo si tiene valor.

## Por qué cambió (2026-10-12)

Se revisaron las landings de Softseguros, Cider, Agentemotor y Figuro
(Colombia) y de HawkSoft, AgencyZoom, Gaya y Sonant (fuera). Todas abren
con un dolor o un resultado y dejan permisos, auditoría y seguridad para un
bloque breve al final; ninguna explica de quién es la IA. La primera
versión hacía lo contrario: tres de seis secciones eran barandas y
mecanismo, y «renovación» y «Excel» no aparecían. Cuatro cambios:

1. El hero habla de la renovación, no de la categoría.
2. El menú de la app («Lo que hay en Nexus») pasa a ser «qué resuelve».
3. «El agente» y «Control y rastro» se funden en un bloque de confianza.
4. El cierre dice cómo se empieza, en pasos.

Lo que la competencia promete y Nexus no (avisos por WhatsApp, descargas
de portales, comisiones, cartera, cifras, prueba social) sigue sin
afirmarse (`02` §7).

## La idea

Una sola pieza memorable: **una pantalla de Nexus que avanza con el
scroll** y enseña una póliza entrando al registro sin que nadie la digite.
Todo lo demás es tipografía y listas con líneas finas.

## Qué cambió en la tercera versión

El dueño vio la segunda y señaló que Nexus parecía menos de lo que es: no
aparecían la bóveda, los flujos ni los módulos de configuración, y la
dirección del producto es que **toda la agencia esté en un solo lugar**.

1. El hero dice eso, y la entradilla lo aterriza con la lista de lo que hay.
2. Sección nueva con las catorce entradas del menú, en tres grupos.
3. Sección nueva que da espacio propio a Flujos y a la bóveda.
4. «Iniciar sesión» visible siempre (cabecera, hero y cierre), hacia la
   versión web, que ya está publicada.
5. `02-producto.md` pasó al corte 0.22.0: Flujos, versión web, importar
   desde Excel, evidencia por dato y cambios por revisar.

«Toda tu agencia» no se extiende a lo que no existe: comisiones, cartera y
cobranza, siniestros, WhatsApp ni conexión con aseguradoras (`02` §7).

**Después de verla (2026-10-12)**, el dueño quitó la sección de confianza
(«Control, claridad y calma», en medianoche): con el resto basta. Que el
agente propone y una persona confirma lo cuentan el hero y la escena. Lo
que ya no dice la página: que la IA se paga en la suscripción de Claude y
no a Nexus, que Nexus se usa sin agente, y la evidencia por dato. La página
queda sin declaración de marca.

## Secciones y textos

Cada frase sale de `02-producto.md`. Los textos completos están en el
componente de cada sección; aquí va lo que define a cada una.

### 1. Hero · `components/home/hero-section.tsx`

- Nota: «En beta cerrada, para Windows y en la web» (§4, §5)
- `h1`: «Toda tu agencia de seguros en un solo lugar» (§1)
- Entradilla: «Clientes, pólizas, renovaciones, tareas, documentos,
  cotizaciones de cumplimiento y las claves de tus portales. Tu equipo y tu
  agente trabajan sobre el mismo registro, y cada póliza por vencer tiene
  una tarea, un responsable y una fecha.» (§1, §3)
- Botones: «Solicitar acceso» · «Ver cómo trabaja»
- Línea: «¿Tu agencia ya está en Nexus? Inicia sesión» → `APP_URL`

### 1b. Beneficios · `components/home/benefits-section.tsx`

Añadida el 2026-10-14: «Lo que gana tu agencia», seis beneficios con la
función que los sostiene. Diseño y textos en
`2026-10-14-landing-beneficios-design.md`.

### 2. La escena · `components/home/work-scene.tsx`

Sin cambios respecto a la segunda versión: «Una póliza llega por correo y
nadie la digita», cuatro pasos, con la réplica del listado de Pólizas y de
la bitácora (`components/app-replica/`, copiada de `nexus-app` 0.19.0).
Fija con el scroll en pantallas anchas y altas; apilada en el resto.

### 3. Qué resuelve · `components/home/solves-section.tsx`

- `h2`: «Lo que deja de depender de la memoria y del Excel»
- Seis filas «Hoy» / «Con Nexus»: la renovación que depende de la memoria,
  la póliza que se digita, la cartera en Excel (con la importación), saber
  qué vence, las claves que circulan por chat (la bóveda) y los correos uno
  por uno. La columna «Hoy» describe al público de `02` §5; no son citas.

### 4. Qué incluye · `components/home/modules-section.tsx`

- `h2`: «La cartera, el trabajo y la agencia por dentro» — «Nexus no es
  solo un listado de pólizas. Es el menú completo de la app, con los
  nombres que vas a ver al abrirla.»
- Las catorce entradas del menú, con el icono de la app, en tres grupos:
  - **La cartera**: Clientes, Pólizas, Cumplimiento, Documentos.
  - **El trabajo de cada día**: Inicio, Tareas, Flujos, Agente.
  - **La agencia por dentro**: Accesos, Equipo, Plantillas, Catálogos,
    Bitácora, Agencia.

### 5. Flujos y bóveda · `components/home/flows-vault-section.tsx` (hielo)

- `h2`: «Cómo se hace cada trabajo y con qué clave se entra a cada portal»
- **Flujos** — «Cómo trabaja tu agencia, por escrito»: los de Nexus y la
  copia de la agencia, borrador que publica una persona, versiones,
  ejecuciones y acceso, comparación con el de Nexus, criterios.
- **Accesos** — «Las claves de tus portales, en una bóveda»: cifrado en el
  computador, solo en un computador o navegador aprobado, cada uso en la
  bitácora, portapapeles que se borra a los 30 segundos, sin acceso del
  agente.

No lleva réplica de pantalla: `04` §7 exige que sea fiel a la app y esas
dos pantallas no se han copiado. Queda como mejora (ver «Pendiente»).

### 6. Cómo se empieza · `components/home/closing-section.tsx`

- Cuatro pasos: solicitas acceso, recibes un código de activación, creas
  tu agencia (Windows o navegador), traes tu cartera (Excel y catálogo de
  Colombia).
- Botón «Solicitar acceso», botón secundario «Descargar para Windows» con
  la última versión (`2026-10-13-descargar-design.md`) y la línea «Inicia
  sesión».

### Navegación · `components/site/nav-links.ts`

«Cómo trabaja» · «Qué resuelve» · «Qué incluye» · «Empezar» ·
«Descargar» (a `/descargar`). Con cinco enlaces e «Iniciar sesión», la cabecera completa aparece desde
`lg`; por debajo, el menú desplegable.

## `/solicitar-acceso`

- `h1`: «Solicita acceso a la beta»
- «Nexus está en beta cerrada: crear una agencia exige un código de
  activación. Déjanos tu correo y el nombre de tu agencia.»
- Lo que sigue: «Revisamos tu solicitud» · «Si hay cupo, te enviamos un
  código de activación de un solo uso» · «Instalas Nexus en Windows y creas
  tu agencia con ese código»
- Formulario: Correo, Nombre de la agencia, «Solicitar acceso».
- Confirmación: «Recibimos tu solicitud» — «La revisamos y, si hay cupo en
  la beta, te escribimos a … con un código de activación.»

## Pendiente

- Revisión de los textos por el dueño.
- Réplicas de las pantallas de Flujos y de Accesos, y actualizar la del
  listado de Pólizas (su menú lateral es el de la 0.19.0, sin «Flujos»).
- Confirmar que una agencia se puede crear desde la versión web; el cierre
  solo dice que Nexus «también se usa desde el navegador».
- El `h1` supone que la plantilla de pólizas trae el aviso de fin de
  vigencia que crea la tarea de renovación: confirmarlo con el dueño.
- El endpoint de `nexus-app` y `NEXT_PUBLIC_API_URL`: sin ellos el
  formulario avisa «Las solicitudes aún no están abiertas».
- `/privacidad` y la casilla de autorización de datos, antes de publicar.
- Imagen de Open Graph y datos estructurados (fase 8 del plan).
