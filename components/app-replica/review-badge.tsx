import { RiEyeLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";

/**
 * La insignia de toda propuesta del agente. Réplica de `nexus-app`
 * (`entities/components/review-badge.tsx`).
 */
export function ReviewBadge() {
  return (
    <Badge
      variant="outline"
      className="gap-1 border-nexus-amber/20 bg-nexus-amber/10 text-nexus-amber-text"
    >
      <RiEyeLine className="size-3" />
      Por confirmar
    </Badge>
  );
}
