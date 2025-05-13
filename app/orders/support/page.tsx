import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, Clock, Package, Search, ShoppingBag, Truck } from "lucide-react"
import OrderSupportForm from "@/components/order-support-form"

// Mock recent orders
const recentOrders = [
  {
    id: "ORD-5678",
    date: "May 10, 2023",
    status: "Delivered",
    items: 3,
    total: "$129.99",
  },
  {
    id: "ORD-5432",
    date: "April 28, 2023",
    status: "Shipped",
    items: 2,
    total: "$79.50",
  },
  {
    id: "ORD-5123",
    date: "April 15, 2023",
    status: "Delivered",
    items: 1,
    total: "$45.99",
  },
]

export default function OrderSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Order Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help with your orders, track shipments, or resolve issues with your purchases
          </p>
        </div>

        <Tabs defaultValue="lookup" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="lookup">Order Lookup</TabsTrigger>
            <TabsTrigger value="recent">Recent Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="lookup" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Order</CardTitle>
                <CardDescription>Enter your order number to get help with a specific order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="orderNumber">Order Number</Label>
                      <div className="flex">
                        <Input id="orderNumber" placeholder="e.g. ORD-12345" className="rounded-r-none" />
                        <Button className="rounded-l-none">
                          <Search className="mr-2 h-4 w-4" />
                          Find
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Used for your order" />
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Don't have your order number? You can find it in your order confirmation email or by logging into
                      your account to view your order history.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Orders</CardTitle>
                <CardDescription>Select an order to get support or track its status</CardDescription>
              </CardHeader>
              <CardContent>
                {recentOrders.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Recent Orders</h3>
                    <p className="text-muted-foreground mb-4">You don't have any recent orders to display.</p>
                    <Button asChild>
                      <Link href="/shop">Start Shopping</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <Card key={order.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <h3 className="font-medium text-lg">{order.id}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>{order.date}</span>
                                <span className="mx-2">•</span>
                                <span>
                                  {order.items} {order.items === 1 ? "item" : "items"}
                                </span>
                                <span className="mx-2">•</span>
                                <span>{order.total}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Button asChild variant="outline" size="sm">
                                <Link href={`/orders/${order.id}`}>
                                  <Package className="mr-2 h-4 w-4" />
                                  Order Details
                                </Link>
                              </Button>
                              <Button asChild variant="outline" size="sm">
                                <Link href={`/orders/${order.id}/track`}>
                                  <Truck className="mr-2 h-4 w-4" />
                                  Track Order
                                </Link>
                              </Button>
                              <Button asChild size="sm">
                                <Link href={`/orders/support/${order.id}`}>Get Help</Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Submit an Order Support Request</CardTitle>
            <CardDescription>Need help with an order? Fill out the form below and we'll assist you.</CardDescription>
          </CardHeader>
          <CardContent>
            <OrderSupportForm />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Track Your Order</CardTitle>
              <CardDescription>Check the status of your shipment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Enter your order number and email to get real-time updates on your package's location.
              </p>
              <Button asChild className="w-full">
                <Link href="/orders/track">
                  Track Shipment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Returns & Refunds</CardTitle>
              <CardDescription>Start a return or check refund status</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Initiate a return request or check the status of your refund for eligible orders.
              </p>
              <Button asChild className="w-full">
                <Link href="/orders/returns">
                  Manage Returns <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order FAQs</CardTitle>
              <CardDescription>Common questions about orders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Find answers to frequently asked questions about orders, shipping, and more.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/knowledge-base/orders">
                  View FAQs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
