import React from "react";
import {
  LifeBuoy,
  Mail,
  MessageSquare,
  Phone,
  Clock,
  CheckCircle,
  Users,
  Zap,
  Shield,
  BookOpen,
  ArrowRight,
  Search,
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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function SupportBanner() {
  const supportOptions = [
    {
      title: "Documentation",
      description: "Browse our comprehensive guides and API references",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      badge: "Self-Service",
    },
    {
      title: "Community Forum",
      description: "Get help from other Code Biruny community members",
      icon: <Users className="h-5 w-5 text-purple-500" />,
      badge: "24/7",
    },
    {
      title: "Priority Support",
      description: "Direct access to our technical support team",
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      badge: "Pro Plan",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <LifeBuoy className="h-3 w-3 mr-2" />
            We`re here to help
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Code Biruny Support Center
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
            Get the help you need to build amazing projects with our tools and
            services.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input placeholder="Search support articles..." className="pl-10" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-all duration-300 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                    {option.icon}
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {option.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{option.title}</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-300">
                  {option.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <div className="flex items-center mb-6">
              <Shield className="h-5 w-5 mr-3 text-green-500" />
              <h3 className="text-xl font-semibold">Our Support Promise</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Average response time:{" "}
                  <span className="font-medium">under 2 hours</span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>95% customer satisfaction rating</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Expert help from our engineering team</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Available in multiple languages</span>
              </li>
            </ul>
          </div>

          <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Contact Support</CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-300">
                Can`t find what you need? Reach out to our team directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-500">Email us at</p>
                  <p>support@codebiruny.com</p>
                </div>
              </div>
              <Separator className="bg-zinc-200 dark:bg-zinc-700" />
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-5 w-5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-500">Live chat</p>
                  <p>Available 9AM-6PM EST</p>
                </div>
              </div>
              <Separator className="bg-zinc-200 dark:bg-zinc-700" />
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-zinc-500" />
                <div>
                  <p className="text-sm text-zinc-500">Call us</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <LifeBuoy className="h-4 w-4 mr-2" />
                Open Support Ticket
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
            <Clock className="h-4 w-4 mr-2" />
            <span className="font-medium">
              Current support wait time:{" "}
              <Badge variant="secondary">15 minutes</Badge>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
