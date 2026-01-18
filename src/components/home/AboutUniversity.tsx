import Image from "next/image";
import { GraduationCap, MapPin, Lightbulb, Trophy } from "lucide-react";

export default function AboutUniversity() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wide text-blue-600 uppercase mb-2">Host Institution</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Uva Wellassa University
          </h3>
          <p className="text-lg text-slate-600">
            Known as the <span className="font-semibold text-slate-800">"Center of Excellence for Value Addition"</span>, 
            UWU is the first entrepreneurial university in Sri Lanka, nestled in the scenic hill country of Badulla.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Main Large Card (Left) */}
          <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
              alt="University Campus" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-3">
                <MapPin className="w-3 h-3" /> Badulla, Sri Lanka
              </div>
              <h4 className="text-2xl font-bold mb-2">A Campus in the Clouds</h4>
              <p className="text-gray-200 text-sm max-w-md">
                Located in the cool, salubrious climate of the Uva province, providing a serene environment perfect for academic research and innovation.
              </p>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-start group hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Lightbulb className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Innovation Driven</h4>
            <p className="text-slate-500 text-sm">
              Fostering an entrepreneurial culture that transforms knowledge into value-added products and services.
            </p>
          </div>

          {/* Middle Right Card (Image) */}
          <div className="relative overflow-hidden rounded-3xl shadow-sm h-48 md:h-auto group">
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
              alt="Research Labs" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-bold text-lg">World-Class Research</span>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-lg text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
            <Trophy className="w-8 h-8 text-yellow-400 mb-4" />
            <h4 className="text-xl font-bold mb-1">Our Vision</h4>
            <p className="text-slate-400 text-sm">
              To be the center of excellence in value addition to national resources.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}