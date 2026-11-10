# Manual

> **Estado: implementado** · 2026-10-20, primera entrega: la cuenta y el
> acceso. **Superado** el 2026-10-29 por
> `2026-10-29-manual-completo-design.md`: el manual entero, escrito para la
> 0.51.0 publicada, con estos seis artículos reescritos.

## Para quién y para qué

Para la persona de una agencia que va a usar Nexus: la que recibió un
código de su agencia, y el propietario que va a crear la suya. Debe salir
sabiendo crear su cuenta, entrar a su agencia, proteger el acceso y
recuperarlo si lo pierde, sin pedir ayuda.

El manual del agente (los flujos que lee Claude) vive en `nexus-app` y no
se copia aquí (`03` §3.2).

## De dónde sale

Del manual de Harmony (`~/work/harmony`, `app/help` y `packages/help`): un
registro tipado de artículos, un `.tsx` por artículo con pasos, notas y
capturas reales en claro y oscuro, índice lateral, «En esta página»,
anterior y siguiente, y búsqueda sobre el registro. Lo que cambia aquí:

- Rutas en español (`/manual/primeros-pasos/crear-tu-cuenta`), tokens y
  escala del sitio (`04`), iconos de Remix con los del menú de la app.
- Sin borradores en el índice: una categoría sin artículos no se enseña
  (`03` §3.2, «se escribe solo lo que existe»).
- La búsqueda es un campo que filtra en el sitio, sin ventana ni atajo, y
  sin `cmdk` ni `jotai`: no hacen falta dependencias (`00` §4).
- Cada artículo dice «Escrito para Nexus <versión>».
- Sin vídeo, sin «ruta por rol» ni artículos populares: con seis artículos
  no aportan.

## Rutas

| Ruta | Qué enseña |
|---|---|
| `/manual` | «Manual de Nexus», la entradilla, el buscador y las categorías con sus artículos. |
| `/manual/<categoría>` | La categoría y su lista de artículos, con el índice a la izquierda. |
| `/manual/<categoría>/<artículo>` | El artículo: ruta, título, resumen, versión, cuerpo, anterior y siguiente; índice a la izquierda (≥ 1024 px) y «En esta página» a la derecha (≥ 1280 px). |

«Manual» entra en la cabecera, el menú y el pie (`nav-links.ts`), y las
rutas en el sitemap desde el registro.

## Primera entrega: Primeros pasos

Los textos son los de `content/manual/getting-started/`. Cada hecho está en
`02` §3.4 y se comprobó en `nexus-app` `main` (7bc53a2).

1. **Crear tu cuenta**: qué código necesitas, los pasos, la regla de la
   contraseña y el medidor, qué pasa después.
2. **Entrar a tu agencia o crear la tuya**: «Tus agencias», los tres
   códigos, «Tengo un código», crear la agencia y el acuerdo de uso.
3. **Entrar a Nexus**: web y Windows, entrar, la sesión de 30 días,
   cambiar de agencia, cerrar sesión, «Recarga Nexus» y «Actualiza Nexus».
4. **Proteger tu cuenta**: verificación en dos pasos, códigos de
   recuperación, desactivarla, verificar el correo del propietario.
5. **Recuperar tu contraseña**: de dónde sale el código, los pasos, y cómo
   lo genera quien administra.
6. **Si no puedes entrar**: cada mensaje de error, con su texto literal, y
   qué hacer.

Capturas: «Entrar», «Crear cuenta» completa y «Olvidé mi contraseña», de
la app web en local, con datos de ejemplo (Laura Restrepo, Seguros
Valdoria).

## Decisiones abiertas

- **La versión.** Los artículos describen `main` de `nexus-app`, que aún no
  está publicada. El registro dice 0.26.0: se confirma, o se corrige, al
  publicarla. El manual no se publica antes.
- **El enlace de la invitación.** El mensaje que la app arma para invitar a
  una persona dice «Para instalar Nexus, entra a https://n3xus.cloud/ayuda».
  Esa ruta no existe en el sitio. O se cambia en la app a `/descargar` o a
  `/manual`, o el sitio redirige `/ayuda`. Lo decide el dueño.
- **Capturas sin sesión.** «Tus agencias», el acuerdo, la verificación en
  dos pasos y «Seguridad de la cuenta» necesitan una cuenta de ejemplo en un
  despliegue de pruebas; no se capturaron.
- **El arnés de capturas** corre fuera del repo (`03` §3.2).
