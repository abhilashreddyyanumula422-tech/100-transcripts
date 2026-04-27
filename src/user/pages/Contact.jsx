import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiSend } from "react-icons/fi";
import { MessageCircle } from "lucide-react";
import { useToast } from "../../contexts/ToastContext";
import { getErrorMessage, validateForm } from "../../utils/validation";
import LoadingSpinner from "../../components/LoadingSpinner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Transcript Inquiry",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const { success, error } = useToast();

  const validationRules = {
    name: { required: true, label: 'Full Name', minLength: 2 },
    email: { required: true, email: true, label: 'Email Address' },
    subject: { required: true, label: 'Subject' },
    message: { required: true, minLength: 10, label: 'Message' },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation on change
    if (touched[name]) {
      const fieldError = getErrorMessage(
        validationRules[name].label,
        value,
        validationRules[name]
      );
      setErrors({ ...errors, [name]: fieldError });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    const fieldError = getErrorMessage(
      validationRules[name].label,
      value,
      validationRules[name]
    );
    setErrors({ ...errors, [name]: fieldError });
  };

  const isFormValid = () => {
    const { errors: validationErrors, isValid } = validateForm(formData, validationRules);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const { errors: validationErrors, isValid } = validateForm(formData, validationRules);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!isValid) {
      error('Please fix the errors before submitting');
      return;
    }

    setLoading(true);

    try {
      const API_BASE = `http://192.168.1.43:8000`;
      const res = await fetch(`${API_BASE}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "Transcript Inquiry",
          message: ""
        });
        setErrors({});
        setTouched({});
      } else {
        error(data.error || "Failed to send message");
      }
    } catch (err) {
      error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-28">

      {/* HEADER SECTION */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-[#eff0f1] to-[#f2f2f4] py-12 sm:py-16 md:py-20 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#60a5fa] rounded-full blur-[60px] sm:blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#3b82f6] rounded-full blur-[50px] sm:blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-black tracking-tighter">
            Get in <span className="text-[#60a5fa]">Touch</span>
          </h1>
          <p className="text-black-300 text-sm sm:text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            Have questions about your transcripts? Our team is here to help you navigate your academic journey worldwide.
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTACT SECTION */}
      <motion.section
        className="px-4 sm:px-6 md:px-10 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 pb-10 sm:pb-12 md:pb-20 relative z-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl shadow-blue-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-slate-100">

          {/* LEFT INFO PANEL */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#a2bbf1] to-[#1d4ed8] p-6 sm:p-8 md:p-16 text-white space-y-6 sm:space-y-8 md:space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">Contact Information</h2>
              <p className="text-blue-100/70 font-medium text-xs sm:text-sm md:text-base">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <FiPhone size={16} sm:size={20} />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Call Us</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-black">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={16} sm:size={20} />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">WhatsApp Us</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-black">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <FiMail size={16} sm:size={20} />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Email Us</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-black">support@100transcripts.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <FiMapPin size={16} sm:size={20} />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Visit Us</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 md:pt-10">
              <div className="p-4 sm:p-5 md:p-6 bg-white/5 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-sm">
                <FiMessageSquare className="text-green-400 mb-2 sm:mb-3 md:mb-4" size={20} sm:size={24} md:size={28} />
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-blue-100 leading-relaxed italic">
                  "The most efficient transcript service I've used. Highly recommended for international students."
                </p>
                <p className="mt-2 sm:mt-3 md:mt-4 text-[8px] sm:text-[9px] md:text-xs font-black uppercase tracking-widest text-green-400">— Happy Student</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-3 p-6 sm:p-8 md:p-16 space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Send us a Message</h3>
              <p className="text-slate-500 font-bold text-xs sm:text-sm md:text-base">We're excited to hear from you!</p>
            </div>

            <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-xl md:rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all text-sm sm:text-base ${errors.name && touched.name ? 'border-red-500 focus:border-red-500' : 'border-slate-50 focus:border-[#2563eb]'} focus:bg-white`}
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-500 ml-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-xl md:rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all text-sm sm:text-base ${errors.email && touched.email ? 'border-red-500 focus:border-red-500' : 'border-slate-50 focus:border-[#2563eb]'} focus:bg-white`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-500 ml-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-xl md:rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all appearance-none text-sm sm:text-base ${errors.subject && touched.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-50 focus:border-[#2f4a6d]'} focus:bg-white`}
                >
                  <option>Transcript Inquiry</option>
                  <option>Document Verification</option>
                  <option>Partner with Us</option>
                  <option>Others</option>
                </select>
                {errors.subject && touched.subject && (
                  <p className="text-xs text-red-500 ml-1">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="4"
                  placeholder="How can we help you?"
                  className={`w-full p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-xl md:rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all resize-none text-sm sm:text-base ${errors.message && touched.message ? 'border-red-500 focus:border-red-500' : 'border-slate-50 focus:border-[#2563eb]'} focus:bg-white`}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-red-500 ml-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !isFormValid()}
                className="w-full bg-[#2f4a6d] text-white py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-xl md:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:bg-slate-900 shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2f4a6d] min-h-[44px]"
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" color="white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={16} sm:size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      <section className="px-4 sm:px-6 pb-12 sm:pb-16 md:pb-32">
        <motion.div
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#2f4a6d] to-[#1e324b] text-white text-center p-6 sm:p-8 md:p-10 lg:p-20 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#60a5fa] opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-[60px] sm:blur-[100px]"></div>

          <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              Ready to Start Your <br />
              <span className="text-[#60a5fa]">Global Journey?</span>
            </h2>

            <div className="w-12 sm:w-16 md:w-24 h-0.5 sm:h-1 md:h-1.5 bg-[#60a5fa] mx-auto rounded-full"></div>

            <p className="text-sm sm:text-base md:text-xl text-blue-100 max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">
              Join thousands of successful students who trusted 100 Transcripts for their academic documentation.
            </p>

            <button className="bg-white text-[#2f4a6d] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-xl md:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:bg-[#60a5fa] hover:text-white hover:shadow-[0_20px_40px_rgba(147,197,253,0.3)] transition-all flex items-center gap-3 mx-auto active:scale-95 min-h-[44px]">
              📞 Get a Free Consultation
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

/* Mobile Responsiveness Styles */
const mobileStyles = `
@media (max-width: 768px) {
  .motion-section {
    padding: 2rem 1rem !important;
  }
  
  .max-w-6xl {
    max-width: 100% !important;
    margin: 0 1rem !important;
  }
  
  .grid-cols-5 {
    grid-template-columns: 1fr !important;
  }
  
  .p-8, .p-16 {
    padding: 1.5rem !important;
  }
  
  .text-3xl, .text-4xl, .text-5xl, .text-6xl {
    font-size: 2rem !important;
  }
  
  .text-2xl {
    font-size: 1.5rem !important;
  }
  
  .text-lg {
    font-size: 1rem !important;
  }
  
  .gap-8, .gap-12 {
    gap: 1rem !important;
  }
  
  .w-12, .w-14 {
    width: 3rem !important;
    height: 3rem !important;
  }
  
  .space-y-6, .space-y-8 {
    gap: 1rem !important;
  }
}

@media (max-width: 480px) {
  .motion-section {
    padding: 1rem 0.5rem !important;
  }
  
  .p-8, .p-16 {
    padding: 1rem !important;
  }
  
  .text-3xl, .text-4xl, .text-5xl, .text-6xl {
    font-size: 1.5rem !important;
  }
  
  .text-2xl {
    font-size: 1.25rem !important;
  }
  
  .space-y-5, .space-y-6 {
    gap: 0.75rem !important;
  }
}
`;

// Inject mobile styles into the document
if (typeof window !== 'undefined') {
  const styleId = 'contact-mobile-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = mobileStyles;
    document.head.appendChild(style);
  }
}