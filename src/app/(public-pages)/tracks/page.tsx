import Image from "next/image";
import { Badge } from "lucide-react";

// Updated Data with new Images
const tracks = [
  {
    title: "Aquatic Sciences",
    description: "Exploration of marine ecosystems, freshwater biology, oceanography, and sustainable water resource management.",
    // New: Underwater research / Marine life
    image: "https://images.unsplash.com/photo-1544551763-46a8723ba3f9?auto=format&fit=crop&q=80&w=800",
    category: "Science"
  },
  {
    title: "Business Economics, Accountancy & Finance",
    description: "Global financial trends, economic policies, modern accounting standards, and fiscal strategies for the digital age.",
    // New: Financial data / Analytics
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800",
    category: "Business"
  },
  {
    title: "Computing & Informatics",
    description: "Cutting-edge research in AI, machine learning, cybersecurity, data science, and next-gen software engineering.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    category: "Technology"
  },
  {
    title: "Engineering & Technology",
    description: "Innovations in civil, mechanical, and electrical engineering, including robotics and smart infrastructure.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    category: "Technology"
  },
  {
    title: "Entrepreneurship & Business Management",
    description: "Strategies for startups, innovation management, leadership dynamics, and scaling businesses in competitive markets.",
    // New: Modern startup meeting
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    category: "Business"
  },
  {
    title: "Environmental Sciences",
    description: "Addressing climate change, pollution control, conservation strategies, and environmental policy making.",
    // New: Nature / Sustainability concept
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
    category: "Science"
  },
  {
    title: "Food Science & Bioprocesses",
    description: "Advances in food safety, nutritional science, bioprocessing technologies, and sustainable food systems.",
    // New: Lab research / Food biotech
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=800",
    category: "Science"
  },
  {
    title: "Hospitality & Tourism",
    description: "Evolving trends in global tourism, hospitality management, ecotourism, and travel consumer behavior.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    category: "Management"
  },
  {
    title: "Library & Information Sciences",
    description: "Digital archiving, information retrieval systems, knowledge management, and the future of libraries.",
    // New: Modern library interior
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    category: "Education"
  },
  {
    title: "Material & Mineral Sciences",
    description: "Research into nanomaterials, metallurgy, mining technology, and the development of sustainable materials.",
    // New: Close up structure / Geology
    image: "https://images.unsplash.com/photo-1580221461971-705d9e5d487b?auto=format&fit=crop&q=80&w=800",
    category: "Science"
  },
  {
    title: "Medical Sciences",
    description: "Clinical research, public health initiatives, medical technology innovations, and pharmaceutical developments.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    category: "Health"
  },
  {
    title: "Sustainable Animal Production",
    description: "Livestock welfare, genetics, sustainable breeding practices, and animal health management.",
    // New: Cattle/Farm
    image: "https://images.unsplash.com/photo-1545465792-bf39386d427d?auto=format&fit=crop&q=80&w=800",
    category: "Agriculture"
  },
  {
    title: "Sustainable Crop Production",
    description: "Agronomy, precision agriculture, crop protection, and soil health for future food security.",
    // New: Wheat field / Harvest
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    category: "Agriculture"
  },
  {
    title: "Human Resource Development",
    description: "Talent acquisition, organizational behavior, employee well-being, and workforce training strategies.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    category: "Management"
  },
];

export default function TracksPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* --- Header Section --- */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden border-b w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
            Conference Topics
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl max-w-4xl">
            Research Tracks
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the diverse range of disciplines covered at ICONF 2026. 
            We welcome submissions in the following key areas of innovation.
          </p>
        </div>
      </section>

      {/* --- Tracks Grid --- */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image 
                  src={track.image} 
                  alt={track.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-gray-500/10 shadow-sm">
                    {track.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="h-1 w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="rounded-2xl bg-black text-white p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to submit your research?</h2>
            <p className="text-gray-300">
              Choose the track that best fits your work and review our submission guidelines before uploading your paper.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a href="/guidelines" className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-sm transition-colors w-full sm:w-auto">
                View Guidelines
              </a>
              <a href="/call-for-papers" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors w-full sm:w-auto">
                Submit Paper
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}