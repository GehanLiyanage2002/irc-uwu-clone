"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "@/components/ui/countdown-timer"; // <--- Import here

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-background min-h-[90vh] flex items-center justify-center border-b pb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 size-full">
        {size.width > 0 && (
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={size.height}
            width={size.width}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-8 pt-10">
        
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary/50 backdrop-blur-sm text-secondary-foreground animate-in fade-in slide-in-from-top-4 duration-700">
          <span>ICONF 2026</span>
          <span className="mx-2 h-1 w-1 rounded-full bg-primary" />
          <span>Call for Papers Open</span>
        </div>

        {/* Headings */}
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-7xl max-w-5xl animate-in fade-in zoom-in duration-1000">
          International Conference on <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            Future Technologies
          </span>
        </h1>

        <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Join leading researchers, engineers, and visionaries as we explore the 
          next generation of computing and digital transformation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
          <Link
            href="/registration"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90"
          >
            Register Now
          </Link>
          <Link
            href="/call-for-papers"
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Submit Paper
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* --- NEW: Modern Countdown Timer --- */}
        <div className="pt-10 pb-4 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest">
              Conference Starts In
            </p>
            <CountdownTimer targetDate="2026-10-15T09:00:00" />
        </div>

      </div>
    </section>
  );
}