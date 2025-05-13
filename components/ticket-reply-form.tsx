"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Paperclip, Send } from "lucide-react"

interface TicketReplyFormProps {
  ticketId: string
}

export default function TicketReplyForm({ ticketId }: TicketReplyFormProps) {
  const { toast } = useToast()
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Reply Sent",
      description: "Your message has been added to the ticket.",
    })

    // Reset form
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        placeholder="Type your reply here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="mb-4"
        required
      />
      <div className="flex justify-between items-center">
        <Button type="button" variant="outline" size="sm">
          <Paperclip className="h-4 w-4 mr-2" />
          Attach Files
        </Button>
        <Button type="submit" disabled={isSubmitting || !message.trim()}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Reply
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
