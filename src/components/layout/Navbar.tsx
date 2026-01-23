"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Tracks", href: "/tracks" },
  { name: "Committee", href: "/committee" },
  { name: "Speakers", href: "/keynote-speakers" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        // Base styles: Fixed position, White background, transition effects
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-sm", 
        // Conditional styles based on scroll state
        scrolled
          ? "border-b shadow-sm py-3"  // Compact padding + border when scrolled
          : "py-4 border-b border-transparent" // Relaxed padding at the top
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            IC
          </div>
          <span>ICONF 2026</span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- CTA Button (Desktop) --- */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/registration"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Register Now
          </Link>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b md:hidden shadow-lg animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary flex items-center justify-between group"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            <hr className="border-gray-100" />
            <Link
              href="/registration"
              className="flex w-full items-center justify-center rounded-md bg-primary py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}