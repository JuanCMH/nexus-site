import { RiAddLine, RiPencilLine, RiRobot2Line } from "@remixicon/react";
import {
  AGENCY,
  PROPOSED_POLICY,
} from "@/components/app-replica/policies-data";
import { Badge } from "@/components/ui/badge";

/**
 * Dos movimientos de la bitácora: el agente crea la póliza y una persona la
 * confirma. Réplica de `nexus-app` 0.19.0 (`packages/logs/components/
 * log-row.tsx` y las descripciones de `convex/policies.ts`).
 */
const ICON_BOX =
  "flex size-8 shrink-0 items-center justify-center rounded-lg border border-transparent bg-muted text-muted-foreground";
const META =
  "mt-1 flex min-h-6 flex-wrap items-center gap-x-1.5 gap-y-1 text-muted-foreground text-xs";

export function LogEntries() {
  return (
    <div
      aria-hidden="true"
      className="app-replica select-none overflow-hidden rounded-xl border bg-card text-left"
    >
      <ol className="divide-y divide-border/60">
        <li className="flex items-start gap-3 px-4 py-3">
          <div className={ICON_BOX}>
            <RiPencilLine className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-snug">
              Confirmó la póliza {PROPOSED_POLICY.policyNumber}
            </p>
            <div className={META}>
              <span>{AGENCY.userName}</span>
              <span>·</span>
              <span className="tabular-nums">
                <span className="text-foreground">11/10/2026 08:47</span>
                {" · "}
                hace 2 minutos
              </span>
              <span>·</span>
              <span>Pólizas</span>
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3 px-4 py-3">
          <div className={ICON_BOX}>
            <RiAddLine className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-snug">
              Creó la póliza {PROPOSED_POLICY.policyNumber} de{" "}
              {PROPOSED_POLICY.clientName}
            </p>
            <div className={META}>
              <span>Agente</span>
              <Badge
                variant="outline"
                className="px-1.5 font-normal text-muted-foreground"
              >
                <RiRobot2Line />
                Agente
              </Badge>
              <span>a petición de {AGENCY.userName}</span>
              <span>·</span>
              <span className="tabular-nums">
                <span className="text-foreground">11/10/2026 08:12</span>
                {" · "}
                hace 37 minutos
              </span>
              <span>·</span>
              <span>Pólizas</span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
