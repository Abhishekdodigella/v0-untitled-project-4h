import type { Metadata } from "next"
import { PlaygroundInterface } from "@/components/playground/playground-interface"

export const metadata: Metadata = {
  title: "Playground - LLM Playground",
  description: "Experiment with language models in the playground",
}

export default function PlaygroundPage() {
  return (
    <div className="flex-1 p-4 pt-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Playground</h2>
        <p className="text-muted-foreground">Experiment with language models and fine-tune your prompts</p>
      </div>
      <PlaygroundInterface />
    </div>
  )
}
