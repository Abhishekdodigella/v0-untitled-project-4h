"use client"

import { useState } from "react"
import { CalendarIcon, ChevronDownIcon, FilterIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Sample experiment data
const experimentData = [
  {
    id: "exp-001",
    name: "GPT-4 Response Optimization",
    date: new Date(2025, 3, 10),
    model: "GPT-4",
    promptCount: 24,
    status: "completed",
    improvement: "+12.5%",
  },
  {
    id: "exp-002",
    name: "Claude Anthropic Comparison",
    date: new Date(2025, 3, 8),
    model: "Claude-3",
    promptCount: 18,
    status: "completed",
    improvement: "+8.2%",
  },
  {
    id: "exp-003",
    name: "Prompt Template Evaluation",
    date: new Date(2025, 3, 5),
    model: "GPT-4",
    promptCount: 32,
    status: "completed",
    improvement: "+15.7%",
  },
  {
    id: "exp-004",
    name: "Fine-tuning Performance Test",
    date: new Date(2025, 3, 1),
    model: "Custom-GPT",
    promptCount: 45,
    status: "completed",
    improvement: "+22.3%",
  },
  {
    id: "exp-005",
    name: "Llama 3 Benchmark",
    date: new Date(2025, 2, 28),
    model: "Llama-3",
    promptCount: 30,
    status: "completed",
    improvement: "+5.1%",
  },
]

export function ExperimentHistory() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [filterModel, setFilterModel] = useState<string[]>([])

  const models = Array.from(new Set(experimentData.map((exp) => exp.model)))

  const filteredExperiments = experimentData.filter((exp) => {
    // Filter by date if selected
    if (date && format(exp.date, "yyyy-MM-dd") !== format(date, "yyyy-MM-dd")) {
      return false
    }

    // Filter by model if any selected
    if (filterModel.length > 0 && !filterModel.includes(exp.model)) {
      return false
    }

    return true
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Experiment History</CardTitle>
          <CardDescription>View and analyze your past prompt engineering experiments</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <CalendarIcon className="h-3.5 w-3.5" />
                {date ? format(date, "MMM dd, yyyy") : "Filter by date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <FilterIcon className="h-3.5 w-3.5" />
                Model
                <ChevronDownIcon className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {models.map((model) => (
                <DropdownMenuCheckboxItem
                  key={model}
                  checked={filterModel.includes(model)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFilterModel([...filterModel, model])
                    } else {
                      setFilterModel(filterModel.filter((m) => m !== model))
                    }
                  }}
                >
                  {model}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {(date || filterModel.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8"
              onClick={() => {
                setDate(undefined)
                setFilterModel([])
              }}
            >
              Clear filters
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredExperiments.length > 0 ? (
            filteredExperiments.map((experiment) => (
              <div key={experiment.id} className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{experiment.name}</h3>
                      <Badge variant="outline">{experiment.model}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {format(experiment.date, "MMMM d, yyyy")} • {experiment.promptCount} prompts
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-900">
                      {experiment.improvement}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <Separator />
              </div>
            ))
          ) : (
            <div className="flex h-[150px] items-center justify-center">
              <p className="text-muted-foreground">No experiments match your filters</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
