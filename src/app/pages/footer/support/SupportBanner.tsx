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
} from "lucide-react";

export default function SupportBanner() {
  const supportOptions = [
    {
      title: "Documentation",
      description: "Browse our comprehensive guides and API references",
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      badge: "Self-Service",
    },
    {
      title: "Community Forum",
      description: "Get help from other Code Biruny community members",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      badge: "24/7",
    },
    {
      title: "Priority Support",
      description: "Direct access to our technical support team",
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      badge: "Pro Plan",
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 py-1.5 px-3">
            <LifeBuoy className="h-4 w-4 mr-2" />
            We`re here to help
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Code Biruny Support Center
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Get the help you need to build amazing projects with our tools and
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="bg-background p-3 rounded-lg">
                    {option.icon}
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {option.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 mr-3 text-green-500" />
              <h3 className="text-2xl font-semibold">Our Support Promise</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Average response time: <strong>under 2 hours</strong>
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

          <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Support</CardTitle>
              <CardDescription>
                Can`t find what you need? Reach out to our team directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p>support@codebiruny.com</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Live chat</p>
                  <p>Available 9AM-6PM EST</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                <LifeBuoy className="h-4 w-4 mr-2" />
                Open Support Ticket
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full">
            <Clock className="h-5 w-5 mr-2" />
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
