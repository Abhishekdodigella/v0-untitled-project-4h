import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsageMetrics } from "@/components/analytics/usage-metrics"
import { PerformanceMetrics } from "@/components/analytics/performance-metrics"
import { ExperimentHistory } from "@/components/analytics/experiment-history"

export const metadata: Metadata = {
  title: "Analytics - LLM Playground",
  description: "Analytics and metrics for your AI experiments",
}

export default function AnalyticsPage() {
  return (
    <div className="flex-1 p-4 pt-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">Detailed analytics and metrics for your AI experiments</p>
      </div>
      <Tabs defaultValue="usage" className="space-y-4">
        <TabsList>
          <TabsTrigger value="usage">Usage Metrics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="history">Experiment History</TabsTrigger>
        </TabsList>
        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Usage Metrics</CardTitle>
              <CardDescription>API usage, token consumption, and cost analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <UsageMetrics />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Response times, accuracy, and model performance</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceMetrics />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Experiment History</CardTitle>
              <CardDescription>History of your experiments and their results</CardDescription>
            </CardHeader>
            <CardContent>
              <ExperimentHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
