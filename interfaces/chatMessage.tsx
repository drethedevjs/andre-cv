export default interface ChatMessage {
  text: string;
  dateTime: Date;
  sender: "bot" | "user";
}
