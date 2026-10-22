# 05 · Reglas de Calidad

> Cómo se trabaja: qué se decide antes de construir, qué tiene que pasar
> antes de un commit y cómo se comprueba que algo está terminado.

## 1. Diseño previo

Una página nueva o un rediseño **no empieza por el código**. Empieza por un
documento en `docs/plans/`, corto, que el dueño revisa.

### 1.1 Cuándo se exige

- Una página nueva.
- Rehacer una sección entera de una página existente.
- Un componente que se va a repetir en todo el sitio (cabecera, pie).

No se exige para corregir un texto, ajustar un espaciado o arreglar un
defecto.

### 1.2 El flujo

1. **Diseñar.** `docs/plans/AAAA-MM-DD-<tema>-design.md`: para quién es la
   página, qué debe entender y hacer quien la lee, qué secciones lleva y en
   qué orden, el texto real de cada una (no relleno), qué se enseña de la
   app, y qué decisiones quedan abiertas.
2. **Revisar** con el dueño. Lo abierto se pregunta; no se resuelve solo.
3. **Implementar** siguiendo `04`.
4. **Verificar en pantalla** (§3) y cerrar: el documento pasa de
   `propuesta` a `implementado`, con lo que cambió respecto al plan.

El documento lleva arriba su estado: `propuesta`, `aprobado` o
`implementado`.

### 1.3 Los textos van primero

En un sitio, el diseño **es** el texto. Una sección se diseña con sus
palabras definitivas, comprobadas contra `02`. Si el texto no cabe en el
diseño, cambia el diseño.

## 2. El gate

```bash
bun run check
```

Corre, en orden: `typecheck` (tipos de rutas y `tsc`), `lint` (Biome),
`test` (`bun test`) y `build` (`next build`). Los cuatro en verde antes de
cada commit. El mismo
comando corre en GitHub (`.github/workflows/ci.yml`) en cada push a `main`
y en cada pull request.

- `bun run format` aplica el formato y los arreglos seguros de Biome.
- **Un gate en verde no es criterio de aceptación.** Dice que compila, no
  que la página esté bien. Lo que acepta una página es §3.
- Una regla de Biome no se apaga para pasar: se arregla el código, o se
  discute la regla y se anota aquí por qué se apagó.
- Pruebas automáticas: la lógica pura de `lib/` entra con sus pruebas, en
  un `*.test.ts` junto al archivo. Hoy es elegir el instalador de una
  publicación (`lib/releases.test.ts`), elegir el plan de la calculadora
  (`lib/pricing.test.ts`) y la TRM vigente (`lib/trm.test.ts`) y la fecha de la política
  (`lib/legal.test.ts`); mañana, el registro del manual y la
  búsqueda. Corren con `bun test`, el ejecutor que ya trae Bun: se previó
  Vitest, y no entró porque habría sido una dependencia para lo mismo
  (`00` §4).

## 3. Verificar en pantalla

Nada visible se da por hecho sin haberlo visto en un navegador.

```
□ `bun run dev` y la página abierta, sin errores en la consola
  (incluidos los de la política de seguridad)
□ A 360, 768 y 1280 px de ancho
□ Con teclado: tabulación en orden, foco visible, menú operable
□ Con movimiento reducido activado
□ Enlaces: cada uno lleva a algo que existe
□ `bun run build` y `bun run start`: lo mismo sobre la versión compilada
□ Si cambió algo de 03 §6, las cabeceras en la respuesta real
```

Al informar, se dice lo que se comprobó y lo que no. «Compila» y «lo vi
funcionar» son dos frases distintas.

## 4. Verificar lo que se afirma

Cada frase sobre el producto tiene que poder señalarse en `02-producto.md`.

- Si no está ahí, no se publica hasta comprobarla en `nexus-app` y añadirla.
- Si `02` dice que algo no se afirma, no se afirma con otras palabras.
- Cifras, fechas, versiones y requisitos llevan fuente; sin fuente, fuera.
- Nada de prueba social inventada, ni «como ejemplo».

## 5. Forma del código

- **Componentes pequeños y con nombre de lo que son.** Un archivo que pasa
  de ~200 líneas suele ser dos componentes.
- **No se abstrae a la primera.** Una sección usada una vez es un
  componente de su página. Se generaliza cuando aparece el segundo uso real.
- **Los datos de una sección** (una lista de ventajas, las filas de una
  tabla) van en una constante tipada junto al componente, no esparcidos por
  el JSX.
- **Ninguna dirección escrita a mano**: `lib/site.ts`.
- **Comentarios que explican el porqué**, en español, donde la decisión no
  es evidente. No se comenta lo que el código ya dice.
- Sin código muerto, sin `console.log`, sin `any`.

## 6. Git

- Todo en **`main`**. Una rama, si hace falta, es corta: se fusiona y se
  borra.
- **Un commit es una unidad verificada**: pasa el gate y, si toca algo
  visible, pasó §3.
- El mensaje, en español, dice qué cambió para quien lo lee, con el ámbito
  delante: «Landing: el hero dice qué es Nexus y enlaza a la descarga».
- **`push`, despliegues y cambios de dominio los ejecuta el dueño.** Se le
  dan los comandos; no se publica por él.
- No se versionan `.env*` (salvo `.env.example`), `node_modules` ni `.next`.

## 7. Mantener las directivas

- Una regla nueva entra al documento que le toca **en el mismo cambio** que
  la estrena.
- Si el código y una directiva se contradicen, uno de los dos está mal: se
  decide cuál y se corrige; no se deja la contradicción.
- Las decisiones abiertas viven en `00` §7 y salen de ahí al cerrarse.
- `02-producto.md` lleva la fecha y la versión de su corte; al revisarlo se
  actualizan las dos.
