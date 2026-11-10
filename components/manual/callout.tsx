import {
  RiErrorWarningLine,
  RiInformationLine,
  RiLightbulbLine,
} from "@remixicon/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "note" | "tip" | "warning";

/**
 * Cada tipo toma el color de lo que significa (04 §3):
 *
 * - `note`, contexto: zafiro, el acento.
 * - `tip`, una buena práctica: neutro, porque no es un estado.
 * - `warning`, precaución: ámbar, el color de lo que hay que revisar.
 */
const CALLOUT_STYLES: Record<
  CalloutType,
  {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    tone: string;
  }
> = {
  note: {
    icon: RiInformationLine,
    label: "Nota",
    tone: "border-nexus-sapphire/10 bg-nexus-sapphire/10 text-nexus-sapphire-text",
  },
  tip: {
    icon: RiLightbulbLine,
    label: "Consejo",
    tone: "border-border bg-muted text-muted-foreground",
  },
  warning: {
    icon: RiErrorWarningLine,
    label: "Atención",
    tone: "border-nexus-amber/10 bg-nexus-amber/10 text-nexus-amber-text",
  },
};

/** Un llamado de atención dentro de un artículo. */
export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, label, tone } = CALLOUT_STYLES[type];
  return (
    <aside className="flex gap-4 rounded-lg border p-4">
      <div
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-md border",
          tone,
        )}
      >
        <Icon aria-hidden="true" className="size-4" />
      </div>
      <div className="min-w-0 space-y-1 text-sm leading-relaxed">
        <p className="font-medium">{title ?? label}</p>
        <div className="space-y-2 text-muted-foreground">{children}</div>
      </div>
    </aside>
  );
}
