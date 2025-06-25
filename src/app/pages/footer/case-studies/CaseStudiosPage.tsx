import React from "react";
import {
  ArrowRight,
  Filter,
  Search,
  ChevronDown,
  BarChart2,
  Users,
  CheckCircle,
  Award,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CaseStudiosPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      client: "FashionForward Retail",
      description:
        "Scaled infrastructure to handle 5x traffic during peak seasons",
      industry: "Retail",
      duration: "4 months",
      results: [
        "300% increase in peak traffic capacity",
        "40% improvement in page load speed",
        "25% boost in conversion rates",
      ],
      tags: ["Performance", "Scalability", "E-commerce"],
      image: "/cases/ecommerce-optimization.jpg",
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Systems",
      description:
        "Built secure analytics dashboard for patient data visualization",
      industry: "Healthcare",
      duration: "6 months",
      results: [
        "HIPAA compliant architecture",
        "80% faster report generation",
        "50+ integrated data sources",
      ],
      tags: ["Data", "Security", "Healthcare"],
      image: "/cases/healthcare-analytics.jpg",
    },
    {
      id: 3,
      title: "FinTech Mobile App Redesign",
      client: "WealthSimple Tech",
      description: "Complete UX overhaul for investment tracking application",
      industry: "Finance",
      duration: "3 months",
      results: [
        "4.9/5 app store rating",
        "45% increase in daily active users",
        "60% faster onboarding",
      ],
      tags: ["UX Design", "Mobile", "Finance"],
      image: "/cases/fintech-redesign.jpg",
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      client: "LearnBright Academy",
      description: "Developed interactive learning management system",
      industry: "Education",
      duration: "5 months",
      results: [
        "10,000+ monthly active users",
        "95% course completion rate",
        "30% improvement in test scores",
      ],
      tags: ["EdTech", "LMS", "Web App"],
      image: "/cases/edtech-platform.jpg",
    },
  ];

  const industries = [
    "All",
    "Retail",
    "Healthcare",
    "Finance",
    "Education",
    "Technology",
  ];
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredStudies = caseStudies.filter((study) => {
    const matchesIndustry =
      selectedIndustry === "All" || study.industry === selectedIndustry;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <Badge variant="outline" className="mb-4 py-1.5 px-3">
          <Award className="h-4 w-4 mr-2" />
          Proven Results
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          Our Case Studies
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          Explore how we`ve helped businesses solve complex challenges and
          achieve remarkable outcomes through technology and innovation.
        </p>
      </section>

      {/* Filters and Search */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search case studies..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedIndustry}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {industries.map((industry) => (
                  <DropdownMenuItem
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={selectedIndustry === industry ? "bg-accent" : ""}
                  >
                    {industry}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline">Sort by: Recent</Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mb-16">
        {filteredStudies.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Card
                key={study.id}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader className="p-0">
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${study.image})` }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="mb-2">{study.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {study.description}
                  </CardDescription>

                  <ul className="space-y-2 mb-6">
                    {study.results.slice(0, 2).map((result, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                    {study.results.length > 2 && (
                      <li className="text-sm text-muted-foreground">
                        +{study.results.length - 2} more results
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Case Study <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No case studies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="grid md:grid-cols-3 gap-8 py-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 mr-3 text-primary" />
                75+
              </div>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                <BarChart2 className="h-8 w-8 mr-3 text-primary" />
                92%
              </div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                <Clock className="h-8 w-8 mr-3 text-primary" />
                24/7
              </div>
              <p className="text-muted-foreground">Support Availability</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl mb-4">
              Ready to start your success story?
            </CardTitle>
            <CardDescription className="text-lg">
              Let`s discuss how we can help you achieve similar results.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Button size="lg">
              Get in Touch <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
