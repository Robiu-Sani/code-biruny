"use client";
import { Compare } from "components/ui/compare";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  RocketIcon,
  CodeIcon,
  PaletteIcon,
  SmartphoneIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SecondSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Sticky progress indicator */}
      <div className="sticky top-[61px] h-[10px] z-[499] w-full bg-gray-400 dark:bg-gray-600">
        <motion.div
          className="h-full bg-primary"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Animated header */}
        <motion.div className="text-center mb-16" style={{ opacity, y }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
            See the Magic Behind the Scenes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare our stunning designs with the clean, efficient code that
            powers them.
          </p>
        </motion.div>

        {/* Comparison component */}
        <div className="mb-24">
          <Compare />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <CodeIcon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Clean Code</CardTitle>
              <CardDescription>Modular and maintainable</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our code follows best practices with proper documentation and
                structure.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <PaletteIcon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Beautiful UI</CardTitle>
              <CardDescription>Pixel-perfect designs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Stunning interfaces with attention to detail and user
                experience.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <RocketIcon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>High Performance</CardTitle>
              <CardDescription>Lightning fast</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Optimized for speed and efficiency with modern techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <SmartphoneIcon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Fully Responsive</CardTitle>
              <CardDescription>Works on all devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Perfectly adapted for mobile, tablet and desktop screens.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let`s turn your ideas into reality with our design and development
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>
    </section>
  );
}
