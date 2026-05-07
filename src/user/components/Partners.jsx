import React from "react";
import { motion } from "framer-motion";

import eceLogo from "../../assets/ECE_Logo_Color.png";
import ieeLogo from "../../assets/IEE logo OG.png";
import tecLogo from "../../assets/tec_logo.png";
import aziceLogo from "../../assets/AZICE-logo.png";
import wesLogo from "../../assets/WES_logo.png";
import digilockerLogo from "../../assets/digilocker_logo.png";

const partners = [
  { name: "IEE", logo: ieeLogo, link: "https://100transcripts.com/iee-users/" },
  { name: "ECE", logo: eceLogo, link: "https://100transcripts.com/ece-evaluation/" },
  { name: "Arizona Evaluators", logo: aziceLogo, link: "https://alianzaeval.com/" },
  { name: "WES", logo: wesLogo, link: "https://100transcripts.com/wes-credential-evaluation/" },
  { name: "TEC", logo: tecLogo, link: "https://spanside.my.salesforce-sites.com/SpantranApplication?Id=dcd5b453-28d6-4f7f-aded-276c9ec1d543" },
  { name: "DigiLocker", logo: digilockerLogo, link: "https://accounts.digitallocker.gov.in/signin/oauth_partner/%2Foauth2%2F1%2Fauthorize" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Partners = () => {
  const leftPartners = partners.slice(0, 3);
  const rightPartners = partners.slice(3, 6);

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-blue-600 bg-blue-50 rounded-full border-2 border-blue-200"
          >
            OUR PARTNERS
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Credential Associates We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We collaborate with globally recognized evaluation bodies to ensure
            fast, reliable, and trusted transcript services.
          </p>
        </motion.div>

        {/* Partners Grid - Left and Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {leftPartners.map((partner, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Official Partner</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {rightPartners.map((partner, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Official Partner</p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-full group-hover:bg-cyan-600 transition-colors">
                  <svg className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
