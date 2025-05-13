import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BarChart3, Search } from "lucide-react"
import AdminSidebar from "@/components/admin-sidebar"
import AdminTicketList from "@/components/admin-ticket-list"
import AdminDashboardStats from "@/components/admin-dashboard-stats"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Support Dashboard</h1>
            <p className="text-muted-foreground">Manage support tickets and customer inquiries</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search tickets..."
                className="pl-10 h-10 w-[250px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button>New Ticket</Button>
          </div>
        </div>

        <AdminDashboardStats />

        <Tabs defaultValue="open" className="mt-8">
          <TabsList>
            <TabsTrigger value="open">Open Tickets (24)</TabsTrigger>
            <TabsTrigger value="assigned">Assigned to Me (8)</TabsTrigger>
            <TabsTrigger value="all">All Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="open" className="mt-6">
            <AdminTicketList />
          </TabsContent>

          <TabsContent value="assigned" className="mt-6">
            <AdminTicketList assigned={true} />
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <AdminTicketList all={true} />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest support team actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: "Sarah Johnson", action: "resolved ticket TKT-1005", time: "10 minutes ago" },
                  { user: "Mike Chen", action: "assigned ticket TKT-1008 to Sarah", time: "25 minutes ago" },
                  { user: "Emma Davis", action: "created new knowledge base article", time: "1 hour ago" },
                  { user: "John Smith", action: "replied to ticket TKT-1002", time: "2 hours ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Support metrics for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average Response Time</span>
                    <span className="font-medium">1h 12m</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tickets Resolved</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[87%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Customer Satisfaction</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[92%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>First Contact Resolution</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[78%]" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Detailed Reports
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Most viewed articles this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Return policy overview", views: 1245 },
                  { title: "How to track your order", views: 987 },
                  { title: "Resetting your password", views: 856 },
                  { title: "Refund processing timeline", views: 742 },
                  { title: "Product exchange process", views: 631 },
                ].map((article, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary mr-2 text-xs font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm">{article.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{article.views} views</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                Manage Knowledge Base
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
