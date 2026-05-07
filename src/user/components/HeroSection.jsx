import React, { useMemo, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Globe from "react-globe.gl";
import { FiBook, FiAward, FiFileText } from "react-icons/fi";

// Static data moved outside to fix useMemo dependency and optimize performance
const locations = [
  { name: "New York", lat: 40.7128, lng: -74.006, size: 0.1 },
  { name: "London", lat: 51.5074, lng: -0.1278, size: 0.1 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, size: 0.1 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, size: 0.1 },
  { name: "India", lat: 20.5937, lng: 78.9629, size: 0.15, isMain: true },
];

const HeroSection = () => {
  const globeRef = useRef();
  const [globeSize, setGlobeSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Precise sizing to prevent layout shifts and ensure full screen fit
      const width = window.innerWidth;
      if (width < 640) setGlobeSize(340);
      else if (width < 1024) setGlobeSize(550);
      else setGlobeSize(750);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Arcs from India to other cities
  const arcsData = useMemo(() => {
    const india = locations.find(l => l.name === "India");
    return locations
      .filter(l => l.name !== "India")
      .map(target => ({
        startLat: india.lat,
        startLng: india.lng,
        endLat: target.lat,
        endLng: target.lng,
        color: ["#b4caee", "#93c5fd"],
      }));
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate setup
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.controls().enableZoom = false;

      // Initial position to show India clearly
      globeRef.current.pointOfView({ lat: 20, lng: 78, altitude: 2.2 });
    }
  }, [globeSize]); // Re-adjust if screen size changes significantly

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-200/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-100/30 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          
          {/* LEFT CONTENT - TOP ON MOBILE */}
          <div className="space-y-8 text-center lg:text-left order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2f4a6d] leading-[1.1] tracking-tight">
                India’s #1 Trusted <br />
                <span className="text-blue-500">Transcripts</span> Provider
              </h1>
            </motion.div>

            <motion.p
              className="text-[#2f4a6d]/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Gateway to <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-lg shadow-blue-500/20">Global</span> Education – Providing official university transcripts and evaluation support.
            </motion.p>

            {/* SEARCH BAR - SCREEN OPTIMIZED */}
            <motion.div
              className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-full shadow-2xl shadow-blue-500/10 overflow-hidden max-w-lg mx-auto lg:mx-0 border border-slate-100 p-2 gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Enter Your University Name..."
                className="flex-1 px-6 py-4 outline-none text-[#2f4a6d] font-medium placeholder:text-slate-400 text-base bg-transparent"
              />
              <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all whitespace-nowrap">
                Start Now
              </button>
            </motion.div>

            <motion.button
              className="flex items-center gap-2 text-[#2f4a6d] font-bold hover:gap-4 transition-all text-base mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Learn More <span className="text-xl">→</span>
            </motion.button>
          </div>

          {/* RIGHT GLOBE SECTION - BOTTOM ON MOBILE */}
          <div className="relative h-[380px] sm:h-[500px] lg:h-[700px] flex justify-center items-center order-2">
            
            {/* Globe Container */}
            <div className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform">
              {globeSize > 0 && (
                <Globe
                  ref={globeRef}
                  width={globeSize}
                  height={globeSize}
                  backgroundColor="rgba(0,0,0,0)"
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  
                  atmosphereColor="#93c5fd"
                  atmosphereAltitude={0.3}
                  
                  arcsData={arcsData}
                  arcColor="color"
                  arcDashLength={0.4}
                  arcDashGap={2}
                  arcDashAnimateTime={1800}
                  arcStroke={0.5}
                  
                  htmlElementsData={locations}
                  htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = `
                      <div class="flex flex-col items-center -translate-y-1/2">
                        <div class="relative">
                          ${d.isMain 
                            ? `<div class="w-5 h-5 bg-purple-600 rounded-full border-[3px] border-white shadow-[0_0_15px_rgba(147,51,234,0.6)] animate-pulse"></div>`
                            : `<div class="w-2.5 h-2.5 bg-white rounded-full border-2 border-purple-400 shadow-md"></div>`
                          }
                        </div>
                        <span class="text-[9px] font-black text-slate-700 mt-1 uppercase tracking-tighter bg-white/70 px-1 rounded-sm">${d.name}</span>
                      </div>
                    `;
                    return el;
                  }}
                />
              )}
            </div>

            {/* Floating UI Elements (Hidden on small mobile) */}
            <div className="hidden sm:block absolute inset-0 pointer-events-none">
              <motion.div 
                className="absolute top-20 left-10 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white text-purple-600"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <FiBook size={24} />
              </motion.div>

              <motion.div 
                className="absolute bottom-20 right-10 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white text-purple-400"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <FiAward size={24} />
              </motion.div>
            </div>

            {/* Spotlight Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[500px] bg-gradient-to-b from-purple-400/10 to-transparent blur-[60px] pointer-events-none -rotate-12"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;