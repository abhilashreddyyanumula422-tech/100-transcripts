import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiGlobe, FiLock, FiUserCheck, FiBookOpen, FiShield, FiArrowRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const services = [
    {
      title: "University Transcripts",
      desc: "For your education or life abroad. We get your official records from 289+ Indian universities.",
      icon: <FiFileText />,
      category: "Academic Records"
    },
    {
      title: "WES & IEE Help",
      desc: "Special help for WES, IEE, and ECE evaluations. We make sure your papers are accepted safely.",
      icon: <FiGlobe />,
      category: "Global Migration"
    },
    {
      title: "Original Degree (OD)",
      desc: "Lost your degree or need a new copy? We handle the university paperwork to get it for you.",
      icon: <FiLock />,
      category: "Certificates"
    },
    {
      title: "Verification Services",
      desc: "Checking your degrees for job applications or background screening companies.",
      icon: <FiUserCheck />,
      category: "Verifications"
    },
    {
      title: "English Proof (MOI)",
      desc: "A letter proving you studied in English. Needed for most universities in the UK and Europe.",
      icon: <FiBookOpen />,
      category: "Academic Records"
    },
    {
      title: "Provisional Certificate",
      desc: "Interim certificates for those who haven't received their final degree yet.",
      icon: <FiShield />,
      category: "Certificates"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 sm:pt-28">

      {/* HEADER SECTION */}
      <motion.section
        className="relative overflow-hidden bg-[#2f4a6d] py-12 sm:py-16 md:py-24 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#60a5fa] rounded-full blur-[60px] sm:blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#3b82f6] rounded-full blur-[50px] sm:blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-300/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-[#60a5fa] font-black uppercase text-[8px] sm:text-[10px] tracking-widest mb-2 sm:mb-4">
            Our Services
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-black text-white tracking-tighter leading-none">
            How Can We <br /><span className="text-[#60a5fa]">Help You?</span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            "Simple, fast, and trusted solutions for all your Indian university documents."
          </p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-24">
        
        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-xl shadow-blue-900/5 border border-slate-50 group transition-all"
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6 md:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-50 text-[#3b82f6] rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl group-hover:bg-[#2f4a6d] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-[#60a5fa] uppercase tracking-widest bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#2f4a6d] tracking-tight mb-2 sm:mb-3 md:mb-4 group-hover:text-[#3b82f6] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#2f4a6d] opacity-60 font-bold leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
                {service.desc}
              </p>
              
              <motion.button 
                whileHover={{ gap: '1rem' }}
                className="flex items-center gap-2 text-[#2f4a6d] font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-wider group/btn min-h-[44px]"
              >
                Learn More <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" strokeWidth={3} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA SECTION */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-32 bg-[#2f4a6d] rounded-[30px] sm:rounded-[40px] md:rounded-[60px] p-6 sm:p-8 md:p-10 lg:p-20 text-center text-white relative overflow-hidden group shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#60a5fa] opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-[60px] sm:blur-[100px]"></div>
          
          <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-none">
              Not sure which service <br />
              <span className="text-[#60a5fa]">you need?</span>
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-xl font-bold max-w-2xl mx-auto leading-relaxed opacity-80">
              Talk to our document experts for a free consultation and get the right guidance for your university papers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-[#60a5fa] text-[#2f4a6d] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-xl md:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:bg-white transition-all active:scale-95 shadow-xl shadow-blue-400/20 min-h-[44px]">
                Contact Expert
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-xl md:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:bg-white/20 transition-all active:scale-95 min-h-[44px]">
                View FAQs
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;