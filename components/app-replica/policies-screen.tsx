"use client";

import {
  RiAlarmLine,
  RiCheckDoubleLine,
  RiCheckLine,
  RiLayoutLeftLine,
  RiSearchLine,
  RiShieldLine,
  RiUploadLine,
} from "@remixicon/react";
import { AnimatePresence, motion } from "motion/react";
import { AppWindow } from "@/components/app-replica/app-window";
import {
  POLICIES,
  type PolicyRow,
  type PolicyStatus,
  PROPOSED_POLICY,
} from "@/components/app-replica/policies-data";
import { ReviewBadge } from "@/components/app-replica/review-badge";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * El listado de Pólizas en cuatro momentos: antes de la propuesta, con la
 * póliza «Por confirmar», con ella seleccionada para confirmar, y ya
 * confirmada.
 *
 * Réplica de `nexus-app` 0.19.0 (`packages/policies/components/
 * policies-view.tsx`, `entities/components/{policy-status-badge,
 * review-badge}.tsx`, `nexus/bulk-confirm.tsx`): mismas columnas, clases,
 * insignias y textos. Recortes respecto a la app, por el ancho: no se pintan
 * los filtros de la barra, y por debajo de 32rem se quita la columna Cliente.
 */
export type PoliciesStage = "base" | "proposed" | "selected" | "confirmed";

const STATUS_TONE: Record<PolicyStatus, string> = {
  active: "border-nexus-emerald/20 bg-nexus-emerald/10 text-nexus-emerald-text",
  pending:
    "border-nexus-sapphire/20 bg-nexus-sapphire/10 text-nexus-sapphire-text",
  expired: "border-destructive/20 bg-destructive/10 text-destructive-text",
};

const STATUS_LABEL: Record<PolicyStatus, string> = {
  active: "Vigente",
  pending: "Por iniciar",
  expired: "Vencida",
};

const TH =
  "h-9 px-3 text-left align-middle font-normal text-muted-foreground text-ui whitespace-nowrap @max-4xl/list:px-2";
const TD =
  "h-14 px-3 py-2 align-middle whitespace-nowrap @max-4xl/list:h-16 @max-4xl/list:px-2";
const CLIENT_COLUMN = "hidden @lg/list:table-cell";
const END_COLUMN = "hidden @md/list:table-cell";
const PREMIUM_COLUMN = "hidden @4xl/list:table-cell";
const REVIEW_COLUMN = "hidden @4xl/list:table-cell";

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        "grid size-4 shrink-0 place-content-center rounded-[4px] border border-input shadow-xs dark:bg-input/30",
        checked && "border-primary bg-primary text-primary-foreground",
      )}
    >
      {checked ? <RiCheckLine className="size-3.5" /> : null}
    </span>
  );
}

function Row({
  policy,
  proposed,
  selectable,
  selected,
}: {
  policy: PolicyRow;
  proposed: boolean;
  selectable: boolean;
  selected: boolean;
}) {
  const review = proposed ? <ReviewBadge /> : null;
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-border/60 border-b last:border-0"
    >
      {selectable ? (
        <td className={TD}>
          {proposed ? <Checkbox checked={selected} /> : null}
        </td>
      ) : null}
      <td className={cn(TD, "overflow-hidden")}>
        <span className="block whitespace-normal break-words font-medium font-mono">
          {policy.policyNumber}
        </span>
        <span className="block truncate text-muted-foreground text-xs">
          {policy.context}
        </span>
      </td>
      <td className={cn(TD, "overflow-hidden", CLIENT_COLUMN)}>
        <span className="line-clamp-2 whitespace-normal">
          {policy.clientName}
        </span>
      </td>
      <td className={TD}>
        <span className="flex flex-wrap items-center gap-1">
          <Badge variant="outline" className={STATUS_TONE[policy.status]}>
            {STATUS_LABEL[policy.status]}
          </Badge>
        </span>
        {review ? (
          <span className="mt-1 flex @4xl/list:hidden">{review}</span>
        ) : null}
      </td>
      <td className={cn(TD, END_COLUMN)}>
        <span className="flex flex-col items-start">
          <span className="tabular-nums">{policy.endDate}</span>
          {policy.expiresInDays ? (
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-sm font-medium text-nexus-amber-text text-xs tabular-nums">
              <RiAlarmLine className="size-3 shrink-0" />
              {policy.expiresInDays} días
            </span>
          ) : null}
        </span>
      </td>
      <td className={cn(TD, "overflow-hidden tabular-nums", PREMIUM_COLUMN)}>
        {policy.premium}
      </td>
      <td className={cn(TD, REVIEW_COLUMN)}>{review}</td>
    </motion.tr>
  );
}

export function PoliciesScreen({ stage }: { stage: PoliciesStage }) {
  const hasNew = stage !== "base";
  const proposed = stage === "proposed" || stage === "selected";
  const selected = stage === "selected";
  const rows = hasNew ? [PROPOSED_POLICY, ...POLICIES] : POLICIES;

  return (
    <AppWindow active="Pólizas">
      <div className="z-10 flex h-12 shrink-0 items-center border-b bg-background p-2">
        <div className="flex w-full min-w-0 items-center gap-2 px-2">
          <span className="flex size-7 items-center justify-center">
            <RiLayoutLeftLine className="size-4" />
          </span>
          <span className="min-w-0 flex-1 font-normal text-foreground text-sm">
            Pólizas
          </span>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <span className="hidden h-8 items-center gap-1.5 rounded-md border bg-background px-2.5 font-medium text-sm shadow-xs @md/window:inline-flex dark:border-input dark:bg-input/30">
              <RiUploadLine className="size-4" />
              Importar
            </span>
            <span className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-2.5 font-medium text-primary-foreground text-sm">
              <RiShieldLine className="size-4" />
              Nueva póliza
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-x-clip p-2">
        {/* En la app esta barra salta de línea al seleccionar; en la réplica,
            más estrecha, la búsqueda se encoge para que la tabla no se mueva
            con el scroll (CLS). */}
        <div className="flex min-h-9 items-center gap-2">
          <div className="relative hidden w-72 min-w-0 max-w-72 grow basis-60 @2xl/window:block">
            <RiSearchLine className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <span className="flex h-9 w-full min-w-0 items-center rounded-md border border-input bg-transparent py-1 pr-3 pl-8 text-muted-foreground text-sm shadow-xs dark:bg-input/30">
              <span className="truncate">Número, cliente o identificación</span>
            </span>
          </div>
          {selected ? (
            <div className="ml-auto flex items-center gap-2">
              <span className="whitespace-nowrap text-muted-foreground text-ui tabular-nums">
                1 póliza seleccionada
              </span>
              <span className="hidden h-8 items-center rounded-md px-3 font-medium text-sm @lg/window:inline-flex">
                Cancelar
              </span>
              <span className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-2.5 font-medium text-primary-foreground text-sm">
                <RiCheckDoubleLine className="size-4" />
                Confirmar
              </span>
            </div>
          ) : (
            <div className="ml-auto flex shrink-0 items-center gap-2 pr-2">
              <span className="text-muted-foreground text-ui tabular-nums">
                {rows.length} pólizas
              </span>
            </div>
          )}
        </div>

        <div className="@container/list overflow-hidden rounded-lg border bg-card">
          <table className="w-full table-fixed caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-border/60 border-b">
                {proposed ? (
                  <th className={cn(TH, "w-10")}>
                    <Checkbox checked={selected} />
                  </th>
                ) : null}
                <th className={cn(TH, "@4xl/list:w-[20%]")}>Póliza</th>
                <th className={cn(TH, CLIENT_COLUMN)}>Cliente</th>
                <th className={cn(TH, "w-31 @4xl/list:w-28")}>Estado</th>
                <th className={cn(TH, "w-24 @4xl/list:w-32", END_COLUMN)}>
                  Fin de vigencia
                </th>
                <th className={cn(TH, "w-32", PREMIUM_COLUMN)}>Prima</th>
                <th className={cn(TH, "w-34", REVIEW_COLUMN)}>Revisión</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {rows.map((policy) => (
                  <Row
                    key={policy.policyNumber}
                    policy={policy}
                    proposed={proposed && policy === PROPOSED_POLICY}
                    selectable={proposed}
                    selected={selected}
                  />
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </AppWindow>
  );
}
