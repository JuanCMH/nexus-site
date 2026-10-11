# 04 · Reglas de Interfaz

> Cómo se ve y se comporta el sitio. Parte del canon visual de la app
> (`nexus-app`, `docs/directives/03-reglas-interfaz.md`) y lo adapta a un
> sitio que se **lee**, no a una herramienta que se **opera**.
>
> Este documento es prescriptivo. Si un caso no está cubierto, se infiere la
> regla más cercana a partir de la retícula de 4px y del canon de
> superficies, y se documenta aquí en el mismo cambio.

## 0. La idea

**El sitio es de la misma familia que la app, con otro ritmo.** Quien ve la
landing y luego abre Nexus debe reconocerlo: los mismos colores, las mismas
esquinas, la misma letra, las mismas palabras. Lo que cambia es la
densidad: la app aprieta porque se trabaja en ella ocho horas; el sitio
respira porque se lee una vez.

Referencias de espíritu: Linear (claridad estructural), Stripe (explicar un
producto técnico con calma). Sobrio, preciso, sin espectáculo.

## 1. Tokens

Viven en `app/globals.css`, en tres niveles:

| Nivel | Qué es | Ejemplos |
|---|---|---|
| **Primitivo** | Valor crudo. | `--color-nexus-sapphire: #1e5fd8`, `--radius` |
| **Semántico** | Rol; permite los dos temas. | `background`, `foreground`, `card`, `muted`, `border`, `primary` |
| **Componente** | La combinación en el JSX. | `rounded-lg border bg-card` |

- **Los componentes consumen el nivel semántico.** Prohibida la escala cruda
  de Tailwind (`bg-blue-600`, `text-gray-500`) y los colores a mano
  (`bg-[#1e5fd8]`).
- Los tokens son los de la app. **No se inventa un color ni un radio para
  el sitio**; si de verdad hace falta uno, se discute como cambio de marca
  (`01`).

## 2. Superficies

### 2.1 Radios

`--radius` es **10px**.

| Clase | Valor | Uso |
|---|---|---|
| `rounded-xl` | 14px | El contenedor de un icono; el marco de una captura de la app. |
| `rounded-lg` | 10px | La superficie por defecto: tarjetas, paneles. |
| `rounded-md` | 8px | Lo interactivo: botones, campos. |
| `rounded-sm` | 6px | Chips y elementos densos dentro de algo ya redondeado. |

**`rounded-2xl`, `rounded-3xl` y `rounded-full` en superficies no se usan.**
Ni tarjetas de 24px de radio ni botones píldora.

### 2.2 Sin cristal, sin sombras grandes

- Una superficie **no se desenfoca ni se tiñe**: `bg-card`, nunca
  `bg-card/80 backdrop-blur`. La cabecera pegajosa es opaca
  (`bg-background`) con su borde inferior.
- **La profundidad se logra con bordes**, no con sombras: `border`, y
  `divide-y divide-border/60` entre filas. Nada de `shadow-lg`/`shadow-xl`.
  Una captura de la app puede llevar una sombra suave para despegarse del
  fondo; es la única excepción.
- **Sin degradados decorativos**, sin mallas de color, sin brillos, sin
  ruido, sin rejillas de puntos de fondo.

### 2.3 Cuándo una caja se gana su sitio

- En tema claro `card` y `background` son el mismo blanco: una tarjeta no
  aporta superficie, aporta un borde. Si lo que quieres es separar, sepáralo
  con aire.
- **Ninguna caja dentro de otra** solo para repetir su borde.
- Una fila de tres ventajas no necesita tres tarjetas.

### 2.4 Secciones de marca

El fondo por defecto es `background`. Para marcar un cambio de tema hay dos
recursos, usados con medida:

- **Medianoche** (`bg-nexus-midnight text-white`): la sección solemne. Una
  por página, dos como mucho. Ahí el texto secundario es `text-white/70`.
- **Hielo** (`bg-nexus-ice`): una franja tintada para alternar.

## 3. Color

**El color comunica estado, no decora** (`01` §4).

- Estructura y texto: los semánticos (`foreground`, `muted-foreground`,
  `border`). Es el 90% de la página.
- **Zafiro** es el acento: enlaces, lo seleccionado, el contenedor de un
  icono. No es color de fondo de secciones.
- **Esmeralda y ámbar solo aparecen con su significado** (vigente; por
  vencer), normalmente dentro de una pantalla de la app. Nunca como
  decoración.
- **Par tonal** para un contenedor tintado: `bg-nexus-sapphire/10
  border-nexus-sapphire/10 text-nexus-sapphire-text`. El icono hereda el
  color de su contenedor; no se pinta suelto.
- **Como texto sobre su tinte, la variante `-text`**:

```tsx
// ❌ no llega a 4.5 de contraste
<span className="bg-nexus-amber/10 text-nexus-amber">Por vencer</span>
// ✅
<span className="bg-nexus-amber/10 text-nexus-amber-text">Por vencer</span>
```

### 3.1 Botones

| Tipo | Clases base | Uso |
|---|---|---|
| **Principal** | `bg-primary text-primary-foreground` | La acción de la página. **Una por pantalla visible.** Es el mismo botón oscuro de la app. |
| **Principal sobre medianoche** | `bg-white text-nexus-midnight` | La misma acción en una sección de marca. |
| **Secundario** | `border bg-background` | La alternativa («Ver el manual»). |
| **Enlace** | `text-nexus-sapphire-text underline-offset-4 hover:underline` | Dentro del texto. |

Todos `rounded-md`, con foco visible (`focus-visible:ring-[3px]
focus-visible:ring-ring/50`). El texto de un botón dice lo que pasa:
«Descargar para Windows», no «Empezar».

## 4. Tipografía

Las fuentes y su papel están en `01` §5. La escala del sitio:

| Rol | Clases |
|---|---|
| Titular de la landing (`h1`) | `text-4xl md:text-6xl font-medium tracking-tight text-balance` |
| Título de página interior (`h1`) | `text-3xl md:text-4xl font-medium tracking-tight` |
| Título de sección (`h2`) | `text-2xl md:text-4xl font-medium tracking-tight text-balance` |
| Título de bloque (`h3`) | `text-lg md:text-xl font-medium tracking-tight` |
| Entradilla | `text-lg md:text-xl leading-relaxed text-muted-foreground` |
| Cuerpo | `text-base leading-relaxed` |
| Auxiliar | `text-sm text-muted-foreground` |
| Antetítulo | `text-sm font-medium text-nexus-sapphire-text` |
| Declaración de marca | `font-[family-name:var(--font-cormorant)] italic` (una por página) |
| Identificador | `font-mono text-sm` |

- **Un texto que se lee no pasa de ~70 caracteres por línea**: `max-w-2xl`
  para párrafos, `max-w-3xl` para un titular.
- **Sin `uppercase`** en titulares, antetítulos ni botones.
- **Sin tamaños a mano** (`text-[15px]`). Sin pesos por encima de
  `font-semibold`.
- Cifras, fechas y versiones llevan `tabular-nums`.
- Ningún título de sección va solo: si merece un encabezado, merece la
  línea que explica qué hay debajo.

## 5. Espaciado y retícula

Retícula estricta de **4px**; solo la escala de Tailwind.

| Concepto | Clases |
|---|---|
| Contenedor de página | `mx-auto w-full max-w-6xl px-6` |
| Separación vertical de una sección | `py-16 md:py-24` |
| Título de sección ↔ contenido | `mt-10 md:mt-12` |
| Entre bloques de una rejilla | `gap-6 md:gap-8` |
| Interior de una tarjeta | `p-6` |
| Título ↔ párrafo | `mt-3` / `mt-4` |
| Icono ↔ texto, botones contiguos | `gap-2` / `gap-3` |
| Cabecera del sitio | `h-14`, opaca, con `border-b` |

Rejillas de 12 columnas implícitas: una, dos o tres columnas según el ancho.
Lo que se alinea, se alinea a la misma columna de arriba abajo.

## 6. Adaptable

A diferencia de la app, **el sitio se ve desde un celular** y debe
funcionar entero ahí.

- Se diseña primero a **360px** y se amplía: `sm`, `md`, `lg`.
- Sin desplazamiento horizontal a ningún ancho. Una captura ancha de la app
  se recorta o se cambia por otra pensada para ese ancho; no se encoge hasta
  ser ilegible.
- Lo que se toca mide al menos **44px** de alto en pantallas táctiles.
- La navegación se pliega en un menú con nombre («Abrir menú»), operable
  con teclado.

## 7. La app dentro del sitio

Cuando el sitio enseña Nexus, lo enseña **como es**.

- **Preferencia: capturas reales** de la versión publicada, en los dos
  temas si el sitio los tiene, a doble densidad, con `alt` que describe lo
  que se ve.
- Si una pantalla se **reproduce en código** (para animarla o para que se
  adapte al ancho), es fiel al canon de la app:
  - mismas superficies (marco `sidebar` < panel `background` < bloque `card`);
  - mismos radios, bordes y tipografía, a su tamaño real (`text-sm`);
  - mismos estados con su color e icono: vigente esmeralda, por vencer
    ámbar, vencida rojo, «Por confirmar» como lo pinta la app;
  - mismos textos de botones y columnas (`01` §6.1).
- Una reproducción **no enseña nada que la app no tenga**: ni una columna,
  ni un botón, ni una gráfica inventada.
- Los datos de ejemplo siguen `01` §7.

## 8. Iconos

Solo **`@remixicon/react`**, variante de línea (`Ri…Line`). El tipo de una
prop que recibe un icono es `React.ComponentType<{ className?: string }>`.

- Tamaños: `size-4` junto a texto, `size-5` en un contenedor, `size-6` como
  mucho.
- Un icono que acompaña a un texto es decorativo (`aria-hidden`). Un botón
  de solo icono lleva `aria-label`.
- Para las entidades de Nexus se usan los mismos iconos que la app; se
  consultan en `nexus-app`, `docs/directives/03-reglas-interfaz.md` §5.
- Sin emojis.

## 9. Movimiento

- **El movimiento explica, no adorna.** Vale para mostrar cómo una
  propuesta del agente pasa a confirmada; no para que las cosas entren
  flotando.
- Transiciones de **150 a 300 ms**, con curva de salida suave. Nada que
  rebote.
- Se anima `opacity` y `transform`; nunca el tamaño o la posición por
  propiedades de maquetación.
- **`prefers-reduced-motion` se respeta siempre**: con movimiento reducido
  todo el contenido es visible y estático desde el principio.
- Prohibido: paralaje, partículas, cursores personalizados, texto que se
  escribe solo, secuestrar el desplazamiento, videos de fondo con
  reproducción automática.
- No hay librería de animación instalada. Lo que se resuelve con CSS se
  resuelve con CSS; si una página necesita más, se decide en su diseño
  (`00` §4 y §7).

## 10. Accesibilidad

No es una fase: es condición de entrega.

- **Contraste AA**: 4.5 para texto, 3 para iconos y bordes de control. Se
  mide en pantalla, no a ojo.
- **Foco siempre visible** y en orden lógico. Todo se opera con teclado.
- **Un `h1` por página** y encabezados sin saltos de nivel. Regiones
  `header`, `nav`, `main`, `footer`. Un enlace «Saltar al contenido» al
  principio.
- Toda imagen con `alt`: descriptivo si informa, vacío si decora.
- Un control siempre tiene nombre: el `placeholder` no lo es.
- Nada cuyo significado esté **solo** en el color o **solo** en un tooltip.
- El idioma de la página está declarado (`lang="es"`).

## 11. Tema

Los tokens de claro y oscuro están los dos en `app/globals.css`; el oscuro
se activa con la clase `.dark`. **El sitio se publica en claro** mientras no
se decida otra cosa (`00` §7). Aun así, ningún componente fija un color que
rompa el oscuro: se usan los semánticos.

## 12. Rendimiento

- Las páginas son estáticas; el JavaScript del cliente es la excepción.
- Imágenes con `next/image`, con dimensiones declaradas (sin saltos de
  maquetación) y carga diferida bajo el primer pantallazo.
- Solo se cargan los pesos de fuente que se usan.
- Objetivo: LCP < 2,5 s y CLS < 0,1 en un celular de gama media.

## 13. Anti-patrones

Lo que nunca debe salir publicado:

- Cristal, degradados morados, mallas de color, brillos.
- Tarjetas de esquinas muy redondas o botones píldora.
- Un color de estado usado como adorno.
- Tres tarjetas con icono, título y dos líneas como única idea de una
  sección.
- Titulares en mayúsculas o en negrita pesada.
- Una pantalla de «la app» que no es la app.
- Fotos de banco, ilustraciones de personajes, emojis.
- Texto de relleno, cifras inventadas, logos de clientes que no existen.
- Un botón «Empezar gratis» que no lleva a algo que exista.
- Animaciones que retrasan la lectura.
- Un origen externo añadido sin pasar por `03` §6.

## 14. Checklist de pre-entrega (UI)

```
□ ¿Solo tokens semánticos y de marca? (sin escala cruda ni colores a mano)
□ ¿Radios de la tabla de §2.1? ¿Sin cristal ni sombras grandes?
□ ¿Cada color de estado significa lo que significa?
□ ¿Escala tipográfica de §4, sin tamaños a mano ni mayúsculas?
□ ¿Una sola acción principal por pantalla?
□ ¿Se ve bien a 360, 768 y 1280 px, sin desplazamiento horizontal?
□ ¿Contraste medido, foco visible, teclado, un solo h1, alt en imágenes?
□ ¿Con movimiento reducido se ve todo?
□ ¿Lo que se enseña de la app es fiel a la app?
□ ¿Los textos cumplen 01 §6 y cada afirmación está en 02?
```
