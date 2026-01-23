import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredTracks = [
  { title: "Computing & Informatics", icon: "💻" },
  { title: "Agriculture & Crop Science", icon: "🌱" },
  { title: "Business & Management", icon: "📊" },
  { title: "Engineering Technology", icon: "⚙️" },
];

export default function TracksPreview() {
  return (
    <section className="py-20 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Research Areas</h2>
            <p className="text-slate-600">
              IRCUWU 2025 accepts research papers across a wide spectrum of disciplines, promoting interdisciplinary innovation.
            </p>
          </div>
          <Link href="/tracks" className="group flex items-center font-semibold text-[#005596]">
            View All Tracks <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTracks.map((track, i) => (
            <div key={i} className="p-6 rounded-xl border bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{track.icon}</div>
              <h3 className="font-bold text-lg text-slate-900">{track.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}