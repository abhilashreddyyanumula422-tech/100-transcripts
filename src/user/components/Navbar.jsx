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
    {
      name: "Bhaskar Pharmacy College",
      path: "/partnered-colleges/bhaskar-pharmacy-college",
    },
    {
      name: "Joginpally B.R Pharmacy College",
      path: "/partnered-colleges/joginpally-br-pharmacy-college",
    },
    {
      name: "Siddhartha Institute of Technology & Sciences",
      path: "/partnered-colleges/siddhartha-institute-of-technology-sciences",
    },
  ];

  const dropdownStyle =
    "w-80 rounded-xl border border-slate-700 bg-[#1f2f44] py-2 text-white shadow-2xl";
  const itemStyle =
    "block px-6 py-4 font-semibold hover:bg-white/10 cursor-pointer transition-colors";

  return (
    <nav className="fixed z-[100] w-full bg-[#3b5b82] text-white border-b border-[#e2e8f0]/10 shadow-md backdrop-blur-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-blue-400">100</span>
          <span>Transcripts</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 items-center font-semibold uppercase text-sm tracking-wide">
          <li><Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link></li>
          <li><Link to="/about" className="hover:text-blue-300 transition-colors">ABOUT</Link></li>

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
                      <div key={item.name} className="relative">
                        {item.submenu ? (
                          <>
                            <div
                              onClick={() =>
                                setActiveSubMenu(
                                  activeSubMenu === index ? null : index
                                )
                              }
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
                                  className="absolute left-full top-0 w-80 bg-[#1f2f44] border border-slate-700 rounded-xl py-2 shadow-2xl ml-2"
                                >
                                  {item.submenu.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.path}
                                      className={itemStyle}
                                      onClick={() => setServicesDropdown(false)}
                                    >
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

          <li><Link to="/apply" className="hover:text-blue-300 transition-colors">APPLY</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 transition-colors">CONTACT US</Link></li>

          {/* COLLEGES */}
          <li className="relative colleges-menu">
            <button
              onClick={() => {
                setCollegesDropdown(!collegesDropdown);
                setServicesDropdown(false);
              }}
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
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

        {/* LOGIN */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-red-500/20"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            >
              LOGIN
            </Link>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
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
            className="lg:hidden bg-[#2f4a6d] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 font-semibold">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-300">HOME</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-300">ABOUT</Link>

              {/* MOBILE SERVICES */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full hover:text-blue-300"
                >
                  SERVICES <FiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-3 space-y-3 border-l-2 border-white/10"
                    >
                      {servicesLinks.map((item) => (
                        <div key={item.name} className="space-y-2">
                          <p className="text-xs text-blue-300 uppercase tracking-widest">{item.name}</p>
                          {item.submenu ? (
                            <div className="pl-2 space-y-2">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-sm hover:text-blue-200"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm hover:text-blue-200"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-300">APPLY</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-300">CONTACT</Link>

              {/* MOBILE COLLEGES */}
              <div>
                <button
                  onClick={() => setMobileCollegesOpen(!mobileCollegesOpen)}
                  className="flex items-center justify-between w-full hover:text-blue-300"
                >
                  PARTNERED COLLEGES <FiChevronDown className={`transition-transform ${mobileCollegesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCollegesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-3 space-y-3 border-l-2 border-white/10"
                    >
                      {partneredColleges.map((c) => (
                        <Link
                          key={c.name}
                          to={c.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm hover:text-blue-200"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MOBILE LOGIN/LOGOUT */}
              <div className="pt-4 border-t border-white/10">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 py-3 rounded-xl font-bold active:scale-95 transition-transform"
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-blue-500 py-3 rounded-xl font-bold text-center active:scale-95 transition-transform"
                  >
                    LOGIN
                  </Link>
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