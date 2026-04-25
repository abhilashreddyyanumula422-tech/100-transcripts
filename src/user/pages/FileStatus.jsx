import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiTruck, FiCheckCircle, FiClock, FiFileText, FiShield, FiPackage, FiArrowRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FileStatus = () => {
    const [fileId, setFileId] = useState("");
    const [status, setStatus] = useState(null);

    const steps = [
        { id: 1, label: "Started", desc: "Your file was opened", icon: <FiFileText /> },
        { id: 2, label: "University Visit", desc: "Our team is at the college", icon: <FiClock /> },
        { id: 3, label: "Verification", desc: "Checking all details", icon: <FiShield /> },
        { id: 4, label: "Dispatched", desc: "On its way to you", icon: <FiTruck /> },
        { id: 5, label: "Delivered", desc: "Papers reached!", icon: <FiCheckCircle /> },
    ];

    const currentStep = 2; // For Demo purposes

    const handleSearch = (e) => {
        e.preventDefault();
        // Static demo logic
        if (fileId.trim() !== "") {
            setStatus({
                id: fileId,
                current: "Processing at University",
                updated: "Oct 24, 2024",
                university: "JNTU Hyderabad"
            });
        }
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen pt-28">

            {/* HEADER SECTION */}
            <motion.section
                className="relative overflow-hidden bg-[#2f4a6d] py-24 px-4 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#60a5fa] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#3b82f6] rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-300/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-[#60a5fa] font-black uppercase text-[10px] tracking-widest mb-4">
            Track Application
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Track Your <br /><span className="text-[#60a5fa]">Documents</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            "See exactly where your papers are in the process."
          </p>
        </div>
            </motion.section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

                {/* SEARCH BOX */}
                <motion.div 
                    className="max-w-3xl mx-auto -mt-32 relative z-30 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <form onSubmit={handleSearch} className="relative group">
                        <input 
                            type="text" 
                            placeholder="Type your File ID (e.g., 100T-54321)"
                            value={fileId}
                            onChange={(e) => setFileId(e.target.value)}
                            className="w-full bg-white p-6 md:p-8 pr-32 rounded-[32px] md:rounded-[40px] shadow-2xl border-2 border-slate-50 outline-none focus:border-[#2f4a6d] transition-all font-black text-[#2f4a6d] md:text-xl placeholder:text-slate-300"
                        />
                        <button 
                            type="submit"
                            className="absolute right-3 top-3 bottom-3 bg-[#2f4a6d] text-white px-8 rounded-[24px] md:rounded-[32px] font-black hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95 group-hover:shadow-lg"
                        >
                            Track <FiSearch size={20} strokeWidth={3} />
                        </button>
                    </form>
                </motion.div>

                {/* STATUS VISUALIZER */}
                {status && (
                    <motion.div 
                        className="space-y-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Summary Card */}
                        <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-2 text-center md:text-left">
                                <span className="text-[#60a5fa] font-black text-[10px] uppercase tracking-widest">Ongoing Task</span>
                                <h3 className="text-3xl md:text-5xl font-black text-[#2f4a6d] tracking-tighter">{status.current}</h3>
                                <p className="text-[#2f4a6d] opacity-50 font-bold">University: {status.university} • Last Update: {status.updated}</p>
                            </div>
                            <div className="w-24 h-24 bg-blue-50 text-[#3b82f6] rounded-3xl flex items-center justify-center text-4xl shadow-inner border border-blue-100">
                                <FiPackage />
                            </div>
                        </div>

                        {/* Progress Line */}
                        <div className="relative pt-20 pb-10">
                            {/* Connector Line */}
                            <div className="absolute top-1/2 left-[10%] right-[10%] h-1.5 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-[#3b82f6]" 
                                    initial={{ width: 0 }}
                                    animate={{ width: '40%' }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                ></motion.div>
                            </div>

                            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-y-16">
                                {steps.map((step, i) => {
                                    const isDone = i < currentStep;
                                    const isCurrent = i === currentStep;

                                    return (
                                        <div key={i} className={`flex flex-col items-center text-center transition-all duration-700 ${!isDone && !isCurrent ? 'opacity-30' : 'opacity-100'}`}>
                                            <div className={`w-14 h-14 md:w-24 md:h-24 rounded-[32px] flex items-center justify-center text-2xl md:text-4xl mb-6 shadow-xl transition-all duration-700 ${isDone ? 'bg-[#3b82f6] text-white' : isCurrent ? 'bg-[#2f4a6d] text-white ring-8 ring-blue-50 scale-110' : 'bg-white text-slate-300'}`}>
                                                {isDone ? <FiCheckCircle strokeWidth={3} /> : step.icon}
                                            </div>
                                            <h4 className="font-black text-[#2f4a6d] mb-1">{step.label}</h4>
                                            <p className="text-[10px] font-bold text-slate-400 tracking-tight uppercase">{step.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default FileStatus;