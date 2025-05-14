"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Fit<span className="text-primary">Track</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/workouts" className="text-muted-foreground hover:text-foreground transition-colors">
              Workouts
            </Link>
            <Link href="/progress" className="text-muted-foreground hover:text-foreground transition-colors">
              Progress
            </Link>
            <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
              Settings
            </Link>
            <ModeToggle />
            <Button asChild>
              <Link href="/workouts/new">Log Workout</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="/dashboard"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link
              href="/workouts"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Workouts
            </Link>
            <Link
              href="/progress"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Progress
            </Link>
            <Link
              href="/settings"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Settings
            </Link>
            <Button asChild className="w-full">
              <Link href="/workouts/new" onClick={toggleMenu}>
                Log Workout
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
