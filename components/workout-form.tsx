"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Loader2, Plus, Trash2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function WorkoutForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [date, setDate] = useState<Date>(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [exercises, setExercises] = useState([{ id: 1, name: "", sets: "", reps: "", weight: "", notes: "" }])

  const handleAddExercise = () => {
    setExercises([
      ...exercises,
      {
        id: exercises.length + 1,
        name: "",
        sets: "",
        reps: "",
        weight: "",
        notes: "",
      },
    ])
  }

  const handleRemoveExercise = (id: number) => {
    if (exercises.length > 1) {
      setExercises(exercises.filter((exercise) => exercise.id !== id))
    }
  }

  const handleExerciseChange = (id: number, field: string, value: string) => {
    setExercises(exercises.map((exercise) => (exercise.id === id ? { ...exercise, [field]: value } : exercise)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Workout logged successfully",
      description: "Your workout has been saved.",
    })

    setIsSubmitting(false)
    router.push("/workouts")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="workout-name">Workout Name</Label>
          <Input id="workout-name" placeholder="e.g. Upper Body Strength" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="workout-type">Workout Type</Label>
          <Select required defaultValue="strength">
            <SelectTrigger id="workout-type">
              <SelectValue placeholder="Select workout type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strength">Strength Training</SelectItem>
              <SelectItem value="cardio">Cardio</SelectItem>
              <SelectItem value="hiit">HIIT</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={(date) => date && setDate(date)} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <div className="flex items-center space-x-2">
            <Input id="duration" type="number" placeholder="45" required />
            <span className="text-sm text-muted-foreground">minutes</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="intensity">Intensity</Label>
          <Select required defaultValue="medium">
            <SelectTrigger id="intensity">
              <SelectValue placeholder="Select intensity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="strength" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="strength" className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Exercises</h3>
            <Button type="button" variant="outline" size="sm" onClick={handleAddExercise}>
              <Plus className="mr-2 h-4 w-4" />
              Add Exercise
            </Button>
          </div>

          {exercises.map((exercise, index) => (
            <div key={exercise.id} className="space-y-4">
              {index > 0 && <Separator />}
              <div className="flex items-center justify-between pt-2">
                <h4 className="font-medium">Exercise {index + 1}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveExercise(exercise.id)}
                  disabled={exercises.length === 1}
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`exercise-name-${exercise.id}`}>Exercise Name</Label>
                  <Input
                    id={`exercise-name-${exercise.id}`}
                    value={exercise.name}
                    onChange={(e) => handleExerciseChange(exercise.id, "name", e.target.value)}
                    placeholder="e.g. Bench Press"
                    required
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor={`sets-${exercise.id}`}>Sets</Label>
                    <Input
                      id={`sets-${exercise.id}`}
                      value={exercise.sets}
                      onChange={(e) => handleExerciseChange(exercise.id, "sets", e.target.value)}
                      placeholder="3"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`reps-${exercise.id}`}>Reps</Label>
                    <Input
                      id={`reps-${exercise.id}`}
                      value={exercise.reps}
                      onChange={(e) => handleExerciseChange(exercise.id, "reps", e.target.value)}
                      placeholder="10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`weight-${exercise.id}`}>Weight</Label>
                    <Input
                      id={`weight-${exercise.id}`}
                      value={exercise.weight}
                      onChange={(e) => handleExerciseChange(exercise.id, "weight", e.target.value)}
                      placeholder="135"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`notes-${exercise.id}`}>Notes</Label>
                <Textarea
                  id={`notes-${exercise.id}`}
                  value={exercise.notes}
                  onChange={(e) => handleExerciseChange(exercise.id, "notes", e.target.value)}
                  placeholder="Any notes about this exercise..."
                  rows={2}
                />
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="cardio" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cardio-type">Cardio Type</Label>
              <Select>
                <SelectTrigger id="cardio-type">
                  <SelectValue placeholder="Select cardio type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="cycling">Cycling</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="elliptical">Elliptical</SelectItem>
                  <SelectItem value="rowing">Rowing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="distance">Distance</Label>
              <div className="flex items-center space-x-2">
                <Input id="distance" type="number" step="0.01" placeholder="5.0" />
                <Select defaultValue="miles">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="miles">miles</SelectItem>
                    <SelectItem value="km">km</SelectItem>
                    <SelectItem value="meters">meters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="pace">Pace</Label>
              <div className="flex items-center space-x-2">
                <Input id="pace" placeholder="8:30" />
                <span className="text-sm text-muted-foreground">min/mile</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="calories">Calories</Label>
              <Input id="calories" type="number" placeholder="350" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heart-rate">Avg. Heart Rate</Label>
              <div className="flex items-center space-x-2">
                <Input id="heart-rate" type="number" placeholder="145" />
                <span className="text-sm text-muted-foreground">bpm</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardio-notes">Notes</Label>
            <Textarea id="cardio-notes" placeholder="Any notes about this cardio session..." rows={3} />
          </div>
        </TabsContent>
        <TabsContent value="notes" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="workout-notes">Workout Notes</Label>
            <Textarea id="workout-notes" placeholder="Any general notes about this workout..." rows={5} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feeling">How did you feel?</Label>
            <Select>
              <SelectTrigger id="feeling">
                <SelectValue placeholder="Select how you felt" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="great">Great - Felt strong and energetic</SelectItem>
                <SelectItem value="good">Good - Solid workout</SelectItem>
                <SelectItem value="average">Average - Nothing special</SelectItem>
                <SelectItem value="tired">Tired - Low energy</SelectItem>
                <SelectItem value="poor">Poor - Struggled to complete</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={() => router.push("/workouts")}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Workout"
          )}
        </Button>
      </div>
    </form>
  )
}
