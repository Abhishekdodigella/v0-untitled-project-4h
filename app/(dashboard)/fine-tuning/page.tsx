import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FineTuningJobs } from "@/components/fine-tuning/fine-tuning-jobs"
import { FineTuningForm } from "@/components/fine-tuning/fine-tuning-form"
import { DatasetList } from "@/components/fine-tuning/dataset-list"

export const metadata: Metadata = {
  title: "Fine-Tuning - LLM Playground",
  description: "Fine-tune language models with your custom datasets",
}

export default function FineTuningPage() {
  return (
    <div className="flex-1 p-4 pt-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Fine-Tuning</h2>
        <p className="text-muted-foreground">Fine-tune language models with your custom datasets</p>
      </div>
      <Tabs defaultValue="jobs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="jobs">Fine-Tuning Jobs</TabsTrigger>
          <TabsTrigger value="new">New Fine-Tuning</TabsTrigger>
          <TabsTrigger value="datasets">Datasets</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fine-Tuning Jobs</CardTitle>
              <CardDescription>View and manage your fine-tuning jobs</CardDescription>
            </CardHeader>
            <CardContent>
              <FineTuningJobs />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Fine-Tuning Job</CardTitle>
              <CardDescription>Configure and start a new fine-tuning job</CardDescription>
            </CardHeader>
            <CardContent>
              <FineTuningForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="datasets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Datasets</CardTitle>
              <CardDescription>Manage your training and validation datasets</CardDescription>
            </CardHeader>
            <CardContent>
              <DatasetList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
