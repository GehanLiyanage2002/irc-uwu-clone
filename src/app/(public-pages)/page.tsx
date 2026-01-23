import HeroSection from "@/components/home/HeroSection";
import AboutUniversity from "@/components/home/AboutUniversity";
import StatsSection from "@/components/home/StatsSection";
import TracksPreview from "@/components/home/TracksPreview"; // If you haven't created this, comment it out or use the code below

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero: First Impression */}
      <HeroSection />

      {/* 2. Stats: Credibility indicators */}
      <StatsSection />

      {/* 3. About UWU: The Host */}
      <AboutUniversity />

      {/* 4. Tracks: What is it about? */}
      <TracksPreview />
      
      {/* 5. CTA Section (Optional but good) */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join us in Badulla</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the hospitality of Uva Wellassa University while engaging in high-impact research discussions.
          </p>
          <a href="/registration" className="inline-flex h-12 items-center justify-center rounded-md bg-[#005596] px-8 text-sm font-medium text-white shadow hover:bg-blue-700 transition-colors">
            Register Today
          </a>
        </div>
      </section>

    </main>
  );
}