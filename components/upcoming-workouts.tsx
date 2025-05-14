import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

export default function UpcomingWorkouts() {
  const workouts = [
    {
      id: 1,
      name: "Lower Body Strength",
      date: "Tomorrow",
      time: "6:00 PM",
      duration: "45 min",
    },
    {
      id: 2,
      name: "Morning Yoga",
      date: "Wed, May 17",
      time: "7:30 AM",
      duration: "30 min",
    },
    {
      id: 3,
      name: "Interval Running",
      date: "Thu, May 18",
      time: "6:30 PM",
      duration: "40 min",
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="flex flex-col space-y-2 rounded-lg border p-3">
          <div className="flex justify-between">
            <h4 className="font-medium">{workout.name}</h4>
            <Button variant="ghost" size="sm" className="h-6 px-2">
              Edit
            </Button>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{workout.date}</span>
            <span className="mx-1">•</span>
            <Clock className="mr-1 h-4 w-4" />
            <span>{workout.time}</span>
            <span className="mx-1">•</span>
            <span>{workout.duration}</span>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        Schedule Workout
      </Button>
    </div>
  )
}
