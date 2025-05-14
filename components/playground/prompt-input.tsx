"use client"

import { Textarea } from "@/components/ui/textarea"

interface PromptInputProps {
  prompt: string
  setPrompt: (prompt: string) => void
}

export function PromptInput({ prompt, setPrompt }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <Textarea
        placeholder="Enter your prompt here..."
        className="min-h-[200px] resize-y"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  )
}
