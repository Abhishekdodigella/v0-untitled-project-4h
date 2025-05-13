import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Clock, FileText, MessageSquare, Plus } from "lucide-react"

// Mock ticket data
const tickets = [
  {
    id: "TKT-1001",
    subject: "Missing item in my order #ORD-5678",
    status: "open",
    priority: "high",
    category: "Order Issue",
    created: "2023-05-10T14:30:00",
    lastUpdated: "2023-05-10T16:45:00",
    messages: 3,
  },
  {
    id: "TKT-1002",
    subject: "How do I change my shipping address?",
    status: "in-progress",
    priority: "medium",
    category: "Account Help",
    created: "2023-05-08T09:15:00",
    lastUpdated: "2023-05-09T11:20:00",
    messages: 2,
  },
  {
    id: "TKT-1003",
    subject: "Request for refund on damaged product",
    status: "open",
    priority: "high",
    category: "Returns & Refunds",
    created: "2023-05-07T16:45:00",
    lastUpdated: "2023-05-07T17:30:00",
    messages: 1,
  },
  {
    id: "TKT-1004",
    subject: "Payment method update request",
    status: "closed",
    priority: "low",
    category: "Payment",
    created: "2023-05-01T10:30:00",
    lastUpdated: "2023-05-03T14:15:00",
    messages: 4,
  },
  {
    id: "TKT-1005",
    subject: "Product compatibility question",
    status: "closed",
    priority: "medium",
    category: "Product Information",
    created: "2023-04-28T13:20:00",
    lastUpdated: "2023-04-30T09:45:00",
    messages: 3,
  },
]

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

export default function TicketsPage() {
  const openTickets = tickets.filter((ticket) => ticket.status !== "closed")
  const closedTickets = tickets.filter((ticket) => ticket.status === "closed")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Support Tickets</h1>
          <p className="text-muted-foreground mt-1">View and manage your support requests</p>
        </div>
        <Button asChild>
          <Link href="/tickets/new">
            <Plus className="mr-2 h-4 w-4" /> Create New Ticket
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="mb-8">
        <TabsList>
          <TabsTrigger value="active">Active Tickets ({openTickets.length})</TabsTrigger>
          <TabsTrigger value="closed">Closed Tickets ({closedTickets.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          {openTickets.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Active Tickets</h3>
                <p className="text-muted-foreground mb-4">You don't have any active support tickets at the moment.</p>
                <Button asChild>
                  <Link href="/tickets/new">Create a Ticket</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {openTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className="text-lg">
                          <Link href={`/tickets/${ticket.id}`} className="hover:underline">
                            {ticket.subject}
                          </Link>
                        </CardTitle>
                        <CardDescription>
                          {ticket.id} • {ticket.category}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <StatusBadge status={ticket.status} />
                        <PriorityBadge priority={ticket.priority} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Created: {formatDate(ticket.created)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Updated: {formatDate(ticket.lastUpdated)}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>
                          {ticket.messages} {ticket.messages === 1 ? "message" : "messages"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/tickets/${ticket.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="closed" className="mt-6">
          {closedTickets.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Closed Tickets</h3>
                <p className="text-muted-foreground">You don't have any closed support tickets.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {closedTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className="text-lg">
                          <Link href={`/tickets/${ticket.id}`} className="hover:underline">
                            {ticket.subject}
                          </Link>
                        </CardTitle>
                        <CardDescription>
                          {ticket.id} • {ticket.category}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <StatusBadge status={ticket.status} />
                        <PriorityBadge priority={ticket.priority} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Created: {formatDate(ticket.created)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Updated: {formatDate(ticket.lastUpdated)}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        <span>
                          {ticket.messages} {ticket.messages === 1 ? "message" : "messages"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/tickets/${ticket.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
          <CardDescription>Check our knowledge base or contact us directly</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="flex-1">
            <Link href="/knowledge-base">Browse Knowledge Base</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/chat">Start Live Chat</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
