"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Mail } from "lucide-react";
import Link from "next/link";

export default function SupportBanner() {
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  }); // 02:54 PM +06, Wednesday, June 25, 2025

  return (
    <div className="support-banner w-full py-16 md:py-24 bg-gradient-to-r from-zinc-900 via-green-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/90 backdrop-blur-md border-0 shadow-xl rounded-xl overflow-hidden animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-6xl font-extrabold text-gray-900">
              Support Center
            </CardTitle>
            <CardDescription className="mt-4 text-lg md:text-xl text-gray-600">
              We’re here to help you succeed at Code Biruny. Get assistance or
              contact our team today!
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Current Time: {currentDate}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Link href="/pages/footer/support">
              <Button
                className="bg-zinc-600 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-all duration-300 animate-pulse-slow flex items-center gap-2"
                onClick={() => (window.location.href = "/support/tickets")}
              >
                <Headphones className="h-5 w-5" /> Get Help
              </Button>
            </Link>

            <Link href="/pages/company/contact">
              <Button
                variant="outline"
                className="border-zinc-600 text-zinc-600 hover:bg-zinc-50 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                onClick={() => (window.location.href = "/contact")}
              >
                <Mail className="h-5 w-5" /> Contact Us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
