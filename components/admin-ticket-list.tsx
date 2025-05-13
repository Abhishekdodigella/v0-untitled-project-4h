"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowUpDown, Clock, MoreHorizontal, User } from "lucide-react"

// Mock ticket data
const allTickets = [
  {
    id: "TKT-1001",
    subject: "Missing item in my order #ORD-5678",
    customer: "John Doe",
    email: "john.doe@example.com",
    status: "open",
    priority: "high",
    category: "Order Issue",
    created: "2023-05-10T14:30:00",
    lastUpdated: "2023-05-10T16:45:00",
    assignedTo: null,
  },
  {
    id: "TKT-1002",
    subject: "How do I change my shipping address?",
    customer: "Emma Wilson",
    email: "emma.wilson@example.com",
    status: "in-progress",
    priority: "medium",
    category: "Account Help",
    created: "2023-05-08T09:15:00",
    lastUpdated: "2023-05-09T11:20:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "TKT-1003",
    subject: "Request for refund on damaged product",
    customer: "Michael Chen",
    email: "michael.chen@example.com",
    status: "open",
    priority: "high",
    category: "Returns & Refunds",
    created: "2023-05-07T16:45:00",
    lastUpdated: "2023-05-07T17:30:00",
    assignedTo: null,
  },
  {
    id: "TKT-1004",
    subject: "Payment method update request",
    customer: "Lisa Brown",
    email: "lisa.brown@example.com",
    status: "closed",
    priority: "low",
    category: "Payment",
    created: "2023-05-01T10:30:00",
    lastUpdated: "2023-05-03T14:15:00",
    assignedTo: "Mike Chen",
  },
  {
    id: "TKT-1005",
    subject: "Product compatibility question",
    customer: "David Kim",
    email: "david.kim@example.com",
    status: "closed",
    priority: "medium",
    category: "Product Information",
    created: "2023-04-28T13:20:00",
    lastUpdated: "2023-04-30T09:45:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "TKT-1006",
    subject: "Cannot access my account after password reset",
    customer: "Jennifer Lopez",
    email: "jennifer.lopez@example.com",
    status: "open",
    priority: "high",
    category: "Account Help",
    created: "2023-05-11T08:30:00",
    lastUpdated: "2023-05-11T08:30:00",
    assignedTo: null,
  },
  {
    id: "TKT-1007",
    subject: "Discount code not working at checkout",
    customer: "Robert Johnson",
    email: "robert.johnson@example.com",
    status: "in-progress",
    priority: "medium",
    category: "Payment",
    created: "2023-05-10T11:45:00",
    lastUpdated: "2023-05-10T13:20:00",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "TKT-1008",
    subject: "Need to cancel my recent order",
    customer: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    status: "open",
    priority: "high",
    category: "Order Issue",
    created: "2023-05-11T09:15:00",
    lastUpdated: "2023-05-11T09:15:00",
    assignedTo: null,
  },
]

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
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

interface AdminTicketListProps {
  assigned?: boolean
  all?: boolean
}

export default function AdminTicketList({ assigned = false, all = false }: AdminTicketListProps) {
  const [selectedTickets, setSelectedTickets] = useState<string[]>([])
  const [sortField, setSortField] = useState<string>("created")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  // Filter tickets based on props
  let tickets = [...allTickets]

  if (!all) {
    tickets = tickets.filter((ticket) => ticket.status !== "closed")
  }

  if (assigned) {
    tickets = tickets.filter((ticket) => ticket.assignedTo === "Sarah Johnson")
  }

  // Sort tickets
  tickets.sort((a, b) => {
    let comparison = 0

    if (sortField === "created") {
      comparison = new Date(b.created).getTime() - new Date(a.created).getTime()
    } else if (sortField === "priority") {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      comparison =
        priorityOrder[b.priority as keyof typeof priorityOrder] -
        priorityOrder[a.priority as keyof typeof priorityOrder]
    } else if (sortField === "status") {
      const statusOrder = { open: 3, "in-progress": 2, closed: 1 }
      comparison = statusOrder[b.status as keyof typeof statusOrder] - statusOrder[a.status as keyof typeof statusOrder]
    }

    return sortDirection === "asc" ? -comparison : comparison
  })

  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const toggleSelectAll = () => {
    if (selectedTickets.length === tickets.length) {
      setSelectedTickets([])
    } else {
      setSelectedTickets(tickets.map((ticket) => ticket.id))
    }
  }

  const toggleSelectTicket = (ticketId: string) => {
    if (selectedTickets.includes(ticketId)) {
      setSelectedTickets(selectedTickets.filter((id) => id !== ticketId))
    } else {
      setSelectedTickets([...selectedTickets, ticketId])
    }
  }

  return (
    <div>
      {selectedTickets.length > 0 && (
        <div className="bg-muted p-4 rounded-md mb-4 flex justify-between items-center">
          <span>{selectedTickets.length} ticket(s) selected</span>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Assign
            </Button>
            <Button size="sm" variant="outline">
              Change Status
            </Button>
            <Button size="sm" variant="outline">
              Change Priority
            </Button>
          </div>
        </div>
      )}

      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-4 p-4 bg-muted text-sm font-medium">
          <div className="col-span-1 flex items-center">
            <Checkbox
              checked={selectedTickets.length === tickets.length && tickets.length > 0}
              onCheckedChange={toggleSelectAll}
            />
          </div>
          <div className="col-span-4">Ticket</div>
          <div className="col-span-2 flex items-center cursor-pointer" onClick={() => toggleSort("status")}>
            Status
            <ArrowUpDown className="ml-1 h-4 w-4" />
          </div>
          <div className="col-span-2 flex items-center cursor-pointer" onClick={() => toggleSort("priority")}>
            Priority
            <ArrowUpDown className="ml-1 h-4 w-4" />
          </div>
          <div className="col-span-2 flex items-center cursor-pointer" onClick={() => toggleSort("created")}>
            Created
            <ArrowUpDown className="ml-1 h-4 w-4" />
          </div>
          <div className="col-span-1">Actions</div>
        </div>

        {tickets.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No tickets found</p>
          </div>
        ) : (
          <div>
            {tickets.map((ticket) => (
              <div key={ticket.id} className="grid grid-cols-12 gap-4 p-4 border-t items-center hover:bg-muted/50">
                <div className="col-span-1">
                  <Checkbox
                    checked={selectedTickets.includes(ticket.id)}
                    onCheckedChange={() => toggleSelectTicket(ticket.id)}
                  />
                </div>
                <div className="col-span-4">
                  <div>
                    <Link href={`/admin/tickets/${ticket.id}`} className="font-medium hover:underline">
                      {ticket.subject}
                    </Link>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span className="mr-2">{ticket.id}</span>
                      <span>•</span>
                      <div className="flex items-center ml-2">
                        <User className="h-3 w-3 mr-1" />
                        <span>{ticket.customer}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <StatusBadge status={ticket.status} />
                </div>
                <div className="col-span-2">
                  <PriorityBadge priority={ticket.priority} />
                </div>
                <div className="col-span-2 flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{formatDate(ticket.created)}</span>
                </div>
                <div className="col-span-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Link href={`/admin/tickets/${ticket.id}`} className="w-full">
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Assign Ticket</DropdownMenuItem>
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Add Note</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {tickets.length} of {allTickets.length} tickets
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
