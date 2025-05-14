"use client"

import { useState } from "react"
import { CheckIcon, ChevronsUpDown, MoreHorizontal, PlusCircle, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample team members data
const initialTeamMembers = [
  {
    id: "user-1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    lastActive: "Just now",
  },
  {
    id: "user-2",
    name: "Taylor Smith",
    email: "taylor.smith@example.com",
    role: "member",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "TS",
    lastActive: "2 hours ago",
  },
  {
    id: "user-3",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
    role: "member",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JL",
    lastActive: "1 day ago",
  },
]

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Member", value: "member" },
  { label: "Viewer", value: "viewer" },
]

export function TeamSettings() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")
  const [selectedRole, setSelectedRole] = useState(roles[1])
  const [openRolePopover, setOpenRolePopover] = useState<string | null>(null)

  const handleInvite = () => {
    if (!inviteEmail.trim()) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(inviteEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Invitation sent",
      description: `An invitation has been sent to ${inviteEmail}`,
    })

    setInviteEmail("")
    setIsInviteDialogOpen(false)
  }

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
    toast({
      title: "Team member removed",
      description: "The team member has been removed from your team.",
    })
  }

  const updateRole = (id: string, newRole: string) => {
    setTeamMembers(teamMembers.map((member) => (member.id === id ? { ...member, role: newRole } : member)))
    setOpenRolePopover(null)

    toast({
      title: "Role updated",
      description: "The team member's role has been updated.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Management</CardTitle>
        <CardDescription>Manage your team members and their access permissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium">Team Members</h3>
              <p className="text-sm text-muted-foreground">Invite and manage your team members</p>
            </div>
            <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Invite Member
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Team Member</DialogTitle>
                  <DialogDescription>Invite a new member to join your team</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      placeholder="colleague@example.com"
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="role">Role</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" className="justify-between">
                          {selectedRole.label}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandList>
                            <CommandInput placeholder="Search role..." />
                            <CommandEmpty>No role found.</CommandEmpty>
                            <CommandGroup>
                              {roles.map((role) => (
                                <CommandItem
                                  key={role.value}
                                  onSelect={() => {
                                    setSelectedRole(role)
                                  }}
                                >
                                  <CheckIcon
                                    className={`mr-2 h-4 w-4 ${
                                      selectedRole.value === role.value ? "opacity-100" : "opacity-0"
                                    }`}
                                  />
                                  {role.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleInvite}>Send Invitation</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Popover
                      open={openRolePopover === member.id}
                      onOpenChange={(open) => {
                        if (open) {
                          setOpenRolePopover(member.id)
                        } else {
                          setOpenRolePopover(null)
                        }
                      }}
                    >
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <Badge variant={member.role === "admin" ? "default" : "outline"} className="capitalize">
                            {member.role}
                          </Badge>
                          <ChevronsUpDown className="h-3.5 w-3.5 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandList>
                            <CommandInput placeholder="Search role..." />
                            <CommandEmpty>No role found.</CommandEmpty>
                            <CommandGroup>
                              {roles.map((role) => (
                                <CommandItem key={role.value} onSelect={() => updateRole(member.id, role.value)}>
                                  <CheckIcon
                                    className={`mr-2 h-4 w-4 ${
                                      member.role === role.value ? "opacity-100" : "opacity-0"
                                    }`}
                                  />
                                  {role.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell>{member.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Reset Password</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={() => removeTeamMember(member.id)}>
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 border-t px-6 py-4">
        <div className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Your plan allows for up to 10 team members.</p>
        </div>
      </CardFooter>
    </Card>
  )
}
