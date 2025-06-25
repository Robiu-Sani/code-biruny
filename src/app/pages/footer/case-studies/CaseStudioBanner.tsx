import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Users,
  BarChart2,
  CheckCircle,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CaseStudyBanner() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      description: "Increased conversion rates by 42% for a leading retailer",
      industry: "Retail",
      duration: "3 months",
      results: [
        "42% increase in conversion",
        "28% faster load times",
        "17% higher AOV",
      ],
      image: "/images/ecommerce-case.jpg",
    },
    {
      id: 2,
      title: "Healthcare SaaS Implementation",
      description: "Streamlined patient management for hospital network",
      industry: "Healthcare",
      duration: "6 months",
      results: [
        "60% process automation",
        "75% reduction in admin time",
        "99.9% uptime",
      ],
      image: "/images/healthcare-case.jpg",
    },
  ];

  const stats = [
    {
      value: "50+",
      label: "Satisfied Clients",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "87%",
      label: "Average Improvement",
      icon: <BarChart2 className="h-6 w-6" />,
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 rounded-lg">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-700 shadow-sm">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="h-3 w-3 mr-2" />
              Case Studies
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Proven Results for Our Clients
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Discover how we`ve helped businesses achieve remarkable outcomes
              through innovative solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="outline" className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {study.duration}
                    </Badge>
                  </div>

                  <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    {study.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full">
                    Read Case Study <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  {stat.icon}
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg">
              View All Case Studies <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
