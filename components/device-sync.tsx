"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, RefreshCw, Smartphone, Watch } from "lucide-react"

export default function DeviceSync() {
  const [syncing, setSyncing] = useState(false)

  const devices = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      type: "watch",
      lastSync: "Today, 10:30 AM",
      status: "connected",
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      type: "phone",
      lastSync: "Today, 10:30 AM",
      status: "connected",
    },
    {
      id: 3,
      name: "Garmin Forerunner 945",
      type: "watch",
      lastSync: "Yesterday, 8:15 PM",
      status: "connected",
    },
    {
      id: 4,
      name: "Fitbit Charge 5",
      type: "tracker",
      lastSync: "Not synced",
      status: "disconnected",
    },
  ]

  const handleSync = () => {
    setSyncing(true)
    // Simulate sync process
    setTimeout(() => {
      setSyncing(false)
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Connected Devices</h3>
        <Button onClick={handleSync} disabled={syncing}>
          {syncing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Syncing...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync Now
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {devices.map((device) => (
          <Card key={device.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-2">
                  {device.type === "watch" ? (
                    <Watch className="h-5 w-5 text-primary" />
                  ) : (
                    <Smartphone className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{device.name}</p>
                  <p className="text-sm text-muted-foreground">Last sync: {device.lastSync}</p>
                </div>
              </div>
              <Badge variant={device.status === "connected" ? "default" : "outline"}>
                {device.status === "connected" ? "Connected" : "Disconnected"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-medium mb-4">Health App Integrations</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Apple Health", status: "connected" },
            { name: "Google Fit", status: "not-connected" },
            { name: "Strava", status: "connected" },
          ].map((app) => (
            <Card key={app.name}>
              <CardContent className="p-4 flex items-center justify-between">
                <p className="font-medium">{app.name}</p>
                <Button variant={app.status === "connected" ? "outline" : "default"} size="sm">
                  {app.status === "connected" ? "Disconnect" : "Connect"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
