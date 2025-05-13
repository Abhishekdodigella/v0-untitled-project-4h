import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ChatInterface from "@/components/chat-interface"
import Link from "next/link"
import { ArrowRight, Bot, MessageSquare } from "lucide-react"

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Live Support Chat</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant help from our support team or AI assistant
          </p>
        </div>

        <Tabs defaultValue="chatbot" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chatbot" className="flex items-center justify-center">
              <Bot className="mr-2 h-4 w-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="livechat" className="flex items-center justify-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              Live Agent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chatbot" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Support Assistant</CardTitle>
                <CardDescription>Get instant answers to common questions from our AI assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <ChatInterface isChatbot={true} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="livechat" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Support Agent</CardTitle>
                <CardDescription>Chat with a human support agent for personalized assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <ChatInterface isChatbot={false} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Ticket</CardTitle>
              <CardDescription>Need more detailed help?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For complex issues that require more detailed investigation, create a support ticket.
              </p>
              <Button asChild className="w-full">
                <Link href="/tickets/new">
                  Create Ticket <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Find answers yourself</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Browse our comprehensive help articles for step-by-step guides and tutorials.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/knowledge-base">
                  Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Other ways to reach us</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer email or phone? Contact our support team through other channels.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">
                  Contact Options <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
