/**
 * Datos de ejemplo de la réplica del listado de pólizas. Inventados y
 * creíbles (docs/directives/01-marca.md §7): ninguno es de una agencia real.
 * La fecha de «hoy» de la escena es el 11/10/2026.
 */
export type PolicyStatus = "active" | "pending" | "expired";

export type PolicyRow = {
  policyNumber: string;
  /** «ramo · aseguradora», como lo compone la app. */
  context: string;
  clientName: string;
  status: PolicyStatus;
  endDate: string;
  /** Días que faltan, solo si está vigente y dentro del plazo de aviso. */
  expiresInDays?: number;
  premium: string;
};

/** La póliza que el agente propone en la escena. */
export const PROPOSED_POLICY: PolicyRow = {
  policyNumber: "AU-2291047",
  context: "Autos · Seguros Bolívar",
  clientName: "Transportes Andinos S.A.S.",
  status: "active",
  endDate: "01/10/2027",
  premium: "$ 4.850.000",
};

export const POLICIES: readonly PolicyRow[] = [
  {
    policyNumber: "CU-880412",
    context: "Cumplimiento · Seguros del Estado",
    clientName: "Constructora Altos del Poblado S.A.S.",
    status: "active",
    endDate: "30/10/2026",
    expiresInDays: 19,
    premium: "$ 1.264.000",
  },
  {
    policyNumber: "VG-104233",
    context: "Vida grupo · SURA",
    clientName: "Clínica Santa Lucía S.A.",
    status: "active",
    endDate: "15/03/2027",
    premium: "$ 18.300.000",
  },
  {
    policyNumber: "RC-557120",
    context: "Responsabilidad civil · Allianz",
    clientName: "Jorge Iván Múnera Giraldo",
    status: "pending",
    endDate: "01/11/2027",
    premium: "$ 2.190.000",
  },
  {
    policyNumber: "HO-310988",
    context: "Hogar · Seguros Bolívar",
    clientName: "María Fernanda Ospina Rey",
    status: "expired",
    endDate: "28/09/2026",
    premium: "$ 760.000",
  },
  {
    policyNumber: "AU-2274630",
    context: "Autos · SURA",
    clientName: "Distribuidora El Roble Ltda.",
    status: "active",
    endDate: "22/06/2027",
    premium: "$ 3.415.000",
  },
];

export const AGENCY = {
  name: "Restrepo & Asociados",
  roleName: "Propietario",
  userName: "Marcela Restrepo",
  userEmail: "marcela@restrepoasociados.co",
  userInitials: "MR",
} as const;
