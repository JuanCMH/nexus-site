# Auditoría SEO: lo que cambia en los textos

> **Estado: implementado** · 2026-10-15; el dueño aprobó §1 a §3 el mismo día. Sale de la auditoría del sitio
> publicado (técnica, contenido, datos estructurados y rendimiento). Lo
> técnico ya está hecho (ver «Hecho sin cambiar textos»). Lo de aquí cambia
> textos visibles o crea una página, así que espera la revisión del dueño
> (`05` §1). Cada texto cita la sección de `02` que lo sostiene.

## Hecho sin cambiar textos

- Canónica, `og:url` e imagen propios de cada página (`lib/metadata.ts`).
  El layout ya no declara canónica: la 404 heredaba la de la home.
- Imagen para compartir (`app/opengraph-image.tsx`) y `summary_large_image`.
- JSON-LD: `Organization`, `WebSite` y `SoftwareApplication`, sin `offers`
  ni valoraciones (`03` §4).
- `app/manifest.ts`, `app/apple-icon.png`, `robots.txt` sin `Host`, sin la
  cabecera `x-powered-by`.
- Rendimiento: la escena fija ya no mueve el diseño al hacer scroll (CLS
  en escritorio de 0,159 a 0,032): columnas alineadas arriba, el origen del
  correo reserva su sitio y la barra de selección de la réplica no salta de
  línea (y dice «Cancelar», como la app). El titular y su párrafo suben sin
  empezar transparentes (`rise-move`), para no retrasar el LCP en celular.
  Outfit se precarga con `next/font/local`.
- Dos frases que contradecían `02`: la escena decía que el agente
  «registra» la póliza (propone, §3.2), y las preguntas de `/precios`
  ponían de ejemplo «siniestros@» (no existe, §7).

## 1. Títulos y descripciones

Hoy el título de la home dice «sistema de registro», que nadie busca, y
ninguna descripción dice Colombia ni renovaciones.

| Página | Título hoy | Título propuesto | Descripción propuesta | `02` |
|---|---|---|---|---|
| `/` | Nexus · El sistema de registro de tu agencia de seguros | Nexus · Sistema para agencias de seguros en Colombia | Clientes, pólizas, renovaciones y documentos de tu agencia de seguros en un solo registro. Conecta tu Claude: el agente propone y tu equipo confirma. | §1, §2, §3, §5 |
| `/precios` | Precios · Nexus | Precios para agencias de seguros · Nexus | Cuatro planes según el tamaño de tu agencia, desde USD 39 al mes, con su valor en pesos a la TRM del día. Todos traen todas las funciones. | §6 (la cifra sale de `PRICED_PLANS`) |
| `/descargar` | Descargar · Nexus | Descargar para Windows · Nexus | Sin cambio. | §4 |
| `/solicitar-acceso` | Solicitar acceso · Nexus | Solicitar acceso a la beta · Nexus | Nexus está en beta cerrada para agencias y corredores de seguros en Colombia. Deja tu correo y el nombre de tu agencia para solicitar un código de activación. | §5 |

## 2. La línea sobre el titular de la home

- Hoy: «En beta cerrada, para Windows y en la web».
- Propuesta: «En beta cerrada, para agencias y corredores de seguros en
  Colombia». Windows y la web ya se dicen en el cierre y en `/descargar`
  (§4, §5).

## 3. Página 404 en español

Hoy es la de Next: en inglés, con dos `<title>`. `app/not-found.tsx`:

- Título: «Página no encontrada»
- `h1`: «Esta página no existe»
- Línea: «Puede que la dirección esté mal escrita o que la página se haya
  movido.»
- Enlaces: «Ir al inicio» (botón), «Ver los precios», «Descargar Nexus».

## 4. Para decidir más adelante (no entra en este cambio)

- **Una sección «Tu agente es el Claude de tu agencia»** en la home: es lo
  que distingue a Nexus y hoy la home casi no lo explica (§2). Necesita su
  propio documento.
- **Preguntas frecuentes del producto** en la home (qué es, si incluye la
  IA, si se usa sin agente, renovaciones, cotizaciones, Excel). Es lo que
  más ayuda a que los buscadores con IA citen el sitio.
- **Privacidad y términos** (`00` §7): hoy no existen y bajan la confianza.
- **Quién está detrás**: nombrar a MAIN Modulos Aplicaciones e Innovación
  SAS en el pie o en el JSON-LD amplía lo que `02` §6 autoriza (solo «si el
  sitio dice quién cobra»).
- **Un correo de soporte del dominio** en lugar del Gmail provisional.
- **Páginas `/agente`, `/seguridad` y `/manual`** (`03` §3).
