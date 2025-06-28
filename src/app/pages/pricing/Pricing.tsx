import React from "react";
import {
  Rocket,
  Zap,
  Sparkles,
  Check,
  X,
  ArrowRight,
  BadgeCheck,
  Users,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      annualPrice: "$190",
      description: "Perfect for individuals and small projects",
      icon: <Zap className="h-6 w-6 text-primary" />,
      features: [
        { text: "Up to 5 projects", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "API access", included: false },
        { text: "Priority support", included: false },
        { text: "Advanced security", included: false },
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      annualPrice: "$490",
      description: "For growing businesses and teams",
      icon: <Rocket className="h-6 w-6 text-primary" />,
      features: [
        { text: "Up to 20 projects", included: true },
        { text: "Advanced analytics", included: true },
        { text: "24/7 email support", included: true },
        { text: "Full API access", included: true },
        { text: "Priority support", included: false },
        { text: "Advanced security", included: false },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      annualPrice: "$990",
      description: "For large organizations with complex needs",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      features: [
        { text: "Unlimited projects", included: true },
        { text: "Premium analytics", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Full API access", included: true },
        { text: "Priority support", included: true },
        { text: "Advanced security", included: true },
      ],
      popular: false,
    },
  ];

  const features = [
    {
      title: "Global Infrastructure",
      description: "Deploy your projects worldwide with our CDN",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols",
      icon: <Lock className="h-5 w-5" />,
    },
    {
      title: "High Performance",
      description: "Built on the fastest cloud infrastructure",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      title: "Team Collaboration",
      description: "Manage teams and permissions easily",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <div className="w-full py-12 md:py-24">
      {/* Banner Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4">
            <BadgeCheck className="h-3 w-3 mr-2" />
            Simple, transparent pricing
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Pricing that scales with your business
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Choose the perfect plan for your needs. Start small and upgrade as
            you grow.
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="default">Monthly</Button>
            <Button variant="outline">
              Annually <span className="ml-2 text-primary">(Save 20%)</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-primary ring-1 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-3 py-1 text-xs font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {plan.icon}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.annualPrice} billed annually
                  </p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mr-2" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Compare features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our plans stack up against each other
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  Feature
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-muted-foreground">
                  Starter
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-muted-foreground">
                  Professional
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-muted-foreground">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  Projects
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  5
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  20
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Unlimited
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  Support
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Email
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  24/7 Email
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  24/7 Phone
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  Analytics
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Basic
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Advanced
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Premium
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  API Access
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <X className="h-4 w-4 mx-auto text-red-500" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <Check className="h-4 w-4 mx-auto text-green-500" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <Check className="h-4 w-4 mx-auto text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  Security
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Standard
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Standard
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  Advanced
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All plans include these powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <div className="bg-muted/50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our team is here to help you choose the right plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default">
              Contact Sales
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline">Read Documentation</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
