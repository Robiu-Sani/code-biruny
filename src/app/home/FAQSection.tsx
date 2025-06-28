import React from "react";
import {
  HelpCircle,
  Code,
  Rocket,
  Shield,
  CreditCard,
  Users,
  Globe,
  Server,
  Zap,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function FAQSection() {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. Our team has extensive experience with serverless architectures, GraphQL, and modern CSS frameworks. We also work with databases like PostgreSQL, MongoDB, and Firebase for complete full-stack solutions.",
      icon: <Code className="h-5 w-5 text-primary" />,
    },
    {
      question: "How quickly can you start working on my project?",
      answer:
        "Typically, we can begin new projects within 1-2 weeks of initial contact. For urgent projects, we offer expedited onboarding with a 3-day startup option. The exact timeline depends on our current workload and the complexity of your project requirements. We recommend scheduling a discovery call to discuss your timeline in detail.",
      icon: <Rocket className="h-5 w-5 text-primary" />,
    },
    {
      question: "What security measures do you implement?",
      answer:
        "Security is our top priority. We implement industry-standard practices including end-to-end encryption, regular security audits, OWASP guidelines compliance, and penetration testing. All our developers undergo security training, and we use secure development lifecycle (SDL) processes. For sensitive projects, we can implement additional measures like multi-factor authentication and IP whitelisting.",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment options including 50% upfront with 50% upon completion for smaller projects. For larger engagements, we typically work with monthly billing cycles. We accept all major credit cards, bank transfers, and cryptocurrency. All invoices are net 15 unless otherwise agreed upon in our contract. Enterprise clients may qualify for extended payment terms.",
      icon: <CreditCard className="h-5 w-5 text-primary" />,
    },
    {
      question: "Can you work with our existing development team?",
      answer:
        "Absolutely! We frequently collaborate with in-house teams to provide specialized expertise or additional bandwidth. Our developers can integrate with your existing workflows, tools, and processes. We're experienced in pair programming, code reviews, and knowledge transfer sessions to ensure seamless collaboration. We can adapt to your preferred communication channels and project management tools.",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      question: "Do you provide hosting and maintenance services?",
      answer:
        "Yes, we offer comprehensive hosting solutions and maintenance packages. Our hosting infrastructure includes global CDN, DDoS protection, automated backups, and 24/7 monitoring. Maintenance plans range from basic security updates to full-service retainer agreements with SLA guarantees. We support all the applications we build for as long as you need our assistance.",
      icon: <Server className="h-5 w-5 text-primary" />,
    },
    {
      question: "What regions do you primarily serve?",
      answer:
        "While we're based in North America, we serve clients worldwide. Our distributed team allows us to work across multiple time zones, ensuring coverage for most business hours globally. We have particular expertise in compliance requirements for North America, Europe (including GDPR), and the Asia-Pacific region. All our contracts can be customized to meet local legal requirements.",
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      question: "How do you handle project scalability?",
      answer:
        "We architect all projects with scalability in mind from day one. Our approach includes microservices architecture when appropriate, auto-scaling cloud infrastructure, and performance optimization at every layer. We conduct load testing for high-traffic applications and implement progressive enhancement strategies. For growing businesses, we design systems that can scale both technically and organizationally.",
      icon: <Zap className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="h-5 w-5 mr-2 text-primary" />
            <span className="font-medium">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">{faq.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Separator className="mb-4" />
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? We`re here to help.
          </p>
          <Button variant="default">
            Contact Support
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
