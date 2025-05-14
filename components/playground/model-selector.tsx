"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"

const models = [
  {
    value: "gpt-4",
    label: "GPT-4",
    provider: "OpenAI",
  },
  {
    value: "gpt-3.5-turbo",
    label: "GPT-3.5 Turbo",
    provider: "OpenAI",
  },
  {
    value: "claude-3-opus",
    label: "Claude 3 Opus",
    provider: "Anthropic",
  },
  {
    value: "claude-3-sonnet",
    label: "Claude 3 Sonnet",
    provider: "Anthropic",
  },
  {
    value: "gemini-pro",
    label: "Gemini Pro",
    provider: "Google",
  },
  {
    value: "llama-3-70b",
    label: "Llama 3 (70B)",
    provider: "Meta",
  },
  {
    value: "mistral-large",
    label: "Mistral Large",
    provider: "Mistral AI",
  },
  {
    value: "command-r",
    label: "Command R",
    provider: "Cohere",
  },
]

interface ModelSelectorProps {
  selectedModel: string
  onSelectModel: (model: string) => void
}

export function ModelSelector({ selectedModel, onSelectModel }: ModelSelectorProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full sm:w-[250px] justify-between">
          {selectedModel ? models.find((model) => model.value === selectedModel)?.label : "Select model..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search models..." />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            <CommandGroup>
              {models.map((model) => (
                <CommandItem
                  key={model.value}
                  value={model.value}
                  onSelect={(currentValue) => {
                    onSelectModel(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", selectedModel === model.value ? "opacity-100" : "opacity-0")} />
                  <div className="flex flex-col">
                    <span>{model.label}</span>
                    <span className="text-xs text-muted-foreground">{model.provider}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
