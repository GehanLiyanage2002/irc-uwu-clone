// components/home/HeroSection.tsx
import Link from "next/link";
import { FlickeringGrid } from "@/components/ui/flickering-grid" // Check your specific path
import { ArrowRight, Calendar, MapPin } from "lucide-react"; // Assuming lucide-react is installed for icons

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background min-h-[85vh] flex items-center justify-center border-b">
      
      {/* --- Background: Flickering Grid --- */}
      <div className="absolute inset-0 size-full">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280" // Gray-500: Adjust to your brand color (e.g., #3b82f6 for blue)
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1200} // Ensure it covers large screens
          width={1600}
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
      </div>

      {/* --- Foreground: Content --- */}
      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        
        {/* Badge / Year */}
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary/50 backdrop-blur-sm text-secondary-foreground">
          <span>ICONF 2026</span>
          <span className="mx-2 h-1 w-1 rounded-full bg-primary" />
          <span>Call for Papers Open</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl max-w-4xl">
          International Conference on <br className="hidden md:block" />
          <span className="text-primary">Future Technologies & Innovation</span>
        </h1>

        {/* Subtitle / Details */}
        <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl">
          Join leading researchers, engineers, and visionaries as we explore the 
          next generation of computing and digital transformation.
        </p>

        {/* Date & Location Meta */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium text-foreground/80">
          <div className="flex items-center gap-2 justify-center">
            <Calendar className="h-4 w-4 text-primary" />
            <span>October 15-17, 2026</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Grand Convention Center, New York</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/registration"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Register Now
          </Link>
          <Link
            href="/call-for-papers"
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Submit Paper
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}