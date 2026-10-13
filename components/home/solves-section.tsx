// Cada fila es una situación de una agencia que lleva su cartera en Excel y
// correo (docs/directives/02-producto.md §5) y lo que Nexus hace con ella
// (§3, §3.1 y §3.2). El orden es el del peso que tiene para quien dirige.
const SOLVES: readonly { today: string; withNexus: string }[] = [
  {
    today: "La renovación depende de que alguien se acuerde",
    withNexus:
      "Cada póliza por vencer tiene una tarea de renovación, con responsable y fecha límite. La tarea se cierra sola cuando la póliza renovada aparece en el registro, y toda póliza de un ramo que se renueva termina renovada, reemplazada o con la nota de por qué no.",
  },
  {
    today: "Cada póliza se digita a mano desde un PDF",
    withNexus:
      "Tu agente lee los correos vinculados y las carátulas, y propone la póliza y su cliente. Tú revisas y confirmas. Puede hacerlo de madrugada, sin un computador encendido.",
  },
  {
    today: "La cartera vive en un Excel que cada quien llena a su manera",
    withNexus:
      "Armas tus formularios de cliente y de póliza con los campos que tu agencia ya usa, y cargas tus clientes y tus pólizas desde Excel, con validación fila por fila. El agente puede proponer la plantilla a partir de tus Excel.",
  },
  {
    today: "Para saber qué vence este mes hay que revisar todo",
    withNexus:
      "El estado de una póliza no se escribe: sale de sus fechas. En Inicio ves lo que tienes pendiente hoy, y quien dirige ve la cartera y el equipo. Al agente le puedes preguntar «¿qué vence este mes?».",
  },
  {
    today: "Las claves de los portales circulan por chat",
    withNexus:
      "Van a la bóveda: cifradas en tu computador, compartidas persona por persona y con cada uso anotado en la bitácora.",
  },
  {
    today: "Los correos a los clientes se escriben uno por uno",
    withNexus:
      "El agente redacta el correo y lo deja «Por enviar». Lo lee y lo envía una persona de tu equipo.",
  },
];

export function SolvesSection() {
  return (
    <section
      id="que-resuelve"
      aria-labelledby="que-resuelve-titulo"
      className="scroll-mt-14"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="que-resuelve-titulo"
            className="text-2xl font-medium tracking-tight text-balance md:text-4xl"
          >
            Lo que deja de depender de la memoria y del Excel
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Así se lleva hoy una agencia pequeña, y así queda en Nexus.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mt-10 hidden grid-cols-12 gap-8 text-sm md:mt-12 md:grid"
        >
          <p className="col-span-5 text-muted-foreground">Hoy</p>
          <p className="col-span-7 font-medium text-nexus-sapphire-text">
            Con Nexus
          </p>
        </div>
        <ul className="mt-10 divide-y divide-border/60 border-y border-border/60 md:mt-3">
          {SOLVES.map((solve) => (
            <li
              key={solve.today}
              className="grid gap-2 py-6 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-lg font-medium tracking-tight text-balance md:col-span-5 md:text-xl">
                {solve.today}
              </h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-7">
                {solve.withNexus}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
