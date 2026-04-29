import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check, ArrowRight, FileText, Upload, UserPlus,
  Shield, BadgeCheck, Building2, CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spantra1 from "../../assets/Spr1.png";

const SpanTran = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: "spantran-discount",
      title: "Apply for Discount",
      description: "Get your SpanTran evaluation at a special discounted rate exclusive to 100 Transcripts-India.",
      icon: UserPlus,
      content: (
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-blue-700 transition-all group text-sm"
          >
            <span>Claim Exclusive Discount</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      )
    },
    {
      id: "prepare-docs",
      title: "Prepare Documents",
      description: "Ensure you have all necessary academic records ready for evaluation.",
      icon: FileText,
      content: (
        <div className="space-y-4 mt-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
          {[
            { label: "CMM (Consolidated Marks)", link: "https://100transcripts.com/cmm/" },
            { label: "Degree Certificate / Provisional", link: "https://100transcripts.com/provisional-degree-certificate-pc/" },
            { label: "SpanTran Reference Number", isText: true },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="mt-1 bg-blue-100 rounded-full p-1 flex-shrink-0">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-blue-600 transition-colors text-sm font-bold leading-tight"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-slate-800 text-sm font-bold">{item.label}</span>
              )}
            </div>
          ))}
          <p className="text-[10px] text-slate-500 font-medium italic mt-2">*Note: Documentation may vary based on university requirements.</p>
        </div>
      )
    },
    {
      id: "upload-docs",
      title: "Upload Documents",
      description: "Securely submit your documents through our portal for processing.",
      icon: Upload,
      content: (
        <div className="mt-6">
          <Link
            to="/apply"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl text-sm group"
          >
            <Upload className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Start Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* HERO SECTION - CLEAN WHITE */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-full px-5 py-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">Official SpanTran Partnership</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-black leading-[1.1] tracking-tight">
                100 Transcripts is partnered with <span className="text-blue-600">SpanTran</span>
              </h1>
              
              <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Get your non-U.S. transcripts evaluated at a special <span className="text-blue-600 font-bold">discounted rate</span>. Enjoy <span className="text-blue-600 font-bold">hassle-free processing</span> and <span className="text-blue-600 font-bold">official verification</span>.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                 <div className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-black font-bold text-sm">Discounted Rates</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-2xl border border-slate-100 shadow-sm">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-black font-bold text-sm">Official Verification</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative bg-white p-4 flex items-center justify-center">
                <motion.img 
                  src={Spantra1} 
                  alt="SpanTran Partnership" 
                  className="w-full max-w-lg h-auto object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEPS SECTION - FORCED WHITE */}
      <section className="bg-white pb-32 pt-12 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-4">SpanTran Evaluation</h2>
                <div className="flex items-center justify-center gap-4">
                    <span className="h-[2px] w-12 bg-slate-100" />
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Step by Step Guide</p>
                    <span className="h-[2px] w-12 bg-slate-100" />
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-6">
                {steps.map((step, idx) => (
                <motion.div
                    key={step.id}
                    className={`group bg-white p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer ${activeStep === step.id ? 'border-blue-500 shadow-xl' : 'border-slate-100 shadow-sm'}`}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                >
                    <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-50 text-blue-600 border border-slate-100">
                        <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <div className="mb-2">
                          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Step {idx + 1}</span>
                        </div>
                        <h3 className="text-xl font-black text-black mb-2">{step.title}</h3>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.description}</p>
                        <AnimatePresence>
                        {activeStep === step.id && (
                            <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                            >
                            {step.content}
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>

            <div className="lg:sticky lg:top-32 h-fit space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg text-center lg:text-left">
                    <h3 className="text-2xl font-black text-black tracking-tight mb-4">Official Support</h3>
                    <p className="text-slate-600 text-base font-medium leading-relaxed mb-8">Our experts are here to guide you through every step of your SpanTran evaluation process.</p>
                    <a
                        href="https://wa.me/919941991402"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black text-sm shadow-xl hover:bg-blue-600 transition-all"
                    >
                        Chat with an Expert
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="bg-blue-600 p-8 rounded-[2.5rem] flex items-center gap-6 shadow-xl">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                        <BadgeCheck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h4 className="text-lg font-black text-white">100% Verified</h4>
                        <p className="text-blue-100 font-medium text-sm">Official partnership for secure results.</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/919941991402"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 active:scale-95 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </div>
  );
};

export default SpanTran;