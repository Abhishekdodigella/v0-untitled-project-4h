import { Activity, Dumbbell, Flame, Timer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkoutSummary() {
  const summaryItems = [
    {
      title: "Total Workouts",
      value: "12",
      change: "+2 from last month",
      icon: Activity,
    },
    {
      title: "Active Minutes",
      value: "485",
      change: "+45 from last month",
      icon: Timer,
    },
    {
      title: "Calories Burned",
      value: "8,250",
      change: "+12% from last month",
      icon: Flame,
    },
    {
      title: "Weight Lifted",
      value: "24,500 lbs",
      change: "+8% from last month",
      icon: Dumbbell,
    },
  ]

  return (
    <>
      {summaryItems.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
