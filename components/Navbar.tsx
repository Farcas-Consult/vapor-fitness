"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import OverlandLogo from "@/assets/Overland_Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Wellness", href: "/wellness" },
    { name: "Classes", href: "/classes" },
    { name: "Equipment", href: "/equipment" },
    { name: "Membership", href: "/membership" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={OverlandLogo}
                alt="Overland Fitness Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-sm leading-tight">Overland Fitness</span>
                <span className="text-xs text-muted-foreground">Ladies Only Gym</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors text-foreground/70 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="default" size="sm">
                Contact
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
