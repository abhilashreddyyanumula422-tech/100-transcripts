import React from "react";
import { motion } from "framer-motion";

const points = [
  "Official partner support for IEE, ECE, and SpanTran applications",
  "Guidance for WES, IQAS, CES, and UK ENIC document processing",
  "ISO-certified service workflow with pan-India university coverage",
];

const WhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-8 sm:w-14 bg-blue-600" />
            <p className="text-sm font-bold uppercase text-blue-600 tracking-widest">
              Who We Are
            </p>
            <span className="h-[2px] w-8 sm:w-14 bg-blue-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] text-[#2f4a6d] max-w-4xl mx-auto">
            Trusted transcript support for your education and global journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We help students and professionals process academic documents
            quickly, securely, and without unnecessary delays.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -left-12 -top-12 hidden lg:block h-64 w-64 rounded-full bg-blue-100/50 blur-3xl -z-10" />

            <div className="relative space-y-8">
              <p className="text-xl sm:text-2xl leading-relaxed text-[#31496b] font-medium italic lg:not-italic text-center lg:text-left">
                At <span className="text-[#3b82f6] font-black not-italic">100 Transcripts LLP</span>,
                we provide certified transcript services for students and
                professionals across India. Trusted by{" "}
                <span className="font-bold underline decoration-blue-400/30">17,000+ applicants</span>, we
                simplify documentation with a process designed to be fast and reliable.
              </p>

              <div className="space-y-6">
                {points.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white transition-colors border border-transparent hover:border-blue-100 shadow-sm hover:shadow-md"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-500/20">
                      <span className="text-sm font-bold text-white">✓</span>
                    </div>

                    <p className="text-base sm:text-lg font-semibold text-slate-700 leading-snug">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center lg:text-left pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-[#2f4a6d] px-10 py-4 text-base font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:bg-[#243a57]"
                >
                  View More
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -right-12 -bottom-12 hidden lg:block h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl -z-10" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/80 shadow-2xl backdrop-blur-xl group hover:shadow-blue-500/10 transition-shadow duration-500">
              <div className="bg-[#2f4a6d] px-8 py-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                    Visit Our Office
                  </p>
                </div>

                <h3 className="text-2xl font-black mb-3 tracking-tight">Hyderabad Office</h3>

                <p className="text-sm leading-relaxed text-blue-100 font-medium">
                  100 Transcripts LLP, 3rd Floor, Sri Srinivasam, Plot No.
                  1133/1, Mathrusree Nagar, Hafeezpet, Hyderabad, Telangana
                  500049, India
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-inner group-hover:border-blue-200 transition-colors">
                  <iframe
                    title="100 Transcripts LLP Location"
                    src="https://maps.google.com/maps?q=100%20Transcripts%20LLP%20Hyderabad&output=embed"
                    className="h-[300px] w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.google.com/maps/place/100+Transcripts+LLP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-2xl border-2 border-blue-100 bg-blue-50/50 px-6 py-4 text-sm font-black text-blue-700 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm"
                >
                  Open in Google Maps
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

