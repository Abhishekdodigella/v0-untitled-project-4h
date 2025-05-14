"use client"

interface PromptTemplatesProps {
  setPrompt: (prompt: string) => void
}

export function PromptTemplates({ setPrompt }: PromptTemplatesProps) {
  const templates = [
    {
      id: 1,
      name: "Explain a Concept",
      prompt: "Explain [concept] in simple terms as if you were teaching it to a beginner.",
    },
    {
      id: 2,
      name: "Code Generation",
      prompt: "Write a [language] function that [functionality]. Include comments and error handling.",
    },
    {
      id: 3,
      name: "Compare and Contrast",
      prompt: "Compare and contrast [topic A] and [topic B]. Include similarities, differences, and use cases.",
    },
    {
      id: 4,
      name: "Step-by-Step Guide",
      prompt: "Provide a step-by-step guide on how to [task]. Include any prerequisites and potential challenges.",
    },
    {
      id: 5,
      name: "Pros and Cons Analysis",
      prompt: "List the pros and cons of [subject]. Consider factors like cost, efficiency, and scalability.",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Prompt Templates</h3>
      <div className="space-y-2">
        {templates.map((template) => (
          <div
            key={template.id}
            className="cursor-pointer rounded-md border p-3 hover:bg-muted transition-colors"
            onClick={() => setPrompt(template.prompt)}
          >
            <p className="font-medium text-sm">{template.name}</p>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{template.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
