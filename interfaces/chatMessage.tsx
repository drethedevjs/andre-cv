export default interface ChatMessage {
  content: string;
  role: ChatterRole;
}

export type ChatterRole = "system" | "user" | "assistant" | "judge";
