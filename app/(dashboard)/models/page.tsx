import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModelList } from "@/components/models/model-list"
import { ModelIntegrations } from "@/components/models/model-integrations"

export const metadata: Metadata = {
  title: "Models - LLM Playground",
  description: "Manage and configure AI models",
}

export default function ModelsPage() {
  return (
    <div className="flex-1 p-4 pt-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Models</h2>
        <p className="text-muted-foreground">Manage and configure AI models for your experiments</p>
      </div>
      <Tabs defaultValue="available" className="space-y-4">
        <TabsList>
          <TabsTrigger value="available">Available Models</TabsTrigger>
          <TabsTrigger value="integrations">API Integrations</TabsTrigger>
          <TabsTrigger value="custom">Custom Models</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Models</CardTitle>
              <CardDescription>Models that are ready to use in your experiments</CardDescription>
            </CardHeader>
            <CardContent>
              <ModelList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integrations</CardTitle>
              <CardDescription>Configure connections to external AI services</CardDescription>
            </CardHeader>
            <CardContent>
              <ModelIntegrations />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Custom Models</CardTitle>
              <CardDescription>Your fine-tuned and custom-deployed models</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This section displays your custom models, including those you've fine-tuned or deployed yourself.
              </p>
              <div className="text-center py-8 border rounded-md">
                <p className="text-muted-foreground">No custom models found</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Fine-tune a model or deploy your own to get started
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
