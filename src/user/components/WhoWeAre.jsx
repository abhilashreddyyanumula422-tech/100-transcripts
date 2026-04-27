import React from "react";
import { motion } from "framer-motion";

const points = [
  "Official partner support for IEE, ECE, and SpanTran applications",
  "Guidance for WES, IQAS, CES, and UK ENIC document processing",
  "ISO-certified service workflow with pan-India university coverage",
];

const WhoWeAre = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] sm:h-[2px] w-8 sm:w-14 bg-blue-600" />
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-blue-600 tracking-wider">
              Who We Are
            </p>
            <span className="h-[2px] sm:h-[2px] w-8 sm:w-14 bg-blue-600" />
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight text-[#2f4a6d] md:text-4xl">
            Trusted transcript support for your education and global journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-7 text-slate-600 sm:text-sm md:text-base">
            We help students and professionals process academic documents
            quickly, securely, and without unnecessary delays.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 top-2 hidden h-32 w-32 rounded-full bg-blue-100/60 blur-3xl md:block" />

            <div className="relative">
              <p className="text-base leading-8 text-[#31496b] md:text-[1.35rem] md:leading-[2.5rem]">
                At <span className="font-semibold">100 Transcripts LLP</span>,
                we provide certified transcript services for students and
                professionals across India. Trusted by{" "}
                <span className="font-semibold">17,000+ applicants</span>, we
                simplify documentation with a process designed to be fast,
                reliable, and stress-free.
              </p>

              <div className="mt-8 space-y-5">
                {points.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100">
                      <span className="text-sm font-bold text-blue-700">✓</span>
                    </div>

                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="/about"
                className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-[#2f4a6d] px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#243a57] min-h-[44px]"
              >
                View More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-200/40 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/75 shadow-xl backdrop-blur-xl">
              <div className="bg-[#2f4a6d]/95 px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                  Visit Our Office
                </p>

                <h3 className="mt-1 text-lg font-semibold">Hyderabad Office</h3>

                <p className="mt-2 text-xs leading-5 text-blue-100">
                  100 Transcripts LLP, 3rd Floor, Sri Srinivasam, Plot No.
                  1133/1, Mathrusree Nagar, Hafeezpet, Hyderabad, Telangana
                  500049, India
                </p>
              </div>

              <div className="p-4">
                <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <iframe
                    title="100 Transcripts LLP Location"
                    src="https://maps.google.com/maps?q=100%20Transcripts%20LLP%20Hyderabad&output=embed"
                    className="h-[240px] w-full border-0"
                    loading="lazy"
                  />
                </div>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.google.com/maps/place/100+Transcripts+LLP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
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

/* Mobile Responsiveness Styles */
const WhoWeAreMobileStyles = `
@media (max-width: 1024px) {
  .who-we-section {
    padding: 3rem 1rem !important;
  }
  
  .who-we-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
  
  .who-we-title {
    font-size: 2rem !important;
  }
  
  .who-we-description {
    font-size: 1rem !important;
  }
}

@media (max-width: 768px) {
  .who-we-section {
    padding: 2rem 0.5rem !important;
  }
  
  .who-we-title {
    font-size: 1.5rem !important;
    line-height: 1.2 !important;
  }
  
  .who-we-description {
    font-size: 0.9rem !important;
  }
  
  .who-we-text {
    font-size: 1rem !important;
    line-height: 1.6 !important;
  }
  
  .who-we-card {
    padding: 1rem !important;
  }
  
  .office-map {
    height: 180px !important;
  }
  
  .points-list {
    gap: 0.75rem !important;
  }
}

@media (max-width: 480px) {
  .who-we-section {
    padding: 1.5rem 0.25rem !important;
  }
  
  .who-we-title {
    font-size: 1.25rem !important;
  }
  
  .who-we-description {
    font-size: 0.85rem !important;
  }
  
  .who-we-text {
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
  }
  
  .office-map {
    height: 150px !important;
  }
  
  .maps-button {
    padding: 0.5rem 1rem !important;
    font-size: 0.75rem !important;
  }
  
  .section-header {
    flex-direction: column !important;
    gap: 0.5rem !important;
  }
  
  .header-lines {
    width: 2rem !important;
  }
}
`;

// Inject mobile styles into the document
if (typeof window !== 'undefined') {
  const styleId = 'who-we-mobile-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = WhoWeAreMobileStyles;
    document.head.appendChild(style);
  }
}
