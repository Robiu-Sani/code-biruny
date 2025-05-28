// import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomeFooter() {
  return (
    <div>
      <div className="text-center bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-8 md:p-12">
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
      </div>
    </div>
  );
}
