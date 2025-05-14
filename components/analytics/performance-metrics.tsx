"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const responseTimeData = [
  { date: "May 1", "GPT-4": 1.2, "Claude 3": 0.9, "Gemini Pro": 1.1 },
  { date: "May 2", "GPT-4": 1.3, "Claude 3": 0.8, "Gemini Pro": 1.0 },
  { date: "May 3", "GPT-4": 1.1, "Claude 3": 0.9, "Gemini Pro": 1.2 },
  { date: "May 4", "GPT-4": 1.2, "Claude 3": 0.7, "Gemini Pro": 1.1 },
  { date: "May 5", "GPT-4": 1.0, "Claude 3": 0.8, "Gemini Pro": 1.0 },
  { date: "May 6", "GPT-4": 1.1, "Claude 3": 0.9, "Gemini Pro": 0.9 },
  { date: "May 7", "GPT-4": 1.2, "Claude 3": 0.8, "Gemini Pro": 1.0 },
]

const accuracyData = [
  { date: "May 1", "GPT-4": 92, "Claude 3": 89, "Gemini Pro": 87 },
  { date: "May 2", "GPT-4": 93, "Claude 3": 90, "Gemini Pro": 88 },
  { date: "May 3", "GPT-4": 91, "Claude 3": 88, "Gemini Pro": 86 },
  { date: "May 4", "GPT-4": 92, "Claude 3": 89, "Gemini Pro": 87 },
  { date: "May 5", "GPT-4": 94, "Claude 3": 91, "Gemini Pro": 89 },
  { date: "May 6", "GPT-4": 93, "Claude 3": 90, "Gemini Pro": 88 },
  { date: "May 7", "GPT-4": 92, "Claude 3": 89, "Gemini Pro": 87 },
]

export function PerformanceMetrics() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="response-time">
        <TabsList>
          <TabsTrigger value="response-time">Response Time</TabsTrigger>
          <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
        </TabsList>
        <TabsContent value="response-time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
              <CardDescription>Average response time in seconds by model</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  "GPT-4": {
                    label: "GPT-4",
                    color: "hsl(var(--chart-1))",
                  },
                  "Claude 3": {
                    label: "Claude 3",
                    color: "hsl(var(--chart-2))",
                  },
                  "Gemini Pro": {
                    label: "Gemini Pro",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={responseTimeData}>
                    <XAxis dataKey="date" />
                    <YAxis
                      label={{ value: "Seconds", angle: -90, position: "insideLeft" }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="GPT-4"
                      stroke="var(--color-GPT-4)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Claude 3"
                      stroke="var(--color-Claude 3)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Gemini Pro"
                      stroke="var(--color-Gemini Pro)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="accuracy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Accuracy</CardTitle>
              <CardDescription>Model accuracy percentage over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  "GPT-4": {
                    label: "GPT-4",
                    color: "hsl(var(--chart-1))",
                  },
                  "Claude 3": {
                    label: "Claude 3",
                    color: "hsl(var(--chart-2))",
                  },
                  "Gemini Pro": {
                    label
