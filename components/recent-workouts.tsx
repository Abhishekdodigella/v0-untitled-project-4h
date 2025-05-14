import { Badge } from "@/components/ui/badge"
import { Dumbbell, Timer, TrendingUp } from "lucide-react"

export default function RecentWorkouts() {
  const workouts = [
    {
      id: 1,
      name: "Upper Body Strength",
      type: "Strength",
      date: "Today, 9:30 AM",
      duration: "45 min",
      intensity: "High",
    },
    {
      id: 2,
      name: "5K Morning Run",
      type: "Cardio",
      date: "Yesterday, 7:15 AM",
      duration: "28 min",
      intensity: "Medium",
    },
    {
      id: 3,
      name: "Full Body HIIT",
      type: "HIIT",
      date: "May 12, 6:00 PM",
      duration: "35 min",
      intensity: "High",
    },
    {
      id: 4,
      name: "Leg Day",
      type: "Strength",
      date: "May 10, 5:30 PM",
      duration: "50 min",
      intensity: "High",
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex items-start space-x-4">
          <div className="rounded-md bg-primary/10 p-2">
            {workout.type === "Strength" ? (
              <Dumbbell className="h-4 w-4 text-primary" />
            ) : workout.type === "Cardio" ? (
              <TrendingUp className="h-4 w-4 text-primary" />
            ) : (
              <Timer className="h-4 w-4 text-primary" />
            )}
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{workout.name}</p>
            <div className="flex items-center pt-1">
              <p className="text-xs text-muted-foreground">{workout.date}</p>
              <span className="mx-1 text-xs text-muted-foreground">•</span>
              <p className="text-xs text-muted-foreground">{workout.duration}</p>
            </div>
          </div>
          <Badge variant={workout.intensity === "High" ? "default" : "secondary"}>{workout.intensity}</Badge>
        </div>
      ))}
    </div>
  )
}
