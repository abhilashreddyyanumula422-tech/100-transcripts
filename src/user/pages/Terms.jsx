import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using 100 Transcripts LLP services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access or use our Service."
    },
    {
      title: "2. Description of Service",
      content: "100 Transcripts LLP provides academic document procurement and verification services. We act as an authorized representative to facilitate document requests from universities and colleges in India."
    },
    {
      title: "3. User Responsibilities",
      content: "Users are responsible for providing accurate and complete information. Any delays or issues caused by incorrect data provided by the user are not the responsibility of 100 Transcripts LLP."
    },
    {
      title: "4. University & Authority Decisions",
      content: "The final decision regarding the issuance of transcripts, certificates, or verifications rests solely with the concerned educational institution. We do not guarantee university approval but ensure professional processing of your application."
    },
    {
      title: "5. Privacy & Security",
      content: "Your data is handled with the highest level of security. We only share necessary information with educational institutions as part of the document procurement process."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-black uppercase text-[10px] tracking-[0.2em]">
            Legal Information
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="text-slate-500 font-medium">Last updated: October 2024</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-12"
        >
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
              Welcome to 100 Transcripts LLP. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>

            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={i} className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                       <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-medium pl-11">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 mt-12 text-center">
            <p className="text-slate-500 text-sm font-medium italic">
              For any questions regarding these terms, please contact us at <span className="text-blue-600 not-italic font-bold">legal@100transcripts.com</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;