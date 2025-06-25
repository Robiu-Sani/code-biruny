import React from "react";
import {
  Users,
  Award,
  Globe,
  Mail,
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
  BookOpen,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TeamBanner() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      expertise: ["Product Strategy", "Leadership"],
      avatar: "/avatars/sarah.jpg",
      social: {
        twitter: "sarah_dev",
        github: "sarahjohnson",
        linkedin: "sarahjohnson",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      expertise: ["Architecture", "Scalability"],
      avatar: "/avatars/michael.jpg",
      social: {
        twitter: "michaelcto",
        github: "michaelchen",
        linkedin: "michaelchen",
      },
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Designer",
      expertise: ["UX Research", "UI Design"],
      avatar: "/avatars/emma.jpg",
      social: {
        twitter: "emmar_design",
        github: "emmarodriguez",
        linkedin: "emmarodriguez",
      },
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      expertise: ["React", "TypeScript"],
      avatar: "/avatars/david.jpg",
      social: {
        twitter: "davidkimdev",
        github: "davidkim",
        linkedin: "davidkim",
      },
    },
  ];

  const teamStats = [
    {
      value: "15+",
      label: "Nationalities",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      value: "50+",
      label: "Years Combined Experience",
      icon: <Award className="h-5 w-5" />,
    },
    {
      value: "100+",
      label: "Projects Completed",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      value: "24/7",
      label: "Collaboration",
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Users className="h-3 w-3 mr-2" />
            Meet the Team
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The People Behind Code Biruny
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
            A diverse team of passionate engineers, designers, and
            problem-solvers dedicated to building exceptional developer tools.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm text-center"
            >
              <div className="flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                    <Users className="h-10 w-10 text-zinc-400" />
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/${member.social.twitter}`}
                    className="text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://github.com/${member.social.github}`}
                    className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                    className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Culture */}
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Our Culture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-3">Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Transparency in everything we do</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Continuous learning and growth</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Work-life harmony</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-3">Practices</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Async-first communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Quarterly hackathons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Open-source Fridays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Join Team */}
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Join Our Team</h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                We`re always looking for talented people who share our passion
                for building great developer tools.
              </p>
              <Button className="w-full mb-4">
                View Open Positions
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Contact HR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
