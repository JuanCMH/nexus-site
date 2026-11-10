import type { ReactNode } from "react";

/** Pasos numerados de un procedimiento: `<Steps>` con varios `<Step>`. */
export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="list-none space-y-6 [counter-reset:step]">{children}</ol>
  );
}

export function Step({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative pl-11 [counter-increment:step]">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 flex size-7 items-center justify-center rounded-md border border-nexus-sapphire/10 bg-nexus-sapphire/10 font-mono text-xs font-medium text-nexus-sapphire-text tabular-nums before:content-[counter(step)]"
      />
      <h3 className="pt-0.5 text-base font-medium tracking-tight">{title}</h3>
      {children ? (
        <div className="mt-2 space-y-3 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </li>
  );
}
