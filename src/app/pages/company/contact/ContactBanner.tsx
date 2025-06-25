import React from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactBanner() {
  return (
    <section className="w-full py-16 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to start your project?
            </h2>
            <p className="text-blue-100 dark:text-blue-200 max-w-lg">
              Our team is here to help you bring your ideas to life. Get in
              touch today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10 gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center text-white">
              <Mail className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-1">Email Support</h3>
              <p className="text-blue-100">support@codebiruny.com</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <Phone className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-1">Phone Support</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <MessageSquare className="h-8 w-8 mb-4" />
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-blue-100">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
