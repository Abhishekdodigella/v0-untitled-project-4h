"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

interface PromptSettingsProps {
  temperature: number
  setTemperature: (temperature: number) => void
  maxTokens: number
  setMaxTokens: (maxTokens: number) => void
}

export function PromptSettings({ temperature, setTemperature, maxTokens, setMaxTokens }: PromptSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="temperature">Temperature: {temperature}</Label>
        </div>
        <Slider
          id="temperature"
          min={0}
          max={1}
          step={0.1}
          value={[temperature]}
          onValueChange={(value) => setTemperature(value[0])}
        />
        <p className="text-xs text-muted-foreground">
          Controls randomness: Lower values are more deterministic, higher values are more creative.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="max-tokens">Max Tokens</Label>
        <Input
          id="max-tokens"
          type="number"
          value={maxTokens}
          onChange={(e) => setMaxTokens(Number.parseInt(e.target.value))}
          min={1}
          max={4000}
        />
        <p className="text-xs text-muted-foreground">
          Maximum number of tokens to generate. A token is roughly 4 characters.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Advanced Settings</h3>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="stream">Stream Response</Label>
            <p className="text-xs text-muted-foreground">Receive the response as it's being generated</p>
          </div>
          <Switch id="stream" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="log">Log Prompts</Label>
            <p className="text-xs text-muted-foreground">Save prompts and responses to history</p>
          </div>
          <Switch id="log" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="tools">Enable Tools</Label>
            <p className="text-xs text-muted-foreground">Allow the model to use tools and function calling</p>
          </div>
          <Switch id="tools" />
        </div>
      </div>
    </div>
  )
}
