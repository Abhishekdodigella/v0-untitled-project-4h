import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function FineTuningJobs() {
  const jobs = [
    {
      id: "ft-1",
      name: "Sentiment Analysis Model",
      baseModel: "GPT-3.5 Turbo",
      status: "completed",
      progress: 100,
      created: "May 12, 2023",
      completed: "May 13, 2023",
    },
    {
      id: "ft-2",
      name: "Customer Support Assistant",
      baseModel: "Claude 3 Sonnet",
      status: "in-progress",
      progress: 65,
      created: "May 14, 2023",
      completed: null,
    },
    {
      id: "ft-3",
      name: "Code Review Assistant",
      baseModel: "GPT-4",
      status: "queued",
      progress: 0,
      created: "May 15, 2023",
      completed: null,
    },
  ]

  return (
    <div className="space-y-4">
      {jobs.length === 0 ? (
        <div className="text-center py-8 border rounded-md">
          <p className="text-muted-foreground">No fine-tuning jobs found</p>
          <p className="text-sm text-muted-foreground mt-1">Create a new fine-tuning job to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="rounded-md border p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{job.name}</h3>
                  <p className="text-sm text-muted-foreground">Base model: {job.baseModel}</p>
                </div>
                <Badge
                  variant={
                    job.status === "completed" ? "default" : job.status === "in-progress" ? "secondary" : "outline"
                  }
                >
                  {job.status}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>{job.progress}%</span>
                </div>
                <Progress value={job.progress} />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-muted-foreground">Created: </span>
                  <span>{job.created}</span>
                </div>
                {job.completed && (
                  <div>
                    <span className="text-muted-foreground">Completed: </span>
                    <span>{job.completed}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-2">
                {job.status === "completed" && (
                  <Button variant="outline" size="sm">
                    View Results
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
