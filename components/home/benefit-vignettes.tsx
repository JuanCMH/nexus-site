import {
  RiArrowRightUpLine,
  RiCalendarLine,
  RiCheckLine,
  RiCloseLine,
  RiFileTextLine,
  RiLockLine,
  RiMailLine,
  RiMoonLine,
  RiPencilLine,
} from "@remixicon/react";
import type { ReactNode } from "react";
import { LogEntries } from "@/components/app-replica/log-entries";
import {
  AGENCY,
  POLICIES,
  PROPOSED_POLICY,
} from "@/components/app-replica/policies-data";
import { ReviewBadge } from "@/components/app-replica/review-badge";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/*
 * Las viñetas de los beneficios. Son escenario, no pantallas de la app: van
 * con `aria-hidden` y la tarjeta cuenta lo mismo en su texto. Llevan los
 * textos, insignias y colores de estado de `nexus-app` 0.25.0, y los datos
 * de ejemplo de la réplica (docs/directives/01-marca.md §7). El diseño:
 * docs/plans/2026-10-16-landing-beneficios-escenario-design.md.
 */

const DOMAIN = "restrepoasociados.co";
const [RENEWAL_POLICY, CLINIC_POLICY] = POLICIES;

/** La superficie de una viñeta: un bloque de la app, a su tamaño real. */
function Surface({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "app-replica min-w-0 select-none rounded-lg border bg-card text-left text-ui",
        className,
      )}
    >
      {children}
    </div>
  );
}

const MAILBOXES = [
  { name: "Renovaciones", address: `renovaciones@${DOMAIN}` },
  { name: "Cumplimiento", address: `cumplimiento@${DOMAIN}` },
  { name: AGENCY.userName, address: AGENCY.userEmail },
] as const;

const PROPOSALS = [
  { policy: PROPOSED_POLICY, mailbox: "Renovaciones" },
  { policy: RENEWAL_POLICY, mailbox: "Cumplimiento" },
  { policy: CLINIC_POLICY, mailbox: "Renovaciones" },
] as const;

/** Los caminos de cada correo a la lista; el pulso los recorre. */
const WIRES = [
  "M0 22 C 26 22, 22 80, 48 80",
  "M0 80 C 26 80, 22 80, 48 80",
  "M0 138 C 26 138, 22 80, 48 80",
] as const;

export function MailboxesVignette() {
  return (
    <div aria-hidden="true" className="select-none">
      <div className="grid gap-4 md:grid-cols-[minmax(0,0.85fr)_3rem_minmax(0,1.3fr)] md:items-center md:gap-0">
        <ul className="grid gap-2 sm:grid-cols-3 md:grid-cols-1 md:gap-5">
          {MAILBOXES.map((mailbox) => (
            <li
              key={mailbox.address}
              className="app-replica flex min-w-0 items-center gap-2 rounded-md border bg-card px-3 py-2 text-ui"
            >
              <RiMailLine className="size-4 shrink-0 text-nexus-sapphire-text" />
              <span className="min-w-0">
                <span className="block truncate font-medium">
                  {mailbox.name}
                </span>
                <span className="block truncate font-mono text-muted-foreground text-xs">
                  {mailbox.address}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <svg
          aria-hidden="true"
          viewBox="0 0 48 160"
          preserveAspectRatio="none"
          className="hidden h-40 w-12 text-nexus-sapphire md:block"
        >
          {WIRES.map((d) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.25}
              strokeDasharray="3 5"
              opacity={0.45}
            />
          ))}
          {WIRES.map((d, index) => (
            <path
              key={`pulse-${d}`}
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="mail-pulse"
              style={{ animationDelay: `${index * -1.1}s` }}
            />
          ))}
        </svg>
        <Surface>
          <div className="flex items-center justify-between gap-2 border-b px-3 py-2.5">
            <span className="font-medium">Pólizas por confirmar</span>
            <span className="text-muted-foreground text-xs tabular-nums">
              {PROPOSALS.length}
            </span>
          </div>
          <ul className="divide-y divide-border/60">
            {PROPOSALS.map(({ policy, mailbox }) => (
              <li key={policy.policyNumber} className="grid gap-1 px-3 py-2.5">
                <span className="flex min-w-0 items-center justify-between gap-2">
                  <span className="truncate font-medium">
                    {policy.policyNumber} · {policy.clientName}
                  </span>
                  <ReviewBadge />
                </span>
                <span className="flex min-w-0 items-center gap-1.5 text-muted-foreground text-xs">
                  <RiMailLine className="size-3.5 shrink-0" />
                  <span className="truncate">
                    {policy.context} · se encontró en el correo {mailbox}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Surface>
      </div>
      <p className="mt-4 flex items-center gap-2 text-muted-foreground text-sm">
        <RiMoonLine className="size-4" />
        <span className="font-mono tabular-nums">02:14</span>
        Leídos de madrugada, con el computador apagado
      </p>
    </div>
  );
}

/** Una curva que sube con altibajos; las cifras son de ejemplo. */
const PREMIUM_POINTS = [62, 60, 63, 57, 55, 56, 50, 46, 48, 40, 36, 30];

function Sparkline() {
  const step = 254 / (PREMIUM_POINTS.length - 1);
  const points = PREMIUM_POINTS.map((y, i) => `${8 + i * step} ${y}`);
  const line = `M${points.join(" L")}`;
  const [lastX, lastY] = points.at(-1)?.split(" ").map(Number) ?? [0, 0];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 270 80"
      preserveAspectRatio="none"
      className="block h-20 w-full text-nexus-sapphire"
    >
      <defs>
        <linearGradient id="benefit-premium-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity={0.25} />
          <stop offset="1" stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d={`${line} L${lastX} 80 L8 80 Z`}
        fill="url(#benefit-premium-area)"
      />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={lastX} cy={lastY} r={3} fill="currentColor" />
    </svg>
  );
}

function Delta({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-nexus-emerald-text text-xs">
      <RiArrowRightUpLine className="size-3.5 shrink-0" />
      {children}
    </span>
  );
}

export function PortfolioVignette() {
  return (
    <Surface>
      <div className="grid gap-1 px-3 pt-3">
        <span className="text-muted-foreground text-sm">Prima vigente</span>
        <span className="font-medium text-2xl tracking-tight tabular-nums">
          $ 864 M
        </span>
        <Delta>2,1 % frente al cierre de septiembre</Delta>
      </div>
      <Sparkline />
      <div className="grid gap-1 border-t px-3 py-3">
        <span className="text-muted-foreground text-sm">
          Tasa de renovación
        </span>
        <span className="font-medium text-2xl tracking-tight tabular-nums">
          87 %
        </span>
        <Delta>6 puntos más que los 90 días anteriores</Delta>
      </div>
    </Surface>
  );
}

const FLOW_STEPS = [
  { text: "Revisa los correos vinculados desde la última lectura." },
  {
    text: "Las pólizas de cumplimiento no se proponen para renovar.",
    changed: true,
  },
  { text: "Propone la póliza y su cliente, con la página de la carátula." },
] as const;

export function FlowVignette() {
  return (
    <Surface>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2.5">
        <span className="font-medium">Leer correos</span>
        <Badge
          variant="outline"
          className="border-nexus-sapphire/20 bg-nexus-sapphire/10 text-nexus-sapphire-text"
        >
          <RiPencilLine />
          Borrador
        </Badge>
      </div>
      <ol className="grid gap-2 px-3 py-3">
        {FLOW_STEPS.map((step, index) => (
          <li
            key={step.text}
            className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2"
          >
            <span className="text-right font-mono text-muted-foreground text-xs leading-5 tabular-nums">
              {index + 1}
            </span>
            <span
              className={cn(
                "changed" in step &&
                  "-mx-1 rounded-sm bg-nexus-sapphire/10 px-1",
              )}
            >
              {step.text}
            </span>
          </li>
        ))}
      </ol>
      <p className="border-t px-3 py-2.5 text-muted-foreground text-xs">
        Versión vigente: 4
      </p>
    </Surface>
  );
}

export function RenewalVignette() {
  return (
    <Surface className="grid gap-3 p-3">
      <span className="font-medium">
        Renovar la póliza {RENEWAL_POLICY.policyNumber} de{" "}
        {RENEWAL_POLICY.clientName}
      </span>
      <span className="flex flex-wrap gap-x-4 gap-y-1.5 text-muted-foreground text-xs">
        <span className="flex items-center gap-1.5">
          <span className="grid size-5 place-items-center rounded-full bg-nexus-sapphire font-medium text-[0.625rem] text-white">
            {AGENCY.userInitials}
          </span>
          {AGENCY.userName}
        </span>
        <span className="flex items-center gap-1.5 tabular-nums">
          <RiCalendarLine className="size-3.5" />
          Vence el {RENEWAL_POLICY.endDate}
        </span>
      </span>
      <span className="flex items-center gap-2 rounded-md bg-nexus-emerald/10 px-2.5 py-2 text-nexus-emerald-text text-xs">
        <RiCheckLine className="size-4 shrink-0" />
        Se cierra sola cuando aparezca la póliza renovada
      </span>
    </Surface>
  );
}

const AGENT_DOES_NOT = [
  "No envía correos",
  "No confirma lo que propone",
  "No abre la bóveda",
] as const;

export function ConfirmVignette() {
  return (
    <Surface className="grid gap-3 p-3">
      <span className="flex items-center justify-between gap-2">
        <span className="font-medium">{PROPOSED_POLICY.policyNumber}</span>
        <ReviewBadge />
      </span>
      <span className="flex items-start gap-1.5 text-muted-foreground text-xs">
        <RiFileTextLine className="size-3.5 shrink-0" />
        Prima {PROPOSED_POLICY.premium} · Carátula{" "}
        {PROPOSED_POLICY.policyNumber}.pdf, página 1
      </span>
      <span className="flex gap-2">
        <span className="rounded-md bg-primary px-3 py-1.5 font-medium text-primary-foreground text-xs">
          Confirmar
        </span>
        <span className="rounded-md border px-3 py-1.5 font-medium text-xs">
          Descartar
        </span>
      </span>
      <ul className="grid gap-1 border-t pt-3 text-muted-foreground text-xs">
        {AGENT_DOES_NOT.map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <RiCloseLine className="size-3.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </Surface>
  );
}

export function LogVignette() {
  return <LogEntries />;
}

const VAULT_ENTRIES = ["Portal Seguros Bolívar", "Portal SURA"] as const;

export function VaultVignette() {
  return (
    <Surface>
      <ul className="divide-y divide-border/60">
        {VAULT_ENTRIES.map((entry) => (
          <li
            key={entry}
            className="flex items-center justify-between gap-3 px-3 py-2.5"
          >
            <span className="truncate">{entry}</span>
            <span className="font-mono text-muted-foreground tracking-widest">
              ••••••••
            </span>
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-1.5 border-t px-3 py-2.5 text-muted-foreground text-xs">
        <RiLockLine className="size-3.5 shrink-0" />
        Solo abre en un computador de confianza
      </p>
    </Surface>
  );
}
