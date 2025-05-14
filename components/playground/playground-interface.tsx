"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModelSelector } from "@/components/playground/model-selector"
import { PromptInput } from "@/components/playground/prompt-input"
import { ModelResponse } from "@/components/playground/model-response"
import { PromptSettings } from "@/components/playground/prompt-settings"
import { PromptHistory } from "@/components/playground/prompt-history"
import { PromptTemplates } from "@/components/playground/prompt-templates"
import { Button } from "@/components/ui/button"
import { Loader2, Save, Share } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function PlaygroundInterface() {
  const { toast } = useToast()
  const [selectedModel, setSelectedModel] = useState("gpt-4")
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(1000)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate a response",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setResponse("")

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response based on the model and prompt
      const mockResponse = `This is a simulated response from the ${selectedModel} model based on your prompt: "${prompt}".

The response is generated with a temperature of ${temperature} and a maximum token limit of ${maxTokens}.

In a real implementation, this would be an actual API call to the selected model provider.`

      setResponse(mockResponse)
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating a response",
        variant: "destructive",
      })
      console.error("Error generating response:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = () => {
    toast({
      title: "Prompt saved",
      description: "Your prompt has been saved to your library",
    })
  }

  const handleShare = () => {
    toast({
      title: "Link copied",
      description: "A shareable link has been copied to your clipboard",
    })
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <ModelSelector selectedModel={selectedModel} onSelectModel={setSelectedModel} />
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
              <PromptInput prompt={prompt} setPrompt={setPrompt} />
              <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()}>
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <ModelResponse response={response} isLoading={isGenerating} />
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <Tabs defaultValue="settings">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="settings">
            <Card>
              <CardContent className="p-4">
                <PromptSettings
                  temperature={temperature}
                  setTemperature={setTemperature}
                  maxTokens={maxTokens}
                  setMaxTokens={setMaxTokens}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card>
              <CardContent className="p-4">
                <PromptHistory />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="templates">
            <Card>
              <CardContent className="p-4">
                <PromptTemplates setPrompt={setPrompt} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
