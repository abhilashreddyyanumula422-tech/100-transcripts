import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, FileText, CheckCircle2, Award, Info } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProvisionalCertificate = () => {
  const navigate = useNavigate();

  const checklist = [
    "All semester mark sheets",
    "Course completion certificate",
    "Government ID proof",
    "Passport size photographs",
    "University registration number"
  ];

  const features = [
    { 
      icon: <Clock className="w-8 h-8" />, 
      title: "Quick Issuance", 
      desc: "Fast processing from universities across India.", 
      color: "text-blue-600", 
      bg: "bg-blue-50" 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      title: "Official Verification", 
      desc: "Secure handling of your academic credentials.", 
      color: "text-emerald-600", 
      bg: "bg-emerald-50" 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: "Live Tracking", 
      desc: "Monitor your application status 24/7.", 
      color: "text-indigo-600", 
      bg: "bg-indigo-50" 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "Expert Assistance", 
      desc: "Comprehensive support for complex university tasks.", 
      color: "text-amber-600", 
      bg: "bg-amber-50" 
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <motion.section
        className="relative py-24 bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md border border-[#e2e8f0] rounded-full text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
            Academic Documentation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
            Provisional <br /><span className="text-blue-600">Certificate (PC)</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Get your interim academic proof quickly. Essential for higher education and job applications.
          </p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-8 space-y-12">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
              <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-4 relative z-10">
                <ShieldCheck className="text-blue-600 w-10 h-10" />
                What is a Provisional Certificate?
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-medium relative z-10">
                <p>
                  A <span className="text-slate-800 font-black">Provisional Certificate</span> is an interim document issued to students who have completed their course but haven't yet received their final degree.
                </p>
                <p>
                  It serves as vital proof for <span className="text-blue-600 font-bold">job applications, university admissions</span>, and <span className="text-blue-600 font-bold">visa processing</span>. We help you navigate university bureaucracy to get your PC issued fast.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-slate-800 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="text-2xl font-black mb-8 relative z-10 tracking-tight">Required Documents</h3>
              <ul className="space-y-5 relative z-10">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300 font-bold text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-[3rem] p-10 border border-slate-100 text-center shadow-xl shadow-slate-200/50"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Need your PC?</h3>
              <p className="text-slate-500 font-medium mb-8">Fast-track your application with our dedicated support team.</p>
              <button
                onClick={() => navigate("/apply")}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95 group"
              >
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

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

export default ProvisionalCertificate;
