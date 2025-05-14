"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Jan",
    "API Calls": 1200,
    "Model Usage": 900,
  },
  {
    date: "Feb",
    "API Calls": 1800,
    "Model Usage": 1200,
  },
  {
    date: "Mar",
    "API Calls": 2200,
    "Model Usage": 1600,
  },
  {
    date: "Apr",
    "API Calls": 2600,
    "Model Usage": 1900,
  },
  {
    date: "May",
    "API Calls": 3200,
    "Model Usage": 2400,
  },
  {
    date: "Jun",
    "API Calls": 3800,
    "Model Usage": 2800,
  },
]

export function Overview() {
  return (
    <ChartContainer
      config={{
        "API Calls": {
          label: "API Calls",
          color: "hsl(var(--chart-1))",
        },
        "Model Usage": {
          label: "Model Usage",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} stroke="#888888" fontSize={12} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            stroke="#888888"
            fontSize={12}
            tickFormatter={(value) => `${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="API Calls"
            activeDot={{
              r: 6,
              style: { fill: "var(--color-API Calls)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-API Calls)",
            }}
          />
          <Line
            type="monotone"
            dataKey="Model Usage"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Model Usage)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-Model Usage)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
