import React, { useState } from "react";
import {
  Check,
  Download,
  Upload,
  FileText,
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Award,
  Send,
  FileCheck,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import eceLogo from "../../assets/ECE_Logo_Color.png";
import eceBanner from "../../assets/ece.png";
import eceFlow from "../../assets/eceflow.png";

const ECE = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Create ECE Account",
      description: "Click below to download the complete account creation guide in PDF format",
      icon: GraduationCap,
      color: "blue",
      action: {
        label: "Download PDF",
        icon: Download,
        link: "https://100transcripts.com/wp-content/uploads/2024/12/ECE-account-creation-in-partnership-with-100-Transcripts-06-12-2024.pdf"
      }
    },
    {
      id: 2,
      title: "Prepare Documents",
      icon: FileText,
      color: "orange",
      documents: [
        {
          label: "CMM (Consolidated Marks)",
          sublabel: "(or) Yearly marks sheets",
          link: "https://100transcripts.com/cmm/"
        },
        {
          label: "Degree Certificate",
          sublabel: "(or) PC (Provisional Certificate)",
          link: "https://100transcripts.com/provisional-degree-certificate-pc/"
        },
        {
          label: "Internship Certificate",
          sublabel: "(for Pharmacy & Medical students)",
          isText: true
        },
        {
          label: "ECE order number",
          isText: true
        },
      ],
      note: "*Note: Documentation may vary based on your requirement."
    },
    {
      id: 3,
      title: "Upload Documents",
      icon: Upload,
      color: "blue",
      action: {
        label: "Start Uploading",
        icon: ArrowRight,
        link: "https://100transcripts.com/upload-documents/"
      }
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Applicant's Inquiry",
      icon: Users,
      color: "from-blue-400 to-blue-600"
    },
    {
      step: 2,
      title: "Documents finalization and Upload",
      icon: FileText,
      color: "from-orange-400 to-orange-600"
    },
    {
      step: 3,
      title: "100 Transcripts Review and Verification",
      icon: CheckCircle2,
      color: "from-green-400 to-green-600"
    },
    {
      step: 4,
      title: "Transfer of Approved Documents to ECE",
      icon: Send,
      color: "from-purple-400 to-purple-600"
    },
    {
      step: 5,
      title: "ECE Evaluation",
      icon: FileCheck,
      color: "from-pink-400 to-pink-600"
    },
    {
      step: 6,
      title: "ECE Report Delivery to Universities & Applicants",
      icon: Award,
      color: "from-red-400 to-red-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

      {/* PARTNERSHIP HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#004a61] pt-24 pb-12 md:pb-16 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content (70%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-[70%] space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2"
            >
              <Building2 className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 text-sm font-semibold uppercase tracking-wider">Official Partnership</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              100 Transcripts is partnered with{" "}
              <span className="text-blue-300">Educational Credential Evaluators (ECE)</span>
            </h2>
            
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
              Get your international credentials evaluated quickly and securely through our official partnership. Enjoy priority processing and expert guidance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Priority Processing</span>
               </div>
               <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Official Verification</span>
               </div>
            </div>
          </motion.div>

          {/* Right Image (30%) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-[30%] self-stretch flex items-center justify-center"
          >
            <div className="relative group w-full h-full">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-500" />
              
              <img 
                src={eceBanner} 
                alt="ECE Evaluation Banner" 
                className="relative z-10 w-full h-full object-contain rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16"
        >
          <span className="text-blue-600">ECE Evaluation</span>
          <span className="block text-gray-800 text-xl md:text-2xl font-normal mt-2">Step by Step Guide</span>
        </motion.h1>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT COLUMN - Steps */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stepVariants}
                  onHoverStart={() => setActiveStep(step.id)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="relative"
                >
                  {/* Vertical Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[2.75rem] top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent hidden md:block" />
                  )}

                  {/* Step Card */}
                  <div className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${isActive
                    ? 'border-blue-400 shadow-xl scale-[1.02]'
                    : 'border-gray-200 hover:border-blue-200'
                    }`}>

                    <div className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Step Number Badge */}
                        <motion.div
                          animate={{
                            rotate: isActive ? 360 : 0,
                            scale: isActive ? 1.1 : 1
                          }}
                          transition={{ duration: 0.5 }}
                          className={`relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg ${step.id === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                            step.id === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                            'bg-gradient-to-br from-blue-500 to-indigo-600'
                            }`}
                        >
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity" />
                          <span className="text-xs font-bold text-white/80 mb-1">STAGE</span>
                          <span className="text-2xl font-bold text-white">{step.id}</span>
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className={`w-6 h-6 ${step.color === 'blue' ? 'text-blue-600' : 'text-orange-600'
                              }`} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      {step.documents ? (
                        <div className="space-y-3 pl-0 md:pl-24">
                          {step.documents.map((doc, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start gap-3 group"
                            >
                              <div className="mt-1 bg-blue-100 rounded-full p-1.5 flex-shrink-0">
                                <Check className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                {doc.link ? (
                                  <a
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base transition-colors group-hover:underline underline-offset-2"
                                  >
                                    {doc.label}
                                  </a>
                                ) : (
                                  <span className="text-gray-800 font-medium text-sm md:text-base">{doc.label}</span>
                                )}
                                {doc.sublabel && (
                                  <span className="text-gray-600 text-sm md:text-base"> {doc.sublabel}</span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                          {step.note && (
                            <p className="text-xs text-gray-500 italic mt-4">{step.note}</p>
                          )}
                        </div>
                      ) : step.action && (
                        <div className="pl-0 md:pl-24 mt-4">
                          <a
                            href={step.action.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm md:text-base ${step.color === 'blue'
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                              : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                              }`}
                          >
                            {React.createElement(step.action.icon, { className: "w-4 h-4" })}
                            {step.action.label}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className={`h-2 origin-left ${step.color === 'blue'
                        ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                        : 'bg-gradient-to-r from-orange-400 to-orange-600'
                        }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN - Workflow & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-6"
          >
            {/* ECE - 100 Transcripts Workflow Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
               <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Official Preferred Partner</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    ECE - <span className="text-blue-600">100</span> Transcripts
                    <span className="block text-orange-500 text-lg mt-1">Workflow</span>
                  </h3>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6 shadow-inner flex justify-center">
                    <img 
                      src={eceFlow} 
                      alt="ECE Workflow" 
                      className="max-w-[300px] h-auto rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-xs font-bold text-green-700">Verified Docs</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span className="text-xs font-bold text-blue-700">100% Safe</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* ECA Report Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                  <Award className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-2">ECE final ECA Report sample</h3>
                  <p className="text-blue-100 text-sm">Download a sample evaluation report</p>
                </div>

                <a
                  href="#"
                  className="w-full bg-white text-blue-600 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-lg hover:scale-105 text-base"
                >
                  <FileText className="w-5 h-5" />
                  ECA Report
                  <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white text-gray-800 px-4 py-2.5 rounded-full shadow-xl border border-gray-200 text-sm font-semibold hidden sm:flex items-center gap-2"
        >
          <span>Need help?</span>
          <span className="text-lg">👋</span>
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://api.whatsapp.com/send/?phone=919941991402&text=Hi%2C+100+TRANSCRIPTS+team&type=phone_number&app_absent=0"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ECE;