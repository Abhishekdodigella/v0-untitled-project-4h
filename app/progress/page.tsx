import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProgressCharts from "@/components/progress-charts"
import BodyMetricsForm from "@/components/body-metrics-form"

export const metadata: Metadata = {
  title: "Progress - FitTrack",
  description: "Track your fitness progress over time",
}

export default function ProgressPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Progress</h2>
      </div>

      <Tabs defaultValue="strength" className="space-y-4">
        <TabsList>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="body">Body Metrics</TabsTrigger>
          <TabsTrigger value="volume">Workout Volume</TabsTrigger>
        </TabsList>
        <TabsContent value="strength" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Strength Progress</CardTitle>
              <CardDescription>Track your strength improvements over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ProgressCharts type="strength" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Lifts</CardTitle>
                <CardDescription>Your personal records for key exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { exercise: "Bench Press", weight: "225 lbs", date: "Apr 15, 2023" },
                    { exercise: "Squat", weight: "315 lbs", date: "Mar 28, 2023" },
                    { exercise: "Deadlift", weight: "405 lbs", date: "Apr 22, 2023" },
                    { exercise: "Overhead Press", weight: "135 lbs", date: "Apr 10, 2023" },
                  ].map((lift) => (
                    <div key={lift.exercise} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{lift.exercise}</div>
                        <div className="text-sm text-muted-foreground">{lift.date}</div>
                      </div>
                      <div className="font-bold">{lift.weight}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Improvements</CardTitle>
                <CardDescription>Exercises with recent progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { exercise: "Lat Pulldown", improvement: "+10 lbs", percentage: "8%" },
                    { exercise: "Leg Press", improvement: "+25 lbs", percentage: "10%" },
                    { exercise: "Bicep Curl", improvement: "+5 lbs", percentage: "12%" },
                    { exercise: "Romanian Deadlift", improvement: "+15 lbs", percentage: "7%" },
                  ].map((item) => (
                    <div key={item.exercise} className="flex items-center justify-between">
                      <div className="font-medium">{item.exercise}</div>
                      <div className="flex items-center">
                        <span className="text-green-500 font-bold mr-2">{item.improvement}</span>
                        <span className="text-sm text-muted-foreground">({item.percentage})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="cardio" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cardio Performance</CardTitle>
              <CardDescription>Track your running and cycling metrics</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ProgressCharts type="cardio" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Running Stats</CardTitle>
                <CardDescription>Your running performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Average Pace</div>
                    <div className="font-bold">8:45 min/mile</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Longest Run</div>
                    <div className="font-bold">10.5 miles</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Total Distance (Month)</div>
                    <div className="font-bold">42.3 miles</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Best 5K Time</div>
                    <div className="font-bold">25:12</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cycling Stats</CardTitle>
                <CardDescription>Your cycling performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Average Speed</div>
                    <div className="font-bold">15.8 mph</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Longest Ride</div>
                    <div className="font-bold">28.2 miles</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Total Distance (Month)</div>
                    <div className="font-bold">124.5 miles</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Elevation Gain (Month)</div>
                    <div className="font-bold">3,245 ft</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="body" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Body Metrics</CardTitle>
                <CardDescription>Track changes in your body composition</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ProgressCharts type="body" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Update Metrics</CardTitle>
                <CardDescription>Record your latest measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <BodyMetricsForm />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Measurement History</CardTitle>
              <CardDescription>Your recorded body measurements over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Weight
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Body Fat %
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Chest
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Waist
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Hips
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        date: "May 1, 2023",
                        weight: "180 lbs",
                        bodyFat: "18%",
                        chest: "42 in",
                        waist: "34 in",
                        hips: "40 in",
                      },
                      {
                        date: "Apr 1, 2023",
                        weight: "183 lbs",
                        bodyFat: "19%",
                        chest: "42 in",
                        waist: "35 in",
                        hips: "40 in",
                      },
                      {
                        date: "Mar 1, 2023",
                        weight: "186 lbs",
                        bodyFat: "20%",
                        chest: "41 in",
                        waist: "36 in",
                        hips: "41 in",
                      },
                    ].map((record) => (
                      <tr key={record.date} className="border-b">
                        <td className="px-6 py-4">{record.date}</td>
                        <td className="px-6 py-4">{record.weight}</td>
                        <td className="px-6 py-4">{record.bodyFat}</td>
                        <td className="px-6 py-4">{record.chest}</td>
                        <td className="px-6 py-4">{record.waist}</td>
                        <td className="px-6 py-4">{record.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="volume" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workout Volume</CardTitle>
              <CardDescription>Track your training volume by muscle group</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ProgressCharts type="volume" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Volume</CardTitle>
                <CardDescription>Sets per muscle group this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { muscle: "Chest", sets: 15, target: 12 },
                    { muscle: "Back", sets: 18, target: 15 },
                    { muscle: "Legs", sets: 20, target: 20 },
                    { muscle: "Shoulders", sets: 10, target: 12 },
                    { muscle: "Arms", sets: 12, target: 10 },
                    { muscle: "Core", sets: 8, target: 10 },
                  ].map((item) => (
                    <div key={item.muscle} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{item.muscle}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.sets}/{item.target} sets
                        </div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${item.sets >= item.target ? "bg-green-500" : "bg-primary"}`}
                          style={{ width: `${Math.min((item.sets / item.target) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Trend</CardTitle>
                <CardDescription>Volume changes compared to last month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { muscle: "Chest", change: "+15%", status: "increase" },
                    { muscle: "Back", change: "+8%", status: "increase" },
                    { muscle: "Legs", change: "-5%", status: "decrease" },
                    { muscle: "Shoulders", change: "+20%", status: "increase" },
                    { muscle: "Arms", change: "0%", status: "same" },
                    { muscle: "Core", change: "+12%", status: "increase" },
                  ].map((item) => (
                    <div key={item.muscle} className="flex items-center justify-between">
                      <div className="font-medium">{item.muscle}</div>
                      <div
                        className={`font-bold ${
                          item.status === "increase"
                            ? "text-green-500"
                            : item.status === "decrease"
                              ? "text-red-500"
                              : ""
                        }`}
                      >
                        {item.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
