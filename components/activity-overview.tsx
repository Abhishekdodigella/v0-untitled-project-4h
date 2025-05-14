"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Mon",
    calories: 1200,
    minutes: 45,
  },
  {
    date: "Tue",
    calories: 800,
    minutes: 30,
  },
  {
    date: "Wed",
    calories: 1500,
    minutes: 60,
  },
  {
    date: "Thu",
    calories: 1000,
    minutes: 40,
  },
  {
    date: "Fri",
    calories: 1800,
    minutes: 75,
  },
  {
    date: "Sat",
    calories: 2000,
    minutes: 90,
  },
  {
    date: "Sun",
    calories: 1300,
    minutes: 55,
  },
]

export default function ActivityOverview() {
  return (
    <ChartContainer
      config={{
        calories: {
          label: "Calories Burned",
          color: "hsl(var(--chart-1))",
        },
        minutes: {
          label: "Active Minutes",
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
            dataKey="calories"
            activeDot={{
              r: 6,
              style: { fill: "var(--color-calories)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-calories)",
            }}
          />
          <Line
            type="monotone"
            dataKey="minutes"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-minutes)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-minutes)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
