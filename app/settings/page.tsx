import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Settings - FitTrack",
  description: "Manage your account settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" defaultValue="john.doe@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell us about yourself" defaultValue="Fitness enthusiast and runner" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Change Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the appearance of the application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select defaultValue="system">
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dense-mode">Dense Mode</Label>
                <Switch id="dense-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="animations">Animations</Label>
                <Switch id="animations" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Units</CardTitle>
              <CardDescription>Set your preferred measurement units</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weight-unit">Weight</Label>
                <Select defaultValue="lbs">
                  <SelectTrigger id="weight-unit">
                    <SelectValue placeholder="Select weight unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                    <SelectItem value="kg">Kilograms (kg)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="distance-unit">Distance</Label>
                <Select defaultValue="mi">
                  <SelectTrigger id="distance-unit">
                    <SelectValue placeholder="Select distance unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mi">Miles (mi)</SelectItem>
                    <SelectItem value="km">Kilometers (km)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="height-unit">Height</Label>
                <Select defaultValue="in">
                  <SelectTrigger id="height-unit">
                    <SelectValue placeholder="Select height unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in">Inches (in)</SelectItem>
                    <SelectItem value="cm">Centimeters (cm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Units</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-workout-reminders">Workout Reminders</Label>
                  <Switch id="email-workout-reminders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-goal-updates">Goal Updates</Label>
                  <Switch id="email-goal-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-achievements">Achievement Notifications</Label>
                  <Switch id="email-achievements" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-newsletter">Weekly Newsletter</Label>
                  <Switch id="email-newsletter" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-workout-reminders">Workout Reminders</Label>
                  <Switch id="push-workout-reminders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-goal-updates">Goal Updates</Label>
                  <Switch id="push-goal-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-achievements">Achievement Notifications</Label>
                  <Switch id="push-achievements" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-friend-activity">Friend Activity</Label>
                  <Switch id="push-friend-activity" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>Manage your connected fitness apps and devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    name: "Apple Health",
                    status: "connected",
                    lastSync: "Today at 10:30 AM",
                    icon: "apple",
                  },
                  {
                    name: "Google Fit",
                    status: "not-connected",
                    lastSync: null,
                    icon: "google",
                  },
                  {
                    name: "Fitbit",
                    status: "connected",
                    lastSync: "Yesterday at 8:15 PM",
                    icon: "fitbit",
                  },
                  {
                    name: "Garmin Connect",
                    status: "not-connected",
                    lastSync: null,
                    icon: "garmin",
                  },
                  {
                    name: "Strava",
                    status: "connected",
                    lastSync: "May 10, 2023 at 6:45 PM",
                    icon: "strava",
                  },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-lg">{integration.icon.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {integration.status === "connected"
                            ? `Last synced: ${integration.lastSync}`
                            : "Not connected"}
                        </p>
                      </div>
                    </div>
                    <Button variant={integration.status === "connected" ? "destructive" : "default"}>
                      {integration.status === "connected" ? "Disconnect" : "Connect"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Sharing</CardTitle>
              <CardDescription>Control how your fitness data is shared</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Public Profile</Label>
                  <p className="text-sm text-muted-foreground">Allow others to see your profile and achievements</p>
                </div>
                <Switch id="public-profile" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Share Workouts</Label>
                  <p className="text-sm text-muted-foreground">Automatically share your workouts on social media</p>
                </div>
                <Switch id="share-workouts" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Anonymous Data Collection</Label>
                  <p className="text-sm text-muted-foreground">Allow anonymous usage data to improve our services</p>
                </div>
                <Switch id="anonymous-data" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Sharing Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
