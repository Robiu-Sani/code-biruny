import React from "react";
import {
  LifeBuoy,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  BookOpen,
  Users,
  Code,
  HelpCircle,
  FileText,
  Video,
  Settings,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function SupportPage() {
  const supportChannels = [
    {
      title: "Help Center",
      description: "Browse articles, tutorials and FAQs",
      icon: <HelpCircle className="h-6 w-6 text-blue-500" />,
      cta: "Visit Help Center",
      link: "#",
    },
    {
      title: "Community Forum",
      description: "Get help from other developers",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      cta: "Join Community",
      link: "#",
    },
    {
      title: "Contact Support",
      description: "Reach our support team directly",
      icon: <LifeBuoy className="h-6 w-6 text-amber-500" />,
      cta: "Open Ticket",
      link: "#",
    },
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Complete API references and guides",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Tutorials",
      description: "Step-by-step learning paths",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Video Guides",
      description: "Watch our video tutorials",
      icon: <Video className="h-5 w-5" />,
    },
    {
      title: "Status Page",
      description: "Check system status and uptime",
      icon: <Globe className="h-5 w-5" />,
    },
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on 'Forgot Password' on the login page. We'll send a reset link to your registered email address.",
    },
    {
      question: "What are your support hours?",
      answer:
        "Our standard support hours are Monday to Friday, 9AM to 6PM EST. Priority support is available 24/7 for enterprise customers.",
    },
    {
      question: "How can I upgrade my plan?",
      answer:
        "You can upgrade your plan from the Billing section in your account settings. All upgrades are prorated based on your current subscription.",
    },
    {
      question: "Where can I find API documentation?",
      answer:
        "Our complete API documentation is available in the Developers section of our website. You can also access it directly from your dashboard.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <Badge variant="outline" className="mb-6 py-2 px-4">
          <LifeBuoy className="h-4 w-4 mr-2" />
          Support Center
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          How can we help you today?
        </h1>
        <div className="max-w-2xl mx-auto relative">
          <Input
            placeholder="Search help articles, documentation..."
            className="pl-12 pr-6 py-6 text-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </section>

      {/* Support Channels */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Get Support</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {channel.icon}
                  </div>
                  <div>
                    <CardTitle>{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {channel.cta} <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Resources</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-6 flex-col items-start"
            >
              <div className="flex items-center mb-3">
                {resource.icon}
                <span className="ml-3 font-semibold">{resource.title}</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                {resource.description}
              </p>
            </Button>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Button variant="ghost">
            View all FAQs <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl">Still need help?</CardTitle>
            <CardDescription>
              Our team is ready to assist you with any questions or issues.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-muted-foreground">
                    support@codebiruny.com
                  </p>
                  <p className="text-sm mt-2">
                    Typically responds within 2 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-muted-foreground">
                    Available in your dashboard
                  </p>
                  <p className="text-sm mt-2">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm mt-2">For enterprise customers only</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button size="lg">
              <LifeBuoy className="h-4 w-4 mr-2" />
              Contact Support Team
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Status Section */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <CardTitle>All Systems Operational</CardTitle>
            </div>
            <CardDescription>
              Last updated: {new Date().toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Settings className="h-5 w-5" />
                <div>
                  <p className="font-medium">API</p>
                  <p className="text-sm text-muted-foreground">100% uptime</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5" />
                <div>
                  <p className="font-medium">Web Application</p>
                  <p className="text-sm text-muted-foreground">100% uptime</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5" />
                <div>
                  <p className="font-medium">Developer Tools</p>
                  <p className="text-sm text-muted-foreground">100% uptime</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0">
              View status history <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
