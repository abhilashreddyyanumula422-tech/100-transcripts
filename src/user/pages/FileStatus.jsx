import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiTruck, FiCheckCircle, FiClock, FiFileText, FiShield, FiPackage, FiArrowRight } from "react-icons/fi";
import { ArrowRight, Search, Package, ShieldCheck, CheckCircle2, Clock, Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FileStatus = () => {
    const [fileId, setFileId] = useState("");
    const [status, setStatus] = useState(null);

    const steps = [
        { id: 1, label: "Started", desc: "File Opened", icon: <FiFileText /> },
        { id: 2, label: "In Progress", desc: "University Visit", icon: <FiClock /> },
        { id: 3, label: "Verification", desc: "Final Review", icon: <FiShield /> },
        { id: 4, label: "Dispatched", desc: "On the way", icon: <FiTruck /> },
        { id: 5, label: "Delivered", desc: "Arrived", icon: <FiCheckCircle /> },
    ];

    const currentStep = 2; // Demo purpose

    const handleSearch = (e) => {
        e.preventDefault();
        if (fileId.trim() !== "") {
            setStatus({
                id: fileId,
                current: "University Processing",
                updated: "Oct 24, 2024",
                university: "JNTU Hyderabad"
            });
        }
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen pt-20">

            {/* HEADER SECTION */}
            <motion.section
                className="relative overflow-hidden bg-slate-800 py-24 px-6 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]"></div>
                  <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[100px]"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-400/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-300 font-black uppercase text-[10px] tracking-[0.2em]">
                    Live Tracking
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
                    Track Your <span className="text-blue-400">Application</span>
                  </h1>
                  <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Enter your File ID to see exactly where your papers are in our secure university workflow.
                  </p>
                </div>
            </motion.section>

            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* SEARCH BOX */}
                <motion.div 
                    className="max-w-3xl mx-auto -mt-32 relative z-30 mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <form onSubmit={handleSearch} className="relative group">
                        <input 
                            type="text" 
                            placeholder="Enter File ID (e.g., 100T-54321)"
                            value={fileId}
                            onChange={(e) => setFileId(e.target.value)}
                            className="w-full bg-white p-6 md:p-10 pr-40 rounded-[2.5rem] shadow-2xl border-2 border-slate-50 outline-none focus:border-blue-500 transition-all font-black text-slate-800 md:text-2xl placeholder:text-slate-300"
                        />
                        <button 
                            type="submit"
                            className="absolute right-3 top-3 bottom-3 bg-blue-600 text-white px-10 rounded-[2rem] font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-blue-600/20"
                        >
                            <span className="hidden sm:inline text-lg">Track</span>
                            <Search className="w-6 h-6" />
                        </button>
                    </form>
                </motion.div>

                {/* STATUS VISUALIZER */}
                {status && (
                    <motion.div 
                        className="space-y-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {/* Summary Card */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
                            
                            <div className="space-y-3 text-center md:text-left relative z-10">
                                <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Ongoing Task</span>
                                <h3 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">{status.current}</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 pt-2">
                                  <p className="text-slate-400 font-bold text-sm">University: <span className="text-slate-700">{status.university}</span></p>
                                  <p className="text-slate-400 font-bold text-sm">Last Update: <span className="text-slate-700">{status.updated}</span></p>
                                </div>
                            </div>
                            
                            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center shadow-inner border border-blue-100">
                                <Package className="w-10 h-10" />
                            </div>
                        </div>

                        {/* Progress Line */}
                        <div className="relative pt-24 pb-12 overflow-x-auto sm:overflow-x-visible hide-scrollbar">
                            <div className="min-w-[800px] sm:min-w-0">
                                {/* Connector Line */}
                                <div className="absolute top-[116px] left-[10%] right-[10%] h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                                        initial={{ width: 0 }}
                                        animate={{ width: '40%' }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                    ></motion.div>
                                </div>

                                <div className="relative z-10 flex justify-between px-4 sm:px-0">
                                    {steps.map((step, i) => {
                                        const isDone = i < currentStep;
                                        const isCurrent = i === currentStep;

                                        return (
                                            <div key={i} className={`flex flex-col items-center text-center transition-all duration-700 w-40 ${!isDone && !isCurrent ? 'opacity-30' : 'opacity-100'}`}>
                                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-700 relative ${isDone ? 'bg-blue-600 text-white' : isCurrent ? 'bg-slate-800 text-white ring-8 ring-blue-50 scale-110' : 'bg-white text-slate-300'}`}>
                                                    {isDone ? <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" /> : React.cloneElement(step.icon, { size: 32 })}
                                                    {isCurrent && (
                                                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-bounce shadow-lg">
                                                        ACTIVE
                                                      </div>
                                                    )}
                                                </div>
                                                <h4 className="font-black text-slate-800 mt-6 mb-1 text-sm md:text-base uppercase tracking-tight">{step.label}</h4>
                                                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{step.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* WHATSAPP FLOATING */}
            <a
                href="https://wa.me/919941991402"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95"
            >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>

        </div>
    );
};

export default FileStatus;