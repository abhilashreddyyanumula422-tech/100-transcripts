import React from "react";
import { motion } from "framer-motion";

export default function SpanTran() {
  return (
    <section className="bg-[#2f2f7f] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
            Get your SpanTran evaluation done at a discounted rate with{" "}
            <span className="text-yellow-400">
              100 Transcripts-India
            </span>
          </h1>

          <p className="text-gray-200 mb-8 text-base md:text-lg">
            Apply now to get your non-U.S. transcripts evaluated at a special discounted rate.
            Enjoy hassle-free processing with 100 Transcripts-India.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg shadow-lg font-medium"
          >
            Apply Now
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGES */}
        <div className="md:w-1/2 relative flex justify-center items-center">

          {/* MAIN IMAGE */}
          <motion.img
            src="/images/1.png"
            alt="Graduation"
            className="w-[300px] md:w-[380px] relative z-10"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* FLOATING IMAGE */}
          <motion.img
            src="/images/2.png"
            alt="Decoration"
            className="absolute top-0 right-0 w-[120px] md:w-[150px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* BACKGROUND GLOW EFFECT */}
          <div className="absolute w-[350px] h-[350px] bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}