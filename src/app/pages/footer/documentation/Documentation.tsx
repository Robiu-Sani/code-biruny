/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  BookOpen,
  Code,
  Layers,
  Settings,
  Terminal,
  Zap,
  ChevronDown,
  Search,
  Download,
  Github,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function Documentation() {
  // Dummy data - replace with your actual content
  const categories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Zap className="h-5 w-5" />,
      description: "Learn how to set up and configure your project",
      sections: [
        {
          title: "Installation",
          content:
            "To install our platform, run the following command in your terminal: \n\n```bash\nnpm install @codebiruny/platform\n```\n\nor with yarn:\n\n```bash\nyarn add @codebiruny/platform\n```",
        },
        {
          title: "Configuration",
          content:
            "After installation, create a configuration file named `codebiruny.config.js` in your project root with the following basic setup:\n\n```javascript\nmodule.exports = {\n  apiKey: 'your-api-key-here',\n  environment: 'development', // or 'production'\n  features: {\n    analytics: true,\n    logging: false\n  }\n};\n```",
        },
        {
          title: "First Steps",
          content:
            "Once configured, you can import and initialize the SDK in your application:\n\n```javascript\nimport { init } from '@codebiruny/platform';\n\ninit({\n  // Your configuration here\n});\n```",
        },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Code className="h-5 w-5" />,
      description: "Complete documentation of all available APIs",
      sections: [
        {
          title: "Authentication",
          content:
            "All API requests require authentication via API key. Include your API key in the request headers:\n\n```\nAuthorization: Bearer YOUR_API_KEY\n```",
        },
        {
          title: "Endpoints",
          content:
            "Our API provides the following endpoints:\n\n- `GET /users` - List all users\n- `POST /users` - Create a new user\n- `GET /users/:id` - Get user details\n- `PUT /users/:id` - Update user\n- `DELETE /users/:id` - Delete user",
        },
        {
          title: "Rate Limiting",
          content:
            "API requests are limited to 1000 requests per minute per API key. You can check your current rate limit status by examining the following response headers:\n\n- `X-RateLimit-Limit` - Total requests allowed\n- `X-RateLimit-Remaining` - Requests remaining\n- `X-RateLimit-Reset` - Time when limit resets",
        },
      ],
    },
    {
      id: "guides",
      title: "Guides",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Step-by-step tutorials for common use cases",
      sections: [
        {
          title: "User Authentication",
          content:
            "This guide walks you through implementing user authentication in your application:\n\n1. Set up authentication providers\n2. Configure login routes\n3. Handle session management\n4. Implement logout functionality\n5. Add password reset flow",
        },
        {
          title: "Data Import/Export",
          content:
            "To import data into the system:\n\n1. Prepare your data in CSV or JSON format\n2. Use our import API endpoint\n3. Monitor the import progress\n4. Verify the imported data\n\nFor exporting data:\n\n1. Request an export\n2. Download the generated file\n3. Process the data as needed",
        },
        {
          title: "Performance Optimization",
          content:
            "Best practices for optimizing your application:\n\n- Use caching strategies\n- Implement lazy loading\n- Optimize database queries\n- Minify and bundle assets\n- Enable compression",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <Settings className="h-5 w-5" />,
      description: "Solutions to common problems and errors",
      sections: [
        {
          title: "Common Errors",
          content:
            "**Error 401: Unauthorized**\n\nThis error occurs when:\n- Your API key is missing or invalid\n- Your session has expired\n\n**Error 404: Not Found**\n\nThis error occurs when:\n- The requested resource doesn't exist\n- You're using an incorrect URL",
        },
        {
          title: "Debugging Tips",
          content:
            "1. Check the error logs\n2. Verify your configuration\n3. Test with minimal setup\n4. Compare with our example projects\n5. Enable debug mode",
        },
        {
          title: "Getting Help",
          content:
            "If you can't resolve an issue:\n\n1. Search our documentation\n2. Check the community forum\n3. Open a support ticket\n4. Contact our technical team",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: "API Playground",
      description: "Test API endpoints in your browser",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      title: "SDK Downloads",
      description: "Client libraries for various languages",
      icon: <Download className="h-5 w-5" />,
    },
    {
      title: "GitHub Repo",
      description: "View source code and contribute",
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: "Community Forum",
      description: "Ask questions and share knowledge",
      icon: <MessageSquare className="h-5 w-5" />,
    },
  ];

  const versions = [
    { id: "v2.4", name: "Current (2.4)", current: true },
    { id: "v2.3", name: "2.3 (Maintenance)" },
    { id: "v2.2", name: "2.2 (Legacy)" },
    { id: "v1.0", name: "1.0 (Deprecated)" },
  ];

  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
          CodeBiruny Documentation
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground mb-8">
          Comprehensive guides and references to help you build with our
          platform
        </p>

        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search documentation..."
            className="pl-10 py-6 text-base"
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    {category.icon}
                    {category.title}
                  </Button>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="font-medium">Quick Links</h3>
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    {link.icon}
                    {link.title}
                  </Button>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <h3 className="font-medium">Version</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      v2.4 (Current)
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {versions.map((version) => (
                      <DropdownMenuItem
                        key={version.id}
                        className={version.current ? "bg-accent" : ""}
                      >
                        {version.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Area */}
        <div className="lg:w-3/4">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-start h-auto p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {category.icon}
                    <span>{category.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-normal text-left">
                    {category.description}
                  </p>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.sections.map((section, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            {section.title}
                          </AccordionTrigger>
                          <AccordionContent className="prose dark:prose-invert max-w-none">
                            {section.content.split("\n").map((paragraph, i) => (
                              <p key={i}>{paragraph}</p>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Feedback Section */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Was this helpful?</CardTitle>
              <CardDescription>
                Help us improve our documentation by providing feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Yes
                </Button>
                <Button variant="outline">
                  <ThumbsDown className="h-4 w-4 mr-2" />
                  No
                </Button>
                <Button variant="ghost" className="ml-auto">
                  Leave detailed feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ThumbsUp(props: any) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ThumbsDown(props: any) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}
