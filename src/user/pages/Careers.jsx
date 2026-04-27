import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Heart, Zap, MapPin, Search } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Careers = () => {
  const jobs = [
    {
      title: "University Operations Executive",
      location: "Hyderabad / Pan India",
      type: "Full-Time",
      dept: "Operations",
    },
    {
      title: "Documentation Specialist",
      location: "Remote / Hyderabad",
      type: "Full-Time",
      dept: "Verification",
    },
    {
      title: "Student Success Advisor",
      location: "Remote",
      type: "Contract",
      dept: "Customer Support",
    },
    {
      title: "Academic Relations Manager",
      location: "Bangalore / Delhi",
      type: "Full-Time",
      dept: "Partnerships",
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Team",
      desc: "Work with a passionate group of professionals dedicated to student success.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student First",
      desc: "Our mission is to simplify global education journeys for thousands.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Growth",
      desc: "Join a rapidly expanding startup in the ed-tech documentation space.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <motion.section
        className="relative py-24 bg-slate-800 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-300 font-black uppercase text-[10px] tracking-[0.2em]">
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Help Us Build the <span className="text-blue-400">Future</span> of Education
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Join 100 Transcripts LLP and help thousands of students achieve their dreams of studying and working abroad.
          </p>
        </div>
      </motion.section>

      {/* WHY JOIN US */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800">Why Join 100 Transcripts?</h2>
          <p className="text-slate-500 font-medium">We're more than just a documentation company; we're a mission-driven team.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 text-center space-y-6 group hover:-translate-y-2 transition-transform"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-slate-800">{benefit.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">Open Positions</h2>
              <p className="text-slate-500 font-medium">Find your next role and grow your career with us.</p>
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search roles..."
                className="pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all w-full md:w-80 font-medium"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-[#f8fafc] border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {job.dept}
                    </span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-blue-50 p-12 rounded-[3rem] border border-blue-100 space-y-6">
              <h3 className="text-2xl font-black text-slate-800">Don't see a fit?</h3>
              <p className="text-slate-600 font-medium max-w-xl mx-auto">
                We're always looking for talented individuals. Send your resume to <span className="text-blue-600 font-bold">careers@100transcripts.com</span> and we'll keep you in mind for future openings.
              </p>
              <a 
                href="mailto:careers@100transcripts.com"
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
