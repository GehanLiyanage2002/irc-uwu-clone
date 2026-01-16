// app/(public-pages)/page.tsx
import HeroSection from "@/components/home/HeroSection";

//import AboutConference from "@/components/home/AboutConference";
// import other sections...

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      
      
      {/* Other sections will go here */}
      {/* <AboutConference />  */}
      {/* <TracksPreview /> */}
      {/* <KeynoteCarousel /> */}
    </main>
  );
}