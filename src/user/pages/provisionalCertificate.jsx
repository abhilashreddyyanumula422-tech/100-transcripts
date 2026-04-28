import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiCheckCircle, FiClock, FiFileText, FiArrowRight, FiUpload, FiSettings, FiTruck, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import certificateImg from "../../assets/Provisional-Certificate-PC-1.png";
import cesLogo from "../../assets/CES.png";
import eceLogo from "../../assets/ECE.png";
import enicLogo from "../../assets/ENIC.png";
import icasLogo from "../../assets/ICAS.png";
import ieeLogo from "../../assets/IEE-1.png";
import iqasLogo from "../../assets/IQAS.png";
import nasabLogo from "../../assets/NASAB.png";
import pebcLogo from "../../assets/PEBC.png";
import spantraLogo from "../../assets/Spantra.png";
import wesLogo from "../../assets/WES.png"; 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProvisionalCertificate = () => {
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
    { name: "World Education Services (WES)", short: "WES", logo: wesLogo },
    { name: "Educational Credential Evaluators (ECE)", short: "ECE", logo: eceLogo },
    { name: "International Education Evaluations (IEE)", short: "IEE", logo: ieeLogo },
    { name: "SpanTran", short: "SpanTran", logo: spantraLogo },
    { name: "IQAS Canada", short: "IQAS", logo: iqasLogo },
    { name: "UK ENIC / NARIC", short: "NARIC", logo: enicLogo },
    { name: "CES", short: "CES", logo: cesLogo },
    { name: "ICAS", short: "ICAS", logo: icasLogo },
    { name: "NASAB", short: "NASAB", logo: nasabLogo },
    { name: "PEBC", short: "PEBC", logo: pebcLogo },
  ];

  const documents = [
    "All semester mark sheets",
    "Course completion certificate",
    "Government ID proof (Aadhaar, PAN, Passport)",
    "Passport size photographs",
    "University registration number",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
      <style>{`
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.8);
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .scroll-content {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
        .scroll-content:hover {
          animation-play-state: paused;
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
            Provisional Certificate (PC)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your provisional certificate for those who haven't received their final degree yet.
          </p>
        </motion.div>

        {/* What is PC */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <FiShield className="text-blue-600" />
            What is Provisional Certificate (PC)?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A Provisional Certificate (PC) is a temporary document issued by an educational institution to students who have successfully completed their course or program but are waiting for the final degree or diploma certificate. It serves as proof that the student has met all the requirements for graduation, such as passing all exams and fulfilling other academic obligations.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Points about the Provisional Certificate:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm">It is typically valid for a limited period until the official degree is issued.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm">It can be used for various purposes, such as applying for jobs, higher studies, or professional registrations.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 text-sm">Once the final degree certificate is issued, the provisional certificate is no longer valid.</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => navigate("/apply")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
          >
            Apply Now
            <FiArrowRight />
          </button>
        </motion.div>

        {/* Sample Provisional Certificate Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sample Provisional Certificate</h2>
          <div className="flex justify-center">
            <img 
              src={certificateImg} 
              alt="Sample Provisional Certificate" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </motion.div>
        

        {/* AGENCIES SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Supported Credential Evaluation Agencies
          </h2>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
            We assist applicants preparing documents for all major credential evaluation agencies worldwide.
          </p>

          <div className="scroll-container py-4">
            <div className="scroll-content">
              {[...agencies, ...agencies].map((agency, index) => (
                <motion.div
                  key={`${agency.short}-${index}`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center mx-3 flex-shrink-0"
                  style={{ width: '120px' }}
                >
                  <img
                    src={agency.logo}
                    alt={agency.short}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <h4 className="font-semibold text-gray-900 text-xs text-center">
                    {agency.short}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        
        
      </div>
    </div>
  );
};

export default ProvisionalCertificate;
