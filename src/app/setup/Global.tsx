"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample data remains the same
const sampleData = [
  // Asia connections
  {
    order: 1,
    startLat: 19.076, // Mumbai
    startLng: 72.8777,
    endLat: 28.6139, // Delhi
    endLng: 77.209,
    arcAlt: 0.2,
    color: "rgba(255, 255, 255, 0.8)",
  },
  {
    order: 2,
    startLat: 35.6762, // Tokyo
    startLng: 139.6503,
    endLat: 37.5665, // Seoul
    endLng: 126.978,
    arcAlt: 0.3,
    color: "rgba(255, 255, 255, 0.8)",
  },
  // America connections
  {
    order: 3,
    startLat: 40.7128, // New York
    startLng: -74.006,
    endLat: 34.0522, // Los Angeles
    endLng: -118.2437,
    arcAlt: 0.4,
    color: "rgba(255, 255, 255, 0.8)",
  },
  // Europe connections
  {
    order: 4,
    startLat: 51.5074, // London
    startLng: -0.1278,
    endLat: 48.8566, // Paris
    endLng: 2.3522,
    arcAlt: 0.2,
    color: "rgba(255, 255, 255, 0.8)",
  },
  // Transcontinental connections
  {
    order: 5,
    startLat: 40.7128, // New York
    startLng: -74.006,
    endLat: 51.5074, // London
    endLng: -0.1278,
    arcAlt: 0.5,
    color: "rgba(255, 255, 255, 0.8)",
  },
  {
    order: 6,
    startLat: 35.6762, // Tokyo
    startLng: 139.6503,
    endLat: 37.7749, // San Francisco
    endLng: -122.4194,
    arcAlt: 0.6,
    color: "rgba(255, 255, 255, 0.8)",
  },
];

// Updated globe configuration to match the color scheme
const globeConfig = {
  pointSize: 1.5,
  globeColor: "#002343", // zinc-950
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.15,
  emissive: "#002343", // zinc-950
  emissiveIntensity: 0.2,
  shininess: 1.0,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.8,
  cameraZ: 300,
};

const Globe = dynamic(
  () => import("../../components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <div className="animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800 h-64 w-64"></div>
      </div>
    ),
  }
);

export default function Global() {
  const [dimensions, setDimensions] = useState({
    width: "100%",
    height: "500px",
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: "100%", height: "300px" });
      } else if (window.innerWidth < 1024) {
        setDimensions({ width: "100%", height: "400px" });
      } else {
        setDimensions({ width: "100%", height: "600px" });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge variant="outline" className="text-sm font-medium">
                Global Connectivity
              </Badge>

              <h1 className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl font-bold tracking-tight">
                Building{" "}
                <span className="text-zinc-900 dark:text-white">
                  Digital Bridges
                </span>{" "}
                Worldwide
              </h1>

              <p className="text-lg text-center lg:text-left text-zinc-600 dark:text-zinc-400 max-w-lg">
                Code Biruni creates seamless digital experiences that connect
                businesses across continents with cutting-edge technology and
                innovative solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Explore Solutions
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Card className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg">Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Serving clients in 12+ countries with localized solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Round-the-clock assistance across all time zones.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Globe visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full"
            style={{ height: dimensions.height }}
          >
            <Globe globeConfig={globeConfig} data={sampleData} />
          </motion.div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-zinc-100 dark:bg-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "12+", label: "Countries Served" },
              { value: "24/7", label: "Global Support" },
              { value: "99.9%", label: "Uptime Guarantee" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
