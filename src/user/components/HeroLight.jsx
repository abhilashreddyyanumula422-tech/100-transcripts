import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const HeroLight = () => {
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60a5fa]/10 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[100px] -ml-20 -mb-20" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#ffffff]/80 backdrop-blur-md border border-[#e2e8f0] rounded-full px-4 py-1.5 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-[#64748b] text-xs font-semibold uppercase tracking-wider">Premium Credential Services</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#334155] leading-tight">
                Evaluate Your <span className="text-[#3b82f6]">International Credentials</span> with Confidence
              </h1>
              <p className="text-[#64748b] text-lg md:text-xl max-w-xl leading-relaxed">
                Streamlined processing for WES, ECE, and IEE. We handle the complexity so you can focus on your future goals abroad.
              </p>
            </motion.div>

            {/* Newsletter/Input Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-lg"
            >
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Enter your email for updates" 
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 transition-all placeholder:text-[#64748b]/50"
                />
              </div>
              <button className="w-full sm:w-auto whitespace-nowrap bg-[#334155] hover:bg-[#1e293b] text-[#ffffff] px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_12px_rgba(51,65,85,0.15)] hover:shadow-[0_6px_20px_rgba(51,65,85,0.2)] active:scale-95">
                Get Started
              </button>
            </motion.div>

            {/* Quick Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                "100% Secure Process",
                "Official Verification",
                "Priority Support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                  <span className="text-[#334155] font-medium text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 bg-[#ffffff]/60 backdrop-blur-xl border border-[#ffffff] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(51,65,85,0.1)]">
              {/* Glass Card content - simplified flow diagram */}
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-2 w-16 bg-[#e2e8f0] rounded-full" />
                  <div className="h-8 w-8 bg-[#3b82f6]/10 rounded-full flex items-center justify-center">
                    <div className="h-3 w-3 bg-[#3b82f6] rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-[#ffffff] rounded-2xl border border-[#e2e8f0] shadow-sm">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item === 1 ? 'bg-[#3b82f6]' : 'bg-[#e2e8f0]'}`}>
                        <div className={`w-4 h-4 rounded-full border-2 ${item === 1 ? 'border-white' : 'border-[#64748b]'}`} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className={`h-2.5 rounded-full ${item === 1 ? 'bg-[#334155] w-3/4' : 'bg-[#e2e8f0] w-1/2'}`} />
                        <div className="h-2 bg-[#cbd5e1] w-1/4 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating accents */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-[#334155] text-white p-4 rounded-2xl shadow-xl"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Background blob accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#60a5fa]/20 to-transparent rounded-full blur-[80px] -z-10" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroLight;
