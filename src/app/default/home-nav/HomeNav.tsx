"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Search, ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/lib/utils";
import { VscAzure, VscServerEnvironment, VscCode } from "react-icons/vsc";
import { FiLayers, FiUsers, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function HomeNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ensure theme is only applied after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    console.log("Search open:", !searchOpen);
  };

  const servicesItems = [
    {
      title: "Full-Stack Development",
      href: "/services/fullstack",
      description: "End-to-end web application development",
      icon: <VscCode className="h-5 w-5" />,
    },
    {
      title: "MERN Stack Solutions",
      href: "/services/mern",
      description: "MongoDB, Express, React, Node.js",
      icon: <VscServerEnvironment className="h-5 w-5" />,
    },
    {
      title: "Enterprise Software",
      href: "/services/enterprise",
      description: "Custom business solutions",
      icon: <VscAzure className="h-5 w-5" />,
    },
    {
      title: "UI/UX Design",
      href: "/services/design",
      description: "Beautiful, intuitive interfaces",
      icon: <FiLayers className="h-5 w-5" />,
    },
  ];

  const companyItems = [
    {
      title: "About Us",
      href: "/about",
      description: "Our story, mission, and values",
      icon: <FiUsers className="h-5 w-5" />,
    },
    {
      title: "Our Team",
      href: "/team",
      description: "Meet the talented people",
      icon: <FiUsers className="h-5 w-5" />,
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our growing team",
      icon: <FiUsers className="h-5 w-5" />,
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with us",
      icon: <FiMail className="h-5 w-5" />,
    },
  ];

  return (
    <nav className="fixed z-[500] w-full top-0 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex justify-between items-center mx-auto px-4 py-3">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={`/logo.jpg`}
              alt="code-biruny logo"
              width={50}
              height={50}
              className="w-8 h-8 rounded-md"
            />
            <span className="font-bold text-xl">Code Biruny</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    <div className="row-span-4">
                      <NavigationMenuLink asChild>
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <VscCode className="h-10 w-10" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Our Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Comprehensive digital solutions tailored to your
                            business needs.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </div>
                    {servicesItems.map((item) => (
                      <NavigationMenuLink
                        key={item.title}
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-sm font-medium leading-none">
                            {item.title}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground ml-7">
                          {item.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-1 p-4">
                    {companyItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 200 }}
                  exit={{ opacity: 0, width: 0 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-8 pr-8"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Theme Toggle - Only render when mounted to avoid hydration mismatch */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}

          {/* LinkedIn */}
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://linkedin.com/company/code-biruny"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-t"
          >
            <div className="px-4 py-2 space-y-2">
              <MobileNavItem href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavItem>

              <MobileNavDropdown
                title="Services"
                items={servicesItems}
                onItemClick={() => setMobileMenuOpen(false)}
              />

              <MobileNavDropdown
                title="Company"
                items={companyItems}
                onItemClick={() => setMobileMenuOpen(false)}
              />

              <MobileNavItem
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </MobileNavItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ListItem Component
const ListItem = ({
  title,
  href,
  children,
  icon,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
        >
          {icon && <span className="mt-0.5">{icon}</span>}
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

// Mobile Nav Item Component
const MobileNavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 rounded-md hover:bg-accent transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

// Mobile Nav Dropdown Component
const MobileNavDropdown = ({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: Array<{ title: string; href: string; description: string }>;
  onItemClick: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2 px-3">
      <button
        className="flex items-center justify-between w-full py-2 rounded-md hover:bg-accent transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-2 space-y-1 pl-4">
          {items.map((item) => (
            <MobileNavItem
              key={item.href}
              href={item.href}
              onClick={onItemClick}
            >
              {item.title}
            </MobileNavItem>
          ))}
        </div>
      )}
    </div>
  );
};
