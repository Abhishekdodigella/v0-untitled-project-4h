"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function FineTuningForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [epochs, setEpochs] = useState(3)
  const [batchSize, setBatchSize] = useState(4)
  const [learningRate, setLearningRate] = useState(0.0001)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Fine-tuning job created",
      description: "Your fine-tuning job has been queued and will start soon",
    })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="job-name">Job Name</Label>
          <Input id="job-name" placeholder="E.g., Customer Support Assistant" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="base-model">Base Model</Label>
          <Select required defaultValue="gpt-3.5-turbo">
            <SelectTrigger id="base-model">
              <SelectValue placeholder="Select base model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
              <SelectItem value="llama-3">Llama 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="training-dataset">Training Dataset</Label>
          <Select required>
            <SelectTrigger id="training-dataset">
              <SelectValue placeholder="Select training dataset" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer-support">Customer Support Conversations</SelectItem>
              <SelectItem value="code-reviews">Code Reviews</SelectItem>
              <SelectItem value="sentiment">Sentiment Analysis</SelectItem>
              <SelectItem value="upload">Upload New Dataset</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="validation-dataset">Validation Dataset (Optional)</Label>
          <Select>
            <SelectTrigger id="validation-dataset">
              <SelectValue placeholder="Select validation dataset" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer-support-val">Customer Support Validation</SelectItem>
              <SelectItem value="code-reviews-val">Code Reviews Validation</SelectItem>
              <SelectItem value="sentiment-val">Sentiment Analysis Validation</SelectItem>
              <SelectItem value="upload">Upload New Dataset</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="epochs">Epochs: {epochs}</Label>
          </div>
          <Slider
            id="epochs"
            min={1}
            max={10}
            step={1}
            value={[epochs]}
            onValueChange={(value) => setEpochs(value[0])}
          />
          <p className="text-xs text-muted-foreground">
            Number of training epochs. More epochs may improve performance but increase training time.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="batch-size">Batch Size: {batchSize}</Label>
          </div>
          <Slider
            id="batch-size"
            min={1}
            max={16}
            step={1}
            value={[batchSize]}
            onValueChange={(value) => setBatchSize(value[0])}
          />
          <p className="text-xs text-muted-foreground">Number of samples processed before model weights are updated.</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="learning-rate">Learning Rate: {learningRate}</Label>
          </div>
          <Slider
            id="learning-rate"
            min={0.00001}
            max={0.001}
            step={0.00001}
            value={[learningRate]}
            onValueChange={(value) => setLearningRate(value[0])}
          />
          <p className="text-xs text-muted-foreground">
            Step size for gradient descent. Lower values are more stable but may converge slower.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea id="description" placeholder="Describe the purpose and goals of this fine-tuning job..." rows={3} />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Job...
          </>
        ) : (
          "Create Fine-Tuning Job"
        )}
      </Button>
    </form>
  )
}
