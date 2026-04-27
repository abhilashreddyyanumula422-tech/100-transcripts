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
  const scrollPartners = [...partners, ...partners];

  return (
    <section className="w-full py-16 sm:py-24 bg-white overflow-hidden">

      {/* 🔥 HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 sm:w-14 h-[2px] sm:h-[3px] bg-blue-600"></span>
            <p className="text-sm font-bold uppercase text-blue-600 tracking-widest">
              Our Partners
            </p>
            <span className="w-8 sm:w-14 h-[2px] sm:h-[3px] bg-blue-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2f4a6d] leading-tight max-w-4xl mx-auto">
            Credential Associates We Serve
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            We collaborate with globally recognized evaluation bodies to ensure
            fast, reliable, and trusted transcript services.
          </p>
        </motion.div>
      </div>

      {/* 🔥 SCROLL SECTION */}
      <div className="relative flex group">

        {/* Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex animate-marquee whitespace-nowrap py-8"
        >
          {scrollPartners.map((item, index) => (
            <motion.a
              variants={itemVariants}
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 flex items-center justify-center min-w-[180px] sm:min-w-[280px] h-28 sm:h-36 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 group"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 sm:h-14 w-auto object-contain brightness-105 contrast-105 saturate-110 transition-all duration-500 group-hover:scale-110"
              />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;