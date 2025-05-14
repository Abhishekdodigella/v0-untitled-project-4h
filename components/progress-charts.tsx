"use client"

import { useState } from "react"
import { Line, LineChart, Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for different chart types
const strengthData = [
  { date: "Jan", benchPress: 185, squat: 225, deadlift: 275 },
  { date: "Feb", benchPress: 195, squat: 235, deadlift: 285 },
  { date: "Mar", benchPress: 200, squat: 245, deadlift: 300 },
  { date: "Apr", benchPress: 205, squat: 255, deadlift: 315 },
  { date: "May", benchPress: 215, squat: 265, deadlift: 335 },
]

const cardioData = [
  { date: "Jan", runningPace: 9.5, cyclingSpeed: 15, vo2max: 42 },
  { date: "Feb", runningPace: 9.2, cyclingSpeed: 15.5, vo2max: 43 },
  { date: "Mar", runningPace: 9.0, cyclingSpeed: 16, vo2max: 44 },
  { date: "Apr", runningPace: 8.8, cyclingSpeed: 16.5, vo2max: 45 },
  { date: "May", runningPace: 8.5, cyclingSpeed: 17, vo2max: 46 },
]

const bodyData = [
  { date: "Jan", weight: 185, bodyFat: 18, muscleMass: 145 },
  { date: "Feb", weight: 183, bodyFat: 17.5, muscleMass: 146 },
  { date: "Mar", weight: 181, bodyFat: 17, muscleMass: 147 },
  { date: "Apr", weight: 180, bodyFat: 16.5, muscleMass: 148 },
  { date: "May", weight: 178, bodyFat: 16, muscleMass: 149 },
]

const volumeData = [
  { muscle: "Chest", volume: 12000 },
  { muscle: "Back", volume: 14000 },
  { muscle: "Legs", volume: 18000 },
  { muscle: "Shoulders", volume: 9000 },
  { muscle: "Arms", volume: 7500 },
  { muscle: "Core", volume: 5000 },
]

interface ProgressChartsProps {
  type: "strength" | "cardio" | "body" | "volume"
}

export default function ProgressCharts({ type }: ProgressChartsProps) {
  const [timeRange, setTimeRange] = useState("6m")

  // Configure chart based on type
  let chartConfig = {}
  let chartData = []

  switch (type) {
    case "strength":
      chartData = strengthData
      chartConfig = {
        benchPress: {
          label: "Bench Press (lbs)",
          color: "hsl(var(--chart-1))",
        },
        squat: {
          label: "Squat (lbs)",
          color: "hsl(var(--chart-2))",
        },
        deadlift: {
          label: "Deadlift (lbs)",
          color: "hsl(var(--chart-3))",
        },
      }
      break
    case "cardio":
      chartData = cardioData
      chartConfig = {
        runningPace: {
          label: "Running Pace (min/mile)",
          color: "hsl(var(--chart-1))",
        },
        cyclingSpeed: {
          label: "Cycling Speed (mph)",
          color: "hsl(var(--chart-2))",
        },
        vo2max: {
          label: "VO2 Max",
          color: "hsl(var(--chart-3))",
        },
      }
      break
    case "body":
      chartData = bodyData
      chartConfig = {
        weight: {
          label: "Weight (lbs)",
          color: "hsl(var(--chart-1))",
        },
        bodyFat: {
          label: "Body Fat (%)",
          color: "hsl(var(--chart-2))",
        },
        muscleMass: {
          label: "Muscle Mass (lbs)",
          color: "hsl(var(--chart-3))",
        },
      }
      break
    case "volume":
      chartData = volumeData
      chartConfig = {
        volume: {
          label: "Volume (lbs)",
          color: "hsl(var(--chart-1))",
        },
      }
      break
  }

  return (
    <div className="space-y-4">
      {type !== "volume" && (
        <div className="flex justify-end">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {type === "volume" ? (
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="muscle" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="volume" fill="var(--color-volume)" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              {Object.keys(chartConfig).map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={`var(--color-${key})`}
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
