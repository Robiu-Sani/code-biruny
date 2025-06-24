"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Compass } from "lucide-react";

const NotFound: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      }

      update() {
        this.x += this.speedX + (mouse.x - this.x) * 0.01;
        this.y += this.speedY + (mouse.y - this.y) * 0.01;
        if (this.size > 0.2) this.size -= 0.1;
        if (this.x < 0 || this.x > canvas!.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas!.height) this.speedY = -this.speedY;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0,
    };

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.x = canvas.width / 2;
      mouse.y = canvas.height / 2;
    });

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return; // Additional safety check
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[i].color;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }

        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          particlesArray.push(new Particle());
        }
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Resize canvas on window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-900 to-black text-white flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className=" w-full h-full" />
      <div className="relative z-10 text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
          404 - Page Not Found
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white animate-fade-in">
          | Code Biruny
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Oops! You’ve wandered into the unknown. Explore your way back!
        </p>
        <div className="mt-10 flex gap-6 justify-center">
          <Button
            onClick={() => router.back()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </Button>
          <Button
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700 transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5" /> Home
          </Button>
          <Button
            onClick={() => router.push("/explore")}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
          >
            <Compass className="mr-2 h-5 w-5" /> Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
