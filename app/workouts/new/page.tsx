import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import WorkoutForm from "@/components/workout-form"

export const metadata: Metadata = {
  title: "Log Workout - FitTrack",
  description: "Record a new workout session",
}

export default function NewWorkoutPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
          <Link href="/workouts">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Log Workout</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workout Details</CardTitle>
          <CardDescription>Record your workout session details and exercises</CardDescription>
        </CardHeader>
        <CardContent>
          <WorkoutForm />
        </CardContent>
      </Card>
    </div>
  )
}
