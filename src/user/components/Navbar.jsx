import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const handleLogout = () => {
    navigate("/logout");
    setIsMobileMenuOpen(false);
  };

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
    { name: "Verification", path: "/services/verification" },
  ];

  const partneredColleges = [
    { name: "Bhaskar Pharmacy College", path: "/partnered-colleges/bhaskar-pharmacy-college" },
    { name: "Joginpally B.R Pharmacy College", path: "/partnered-colleges/joginpally-br-pharmacy-college" },
    { name: "Siddhartha Institute of Technology & Sciences", path: "/partnered-colleges/siddhartha-institute-of-technology-sciences" },
  ];

  // Updated Styles for White Theme
  const dropdownStyle = "w-80 rounded-xl border border-slate-200 bg-white py-2 text-slate-800 shadow-xl";
  const itemStyle = "block px-6 py-4 font-semibold hover:bg-slate-50 hover:text-purple-600 cursor-pointer transition-colors";

  return (
    <nav className="fixed z-[100] w-full bg-white/90 text-slate-800 border-b border-slate-200 shadow-sm backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-purple-600">100</span>
          <span className="text-slate-900">Transcripts</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 items-center font-bold uppercase text-[13px] tracking-wider text-slate-600">
          <li><Link to="/" className="hover:text-purple-600 transition-colors">HOME</Link></li>
          <li><Link to="/about" className="hover:text-purple-600 transition-colors">ABOUT</Link></li>

          {/* SERVICES */}
          <li className="relative services-menu">
            <button
              onClick={() => {
                setServicesDropdown(!servicesDropdown);
                setCollegesDropdown(false);
              }}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors"
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
                      <div key={item.name} className="relative">
                        {item.submenu ? (
                          <>
                            <div
                              onClick={() => setActiveSubMenu(activeSubMenu === index ? null : index)}
                              className={`${itemStyle} flex justify-between items-center`}
                            >
                              {item.name}
                              <FiChevronRight className={`transition-transform ${activeSubMenu === index ? 'rotate-90' : ''}`} />
                            </div>

                            <AnimatePresence>
                              {activeSubMenu === index && (
                                <motion.div
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  className="absolute left-full top-0 w-80 bg-white border border-slate-200 rounded-xl py-2 shadow-xl ml-2"
                                >
                                  {item.submenu.map((sub) => (
                                    <Link key={sub.name} to={sub.path} className={itemStyle} onClick={() => setServicesDropdown(false)}>
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link to={item.path} className={itemStyle} onClick={() => setServicesDropdown(false)}>
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

          <li><Link to="/apply" className="hover:text-purple-600 transition-colors">APPLY</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600 transition-colors">CONTACT US</Link></li>
          <li><Link to="/universities" className="hover:text-purple-600 transition-colors">UNIVERSITIES</Link></li>

          {/* COLLEGES */}
          <li className="relative colleges-menu">
            <button
              onClick={() => {
                setCollegesDropdown(!collegesDropdown);
                setServicesDropdown(false);
              }}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors"
            >
              PARTNERED <FiChevronDown className={`transition-transform ${collegesDropdown ? 'rotate-180' : ''}`} />
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
                      <Link key={c.name} to={c.path} className={itemStyle} onClick={() => setCollegesDropdown(false)}>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* BUTTONS */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all">
              LOGOUT
            </button>
          ) : (
            <Link to="/login" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all">
              LOGIN
            </Link>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors">
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden text-slate-800 shadow-inner"
          >
            <div className="flex flex-col p-6 space-y-4 font-bold">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">HOME</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">ABOUT</Link>
              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">APPLY</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">CONTACT US</Link>
              <Link to="/universities" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-600">UNIVERSITIES</Link>

              {/* MOBILE SERVICES */}
              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full hover:text-purple-600">
                  SERVICES <FiChevronDown className={mobileServicesOpen ? 'rotate-180' : ''} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pl-4 mt-3 space-y-3 border-l-2 border-slate-100">
                      {servicesLinks.map((item) => (
                        <div key={item.name} className="space-y-2">
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest">{item.name}</p>
                          {item.submenu ? (
                            <div className="pl-2 space-y-2">
                              {item.submenu.map((sub) => (
                                <Link key={sub.name} to={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold hover:text-purple-600">
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold hover:text-purple-600">
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MOBILE COLLEGES */}
              <div>
                <button onClick={() => setMobileCollegesOpen(!mobileCollegesOpen)} className="flex items-center justify-between w-full hover:text-purple-600">
                  PARTNERED COLLEGES <FiChevronDown className={mobileCollegesOpen ? 'rotate-180' : ''} />
                </button>
                <AnimatePresence>
                  {mobileCollegesOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pl-4 mt-3 space-y-3 border-l-2 border-slate-100">
                      {partneredColleges.map((c) => (
                        <Link key={c.name} to={c.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-purple-600">
                          {c.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-slate-100">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="w-full inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all">LOGOUT</button>
                ) : (
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all text-center">LOGIN</Link>
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