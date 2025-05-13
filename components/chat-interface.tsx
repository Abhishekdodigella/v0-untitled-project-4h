"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Paperclip, Send, Bot, User, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ChatMessage {
  id: number
  sender: "user" | "agent" | "bot"
  message: string
  timestamp: Date
}

interface ChatInterfaceProps {
  isChatbot: boolean
}

export default function ChatInterface({ isChatbot }: ChatInterfaceProps) {
  const { toast } = useToast()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initial greeting message
  useEffect(() => {
    const initialMessage = {
      id: 1,
      sender: isChatbot ? "bot" : "agent",
      message: isChatbot
        ? "Hello! I'm your AI support assistant. How can I help you today?"
        : "Hi there! I'm Sarah, your support agent. How can I assist you today?",
      timestamp: new Date(),
    }

    setMessages([initialMessage])
  }, [isChatbot])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputMessage.trim()) return

    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      sender: "user",
      message: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate response delay
    const delay = isChatbot ? 1000 : 2000
    await new Promise((resolve) => setTimeout(resolve, delay))

    // Generate response based on user input
    let responseMessage = ""

    if (isChatbot) {
      // Simple AI responses based on keywords
      if (inputMessage.toLowerCase().includes("order")) {
        responseMessage =
          "I can help with order-related questions. Could you provide your order number so I can look up specific details?"
      } else if (inputMessage.toLowerCase().includes("return") || inputMessage.toLowerCase().includes("refund")) {
        responseMessage =
          "Our return policy allows returns within 30 days of purchase. Would you like me to guide you through the return process?"
      } else if (inputMessage.toLowerCase().includes("shipping")) {
        responseMessage =
          "Standard shipping takes 3-5 business days. Express shipping is available for an additional fee and delivers within 1-2 business days."
      } else if (inputMessage.toLowerCase().includes("password") || inputMessage.toLowerCase().includes("account")) {
        responseMessage =
          "For account-related issues, you can reset your password through the 'Forgot Password' link on the login page. Would you like more specific help?"
      } else {
        responseMessage =
          "Thank you for your question. I'll do my best to help. Could you provide more details about your inquiry?"
      }
    } else {
      // Human agent responses
      if (inputMessage.toLowerCase().includes("order")) {
        responseMessage =
          "I'd be happy to help with your order. Could you please provide your order number so I can look up the details for you?"
      } else if (inputMessage.toLowerCase().includes("return") || inputMessage.toLowerCase().includes("refund")) {
        responseMessage =
          "I understand you're inquiring about a return or refund. I can definitely help with that. Could you tell me which item you'd like to return and the reason?"
      } else {
        responseMessage =
          "Thank you for reaching out. I'm here to help with your inquiry. Could you please provide more details so I can assist you better?"
      }
    }

    // Add response message
    const response: ChatMessage = {
      id: messages.length + 2,
      sender: isChatbot ? "bot" : "agent",
      message: responseMessage,
      timestamp: new Date(),
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, response])
  }

  return (
    <div className="flex flex-col h-[600px] border rounded-md">
      {/* Chat Header */}
      <div className="p-4 border-b flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage
            src={isChatbot ? "/placeholder.svg?height=40&width=40" : "/placeholder.svg?height=40&width=40"}
          />
          <AvatarFallback>{isChatbot ? <Bot /> : <User />}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{isChatbot ? "AI Support Assistant" : "Sarah Johnson"}</h3>
          <p className="text-xs text-muted-foreground">{isChatbot ? "Automated Support" : "Customer Support Agent"}</p>
        </div>
        <div className="ml-auto flex items-center">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : msg.sender === "bot"
                    ? "bg-secondary"
                    : "bg-muted"
              }`}
            >
              <p>{msg.message}</p>
              <p className="text-xs mt-1 opacity-70">
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/70 animate-bounce"></div>
                <div
                  className="w-2 h-2 rounded-full bg-muted-foreground/70 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-muted-foreground/70 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Button type="button" size="icon" variant="ghost">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!inputMessage.trim() || isTyping}>
            {isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
      </div>
    </div>
  )
}
