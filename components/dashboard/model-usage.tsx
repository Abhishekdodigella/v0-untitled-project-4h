export function ModelUsage() {
  const models = [
    {
      name: "GPT-4",
      usage: 45,
      avgResponseTime: "1.2s",
      accuracy: "92%",
    },
    {
      name: "Claude 3",
      usage: 30,
      avgResponseTime: "0.9s",
      accuracy: "89%",
    },
    {
      name: "Gemini Pro",
      usage: 15,
      avgResponseTime: "1.1s",
      accuracy: "87%",
    },
    {
      name: "Llama 3",
      usage: 10,
      avgResponseTime: "1.5s",
      accuracy: "85%",
    },
  ]

  return (
    <div className="space-y-4">
      {models.map((model) => (
        <div key={model.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{model.name}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Usage: {model.usage}%</span>
                <span>Avg. Response: {model.avgResponseTime}</span>
                <span>Accuracy: {model.accuracy}</span>
              </div>
            </div>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${model.usage}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
