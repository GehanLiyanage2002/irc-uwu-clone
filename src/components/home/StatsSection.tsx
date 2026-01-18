"use client";

export default function StatsSection() {
  return (
    <section className="bg-[#005596] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <StatItem number="15+" label="Research Tracks" />
          <StatItem number="300+" label="Papers Expected" />
          <StatItem number="50+" label="Global Speakers" />
          <StatItem number="1000+" label="Participants" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-black tracking-tight mb-2">{number}</span>
      <span className="text-sm md:text-base font-medium text-blue-100 uppercase tracking-widest">{label}</span>
    </div>
  );
}