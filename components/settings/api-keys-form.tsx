"use client"

import { useState } from "react"
import { Copy, EyeIcon, EyeOffIcon, PlusCircle, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample API keys data
const initialApiKeys = [
  {
    id: "key-1",
    name: "Development",
    key: "sk_dev_2023_04XYZabc123def456ghi789jkl0",
    created: "Apr 23, 2025",
    lastUsed: "2 hours ago",
    status: "active",
  },
  {
    id: "key-2",
    name: "Production",
    key: "sk_prod_2023_04mnopqr123stu456vwx789yz0",
    created: "Apr 10, 2025",
    lastUsed: "1 day ago",
    status: "active",
  },
  {
    id: "key-3",
    name: "Testing",
    key: "sk_test_2023_04abcdef123ghi456jkl789mno0",
    created: "Mar 15, 2025",
    lastUsed: "2 weeks ago",
    status: "inactive",
  },
]

export function ApiKeysForm() {
  const [apiKeys, setApiKeys] = useState(initialApiKeys)
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyType, setNewKeyType] = useState("development")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})
  const [newKey, setNewKey] = useState<string | null>(null)

  const toggleKeyVisibility = (id: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const createNewKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please provide a name for your API key",
        variant: "destructive",
      })
      return
    }

    // Generate a mock API key
    const keyPrefix = newKeyType === "development" ? "sk_dev" : newKeyType === "production" ? "sk_prod" : "sk_test"
    const randomPart = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const generatedKey = `${keyPrefix}_${new Date().getFullYear()}_${randomPart}`

    setNewKey(generatedKey)

    const newApiKey = {
      id: `key-${apiKeys.length + 1}`,
      name: newKeyName,
      key: generatedKey,
      created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      lastUsed: "Just now",
      status: "active",
    }

    setApiKeys([...apiKeys, newApiKey])
    setShowKeys((prev) => ({
      ...prev,
      [newApiKey.id]: true,
    }))

    setNewKeyName("")
    setNewKeyType("development")
  }

  const deleteKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id))
    toast({
      title: "API key deleted",
      description: "The API key has been permanently deleted.",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "API key has been copied to your clipboard.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>Manage your API keys for accessing the LLM Playground services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium">Your API Keys</h3>
              <p className="text-sm text-muted-foreground">Use these keys to authenticate requests with our API</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create New Key
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New API Key</DialogTitle>
                  <DialogDescription>Generate a new API key for your applications</DialogDescription>
                </DialogHeader>

                {newKey ? (
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-sm font-medium mb-2">Your new API key:</p>
                      <div className="flex items-center gap-2">
                        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                          {newKey}
                        </code>
                        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(newKey)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Make sure to copy your API key now. You won't be able to see it again!
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Key Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Development, Production"
                        value={newKeyName}
                        onChange={(e) => setNewKeyName(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Key Type</Label>
                      <Select value={newKeyType} onValueChange={setNewKeyType}>
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select key type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="production">Production</SelectItem>
                          <SelectItem value="testing">Testing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                <DialogFooter>
                  {newKey ? (
                    <Button
                      onClick={() => {
                        setIsDialogOpen(false)
                        setNewKey(null)
                      }}
                    >
                      Done
                    </Button>
                  ) : (
                    <Button onClick={createNewKey}>Create Key</Button>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>API Key</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((apiKey) => (
                <TableRow key={apiKey.id}>
                  <TableCell className="font-medium">{apiKey.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs">
                        {showKeys[apiKey.id]
                          ? apiKey.key
                          : `${apiKey.key.substring(0, 8)}...${apiKey.key.substring(apiKey.key.length - 4)}`}
                      </code>
                      <Button variant="ghost" size="sm" onClick={() => toggleKeyVisibility(apiKey.id)}>
                        {showKeys[apiKey.id] ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(apiKey.key)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{apiKey.created}</TableCell>
                  <TableCell>{apiKey.lastUsed}</TableCell>
                  <TableCell>
                    <Badge variant={apiKey.status === "active" ? "default" : "secondary"}>
                      {apiKey.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => deleteKey(apiKey.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 border-t px-6 py-4">
        <div className="flex items-center space-x-2">
          <Switch id="revoke-on-logout" />
          <Label htmlFor="revoke-on-logout">Revoke all keys on logout</Label>
        </div>
        <p className="text-sm text-muted-foreground">
          For security reasons, we recommend rotating your API keys periodically.
        </p>
      </CardFooter>
    </Card>
  )
}
