import {
  RiArrowDownSLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBuilding2Line,
  RiCalculatorLine,
  RiDashboardLine,
  RiExpandUpDownLine,
  RiFileList3Line,
  RiFolder3Line,
  RiHistoryLine,
  RiLayoutGridLine,
  RiRobot2Line,
  RiSafe2Line,
  RiShieldCheckLine,
  RiTaskLine,
  RiTeamLine,
  RiUser3Line,
} from "@remixicon/react";
import { AGENCY } from "@/components/app-replica/policies-data";
import { NexusIcon } from "@/components/brand/nexus-logo";

/**
 * El marco de la app: franja de ventana, menú lateral y panel de contenido.
 * Réplica de `nexus-app` 0.19.0 (`components/layout/app-sidebar.tsx`,
 * `title-bar.tsx`, `ui/sidebar.tsx`): mismas entradas, iconos y clases.
 * No es interactiva: es una imagen de la app hecha en código.
 */
type Icon = React.ComponentType<{ className?: string }>;

const OPERATION: readonly { label: string; icon: Icon }[] = [
  { label: "Inicio", icon: RiDashboardLine },
  { label: "Tareas", icon: RiTaskLine },
  { label: "Clientes", icon: RiUser3Line },
  { label: "Pólizas", icon: RiShieldCheckLine },
  { label: "Cotizaciones de cumplimiento", icon: RiCalculatorLine },
  { label: "Documentos", icon: RiFolder3Line },
  { label: "Accesos", icon: RiSafe2Line },
];

const SETTINGS: readonly { label: string; icon: Icon }[] = [
  { label: "Agencia", icon: RiBuilding2Line },
  { label: "Catálogos", icon: RiLayoutGridLine },
  { label: "Plantillas", icon: RiFileList3Line },
  { label: "Equipo", icon: RiTeamLine },
  { label: "Agente", icon: RiRobot2Line },
  { label: "Bitácora", icon: RiHistoryLine },
];

function MenuItem({
  label,
  icon: ItemIcon,
  active,
}: {
  label: string;
  icon: Icon;
  active: boolean;
}) {
  return (
    <li
      data-active={active}
      className="flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left font-normal text-muted-foreground text-ui data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-foreground"
    >
      <ItemIcon className="size-4 shrink-0" />
      <span className="truncate">{label}</span>
    </li>
  );
}

export function AppWindow({
  active,
  children,
}: {
  /** La entrada del menú que está abierta. */
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="app-replica @container/window flex select-none flex-col overflow-hidden rounded-xl bg-sidebar text-left text-foreground"
    >
      <div className="relative flex h-9 shrink-0 items-center bg-sidebar text-sidebar-foreground">
        <div className="relative z-10 flex items-center gap-1 px-2 text-muted-foreground">
          <span className="flex size-7 items-center justify-center">
            <RiArrowLeftLine className="size-4" />
          </span>
          <span className="flex size-7 items-center justify-center opacity-50">
            <RiArrowRightLine className="size-4" />
          </span>
        </div>
        <span className="pointer-events-none absolute inset-x-0 text-center font-medium text-muted-foreground text-xs">
          Nexus
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="hidden w-64 shrink-0 flex-col bg-sidebar pl-2 pb-2 @3xl/window:flex">
          <div className="flex flex-col gap-2 p-2">
            <div className="flex h-12 w-full items-center gap-2 rounded-md p-2 text-left text-sm">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-foreground">
                <NexusIcon className="size-1/2 fill-background" />
              </div>
              <div className="grid min-w-0 flex-1 text-left leading-tight">
                <span className="truncate font-semibold text-sm">
                  {AGENCY.name}
                </span>
                <span className="truncate text-muted-foreground text-xs">
                  {AGENCY.roleName}
                </span>
              </div>
              <RiExpandUpDownLine className="ml-auto size-4 text-muted-foreground" />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="relative flex w-full min-w-0 flex-col p-2">
              <div className="flex h-8 shrink-0 items-center rounded-md px-2 font-normal text-muted-foreground/70 text-xs">
                Operación
              </div>
              <ul className="flex w-full min-w-0 flex-col gap-1">
                {OPERATION.map((item) => (
                  <MenuItem
                    key={item.label}
                    {...item}
                    active={item.label === active}
                  />
                ))}
              </ul>
            </div>
            <div className="relative flex w-full min-w-0 flex-col p-2">
              <div className="flex h-8 w-full shrink-0 items-center justify-between rounded-md px-2 font-normal text-muted-foreground/70 text-xs">
                Configuración
                <RiArrowDownSLine className="size-4" />
              </div>
              <ul className="flex w-full min-w-0 flex-col gap-1">
                {SETTINGS.map((item) => (
                  <MenuItem
                    key={item.label}
                    {...item}
                    active={item.label === active}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-2">
            <div className="flex h-12 w-full items-center gap-2 rounded-md p-2 text-left text-sm">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-nexus-sapphire/10 font-medium text-nexus-sapphire-text text-xs">
                {AGENCY.userInitials}
              </span>
              <div className="grid min-w-0 flex-1 text-left leading-tight">
                <span className="truncate font-semibold text-sm">
                  {AGENCY.userName}
                </span>
                <span className="truncate text-muted-foreground text-xs">
                  {AGENCY.userEmail}
                </span>
              </div>
              <RiExpandUpDownLine className="ml-auto size-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="relative z-0 m-2 mt-0 flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl bg-background shadow-sm @3xl/window:ml-0">
          {children}
        </div>
      </div>
    </div>
  );
}
