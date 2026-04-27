import React, { useState } from "react";
import { Check, ArrowRight, FileText, Upload, UserPlus, Building2, ChevronRight, Sparkles, Award, Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import workflowImg from "../../assets/workflow.png";

const EP = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Create EP Account",
      description: "Register your account on the Educational Perspectives portal to begin your evaluation journey.",
      icon: UserPlus,
      color: "blue",
      content: (
        <div className="mt-6">
          <a
            href="https://www.edperspective.org/apply/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Register Here</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )
    },
    {
      id: 2,
      title: "Select Evaluation Type",
      description: "Choose between General, Course-by-Course, or Catalog Match reports based on your needs.",
      icon: FileText,
      color: "blue",
      content: (
        <div className="space-y-4 mt-5">
          {[
            { label: "General Report", sublabel: "(For employment/immigration)" },
            { label: "Course-by-Course", sublabel: "(For further education)" }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="mt-1 bg-blue-50 rounded-full p-1 flex-shrink-0">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <span className="text-gray-700 text-sm font-medium leading-tight">{item.label}</span>
                <span className="text-[10px] text-gray-500 block">{item.sublabel}</span>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 3,
      title: "Document Submission",
      description: "Upload your verified transcripts and degree certificates through our secure portal.",
      icon: Upload,
      color: "blue",
      content: (
        <div className="mt-6">
          <a
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl text-sm"
          >
            <Upload className="w-4 h-4" />
            Start Uploading
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-2/3 text-center lg:text-left space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#e2e8f0] rounded-full px-4 py-1.5 shadow-sm">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">Official EP Support</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-800 leading-tight">
                Educational <span className="text-blue-600">Perspectives</span> Evaluation
              </h1>
              
              <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Streamlined and accurate credential evaluation for your international education journey.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                 <div className="flex items-center gap-3 bg-white/90 px-5 py-3 rounded-2xl border border-blue-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-bold text-sm">Official Support</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/90 px-5 py-3 rounded-2xl border border-blue-100 shadow-sm">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-700 font-bold text-sm">Verified Handling</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-400/20 rounded-[3rem] blur-3xl animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-2xl overflow-hidden flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">The Evaluation Roadmap</h2>
              <p className="text-slate-500 font-medium leading-relaxed">Simple steps to get your credentials evaluated by EP experts.</p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 sm:p-8 rounded-[2rem] border-2 transition-all duration-300 ${activeStep === step.id ? 'border-blue-500 shadow-xl scale-[1.02]' : 'border-slate-100 hover:border-slate-200 shadow-sm'}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-blue-50 text-blue-600">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-blue-50 text-blue-700">
                          Step {step.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-slate-800 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.description}</p>
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
          </div>

          <div className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-slate-800 p-8 sm:p-12 rounded-[3rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 space-y-8 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Official Workflow</span>
                </div>
                <h3 className="text-3xl font-black">Secure Document Flow</h3>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/10">
                  <img src={workflowImg} alt="Workflow" className="w-full h-auto rounded-2xl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-bold">Priority Status</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-bold">100% Secure</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10 space-y-6 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">Need Support?</h3>
                  <p className="text-blue-100 text-sm font-medium">Our experts are here to help you with your EP application.</p>
                </div>
                <a
                  href="https://wa.me/919941991402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-transform"
                >
                  Chat with Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/919941991402"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </div>
  );
};

export default EP;
