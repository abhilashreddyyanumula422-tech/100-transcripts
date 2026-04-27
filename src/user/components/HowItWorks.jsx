import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
import uploadLogo from "../../assets/upload_logo.png";
import reviewLogo from "../../assets/review_logo.png";
import processingLogo from "../../assets/processing_logo.png";
import deliveryLogo from "../../assets/delivery_logo.png";
 
// ✅ RIGHT SIDE BIG IMAGES
import uploadImg from "../../assets/uploadimg.png";
import reviewImg from "../../assets/reviewimg.png";
import processImg from "../../assets/processingimg.jpg";
import deliveryImg from "../../assets/deliveryimg.png";
 
const steps = [
  {
    title: "Upload Documents",
    text: "Students can easily upload mark memos, transcripts, and certificates securely through our platform.",
    image: uploadLogo,
    rightImage: uploadImg,
  },
  {
    title: "Review & Verification",
    text: "Our expert team carefully reviews all documents to ensure accuracy and authenticity.",
    image: reviewLogo,
    rightImage: reviewImg,
  },
  {
    title: "Processing",
    text: "We coordinate with universities and authorities to process your documents efficiently.",
    image: processingLogo,
    rightImage: processImg,
  },
  {
    title: "Delivery",
    text: "Final verified documents are delivered safely to your doorstep or digitally.",
    image: deliveryLogo,
    rightImage: deliveryImg,
  },
];
 
const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);
  
  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
  };
  
  const stopAuto = () => {
    clearInterval(intervalRef.current);
  };
 
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
 
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-8 sm:w-14 bg-blue-600" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How It Works
            </p>
            <span className="h-[2px] w-8 sm:w-14 bg-blue-600" />
          </div>
 
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2f4a6d] leading-tight max-w-4xl mx-auto">
            Simple Process for Document Services
          </h2>
 
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            Follow a smooth and guided process to complete your document requests without hassle.
            Our team ensures quick processing, verification, and safe delivery at every step.
          </p>
        </motion.div>
 
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
 
          {/* LEFT SIDE - STEPPER */}
          <div className="lg:col-span-5 relative flex flex-col gap-6 sm:gap-8">
            <div className="absolute left-[39px] sm:left-[47px] top-10 bottom-10 w-[2px] bg-slate-200 hidden sm:block" />
        
            {steps.map((step, index) => (
              <motion.div
                key={index}
                onClick={() => {
                  stopAuto();
                  setActiveStep(index);
                }}
                onMouseEnter={() => {
                  stopAuto();
                  setActiveStep(index);
                }}
                onMouseLeave={() => startAuto()}
                whileHover={{ x: 10 }}
                animate={{
                  scale: activeStep === index ? 1.02 : 1,
                }}
                className={`relative z-10 flex items-center gap-6 p-6 sm:p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border-2 ${
                  activeStep === index
                    ? "bg-white border-blue-200 shadow-2xl shadow-blue-500/10"
                    : "bg-white/40 border-transparent hover:bg-white/60"
                }`}
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeStep === index
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 rotate-3"
                      : "bg-white text-blue-600 border border-slate-100"
                  }`}
                >
                  <img 
                    src={step.image} 
                    className={`w-10 h-10 transition-all ${activeStep === index ? "brightness-0 invert" : ""}`} 
                    alt={step.title}
                  />
                </div>

                <div className="flex-1">
                  <div className={`text-xs font-black uppercase tracking-widest mb-1 ${activeStep === index ? "text-blue-600" : "text-slate-400"}`}>
                    Step {index + 1}
                  </div>
                  <h4 className={`text-lg sm:text-xl font-black ${activeStep === index ? "text-[#2f4a6d]" : "text-slate-500"}`}>
                    {step.title}
                  </h4>
                </div>
                
                {activeStep === index && (
                  <motion.div 
                    layoutId="activePointer"
                    className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rotate-45 border-r-2 border-t-2 border-blue-200"
                  />
                )}
              </motion.div>
            ))}
          </div>
 
          {/* RIGHT SIDE - CONTENT */}
          <div className="lg:col-span-7 sticky top-32">
            <div className="bg-white p-8 sm:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-slate-100 min-h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="text-center w-full"
                >
                  <div className="relative mb-10 group">
                    <div className="absolute inset-0 bg-blue-400/10 blur-[80px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000" />
                    <motion.img
                      src={steps[activeStep].rightImage}
                      className="relative w-full h-[250px] sm:h-[350px] object-contain mx-auto"
                      alt={steps[activeStep].title}
                    />
                  </div>
 
                  <h3 className="text-3xl sm:text-4xl font-black mb-6 text-[#2f4a6d] tracking-tight">
                    {steps[activeStep].title}
                  </h3>
 
                  <p className="text-slate-600 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-medium">
                    {steps[activeStep].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};
 
export default HowItWorks;