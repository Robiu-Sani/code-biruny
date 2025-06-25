import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  MessageSquare,
  Code,
  Globe,
  Calendar,
  Trophy,
  BookOpen,
  Shield,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Community() {
  const events = [
    {
      name: "Monthly Hackathon",
      date: "15th June",
      icon: <Code className="h-5 w-5" />,
    },
    {
      name: "Tech Talk: Next.js 14",
      date: "22nd June",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      name: "Open Source Day",
      date: "5th July",
      icon: <Github className="h-5 w-5" />,
    },
  ];

  const benefits = [
    { title: "Exclusive Resources", icon: <BookOpen className="h-5 w-5" /> },
    { title: "Networking Opportunities", icon: <Users className="h-5 w-5" /> },
    { title: "Career Advancement", icon: <Trophy className="h-5 w-5" /> },
    { title: "Global Connections", icon: <Globe className="h-5 w-5" /> },
    { title: "Safe Environment", icon: <Shield className="h-5 w-5" /> },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Code Biruny Community
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Join over 10,000 developers, designers, and tech enthusiasts in our
            vibrant community. Learn, collaborate, and grow together in a
            supportive environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 mb-4 text-blue-600" />
              <CardTitle>Connect</CardTitle>
              <CardDescription>
                Meet like-minded professionals and build valuable relationships
                that last.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Code className="h-12 w-12 mb-4 text-purple-600" />
              <CardTitle>Collaborate</CardTitle>
              <CardDescription>
                Work on exciting projects and contribute to open-source
                initiatives.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Trophy className="h-12 w-12 mb-4 text-amber-600" />
              <CardTitle>Grow</CardTitle>
              <CardDescription>
                Enhance your skills through workshops, hackathons, and
                mentorship programs.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Separator className="my-12" />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {event.icon}
                    </div>
                    <div>
                      <CardTitle>{event.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Community Benefits</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
            Stay updated with the latest news, events, and resources from Code
            Biruny.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
            />
            <Button type="submit">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Code Biruny. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
