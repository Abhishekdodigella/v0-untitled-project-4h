import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { BrainCircuit } from "lucide-react"
import Link from "next/link"

// This would normally check the auth state from a server component
const getUser = async () => {
  // Mock user data - in a real app, this would come from your auth provider
  return {
    name: "John Doe",
    email: "john@example.com",
    image: "/placeholder.svg?height=32&width=32",
  }
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">LLM Playground</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserAccountNav user={user} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px]">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
