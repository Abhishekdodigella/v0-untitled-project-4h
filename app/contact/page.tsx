import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or need assistance? Our support team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Mail className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us an email anytime</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-medium">support@supporthub.com</p>
              <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Phone className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>Call us during business hours</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-medium">+1 (800) 123-4567</p>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 9am-5pm EST</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <MessageSquare className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with a support agent</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full">
                <a href="/chat">Start Chat</a>
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Available 24/7</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-6">Find quick answers to common questions in our FAQ section.</p>
          <Button asChild variant="outline">
            <a href="/faq">View FAQs</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
