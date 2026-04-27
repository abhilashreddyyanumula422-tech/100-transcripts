import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import certificate1 from "../../assets/certificate1.jpg";
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.jpg";
import clgImg from "../../assets/Clg-IMG.jpg";
import ieeImg from "../../assets/IEE-IMG.jpg";
import indiaMap from "../../assets/INDIA-MAp.jpg";
import isoImg from "../../assets/ISO.jpg";
import starImg from "../../assets/Star-IMG.jpg";
import startupImg from "../../assets/Startup-IMG.jpg";
const PRIMARY = "#3B5575";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 sm:pt-24 text-gray-800">

      {/* HERO */}
      <section style={{ backgroundColor: PRIMARY }} className="text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">

          {/* TEXT */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-blue-200">100 Transcripts</span>
            </h1>

            <div className="w-16 sm:w-20 h-1 bg-blue-300 mb-4 sm:mb-6"></div>

            <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
              100 Transcripts LLP is a specialized ISO-certified firm founded in 2016 in Hyderabad, India. 
              We are committed to excellence and dedicated to securing educational documents and transcripts 
              from universities across India.
            </p>

            <p className="text-gray-200 mb-6 leading-relaxed text-sm sm:text-base">
              We provide expert assistance for credential verification and transcripts for WES Canada, ECE, 
              IQAS, CES, and more—helping students who cannot visit universities in person.
            </p>

            <button
              onClick={() => navigate("/apply")}
              className="bg-white text-[#3B5575] px-6 py-3 rounded-full font-semibold hover:scale-105 transition min-h-[44px]"
            >
              Apply Now →
            </button>
          </motion.div>

          {/* IMAGE */}
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-2xl shadow-xl w-full"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        
        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="rounded-2xl shadow-lg w-full"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <p className="mb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            We simplify the process of obtaining academic certificates and transcripts, helping our clients 
            save both time and effort. Our system ensures smooth and efficient processing.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            With a dedicated team of professionals and 28 teams across India, we are proud of our reliability, 
            adaptability, and commitment. Trusted by 18,000+ applicants, we continue to build strong partnerships 
            across regions and cultures.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <motion.section
        className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 max-w-6xl mx-auto pb-16 sm:pb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
      >

        <motion.div className="card" variants={fadeUp}>
          <div className="icon-box bg-gray-100">
            <Building2 style={{ color: PRIMARY }} />
          </div>
          <h3>Institutions Covered</h3>
          <h2 style={{ color: PRIMARY }}>289+</h2>
          <p>Universities & Colleges across India</p>
        </motion.div>

        <motion.div className="card" variants={fadeUp}>
          <div className="icon-box bg-gray-100">
            <Award style={{ color: PRIMARY }} />
          </div>
          <h3>MOI Certifications</h3>
          <h2 style={{ color: PRIMARY }}>3200+</h2>
          <p>Successfully processed requests</p>
        </motion.div>

        <motion.div className="card" variants={fadeUp}>
          <div className="icon-box bg-gray-100">
            <Users style={{ color: PRIMARY }} />
          </div>
          <h3>Total Applicants</h3>
          <h2 style={{ color: PRIMARY }}>17000+</h2>
          <p>Students served globally</p>
        </motion.div>

      </motion.section>


{/* CERTIFICATIONS SECTION */}
<section className="px-4 sm:px-6 pb-16 sm:pb-20">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-[#3B5575]">
    Our Recognitions & Certifications
  </h2>

  <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

    {[
      { img: certificate1, title: "StartupIndia Recognition" },
      { img: certificate2, title: "ISO Certification" },
      { img: certificate3, title: "LLP Registration" }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-center font-semibold mb-3 text-[#3B5575] text-sm sm:text-base">
          {item.title}
        </h3>

        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[250px] sm:h-[350px] object-contain rounded-lg"
        />
      </motion.div>
    ))}

  </div>
</section>

{/* AUTO SCROLLING IMAGES (3 VISIBLE) */}
<section className="px-4 sm:px-6 pb-16 sm:pb-20 overflow-hidden">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-[#3B5575]">
    Our Network & Presence
  </h2>

  <div className="w-full overflow-hidden">
    <div className="flex gap-4 sm:gap-6 animate-scroll">

      {[
        clgImg,
        ieeImg,
        indiaMap,
        isoImg,
        starImg,
        startupImg,

        // 👇 duplicate for smooth infinite loop
        clgImg,
        ieeImg,
        indiaMap,
        isoImg,
        starImg,
        startupImg
      ].map((img, index) => (
        <div
          key={index}
          className="min-w-[280px] sm:min-w-[320px] bg-white rounded-2xl shadow-lg p-3 sm:p-4"
        >
          <img
            src={img}
            alt={`img-${index}`}
            className="w-full h-[180px] sm:h-[220px] object-contain rounded-lg"
          />
        </div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div
          style={{ backgroundColor: PRIMARY }}
          className="max-w-4xl mx-auto text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need help getting academic documents from your college or university?
          </h2>

          <p className="text-gray-200 mb-6 leading-relaxed text-sm sm:text-base">
            Let 100 Transcripts LLP simplify your documentation process with certified transcripts, 
            E-Transcripts, and credential evaluations—trusted by thousands across India and abroad.
          </p>

          <button
            onClick={() => navigate("/apply")}
            className="bg-white text-[#3B5575] px-6 py-3 rounded-full hover:scale-105 transition min-h-[44px]"
          >
            Get in Touch Today →
          </button>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .card {
          background: #fff;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .icon-box {
          width: 60px;
          height: 60px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 12px;
        }

        h3 {
          font-size: 16px;
          color: #64748b;
          margin-bottom: 8px;
        }

        h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        p {
          font-size: 14px;
          color: #94a3b8;
        }

       @keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite; /* 🔥 faster + smooth */
}

      `}</style>
    </div>
  );
}