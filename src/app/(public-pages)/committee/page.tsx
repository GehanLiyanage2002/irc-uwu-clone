"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 1. Data with Auto-Generated Fallbacks ---
// I replaced local paths with a function that generates an avatar based on the name.
// When you have real photos, just replace the 'img' property with "/committee/filename.jpg"

const getAvatar = (name: string) => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=256`;

const committeeData = {
  advisory: [
    { name: "Prof. Amila Sandaruwan Ratnayake", role: "Dean, Faculty of Applied Sciences", dept: "Uva Wellassa University", img: getAvatar("Amila Sandaruwan") },
    { name: "Assoc. Prof. A. P. Henagamage", role: "Head, Dept. of Science & Technology", dept: "Uva Wellassa University", img: getAvatar("A. P. Henagamage") },
    { name: "Dr. J. T. Cooray", role: "Head, Dept. of CS & Informatics", dept: "Uva Wellassa University", img: getAvatar("J. T. Cooray") },
    { name: "Prof. K. W. S. N. Kumari", role: "Head, Dept. of Applied Earth Sciences", dept: "Uva Wellassa University", img: getAvatar("K. W. S. N. Kumari") },
    { name: "Ms. S. D. H. S. Wickramarathne", role: "Counselor", dept: "IEEE UWU Student Branch", img: getAvatar("S. D. H. S. Wickramarathne") },
  ],
  program: [
    { name: "Prof. E. M. U. W. J. B. Ekanayake", role: "Program Chair", dept: "Uva Wellassa University", img: getAvatar("Ekanayake") },
    { name: "Dr. H. M. S. N. Ariyadasa", role: "Editor-In-Chief", dept: "", img: getAvatar("Ariyadasa") },
    { name: "Dr. N. P. Samarasinghe", role: "Co-Editor", dept: "", img: getAvatar("Samarasinghe") },
    { name: "Ms. D. P. Jayathunga", role: "Academic Treasurer", dept: "", img: getAvatar("D. P. Jayathunga") },
    { name: "Mr. S. J. M. D. P. Samarakoon", role: "Student Activities Chair", dept: "", img: getAvatar("Samarakoon") },
  ],
  organization: [
    { name: "Mr. W. D. V. A. Weerasinghe", role: "Student Branch Chair", dept: "", img: getAvatar("Weerasinghe") },
    { name: "Mr. C. C. R. Jayawardana", role: "Chair", dept: "", img: getAvatar("Jayawardana") },
    { name: "Mr. P. N. N. Peiris", role: "Co-Chair", dept: "", img: getAvatar("Peiris") },
    { name: "Ms. W. M. W. N. Weerakon", role: "Secretary", dept: "", img: getAvatar("Weerakon") },
    { name: "Mr. R. P. N. S. Randunu", role: "Junior Treasurer", dept: "", img: getAvatar("Randunu") },
    { name: "Mr. G. A. N. L. Gajaweera", role: "Logistics Chair", dept: "", img: getAvatar("Gajaweera") },
    { name: "Ms. D. L. N. Nawanjana", role: "Publicity Chair", dept: "", img: getAvatar("Nawanjana") },
    { name: "Mr. H. M. V. N. Kumarasiri", role: "Design Chair", dept: "", img: getAvatar("Kumarasiri") },
    { name: "Ms. R. I. M. Panamaldeniye", role: "Industry Liaison", dept: "", img: getAvatar("Panamaldeniye") },
    { name: "Mr. G. Y. L. M. Nandasiri", role: "Web & IT Chair", dept: "", img: getAvatar("Nandasiri") },
    { name: "Mr. W. H. G. L. Bimsara", role: "Operational Support Chair", dept: "", img: getAvatar("Bimsara") },
    
  ],
};

type TabType = 'advisory' | 'program' | 'organization';

export default function CommitteePage() {
  const [activeTab, setActiveTab] = useState<TabType>('advisory');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header */}
      <section className="relative py-20 bg-white border-b w-full">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-foreground">Organizing Committee</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated academic and student leaders making ICONF 2026 possible.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="flex flex-wrap justify-center p-1 bg-white border rounded-xl shadow-sm max-w-3xl mx-auto">
          {['advisory', 'program', 'organization'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className={cn(
                "px-6 py-3 text-sm font-medium rounded-lg capitalize transition-all flex-1 sm:flex-none",
                activeTab === tab ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-slate-50"
              )}
            >
              {tab === 'organization' ? 'Organizing Team' : `${tab} Committee`}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeData[activeTab].map((member, index) => (
            <div key={index} className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300">
              
              {/* Avatar Circle */}
              <div className="mb-4 p-1 rounded-full bg-gradient-to-tr from-primary/20 to-transparent">
                <div className="relative h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-sm bg-gray-100">
                  {/* Using standard img tag here for better reliability with external URLs during dev */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <span className="text-xs font-bold text-primary uppercase tracking-wide mt-1 mb-2">
                {member.role}
              </span>
              {member.dept && (
                <p className="text-xs text-muted-foreground font-medium max-w-[200px]">
                  {member.dept}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}