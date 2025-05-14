import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CalendarIcon, PlusCircle } from "lucide-react"
import Link from "next/link"
import WorkoutSummary from "@/components/workout-summary"
import ActivityOverview from "@/components/activity-overview"
import RecentWorkouts from "@/components/recent-workouts"
import ProgressCharts from "@/components/progress-charts"
import UpcomingWorkouts from "@/components/upcoming-workouts"
import DeviceSync from "@/components/device-sync"

export const metadata: Metadata = {
  title: "Dashboard - FitTrack",
  description: "View your fitness progress and recent workouts",
}

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            May 2023
          </Button>
          <Button asChild>
            <Link href="/workouts/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Log Workout
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <WorkoutSummary />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ActivityOverview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
                <CardDescription>You have completed 12 workouts this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentWorkouts />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
                <CardDescription>Your scheduled workouts for the next 7 days.</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingWorkouts />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Weekly Goals</CardTitle>
                <CardDescription>Your progress towards this week's goals.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Workouts Completed</div>
                      <div className="text-sm text-muted-foreground">3/5</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-3/5 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Active Minutes</div>
                      <div className="text-sm text-muted-foreground">120/150</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-4/5 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Calories Burned</div>
                      <div className="text-sm text-muted-foreground">1,800/2,500</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[72%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Strength Progress</CardTitle>
                <CardDescription>Your strength improvements over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ProgressCharts type="strength" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Body Metrics</CardTitle>
                <CardDescription>Weight and body composition</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ProgressCharts type="body" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Cardio Performance</CardTitle>
                <CardDescription>Running and cycling metrics</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ProgressCharts type="cardio" />
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Workout Volume</CardTitle>
                <CardDescription>Total volume by muscle group</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ProgressCharts type="volume" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>Manage your connected fitness devices and apps</CardDescription>
            </CardHeader>
            <CardContent>
              <DeviceSync />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
