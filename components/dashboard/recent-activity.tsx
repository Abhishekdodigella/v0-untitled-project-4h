import { Badge } from "@/components/ui/badge"
import { BrainCircuit, FlaskConical, Zap } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "experiment",
      name: "GPT-4 Response Testing",
      date: "Today, 10:30 AM",
      status: "completed",
    },
    {
      id: 2,
      type: "fine-tuning",
      name: "Custom Classification Model",
      date: "Yesterday, 2:15 PM",
      status: "in-progress",
    },
    {
      id: 3,
      type: "api",
      name: "Azure OpenAI Integration",
      date: "Yesterday, 11:45 AM",
      status: "completed",
    },
    {
      id: 4,
      type: "experiment",
      name: "Prompt Engineering Test",
      date: "May 12, 4:30 PM",
      status: "completed",
    },
    {
      id: 5,
      type: "api",
      name: "Anthropic Claude API Test",
      date: "May 10, 9:15 AM",
      status: "failed",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          <div className="rounded-md bg-primary/10 p-2">
            {activity.type === "experiment" ? (
              <BrainCircuit className="h-4 w-4 text-primary" />
            ) : activity.type === "fine-tuning" ? (
              <FlaskConical className="h-4 w-4 text-primary" />
            ) : (
              <Zap className="h-4 w-4 text-primary" />
            )}
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-xs text-muted-foreground">{activity.date}</p>
          </div>
          <Badge
            variant={
              activity.status === "completed"
                ? "default"
                : activity.status === "in-progress"
                  ? "secondary"
                  : "destructive"
            }
          >
            {activity.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}
