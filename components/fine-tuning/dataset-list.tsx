import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export function DatasetList() {
  const datasets = [
    {
      id: "ds-1",
      name: "Customer Support Conversations",
      type: "training",
      format: "JSONL",
      samples: 2500,
      size: "4.2 MB",
      created: "Apr 15, 2023",
    },
    {
      id: "ds-2",
      name: "Customer Support Validation",
      type: "validation",
      format: "JSONL",
      samples: 500,
      size: "0.9 MB",
      created: "Apr 15, 2023",
    },
    {
      id: "ds-3",
      name: "Code Reviews",
      type: "training",
      format: "JSONL",
      samples: 1800,
      size: "5.7 MB",
      created: "May 2, 2023",
    },
    {
      id: "ds-4",
      name: "Code Reviews Validation",
      type: "validation",
      format: "JSONL",
      samples: 400,
      size: "1.2 MB",
      created: "May 2, 2023",
    },
    {
      id: "ds-5",
      name: "Sentiment Analysis",
      type: "training",
      format: "CSV",
      samples: 5000,
      size: "2.3 MB",
      created: "May 10, 2023",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Dataset
        </Button>
      </div>

      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium bg-muted">
          <div className="col-span-4">Dataset</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Format</div>
          <div className="col-span-2">Samples</div>
          <div className="col-span-2">Actions</div>
        </div>
        <div className="divide-y">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-4">
                <p className="font-medium">{dataset.name}</p>
                <p className="text-xs text-muted-foreground">
                  {dataset.size} • Created {dataset.created}
                </p>
              </div>
              <div className="col-span-2">
                <Badge variant={dataset.type === "training" ? "default" : "secondary"}>{dataset.type}</Badge>
              </div>
              <div className="col-span-2">{dataset.format}</div>
              <div className="col-span-2">{dataset.samples.toLocaleString()}</div>
              <div className="col-span-2 flex space-x-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
