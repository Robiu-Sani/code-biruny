import React from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactBanner() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "support@codebiruny.com",
      action: "Email Us",
      responseTime: "Typically within 2 hours",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "+1 (555) 123-4567",
      action: "Call Now",
      responseTime: "Immediate assistance",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Available 24/7",
      action: "Start Chat",
      responseTime: "Instant connection",
    },
  ];

  const supportHours = [
    { day: "Monday-Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Emergency support only" },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 rounded-lg">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-700 shadow-sm">
          {/* Main CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <Badge variant="outline" className="mb-4">
                <Zap className="h-3 w-3 mr-2" />
                Get Support
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Ready to start your project?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 max-w-lg">
                Our team is here to help you bring your ideas to life. Get in
                touch today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {method.icon}
                  </div>
                  <h3 className="font-semibold">{method.title}</h3>
                </div>
                <p className="text-lg font-medium mb-2">{method.description}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 flex items-center">
                  <Clock className="h-3 w-3 mr-2" />
                  {method.responseTime}
                </p>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Support Hours */}
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Support Hours
            </h3>
            <div className="space-y-3">
              {supportHours.map((day, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {day.day}
                  </span>
                  <span className="font-medium">{day.hours}</span>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 px-0 text-primary">
              View emergency protocols
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
