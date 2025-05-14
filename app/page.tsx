import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BrainCircuit, Database, FlaskConical, LineChart, Lock, Sparkles, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LLM Playground</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#models" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Models
            </Link>
            <Link href="#research" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Research
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Experiment with AI Models Like Never Before
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    An interactive platform for researchers and developers to test, fine-tune, and optimize large
                    language models.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/playground/demo">
                    <Button variant="outline" size="lg">
                      Try Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl" />
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="LLM Playground Interface"
                  className="relative rounded-lg border shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to experiment with and optimize large language models
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Advanced Prompting</h3>
                <p className="text-muted-foreground text-center">
                  Test, benchmark, and refine prompts with real-time feedback and version control.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Model Fine-Tuning</h3>
                <p className="text-muted-foreground text-center">
                  Upload datasets, fine-tune models, and analyze performance improvements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Comprehensive Analytics</h3>
                <p className="text-muted-foreground text-center">
                  Track model responses, latency, and accuracy metrics with detailed visualizations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Authentication</h3>
                <p className="text-muted-foreground text-center">
                  Role-based access control for researchers, developers, and administrators.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Multi-Model Access</h3>
                <p className="text-muted-foreground text-center">
                  Test and compare models from AWS, Azure, GCP, and other providers in one place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Automation Tools</h3>
                <p className="text-muted-foreground text-center">
                  Auto-generate prompt variations, analyze results, and get optimization suggestions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section id="models" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Supported Models</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access and experiment with the latest language models from leading providers
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "OpenAI GPT-4", provider: "OpenAI", category: "Text Generation" },
                { name: "Claude 3", provider: "Anthropic", category: "Text Generation" },
                { name: "Gemini Pro", provider: "Google", category: "Multimodal" },
                { name: "Llama 3", provider: "Meta", category: "Open Source" },
                { name: "Mistral Large", provider: "Mistral AI", category: "Text Generation" },
                { name: "Cohere Command", provider: "Cohere", category: "Text Generation" },
                { name: "Bedrock Claude", provider: "AWS", category: "Cloud API" },
                { name: "Azure OpenAI", provider: "Microsoft", category: "Cloud API" },
                { name: "Vertex AI", provider: "Google Cloud", category: "Cloud API" },
              ].map((model) => (
                <div key={model.name} className="flex flex-col space-y-2 rounded-lg border bg-background p-4">
                  <h3 className="font-bold">{model.name}</h3>
                  <p className="text-sm text-muted-foreground">Provider: {model.provider}</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      {model.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Research-Driven Fine-Tuning
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Upload your datasets, fine-tune models, and analyze performance improvements with comprehensive
                    metrics.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                      <span>Custom dataset upload and preprocessing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                      <span>Fine-tuning with hyperparameter optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                      <span>Performance comparison with baseline models</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                      <span>Detailed analytics and evaluation metrics</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link href="/research">
                    <Button>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fine-tuning Interface"
                  className="rounded-lg border shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your research and development needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  description: "Perfect for individual researchers and developers",
                  features: [
                    "Access to basic models",
                    "Limited API calls",
                    "Basic analytics",
                    "Community support",
                    "1 user account",
                  ],
                },
                {
                  name: "Professional",
                  price: "$99",
                  description: "Ideal for research teams and small companies",
                  features: [
                    "Access to all models",
                    "Increased API call limits",
                    "Advanced analytics",
                    "Priority support",
                    "5 user accounts",
                    "Fine-tuning capabilities",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For organizations with advanced requirements",
                  features: [
                    "Unlimited access to all models",
                    "Unlimited API calls",
                    "Custom model deployment",
                    "Dedicated support",
                    "Unlimited user accounts",
                    "Advanced fine-tuning",
                    "Custom integrations",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-lg border ${
                    plan.highlighted ? "border-primary shadow-lg" : ""
                  } bg-background p-6`}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline text-3xl font-bold">
                      {plan.price}
                      {plan.price !== "Custom" && (
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="mb-6 flex-1 space-y-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.highlighted ? "default" : "outline"} className="mt-auto">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your AI Research?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of researchers and developers who are pushing the boundaries of AI with our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} LLM Playground. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="underline underline-offset-4 hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
