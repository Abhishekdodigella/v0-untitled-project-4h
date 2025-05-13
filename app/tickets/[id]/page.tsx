import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Paperclip, User } from "lucide-react"
import TicketReplyForm from "@/components/ticket-reply-form"

// Mock ticket data
const ticket = {
  id: "TKT-1001",
  subject: "Missing item in my order #ORD-5678",
  status: "open",
  priority: "high",
  category: "Order Issue",
  created: "2023-05-10T14:30:00",
  lastUpdated: "2023-05-10T16:45:00",
  messages: [
    {
      id: 1,
      sender: "customer",
      name: "John Doe",
      content:
        "I received my order today (Order #ORD-5678), but one of the items I ordered is missing. I ordered 3 t-shirts but only received 2. Can you please help me resolve this issue?",
      timestamp: "2023-05-10T14:30:00",
      attachments: [],
    },
    {
      id: 2,
      sender: "agent",
      name: "Sarah Johnson",
      content:
        "Hello John, thank you for contacting us. I'm sorry to hear about the missing item in your order. I'll look into this right away. Could you please confirm which specific t-shirt is missing from your order?",
      timestamp: "2023-05-10T15:15:00",
      attachments: [],
    },
    {
      id: 3,
      sender: "customer",
      name: "John Doe",
      content:
        "Hi Sarah, thanks for your quick response. The missing item is the blue t-shirt in size medium. The order confirmation shows all 3 shirts, but only the red and black ones were in the package.",
      timestamp: "2023-05-10T16:45:00",
      attachments: [
        {
          name: "order_confirmation.pdf",
          size: "1.2 MB",
          url: "#",
        },
      ],
    },
  ],
}

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

// Status badge component
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "open":
      return <Badge variant="default">Open</Badge>
    case "in-progress":
      return <Badge variant="secondary">In Progress</Badge>
    case "closed":
      return <Badge variant="outline">Closed</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

// Priority badge component
function PriorityBadge({ priority }: { priority: string }) {
  switch (priority) {
    case "high":
      return (
        <Badge variant="destructive" className="bg-red-500">
          High
        </Badge>
      )
    case "medium":
      return (
        <Badge variant="default" className="bg-amber-500">
          Medium
        </Badge>
      )
    case "low":
      return (
        <Badge variant="default" className="bg-green-500">
          Low
        </Badge>
      )
    default:
      return <Badge variant="outline">{priority}</Badge>
  }
}

export default function TicketDetailPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/tickets"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tickets
          </Link>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">{ticket.subject}</h1>
              <p className="text-muted-foreground">
                {ticket.id} • {ticket.category}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={ticket.status} />
              <PriorityBadge priority={ticket.priority} />
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle>Ticket Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium capitalize">{ticket.status}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Priority</span>
                <span className="font-medium capitalize">{ticket.priority}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Created</span>
                <span className="font-medium">{formatDate(ticket.created)}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Last Updated</span>
                <span className="font-medium">{formatDate(ticket.lastUpdated)}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium">{ticket.category}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Related Order</span>
                <span className="font-medium">ORD-5678</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6 flex flex-wrap gap-4">
            <Button variant="outline" size="sm">
              Mark as Resolved
            </Button>
            <Button variant="outline" size="sm">
              Request Escalation
            </Button>
          </CardFooter>
        </Card>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Conversation</h2>
          <div className="space-y-6">
            {ticket.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "customer" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] ${message.sender === "customer" ? "bg-muted" : "bg-primary text-primary-foreground"} rounded-lg p-4`}
                >
                  <div className="flex items-center mb-2">
                    <User className="h-5 w-5 mr-2" />
                    <span className="font-medium">{message.name}</span>
                    <span className="text-xs ml-auto">{formatDate(message.timestamp)}</span>
                  </div>
                  <p className="mb-3">{message.content}</p>
                  {message.attachments.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-primary/20">
                      <p className="text-sm font-medium mb-2">Attachments:</p>
                      {message.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Paperclip className="h-4 w-4 mr-2" />
                          <a href={attachment.url} className="underline">
                            {attachment.name} ({attachment.size})
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Reply to Ticket</CardTitle>
            <CardDescription>Add your response to continue the conversation</CardDescription>
          </CardHeader>
          <CardContent>
            <TicketReplyForm ticketId={ticket.id} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
