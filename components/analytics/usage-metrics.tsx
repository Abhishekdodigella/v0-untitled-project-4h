"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyData = [
  { month: "Jan", tokens: 1200000, cost: 24 },
  { month: "Feb", tokens: 1500000, cost: 30 },
  { month: "Mar", tokens: 1800000, cost: 36 },
  { month: "Apr", tokens: 2200000, cost: 44 },
  { month: "May", tokens: 2500000, cost: 50 },
]

const modelData = [
  { model: "GPT-4", tokens: 1200000, cost: 36 },
  { model: "GPT-3.5", tokens: 800000, cost: 8 },
  { model: "Claude 3", tokens: 600000, cost: 18 },
  { model: "Gemini Pro", tokens: 400000, cost: 8 },
  { model: "Llama 3", tokens: 200000, cost: 4 },
]

export function UsageMetrics() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="monthly">
        <TabsList>
          <TabsTrigger value="monthly">Monthly Usage</TabsTrigger>
          <TabsTrigger value="models">By Model</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Token Usage</CardTitle>
                <CardDescription>Monthly token consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    tokens: {
                      label: "Tokens",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="tokens" fill="var(--color-tokens)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost</CardTitle>
                <CardDescription>Monthly cost in USD</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    cost: {
                      label: "Cost (USD)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={(value) => `$${value}`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="cost" fill="var(--color-cost)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="models" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Token Usage by Model</CardTitle>
                <CardDescription>Token consumption per model</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    tokens: {
                      label: "Tokens",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={modelData}>
                      <XAxis dataKey="model" />
                      <YAxis tickFormatter={(value) => `${value / 1000}k`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="tokens" fill="var(--color-tokens)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost by Model</CardTitle>
                <CardDescription>Cost per model in USD</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    cost: {
                      label: "Cost (USD)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={modelData}>
                      <XAxis dataKey="model" />
                      <YAxis tickFormatter={(value) => `$${value}`} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="cost" fill="var(--color-cost)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
