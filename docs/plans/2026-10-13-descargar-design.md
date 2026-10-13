# Descargar

> **Estado: implementado** · 2026-10-13, a petición del dueño: que Nexus se
> pueda instalar desde el sitio y no desde el repositorio de publicaciones.
> Textos pendientes de su revisión.

## Para quién y para qué

Quien ya tiene un código de activación o una invitación y va a instalar
Nexus en Windows. Debe salir con el instalador de la última versión y
sabiendo qué hacer con el aviso de Windows.

## De dónde sale la versión

`lib/releases.ts` lee en el servidor, con una hora de caché, el
`latest.yml` de la última publicación de `RELEASES_REPO` (`03` §5): el
archivo que la app instalada usa para actualizarse. De él toma la versión,
la fecha, el nombre del instalador `*-setup.exe` y su tamaño, y arma el
enlace directo de descarga. La primera versión leía la API de GitHub y en
producción falló por su límite por dirección: la página caía siempre al
enlace del repositorio. Publicar una versión nueva en
`nexus-app-releases` basta: el sitio la enseña en la siguiente hora, sin
desplegar.

Si GitHub no responde, la página enseña «Ver las versiones publicadas»
hacia el repositorio. Nunca un botón que no lleva a nada.

## `/descargar` · `app/descargar/page.tsx`

- `h1`: «Descargar Nexus para Windows»
- «El instalador de la última versión. Una vez instalado, Nexus se
  actualiza automáticamente.» (`02` §4)
- Botón principal: «Descargar para Windows» → el instalador.
- «Versión 0.22.0 · publicada el 12/10/2026 · 134 MB» (la fecha, en hora
  de Colombia).
- «¿Prefieres no instalar nada? Entra desde el navegador» → `APP_URL`.
- Tres notas:
  - «Al abrir el instalador» — el instalador no está firmado y Windows
    muestra un aviso: «Más información» y «Ejecutar de todas formas»
    (`03` §5).
  - «Para entrar» — beta cerrada: código de activación para crear una
    agencia (enlace a `/solicitar-acceso`) o código de invitación para
    entrar a una que existe (`02` §5, §8).
  - «Lo que añade la aplicación instalada» — la carpeta de documentos, las
    notificaciones de Windows y el arranque con el equipo (`02` §4).

## En la landing

- «Descargar» en la cabecera, el menú y el pie (`nav-links.ts`).
- En «Cómo se empieza», un botón secundario «Descargar para Windows» que
  baja el instalador directamente, con «Versión 0.22.0, publicada el
  12/10/2026» y el enlace «Cómo instalarla» a `/descargar`. La acción
  principal sigue siendo «Solicitar acceso».

## Pruebas

Elegir el instalador de una publicación es lógica pura y entra con sus
pruebas (`05` §2): `lib/releases.test.ts`, con `bun test`, sumado al gate.

## Pendiente

- Revisión de los textos por el dueño.
- Requisitos de Windows (versión mínima): no se afirman porque no están en
  `02`.
- Cuando el instalador se firme, quitar la nota del aviso.
