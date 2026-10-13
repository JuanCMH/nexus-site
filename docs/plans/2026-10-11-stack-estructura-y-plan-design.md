# Stack, estructura y plan de implementación

> **Estado: aprobado** · 2026-10-11 · fases 0 a 3 implementadas el mismo
> día, y de la fase 4 la parte del sitio (falta el endpoint en `nexus-app`
> y los textos legales).
>
> Sale de la sesión de definición con el dueño. Fija con qué se construye
> `nexus-site`, cómo se organiza y en qué orden. No es el diseño de la
> landing: ese va en su propio documento (fase 3), con los textos reales.

## 1. Decisiones cerradas en la sesión

| Decisión | Resultado |
|---|---|
| Dominio | `n3xus.cloud`; la app, en `app.n3xus.cloud`. |
| Llamados a la acción | Dos: **«Solicitar acceso»** (principal) e **«Iniciar sesión»** (lleva a la app web; solo se enseña si `APP_URL` tiene valor). |
| Solicitud de acceso | Formulario mínimo: correo y nombre de la agencia. Lo recibe el Convex de `nexus-app`. |
| Precios | No se construye `/precios`. |
| Tema | Claro y oscuro. |
| Framework | Next.js 16, lo ya instalado. |
| Ambición visual | «Estética Linear completa»: se abren `01` y `04` (§4 de este documento). |
| Dependencias | No son regla previa: cada una entra cuando una fase demuestra que hace falta (§3). |

## 2. Lo que sigue abierto

| Decisión | Qué bloquea |
|---|---|
| Qué otros datos pide el formulario | Nada: se publica con dos campos y se amplía después. |
| Texto de `/privacidad` y `/terminos` | Publicar el formulario (fase 4): recoger correos exige la autorización de tratamiento de datos. Lo aprueba el dueño. |
| Relato del nombre (`01` §1) | Solo una sección «Sobre Nexus», que no está en el plan. |
| GSAP como segunda librería de animación | Se decide con el prototipo (fase 2). |
| Formato del manual (TSX o MDX) | Fase 7. |

## 3. Stack

Lo que ya está y se queda: Next.js 16 (App Router), React 19, Tailwind 4,
`@remixicon/react`, `@fontsource` (Outfit, JetBrains Mono, Cormorant
Garamond), TypeScript estricto, Biome, Bun, Vercel.

**Por qué Next y no Astro.** `nexus-app` es React 19 + Tailwind 4 + shadcn
+ `motion`. Lo distintivo de la landing son pantallas de Nexus reproducidas
en código y animadas, que son React de todas formas: la ventaja de Astro
(cero JavaScript) desaparece justo en la página que más importa. Next
conserva además lo ya montado (cabeceras, sitemap, fuentes, gate) y
revalida sola la versión del instalador.

Lo que entra, y cuándo:

| Dependencia | Para qué | Fase | Nota |
|---|---|---|---|
| `next-themes` | Tema claro/oscuro: sigue al sistema, conmutador, sin parpadeo. | 1 | La misma de la app. |
| `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge` | Primitivos copiados de shadcn, **solo los que se usen**: botón, campo, etiqueta, panel del menú móvil. | 1 | Los mismos de la app; se copian de `nexus-app` para que sean idénticos. |
| `motion` | Coreografía de la landing: escenas atadas al scroll y transiciones de layout. | 2 | La misma de la app. Única librería de animación salvo que el prototipo demuestre lo contrario. |

Lo que se evaluó y **no** entra:

| Descartado | Motivo |
|---|---|
| GSAP | Hoy es gratis y es mejor en líneas de tiempo largas, pero sería una segunda librería. Entra solo si el prototipo no sale con `motion`. |
| Lenis u otro scroll suave | Sustituye el scroll del navegador: rompe accesibilidad y la sensación nativa. |
| three.js / WebGL | Peso y riesgo en celulares sin relación con el producto. |
| Librería de formularios | Son dos campos: formulario nativo y validación en el servidor. |
| Captcha de terceros | Abre la política de seguridad. Se usa campo trampa y límite de frecuencia en el backend. |
| Cliente de Convex | El sitio hace un `fetch` a un endpoint; no necesita el cliente. |
| Analítica | Sigue fuera; si se quiere, es una decisión aparte (`03` §6). |

Las animaciones de scroll en CSS (`animation-timeline`) se usan solo como
mejora progresiva: Firefox estable aún no las activa por defecto.

Antes de escribir código de Next en cada fase se lee la guía
correspondiente en `node_modules/next/dist/docs/` (`AGENTS.md`).

## 4. Cambios a las directivas (fase 0)

Las directivas actuales describen un sitio «sobrio, sin espectáculo». Se
reescriben en un solo cambio, antes de cualquier código.

**Quién manda sobre la marca.** Hasta hoy `01` y `04` copiaban a la app y
prohibían inventar un color o un radio para el sitio. Eso se invierte: **las
reglas visuales se pueden ajustar aquí primero**, y el dueño lleva después a
`nexus-app` las que apliquen. Para que ese traslado sea posible, `01` gana
una sección «Cambios pendientes de llevar a la app»: cada regla que el
sitio cambie respecto a la app (un token, un radio, una superficie, un
movimiento) se anota ahí con su fecha, y sale de la lista cuando la app la
adopta o cuando se decide que es solo del sitio.

Lo que esto **no** abre: una réplica de una pantalla sigue mostrando la app
publicada, no la app que vendrá.

**Lo que se abre**

- **Tema oscuro protagonista.** El sitio sigue al sistema y tiene
  conmutador; el hero y la pieza central se diseñan primero en oscuro.
- **Escenario.** Alrededor de una pantalla de la app se permiten brillos
  sutiles, degradados, bordes luminosos, ruido fino y rejillas tenues,
  siempre en la familia de la marca (medianoche, zafiro, cyan).
- **Superficies translúcidas** en piezas del sitio: cabecera, tarjetas del
  escenario.
- **Coreografía.** Secciones fijadas que avanzan con el scroll nativo,
  secuencias orquestadas más largas que 300 ms, tipografía a gran escala.

**Lo que no cambia**

- **El escenario es del sitio; la pantalla es de la app.** Una reproducción
  de Nexus sigue siendo fiel: sin cristal ni brillos por dentro, porque la
  app no los tiene.
- Esmeralda y ámbar significan estado; no decoran, tampoco como brillo.
- Nada morado, sin partículas, sin cursor propio, sin video de fondo con
  reproducción automática, sin sustituir el scroll del navegador.
- Radios de la tabla de `04` §2.1 y sin botones píldora, **de momento**: si
  el diseño de la landing pide otra cosa, se cambia la regla y se anota
  para la app.
- `prefers-reduced-motion`: todo visible y estático desde el principio.
- Contraste AA en los dos temas, teclado, un `h1`, 360 px primero.
- LCP < 2,5 s y CLS < 0,1 en un celular de gama media.
- Toda afirmación sale de `02`; nada de prueba social inventada.

**Documento por documento**

| Documento | Cambio |
|---|---|
| `00` | §3.1 con el dominio real; §4 con las dependencias de §3; §7 sin las decisiones cerradas y con las de §2. |
| `01` | Cabecera: el sitio puede ir por delante de la app. §2.3 y §4: los brillos y degradados de marca permitidos y su límite. Sección nueva: «Cambios pendientes de llevar a la app». |
| `02` | §4: `n3xus.cloud` y la dirección de la app cuando se cierre. |
| `03` | §1: el sitio envía solicitudes de acceso al backend de `nexus-app`; §3: mapa de páginas de §5; §6: el origen del API en `connect-src`; §7: `NEXT_PUBLIC_API_URL`. |
| `04` | §0, §2.2, §9, §11 y §13 según lo de arriba. |
| `CLAUDE.md` | El resumen operativo, al día. |

## 5. Estructura

### 5.1 Páginas

| Ruta | Para qué | Fase |
|---|---|---|
| `/` | La landing. | 3 |
| `/solicitar-acceso` | El formulario y su confirmación. La landing enlaza aquí desde cada llamado a la acción. | 4 |
| `/privacidad`, `/terminos` | Legal. | 4 |
| `/descargar` | El instalador de Windows, para quien ya tiene código. | 5 |
| `/agente` | Cómo se conecta Claude y qué hace. | 6 |
| `/seguridad` | Bóveda, permisos y bitácora, con el mecanismo real. | 6 |
| `/manual/…` | El manual para personas. | 7 |

«Iniciar sesión» no es una página: es un enlace a `APP_URL` en la cabecera.

### 5.2 Carpetas

```
app/                         rutas, metadatos, robots, sitemap
components/
  brand/                     el logo
  ui/                        primitivos copiados de shadcn (fase 1)
  site/                      cabecera, pie, sección, conmutador de tema
  app-replica/               pantallas de Nexus reproducidas con fidelidad
  home/                      las secciones de la landing
  <página>/                  las piezas de cada página
lib/
  site.ts                    direcciones: SITE_URL, APP_URL, API_URL, RELEASES_REPO
  utils.ts                   `cn` (clsx + tailwind-merge)
content/                     el manual (fase 7)
docs/plans/                  un documento de diseño por página
```

`components/app-replica/` es nueva: lo que reproduce la app vive separado
del escenario del sitio, para que la regla de fidelidad se pueda revisar
carpeta por carpeta.

## 6. Solicitar acceso

**En `nexus-app`** (trabajo aparte, en ese repo y con sus reglas; desde
aquí solo se lee):

- Tabla `accessRequests`: correo, nombre de la agencia, fecha y estado.
- Endpoint HTTP `POST /access-requests`, con el límite de frecuencia que el
  backend ya usa y CORS solo para el origen del sitio.
- Responde igual a una solicitud nueva que a una repetida: no revela si un
  correo ya estaba.
- Un comando para listarlas, como `bun run beta:codes`.

**En el sitio:**

- `API_URL` en `lib/site.ts` (`NEXT_PUBLIC_API_URL`) y ese único origen en
  `connect-src`.
- Formulario nativo: correo, nombre de la agencia, casilla de autorización
  de tratamiento de datos con enlace a `/privacidad`, y un campo trampa.
- Cuatro estados visibles: enviando, recibida, error y demasiados intentos.
- El texto de confirmación dice lo que pasa de verdad: se revisa la
  solicitud y, si hay cupo, llega un código de activación. Sin plazos que
  no se puedan cumplir.

## 7. La app en `app.n3xus.cloud`

Decidido: subdominio. La sesión de la app queda aislada del sitio, cada uno
tiene su política de seguridad y se despliegan por separado. Para el sitio
es solo el valor de `NEXT_PUBLIC_APP_URL`.

## 8. Fases

Cada fase termina con `bun run check` en verde y, si toca algo visible,
vista en el navegador a 360, 768 y 1280 px, en los dos temas (`05` §3).

| # | Fase | Entrega | Hecho cuando |
|---|---|---|---|
| 0 | **Directivas** | Los cambios de §4. | El dueño las leyó; ninguna contradice a otra ni a este plan. |
| 1 | **Fundaciones** | Tema con conmutador, primitivos, `cn`, cabecera, pie, sección, «Saltar al contenido», tokens del escenario. | Una página de muestra se ve bien en los dos temas y se opera con teclado. |
| 2 | **Prototipo de la pieza central** | Una escena: del correo a la póliza confirmada, con una pantalla de Nexus reproducida fiel, atada al scroll, con su versión estática para celular y movimiento reducido. | Va fluida en un celular de gama media; se midió su peso; queda decidido si `motion` basta. |
| 3 | **Landing** | Documento de diseño con textos reales, revisión del dueño, implementación. | Cada frase se señala en `02`; pasa la lista de `04` §14. |
| 4 | **Solicitar acceso** | Endpoint en `nexus-app`, `/solicitar-acceso`, `/privacidad`, `/terminos`. | Una solicitud real llega al backend desde la versión compilada, sin errores de política en la consola. |
| | **Primera publicación posible** | | Fases 0 a 4. |
| 5 | **Descargar** | `/descargar` según `03` §5, con el aviso del instalador sin firmar. | Enseña la última versión y cae al enlace de publicaciones si GitHub falla. |
| 6 | **Agente y seguridad** | `/agente`, `/seguridad`. | Igual que la fase 3. |
| 7 | **Manual** | Registro de artículos, navegación, búsqueda y los primeros artículos. | Cada artículo dice su versión y sus capturas son de la app real. |
| 8 | **Cierre** | Open Graph, datos estructurados, medición de rendimiento, variables en Vercel, enlace con la app. | LCP y CLS dentro del objetivo; el dueño tiene los comandos de despliegue. |

La fase 2 va antes que el diseño de la landing a propósito: es la pieza más
difícil, y de ella depende cuánto puede prometer el resto de la página.

### 8.1 Secciones de la landing (punto de partida para la fase 3)

1. Hero: qué es Nexus, en una frase de `02` §1, con los dos llamados.
2. La pieza central: el agente propone, una persona confirma, queda en la
   bitácora.
3. Qué hay en Nexus: las áreas del menú (`02` §3).
4. El agente: la agencia conecta su Claude; qué hace y qué no (`02` §3.2).
5. Control y rastro: permisos, bitácora, procedencia, bóveda.
6. Dónde se usa: Windows hoy (`02` §4).
7. Cierre: solicitar acceso.

## 9. Riesgos

- **Fidelidad contra espectáculo.** Lo más fácil de romper es que una
  pantalla «de la app» acabe enseñando algo que la app no tiene. Por eso
  `app-replica/` va aparte y cada réplica se compara con la app publicada.
- **El producto cambia cada semana.** Una réplica en código envejece: cada
  una anota la versión de `nexus-app` de la que se copió.
- **Celulares.** Las escenas fijadas al scroll son donde más se degrada
  este tipo de página; la versión estática no es un parche, se diseña a la
  vez.
- **Dos temas duplican la verificación**, también del contraste de los
  brillos.
- **La fase 4 depende de otro repo.** Si el endpoint se retrasa, la landing
  no se publica con un botón que no lleva a nada.
