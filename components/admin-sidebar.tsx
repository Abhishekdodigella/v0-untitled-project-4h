"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  FileText,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="w-64 border-r bg-card h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <Link href="/admin" className="flex items-center">
          <span className="text-xl font-bold">
            Support<span className="text-primary">Hub</span>
          </span>
          <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Admin</span>
        </Link>
      </div>

      <div className="flex-1 py-6 px-4 overflow-auto">
        <nav className="space-y-1">
          <Link href="/admin">
            <Button variant={isActive("/admin") ? "secondary" : "ghost"} className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Link href="/admin/tickets">
            <Button variant={isActive("/admin/tickets") ? "secondary" : "ghost"} className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Tickets
            </Button>
          </Link>

          <Link href="/admin/chat">
            <Button variant={isActive("/admin/chat") ? "secondary" : "ghost"} className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Live Chat
            </Button>
          </Link>

          <Link href="/admin/customers">
            <Button variant={isActive("/admin/customers") ? "secondary" : "ghost"} className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Customers
            </Button>
          </Link>

          <Link href="/admin/orders">
            <Button variant={isActive("/admin/orders") ? "secondary" : "ghost"} className="w-full justify-start">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </Link>

          <Link href="/admin/knowledge-base">
            <Button
              variant={isActive("/admin/knowledge-base") ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Knowledge Base
            </Button>
          </Link>

          <Link href="/admin/reports">
            <Button variant={isActive("/admin/reports") ? "secondary" : "ghost"} className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              Reports
            </Button>
          </Link>

          <Link href="/admin/settings">
            <Button variant={isActive("/admin/settings") ? "secondary" : "ghost"} className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@example.com</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
