import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiSend } from "react-icons/fi";
import { MessageCircle } from "lucide-react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit working

    setLoading(true);

    try {
      const API_BASE = `http://${window.location.hostname}:8000`;
      const res = await fetch(`${API_BASE}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "Transcript Inquiry",
          message: ""
        });
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (err) {
      // Error handled
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white min-h-screen pt-28">

      {/* HEADER SECTION */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-[#eff0f1] to-[#f2f2f4] py-16 md:py-20 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#60a5fa] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#3b82f6] rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter">
            Get in <span className="text-[#60a5fa]">Touch</span>
          </h1>
          <p className="text-black-300 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            Have questions about your transcripts? Our team is here to help you navigate your academic journey worldwide.
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTACT SECTION */}
      <motion.section
        className="px-4 md:px-10 -mt-12 md:-mt-16 pb-12 md:pb-20 relative z-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto bg-white rounded-[30px] md:rounded-[40px] shadow-2xl shadow-blue-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-slate-100">

          {/* LEFT INFO PANEL */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#a2bbf1] to-[#1d4ed8] p-8 md:p-16 text-white space-y-8 md:space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32"></div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">Contact Information</h2>
              <p className="text-blue-100/70 font-medium text-sm md:text-base">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Call Us</p>
                  <p className="text-base md:text-lg font-bold text-black">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">WhatsApp Us</p>
                  <p className="text-base md:text-lg font-bold text-black">+91 99419 91402</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Email Us</p>
                  <p className="text-base md:text-lg font-bold text-black">support@100transcripts.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-black text-blue-200/50 uppercase tracking-widest">Visit Us</p>
                  <p className="text-base md:text-lg font-bold text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-10">
              <div className="p-5 md:p-6 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-sm">
                <FiMessageSquare className="text-green-400 mb-3 md:mb-4" size={28} />
                <p className="text-xs md:text-sm font-medium text-blue-100 leading-relaxed italic">
                  "The most efficient transcript service I've used. Highly recommended for international students."
                </p>
                <p className="mt-3 md:mt-4 text-[9px] md:text-xs font-black uppercase tracking-widest text-green-400">— Happy Student</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-3 p-8 md:p-16 space-y-8 md:space-y-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Send us a Message</h3>
              <p className="text-slate-500 font-bold text-sm md:text-base">We're excited to hear from you!</p>
            </div>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-[#2563eb] focus:bg-white outline-none font-bold transition-all text-sm md:text-base"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-[#2563eb] focus:bg-white outline-none font-bold transition-all text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-[#2f4a6d] focus:bg-white outline-none font-bold transition-all appearance-none text-sm md:text-base"
                >
                  <option>Transcript Inquiry</option>
                  <option>Document Verification</option>
                  <option>Partner with Us</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-[#2563eb] focus:bg-white outline-none font-bold transition-all resize-none text-sm md:text-base"
                />
              </div>

              <button className="w-full bg-[#2f4a6d] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-slate-900 shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                Send Message <FiSend size={18} />
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      <section className="px-4 pb-16 md:pb-32">
        <motion.div
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#2f4a6d] to-[#1e324b] text-white text-center p-10 md:p-20 rounded-[40px] md:rounded-[50px] shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#60a5fa] opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-[100px]"></div>

          <div className="relative z-10 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-5xl font-black tracking-tight leading-none">
              Ready to Start Your <br />
              <span className="text-[#60a5fa]">Global Journey?</span>
            </h2>

            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#60a5fa] mx-auto rounded-full"></div>

            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">
              Join thousands of successful students who trusted 100 Transcripts for their academic documentation.
            </p>

            <button className="bg-white text-[#2f4a6d] px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-[#60a5fa] hover:text-white hover:shadow-[0_20px_40px_rgba(147,197,253,0.3)] transition-all flex items-center gap-3 mx-auto active:scale-95">
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