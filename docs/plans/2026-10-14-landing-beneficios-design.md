# Landing: beneficios

> **Estado: implementado** · 2026-10-14, a petición del dueño, que lo
> aprobó el mismo día: las funciones explican Nexus técnicamente; lo que
> vende es lo que la agencia gana con ellas. Una sección nueva después del
> hero.

## Para quién y para qué

Quien dirige la agencia y acaba de leer el titular. Antes de ver cómo
trabaja el agente (la escena) o el menú completo (Qué incluye), tiene que
entender en diez segundos qué cambia en su día: qué deja de pasar y qué
gana.

## Dónde va

```
Hero → Beneficios (nueva) → La escena → Qué resuelve → Qué incluye → Flujos y bóveda → Cómo se empieza
```

`components/home/benefits-section.tsx`, componente de servidor. Sin enlace
en la cabecera: ya tiene seis, y la sección está justo bajo el hero.

## Texto

- `h2`: «Lo que gana tu agencia»
- Entradilla: «Menos trabajo repetido, menos olvidos y una sola versión de
  cada cliente y cada póliza.»

Seis beneficios. Cada uno es el resultado, en el título, y la función que
lo sostiene, en una línea. Todo sale de `02`.

| Beneficio | La línea | Fuente |
|---|---|---|
| Ninguna renovación queda en el aire | Cada póliza por vencer genera su tarea de renovación, con responsable y fecha. La tarea se cierra sola cuando la póliza renovada aparece en el registro. | `02` §3, Tareas y Pólizas |
| Tu equipo deja de digitar pólizas | El agente lee los correos vinculados y las carátulas, y propone la póliza y su cliente. Tu equipo revisa y confirma. | §3.2 |
| Encuentras el trabajo adelantado | El agente trabaja en la nube: puede leer los correos de madrugada, sin un computador encendido, y en la mañana sus propuestas te esperan «Por confirmar». | §2 |
| Cada quien sabe qué hacer hoy | En Inicio, cada persona ve lo que tiene pendiente, y quien dirige ve la cartera y el equipo. | §3, Inicio |
| Un solo registro para todos | Tu equipo y tu agente ven los mismos clientes, pólizas y documentos, en el escritorio y en la web. | §1, §4 |
| Sabes quién hizo qué | La bitácora guarda cada cambio, quién lo hizo, una persona o el agente, y de qué correo salió cada póliza propuesta. | §3.3 |

Lo que la sección **no** dice: cifras de ahorro («ahorra 10 horas a la
semana»), «el agente trabaja solo», ni nada de lo que `02` §7 no afirma.
Tampoco promete gratuidad o volumen ilimitado (`02` §6).

## Interfaz

- Fondo `background`, sin luz: el hero ya la tiene y la escena que sigue
  es la pieza fuerte.
- Rejilla de tres columnas en `lg`, dos en `md`, una en celular. Cada
  beneficio con `border-t`, título en `text-xl font-medium` y la línea en
  `text-muted-foreground`. Sin tarjetas y sin iconos: evita el
  anti-patrón «tres tarjetas con icono, título y dos líneas» (`04` §13) y
  deja que el título haga el trabajo.
- Sin animación de entrada (la única de la página es la del hero).

## Lo que se cruza con «Qué resuelve»

«Qué resuelve» ya cuenta el antes y el después en seis filas, y varias
coinciden con estos beneficios (la renovación, digitar, la bóveda). La
propuesta es que las dos convivan con papeles distintos: Beneficios es la
promesa corta, arriba; Qué resuelve es la explicación, más abajo. Si al
verlas juntas sobran, la opción es recortar Qué resuelve a las filas que
Beneficios no cubre (el Excel de la cartera, la bóveda, los correos por
enviar).

## Decisiones

Cerradas por el dueño el 2026-10-14: los seis beneficios tal cual, y la
sección convive con «Qué resuelve».
