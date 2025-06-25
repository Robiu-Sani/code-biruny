import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Mail, Clock, HelpCircle, Book } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-green-900 to-black text-white">
      {/* Header Section */}
      <section className="w-full py-20 text-center bg-opacity-50">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-green-600">
          Support Center
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Welcome to the Code Biruny Support Center, your dedicated hub for
          resolving issues, finding resources, and getting assistance from our
          expert team. We’re committed to ensuring your experience is smooth and
          productive.
        </p>
      </section>

      {/* Support Info Section */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Contact & Support Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p className="flex items-center">
              <Headphones className="h-5 w-5 mr-2 text-zinc-600" />
              Email:{" "}
              <Link
                href="mailto:support@codebiruny.com"
                className="text-zinc-400 hover:underline ml-1"
              >
                support@codebiruny.com
              </Link>{" "}
              - For technical issues and account support.
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-zinc-600" />
              Phone:{" "}
              <Link
                href="tel:+1-800-CODE-BIR"
                className="text-zinc-400 hover:underline ml-1"
              >
                +1-800-CODE-BIR
              </Link>{" "}
              - Available for urgent queries.
            </p>
            <p className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-zinc-600" />
              Support Hours: Monday to Friday, 9:00 AM - 6:00 PM (GMT+6).
              Weekend support available via email.
            </p>
            <p className="flex items-center">
              Live Chat: Available on our website during business hours for
              real-time assistance.
            </p>
            <p className="flex items-center">
              <Book className="h-5 w-5 mr-2 text-zinc-600" />
              Resources: Visit our{" "}
              <Link href="/help-docs" className="text-zinc-400 hover:underline">
                Help Documentation
              </Link>{" "}
              for guides and tutorials.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-6">
            <p className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-zinc-600" />
              <strong>How do I reset my password?</strong> If you’ve forgotten
              your password, click the ``Forgot Password`` link on the login
              page, enter your email, and follow the reset instructions sent to
              your inbox.
            </p>
            <p className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-zinc-600" />
              <strong>What is the community code of conduct?</strong> Our code
              of conduct promotes respect, collaboration, and inclusivity. Check
              the full guidelines in our{" "}
              <Link
                href="/code-of-conduct"
                className="text-zinc-400 hover:underline"
              >
                community rules
              </Link>
              .
            </p>
            <p className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-zinc-600" />
              <strong>How can I join a live session?</strong> Register for
              events on our{" "}
              <Link href="/events" className="text-zinc-400 hover:underline">
                Events page
              </Link>
              , and you’ll receive a link via email 24 hours before the session.
            </p>
            <p className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-zinc-600" />
              <strong>What should I do if my account is locked?</strong> Contact
              support via email or phone with your account details, and our team
              will assist you in regaining access within 24 hours.
            </p>
            <p className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-zinc-600" />
              <strong>Where can I find project resources?</strong> Explore our{" "}
              <Link href="/resources" className="text-zinc-400 hover:underline">
                Resource Library
              </Link>{" "}
              for code snippets, templates, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Ticket Submission Section */}
      <section className="py-16 px-4 md:px-8">
        <Card className="bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Submit a Support Ticket
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>
              Need assistance? Submit a ticket below, and our support team will
              review your request and respond within 48 hours. Please provide as
              much detail as possible to help us assist you effectively.
            </p>
            <form className="mt-4 space-y-4">
              <div className="flex flex-col">
                <label className="text-gray-900">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-2 rounded-md text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-900">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-900">Subject</label>
                <input
                  type="text"
                  placeholder="Summarize your issue"
                  className="p-2 rounded-md text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-900">Description</label>
                <textarea
                  placeholder="Provide detailed information about your issue"
                  className="p-2 rounded-md text-gray-900 h-32"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-900">Attachment (Optional)</label>
                <input type="file" className="p-2 rounded-md text-gray-900" />
              </div>
              <button
                type="submit"
                className="bg-zinc-600 text-white px-4 py-2 rounded-md"
              >
                Submit Ticket
              </button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-gray-800">
        <p className="text-gray-400">
          © 2025 Code Biruny. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/faq" className="text-gray-400 hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
