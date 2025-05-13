"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Upload } from "lucide-react"

export default function NewTicketForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    orderNumber: "",
    priority: "medium",
    description: "",
    attachFiles: false,
    notifyEmail: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Ticket Created",
      description: "Your support ticket has been submitted successfully.",
    })

    // Redirect to tickets page
    router.push("/tickets")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Brief description of your issue"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)} required>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="order-issue">Order Issue</SelectItem>
              <SelectItem value="returns">Returns & Refunds</SelectItem>
              <SelectItem value="product">Product Information</SelectItem>
              <SelectItem value="account">Account Help</SelectItem>
              <SelectItem value="payment">Payment Problem</SelectItem>
              <SelectItem value="technical">Technical Support</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="orderNumber">Order Number (Optional)</Label>
          <Input
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            placeholder="e.g. ORD-12345"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Select value={formData.priority} onValueChange={(value) => handleSelectChange("priority", value)}>
          <SelectTrigger id="priority">
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low - General question or inquiry</SelectItem>
            <SelectItem value="medium">Medium - Issue affecting my experience</SelectItem>
            <SelectItem value="high">High - Urgent problem requiring immediate attention</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Please provide detailed information about your issue..."
          rows={6}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="attachFiles"
          checked={formData.attachFiles}
          onCheckedChange={(checked) => handleCheckboxChange("attachFiles", checked as boolean)}
        />
        <Label htmlFor="attachFiles" className="text-sm font-normal cursor-pointer">
          I want to attach files to this ticket
        </Label>
      </div>

      {formData.attachFiles && (
        <div className="border-2 border-dashed rounded-md p-6 text-center">
          <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
          <p className="text-sm font-medium mb-1">Drag and drop files here or click to browse</p>
          <p className="text-xs text-muted-foreground mb-4">Supports images, PDFs, and documents up to 10MB</p>
          <Button type="button" variant="outline" size="sm">
            Browse Files
          </Button>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Checkbox
          id="notifyEmail"
          checked={formData.notifyEmail}
          onCheckedChange={(checked) => handleCheckboxChange("notifyEmail", checked as boolean)}
        />
        <Label htmlFor="notifyEmail" className="text-sm font-normal cursor-pointer">
          Notify me via email when there are updates to this ticket
        </Label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button type="button" variant="outline" className="flex-1" onClick={() => router.push("/tickets")}>
          Cancel
        </Button>
        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Ticket"
          )}
        </Button>
      </div>
    </form>
  )
}
