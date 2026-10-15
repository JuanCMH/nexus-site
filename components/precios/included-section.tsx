import { RiCheckLine } from "@remixicon/react";

// Todo está en docs/directives/02-producto.md §3 y §4.
const INCLUDED = [
  "Clientes, pólizas, documentos, tareas y flujos",
  "El agente, conectado con el Claude de tu agencia",
  "Flujos que tu agencia adapta a su forma de trabajar",
  "Cotizaciones de cumplimiento con el logo y los datos de tu agencia",
  "La bóveda de accesos",
  "Roles, permisos y bitácora",
  "Importar clientes y pólizas desde Excel",
  "Nexus para escritorio, en Windows, y Nexus en la web",
] as const;

export function IncludedSection() {
  return (
    <section aria-labelledby="incluido-titulo" className="border-t">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="incluido-titulo"
          className="max-w-3xl text-2xl font-medium tracking-tight text-balance md:text-4xl"
        >
          Todo Nexus, en todos los planes
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Los planes cambian de tamaño, no de funciones. No hay módulos que se
          compren aparte.
        </p>
        <ul className="mt-10 grid gap-x-8 gap-y-4 md:mt-12 md:grid-cols-2">
          {INCLUDED.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <RiCheckLine
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-muted-foreground"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
