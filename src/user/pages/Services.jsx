import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiGlobe, FiLock, FiUserCheck, FiBookOpen, FiShield, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "University Transcripts",
      desc: "Secure official transcripts from 289+ Indian universities for higher education or global migration.",
      icon: <FiFileText />,
      category: "Academic Records",
      path: "/apply"
    },
    {
      title: "Evaluation Support",
      desc: "Specialized assistance for WES, IEE, ECE, and other global credential evaluation services.",
      icon: <FiGlobe />,
      category: "Global Migration",
      path: "/wes"
    },
    {
      title: "Original Degree (OD)",
      desc: "Reliable university paperwork handling to secure your original degree or duplicate copies.",
      icon: <FiLock />,
      category: "Certificates",
      path: "/apply"
    },
    {
      title: "Verification Services",
      desc: "Comprehensive degree verification for employers and background screening agencies.",
      icon: <FiUserCheck />,
      category: "Verifications",
      path: "/apply"
    },
    {
      title: "English Proof (MOI)",
      desc: "Official Medium of Instruction proof required for admissions in UK, Europe, and globally.",
      icon: <FiBookOpen />,
      category: "Academic Records",
      path: "/apply"
    },
    {
      title: "Provisional Certificate",
      desc: "Fast-track processing for provisional certificates while awaiting your final degree.",
      icon: <FiShield />,
      category: "Certificates",
      path: "/apply"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">

      {/* HEADER SECTION */}
      <motion.section
        className="relative py-24 bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md border border-[#e2e8f0] rounded-full text-blue-600 font-black uppercase text-[10px] tracking-[0.2em] mb-4">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight">
            How Can We <br /><span className="text-blue-600">Help You?</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Simple, fast, and trusted solutions for all your Indian university documents and global evaluations.
          </p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 group transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  {service.category}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>

              <motion.button
                onClick={() => navigate(service.path)}
                whileHover={{ gap: '1rem' }}
                className="flex items-center gap-2 text-slate-800 font-black text-sm uppercase tracking-wider group/btn"
              >
                Learn More <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA SECTION */}
        <motion.div
          className="mt-32 bg-slate-800 rounded-[3rem] p-10 lg:p-24 text-center text-white relative overflow-hidden group shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[100px]"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Not sure which service <br />
              <span className="text-blue-400">you need?</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Talk to our document experts for a free consultation and get the right guidance for your university papers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Contact Expert
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all active:scale-95">
                View FAQs
              </button>
            </div>
          </div>
        </motion.div>

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

export default Services;