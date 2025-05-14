import { Code, Rocket, Sparkles } from "lucide-react";

export default function FourthSection() {
  return (
    <div className="w-full py-10 relative">
      {/* Main container with animated RGB border */}
      <div className="container mx-auto rounded-xl bg-gray-50 dark:bg-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-5 md:rounded-2xl p-5 lg:p-10 relative">
        {/* Animated RGB border */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl p-[1px] z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-xl md:rounded-2xl animate-border-spin opacity-70"></div>
          <div className="absolute inset-[1px] bg-gray-50 dark:bg-zinc-900 rounded-xl md:rounded-2xl"></div>
        </div>

        {/* Text content box */}
        <div className="flex justify-between items-start gap-6 flex-col z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Rocket className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
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
            {/* Animated visual element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Code icon with animation */}
                <Code className="absolute inset-0 w-full h-full text-primary/10 dark:text-primary/5" />

                {/* Pulsing circle animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-75"></div>
                  <div className="relative w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center">
                    <Code
                      className="w-16 h-16 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 animate-float"></div>
            <div className="absolute bottom-16 right-12 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 animate-float-delay"></div>
            <div className="absolute top-20 right-20 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 animate-float-delay-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
