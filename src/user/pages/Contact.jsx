import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiSend } from "react-icons/fi";
import { MessageCircle, ArrowRight, CheckCircle2, Shield } from "lucide-react";
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
    <div className="bg-slate-50 min-h-screen">

      {/* HEADER SECTION */}
      <motion.section
        className="relative pt-32 pb-20 bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60a5fa]/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[100px] -ml-20 -mb-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#e2e8f0] rounded-full text-[#3b82f6] font-bold uppercase text-[10px] tracking-widest mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#334155] tracking-tight leading-tight">
            Get in <span className="text-[#3b82f6]">Touch</span>
          </h1>
          <p className="text-[#64748b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about your transcripts? Our team is here to help you navigate your academic journey worldwide.
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(51,65,85,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-[#e2e8f0]">

          {/* LEFT INFO PANEL */}
          <div className="lg:col-span-5 bg-[#334155] p-10 md:p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#60a5fa]/5 rounded-full -ml-24 -mb-24 blur-2xl"></div>

            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight">Contact Information</h2>
              <p className="text-[#cbd5e1] text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#60a5fa] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-lg font-bold">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest mb-1">WhatsApp Us</p>
                  <p className="text-lg font-bold">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold">support@100transcripts.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg font-bold">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-10 relative z-10">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <FiMessageSquare className="text-green-400 mb-4" size={28} />
                <p className="text-sm font-medium text-[#cbd5e1] leading-relaxed italic">
                  "The most efficient transcript service I've used. Highly recommended for international students."
                </p>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-green-400">— Happy Student</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-7 p-10 md:p-16 space-y-10">
            <div>
              <h3 className="text-3xl font-extrabold text-[#334155] tracking-tight mb-2">Send us a Message</h3>
              <p className="text-[#64748b] font-medium text-lg">We're excited to hear from you!</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full p-4 rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all ${errors.name && touched.name ? 'border-red-500' : 'border-slate-50 focus:border-[#3b82f6]'} focus:bg-white`}
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-500 ml-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full p-4 rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all ${errors.email && touched.email ? 'border-red-500' : 'border-slate-50 focus:border-[#3b82f6]'} focus:bg-white`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-500 ml-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest ml-1">Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all appearance-none ${errors.subject && touched.subject ? 'border-red-500' : 'border-slate-50 focus:border-[#3b82f6]'} focus:bg-white`}
                  >
                    <option>Transcript Inquiry</option>
                    <option>Document Verification</option>
                    <option>Partner with Us</option>
                    <option>Others</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]">
                     <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
                {errors.subject && touched.subject && (
                  <p className="text-xs text-red-500 ml-1">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  placeholder="How can we help you?"
                  className={`w-full p-4 rounded-2xl bg-slate-50 border-2 outline-none font-bold transition-all resize-none ${errors.message && touched.message ? 'border-red-500' : 'border-slate-50 focus:border-[#3b82f6]'} focus:bg-white`}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-red-500 ml-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !isFormValid()}
                className="w-full bg-[#334155] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#1e293b] shadow-xl shadow-[#334155]/10 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" color="white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="px-6 pb-32">
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center border border-[#e2e8f0] shadow-sm relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#f1f5f9] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#334155]">
              Ready to Start Your <br />
              <span className="text-[#3b82f6]">Global Journey?</span>
            </h2>

            <div className="w-24 h-1.5 bg-[#3b82f6] mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-[#64748b] max-w-2xl mx-auto font-medium leading-relaxed">
              Join thousands of successful students who trusted 100 Transcripts for their academic documentation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
               <div className="flex items-center gap-2 text-[#334155] font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#3b82f6]" />
                  <span>Verified Process</span>
               </div>
               <div className="flex items-center gap-2 text-[#334155] font-bold">
                  <Shield className="w-5 h-5 text-[#60a5fa]" />
                  <span>Secure Transfer</span>
               </div>
            </div>

            <button className="bg-[#334155] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#1e293b] transition-all flex items-center gap-3 mx-auto active:scale-95 shadow-lg">
              📞 Get a Free Consultation
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}