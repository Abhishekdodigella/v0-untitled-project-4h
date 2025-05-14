export function PromptHistory() {
  const history = [
    {
      id: 1,
      prompt: "Explain the concept of transformer models in simple terms",
      model: "GPT-4",
      date: "Today, 10:30 AM",
    },
    {
      id: 2,
      prompt: "Generate a Python function to calculate Fibonacci numbers",
      model: "Claude 3",
      date: "Yesterday, 3:45 PM",
    },
    {
      id: 3,
      prompt: "Compare and contrast supervised and unsupervised learning",
      model: "GPT-4",
      date: "Yesterday, 11:20 AM",
    },
    {
      id: 4,
      prompt: "Write a regex pattern to validate email addresses",
      model: "Claude 3",
      date: "May 12, 2:15 PM",
    },
    {
      id: 5,
      prompt: "Explain how RLHF works in language models",
      model: "GPT-4",
      date: "May 10, 9:30 AM",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Recent Prompts</h3>
      {history.length === 0 ? (
        <p className="text-sm text-muted-foreground">No prompt history yet</p>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="space-y-1 rounded-md border p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{item.model}</span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <p className="text-sm line-clamp-2">{item.prompt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
