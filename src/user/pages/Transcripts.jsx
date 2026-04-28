import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiCheckCircle, FiClock, FiShield, FiArrowRight, FiUpload, FiSettings, FiTruck, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
      <style>{`
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transcripts / E-Transcripts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your official academic transcripts from 289+ Indian universities for education or migration abroad.
          </p>
        </motion.div>

        {/* What is Transcripts */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <FiFileText className="text-blue-600" />
            What are Transcripts?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A transcript is an official record of your academic performance, including courses taken, grades received, 
            and degrees awarded. Universities and employers abroad require transcripts to verify your educational background.
          </p>
          <p className="text-gray-600 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">HOW IT WORKS</h2>
          
          <div className="relative">
            {/* Curved Line */}
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
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
            </svg>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-lg border-2 border-blue-100 flex items-center justify-center mb-6 hover:shadow-xl transition-shadow duration-300 glass-effect">
                    <div className="text-3xl md:text-4xl text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AGENCIES & DOCUMENTS SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
          {/* LEFT SIDE - Supported Agencies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Supported Credential Evaluation Agencies
            </h2>
            <p className="text-gray-600 mb-6">
              We assist applicants preparing documents for all major credential evaluation agencies worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agencies.map((agency, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiFileText className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {agency.short}
                      </h4>
                      <p className="text-xs text-gray-500">{agency.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Documents Required */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Documents Required
            </h3>

            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="text-blue-600 text-sm" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {doc}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => navigate("/apply")}
              className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Your Transcripts?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Start your application now and let us handle the university paperwork for you.
          </p>
          <button
            onClick={() => navigate("/apply")}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition inline-flex items-center gap-2"
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
