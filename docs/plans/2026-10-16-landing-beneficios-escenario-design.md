# Landing: beneficios, en el escenario

> **Estado: implementado** · 2026-10-16, a petición del dueño, que aprobó
> el título, la entradilla y la puesta en escena el mismo día. Reemplaza
> la versión de `2026-10-14-landing-beneficios-design.md`.

## Por qué cambia

La sección es el argumento de venta más fuerte de la página y se leía
como una ficha técnica: seis títulos iguales sobre fondo plano, y la
escena que sigue le robaba la atención. Además, el argumento hablaba de
funciones y no respondía a la objeción de fondo: «con una suscripción de
IA me basta». La sección no la nombra; la contesta enseñando lo que Nexus
le da a la agencia que una IA sola no tiene: los correos de toda la
agencia, sus flujos, su cartera en cifras, un registro que no se pierde,
control y rastro.

## Dónde va

Igual que antes, justo después del hero:

```
Hero → Beneficios → La escena → Qué resuelve → Qué incluye → Flujos y bóveda → Cómo se empieza
```

`components/home/benefits-section.tsx` (servidor) y sus viñetas en
`components/home/benefit-vignettes.tsx`.

## Texto

- Antetítulo: «Lo que gana tu agencia»
- `h2`: «La app definitiva para tu equipo y tu agente de IA»
- Entradilla: «Si tener un agente de IA en tu agencia es un gran paso,
  Nexus es el siguiente. Conoce todo lo que Nexus les ofrece a tu equipo
  y a tu agente para operar toda tu agencia.»
- Sin frase de cierre: la sección termina en la cuadrícula de beneficios.

Siete beneficios, en este orden (también el de celular):

| Beneficio | La línea | Viñeta | Fuente |
|---|---|---|---|
| Lee los correos de toda la agencia, no solo el tuyo (grande) | Vincula los correos de la agencia y el de cada persona. El agente los lee, también de madrugada y sin un computador encendido, y en la mañana sus propuestas te esperan «Por confirmar». | Tres correos vinculados que llegan a una lista de pólizas «Por confirmar», cada una con el correo del que salió. | `02` §2, §3.2, §3.3 |
| Ves cómo va la cartera | Quien dirige ve la prima vigente mes a mes y la tasa de renovación frente a los 90 días anteriores, sin armar un Excel. | Prima vigente con su curva y tasa de renovación, con los textos de Inicio → Agencia. | `02` §3, Inicio |
| Trabaja como trabaja tu agencia | Cada trabajo del agente es un flujo escrito. Adaptas los de Nexus o escribes los tuyos, y un cambio no rige hasta que una persona lo publica. | «Leer correos», versión vigente 4, con un paso cambiado en borrador. | `02` §3, Flujos |
| Ninguna renovación queda en el aire | Cada póliza por vencer genera su tarea, con responsable y fecha. Se cierra sola cuando la póliza renovada aparece en el registro. | La tarea «Renovar la póliza CU-880412 de …», con responsable y fecha. | `02` §3, Tareas |
| Nada queda firme sin una persona | El agente propone y dice de dónde sacó cada dato. Tu equipo confirma, envía los correos y guarda las claves. | Una póliza «Por confirmar» con la cita de su carátula, y lo que el agente no hace. | `02` §3.2, §3.3 |
| Nada se pierde al cerrar la conversación (ancha) | Lo que tu equipo y tu agente hacen queda en un solo registro de clientes, pólizas y documentos, en el escritorio y en la web. La bitácora guarda cada cambio, quién lo hizo y a petición de quién. | La réplica de la bitácora (`LogEntries`). | `02` §3.3, §4 |
| Las claves, fuera del alcance del agente | Las claves de los portales se cifran en el computador de quien las guarda y se comparten persona por persona. | Dos accesos con la clave oculta. | `02` §3, Accesos |

Salen «Tu equipo deja de digitar pólizas» (lo cuenta la escena, que viene
justo después) y «Cada quien sabe qué hacer hoy» (la cubre la tarjeta de
cartera). Lo que la sección no dice: cifras de ahorro, «el agente
trabaja solo», «automatizaciones», nada de `02` §7.

## Interfaz

- Escenario: `stage-glow` y `stage-grid` detrás del encabezado, como en
  el hero y el cierre (`04` §2.2 se amplía para incluir esta sección).
- Rejilla de tres columnas en `lg`, dos en `md`, una en celular. Los
  correos y el registro ocupan dos columnas.
- Cada beneficio es una tarjeta del escenario (`stage-edge`, `rounded-lg`,
  `bg-card/80 backdrop-blur-xl`) con su título, su línea y una viñeta.
- Las viñetas son escenario, no pantallas de la app: llevan
  `aria-hidden` y el texto de la tarjeta cuenta lo mismo. Usan los textos,
  insignias y colores de estado de la app (`nexus-app` 0.25.0) y los datos
  de ejemplo de `components/app-replica/policies-data.ts`. Las cifras de
  cartera son de ejemplo. La bitácora es la réplica existente.
- Movimiento, uno solo y con CSS: un pulso recorre el camino de cada
  correo a la lista «Por confirmar». Con movimiento reducido, quieto. Sin
  entrada animada (la única de la página es la del hero).
- Sin cambios que llevar a la app: la luz y el cristal ya están en `01` §8.

## Decisiones

Cerradas por el dueño el 2026-10-16: el título, la entradilla y la puesta
en escena. Comprobado el mismo día que `nexus-app` 0.25.0 está publicada
(`latest.yml` de las versiones), con la cabecera de Inicio → Agencia.
