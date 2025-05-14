"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function BodyMetricsForm() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Metrics saved",
      description: "Your body measurements have been updated.",
    })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <Label htmlFor="weight">Weight</Label>
        <div className="flex items-center space-x-2">
          <Input id="weight" type="number" step="0.1" placeholder="180.0" required />
          <span className="text-sm text-muted-foreground">lbs</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="body-fat">Body Fat Percentage</Label>
        <div className="flex items-center space-x-2">
          <Input id="body-fat" type="number" step="0.1" placeholder="18.0" />
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="chest">Chest</Label>
          <div className="flex items-center space-x-2">
            <Input id="chest" type="number" step="0.1" placeholder="42.0" />
            <span className="text-sm text-muted-foreground">in</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="waist">Waist</Label>
          <div className="flex items-center space-x-2">
            <Input id="waist" type="number" step="0.1" placeholder="34.0" />
            <span className="text-sm text-muted-foreground">in</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="hips">Hips</Label>
          <div className="flex items-center space-x-2">
            <Input id="hips" type="number" step="0.1" placeholder="40.0" />
            <span className="text-sm text-muted-foreground">in</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="thighs">Thighs</Label>
          <div className="flex items-center space-x-2">
            <Input id="thighs" type="number" step="0.1" placeholder="24.0" />
            <span className="text-sm text-muted-foreground">in</span>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Save Measurements"
        )}
      </Button>
    </form>
  )
}
