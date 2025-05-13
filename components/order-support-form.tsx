"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function OrderSupportForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    orderNumber: "",
    email: "",
    issueType: "",
    issueDetails: "",
    preferredContact: "email",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Support Request Submitted",
      description: "We've received your order support request and will respond shortly.",
    })

    // Redirect to tickets page
    router.push("/tickets")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="orderNumber">Order Number</Label>
          <Input
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            placeholder="e.g. ORD-12345"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="issueType">Type of Issue</Label>
        <Select value={formData.issueType} onValueChange={(value) => handleSelectChange("issueType", value)} required>
          <SelectTrigger id="issueType">
            <SelectValue placeholder="Select issue type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="missing-item">Missing Item</SelectItem>
            <SelectItem value="damaged">Damaged Product</SelectItem>
            <SelectItem value="wrong-item">Wrong Item Received</SelectItem>
            <SelectItem value="late-delivery">Late Delivery</SelectItem>
            <SelectItem value="cancel-order">Cancel Order</SelectItem>
            <SelectItem value="modify-order">Modify Order</SelectItem>
            <SelectItem value="other">Other Issue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="issueDetails">Issue Details</Label>
        <Textarea
          id="issueDetails"
          name="issueDetails"
          value={formData.issueDetails}
          onChange={handleChange}
          placeholder="Please provide details about the issue with your order..."
          rows={5}
          required
        />
      </div>

      <div className="space-y-3">
        <Label>Preferred Contact Method</Label>
        <RadioGroup
          value={formData.preferredContact}
          onValueChange={handleRadioChange}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="contact-email" />
            <Label htmlFor="contact-email" className="font-normal">
              Email
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="contact-phone" />
            <Label htmlFor="contact-phone" className="font-normal">
              Phone
            </Label>
          </div>
        </RadioGroup>
      </div>

      {formData.preferredContact === "phone" && (
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required={formData.preferredContact === "phone"}
          />
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Support Request"
        )}
      </Button>
    </form>
  )
}
