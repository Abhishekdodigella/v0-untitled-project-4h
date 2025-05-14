import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ModelUsage } from "@/components/dashboard/model-usage"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BrainCircuit, Clock, FlaskConical, LineChart, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - LLM Playground",
  description: "Dashboard for LLM Playground",
}

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Link href="/playground">
            <Button>
              Open Playground
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Experiments</CardTitle>
                <FlaskConical className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">+14 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Models Used</CardTitle>
                <BrainCircuit className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 new models added</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">API Usage</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,345</div>
                <p className="text-xs text-muted-foreground">+573 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2s</div>
                <p className="text-xs text-muted-foreground">-0.1s from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Usage Overview</CardTitle>
                <CardDescription>API calls and model usage over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent experiments and model usage</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Model Performance</CardTitle>
                <CardDescription>Comparison of model performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ModelUsage />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Link href="/playground">
                  <div className="flex h-full flex-col rounded-md border p-4 transition-colors hover:bg-muted">
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <BrainCircuit className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">New Experiment</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Start a new experiment in the playground</p>
                  </div>
                </Link>
                <Link href="/fine-tuning">
                  <div className="flex h-full flex-col rounded-md border p-4 transition-colors hover:bg-muted">
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <FlaskConical className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Fine-tune Model</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Create a new fine-tuning job</p>
                  </div>
                </Link>
                <Link href="/analytics">
                  <div className="flex h-full flex-col rounded-md border p-4 transition-colors hover:bg-muted">
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <LineChart className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">View Analytics</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Detailed analytics and metrics</p>
                  </div>
                </Link>
                <Link href="/models">
                  <div className="flex h-full flex-col rounded-md border p-4 transition-colors hover:bg-muted">
                    <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Manage Models</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Configure and manage AI models</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics and metrics for your experiments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This section will display detailed analytics about your experiments, model performance, and usage
                patterns.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="models" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Models</CardTitle>
              <CardDescription>Overview of available models and their usage</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This section will display information about the models you have access to and their usage statistics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
