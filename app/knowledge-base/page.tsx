import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Search, ShoppingBag, User } from "lucide-react"

// Mock categories and articles
const categories = [
  {
    id: "orders",
    name: "Orders & Shipping",
    icon: ShoppingBag,
    description: "Information about orders, shipping, and delivery",
    articles: [
      { id: "track-order", title: "How to track your order" },
      { id: "shipping-methods", title: "Available shipping methods" },
      { id: "order-cancellation", title: "Cancelling an order" },
      { id: "order-changes", title: "Making changes to an order" },
      { id: "international-shipping", title: "International shipping information" },
    ],
  },
  {
    id: "returns",
    name: "Returns & Refunds",
    icon: ArrowRight,
    description: "Policies and procedures for returns and refunds",
    articles: [
      { id: "return-policy", title: "Return policy overview" },
      { id: "start-return", title: "How to start a return" },
      { id: "refund-timeline", title: "Refund processing timeline" },
      { id: "exchange-process", title: "Product exchange process" },
      { id: "return-shipping", title: "Return shipping options" },
    ],
  },
  {
    id: "account",
    name: "Account Management",
    icon: User,
    description: "Managing your account settings and preferences",
    articles: [
      { id: "create-account", title: "Creating an account" },
      { id: "reset-password", title: "Resetting your password" },
      { id: "update-info", title: "Updating account information" },
      { id: "payment-methods", title: "Managing payment methods" },
      { id: "delete-account", title: "Deleting your account" },
    ],
  },
  {
    id: "products",
    name: "Product Information",
    icon: BookOpen,
    description: "Details about our products and services",
    articles: [
      { id: "product-specs", title: "Product specifications" },
      { id: "size-guides", title: "Size guides and measurements" },
      { id: "product-care", title: "Product care instructions" },
      { id: "warranties", title: "Warranty information" },
      { id: "compatibility", title: "Product compatibility" },
    ],
  },
]

// Popular articles
const popularArticles = [
  { id: "return-policy", title: "Return policy overview", category: "Returns & Refunds" },
  { id: "track-order", title: "How to track your order", category: "Orders & Shipping" },
  { id: "reset-password", title: "Resetting your password", category: "Account Management" },
  { id: "refund-timeline", title: "Refund processing timeline", category: "Returns & Refunds" },
  { id: "size-guides", title: "Size guides and measurements", category: "Product Information" },
]

export default function KnowledgeBasePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Knowledge Base</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Find answers to common questions and learn how to get the most out of our products and services.
        </p>

        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for articles, guides, and FAQs..." className="pl-10 h-12" />
          <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-10">Search</Button>
        </div>
      </div>

      <Tabs defaultValue="categories" className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="popular">Popular Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription className="mt-1">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article.id}>
                        <Link
                          href={`/knowledge-base/${category.id}/${article.id}`}
                          className="flex items-center text-sm hover:text-primary transition-colors"
                        >
                          <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={`/knowledge-base/${category.id}`}>
                      View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Popular Articles</CardTitle>
              <CardDescription>Frequently accessed help articles and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {popularArticles.map((article, index) => (
                  <li key={article.id} className="pb-4 border-b last:border-0 last:pb-0">
                    <Link
                      href={`/knowledge-base/${article.id.split("-")[0]}/${article.id}`}
                      className="block hover:text-primary transition-colors"
                    >
                      <div className="flex items-start">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary mr-3 text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-medium">{article.title}</h3>
                          <p className="text-sm text-muted-foreground">{article.category}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer to your question in our knowledge base, our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/chat">Start Live Chat</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
