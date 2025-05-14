"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export function ModelIntegrations() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "API keys saved",
      description: "Your API keys have been saved successfully",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="openai-api-key">OpenAI API Key</Label>
            <Input id="openai-api-key" type="password" placeholder="sk-..." />
            <p className="text-xs text-muted-foreground">Used for GPT-4, GPT-3.5 Turbo, and other OpenAI models</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="anthropic-api-key">Anthropic API Key</Label>
            <Input id="anthropic-api-key" type="password" placeholder="sk-ant-..." />
            <p className="text-xs text-muted-foreground">
              Used for Claude 3 Opus, Claude 3 Sonnet, and other Anthropic models
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="google-api-key">Google AI API Key</Label>
            <Input id="google-api-key" type="password" placeholder="AIza..." />
            <p className="text-xs text-muted-foreground">Used for Gemini Pro and other Google AI models</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cohere-api-key">Cohere API Key</Label>
            <Input id="cohere-api-key" type="password" placeholder="..." />
            <p className="text-xs text-muted-foreground">Used for Command R and other Cohere models</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Cloud Provider Integrations</h3>

          <div className="space-y-2">
            <Label htmlFor="aws-access-key">AWS Access Key</Label>
            <Input id="aws-access-key" placeholder="AKIA..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aws-secret-key">AWS Secret Key</Label>
            <Input id="aws-secret-key" type="password" placeholder="..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="azure-api-key">Azure OpenAI API Key</Label>
            <Input id="azure-api-key" type="password" placeholder="..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="azure-endpoint">Azure OpenAI Endpoint</Label>
            <Input id="azure-endpoint" placeholder="https://..." />
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save API Keys"
          )}
        </Button>
      </form>
    </div>
  )
}
