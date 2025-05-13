export type WritingStyle = "professional" | "casual" | "creative" | "technical" | "persuasive" | "academic"

export const writingStyleOptions = [
  {
    value: "professional",
    label: "Professional",
    description: "Clear, concise, and business-appropriate language",
  },
  {
    value: "casual",
    label: "Casual",
    description: "Relaxed, conversational tone with everyday language",
  },
  {
    value: "creative",
    label: "Creative",
    description: "Imaginative, expressive, and engaging content",
  },
  {
    value: "technical",
    label: "Technical",
    description: "Precise, detailed explanations with domain-specific terminology",
  },
  {
    value: "persuasive",
    label: "Persuasive",
    description: "Compelling arguments designed to influence the reader",
  },
  {
    value: "academic",
    label: "Academic",
    description: "Formal, scholarly writing with proper citations and structure",
  },
]

export interface GenerationResult {
  text: string
}
