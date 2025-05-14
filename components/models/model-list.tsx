import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function ModelList() {
  const models = [
    {
      id: "gpt-4",
      name: "GPT-4",
      provider: "OpenAI",
      type: "Text Generation",
      enabled: true,
    },
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      provider: "OpenAI",
      type: "Text Generation",
      enabled: true,
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      provider: "Anthropic",
      type: "Text Generation",
      enabled: true,
    },
    {
      id: "claude-3-sonnet",
      name: "Claude 3 Sonnet",
      provider: "Anthropic",
      type: "Text Generation",
      enabled: true,
    },
    {
      id: "gemini-pro",
      name: "Gemini Pro",
      provider: "Google",
      type: "Multimodal",
      enabled: false,
    },
    {
      id: "llama-3-70b",
      name: "Llama 3 (70B)",
      provider: "Meta",
      type: "Text Generation",
      enabled: false,
    },
    {
      id: "mistral-large",
      name: "Mistral Large",
      provider: "Mistral AI",
      type: "Text Generation",
      enabled: false,
    },
    {
      id: "command-r",
      name: "Command R",
      provider: "Cohere",
      type: "Text Generation",
      enabled: false,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium bg-muted">
          <div className="col-span-4">Model</div>
          <div className="col-span-3">Provider</div>
          <div className="col-span-3">Type</div>
          <div className="col-span-2 text-right">Status</div>
        </div>
        <div className="divide-y">
          {models.map((model) => (
            <div key={model.id} className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-4 font-medium">{model.name}</div>
              <div className="col-span-3 text-sm">{model.provider}</div>
              <div className="col-span-3">
                <Badge variant="outline">{model.type}</Badge>
              </div>
              <div className="col-span-2 flex justify-end">
                <Switch checked={model.enabled} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="outline">Configure Model Settings</Button>
      </div>
    </div>
  )
}
