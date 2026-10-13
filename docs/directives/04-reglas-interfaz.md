# 04 · Reglas de Interfaz

> Cómo se ve y se comporta el sitio. Parte del canon visual de la app
> (`nexus-app`, `docs/directives/03-reglas-interfaz.md`) y lo adapta a un
> sitio que se **lee**, no a una herramienta que se **opera**.
>
> Este documento es prescriptivo. Si un caso no está cubierto, se infiere la
> regla más cercana a partir de la retícula de 4px y del canon de
> superficies, y se documenta aquí en el mismo cambio.

## 0. La idea

**El sitio es de la misma familia que la app, con otro ritmo y con otra
ambición.** Quien ve la landing y luego abre Nexus debe reconocerlo: los
mismos colores, la misma letra, las mismas palabras. Lo que cambia es que la
app se opera ocho horas y el sitio se mira una vez: tiene que sentirse como
el lanzamiento de un producto serio.

Dos planos, y no se mezclan:

- **El escenario** es del sitio: el fondo, la luz, la tipografía a gran
  escala, el movimiento. Aquí el sitio tiene libertad (§2.2, §9).
- **La pantalla** es de la app: lo que se enseña de Nexus es Nexus, tal
  cual (§7).

Referencias: Linear (producto reproducido en código, oscuro, luz medida),
Stripe y Vercel (explicar algo técnico con rigor), las páginas de producto
de Apple (una escena que avanza con el scroll). El sitio puede ir por
delante de la app en lo visual; lo que cambie se anota en `01` §8.

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
- Los tokens parten de los de la app. Uno nuevo o distinto para el sitio
  es un cambio de marca: se decide con el dueño y se anota en `01` §8 para
  llevarlo después a la app.
- **Dentro de `.app-replica` valen los tokens de la app**, sin los ajustes
  del sitio (§7).

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

### 2.2 El escenario

Lo que rodea a una pantalla de Nexus, y el fondo de un hero o de un cierre,
puede llevar luz:

| Utilidad | Qué hace | Dónde |
|---|---|---|
| `stage-glow` | Brillo de zafiro y cyan que cae desde arriba. | Fondo de hero, cierre, sección de medianoche. |
| `stage-grid` | Rejilla tenue que se desvanece. | Fondo de hero y cierre. |
| `stage-edge` | Borde luminoso y halo de zafiro. | El marco de una réplica y las tarjetas del escenario. |

- **Superficies translúcidas** (`bg-card/80 backdrop-blur-xl`) se permiten
  en la cabecera y en las tarjetas del escenario. Nunca en una réplica.
- La luz es de la marca (`01` §4.1): medianoche, zafiro y cyan. Nada
  morado; esmeralda y ámbar no iluminan.
- Un degradado no se escribe a mano en un componente: se usa una utilidad
  de la tabla o se añade una, aquí y en `app/globals.css`.
- Fuera del escenario, la profundidad sigue siendo de bordes: `border`, y
  `divide-y divide-border/60` entre filas. Nada de `shadow-lg` en una
  tarjeta de contenido.

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
| **Principal** | `bg-primary text-primary-foreground` | La acción de la página. **Una por pantalla visible**, sin contar la de la cabecera, que repite la misma. Es el mismo botón de la app. |
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
| Titular de la landing (`h1`) | `text-5xl md:text-7xl font-medium tracking-tight text-balance` |
| Título de página interior (`h1`) | `text-3xl md:text-4xl font-medium tracking-tight` |
| Título de sección (`h2`) | `text-2xl md:text-4xl font-medium tracking-tight text-balance` |
| Título de bloque (`h3`) | `text-lg md:text-xl font-medium tracking-tight` |
| Entradilla | `text-lg md:text-xl leading-relaxed text-muted-foreground` |
| Cuerpo | `text-base leading-relaxed` |
| Auxiliar | `text-sm text-muted-foreground` |
| Antetítulo | `text-sm font-medium text-nexus-sapphire-text` |
| Declaración de marca | `font-[family-name:var(--font-cormorant)] italic`, hasta `text-4xl md:text-6xl` (una por página) |
| Identificador | `font-mono text-sm` |

- **Un texto que se lee no pasa de ~70 caracteres por línea**: `max-w-2xl`
  para párrafos, `max-w-3xl` para un titular.
- **Sin `uppercase`** en titulares, antetítulos ni botones.
- **Sin tamaños a mano** (`text-[15px]`). Sin pesos por encima de
  `font-semibold`. `text-ui` (13px) existe solo para las réplicas: es el
  tamaño de interfaz de la app.
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
| Cabecera del sitio | `h-14`, translúcida (`bg-background/75 backdrop-blur-xl`), con `border-b` |

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
- Una réplica vive en `components/app-replica/`, lleva la clase
  `.app-replica` (que le devuelve los tokens de la app, también en oscuro)
  y anota en su comentario la versión de `nexus-app` y los archivos de los
  que se copió. Lo que recorta por ancho, lo dice ahí.
- Una réplica es una imagen: va con `aria-hidden` y el texto de la página
  cuenta lo mismo que ella enseña.
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

- **El movimiento cuenta algo.** Vale para mostrar cómo una propuesta del
  agente pasa a confirmada; no para que cada sección entre flotando.
- **Una escena puede quedar fija y avanzar con el scroll** (variante
  `stage:` de `app/globals.css`): solo en pantallas anchas y altas, sobre
  el scroll **nativo** del navegador. Toda escena tiene su versión apilada,
  que es la que se ve en celular, en pantallas bajas y con movimiento
  reducido; se diseñan a la vez.
- **Una entrada orquestada por página**, al cargar (`rise`). No se repite
  en cada sección.
- Transiciones de interfaz de 150 a 300 ms; una secuencia orquestada puede
  llegar a 700 ms, con curva de salida suave. Nada que rebote.
- Se anima `opacity` y `transform`; nunca el tamaño o la posición por
  propiedades de maquetación.
- **`prefers-reduced-motion` se respeta siempre**: con movimiento reducido
  todo el contenido es visible y estático desde el principio.
- Prohibido: sustituir o suavizar el scroll del navegador, partículas,
  cursores personalizados, texto que se escribe solo, videos de fondo con
  reproducción automática.
- La librería es `motion` (`00` §4). Lo que se resuelve con CSS se resuelve
  con CSS.

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

El sitio tiene **claro y oscuro**: sigue al sistema y deja elegir con el
conmutador de la cabecera (`next-themes`, clase `.dark` en `<html>`).

- El oscuro del sitio es medianoche llevada casi a negro (`01` §4.2).
- Todo se diseña y se verifica en los dos temas. Ningún componente fija un
  color que rompa uno de ellos: se usan los semánticos.
- Lo que cambia con el tema se resuelve con CSS (`dark:`), no esperando a
  que el navegador hidrate.

## 12. Rendimiento

- Las páginas son estáticas; el JavaScript del cliente es la excepción.
- Imágenes con `next/image`, con dimensiones declaradas (sin saltos de
  maquetación) y carga diferida bajo el primer pantallazo.
- Solo se cargan los pesos de fuente que se usan.
- Objetivo: LCP < 2,5 s y CLS < 0,1 en un celular de gama media.

## 13. Anti-patrones

Lo que nunca debe salir publicado:

- Degradados morados, arcoíris, partículas.
- Luz o cristal **dentro** de una réplica de la app.
- Tarjetas de esquinas muy redondas o botones píldora.
- Un color de estado usado como adorno o como brillo.
- Tres tarjetas con icono, título y dos líneas como única idea de una
  sección.
- Una entrada animada en cada sección.
- Titulares en mayúsculas o en negrita pesada.
- Una pantalla de «la app» que no es la app.
- Fotos de banco, ilustraciones de personajes, emojis.
- Texto de relleno, cifras inventadas, logos de clientes que no existen.
- Un botón que no lleva a algo que exista.
- Una escena fija sin versión apilada.
- Un origen externo añadido sin pasar por `03` §6.

## 14. Checklist de pre-entrega (UI)

```
□ ¿Solo tokens semánticos y de marca? (sin escala cruda ni colores a mano)
□ ¿Radios de la tabla de §2.1? ¿La luz y el cristal solo en el escenario?
□ ¿Cada color de estado significa lo que significa?
□ ¿Escala tipográfica de §4, sin tamaños a mano ni mayúsculas?
□ ¿Una sola acción principal por pantalla?
□ ¿Se ve bien a 360, 768 y 1280 px, en claro y en oscuro, sin
  desplazamiento horizontal?
□ ¿Contraste medido, foco visible, teclado, un solo h1, alt en imágenes?
□ ¿Con movimiento reducido se ve todo? ¿Cada escena tiene su versión apilada?
□ ¿Lo que se enseña de la app es fiel a la app?
□ ¿Los textos cumplen 01 §6 y cada afirmación está en 02?
```
