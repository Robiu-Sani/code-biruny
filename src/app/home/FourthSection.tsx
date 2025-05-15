import { Rocket, Sparkles, Globe, Code, Server } from "lucide-react";
import Image from "next/image";

export default function FourthSection() {
  return (
    <div className="w-full py-10 px-2 relative">
      {/* Main container with animated RGB border */}
      <div className="container mx-auto rounded-xl bg-gray-50 dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-5 md:rounded-2xl p-5 lg:p-10 relative">
        {/* Animated RGB border */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl p-[1px] z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl md:rounded-2xl animate-border-spin opacity-70"></div>
          <div className="absolute inset-[1px] bg-gray-50 dark:bg-zinc-900 rounded-xl md:rounded-2xl"></div>
        </div>

        {/* Text content box */}
        <div className="flex justify-between items-start gap-6 flex-col z-10">
          <div className="flex flex-col gap-4 mb-6">
            <div className="p-3 rounded-lg text-primary">
              <Rocket className="w-14 h-14" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Why Choose Code-Biruny?
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We deliver cutting-edge solutions that propel your business forward.
            Our expertise in modern technologies ensures your digital
            transformation is seamless and impactful.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-gray-700 dark:text-gray-200">
                Custom-tailored software solutions
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-gray-700 dark:text-gray-200">
                Agile development process
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-gray-700 dark:text-gray-200">
                Dedicated support & maintenance
              </span>
            </li>
          </ul>
        </div>

        {/* Visual box */}
        <div className="relative z-10">
          <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-200/50 to-gray-300/30 dark:from-zinc-800/70 dark:to-zinc-900/50 border border-gray-200 dark:border-zinc-700/50">
            <Image
              src={`/whychoesus.png`}
              alt="code biruny why choose us image"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card section */}
      <div className="container mx-auto grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Web Development Card */}
        <div className="group relative h-full p-[1px] rounded-xl md:rounded-2xl overflow-hidden">
          {/* Animated RGB border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl md:rounded-2xl animate-border-spin opacity-70"></div>
          <div className="relative h-full bg-gray-50 dark:bg-zinc-900 rounded-xl md:rounded-2xl p-4 md:p-6 z-10">
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={`/card1.avif`}
                alt="Web Development Services"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Modern, responsive websites and web applications built with
              cutting-edge technologies to elevate your online presence.
            </p>
          </div>
        </div>

        {/* Software Development Card */}
        <div className="group relative h-full p-[1px] rounded-xl md:rounded-2xl overflow-hidden">
          {/* Animated RGB border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl md:rounded-2xl animate-border-spin opacity-70"></div>
          <div className="relative h-full bg-gray-50 dark:bg-zinc-900 rounded-xl md:rounded-2xl p-4 md:p-6 z-10">
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={`/card2.jpg`}
                alt="Software Development Services"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Software Solutions</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Custom software tailored to your business needs, designed to
              streamline operations and boost productivity.
            </p>
          </div>
        </div>

        {/* Cloud Services Card */}
        <div className="group relative h-full p-[1px] rounded-xl md:rounded-2xl overflow-hidden">
          {/* Animated RGB border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl md:rounded-2xl animate-border-spin opacity-70"></div>
          <div className="relative h-full bg-gray-50 dark:bg-zinc-900 rounded-xl md:rounded-2xl p-4 md:p-6 z-10">
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={`/card3.webp`}
                alt="Cloud Services"
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Cloud Services</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Scalable cloud solutions to ensure your business stays agile,
              secure, and always available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
