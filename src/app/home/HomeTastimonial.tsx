/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeTestimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechSolutions Inc.",
      avatar: "/avatars/01.png",
      rating: 5,
      content:
        "Code Biruni's digital transformation services revolutionized our e-commerce platform, delivering a 40% increase in conversion rates with their cutting-edge approach.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, Finova Corp",
      avatar: "/avatars/02.png",
      rating: 5,
      content:
        "Their cloud-native application development helped us scale to 1M+ users seamlessly. The architecture design was flawless and future-proof.",
    },
    {
      id: 3,
      name: "Amina Rahman",
      role: "Director, EduTech Foundation",
      avatar: "/avatars/03.png",
      rating: 5,
      content:
        "The AI-powered education platform Code Biruni developed has transformed how we deliver content, with personalized learning paths for each student.",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Product Manager, BuildRight",
      avatar: "/avatars/04.png",
      rating: 5,
      content:
        "Code Biruni's IoT solution with real-time analytics and predictive maintenance has saved us over $250k annually in operational costs.",
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "Marketing Director, ShopEasy",
      avatar: "/avatars/05.png",
      rating: 5,
      content:
        "Our new customer engagement platform developed by Code Biruni increased retention by 35% through hyper-personalized experiences.",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Success Stories with{" "}
            <span className="text-primary">Code Biruni</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Trusted by innovators who`ve transformed their businesses with our
            solutions
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonial Card */}
          <div className="relative">
            {/* Floating avatar */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                <AvatarImage
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                />
                <AvatarFallback className="bg-gray-100 text-gray-800">
                  {testimonials[currentIndex].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>

            <Card className="pt-12 pb-8 px-6 md:px-12 rounded-xl shadow-sm border border-gray-100">
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  {/* Rating stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                    <span className="text-primary text-4xl font-serif leading-none">{`"`}</span>
                    {testimonials[currentIndex].content}
                    <span className="text-primary text-4xl font-serif leading-none">{`"`}</span>
                  </blockquote>

                  {/* Client info */}
                  <div>
                    <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-10">
            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-primary"
                      : "w-3 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 text-gray-500 hover:text-primary hover:bg-gray-50"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 text-gray-500 hover:text-primary hover:bg-gray-50"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
