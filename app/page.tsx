import { NexusWordmark } from "@/components/brand/nexus-logo";

// Página provisional del commit inicial: comprueba que la marca, las fuentes
// y los tokens cargan. La landing se diseña siguiendo
// docs/directives/05-reglas-calidad.md §1 y la reemplaza entera.
export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-nexus-midnight px-6 text-center text-white">
      <h1 className="sr-only">Nexus</h1>
      <NexusWordmark className="h-8 w-auto" />
      <p className="max-w-md font-[family-name:var(--font-cormorant)] text-2xl italic text-white/80">
        Control, claridad y calma
      </p>
      <p className="text-sm text-white/60">Sitio en construcción</p>
    </main>
  );
}
