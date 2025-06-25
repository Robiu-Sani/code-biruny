import React from "react";
import {
  Shield,
  Server,
  Globe,
  BarChart2,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Cpu,
  Building2,
  GanttChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function EnterpriseBanner() {
  const enterpriseFeatures = [
    {
      title: "Scalable Infrastructure",
      description: "Architecture that grows with your business needs",
      icon: <Server className="h-5 w-5 text-blue-500" />,
      badge: "High Availability",
    },
    {
      title: "Enterprise Security",
      description: "Military-grade protection for your data",
      icon: <Shield className="h-5 w-5 text-purple-500" />,
      badge: "SOC 2 Compliant",
    },
    {
      title: "Global Deployment",
      description: "Worldwide infrastructure with low latency",
      icon: <Globe className="h-5 w-5 text-green-500" />,
      badge: "Multi-region",
    },
  ];

  const benefits = [
    {
      title: "99.99% Uptime SLA",
      description: "Guaranteed reliability for mission-critical systems",
      icon: <Zap className="h-5 w-5 text-amber-500" />,
    },
    {
      title: "Dedicated Support",
      description: "24/7 priority access to senior engineers",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored implementations for your business",
      icon: <Cpu className="h-5 w-5 text-purple-500" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Main Content */}
          <div className="md:w-2/3">
            <Badge variant="outline" className="mb-4">
              <Building2 className="h-3 w-3 mr-2" />
              Enterprise Solutions
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Enterprise-Grade Technology Solutions
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl">
              Secure, scalable platforms designed for large organizations with
              complex requirements and compliance needs.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="default">Request Demo</Button>
              <Button variant="outline">Security</Button>
              <Button variant="outline">Compliance</Button>
              <Button variant="outline">Case Studies</Button>
            </div>

            {/* Enterprise Features */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm mb-8">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <GanttChart className="h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-300" />
                Key Enterprise Features
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg w-fit mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-2">
                      {feature.description}
                    </p>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Standards */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">
                Compliance & Certifications
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "SOC 2 Type II",
                  "ISO 27001",
                  "GDPR",
                  "HIPAA",
                  "PCI DSS",
                  "FedRAMP",
                ].map((standard, i) => (
                  <Badge key={i} variant="outline" className="px-3 py-1">
                    {standard}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits & CTA */}
          <div className="md:w-1/3">
            {/* Benefits */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Enterprise Benefits
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm mt-6">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <BarChart2 className="h-4 w-4 mr-2 text-blue-500" />
                Enterprise Success
              </h2>
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <Building2 className="h-12 w-12 text-zinc-400" />
              </div>
              <h3 className="font-medium text-lg mb-2">
                Global Financial Institution
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Implemented secure, compliant infrastructure for 10,000+
                employees across 30 countries.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">99.999% uptime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Zero compliance violations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">40% cost reduction</span>
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
                Enterprise Solutions Inquiry
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Contact our enterprise team for custom solutions.
              </p>
              <Button className="w-full mb-3">
                Contact Sales
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="w-full">
                Schedule Security Review
                <Shield className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">250+</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Enterprise Clients
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Uptime SLA
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Premium Support
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Compliance Standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
