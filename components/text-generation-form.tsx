"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import StyleSelector from "@/components/style-selector"
import type { WritingStyle } from "@/lib/types"
import { Loader2 } from "lucide-react"

interface TextGenerationFormProps {
  onGenerate: (prompt: string, style: WritingStyle) => void
  isGenerating: boolean
}

export default function TextGenerationForm({ onGenerate, isGenerating }: TextGenerationFormProps) {
  const [prompt, setPrompt] = useState("")
  const [selectedStyle, setSelectedStyle] = useState<WritingStyle>("professional")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate(prompt, selectedStyle)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="prompt">What would you like to generate?</Label>
        <Textarea
          id="prompt"
          placeholder="Enter your prompt here... (e.g., 'Write a product description for a new smartphone')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[150px] resize-y"
          disabled={isGenerating}
          required
        />
      </div>

      <StyleSelector selectedStyle={selectedStyle} onStyleChange={setSelectedStyle} disabled={isGenerating} />

      <Button type="submit" className="w-full" disabled={isGenerating || !prompt.trim()}>
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Text"
        )}
      </Button>
    </form>
  )
}
