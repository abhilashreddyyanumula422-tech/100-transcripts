import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import collegesData from "../data/collegesData";

import HowItWorks from "../components/HowItWorks";
import CollegeServices from "../components/CollegeServices";
import Partners from "../components/Partners";

import {
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import heroImage from "../../assets/partnerclg.png";


// ✅ SAME COUNTER (ANIMATION BACK)
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const end = target;

        const timer = setInterval(() => {
          start += Math.ceil(end / 60);
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 25);
      }}
    >
      {count}
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
    </motion.span>
  );
};

// ✅ ICONS (OPTIONAL SAME LOOK)
const iconMap = [<FiCheckCircle />, <FiFileText />, <FiShield />, <FiClock />];

const CollegePage = () => {
  const { collegeId } = useParams();
  const college = collegesData[collegeId];

  if (!college) return <h1>College Not Found</h1>;

  return (
    <div className="bg-white text-slate-900">

      {/* HERO SAME UI */}
      <section className="relative overflow-hidden bg-[#f8fbff] pt-28 pb-16 md:pt-36 md:pb-24">

        {/* ✅ BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-right bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "contain",
          }}
        />

        {/* ✅ GRADIENT OVERLAY (IMPORTANT SAME LOOK) */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,255,0.98)_0%,rgba(248,251,255,0.95)_28%,rgba(248,251,255,0.78)_48%,rgba(248,251,255,0.30)_70%,rgba(248,251,255,0.02)_100%)]" />

        {/* ✅ RADIAL LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%)]" />

        {/* ✅ BLUR ANIMATION */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-2 md:px-4 lg:px-2">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">

            <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative w-full pl-0 lg:-ml-10"
>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur-sm">
                100 Transcripts LLP
              </div>

              {/* ✅ TITLE */}
              <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.7 }}
  className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-[#233a59] md:text-5xl xl:text-6xl"
>
                {college.title.split("for")[0]}
                <span className="text-blue-700">
                  {" "}for {college.short} Students
                </span>
              </motion.h1>

              {/* ✅ DESCRIPTION */}
              <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
>
                {college.description}
              </motion.p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-3">

  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
    <FiCheckCircle className="text-blue-600" />
    Fast processing
  </div>

  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
    <FiCheckCircle className="text-blue-600" />
    Secure documentation
  </div>

  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
    <FiCheckCircle className="text-blue-600" />
    Dedicated support
  </div>

</div>

              {/* BUTTONS */}
              <div className="mt-8 flex gap-4">
                <a href="/contact" className="bg-[#2f4a6d] text-white px-6 py-3 rounded-full flex items-center gap-2">
                  <FaWhatsapp /> Contact Us
                </a>

                <a href="/apply" className="border px-6 py-3 rounded-full text-blue-700 flex items-center gap-2">
                  Submit Documents <FiArrowRight />
                </a>
              </div>

              {/* ✅ STATS WITH ANIMATION */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
  {college.stats.map((item, index) => (
    <motion.div
      key={item.label}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white/90 px-4 py-4 text-center shadow-md ring-1 ring-slate-100 backdrop-blur-sm"
    >
      <p className="text-2xl font-bold text-[#2f4a6d]">
        <Counter value={item.value} />
      </p>
      <p className="mt-1 text-xs font-medium leading-5 text-slate-600">
        {item.label}
      </p>
    </motion.div>
  ))}
</div>

            </motion.div>

          </div>
        </div>
      </section>

      <HowItWorks />
      <CollegeServices services={college.services} />






    <section className="relative py-20 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-40" />

  <div className="relative mx-auto max-w-5xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-100 p-10 md:p-14 text-center"
    >

      {/* TOP SMALL TEXT */}
      <div className="flex items-center justify-center gap-4">
            <span className="h-[3px] w-12 bg-blue-600" />
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              GET STARTED
            </p>
            <span className="h-[3px] w-12 bg-blue-600" />
          </div>

      {/* MAIN HEADING */}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#233a59]">
        Submit Your Documents
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-4 text-slate-600 max-w-xl mx-auto leading-7">
        Please fill in your details below, and our team will guide you through
        the entire process smoothly with quick verification and delivery.
      </p>

      {/* FEATURES */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-700">
          <FiShield /> Secure Process
        </div>

        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-700">
          <FiClock /> Fast Processing
        </div>

        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-700">
          <FaWhatsapp /> 24/7 Support
        </div>

      </div>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

        <button
          onClick={() => window.location.href = "/apply"}
          className="bg-[#2f4a6d] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
        >
          Apply Now <FiArrowRight />
        </button>

        <button
          onClick={() => window.location.href = "/contact"}
          className="border border-blue-200 px-8 py-3 rounded-full font-semibold text-blue-700 hover:bg-blue-50 transition flex items-center justify-center gap-2"
        >
          Contact Us <FaWhatsapp />
        </button>

      </div>

    </motion.div>

  </div>
</section>




      <Partners />

    </div>
  );
};

export default CollegePage;