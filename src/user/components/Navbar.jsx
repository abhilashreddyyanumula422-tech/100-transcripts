import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
 
const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [collegesDropdown, setCollegesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCollegesOpen, setMobileCollegesOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "APPLY", path: "/apply" },
    { name: "CONTACT US", path: "/contact" },
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
 
  const servicesLinks = [
    { name: "Credential Evaluation", path: "/services/credential" },
    { name: "Certificates", path: "/services/certificates" },
    { name: "Verification", path: "/services/verification" },
  ];
 
  const desktopDropdownWrapper =
    "absolute left-0 top-full pt-3";
  const desktopDropdown =
    "w-80 overflow-hidden rounded-xl border border-slate-700 bg-[#1f2f44] py-2 text-white shadow-2xl";
  const desktopDropdownItem =
    "block px-6 py-4 font-semibold transition-colors hover:bg-white/10 hover:text-blue-300";
 
  return (
    <nav className="fixed z-[100] w-full bg-[#2f4a6d] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="whitespace-nowrap text-2xl font-bold md:text-3xl"
          >
            <span className="text-[#3b82f6]">100</span> Transcripts
          </Link>
        </div>
 
        <div className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold xl:gap-12 xl:text-base">
            <li>
              <Link
                to="/"
                className="uppercase transition-colors hover:text-blue-300"
              >
                HOME
              </Link>
            </li>
 
            <li>
              <Link
                to="/about"
                className="uppercase transition-colors hover:text-blue-300"
              >
                ABOUT
              </Link>
            </li>
 
            <li
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 uppercase transition-colors hover:text-blue-300"
              >
                SERVICES <FiChevronDown size={18} />
              </button>
 
              {servicesDropdown && (
                <div className={desktopDropdownWrapper}>
                  <div className={desktopDropdown}>
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={desktopDropdownItem}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
 
            <li>
              <Link
                to="/apply"
                className="uppercase transition-colors hover:text-blue-300"
              >
                APPLY
              </Link>
            </li>
 
            <li>
              <Link
                to="/contact"
                className="uppercase transition-colors hover:text-blue-300"
              >
                CONTACT US
              </Link>
            </li>
 
            <li
              className="relative"
              onMouseEnter={() => setCollegesDropdown(true)}
              onMouseLeave={() => setCollegesDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 uppercase transition-colors hover:text-blue-300"
              >
                PARTNERED COLLEGES <FiChevronDown size={18} />
              </button>
 
              {collegesDropdown && (
                <div className="absolute right-0 top-full pt-3">
                  <div className={desktopDropdown}>
                    {partneredColleges.map((college) => (
                      <Link
                        key={college.name}
                        to={college.path}
                        className={desktopDropdownItem}
                      >
                        {college.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
 
        <div className="hidden flex-shrink-0 items-center justify-end lg:flex">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 active:scale-95"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-[#3b82f6] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 active:scale-95"
            >
              LOGIN
            </Link>
          )}
        </div>
 
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
 
      {isMobileMenuOpen && (
        <div className="animate-in slide-in-from-top border-t border-white/10 bg-[#2f4a6d] shadow-2xl duration-300 lg:hidden">
          <ul className="flex flex-col space-y-3 p-6 font-bold tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 transition-colors hover:text-blue-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
 
            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between py-2 text-left transition-colors hover:text-blue-300"
              >
                <span>SERVICES</span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
 
              {mobileServicesOpen && (
                <div className="mt-2 space-y-2 rounded-xl bg-white/5 p-3">
                  {servicesLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-blue-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
 
            <li>
              <button
                type="button"
                onClick={() => setMobileCollegesOpen(!mobileCollegesOpen)}
                className="flex w-full items-center justify-between py-2 text-left transition-colors hover:text-blue-300"
              >
                <span>PARTNERED COLLEGES</span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobileCollegesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
 
              {mobileCollegesOpen && (
                <div className="mt-2 space-y-2 rounded-xl bg-white/5 p-3">
                  {partneredColleges.map((college) => (
                    <Link
                      key={college.name}
                      to={college.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-blue-300"
                    >
                      {college.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
 
            <li className="border-t border-white/10 pt-4">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-full rounded-2xl bg-red-500 py-4 text-center shadow-lg"
                >
                  LOGOUT
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-2xl bg-[#3b82f6] py-4 text-center shadow-lg"
                >
                  LOGIN / REGISTER
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
 
export default Navbar;
 
 