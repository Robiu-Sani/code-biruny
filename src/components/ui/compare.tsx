"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Compare = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultCode = `// This code powers the website
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Code Biruny</title>
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to Code Biruny
        </h1>
        <p className="text-xl text-gray-300">
          We build amazing web experiences
        </p>
      </main>
    </div>
  );
}`;

  const cssCode = `/* Main Website Styles */
:root {
  --primary: #4f46e5;
  --secondary: #10b981;
  --dark: #1e293b;
  --light: #f8fafc;
  --gray: #94a3b8;
}

/* Base Styles */
body {
  font-family: 'Inter', sans-serif;
  background-color: var(--light);
  color: var(--dark);
  line-height: 1.6;
}

/* Layout */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Typography */
h1, h2, h3 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: #4338ca;
  transform: translateY(-1px);
}

/* Cards */
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--dark);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 2rem;
  }
  
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
}`;
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.max(10, Math.min(90, percent)));
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] rounded-xl border-[10px] border-gray-500 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Website Image (Left Side) */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src="/web-1.png"
          alt="Website Preview"
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 px-2 py-1 rounded bg-indigo-600 text-white text-xs font-medium">
          WEBSITE
        </div>
      </motion.div>

      {/* Code (Right Side) */}
      <div className="absolute inset-0 bg-gray-900 p-6 overflow-auto">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full">
            <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
              {defaultCode}
            </pre>
          </div>
          <div className="w-full">
            <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
              {defaultCode}
            </pre>
          </div>
        </div>
        <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
          {cssCode}
        </pre>
        <div className="absolute top-4 right-4 px-2 py-1 rounded bg-green-600 text-white text-xs font-medium">
          CODE
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="h-full w-0.5 absolute top-0 z-30 bg-indigo-500"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="h-8 w-8 rounded-md bg-indigo-600 absolute top-1/2 -translate-y-1/2 -right-4 flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </div>
      </div>
    </div>
  );
};
