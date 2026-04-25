// import React from "react";
// import { Link } from "react-router-dom";
// import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";

// const quickLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Partnered Colleges", path: "/partnered-colleges" },
//   { name: "Track Status", path: "/file-status" },
//   { name: "Contact", path: "/contact" },
// ];

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#243b5a] text-white">
//       <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
//         <div className="grid gap-6 border-b border-white/10 pb-6 lg:grid-cols-[1fr_0.8fr_0.9fr_1.1fr]">
//           <div>
//             <Link to="/" className="inline-block">
//               <h2 className="text-xl font-bold tracking-tight md:text-2xl">
//                 <span className="text-blue-400">100</span>{" "}
//                 <span className="text-white">Transcripts</span>
//               </h2>
//             </Link>

//             <p className="mt-2.5 max-w-sm text-sm leading-6 text-blue-100/85">
//               Trusted transcript and academic document support for students and
//               professionals across India with a fast, reliable, and simple
//               process.
//             </p>
//           </div>

//           <div>
//             <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
//               Quick Links
//             </h4>

//             <ul className="space-y-1.5 text-sm text-blue-100/85">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.path} className="transition hover:text-white">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
//               Contact
//             </h4>

//             <div className="space-y-2 text-sm text-blue-100/85">
//               <a
//                 href="https://wa.me/919941991402"
//                 className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10 hover:text-white"
//               >
//                 <FaWhatsapp className="text-sm text-green-400" />
//                 <span>WhatsApp Support</span>
//               </a>

//               <a
//                 href="tel:+919941991402"
//                 className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10 hover:text-white"
//               >
//                 <FiPhone className="text-sm text-blue-300" />
//                 <span>+91 99419 91402</span>
//               </a>

//               <a
//                 href="mailto:support@100transcripts.com"
//                 className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10 hover:text-white"
//               >
//                 <FiMail className="text-sm text-blue-300" />
//                 <span>support@100transcripts.com</span>
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
//               Our Office
//             </h4>

//             <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
//               <div className="border-b border-white/10 p-3">
//                 <div className="flex items-start gap-2.5">
//                   <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-400/10">
//                     <FiMapPin className="text-sm text-blue-300" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-white">
//                       Hyderabad Office
//                     </p>
//                     <p className="mt-1 text-xs leading-5 text-blue-100/80">
//                       Plot No: 801, Mathrusree Nagar,
//                       <br />
//                       Hyderabad, Telangana 500038
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-2">
//                 <div className="overflow-hidden rounded-lg">
//                   <iframe
//                     title="100 Transcripts Location"
//                     src="https://www.google.com/maps?q=Mathrusree%20Nagar,%20Hyderabad&output=embed"
//                     className="h-24 w-full border-0"
//                     loading="lazy"
//                   />
//                 </div>

//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Mathrusree+Nagar+Hyderabad"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-blue-200 transition hover:text-white"
//                 >
//                   Open in Google Maps
//                   <FiArrowUpRight />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 pt-3 text-xs text-blue-100/70 sm:flex-row sm:items-center sm:justify-between">
//           <p>© {currentYear} 100 Transcripts LLP. All rights reserved.</p>

//           <div className="flex gap-4">
//             <Link to="#" className="transition hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link to="#" className="transition hover:text-white">
//               Terms of Use
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };







import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { Link } from "react-router-dom";
import TermsConditions from "./TermsConditions";
import RefundCancellation from "./RefundCancellation";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const serviceLinks = [
  { name: "Credential Evaluation", path: "/services" },
  { name: "Certificates", path: "/services" },
  { name: "Verifications", path: "/services" },
];

const companyLinks = [
  { name: "Careers", path: "#" },
  { name: "Contact Us", path: "/contact" },
  { name: "Become a partner", path: "#" },
  { name: "Discussions", path: "#" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Refund & Cancellation", path: "/refund-cancellation" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/100Transcripts/",
    icon: <FaFacebookF />,
    bg: "hover:bg-blue-600",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@100transcriptsllp",
    icon: <FaYoutube />,
    bg: "hover:bg-red-500",
  },
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=%2B919941991402&text=Hi&type=phone_number&app_absent=0",
    icon: <FaWhatsapp />,
    bg: "hover:bg-green-500",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/100-transcripts-llp/",
    icon: <FaLinkedinIn />,
    bg: "hover:bg-sky-600",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openPolicy, setOpenPolicy] = useState(false);
  const [openRefund, setOpenRefund] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <footer className="bg-[#243b5a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                <span className="text-blue-400">100</span>{" "}
                <span className="text-white">Transcripts</span>
              </h2>
            </Link>
            

            <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/85">
              Delivers fast, secure Indian university educational documents for
              global evaluations.
            </p>

            <div className="mt-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${item.bg}`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
              {/* Visitors */}
<div className="mt-6">
  <h4 className="text-lg font-semibold text-white">
    Visitors
  </h4>
  <p className="mt-1 text-lg text-blue-100">
    423,218 Visitors
  </p>
</div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-blue-100/85">
              {serviceLinks.map((link) => (
                <li key={link.name}>
<Link to={link.path} className="transition hover:text-white">
  {link.name}
</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-blue-100/85">
{companyLinks.map((link) => (
  <li key={link.name}>
    
    {link.name === "Terms & Conditions" ? (
      <button
        onClick={() => setOpenTerms(true)}
        className="transition hover:text-white text-left"
      >
        {link.name}
      </button>

    ) : link.name === "Privacy Policy" ? (
      <button
        onClick={() => setOpenPolicy(true)}
        className="transition hover:text-white text-left"
      >
        {link.name}
      </button>

    ) : link.name === "Refund & Cancellation" ? (
      <button
        onClick={() => setOpenRefund(true)}
        className="transition hover:text-white text-left"
      >
        {link.name}
      </button>

    ) : (
      <Link to={link.path} className="transition hover:text-white">
        {link.name}
      </Link>
    )}

  </li>
))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/80">
              Contact Us
            </h4>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="border-b border-white/10 p-3">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-400/10">
                    <FiMapPin className="text-sm text-blue-300" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      100 Transcripts LLP
                    </p>
                    <p className="mt-1 text-xs leading-5 text-blue-100/80">
                      Plot No: 801, Mathrusree Nagar, Hyderabad, 500049
                    </p>
                  </div>
                </div>

                <div className="mt-3 space-y-2 text-xs text-blue-100/85">
                  <a
                    href="tel:+919941991402"
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <FiPhone className="text-blue-300" />
                    <span>+91 994 199 1402</span>
                  </a>

                  <a
                    href="mailto:support@100Transcripts.com"
                    className="flex items-center gap-2 transition hover:text-white"
                  >
                    <FiMail className="text-blue-300" />
                    <span>support@100Transcripts.com</span>
                  </a>
                </div>
              </div>

              <div className="p-2">
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    title="100 Transcripts Location"
                    src="https://www.google.com/maps?q=Mathrusree%20Nagar,%20Hyderabad%20500049&output=embed"
                    className="h-24 w-full border-0"
                    loading="lazy"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=100+Transcripts+LLP+Plot+No+801+Mathrusree+Nagar+Hyderabad+500049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-blue-200 transition hover:text-white"
                >
                  Open in Google Maps
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 text-xs text-blue-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} 100 Transcripts LLP. All rights reserved.</p>

<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-right">
  
  <button
  onClick={() => setOpenTerms(true)}
  className="transition hover:text-white"
>
  Terms & Conditions
</button>

  <button
  onClick={() => setOpenPolicy(true)}
  className="transition hover:text-white"
>
  Privacy Policy
</button>

  <button
  onClick={() => setOpenRefund(true)}
  className="transition hover:text-white"
>
  Refund & Cancellation
</button>

</div>
        </div>
      </div>


              <PrivacyPolicy
  open={openPolicy}
  onClose={() => setOpenPolicy(false)}
/>

<RefundCancellation
  open={openRefund}
  onClose={() => setOpenRefund(false)}
/>

<TermsConditions
  open={openTerms}
  onClose={() => setOpenTerms(false)}
/>


    </footer>
    
  );
};

export default Footer;
