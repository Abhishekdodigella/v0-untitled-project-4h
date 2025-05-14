import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, PlusCircle, Search } from "lucide-react"
import Link from "next/link"
import WorkoutList from "@/components/workout-list"
import WorkoutCalendar from "@/components/workout-calendar"

export const metadata: Metadata = {
  title: "Workouts - FitTrack",
  description: "View and manage your workout history",
}

export default function WorkoutsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Workouts</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/workouts/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Log Workout
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex w-full items-center space-x-2 sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search workouts..." className="pl-8" />
          </div>
        </div>
        <div className="flex w-full sm:w-auto items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Workout Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="strength">Strength Training</SelectItem>
              <SelectItem value="cardio">Cardio</SelectItem>
              <SelectItem value="hiit">HIIT</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <WorkoutList />
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <WorkoutCalendar />
        </TabsContent>
      </Tabs>
    </div>
  )
}
