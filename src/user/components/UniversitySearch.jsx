import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const UniversitySearch = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 SAME HEADING STYLE (LIKE WHO WE ARE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 sm:w-14 h-[2px] sm:h-[3px] bg-blue-600"></span>

            <p className="text-sm font-bold uppercase text-blue-600 tracking-widest">
              Find Your University
            </p>

            <span className="w-8 sm:w-14 h-[2px] sm:h-[3px] bg-blue-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-[#2f4a6d] max-w-4xl mx-auto">
            Explore Institutions for Expert Guidance
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Search universities, choose services, and get your transcripts processed easily.
          </p>
        </motion.div>

        {/* 🔍 SEARCH BOX */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-2xl shadow-blue-500/5 rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-slate-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">

            {/* STATE */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Select State</label>
              <select className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-700 font-semibold min-h-[56px] appearance-none">
                <option>Select State</option>
              </select>
            </div>

            {/* UNIVERSITY */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Select University</label>
              <select className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-700 font-semibold min-h-[56px] appearance-none">
                <option>First Select State</option>
              </select>
            </div>

            {/* PURPOSE */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Select Purpose</label>
              <select className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-700 font-semibold min-h-[56px] appearance-none">
                <option>Select Purpose</option>
              </select>
            </div>

            {/* BUTTON */}
            <div className="pt-2 sm:pt-0">
              <button className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#2f4a6d] text-white font-bold hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 active:scale-95 transition-all min-h-[56px]">
                <Search size={20} />
                Search
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default UniversitySearch;