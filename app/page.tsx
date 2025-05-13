import TextGenerationTool from "@/components/text-generation-tool"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            AI Text <span className="text-primary">Generator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into polished content with our AI-powered text generation tool.
          </p>
        </header>

        <TextGenerationTool />
      </div>
    </div>
  )
}
