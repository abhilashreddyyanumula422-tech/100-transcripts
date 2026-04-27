import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiCheckCircle, FiClock, FiFileText, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProvisionalCertificate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-8">
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
            What is a Provisional Certificate?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Provisional Certificate is an interim document issued by universities to students who have completed 
            their course but haven't yet received their original degree certificate. It serves as proof of completion 
            until the final degree is issued.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This certificate is essential for job applications, higher education admissions, and visa processing 
            while waiting for your original degree.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Service?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <FiCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Quick Processing</h3>
                <p className="text-gray-600 text-sm">Fast issuance from universities across India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiShield className="text-blue-600 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Authentic Documents</h3>
                <p className="text-gray-600 text-sm">Official certificates directly from universities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiClock className="text-purple-600 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Track Application</h3>
                <p className="text-gray-600 text-sm">Monitor your application status online</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiFileText className="text-orange-600 text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">Complete support throughout the process</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documents Required */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents Required</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600" />
              <span>All semester mark sheets</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600" />
              <span>Course completion certificate</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600" />
              <span>Government ID proof (Aadhaar, PAN, Passport)</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600" />
              <span>Passport size photographs</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600" />
              <span>University registration number</span>
            </li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Need Your Provisional Certificate?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Apply now and get your provisional certificate quickly and hassle-free.
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

export default ProvisionalCertificate;
