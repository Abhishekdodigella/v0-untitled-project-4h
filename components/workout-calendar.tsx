"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function WorkoutCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Mock workout data
  const workoutData = {
    "2023-05-01": { count: 1, types: ["Strength"] },
    "2023-05-03": { count: 1, types: ["Cardio"] },
    "2023-05-05": { count: 2, types: ["Strength", "Yoga"] },
    "2023-05-08": { count: 1, types: ["Yoga"] },
    "2023-05-10": { count: 1, types: ["Strength"] },
    "2023-05-12": { count: 1, types: ["HIIT"] },
    "2023-05-14": { count: 1, types: ["Cardio"] },
    "2023-05-15": { count: 1, types: ["Strength"] },
  }

  // Calendar generation
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  // Generate calendar days
  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null) // Empty cells for days before the 1st of the month
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  // Function to get workout data for a specific day
  const getWorkoutForDay = (day: number) => {
    if (!day) return null

    const dateStr = `${year}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return workoutData[dateStr] || null
  }

  // Function to get color based on workout type
  const getWorkoutColor = (type: string) => {
    switch (type) {
      case "Strength":
        return "bg-blue-500"
      case "Cardio":
        return "bg-green-500"
      case "HIIT":
        return "bg-red-500"
      case "Yoga":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">
            {monthName} {year}
          </h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-sm font-medium py-2">
              {day}
            </div>
          ))}

          {days.map((day, index) => {
            const workout = getWorkoutForDay(day)
            const today = new Date()
            const isToday =
              day &&
              today.getDate() === day &&
              today.getMonth() === currentMonth.getMonth() &&
              today.getFullYear() === currentMonth.getFullYear()

            return (
              <div
                key={index}
                className={`aspect-square p-1 ${
                  day ? "border rounded-md" : ""
                } ${isToday ? "border-primary" : "border-muted"}`}
              >
                {day && (
                  <div className="h-full">
                    <div className="flex justify-between items-start p-1">
                      <span className={`text-sm ${isToday ? "font-bold text-primary" : ""}`}>{day}</span>
                      {workout && (
                        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-1.5">
                          {workout.count}
                        </span>
                      )}
                    </div>
                    {workout && (
                      <div className="flex flex-wrap gap-1 mt-1 px-1">
                        {workout.types.map((type, i) => (
                          <div
                            key={i}
                            className={`h-1.5 rounded-full ${getWorkoutColor(type)}`}
                            style={{ width: `${100 / workout.types.length - 5}%` }}
                            title={type}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center text-xs">
            <div className="h-2 w-2 rounded-full bg-blue-500 mr-1" />
            <span>Strength</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-1" />
            <span>Cardio</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="h-2 w-2 rounded-full bg-red-500 mr-1" />
            <span>HIIT</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="h-2 w-2 rounded-full bg-purple-500 mr-1" />
            <span>Yoga</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
