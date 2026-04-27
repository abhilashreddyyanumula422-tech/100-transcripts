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
  const [globeSize, setGlobeSize] = useState(window.innerWidth < 768 ? 320 : 800);

  useEffect(() => {
    const handleResize = () => {
      setGlobeSize(window.innerWidth < 768 ? 320 : 800);
    };
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
      // Auto-rotate
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.2;
      globeRef.current.controls().enableZoom = false;
      
      // Initial position to show India
      globeRef.current.pointOfView({ lat: 20, lng: 80, altitude: 2.5 });
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100/30 rounded-full blur-[80px] md:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-50/50 rounded-full blur-[60px] md:blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 relative z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2f4a6d] leading-[1.05] tracking-tight">
              India’s #1 Trusted <br />
              <span className="text-[#3b82f6]">Transcripts</span> Provider
            </h1>
          </motion.div>

          <motion.p 
            className="text-[#2f4a6d] opacity-80 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Gateway to <span className="bg-[#3b82f6] text-white px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20">Global</span> Education and Career – Providing official university transcripts and evaluation support.
          </motion.p>

          {/* SEARCH BAR */}
          <motion.div 
            className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-full shadow-2xl shadow-blue-500/10 overflow-hidden max-w-lg mx-auto lg:mx-0 border border-slate-100 p-2 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Enter Your University Name..."
              className="flex-1 px-6 py-4 outline-none text-[#2f4a6d] font-medium placeholder:text-slate-400 text-base rounded-xl sm:rounded-full bg-slate-50 sm:bg-white"
            />
            <button className="bg-[#2f4a6d] text-white px-8 py-4 rounded-xl sm:rounded-full font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20 text-sm whitespace-nowrap">
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

        {/* RIGHT SIDE 3D GLOBE VISUAL */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] flex justify-center items-center order-1 lg:order-2">
          
          {/* Globe Container */}
          <div className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing scale-[0.8] sm:scale-100 transition-transform">
            <Globe
              ref={globeRef}
              width={globeSize}
              height={globeSize}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              
              atmosphereColor="#93c5fd"
              atmosphereAltitude={0.4}
              
              arcsData={arcsData}
              arcColor="color"
              arcDashLength={0.5}
              arcDashGap={2}
              arcDashAnimateTime={1500}
              arcStroke={0.4}
              
              htmlElementsData={locations}
              htmlElement={d => {
                const el = document.createElement('div');
                el.innerHTML = `
                  <div class="flex flex-col items-center -translate-y-1/2">
                    <div class="relative">
                      ${d.isMain 
                        ? `<div class="w-5 h-5 bg-[#3b82f6] rounded-full border-[3px] border-white shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse"></div>
                           <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-xl border border-blue-100 whitespace-nowrap">
                             <span class="text-[9px] font-black text-[#3b82f6] uppercase tracking-tighter">India Hub</span>
                           </div>`
                        : `<div class="w-2.5 h-2.5 bg-white rounded-full border-2 border-[#60a5fa] shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>`
                      }
                    </div>
                    <span class="text-[8px] font-black text-slate-600 mt-1 uppercase tracking-widest bg-white/50 px-1 rounded-sm">${d.name}</span>
                  </div>
                `;
                return el;
              }}
            />
          </div>

          {/* Floating Educational Icons */}
          <motion.div 
            className="hidden md:block absolute top-20 left-10 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 text-[#3b82f6]"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <FiBook size={24} />
          </motion.div>

          <motion.div 
            className="hidden md:block absolute bottom-20 right-10 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 text-[#60a5fa]"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <FiAward size={24} />
          </motion.div>

          <motion.div 
            className="hidden md:block absolute top-1/4 right-0 p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 text-slate-400"
            animate={{ x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
          >
            <FiFileText size={20} />
          </motion.div>

          {/* Spotlight Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[600px] bg-gradient-to-b from-blue-400/20 to-transparent blur-[60px] pointer-events-none -rotate-12"></div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;