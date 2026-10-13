# 01 · Marca

> El manual de marca de Nexus. La marca es una sola para el sitio y la app.
> Los valores (colores, trazos, fuentes) se copiaron de `nexus-app` el
> 2026-10-11.
>
> **El sitio puede ir por delante.** Una regla visual se puede ajustar aquí
> primero; el dueño la lleva después a la app si aplica. Lo que el sitio
> cambia respecto a la app se anota en §8 para que ese traslado sea posible.

## 1. El nombre

**Nexus.** Se escribe así, con mayúscula inicial, sin apellido: no «Nexus
Seguros», no «Nexus Desktop», no «NEXUS» en un texto corrido. El logotipo sí
va en mayúsculas, porque es un dibujo (§3).

*Nexus* es la palabra latina para **vínculo**: lo que une. Es lo que hace el
producto: une al cliente con sus pólizas, cada póliza con sus documentos y
cada pendiente con quien lo lleva, en un solo registro.

> **Por confirmar con el dueño.** Este relato del nombre es una propuesta
> escrita el 2026-10-11. La generación anterior decía que el nombre venía
> «del escudo de Zeus»; eso es la *égida* (Aegis), no Nexus, y no se repite.
> Mientras no se confirme, el relato no se publica como historia de la marca;
> la etimología sí es un hecho.

Cuando hace falta distinguir superficies, se dice **«Nexus para escritorio»**
y **«Nexus en la web»**. Es el mismo producto con los mismos datos.

## 2. Qué es y qué promete

**Nexus es el sistema de registro de una agencia de seguros**: clientes,
pólizas, documentos y tareas en un solo lugar, operado por el equipo de la
agencia y por su agente de IA.

La promesa: **control, claridad y calma** en un trabajo que hoy vive en
Excel, correos, WhatsApp y PDF dispersos, donde cada renovación depende de
que alguien se acuerde.

Lo que la distingue, en una frase: **Nexus no pone la IA; pone el sistema
que impide que la IA se equivoque.** La agencia conecta su propio Claude, y
Nexus le da el orden, los permisos, la validación y la última palabra a una
persona. El detalle de qué se puede afirmar está en `02-producto.md`.

### 2.1 Personalidad

Serena bajo presión · precisa sin rigidez · institucional pero cercana ·
sobria, no fría · técnica pero legible.

Ni banco anticuado ni startup de juguete: una herramienta para gente que
toma decisiones serias sobre patrimonios, contratos y garantías.

### 2.2 Cómo debe sentirse

1. **Calma funcional**: reduce la ansiedad operativa, nunca la amplifica.
2. **Jerarquía inmediata**: lo crítico se detecta en segundos.
3. **Densidad con orden**: mucha información, mínima fricción.
4. **Precisión semántica**: el color comunica un estado real, no decora.
5. **Minimalismo útil**: menos ornamento, más decisión.
6. **Trazabilidad visible**: siempre se puede responder «¿quién, qué, cuándo, desde dónde?».
7. **Un camino, no ocho**: para cada cosa frecuente hay un flujo.

### 2.3 Qué Nexus nunca es

- Nunca un generador genérico de PDF con un Excel al lado.
- Nunca gradientes morados, partículas, ilustraciones de personajes ni
  imágenes «tecnológicas» de banco de fotos. Los brillos y degradados que
  el sitio usa son los de §4.1, en los colores de la marca.
- Nunca un producto que promete magia. La IA aquí propone y una persona
  confirma; se dice así.
- Nunca un sitio que afirma algo que la app no hace.
- Nunca emojis decorativos.

## 3. El logo

Dos piezas, y solo dos:

| Pieza | Qué es | Componente | Archivo |
|---|---|---|---|
| **Logotipo** | La palabra NEXUS, con su N de trazo curvo. | `NexusWordmark` | `public/brand/nexus-wordmark.svg` |
| **Símbolo** | La N dentro de un cuadro de esquinas redondeadas. | `NexusIcon` | `public/brand/nexus-icon.svg` |

Los componentes están en `components/brand/nexus-logo.tsx`. El icono de la
aplicación (N blanca sobre medianoche) está en `public/brand/` en 256, 512 y
1024 px, para la página de descarga y para Open Graph. El icono de la
pestaña es `app/icon.svg`.

Reglas:

- **No se redibuja.** Los trazos son los de la app; no se cambia la
  proporción, no se inclina, no se le pone contorno, sombra ni degradado.
- **Un color liso.** Medianoche (`text-nexus-midnight`) sobre fondo claro,
  blanco sobre medianoche o sobre fondo oscuro. Nunca zafiro, nunca un color
  de estado. Los componentes heredan el color del texto: se elige con una
  clase.
- **Aire.** Alrededor del logotipo queda libre, como mínimo, el alto de su
  propia N. Nada se le pega.
- **Tamaño mínimo.** El logotipo no baja de 16 px de alto; por debajo se usa
  el símbolo.
- **Se nombra una vez.** Los componentes son decorativos (`aria-hidden`).
  Donde el logo es el único contenido de un enlace, el enlace lleva
  `aria-label="Nexus, inicio"`.
- El logotipo y el símbolo **no van juntos** en la misma línea: se usa uno.

## 4. Color

La marca tiene cinco colores con nombre y una escala de grises neutra. Los
tokens están en `app/globals.css`.

| Nombre | Valor | Clase | Qué es |
|---|---|---|---|
| **Medianoche** | `#0d1f3c` | `nexus-midnight` | El color institucional: el icono, las franjas de marca, el fondo de una sección solemne. |
| **Zafiro** | `#1e5fd8` | `nexus-sapphire` | El acento: el enlace, lo seleccionado, lo que está en curso. El botón principal no es zafiro: es el oscuro de la app (`04` §3.1). |
| **Cyan** | `#0fb8c9` | `nexus-cyan` | Dato técnico, solo lectura. |
| **Esmeralda** | `#10b981` | `nexus-emerald` | Vigente, activo, hecho. |
| **Ámbar** | `#f59e0b` | `nexus-amber` | Por vencer, por revisar, precaución. |

Neutros de apoyo: hielo `#f4f6fb` y pizarra `#eef1f8` (fondos tintados en
claro), grafito `#111827` y acero `#4b5563` (texto sobre ellos).

**La regla de oro: el color comunica estado, no decora.** Si esmeralda o
ámbar aparecen, es porque algo está vigente o por vencer, también en el
sitio, también en una ilustración de una pantalla. Un titular no se pinta de
ámbar porque quede bonito.

La mayor parte de cualquier página son los neutros (los tokens
`background`, `foreground`, `muted`, `border`). La marca se nota por el
medianoche y el zafiro, no por la cantidad de color.

### 4.1 Luz de marca

El sitio puede iluminar el **escenario** (lo que rodea a una pantalla de
Nexus, el fondo de un hero o de un cierre) con brillos, degradados y
rejillas tenues. Tres límites:

- **Solo medianoche, zafiro y cyan.** Nunca morado, nunca un arcoíris.
- **Esmeralda y ámbar no iluminan nada**: siguen significando estado.
- **Nunca sobre el logo** ni dentro de una réplica de la app.

Las utilidades (`stage-glow`, `stage-grid`, `stage-edge`) están en
`app/globals.css`; no se escribe un degradado a mano en un componente.

### 4.2 El oscuro del sitio

En tema oscuro el fondo del sitio es **medianoche llevada casi a negro**
(los neutros tintados hacia el azul de la marca), no el gris neutro de la
app. Dentro de una réplica de la app valen los tokens de la app
(`04-reglas-interfaz.md` §7).

**Como texto, la variante `-text`.** Zafiro, esmeralda, ámbar y cyan están
calibrados para superficies e iconos. Puestos como texto pequeño sobre su
propio tinte no llegan al contraste mínimo: ahí se usa
`text-nexus-amber-text` y sus hermanas (`04-reglas-interfaz.md` §3).

## 5. Tipografía

| Fuente | Dónde | Cómo |
|---|---|---|
| **Outfit** | Todo: titulares, cuerpo, botones, navegación. | Es la fuente global; no hay que pedirla. |
| **JetBrains Mono** | Identificadores: un número de póliza, un NIT, un código, una dirección de conector. | `font-mono` |
| **Cormorant Garamond**, cursiva | **Solo** una declaración de marca: una frase, una vez por página. | `font-[family-name:var(--font-cormorant)] italic` |

Los titulares van en Outfit a peso medio (`font-medium`) con
`tracking-tight`. No hay negritas pesadas ni mayúsculas sostenidas. La
serifa cursiva es la voz de la marca hablando en primera persona («Control,
claridad y calma»); usada dos veces en la misma pantalla deja de serlo.

La escala de tamaños del sitio está en `04-reglas-interfaz.md` §4.

## 6. Voz

Un texto de Nexus dice exactamente qué es o qué va a pasar, con las palabras
de una agencia de seguros en Colombia.

- **Se tutea.** «Conecta tu agente», no «Conecte su agente» ni «Conectá».
- **Claro antes que solemne.** No se busca sonar formal; se busca que no
  haya que adivinar.
- **Concreto antes que grandioso.** «Cada renovación tiene un responsable y
  una fecha» dice más que «revoluciona tu gestión». Sin superlativos, sin
  «potente», «inteligente», «de última generación», «todo en uno».
- **La IA, sin magia.** El agente «lee», «propone», «redacta»; una persona
  «confirma», «envía». Nunca «Nexus hace todo por ti».
- **Frases que se sostienen solas.** Si una frase necesita un asterisco, se
  reescribe.

### 6.1 Vocabulario

Es el mismo de la app: quien lee el sitio y luego abre Nexus encuentra las
mismas palabras.

| Se dice | No se dice |
|---|---|
| agencia | espacio de trabajo, organización, empresa |
| el agente | la IA, el bot, el asistente, Claude (salvo al hablar del producto Claude: «tu suscripción de Claude», «el conector de Claude») |
| Por confirmar · confirmar · descartar | pendiente de revisión, aprobar, rechazar |
| correo vinculado | buzón, cuenta |
| correo por enviar | borrador |
| cotizaciones de cumplimiento | cotizaciones, cotizador (Nexus no cotiza otra cosa) |
| tarea | recordatorio, aviso (Nexus no envía avisos: crea una tarea) |
| equipo (las personas) · computador (la máquina) | equipo para la máquina, ordenador, PC |
| bóveda · clave | gestor de contraseñas, llave |
| vincular / desvincular | conectar un correo, ligar |
| completar | rellenar |
| haz clic | pulsa |
| Configuración | Ajustes |
| descargar · instalar | bajar |
| solo | sólo (sin tilde, siempre) |

### 6.2 Ortotipografía

- **El punto final.** Una frase sola (un titular, la descripción de una
  tarjeta, un botón) no lleva punto. Dos o más frases, todas con punto.
- **Singular y plural concuerdan con la cifra**: «1 póliza», «3 pólizas».
- **Comillas angulares** («así») en el texto; rectas solo en código.
- **Sin mayúsculas de cortesía**: «Descargar para Windows», no «Descargar
  Para Windows».
- Los nombres de pantallas y botones de la app se citan como se ven:
  «Tareas → Reglas», «Por confirmar».

### 6.3 Ejemplos

| En vez de | Se escribe |
|---|---|
| «Automatiza tu agencia con inteligencia artificial» | «Tu agente lee los correos y propone las pólizas. Tú confirmas» |
| «La plataforma todo en uno para aseguradores» | «Clientes, pólizas, documentos y tareas en un solo registro» |
| «Nunca más olvides una renovación» | «Cada póliza por vencer tiene una tarea, un responsable y una fecha» |
| «Seguridad de nivel bancario» | «Las claves de la bóveda se cifran en tu computador. Nexus no puede leerlas» |

## 7. Imagen

- **La imagen de Nexus es Nexus.** Lo que se enseña son pantallas reales de
  la app, capturadas de la versión publicada. Si se reproduce una pantalla en
  código para animarla, es **fiel**: mismos tokens, mismos radios, mismos
  estados y mismos textos que la app (`04-reglas-interfaz.md` §7).
- **Datos de ejemplo creíbles**: nombres colombianos, NIT con su dígito,
  aseguradoras y ramos que existen, valores en pesos. Nunca datos de una
  agencia real, nunca «Lorem ipsum», nunca «John Doe».
- **Sin fotos de banco** de gente sonriendo frente a un portátil, sin
  ilustraciones de personajes, sin iconos 3D.
- Diagramas, cuando hagan falta, de línea fina en los colores de la marca.

## 8. Cambios pendientes de llevar a la app

Lo que el sitio ha cambiado respecto a `nexus-app`. Una línea sale de aquí
cuando la app la adopta o cuando se decide que es solo del sitio.

| Fecha | Cambio en el sitio | En la app hoy | Estado |
|---|---|---|---|
| 2026-10-11 | Tema oscuro tintado de medianoche (`.dark` en `app/globals.css`). | Oscuro en gris neutro. | Por decidir. |
| 2026-10-11 | `nexus-sapphire-text` en oscuro pasa a `#7ea6f2`, para llegar a contraste AA sobre el fondo de medianoche. | `#5082e1`. | Va con la anterior. |
| 2026-10-11 | Luz de marca (§4.1) y superficies translúcidas en el escenario y la cabecera. | Sin brillos ni cristal. | Por decidir; puede ser solo del sitio. |
| 2026-10-11 | Movimiento atado al scroll y secuencias orquestadas (`04` §9). | Transiciones de 150 a 300 ms. | Solo del sitio, salvo que se decida otra cosa. |
