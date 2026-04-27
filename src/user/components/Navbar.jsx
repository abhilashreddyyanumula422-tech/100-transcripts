import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [collegesDropdown, setCollegesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCollegesOpen, setMobileCollegesOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".services-menu") && !e.target.closest(".colleges-menu")) {
        setServicesDropdown(false);
        setCollegesDropdown(false);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const servicesLinks = [
    {
      name: "Credential Evaluation",
      submenu: [
        { name: "IEE Evaluation", path: "/services/iee" },
        { name: "ECE Evaluation", path: "/services/ece" },
        { name: "SpanTran (TEC)", path: "/services/spantran" },
        { name: "WES Evaluation", path: "/services/wes" },
        { name: "Educational Perspectives", path: "/services/ep" },
      ],
    },
    {
      name: "Certificates",
      submenu: [
        { name: "Transcripts / E-Transcripts", path: "/services/transcripts" },
        { name: "Provisional Certificate (PC)", path: "/services/pc" },
        { name: "Original Degree (OD)", path: "/services/od" },
        { name: "MOI Certificate", path: "/services/moi" },
        { name: "CMM", path: "/services/cmm" },
      ],
    },
    {
      name: "Verification",
      path: "/services/verification",
    },
  ];

  const partneredColleges = [
    { name: "Bhaskar Pharmacy College", path: "/partnered-colleges/bhaskar-pharmacy-college" },
    { name: "Joginpally B.R Pharmacy College", path: "/partnered-colleges/joginpally-br-pharmacy-college" },
    { name: "Siddhartha Institute of Technology & Sciences", path: "/partnered-colleges/siddhartha-institute-of-technology-sciences" },
  ];

  const dropdownStyle = "w-80 rounded-xl border border-slate-700 bg-[#1f2f44] py-2 text-white shadow-2xl";
  const itemStyle = "block px-6 py-4 font-semibold hover:bg-white/10 cursor-pointer transition-colors";

  return (
    <nav className="fixed z-[100] w-full bg-[#2f4a6d] text-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-blue-400">100</span>
          <span className="tracking-tight">Transcripts</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 items-center font-semibold uppercase text-sm tracking-wider">
          <li><Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link></li>
          <li><Link to="/about" className="hover:text-blue-300 transition-colors">ABOUT US</Link></li>

          {/* ✅ SERVICES */}
          <li className="relative services-menu">
            <button
              onClick={() => {
                setServicesDropdown(!servicesDropdown);
                setCollegesDropdown(false);
              }}
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
            >
              SERVICES <FiChevronDown className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {servicesDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full pt-3"
                >
                  <div className={dropdownStyle}>
                    {servicesLinks.map((item, index) => (
                      <div key={item.name} className="relative group">
                        {item.submenu ? (
                          <>
                            <div
                              onMouseEnter={() => setActiveSubMenu(index)}
                              className={`${itemStyle} flex justify-between items-center`}
                            >
                              {item.name}
                              <FiChevronRight />
                            </div>

                            {activeSubMenu === index && (
                              <motion.div 
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="absolute left-full top-0 ml-1 w-80 bg-[#1f2f44] border border-slate-700 rounded-xl py-2 shadow-2xl"
                              >
                                {item.submenu.map((sub) => (
                                  <Link key={sub.name} to={sub.path} className={itemStyle}>
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </>
                        ) : (
                          <Link to={item.path} className={itemStyle}>
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><Link to="/apply" className="hover:text-blue-300 transition-colors">APPLY</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 transition-colors">CONTACT US</Link></li>

          {/* COLLEGES */}
          <li className="relative colleges-menu">
            <button 
              onClick={() => {
                setCollegesDropdown(!collegesDropdown);
                setServicesDropdown(false);
              }}
              className="hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              PARTNERED COLLEGES <FiChevronDown className={`transition-transform ${collegesDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {collegesDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full pt-3"
                >
                  <div className={dropdownStyle}>
                    {partneredColleges.map((c) => (
                      <Link key={c.name} to={c.path} className={itemStyle}>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          
          <li><Link to="/file-status" className="hover:text-blue-300 transition-colors">FILE STATUS</Link></li>
        </ul>

        {/* LOGIN / PROFILE */}
        <div className="hidden lg:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-blue-200">{user.email}</span>
              <button 
                onClick={handleLogout} 
                className="bg-red-500/20 text-red-300 border border-red-500/50 px-4 py-1.5 rounded-lg font-bold text-sm hover:bg-red-500 hover:text-white transition-all"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-500 transition-all shadow-lg"
            >
              LOGIN
            </Link>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1f2f44] border-t border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              <Link to="/" className="py-3 font-semibold border-b border-white/5">HOME</Link>
              <Link to="/about" className="py-3 font-semibold border-b border-white/5">ABOUT US</Link>
              
              {/* SERVICES MOBILE */}
              <div className="border-b border-white/5">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full py-3 flex justify-between items-center font-semibold"
                >
                  SERVICES <FiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 pb-4 flex flex-col gap-3"
                    >
                      {servicesLinks.map(s => (
                        <div key={s.name}>
                          {s.submenu ? (
                            <div className="flex flex-col gap-2">
                              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-2">{s.name}</span>
                              {s.submenu.map(sub => (
                                <Link key={sub.name} to={sub.path} className="text-gray-300 text-sm py-1">{sub.name}</Link>
                              ))}
                            </div>
                          ) : (
                            <Link to={s.path} className="text-gray-300 py-1">{s.name}</Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/apply" className="py-3 font-semibold border-b border-white/5">APPLY</Link>
              <Link to="/contact" className="py-3 font-semibold border-b border-white/5">CONTACT US</Link>

              {/* COLLEGES MOBILE */}
              <div className="border-b border-white/5">
                <button 
                  onClick={() => setMobileCollegesOpen(!mobileCollegesOpen)}
                  className="w-full py-3 flex justify-between items-center font-semibold"
                >
                  PARTNERED COLLEGES <FiChevronDown className={`transition-transform ${mobileCollegesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCollegesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 pb-4 flex flex-col gap-2"
                    >
                      {partneredColleges.map(c => (
                        <Link key={c.name} to={c.path} className="text-gray-300 text-sm py-1">{c.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/file-status" className="py-3 font-semibold border-b border-white/5">FILE STATUS</Link>

              <div className="pt-4">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="w-full bg-red-600 py-3 rounded-xl font-bold">LOGOUT</button>
                ) : (
                  <Link to="/login" className="block text-center w-full bg-blue-600 py-3 rounded-xl font-bold">LOGIN</Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;