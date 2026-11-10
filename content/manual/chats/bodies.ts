import type { ManualArticleBody } from "../types";
import * as agentInAChat from "./agent-in-a-chat";
import * as chatsAndGroups from "./chats-and-groups";
import * as writeInAChat from "./write-in-a-chat";

/** El cuerpo de cada artículo de «chats», por su slug. */
export const CHATS_BODIES: Record<string, ManualArticleBody> = {
  "chats-y-grupos": chatsAndGroups,
  "escribir-en-un-chat": writeInAChat,
  "el-agente-en-un-chat": agentInAChat,
};
