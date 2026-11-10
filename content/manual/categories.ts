import {
  RiCalculatorLine,
  RiChat3Line,
  RiCompass3Line,
  RiContactsLine,
  RiDashboardLine,
  RiFolder3Line,
  RiMailLine,
  RiRobot2Line,
  RiRocket2Line,
  RiSafe2Line,
  RiSettings3Line,
  RiShieldCheckLine,
  RiTaskLine,
  RiUser3Line,
} from "@remixicon/react";
import type { ManualCategory, ManualCategorySlug } from "./types";

/**
 * Las categorías, en el orden del menú de la app y con sus mismos iconos
 * (`nexus-app` 0.51.0, `app-sidebar.tsx`). Una categoría sin
 * artículos escritos no se enseña: el manual no anuncia lo que todavía no
 * tiene (03 §3.2).
 */
export const MANUAL_CATEGORIES: ManualCategory[] = [
  {
    slug: "primeros-pasos",
    title: "Primeros pasos",
    description:
      "Crear tu cuenta, entrar a tu agencia, conocer la pantalla y mantener protegido tu acceso",
    icon: RiRocket2Line,
  },
  {
    slug: "inicio",
    title: "Inicio",
    description: "Lo que tienes pendiente hoy y el estado de la agencia",
    icon: RiDashboardLine,
  },
  {
    slug: "tareas",
    title: "Tareas",
    description:
      "Los compromisos del equipo, con responsable, fecha límite y un resultado que Nexus comprueba",
    icon: RiTaskLine,
  },
  {
    slug: "correos",
    title: "Correos",
    description:
      "Los correos que redacta el agente, los que escribe el equipo y los correos vinculados",
    icon: RiMailLine,
  },
  {
    slug: "chats",
    title: "Chats",
    description: "Las conversaciones del equipo, de a dos o en grupo",
    icon: RiChat3Line,
  },
  {
    slug: "agente",
    title: "Agente",
    description:
      "Conectar el asistente de la agencia, revisar lo que propone y decidir qué puede hacer",
    icon: RiRobot2Line,
  },
  {
    slug: "clientes",
    title: "Clientes",
    description:
      "La ficha de cada cliente, con sus pólizas, tareas y documentos",
    icon: RiUser3Line,
  },
  {
    slug: "polizas",
    title: "Pólizas",
    description:
      "Cada póliza con su aseguradora, su ramo y su vigencia, de la emisión a la renovación",
    icon: RiShieldCheckLine,
  },
  {
    slug: "cotizaciones-de-cumplimiento",
    title: "Cotizaciones de cumplimiento",
    description: "Cotizar pólizas de cumplimiento y de seriedad de la oferta",
    icon: RiCalculatorLine,
  },
  {
    slug: "documentos",
    title: "Documentos",
    description: "Los archivos de la agencia, ligados a su cliente o póliza",
    icon: RiFolder3Line,
  },
  {
    slug: "directrices",
    title: "Directrices",
    description:
      "Los flujos, los criterios, el reparto y las referencias que sigue el agente",
    icon: RiCompass3Line,
  },
  {
    slug: "contactos",
    title: "Contactos",
    description:
      "Las personas de cada aseguradora y de cada empresa con la que trabaja la agencia",
    icon: RiContactsLine,
  },
  {
    slug: "accesos",
    title: "Accesos",
    description:
      "La bóveda: las claves de portales, correos y aseguradoras, cifradas",
    icon: RiSafe2Line,
  },
  {
    slug: "configuracion",
    title: "Configuración",
    description:
      "La agencia, el equipo, los catálogos, las plantillas y tu cuenta",
    icon: RiSettings3Line,
  },
];

export function getManualCategory(slug: string): ManualCategory | undefined {
  return MANUAL_CATEGORIES.find((category) => category.slug === slug);
}

export function isManualCategorySlug(slug: string): slug is ManualCategorySlug {
  return MANUAL_CATEGORIES.some((category) => category.slug === slug);
}
