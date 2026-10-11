# 03 · Reglas del Sitio

> La arquitectura de `nexus-site`: dónde va cada cosa, qué páginas hay, cómo
> se enlaza con la app y qué protege al visitante.

## 1. Principio: un sitio estático

Todo lo que este sitio sirve se puede generar en el build. No hay sesión, no
hay base de datos, no hay formularios que guarden nada aquí.

- Una página es un **componente de servidor** y se prerenderiza. `"use
  client"` entra solo en el componente que de verdad reacciona a la persona
  (un menú, un buscador, una pestaña), nunca en la página entera.
- Lo único que viene de fuera es la última versión publicada (§5), y se lee
  **en el servidor**, con caché.
- Si algún día hace falta recibir datos de un visitante (una lista de
  espera, un contacto), eso lo recibe el backend de `nexus-app`, no una base
  nueva aquí. Se decide con el dueño antes de construirlo.

## 2. Estructura de carpetas

```
app/                    rutas, metadatos, robots, sitemap, icono
  globals.css           tokens de marca (01 §4, 04 §1)
  layout.tsx            html, fuentes, metadatos base
components/
  brand/                el logo. Nada más vive aquí
  ui/                   primitivos (botón, enlace…), cuando existan
  site/                 lo que se repite entre páginas: cabecera, pie, sección
  <página>/             las piezas de una sola página (home/, descargar/)
content/                el manual, cuando exista (§3.2)
lib/
  site.ts               direcciones y nombre del sitio; única fuente
public/brand/           logo e icono como archivos
docs/directives/        la ley
docs/plans/             diseño previo de cada página (05 §1)
docs/referencia/        investigación fechada; contexto, no regla
```

- **Una pieza usada por una sola página vive con esa página.** Sube a
  `components/site/` cuando la usa una segunda, no antes.
- **`lib/` es puro**: sin React, sin acceso al DOM.
- Sin barrels. Imports por `@/`.

## 3. Páginas

Mapa propuesto. Las rutas van en español. El orden de construcción y el
contenido de cada una se cierran en su documento de diseño (`05` §1); aquí
queda qué existe y para qué.

| Ruta | Para qué | Notas |
|---|---|---|
| `/` | La landing: qué es Nexus, para quién, cómo trabaja con el agente, y el llamado a la acción. | El llamado a la acción depende de una decisión abierta (`00` §7). |
| `/descargar` | Bajar el instalador de la última versión. | §5. |
| `/manual` y `/manual/<categoría>/<artículo>` | El manual para personas. | §3.2. |
| `/agente` | Cómo se conecta Claude a Nexus y qué hace. | Puede empezar como sección de la landing. |
| `/seguridad` | Cómo se guardan los datos, la bóveda, permisos y bitácora, descrito con el mecanismo real. | Sin sellos ni adjetivos (`02` §7). |
| `/precios` | — | **No se construye** hasta que haya precios (`00` §7). |
| `/privacidad`, `/terminos` | Legal. | El texto lo aprueba el dueño; no se inventa. |

### 3.1 Cada página

- Exporta su `metadata` (título y descripción propios; el título usa la
  plantilla del layout: «Descargar · Nexus»).
- Tiene **un solo `<h1>`** y sus regiones (`header`, `main`, `footer`).
- Entra en `app/sitemap.ts` en el mismo cambio que la crea.
- Enlaza a la app y a los instaladores solo con `APP_URL` y `RELEASES_REPO`
  de `lib/site.ts`. Si `APP_URL` está vacía, «Entrar» no se enseña.

### 3.2 El manual

El manual del sitio es **para personas**. El del agente (los flujos que lee
Claude) vive en `nexus-app` y no se copia aquí.

Requisitos, cuando se construya:

- **Contenido como código**, versionado en `content/`. El formato (TSX o
  MDX) se decide entonces (`00` §7); MDX exige anotar la dependencia.
- Un **registro único** de artículos (título, categoría, ruta, resumen): de
  él salen el índice, la navegación, el sitemap y la búsqueda. Un artículo
  que no está en el registro no existe.
- Categorías que siguen el menú de la app: primeros pasos, tareas,
  clientes, pólizas, cotizaciones de cumplimiento, documentos, accesos,
  agente, configuración.
- Piezas de artículo: pasos numerados, nota, advertencia, tabla, captura.
- Búsqueda en el cliente sobre el registro; sin servicio externo.
- Cada artículo dice **para qué versión se escribió**. Uno que describe una
  pantalla que cambió se corrige o se retira; no se deja «casi cierto».
- Las capturas son de la app real (`01` §7).

Se escribe solo lo que existe: ningún artículo describe una función
planeada.

## 4. SEO

- `metadataBase`, plantilla de título y Open Graph base están en
  `app/layout.tsx`. El idioma es `es` y la región `es_CO`.
- `app/robots.ts` permite todo: aquí no hay nada privado.
- `app/sitemap.ts` lista cada página pública.
- Una URL canónica por página; sin contenido duplicado entre rutas.
- La imagen de Open Graph se genera con los recursos de `public/brand/`.
- Datos estructurados (`SoftwareApplication`, `Organization`) cuando la
  landing esté: con lo que es verdad, sin valoraciones ni precios inventados.

## 5. Descarga

Los instaladores se publican en un repositorio público de GitHub
(`RELEASES_REPO`). La página de descarga:

- Lee la última versión de
  `https://api.github.com/repos/<RELEASES_REPO>/releases/latest` **en el
  servidor**, con revalidación (una hora basta). Nunca desde el navegador:
  no abre la política de seguridad ni expone al visitante a los límites de
  la API.
- Enseña la versión, la fecha y el enlace al instalador de Windows (el
  archivo `*-setup.exe` de la publicación).
- Si GitHub no responde, cae al enlace de la página de publicaciones. Nunca
  enseña un botón que no lleva a nada.
- No copia los instaladores a este repo ni a Vercel.

El instalador de Windows hoy **no está firmado**: Windows enseña un aviso al
abrirlo. La página lo dice y explica cómo continuar, en vez de callarlo.

## 6. Seguridad

Las cabeceras están en `next.config.ts` y valen para todas las rutas:

- **Política de contenido cerrada a `'self'`.** Sin scripts, fuentes,
  imágenes ni conexiones de terceros.
- `frame-ancestors 'none'` y `X-Frame-Options: DENY`: el sitio no se
  incrusta en otro.
- `nosniff`, `Referrer-Policy`, `Permissions-Policy` sin cámara, micrófono
  ni ubicación.
- HSTS en producción, con `includeSubDomains` y **sin `preload`** (el
  porqué está en el archivo).

**Añadir un origen externo es una decisión, no un detalle.** Una analítica,
un video incrustado o un mapa abren la política y traen cookies. Se hace
así: se pregunta al dueño, se añade el origen mínimo a la directiva exacta,
se anota aquí con su motivo, y se comprueba en el navegador que no hay
errores de política en la consola.

No hay secretos en este repo. Las variables `NEXT_PUBLIC_*` son públicas por
definición.

## 7. Entorno y despliegue

| Variable | Dónde se lee | Qué es |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | build y servidor | La dirección pública del sitio. |
| `NEXT_PUBLIC_APP_URL` | build y servidor | La dirección de la app web. Vacía = sin «Entrar». |
| `NEXUS_RELEASES_REPO` | servidor | `propietario/repo` de los instaladores. |

- El molde está en `.env.example`. En local no hace falta ninguna.
- Se despliega en **Vercel**, un proyecto propio para este repo. Las
  variables se definen por entorno en Vercel **antes** del build: las
  `NEXT_PUBLIC_*` se hornean al compilar, así que cambiarlas exige volver a
  desplegar.
- `main` es lo publicado.
