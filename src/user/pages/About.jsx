import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Users, CheckCircle2, Shield, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import certificate1 from "../../assets/certificate1.jpg";
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.jpg";
import clgImg from "../../assets/Clg-IMG.jpg";
import ieeImg from "../../assets/IEE-IMG.jpg";
import indiaMap from "../../assets/INDIA-MAp.jpg";
import isoImg from "../../assets/ISO.jpg";
import starImg from "../../assets/Star-IMG.jpg";
import startupImg from "../../assets/Startup-IMG.jpg";

const PRIMARY = "#3B5575";

export default function About() {
  const navigate = useNavigate();

  const stats = [
    { label: "Institutions Covered", value: "289+", sub: "Universities across India", icon: Building2 },
    { label: "MOI Certifications", value: "3200+", sub: "Successfully processed", icon: Award },
    { label: "Total Applicants", value: "18000+", sub: "Students served globally", icon: Users },
  ];

  const networkImages = [clgImg, ieeImg, indiaMap, isoImg, starImg, startupImg];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <section style={{ backgroundColor: PRIMARY }} className="relative text-white py-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-20 -mb-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.2em]">ISO Certified Firm</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              About <span className="text-blue-300">100 Transcripts</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              A specialized ISO-certified firm dedicated to securing educational documents and transcripts from universities across India since 2016.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate("/apply")}
                className="bg-white text-[#3B5575] px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-2 group"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-[3rem] blur-3xl animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              className="relative rounded-[3rem] shadow-2xl w-full border border-white/10"
              alt="Our Team"
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
              className="rounded-[3rem] shadow-2xl w-full border border-slate-200"
              alt="Collaboration"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-800">Our Mission & Vision</h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We simplify the process of obtaining academic certificates and transcripts, helping students and professionals worldwide save time and effort.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              With a dedicated team across 28 regions in India, we've helped over 18,000 applicants achieve their global education goals through reliable and efficient document processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 text-center space-y-4 hover:scale-[1.02] transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                <stat.icon className="w-7 h-7" />
              </div>
              <h2 className="text-4xl font-black text-slate-800">{stat.value}</h2>
              <h3 className="text-lg font-bold text-slate-700">{stat.label}</h3>
              <p className="text-slate-500 text-sm font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RECOGNITIONS */}
      <section className="py-24 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-16">Our Recognitions & Certifications</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: certificate1, title: "StartupIndia Recognition" },
              { img: certificate2, title: "ISO Certification" },
              { img: certificate3, title: "LLP Registration" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-200 group"
              >
                <h3 className="text-center font-black text-slate-700 mb-6 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK SCROLL */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800">Our Network & Presence</h2>
        </div>
        
        <div className="relative">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...networkImages, ...networkImages].map((img, idx) => (
              <div key={idx} className="min-w-[300px] bg-white p-4 rounded-3xl shadow-xl border border-slate-100">
                <img src={img} alt="Network" className="w-full h-48 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          style={{ backgroundColor: PRIMARY }}
          className="rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-blue-400/5 blur-3xl" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 relative z-10">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium relative z-10">
            Let 100 Transcripts LLP simplify your documentation process with certified transcripts and credential evaluations.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="bg-white text-[#3B5575] px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all relative z-10 group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}