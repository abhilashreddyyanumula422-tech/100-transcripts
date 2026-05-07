import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiCheckCircle, FiArrowRight, FiUpload, FiSettings, FiTruck, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/100logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Transcripts = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FiUpload />,
      title: "Uploads",
      description: "Students upload documents to collaboration page.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Reviews",
      description: "Documents are reviewed and verified.",
    },
    {
      icon: <FiSettings />,
      title: "Processes",
      description: "College processes and issues the documents back.",
    },
    {
      icon: <FiTruck />,
      title: "Delivers",
      description: "Final documents delivered to students.",
    },
  ];

  const agencies = [
    { name: "World Education Services (WES)", short: "WES" },
    { name: "Educational Credential Evaluators (ECE)", short: "ECE" },
    { name: "International Education Evaluations (IEE)", short: "IEE" },
    { name: "SpanTran", short: "SpanTran" },
    { name: "IQAS Canada", short: "IQAS" },
    { name: "UK ENIC / NARIC", short: "NARIC" },
  ];

  const documents = [
    "Consolidated Marks Memo (CMM) or semester/year-wise marksheets",
    "Degree Certificate or Provisional Certificate",
    "Internship Certificate (for Pharma & Medical)",
    "Reference Number (WES, ECE, IEE, SpanTran etc.)",
    "Academic Records Request Forms",
    "Valid ID Proof if required",
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 md:px-8">
      <style>{`
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Image below text for mobile, large size */}
        <main className="pt-16 pb-8 md:pt-24 md:pb-12 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  /* Combined fixes: flex-1 for sharing space, text-center for horizontal centering on all screens, mx-auto just in case for older layout support. */
  className="flex-1 text-center mx-auto"
>
  <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-4">
    Transcripts / E-Transcripts
  </h1>
  {/* Subtext size increased from text-base to text-lg, and text-lg to text-xl for desktop. mx-auto ensures the text block itself centers. */}
  <p className="text-lg md:text-xl text-purple-600 max-w-4xl leading-relaxed mx-auto">
    Get your official academic transcripts from 289+ Indian universities for education or migration abroad.
  </p>
</motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-auto flex justify-center"
            >
              <img
                src={logo}
                alt="100 Transcripts Logo"
                className="w-full max-w-[800px] md:max-w-sm h-auto"
              />
            </motion.div>
          </div>
        </main>

        {/* What is Transcripts */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
            <FiFileText className="text-purple-600" />
            What are Transcripts?
          </h2>
          <p className="text-sm md:text-base text-purple-600 leading-relaxed mb-4">
            A transcript is an official record of your academic performance, including courses taken, grades received, 
            and degrees awarded. Universities and employers abroad require transcripts to verify your educational background.
          </p>
          <p className="text-sm md:text-base text-purple-600 leading-relaxed">
            We help you obtain both physical transcripts and e-transcripts (digital copies) from universities across India.
          </p>
        </motion.div>

        {/* HOW IT WORKS SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 text-center">HOW IT WORKS</h2>
          
          <div className="relative">
            <svg
              className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden md:block"
              viewBox="0 0 1200 100"
              fill="none"
            >
              <path
                d="M0,50 Q300,0 600,50 T1200,50"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 8"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-md border-2 border-purple-200 flex items-center justify-center mb-4 hover:shadow-xl transition-shadow duration-300 glass-effect">
                    <div className="text-2xl md:text-4xl text-purple-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-purple-900 mb-1 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[10px] md:text-sm text-purple-600 text-center max-w-xs px-1">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AGENCIES & DOCUMENTS SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* LEFT SIDE - Supported Agencies Full Width on Mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-3">
              Supported Evaluation Agencies
            </h2>
            <p className="text-sm md:text-base text-purple-600 mb-6">
              We assist applicants for all major credential evaluation agencies worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agencies.map((agency, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-5 shadow-sm border border-purple-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiFileText className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-900 text-sm md:text-base">
                        {agency.short}
                      </h4>
                      <p className="text-xs text-purple-500">{agency.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Documents Required */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-purple-200"
          >
            <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-6">
              Documents Required
            </h3>

            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="text-purple-600 text-xs md:text-sm" />
                  </div>
                  <span className="text-purple-700 text-xs md:text-sm leading-relaxed">
                    {doc}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/apply")}
              className="mt-8 w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-500/25"
            >
              Get Started
            </button>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to Get Your Transcripts?</h2>
          <p className="text-purple-200 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Start your application now and let us handle the university paperwork for you.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:bg-purple-50 transition inline-flex items-center gap-2 mx-auto shadow-xl"
          >
            Apply Now
            <FiArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Transcripts;