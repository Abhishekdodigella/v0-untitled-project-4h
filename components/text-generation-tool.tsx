"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TextGenerationForm from "@/components/text-generation-form"
import ResultDisplay from "@/components/result-display"
import type { WritingStyle } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { generateText } from "@/lib/ai-service"

export default function TextGenerationTool() {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedText, setGeneratedText] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("input")

  const handleGenerate = async (prompt: string, style: WritingStyle) => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter some text to generate content.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedText(null)

    try {
      const result = await generateText(prompt, style)
      setGeneratedText(result)
      setActiveTab("result")
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your text. Please try again.",
        variant: "destructive",
      })
      console.error("Text generation error:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Text Generator</CardTitle>
        <CardDescription>Enter your prompt and select a writing style to generate AI-powered text</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="input">Input</TabsTrigger>
            <TabsTrigger value="result" disabled={!generatedText && !isGenerating}>
              Result
            </TabsTrigger>
          </TabsList>
          <TabsContent value="input" className="mt-6">
            <TextGenerationForm onGenerate={handleGenerate} isGenerating={isGenerating} />
          </TabsContent>
          <TabsContent value="result" className="mt-6">
            <ResultDisplay text={generatedText} isLoading={isGenerating} />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Powered by advanced language models. Results may vary based on input.
      </CardFooter>
    </Card>
  )
}
