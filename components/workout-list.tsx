import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Dumbbell, MoreHorizontal, TrendingUp } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function WorkoutList() {
  const workouts = [
    {
      id: 1,
      name: "Upper Body Strength",
      type: "Strength",
      date: "Today",
      time: "9:30 AM",
      duration: "45 min",
      intensity: "High",
      exercises: 8,
    },
    {
      id: 2,
      name: "5K Morning Run",
      type: "Cardio",
      date: "Yesterday",
      time: "7:15 AM",
      duration: "28 min",
      intensity: "Medium",
      exercises: 1,
    },
    {
      id: 3,
      name: "Full Body HIIT",
      type: "HIIT",
      date: "May 12, 2023",
      time: "6:00 PM",
      duration: "35 min",
      intensity: "High",
      exercises: 12,
    },
    {
      id: 4,
      name: "Leg Day",
      type: "Strength",
      date: "May 10, 2023",
      time: "5:30 PM",
      duration: "50 min",
      intensity: "High",
      exercises: 7,
    },
    {
      id: 5,
      name: "Yoga Flow",
      type: "Yoga",
      date: "May 8, 2023",
      time: "8:00 AM",
      duration: "40 min",
      intensity: "Low",
      exercises: 15,
    },
    {
      id: 6,
      name: "Interval Cycling",
      type: "Cardio",
      date: "May 6, 2023",
      time: "4:45 PM",
      duration: "35 min",
      intensity: "High",
      exercises: 1,
    },
    {
      id: 7,
      name: "Core Workout",
      type: "Strength",
      date: "May 4, 2023",
      time: "6:30 PM",
      duration: "30 min",
      intensity: "Medium",
      exercises: 6,
    },
  ]

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="rounded-lg border p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="rounded-md bg-primary/10 p-2">
                {workout.type === "Strength" ? (
                  <Dumbbell className="h-5 w-5 text-primary" />
                ) : workout.type === "Cardio" ? (
                  <TrendingUp className="h-5 w-5 text-primary" />
                ) : (
                  <Clock className="h-5 w-5 text-primary" />
                )}
              </div>
              <div>
                <h3 className="font-medium">{workout.name}</h3>
                <div className="flex items-center pt-1 text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{workout.date}</span>
                  <span className="mx-1">•</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{workout.time}</span>
                  <span className="mx-1">•</span>
                  <span>{workout.duration}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant={
                  workout.intensity === "High" ? "default" : workout.intensity === "Medium" ? "secondary" : "outline"
                }
              >
                {workout.intensity}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href={`/workouts/${workout.id}`}>View Details</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Edit Workout</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium">{workout.exercises}</span> exercises
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href={`/workouts/${workout.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
