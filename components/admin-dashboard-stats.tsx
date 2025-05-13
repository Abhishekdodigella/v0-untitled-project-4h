import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileText, MessageSquare, CheckCircle } from "lucide-react"

export default function AdminDashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Open Tickets</CardDescription>
          <CardTitle className="text-3xl">24</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              <span>8 high priority</span>
            </div>
            <span className="text-green-500">↓ 12%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Average Response Time</CardDescription>
          <CardTitle className="text-3xl">1h 12m</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Last 7 days</span>
            </div>
            <span className="text-green-500">↓ 8%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Active Chats</CardDescription>
          <CardTitle className="text-3xl">7</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>3 waiting</span>
            </div>
            <span className="text-amber-500">↑ 15%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Resolved Today</CardDescription>
          <CardTitle className="text-3xl">18</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              <span>87% satisfaction</span>
            </div>
            <span className="text-green-500">↑ 24%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
