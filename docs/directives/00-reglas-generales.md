# 00 · Reglas Generales

> **La carpeta `docs/directives/` es la ley única y completa de `nexus-site`.**
> Si una regla no está aquí, no es una regla del proyecto. Un documento que no
> coincide con el código es peor que no tener documento: se corrige en el
> mismo cambio que lo desmiente.

## 1. Los seis documentos

| Documento | Gobierna | Léelo antes de… |
|---|---|---|
| `00-reglas-generales.md` (este) | Qué es este repo, los tres repos de Nexus, stack, nombres, idioma, decisiones abiertas. | Cualquier tarea. |
| `01-marca.md` | El manual de marca: nombre, promesa, personalidad, logo, color, tipografía, voz. | Escribir un texto o tocar algo que se ve. |
| `02-producto.md` | Qué es Nexus hoy y qué se puede afirmar de él. | Escribir cualquier frase sobre el producto. |
| `03-reglas-sitio.md` | Arquitectura del sitio: carpetas, páginas, SEO, cabeceras, integración con la app. | Tocar `app/`, `lib/` o `next.config.ts`. |
| `04-reglas-interfaz.md` | Todo lo visible: tokens, superficies, escala, color, iconos, movimiento, accesibilidad. | Cualquier cambio de UI. |
| `05-reglas-calidad.md` | Diseño previo, gate, verificación en pantalla, commits. | Empezar una página y antes de cada commit. |

Orden de autoridad ante conflicto: el documento más específico → `00` → el
código existente → la petición explícita del usuario (que gana, pero si
contradice una directriz, se dice antes de seguir).

`docs/referencia/` guarda investigación fechada (mercado, monetización). Es
contexto, **no regla**: cada archivo lleva su fecha en el nombre y puede
estar superado.

## 2. Qué es este repositorio

`nexus-site` es el **sitio público de Nexus**: la landing, el manual para
personas, la página de descarga y lo que haga falta de marketing y legal.

No es la aplicación. No tiene sesión, ni backend, ni datos de ninguna
agencia. Su trabajo es explicar con verdad qué es Nexus y llevar a quien lo
lee a solicitar acceso o a iniciar sesión.

## 3. Los tres repositorios de Nexus

| Repo | Qué es | Dónde se publica |
|---|---|---|
| `nexus-app` | El producto entero: app de escritorio (Electron), app web (la misma interfaz compilada para navegador) y el backend en Convex, que incluye el conector del agente (MCP). | Instaladores en GitHub · web en `app.n3xus.cloud` · backend en Convex |
| `nexus-site` (este) | Landing, manual, descarga. | `n3xus.cloud` y `www`, en Vercel |
| `nexus-app-releases` | Solo los instaladores publicados; lo leen las apps instaladas para actualizarse. | GitHub (público) |

En disco viven juntos en `~/work/nexus/`.

> Hasta el 2026-10-11 `nexus-app` se llamó `nexus-desktop`, y su repositorio
> de instaladores, `nexus-desktop-releases`. Los instaladores anteriores a la
> 0.18.1 llevan ese nombre en el archivo. El repositorio de instaladores se
> lee de `NEXUS_RELEASES_REPO` (`lib/site.ts`) y no se escribe a mano.

`nexus-seguros` fue la generación anterior (una app web en Next.js con IA de
extracción propia). Está archivada en GitHub y **no es fuente de nada**: ni
de textos, ni de componentes, ni de reglas. Lo que valía de ella ya está aquí.

### 3.1 Cómo se reparten el dominio

| Dirección | Sirve | Sale de |
|---|---|---|
| `n3xus.cloud` y `www` | Este sitio | `nexus-site` |
| `app.n3xus.cloud` | La app web | `nexus-app` |
| `api.n3xus.cloud` (o el nombre que se elija) | El conector del agente, su autorización, los enlaces de archivos y las solicitudes de acceso | El Convex de `nexus-app` |

El dominio es **`n3xus.cloud`** (decidido el 2026-10-11). La app va en un
**subdominio y no en una ruta** del sitio. La app guarda la
sesión en el almacenamiento del navegador, que se comparte por origen: en el
mismo origen, cualquier script del sitio podría leerla. Separados, cada uno
tiene su propia política de seguridad y se publica sin tocar al otro.

Lo que el sitio sabe de la app es, y solo es: la dirección de «Iniciar
sesión» (`APP_URL`), la del backend que recibe las solicitudes de acceso
(`API_URL`), el repositorio de instaladores (`RELEASES_REPO`) y lo que
`02-producto.md` dice del producto.

## 4. Stack oficial

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Todo estático o regenerado; sin rutas con sesión. Lee `AGENTS.md`: esta versión cambió respecto a lo que se suele recordar. |
| Interfaz | **React 19** | Componentes de servidor por defecto; `"use client"` solo donde hay interacción. |
| Estilos | **Tailwind CSS 4** | Tokens en `app/globals.css`. |
| Primitivos | **radix-ui**, **class-variance-authority**, **clsx**, **tailwind-merge** | Los de shadcn/ui, copiados de `nexus-app` para que sean idénticos. Solo entran los que se usan: hoy botón, campo y etiqueta. |
| Tema | **next-themes** | Claro y oscuro: sigue al sistema y deja elegir. La misma de la app. |
| Animación | **motion** | Única librería de animación. La misma de la app. |
| Iconos | **@remixicon/react** | Única librería. Nada de lucide. |
| Fuentes | **@fontsource** (Outfit, JetBrains Mono, Cormorant Garamond) | Empaquetadas; sin CDN. Las mismas de la app. |
| Calidad | **TypeScript** estricto, **Biome**, **`bun test`** | Gate en `bun run check`. Las pruebas usan el ejecutor de Bun; `@types/bun` entró el 2026-10-13 solo por sus tipos. |
| Gestor | **Bun** | |
| Despliegue | **Vercel** | |

Lo que este sitio **no** lleva: Convex ni ningún backend propio, capa de
traducción (i18n), sistema de estado global, analítica de terceros.

**Una dependencia entra cuando una página demuestra que hace falta**, no
antes, y esta tabla se actualiza en el mismo cambio con el motivo. Una
librería por propósito: si ya hay una para animar, no entra una segunda.

Lo que se evaluó el 2026-10-11 y quedó fuera, con su motivo: GSAP (sería
una segunda librería de animación; entra solo si una escena no sale con
`motion`), scroll suave tipo Lenis (sustituye el scroll del navegador),
three.js o WebGL (peso sin relación con el producto), librerías de
formularios (el único formulario tiene dos campos) y captcha de terceros
(abre la política de seguridad).

## 5. Convención de nombres

| Contexto | Convención | Ejemplo |
|---|---|---|
| Archivos y carpetas | kebab-case | `download-button.tsx` |
| Rutas | kebab-case, en español | `app/descargar/page.tsx` |
| Componentes React | PascalCase | `DownloadButton` |
| Hooks | `use` + PascalCase, en `use-*.ts` | `useLatestRelease` |
| Constantes | UPPER_SNAKE_CASE | `SITE_URL` |

Sin barrels (`index.ts`). Imports por el alias `@/`. Un componente por
archivo.

## 6. Idioma

Código, identificadores y archivos en **inglés**. Las **rutas** y todo lo que
ve una persona, en **español** de Colombia, con acentuación correcta,
incluido lo que no se ve (`aria-label`, `alt`, metadatos). El texto se
escribe directamente en el código: no hay capa de traducción.

Cómo se escribe está en `01-marca.md` §6.

## 7. Decisiones abiertas

Son del dueño del producto. Nadie las resuelve por su cuenta; se preguntan.

| Decisión | Estado | Qué bloquea |
|---|---|---|
| Precios | Sin definir (`02-producto.md` §6) | La página de precios: no se construye. |
| Texto de `/privacidad` y `/terminos` | Sin escribir; lo aprueba el dueño | Abrir las solicitudes de acceso: recoger correos exige la autorización de tratamiento de datos. El sitio se publica antes, con el formulario cerrado (`03` §8). |
| Qué más pide el formulario de acceso | Hoy correo y nombre de la agencia | Nada: se amplía después. |
| Relato del nombre | Propuesto en `01-marca.md` §1, por confirmar | La sección «Sobre Nexus», si la hay. |
| GSAP como segunda librería de animación | Fuera mientras `motion` baste (§4) | — |
| Formato del manual (TSX o MDX) | Se decide al construirlo (`03-reglas-sitio.md` §3.2) | — |

Cuando una se cierra, se borra de esta tabla y la regla entra en su
documento.

## 8. Checklist de cada sesión

```
□ ¿Leí la petición completa?
□ ¿Escribo sobre el producto?   → 02 (y verifica contra nexus-app si dudas)
□ ¿Escribo cualquier texto?     → 01 §6
□ ¿Toca algo visible?           → 01 y 04
□ ¿Página nueva?                → 05 §1 (diseño previo) y 03 §4 (sitemap, metadatos)
□ ¿Dependencia u origen nuevo?  → §4 de este documento y 03 §6
□ ¿Antes de commit?             → bun run check (05 §2)
```
