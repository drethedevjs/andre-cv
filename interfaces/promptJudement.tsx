export default interface PromptJudgement {
  isRelevant: boolean;
  reason: string;
  suggestions: string[];
}
