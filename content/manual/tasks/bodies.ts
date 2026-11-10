import type { ManualArticleBody } from "../types";
import * as closeTask from "./close-task";
import * as createTask from "./create-task";
import * as deadlinesAndAutomaticTasks from "./deadlines-and-automatic-tasks";
import * as delegateToAgent from "./delegate-to-agent";
import * as recurringTasks from "./recurring-tasks";
import * as reviewTasks from "./review-tasks";
import * as whatIsATask from "./what-is-a-task";
import * as workATask from "./work-a-task";
import * as yourTasks from "./your-tasks";

/** El cuerpo de cada artículo de «tareas», por su slug. */
export const TASKS_BODIES: Record<string, ManualArticleBody> = {
  "que-es-una-tarea": whatIsATask,
  "tus-tareas": yourTasks,
  "crear-una-tarea": createTask,
  "trabajar-una-tarea": workATask,
  "delegar-al-agente": delegateToAgent,
  "cerrar-una-tarea": closeTask,
  "tareas-recurrentes": recurringTasks,
  "revisar-tareas": reviewTasks,
  "plazos-y-tareas-automaticas": deadlinesAndAutomaticTasks,
};
