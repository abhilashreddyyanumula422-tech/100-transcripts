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
    <div className="bg-white min-h-screen">

      {/* HEADER SECTION */}
      <motion.section
        className="relative pt-32 pb-20 bg-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black tracking-tight leading-tight">
            Get in <span className="text-gray-900">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about your transcripts? Our team is here to help you navigate your academic journey worldwide.
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(10,25,41,0.15)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gray-200">

          {/* LEFT INFO PANEL */}
          <div className="lg:col-span-5 bg-gray-50 p-10 md:p-16 text-black space-y-12 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-black">Contact Information</h2>
              <p className="text-gray-600 text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-lg font-bold text-black">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">WhatsApp Us</p>
                  <p className="text-lg font-bold text-black">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-black">support@100transcripts.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg font-bold text-black">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-10 relative z-10">
              <div className="p-8 bg-white rounded-3xl border border-gray-200">
                <FiMessageSquare className="text-gray-700 mb-4" size={28} />
                <p className="text-sm font-medium text-gray-600 leading-relaxed italic">
                  "The most efficient transcript service I've used. Highly recommended for international students."
                </p>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-700">— Happy Student</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-7 p-10 md:p-16 space-y-10">
            <div>
              <h3 className="text-3xl font-extrabold text-black tracking-tight mb-2">Send us a Message</h3>
              <p className="text-gray-600 font-medium text-lg">We're excited to hear from you!</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full p-4 rounded-2xl bg-gray-50 border-2 outline-none font-bold transition-all ${errors.name && touched.name ? 'border-red-500' : 'border-gray-200 focus:border-black'} focus:bg-white`}
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-500 ml-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full p-4 rounded-2xl bg-gray-50 border-2 outline-none font-bold transition-all ${errors.email && touched.email ? 'border-red-500' : 'border-gray-200 focus:border-black'} focus:bg-white`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-500 ml-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 rounded-2xl bg-gray-50 border-2 outline-none font-bold transition-all appearance-none ${errors.subject && touched.subject ? 'border-red-500' : 'border-gray-200 focus:border-black'} focus:bg-white`}
                  >
                    <option>Transcript Inquiry</option>
                    <option>Document Verification</option>
                    <option>Partner with Us</option>
                    <option>Others</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                     <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
                {errors.subject && touched.subject && (
                  <p className="text-xs text-red-500 ml-1">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  placeholder="How can we help you?"
                  className={`w-full p-4 rounded-2xl bg-gray-50 border-2 outline-none font-bold transition-all resize-none ${errors.message && touched.message ? 'border-red-500' : 'border-gray-200 focus:border-black'} focus:bg-white`}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-red-500 ml-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !isFormValid()}
                className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
          className="max-w-6xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center border border-gray-200 shadow-lg relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-black">
              Ready to Start Your <br />
              <span className="text-gray-900">Global Journey?</span>
            </h2>

            <div className="w-24 h-1.5 bg-black mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Join thousands of successful students who trusted 100 Transcripts for their academic documentation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
               <div className="flex items-center gap-2 text-black font-bold">
                  <CheckCircle2 className="w-5 h-5 text-gray-700" />
                  <span>Verified Process</span>
               </div>
               <div className="flex items-center gap-2 text-black font-bold">
                  <Shield className="w-5 h-5 text-gray-700" />
                  <span>Secure Transfer</span>
               </div>
            </div>

            <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto active:scale-95 shadow-lg">
              📞 Get a Free Consultation
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}