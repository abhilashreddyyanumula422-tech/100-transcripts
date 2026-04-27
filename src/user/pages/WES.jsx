import React, { useState } from "react";
import { Check, ArrowRight, FileText, Upload, UserPlus, Handshake, ChevronRight, Sparkles, Award, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import workflowImg from "../../assets/workflow.png";
import wesLogo from "../../assets/WES_logo.png";

const WES = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Create WES Account",
      description: "Follow our comprehensive guides to register your WES account correctly for Canada PR or other purposes.",
      icon: UserPlus,
      color: "emerald",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            href="https://100transcripts.com/wp-content/uploads/2025/02/How-to-create-WES-Account-for-%E2%80%98Canada-PR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm sm:text-base"
          >
            <Sparkles className="w-4 h-4" />
            <span>Canada PR Guide</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://100transcripts.com/wp-content/uploads/2026/01/WES-REGISTRATION-GUIDE-Version-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all text-sm sm:text-base"
          >
            <span>Registration Guide</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )
    },
    {
      id: 2,
      title: "Prepare Documents",
      description: "Ensure you have all required documents and correctly filled forms for WES evaluation.",
      icon: FileText,
      color: "blue",
      content: (
        <div className="space-y-4 mt-5">
          {[
            { label: "CMM (Consolidated Marks) or Yearly marks sheets", link: "https://100transcripts.com/cmm/" },
            { label: "Degree Certificate or PC (Provisional Certificate)", link: "https://100transcripts.com/provisional-degree-certificate-pc/" },
            { label: "WES Reference Number", isText: true },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 group"
            >
              <div className="mt-0.5 bg-blue-50 rounded-full p-1.5 flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-blue-600" />
              </div>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base leading-relaxed group-hover:underline underline-offset-2 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">{item.label}</span>
              )}
            </motion.div>
          ))}
          
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-4">
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              WES Forms
            </h4>
            <div className="space-y-2">
              <a href="https://100transcripts.com/wp-content/uploads/2025/02/WES-Academic-Records-Request-Form.pdf" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:underline">
                • Academic Records Request Form
              </a>
              <a href="https://100transcripts.com/wp-content/uploads/2025/02/How-to-Fill-the-WES-Academic-Records-Request-Form.pdf" target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-600 hover:underline">
                • How to Fill the Form (Guide)
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-2 pl-7">
            *Documentation may vary based on your requirement
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Upload Documents",
      description: "Submit your documents securely for WES verification and evaluation.",
      icon: Upload,
      color: "violet",
      content: (
        <div className="mt-6">
          <a
            href="https://100transcripts.com/upload-documents/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-violet-600 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm sm:text-base"
          >
            <Upload className="w-4 h-4" />
            Start Uploading
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround time",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Protected data handling",
      color: "blue"
    },
    {
      icon: Award,
      title: "WES Recognized",
      description: "Global standard",
      color: "amber"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          {/* Partnership Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6"
          >
            <Handshake className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-semibold">Official Partnership</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            WES Evaluation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            World Education Services – Step by Step Guide
          </motion.p>

          {/* Partner Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10 flex justify-center"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 inline-flex">
              <img
                src={wesLogo}
                alt="WES Logo"
                className="h-16 md:h-24 object-contain"
              />
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-all`}
                >
                  <Icon className={`w-4 h-4 text-${feature.color}-600`} />
                  <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT: STEPS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  onHoverStart={() => setActiveStep(step.id)}
                  onHoverEnd={() => setActiveStep(null)}
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${isActive
                    ? `border-${step.color}-400 shadow-xl scale-[1.02]`
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {/* Step Header */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        animate={{ rotate: isActive ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color === 'emerald' ? 'bg-emerald-100' :
                          step.color === 'blue' ? 'bg-blue-100' :
                            'bg-violet-100'
                          }`}
                      >
                        <Icon className={`w-7 h-7 ${step.color === 'emerald' ? 'text-emerald-600' :
                          step.color === 'blue' ? 'text-blue-600' :
                            'text-violet-600'
                          }`} />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${step.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                            step.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                              'bg-violet-100 text-violet-700'
                            }`}>
                            Step {step.id}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Content */}
                    <motion.div
                      initial={false}
                      animate={{ height: "auto" }}
                      className="overflow-hidden"
                    >
                      {step.content}
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                    className={`h-1.5 origin-left ${step.color === 'emerald' ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                      step.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                        'bg-gradient-to-r from-violet-400 to-violet-600'
                      }`}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT: WORKFLOW & INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 lg:sticky lg:top-24"
          >
            {/* Workflow Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 overflow-hidden">

              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-700 text-xs sm:text-sm font-semibold">Official Partner</span>
                </div>
              </div>

              {/* Workflow Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-4 mb-6 shadow-inner"
              >
                <img
                  src={workflowImg}
                  alt="WES - 100 Transcripts Workflow"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm"
                >
                  <div className="bg-emerald-100 p-2.5 rounded-lg flex-shrink-0">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Fastest</p>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">Verified Docs</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm"
                >
                  <div className="bg-blue-100 p-2.5 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Secure</p>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">WES Recognized</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ECA Report Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Final ECA Report</h3>
              <p className="text-blue-100 text-sm sm:text-base mb-6">View a sample WES evaluation report.</p>
              <a
                href="https://100transcripts.com/wes-final-eca-report/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                View Sample
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}
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
          className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default WES;