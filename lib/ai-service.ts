"use server"

import { generateText as aiGenerateText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { WritingStyle } from "./types"

export async function generateText(prompt: string, style: WritingStyle): Promise<string> {
  try {
    // Create a system prompt based on the selected writing style
    const systemPrompt = getSystemPromptForStyle(style)

    // Generate text using the AI SDK
    const response = await aiGenerateText({
      model: openai("gpt-4o"),
      prompt: prompt,
      system: systemPrompt,
      temperature: getTemperatureForStyle(style),
      maxTokens: 1000,
    })

    return response.text
  } catch (error) {
    console.error("Error generating text:", error)
    throw new Error("Failed to generate text. Please try again later.")
  }
}

function getSystemPromptForStyle(style: WritingStyle): string {
  switch (style) {
    case "professional":
      return "You are a professional writer creating business content. Write in a clear, concise, and formal manner appropriate for professional settings. Use industry-standard terminology without jargon. Maintain a respectful and authoritative tone."

    case "casual":
      return "You are writing in a casual, conversational style. Use everyday language, contractions, and a friendly tone. Feel free to include some humor where appropriate. Write as if you're having a conversation with a friend."

    case "creative":
      return "You are a creative writer with a vivid imagination. Use descriptive language, metaphors, and engaging storytelling techniques. Be expressive and evoke emotions through your writing. Feel free to be original and think outside the box."

    case "technical":
      return "You are writing technical content that requires precision and clarity. Use domain-specific terminology appropriately. Focus on accuracy, detail, and logical structure. Include relevant technical details and explain complex concepts clearly."

    case "persuasive":
      return "You are writing persuasive content designed to influence the reader. Use compelling arguments, rhetorical questions, and emotional appeals. Address potential counterarguments. Include a clear call to action and emphasize benefits."

    case "academic":
      return "You are writing scholarly content for an academic audience. Use formal language, third-person perspective, and proper citations. Structure your writing logically with clear arguments supported by evidence. Avoid colloquialisms and maintain an objective tone."

    default:
      return "You are a helpful assistant providing informative and well-structured content based on the user's request."
  }
}

function getTemperatureForStyle(style: WritingStyle): number {
  switch (style) {
    case "creative":
      return 0.8 // Higher temperature for more creativity
    case "technical":
    case "academic":
      return 0.3 // Lower temperature for more precision
    case "professional":
      return 0.4
    case "persuasive":
      return 0.6
    case "casual":
      return 0.7
    default:
      return 0.5
  }
}
