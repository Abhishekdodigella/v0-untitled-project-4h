import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import NewTicketForm from "@/components/new-ticket-form"
import Link from "next/link"
import { ArrowLeft, FileText, Search } from "lucide-react"

export default function NewTicketPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/tickets"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tickets
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Create Support Ticket</h1>
          <p className="text-muted-foreground">
            Submit a new support request and we'll get back to you as soon as possible.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Before You Submit</CardTitle>
            <CardDescription>Check if your question has already been answered in our knowledge base.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Search className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Search Knowledge Base</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                You might find an immediate answer to your question in our help center.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/knowledge-base">Browse Articles</Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <FileText className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Common Topics</span>
              </div>
              <ul className="text-sm space-y-2 mb-4">
                <li>
                  <Link href="/knowledge-base/returns" className="text-primary hover:underline">
                    Returns & Refunds Policy
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge-base/shipping" className="text-primary hover:underline">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge-base/account" className="text-primary hover:underline">
                    Account Management
                  </Link>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ticket Information</CardTitle>
            <CardDescription>
              Please provide details about your issue so we can help you more effectively.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NewTicketForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
