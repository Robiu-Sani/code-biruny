import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Users,
  BarChart2,
  CheckCircle,
  Award,
} from "lucide-react";

export default function CaseStudioBanner() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      description:
        "Increased conversion rates by 42% for a leading online retailer",
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
      description: "Streamlined patient management for a hospital network",
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

  return (
    <section className="w-full py-16 md:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 py-1.5 px-3">
            <Award className="h-4 w-4 mr-2" />
            Proven Success
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Case Studies
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Discover how we`ve helped businesses like yours achieve remarkable
            results through innovative solutions and strategic thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-lg"
            >
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                {/* Placeholder for image - replace with your actual image */}
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="flex items-center">
                    {study.industry}
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {study.duration}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  View Case Study <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            Explore All Case Studies
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 mr-2 text-blue-500" />
                50+
              </div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <BarChart2 className="h-8 w-8 mr-2 text-purple-500" />
                87%
              </div>
              <p className="text-muted-foreground">Average Improvement</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 mr-2 text-green-500" />
                100%
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
