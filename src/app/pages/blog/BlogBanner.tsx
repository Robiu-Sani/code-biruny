import React from "react";
import {
  BookOpen,
  PenSquare,
  CalendarDays,
  Clock,
  User,
  ArrowRight,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function BlogBanner() {
  const featuredPosts = [
    {
      title: "Getting Started with Next.js 14",
      category: "Tutorial",
      readTime: "8 min read",
      date: "May 15, 2023",
    },
    {
      title: "State Management in 2024",
      category: "Guide",
      readTime: "12 min read",
      date: "June 2, 2023",
    },
    {
      title: "CSS Container Queries",
      category: "Tips",
      readTime: "5 min read",
      date: "June 18, 2023",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="container mx-auto px-4 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Main Content */}
          <div className="md:w-2/3">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="h-3 w-3 mr-2" />
              Latest Articles
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Code Biruni Blog
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl">
              Insights, tutorials and best practices for modern web development.
              Learn from our team of experts.
            </p>

            <div className="relative max-w-xl mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="default">All Posts</Button>
              <Button variant="outline">React</Button>
              <Button variant="outline">Next.js</Button>
              <Button variant="outline">TypeScript</Button>
              <Button variant="outline">CSS</Button>
            </div>
          </div>

          {/* Featured Posts */}
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <PenSquare className="h-4 w-4 mr-2 text-zinc-600 dark:text-zinc-300" />
                Featured Posts
              </h2>

              <div className="space-y-6">
                {featuredPosts.map((post, index) => (
                  <div key={index} className="group">
                    <Badge variant="secondary" className="mb-1">
                      {post.category}
                    </Badge>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="link"
                className="mt-4 px-0 text-zinc-600 dark:text-zinc-300"
              >
                View all featured posts
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Author Spotlight */}
        <div className="mt-12 bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <User className="h-6 w-6 text-zinc-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-semibold">Written by Code Biruni Team</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Our team of developers shares their knowledge and experience to
                help you build better web applications.
              </p>
            </div>
            <Button variant="outline" className="shrink-0">
              Meet the team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
