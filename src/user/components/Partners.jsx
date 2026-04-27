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
    <section className="w-full py-20 bg-white overflow-hidden">

      {/* 🔥 HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-8 sm:w-12 h-[2px] sm:h-[3px] bg-blue-600"></span>
            <p className="text-xs sm:text-sm font-bold uppercase text-blue-600 tracking-wider">
              Our Partners
            </p>
            <span className="w-8 sm:w-12 h-[2px] sm:h-[3px] bg-blue-600"></span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-[#2f4a6d]">
            Credential Associates We Serve
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm">
            We collaborate with globally recognized evaluation bodies to ensure
            fast, reliable, and trusted transcript services.
          </p>
        </motion.div>
      </div>

      {/* 🔥 SCROLL SECTION */}
      <div className="relative flex">

        {/* Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex animate-marquee whitespace-nowrap py-4"
        >
          {scrollPartners.map((item, index) => (
            <motion.a
              variants={itemVariants}
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 flex items-center justify-center min-w-[220px] md:min-w-[280px] h-32 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group animate-float"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-14 w-auto object-contain brightness-110 contrast-110 saturate-125 transition-all duration-500 group-hover:scale-110"
              />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const PartnersMobileStyles = `
@media (max-width: 1024px) {
  .partners-section {
    padding: 3rem 1rem !important;
  }
  
  .partners-title {
    font-size: 2rem !important;
  }
  
  .partners-description {
    font-size: 1rem !important;
  }
  
  .partner-card {
    min-width: 200px !important;
    height: 120px !important;
  }
  
  .partner-logo {
    height: 3rem !important;
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 2rem 0.5rem !important;
  }
  
  .partners-title {
    font-size: 1.5rem !important;
  }
  
  .partners-description {
    font-size: 0.9rem !important;
  }
  
  .partner-card {
    min-width: 180px !important;
    height: 100px !important;
    margin: 0 1rem !important;
  }
  
  .partner-logo {
    height: 2.5rem !important;
  }
  
  .fade-effect {
    width: 2rem !important;
  }
}

@media (max-width: 480px) {
  .partners-section {
    padding: 1.5rem 0.25rem !important;
  }
  
  .partners-title {
    font-size: 1.25rem !important;
  }
  
  .partners-description {
    font-size: 0.85rem !important;
  }
  
  .partner-card {
    min-width: 150px !important;
    height: 80px !important;
    margin: 0 0.75rem !important;
  }
  
  .partner-logo {
    height: 2rem !important;
  }
  
  .fade-effect {
    width: 1rem !important;
  }
  
  .header-lines {
    width: 2rem !important;
  }
}
`;

// Inject mobile styles into the document
if (typeof window !== 'undefined') {
  const styleId = 'partners-mobile-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = PartnersMobileStyles;
    document.head.appendChild(style);
  }
}

export default Partners;