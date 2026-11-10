# Términos · Diseño

**Fecha:** 2026-11-10 · **Estado:** implementado, pendiente de la revisión
en pantalla y del gate del dueño. El dueño decidió el 2026-11-10 que los
términos del sitio son el **Acuerdo de uso** que ya existe en `nexus-app` y
que acepta el propietario de cada agencia. Con eso se cierra la parte de
`/terminos` de la decisión abierta de `00` §7.

## Para qué y para quién

- **Quien evalúa Nexus antes de pedir acceso**: el dueño o el gerente de una
  agencia que quiere leer las condiciones antes de crearla.
- **El propietario de una agencia** que ya lo aceptó y quiere volver a
  leerlo fuera de la app.
- **Quien revisa la política de privacidad**: `/privacidad` remite al
  Acuerdo de uso en tres puntos (papeles de responsable y encargado, el
  registro de su aceptación y el almacenamiento fuera de Colombia).

Debe salir sabiendo qué acepta una agencia al usar Nexus, con la misma
versión y las mismas palabras que ve en la app.

## De dónde sale el texto

De una sola fuente: `nexus-app/src/shared/legal/agency-agreement.ts`
(versión 1, vigente desde el 2026-10-20). Se comprobó el 2026-11-10 que el
archivo es idéntico en `main` y en la 0.68.3 (`dfe601e`).

- **Se reproduce fiel**: el título, la introducción, las seis secciones con
  sus 25 numerales en el mismo orden y la cláusula de aceptación. Sin
  añadir, quitar ni resumir. Aquí no se redacta.
- **Los números de cada numeral los pone la página**, como en la app
  (`agreement-text.tsx`): sección «1.», numeral «1.1.». El texto los cita
  («numeral 2.2»), así que tienen que coincidir.
- **Datos que el sitio ya tiene**: el nombre y el NIT del Proveedor salen de
  `CONTROLLER` (`lib/legal.ts`); el correo de soporte, de `SUPPORT_EMAIL`
  (`lib/site.ts`), el mismo valor que `SUPPORT_EMAIL` de la app. La
  dirección va escrita sin «, Colombia», como en el texto de la app;
  `CONTROLLER.address` la lleva y por eso no se usa.
- El correo del numeral 6.3 se enseña como enlace de correo, sin cambiar
  el texto.

## Cómo se mantiene sincronizado

| Qué | Dónde, en el sitio | Copia de, en `nexus-app` |
|---|---|---|
| Versión y fecha | `AGENCY_AGREEMENT` en `lib/legal.ts` | `AGENCY_AGREEMENT_VERSION`, `AGENCY_AGREEMENT_EFFECTIVE_DATE` |
| Texto | `lib/agency-agreement.ts` | `AGENCY_AGREEMENT_TITLE`, `_INTRO`, `_SECTIONS`, `_ACCEPTANCE` |

- La app sube la versión cuando cambia lo acordado; una corrección de
  ortografía no la sube. **Cualquier cambio del texto allá se copia aquí**,
  con la versión y la fecha, en un solo commit del sitio.
- Comprobación: con los dos repos en `~/work/nexus/`, un script de una vez
  importa los dos módulos y compara título, introducción, secciones,
  aceptación, versión y fecha (así se comprobó el 2026-11-10: todo igual).
  No entra como prueba del repo porque el CI de este sitio no tiene
  `nexus-app`.

## La página · `app/terminos/page.tsx`

Misma forma que `/privacidad`: `DocumentPage`, cuerpo a `max-w-2xl`, `h2`
por sección. Sin escenario ni réplicas. **Sin versión en inglés**: la
excepción de `00` §6 cubre solo `/en/privacy` y `/en/agent`, así que
`DocumentPage` acepta ahora la traducción como opcional y la página no
enseña el enlace de idioma.

### Cabecera

- Metadatos: título «Acuerdo de uso» (la plantilla da «Acuerdo de uso ·
  Nexus»), descripción igual a la entradilla, canónica `/terminos`.
- `h1`: «Acuerdo de uso de Nexus»
- Entradilla: «Las condiciones con que una agencia usa Nexus. Las acepta su
  propietario, en nombre de la agencia, al crearla y con cada versión
  nueva.»
- Línea de versión: «Versión 1 · vigente desde el 20 de octubre de 2026»

### Cuerpo

1. La introducción del Acuerdo.
2. Las seis secciones, cada una `h2` numerado («1. El servicio» … «6.
   Responsabilidad, cambios y ley aplicable») con su lista de numerales.
3. «Aceptación», con la cláusula de aceptación.

### Enlaces

- Pie: «Acuerdo de uso», junto a «Privacidad».
- `app/sitemap.ts`: `/terminos`, mensual, prioridad 0.3, como `/privacidad`.

## Abierto

- **Enlazar desde `/privacidad`** la primera mención del «Acuerdo de uso»
  (sección «A qué se aplica»). No se hizo aquí: esa página la edita otra
  persona.
- **Enlazar desde el manual** («Entrar a tu agencia o crear la tuya», paso
  «Acepta el acuerdo de uso»), si el dueño lo quiere.
- **Revisión legal** del Acuerdo: la misma recomendación que para
  `/privacidad`. Cambiarlo se hace en `nexus-app`, no aquí.
