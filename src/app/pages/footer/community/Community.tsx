"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Mail } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Community() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
    console.log("Form submitted:", formData);
  };

  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  }); // 02:24 PM +06, Wednesday, June 25, 2025

  const communityBenefits = [
    "Access to exclusive coding tutorials",
    "Participate in live coding sessions",
    "Network with global developers",
    "Get personalized feedback on projects",
  ];

  const members = [
    { id: 1, name: "Ali Khan", role: "Moderator", joined: "2024-06-01" },
    { id: 2, name: "Sara Ahmed", role: "Member", joined: "2024-07-15" },
    { id: 3, name: "Rahim Patel", role: "Contributor", joined: "2024-08-10" },
  ];

  const events = [
    {
      date: "June 25, 2025, 3:00 PM",
      title: "Live Coding: React Basics",
      location: "Online",
    },
    {
      date: "June 30, 2025, 6:00 PM",
      title: "Q&A with Experts",
      location: "Zoom",
    },
    {
      date: "July 5, 2025, 2:00 PM",
      title: "Hackathon Kickoff",
      location: "Online",
    },
  ];

  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <section className="w-full py-20 text-center bg-opacity-50">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Welcome to Code Biruny Community
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Join a thriving network of developers, collaborate on projects, and
          unlock your potential!
        </p>
        <Button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
          onClick={() => (window.location.href = "/join")}
        >
          <Users className="mr-2 h-5 w-5" /> Get Started
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              About Our Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700">
              Code Biruny is a global community for developers of all levels.
              Founded to foster collaboration and learning, we offer resources,
              events, and a supportive environment to help you grow.
            </CardDescription>
            <ul className="mt-4 space-y-2">
              {communityBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Member List */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Community Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-900">ID</TableHead>
                  <TableHead className="text-gray-900">Name</TableHead>
                  <TableHead className="text-gray-900">Role</TableHead>
                  <TableHead className="text-gray-900">Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="text-gray-700">{member.id}</TableCell>
                    <TableCell className="text-gray-700">
                      {member.name}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {member.role}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {member.joined}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Events Schedule */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </CardTitle>
            <CardDescription className="text-gray-600">
              Today is {currentDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-900">Date & Time</TableHead>
                  <TableHead className="text-gray-900">Event</TableHead>
                  <TableHead className="text-gray-900">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-gray-700">
                      {event.date}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {event.title}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {event.location}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Join Form */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Become a Member
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="text-gray-900">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="text-gray-900"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="text-gray-900">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="text-gray-900"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password" className="text-gray-900">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="text-gray-900"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />{" "}
                {submitted ? "Joined!" : "Join Community"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-gray-800">
        <p className="text-gray-400">
          © 2025 Code Biruny. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
