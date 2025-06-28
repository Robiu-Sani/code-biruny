import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function HomeFooter() {
  return (
    <div className="bg-background">
      <div className="container px-2 mx-auto">
        <div className="text-center bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to transform your digital presence?
          </h3>
          <Image
            src={`/logo.jpg`}
            alt="Code Biruni logo"
            width={120}
            height={120}
            className="mx-auto rounded-lg mb-6"
          />
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Code Biruni provides cutting-edge IT solutions, web development, and
            software services to help your business thrive in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">PRODUCT</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/pages/services/fullstack"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Full-Stack Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/mern"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Mern-Stack Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/mobile"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/up-coming"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/design"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/pages/company/about"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/company/careers"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/blog"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/company/contact"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">RESOURCES</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/pages/footer/documentation"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/footer/case-studies"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/footer/support"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/footer/community"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">LEGAL</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/pages/footer/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/footer/terms-of-service"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/footer/refund-policy"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/logo.jpg"
                alt="Code Biruni Logo"
                width={32}
                height={32}
                className=" mr-2 rounded-md"
              />
              <span className="font-semibold">Code Biruni</span>
            </div>

            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              © {new Date().getFullYear()} Code Biruni. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
