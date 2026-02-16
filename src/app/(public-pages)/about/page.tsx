import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, BookOpen, Award, Target, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Target className="w-4 h-4" />
            About the Conference
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
            IRCUWU 2026
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            International Research Conference at Uva Wellassa University
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>June 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Badulla, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              IRCUWU 2026 brings together researchers, academics, industry professionals, and students 
              from around the globe to share innovative research, foster collaboration, and address 
              pressing challenges across multiple disciplines.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-blue-600 mb-2">14</h3>
              <p className="text-slate-700 font-medium">Research Tracks</p>
              <p className="text-sm text-slate-500 mt-2">
                Spanning diverse fields from Computing to Agriculture
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-green-50 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-green-600 mb-2">500+</h3>
              <p className="text-slate-700 font-medium">Expected Participants</p>
              <p className="text-sm text-slate-500 mt-2">
                Global researchers and industry experts
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-orange-600 mb-2">Best</h3>
              <p className="text-slate-700 font-medium">Paper Awards</p>
              <p className="text-sm text-slate-500 mt-2">
                Recognition for outstanding research contributions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Host University */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
                alt="Uva Wellassa University Campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Host Institution</span>
                </div>
                <h3 className="text-2xl font-bold">Uva Wellassa University</h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                Badulla, Sri Lanka
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Center of Excellence for Value Addition
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                Uva Wellassa University (UWU) is proudly known as Sri Lanka&apos;s first entrepreneurial university. 
                Located in the scenic hill country of Badulla, UWU has established itself as a leader in 
                innovation-driven education and research.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Innovation Driven</h4>
                    <p className="text-slate-600 text-sm">
                      Fostering an entrepreneurial culture that transforms knowledge into value-added 
                      products and services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">World-Class Research</h4>
                    <p className="text-slate-600 text-sm">
                      Equipped with state-of-the-art facilities supporting cutting-edge research 
                      across multiple disciplines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
                >
                  Learn more about UWU
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Organizing Committee Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Organizing Committee
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              IRCUWU 2026 is organized by a dedicated team of academic leaders and student volunteers 
              committed to creating an exceptional conference experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Advisory Committee</h3>
              <p className="text-slate-600 text-sm">
                Distinguished faculty members providing strategic guidance and academic oversight
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Program Committee</h3>
              <p className="text-slate-600 text-sm">
                Experts managing the technical program, paper reviews, and editorial processes
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Organizing Team</h3>
              <p className="text-slate-600 text-sm">
                Student volunteers and coordinators handling logistics, operations, and hospitality
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/committee"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Meet the Full Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call for Papers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Calendar className="w-4 h-4" />
                Submissions Open
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Submit Your Research
              </h2>
              
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                We welcome original research abstracts across all 14 conference tracks. 
                Both oral and poster presentations are available.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/call-for-papers"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  View Submission Guidelines
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <a 
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Submit via CMT Portal
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20">
                <p className="text-sm text-blue-200">
                  <strong className="text-white">Important:</strong> Extended abstracts must be submitted 
                  to support the review process. Submissions without this document will be disqualified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team is here to help. Reach out to us for any inquiries about registration, 
            submissions, or conference logistics.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
