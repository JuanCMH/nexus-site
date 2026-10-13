import {
  RiBuilding2Line,
  RiCalculatorLine,
  RiDashboardLine,
  RiFileList3Line,
  RiFlowChart,
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

type Module = {
  name: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Las catorce entradas del menú de la app, con sus nombres y sus iconos
// (nexus-app 0.22.0, `components/layout/app-sidebar.tsx`), agrupadas por lo
// que significan para la agencia. Lo que se dice de cada una sale de
// docs/directives/02-producto.md §3.
const GROUPS: readonly {
  title: string;
  detail: string;
  modules: readonly Module[];
}[] = [
  {
    title: "La cartera",
    detail: "Lo que la agencia tiene y lo que le vence.",
    modules: [
      {
        name: "Clientes",
        detail:
          "La ficha de cada cliente, con sus pólizas, sus documentos y sus tareas. Se cargan desde Excel, con validación fila por fila.",
        icon: RiUser3Line,
      },
      {
        name: "Pólizas",
        detail:
          "Aseguradora, ramo y vigencia. El estado sale de las fechas, y toda póliza que se renueva termina renovada, reemplazada o con su nota.",
        icon: RiShieldCheckLine,
      },
      {
        name: "Cumplimiento",
        detail:
          "Cotizaciones de cumplimiento y de seriedad de la oferta: un contrato y sus amparos, en PDF y Excel con el logo de tu agencia.",
        icon: RiCalculatorLine,
      },
      {
        name: "Documentos",
        detail:
          "Los archivos de la agencia, ligados a su cliente o a su póliza. En Windows, además, una copia en una carpeta de tu computador.",
        icon: RiFolder3Line,
      },
    ],
  },
  {
    title: "El trabajo de cada día",
    detail: "Quién hace qué, para cuándo y cómo.",
    modules: [
      {
        name: "Inicio",
        detail:
          "«Mi día»: lo que tiene pendiente quien entra. «Agencia»: la cartera y el equipo, para quien dirige.",
        icon: RiDashboardLine,
      },
      {
        name: "Tareas",
        detail:
          "Compromisos con responsable y fecha límite, que se cierran solos cuando el resultado aparece. Quién lleva qué se escribe en frases.",
        icon: RiTaskLine,
      },
      {
        name: "Flujos",
        detail:
          "Cómo se hace cada trabajo, paso a paso y por escrito. Es lo que sigue tu agente, y lo adaptas a tu agencia.",
        icon: RiFlowChart,
      },
      {
        name: "Agente",
        detail:
          "La conexión de tu Claude, los correos vinculados que lee y los correos que redactó y esperan a que alguien los envíe.",
        icon: RiRobot2Line,
      },
    ],
  },
  {
    title: "La agencia por dentro",
    detail: "Lo que la sostiene: accesos, personas y reglas.",
    modules: [
      {
        name: "Accesos",
        detail:
          "La bóveda: las claves de portales y aseguradoras, cifradas y compartidas persona por persona.",
        icon: RiSafe2Line,
      },
      {
        name: "Equipo",
        detail:
          "Cada persona con su rol, armado permiso por permiso. Se entra con una invitación de un solo uso.",
        icon: RiTeamLine,
      },
      {
        name: "Plantillas",
        detail:
          "Tus formularios de cliente y de póliza, con 14 tipos de campo, campos calculados y fechas con seguimiento.",
        icon: RiFileList3Line,
      },
      {
        name: "Catálogos",
        detail:
          "Tus aseguradoras y tus ramos. El catálogo de Colombia viene listo para cargar.",
        icon: RiLayoutGridLine,
      },
      {
        name: "Bitácora",
        detail:
          "Quién hizo qué y cuándo, qué dato cambió y qué decía antes. También lo que hizo el agente.",
        icon: RiHistoryLine,
      },
      {
        name: "Agencia",
        detail:
          "Los datos, el logo y el color de tu agencia, que salen en la cotización que exportas.",
        icon: RiBuilding2Line,
      },
    ],
  },
];

export function ModulesSection() {
  return (
    <section
      id="modulos"
      aria-labelledby="modulos-titulo"
      className="scroll-mt-14 border-t"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="modulos-titulo"
            className="text-2xl font-medium tracking-tight text-balance md:text-4xl"
          >
            La cartera, el trabajo y la agencia por dentro
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Nexus no es solo un listado de pólizas. Es el menú completo de la
            app, con los nombres que vas a ver al abrirla.
          </p>
        </div>

        <div className="mt-10 border-t border-border/60 md:mt-12">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="grid gap-6 border-b border-border/60 py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium tracking-tight md:text-xl">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {group.detail}
                </p>
              </div>
              <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 md:col-span-9">
                {group.modules.map((module) => (
                  <li key={module.name} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-nexus-sapphire/10 bg-nexus-sapphire/10 text-nexus-sapphire-text">
                      <module.icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <h4 className="font-medium">{module.name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {module.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
