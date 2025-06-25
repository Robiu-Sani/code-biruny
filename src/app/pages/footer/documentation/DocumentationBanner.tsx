import React from "react";
import {
  BookOpen,
  Search,
  Code,
  FileText,
  ChevronRight,
  Download,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function DocumentationBanner() {
  const quickLinks = [
    {
      icon: <Code className="h-4 w-4" />,
      title: "API Reference",
      description: "Complete endpoint documentation",
    },
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Guides",
      description: "Step-by-step tutorials",
    },
    {
      icon: <Download className="h-4 w-4" />,
      title: "SDKs",
      description: "Client libraries download",
    },
    {
      icon: <Github className="h-4 w-4" />,
      title: "Examples",
      description: "Sample projects on GitHub",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 rounded-lg">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-700 shadow-sm">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            <div className="flex-1">
              <Badge variant="outline" className="mb-4">
                <BookOpen className="h-3 w-3 mr-2" />
                Documentation
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                CodeBiruny Developer Docs
              </h1>
              <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl">
                Comprehensive guides and API references to help you build with
                our platform. Everything you need to integrate and extend
                CodeBiruny.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4 flex-col items-start hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <div className="flex items-center mb-2">
                  {link.icon}
                  <span className="ml-2 font-medium">{link.title}</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 text-left">
                  {link.description}
                </p>
              </Button>
            ))}
          </div>

          {/* Version Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                Version:
              </span>
              <Badge variant="secondary" className="px-3 py-1">
                v2.4.0 (Latest)
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-600 dark:text-zinc-300"
              >
                View changelog
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <Button variant="link" className="text-primary">
              Need help? Contact support
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
