import React from "react";
import {
  ClipboardList,
  Calendar,
  Users,
  BarChart2,
  CheckCircle,
  Zap,
  Cloud,
  ArrowRight,
  Settings,
  Code,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectManagement() {
  const services = [
    {
      title: "Agile Development",
      description: "Scrum and Kanban methodologies",
      icon: <ClipboardList className="h-5 w-5 text-blue-500" />,
      features: ["Sprint Planning", "Daily Standups", "Retrospectives"],
    },
    {
      title: "Roadmapping",
      description: "Strategic product planning",
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
      features: ["Milestones", "Timelines", "Dependency Mapping"],
    },
    {
      title: "Team Coordination",
      description: "Cross-functional collaboration",
      icon: <Users className="h-5 w-5 text-green-500" />,
      features: ["Role Assignment", "Async Communication", "Status Updates"],
    },
    {
      title: "Progress Tracking",
      description: "Real-time project analytics",
      icon: <BarChart2 className="h-5 w-5 text-amber-500" />,
      features: ["Burn-down Charts", "Velocity Metrics", "KPIs"],
    },
  ];

  const tools = [
    {
      name: "Jira",
      category: "Issue Tracking",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      name: "GitHub Projects",
      category: "Code Integration",
      icon: <Code className="h-5 w-5" />,
    },
    {
      name: "Trello",
      category: "Visual Planning",
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      name: "Azure DevOps",
      category: "CI/CD Pipeline",
      icon: <Server className="h-5 w-5" />,
    },
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Requirement gathering and analysis",
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Planning",
      description: "Resource allocation and timeline",
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Execution",
      description: "Development with continuous feedback",
      icon: <Code className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Delivery",
      description: "Quality assurance and deployment",
      icon: <Cloud className="h-5 w-5 text-amber-500" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <ClipboardList className="h-3 w-3 mr-2" />
            Project Excellence
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Professional Project Management
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
            We deliver software projects on time and on budget through proven
            methodologies and transparent processes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((feature, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Process & Tools */}
          <div className="md:w-2/3">
            {/* Our Process */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Our Methodology</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools We Use */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm mt-6">
              <h2 className="text-2xl font-semibold mb-6">Our Tool Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{tool.name}</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study & CTA */}
          <div className="md:w-1/3">
            {/* Case Study */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <Zap className="h-4 w-4 mr-2 text-amber-500" />
                Success Story
              </h2>
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <ClipboardList className="h-12 w-12 text-zinc-400" />
              </div>
              <h3 className="font-medium text-lg mb-2">
                Enterprise SaaS Platform
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Delivered a complex B2B application with 50+ features across 6
                teams on schedule and 15% under budget.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">On-time delivery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">98% feature completion</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">100% client satisfaction</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Read Case Study
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* CTA */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm mt-6">
              <h2 className="text-lg font-semibold mb-4">
                Need Project Management?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Let`s discuss how we can bring discipline and transparency to
                your development process.
              </p>
              <Button className="w-full">
                Get Free Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                On-Time Delivery
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Budget Adherence
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Progress Visibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
