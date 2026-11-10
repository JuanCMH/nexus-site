import type { ManualArticleBody } from "../types";
import * as agentSetup from "./agent-setup";
import * as connectAssistant from "./connect-assistant";
import * as howTheAgentWorks from "./how-the-agent-works";
import * as myAssistant from "./my-assistant";
import * as permissions from "./permissions";
import * as questions from "./questions";
import * as review from "./review";
import * as runs from "./runs";
import * as verification from "./verification";

/** El cuerpo de cada artículo de «agente», por su slug. */
export const AGENT_BODIES: Record<string, ManualArticleBody> = {
  "como-trabaja-el-agente": howTheAgentWorks,
  "conectar-el-asistente": connectAssistant,
  "configuracion-del-agente": agentSetup,
  "mi-asistente": myAssistant,
  "por-confirmar": review,
  "verificacion-y-supervision": verification,
  "dudas-del-agente": questions,
  "permisos-y-solicitudes": permissions,
  ejecuciones: runs,
};
