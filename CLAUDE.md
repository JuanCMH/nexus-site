Antes de modificar nada, lee `docs/directives/` (00 a 05). Es la única fuente
de verdad del proyecto: qué es este repo, la marca, qué se puede afirmar del
producto, la arquitectura del sitio, la interfaz y la calidad.

@AGENTS.md

Resumen operativo:
- `nexus-site` es el **sitio público de Nexus**: landing, manual para
  personas y descarga. No es la app: sin sesión, sin backend, sin datos.
- El producto vive en `nexus-app` (`~/work/nexus/nexus-app`): escritorio, web y backend Convex con el conector del agente.
  De ese repo solo se **lee**, para comprobar un hecho. `nexus-seguros` es
  la generación anterior, archivada: no es fuente de nada.
- Next.js 16 (App Router) + React 19 + Tailwind 4, estático. Bun y Biome.
  Primitivos de shadcn copiados de la app, `next-themes` y `motion`. Sin
  Convex, sin i18n, sin analítica de terceros. Una dependencia entra cuando
  una página demuestra que hace falta (`00` §4).
- Dominio `n3xus.cloud`; la app, en `app.n3xus.cloud`. Dos llamados a la
  acción: «Solicitar acceso» (el formulario envía al backend de `nexus-app`,
  `03` §8) e «Iniciar sesión».
- Marca (`01`): tokens en `app/globals.css`, logo en
  `components/brand/nexus-logo.tsx` y `public/brand/`. Fuentes Outfit,
  JetBrains Mono y Cormorant Garamond (cursiva, solo declaraciones de
  marca), empaquetadas.
- Toda frase sobre el producto sale de `02-producto.md`, que lleva su fecha
  de corte y la lista de lo que **no** se afirma. Nexus no pone la IA: la
  agencia conecta su Claude y Nexus pone las barandas.
- Interfaz (`04`): dos planos. El **escenario** es del sitio y admite luz de
  marca, cristal y escenas atadas al scroll; la **pantalla** es de la app y
  se reproduce fiel en `components/app-replica/`. Claro y oscuro. El color
  comunica estado; sin `rounded-2xl`.
- El sitio puede ir por delante de la app en lo visual: cada cambio se anota
  en `01` §8 para llevarlo después a la app.
- Direcciones solo desde `lib/site.ts` (`SITE_URL`, `APP_URL`, `API_URL`,
  `RELEASES_REPO`); ninguna escrita a mano.
- Página nueva: documento de diseño en `docs/plans/` antes del código
  (`05` §1), con los textos reales.
- Gate: `bun run check` (tipos + Biome + build). En verde antes de cada
  commit; lo visible, además, visto en el navegador (`05` §3).
- Textos visibles y rutas en español; identificadores y archivos en inglés,
  kebab-case, sin barrels. Iconos solo de `@remixicon/react`.
- `push`, despliegues y dominio los ejecuta el dueño.
- Decisiones abiertas (precios, textos legales, relato del nombre): `00`
  §7. Se preguntan, no se resuelven solas.
