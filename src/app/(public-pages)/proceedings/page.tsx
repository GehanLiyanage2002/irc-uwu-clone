"use client";

import { useState } from "react";
import { BookOpen, Download, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export default function ProceedingsPage() {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50));
  const handleReset = () => setZoom(100);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          2025 Proceedings
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          International Research Conference at Uva Wellassa University - 2025
        </p>
      </section>

      {/* PDF Viewer Controls */}
      <section className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleZoomOut}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5 text-slate-700" />
              </button>
              <span className="text-sm font-medium text-slate-700 min-w-[60px] text-center">
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={handleReset}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                title="Reset Zoom"
              >
                <Maximize2 className="w-5 h-5 text-slate-700" />
              </button>
            </div>
            <a
              href="/IRCUWU2025_Proceeding_eVersion.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-900 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all font-medium shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
            <div 
              className="relative"
              style={{ 
                height: "calc(100vh - 280px)",
                minHeight: "600px"
              }}
            >
              <iframe
                src="/IRCUWU2025_Proceeding_eVersion.pdf"
                className="w-full h-full"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "top center",
                  transition: "transform 0.3s ease"
                }}
                title="IRCUWU 2025 Proceedings"
              />
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Full Proceedings</h3>
                  <p className="text-sm text-slate-600">
                    Complete collection of accepted research papers from IRCUWU 2025
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Free Download</h3>
                  <p className="text-sm text-slate-600">
                    Download the complete proceedings for offline reading and citation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Maximize2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Interactive View</h3>
                  <p className="text-sm text-slate-600">
                    Zoom in/out and navigate through pages with ease
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
