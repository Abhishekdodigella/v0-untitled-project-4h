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
            Support<span className="text-primary">Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/knowledge-base" className="text-muted-foreground hover:text-foreground transition-colors">
              Help Center
            </Link>
            <Link href="/tickets" className="text-muted-foreground hover:text-foreground transition-colors">
              My Tickets
            </Link>
            <Link href="/orders/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Order Support
            </Link>
            <Link href="/chat" className="text-muted-foreground hover:text-foreground transition-colors">
              Live Chat
            </Link>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
            <ModeToggle />
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
              href="/knowledge-base"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Help Center
            </Link>
            <Link
              href="/tickets"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              My Tickets
            </Link>
            <Link
              href="/orders/support"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Order Support
            </Link>
            <Link
              href="/chat"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Live Chat
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
