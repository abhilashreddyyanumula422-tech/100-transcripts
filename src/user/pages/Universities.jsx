import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import collegesData from "../data/collegesData";

const universities = [
  "JNTU Hyderabad", "Osmania University", "University of Hyderabad", "JNTU Kakinada", "JNTU Anantapur",
  "Andhra University", "Sri Venkateswara University", "Kakatiya University", "SV University", "Acharya Nagarjuna University",
  "University of Mumbai", "University of Pune", "Savitribai Phule Pune University", "University of Delhi", "Jawaharlal Nehru University",
  "Banaras Hindu University", "Aligarh Muslim University", "University of Calcutta", "University of Madras", "Anna University",
  "IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Kharagpur",
  "NIT Trichy", "NIT Warangal", "NIT Surathkal", "NIT Rourkela", "BITS Pilani",
  "VIT Vellore", "SRM University", "Manipal University", "Amrita University", "Christ University",
  "Jain University", "Bangalore University", "Mysore University", "Karnataka University", "Gulbarga University",
  "Kuvempu University", "Mangalore University", "Rajiv Gandhi University", "Tezpur University", "Dibrugarh University",
  "Gauhati University", "Assam University", "North Eastern Hill University", "Punjab University", "Panjab University Chandigarh",
  "Guru Nanak Dev University", "Punjabi University", "Thapar University", "Lovely Professional University", "Chandigarh University",
  "University of Rajasthan", "Rajasthan Technical University", "Maharshi Dayanand University", "Kurukshetra University", "Guru Jambheshwar University",
  "Chaudhary Charan Singh University", "Dr. B.R. Ambedkar University", "University of Lucknow", "Banasthali University", "Amity University",
  "Sharda University", "Galgotias University", "Jamia Millia Islamia", "Jamia Hamdard", "Bundelkhand University",
  "Chhatrapati Shahu Ji Maharaj University", "Dr. A.P.J. Abdul Kalam Technical University", "Madan Mohan Malaviya University", "University of Allahabad",
  "Sam Higginbottom University", "English and Foreign Languages University", "NALSAR University of Law", "Jadavpur University", "Presidency University",
  "St. Xavier's College", "University of Burdwan", "Kalyani University", "Vidyasagar University", "North Bengal University",
  "Bharath University", "SASTRA University", "PSG College of Technology", "Loyola College", "Madras Christian College",
  "Hindustan University", "Sathyabama University", "Vel Tech University", "Vels University", "Saveetha University",
  "Sri Ramachandra University", "Cochin University of Science and Technology", "Mahatma Gandhi University", "Calicut University", "Kannur University",
  "Indian Institute of Technology Palakkad", "Indian Institute of Technology Tirupati", "Indian Institute of Technology Dharwad", "Indian Institute of Technology Bhilai",
  "Indian Institute of Technology Goa", "Indian Institute of Technology Jammu", "Indian Institute of Technology Bhubaneswar", "Indian Institute of Technology Guwahati",
  "Indian Institute of Technology Ropar", "Indian Institute of Technology Mandi", "Indian Institute of Technology Indore", "Indian Institute of Technology Jodhpur",
  "Indian Institute of Technology Hyderabad", "Indian Institute of Technology Patna", "Indian Institute of Technology Gandhinagar", "Indian Institute of Technology Roorkee",
  "Indian Institute of Technology Varanasi", "Indian Institute of Technology Chennai", "National Institute of Technology Delhi", "National Institute of Technology Srinagar",
  "National Institute of Technology Hamirpur", "National Institute of Technology Jalandhar", "National Institute of Technology Kurukshetra", "National Institute of Technology Allahabad",
  "National Institute of Technology Patna", "National Institute of Technology Jamshedpur", "National Institute of Technology Durgapur", "National Institute of Technology Silchar",
  "National Institute of Technology Agartala", "National Institute of Technology Nagpur", "National Institute of Technology Raipur", "National Institute of Technology Puducherry",
  "National Institute of Technology Goa", "National Institute of Technology Andhra Pradesh", "National Institute of Technology Uttarakhand", "National Institute of Technology Sikkim",
  "National Institute of Technology Manipur", "National Institute of Technology Meghalaya", "National Institute of Technology Mizoram", "National Institute of Technology Nagaland",
  "National Institute of Technology Arunachal Pradesh", "Birla Institute of Technology Mesra", "Birla Institute of Technology Pilani", "Birla Institute of Technology Goa",
  "Birla Institute of Technology Hyderabad", "Birla Institute of Technology Jaipur", "Birla Institute of Technology Dubai", "VIT Bhopal", "VIT Chennai",
  "VIT Amaravati", "VIT Bangalore", "SRM Institute of Science and Technology", "SRM University Delhi NCR", "SRM University Sonepat",
  "SRM University Haryana", "Amrita School of Engineering", "Amrita School of Business", "Amrita School of Medicine", "Amrita School of Arts and Sciences",
  "Manipal Academy of Higher Education", "Manipal Institute of Technology", "Manipal College of Pharmaceutical Sciences", "Manipal College of Dental Sciences", "Kasturba Medical College",
  "Jawaharlal Institute of Postgraduate Medical Education", "Christian Medical College", "Armed Forces Medical College", "St. John's Medical College", "Lady Hardinge Medical College",
  "Maulana Azad Medical College", "All India Institute of Medical Sciences", "Post Graduate Institute of Medical Education", "Christian Medical College Vellore", "JIPMER Puducherry",
  "National Institute of Mental Health", "Tata Memorial Hospital", "Kidwai Memorial Institute", "Chittaranjan National Cancer Institute", "Sri Ramachandra Medical College",
  "Saveetha Medical College", "Sri Venkateswara Medical College", "Osmania Medical College", "Gandhi Medical College", "Kakatiya Medical College",
  "Andhra Medical College", "Guntur Medical College", "Kurnool Medical College", "Rajiv Gandhi University of Health Sciences", "Bangalore Medical College",
  "Mysore Medical College", "Kasturba Medical College Manipal", "Kasturba Medical College Mangalore", "Father Muller Medical College", "St. John's Medical College Bangalore",
  "M.S. Ramaiah Medical College", "Kempegowda Institute of Medical Sciences", "Vydehi Institute of Medical Sciences", "Apollo Hospitals Educational", "Yenepoya University",
  "Nitte University", "JSS University", "M.S. Ramaiah University", "Dayananda Sagar University", "Alliance University",
  "Azim Premji University", "PES University", "BMS College of Engineering", "R.V. College of Engineering", "M.S. Ramaiah Institute of Technology",
  "Bangalore Institute of Technology", "University Visvesvaraya College", "Central College Bangalore", "National College Bangalore", "Mount Carmel College",
  "St. Joseph's College", "Jyoti Nivas College", "Bishop Cotton College", "Sophia College", "Elphinstone College",
  "St. Xavier's College Mumbai", "Hindu College", "St. Stephen's College", "Miranda House", "Lady Shri Ram College",
  "Hansraj College", "Kirori Mal College", "Ramjas College", "Shri Ram College", "Lady Irwin College",
  "Indraprastha College", "Jesus and Mary College", "Maitreyi College", "Gargi College", "Kamla Nehru College",
  "Acharya Narendra Dev College", "Deen Dayal Upadhyaya College", "Shaheed Sukhdev College", "Netaji Subhas University", "Bhagat Singh College",
  "Sri Venkateswara College", "Zakir Husain College"
];

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length > 0) {
      const filtered = universities.filter(uni => 
        uni.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUniversities(filtered);
      setShowResults(true);
    } else {
      setFilteredUniversities([]);
      setShowResults(false);
    }
  };

  const selectUniversity = (uni) => {
    setSearchTerm(uni);
    setShowResults(false);
  };
  
  const colleges = Object.entries(collegesData).map(([id, data]) => ({
    id,
    ...data,
  }));

  const filteredColleges = colleges.filter((college) =>
    college.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.short.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br  from-blue-600 via-cyan-500 to-sky-500 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-[3px] w-16 bg-white/60" />
              <p className="text-sm font-bold uppercase tracking-widest text-white/90">
                Partnered Colleges
              </p>
              <span className="h-[3px] w-16 bg-white/60" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Our Partnered Universities
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
              We partner with leading universities and colleges across India to provide 
              seamless transcript and document services for students.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-white">50+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Colleges</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-white">15+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">States</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Success</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COLLEGES GRID */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px), linear-gradient(#3b82f6 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search universities by name..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-lg"
              />

              {/* SEARCH RESULTS DROPDOWN */}
              {showResults && filteredUniversities.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-80 overflow-y-auto z-50">
                  {filteredUniversities.slice(0, 50).map((uni, index) => (
                    <div
                      key={index}
                      onClick={() => selectUniversity(uni)}
                      className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <p className="text-sm font-semibold text-slate-700">{uni}</p>
                    </div>
                  ))}
                </div>
              )}

              {showResults && filteredUniversities.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
                  <p className="text-slate-500 text-center">No universities found</p>
                </div>
              )}
            </div>
            {searchTerm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-slate-500 mt-3 font-medium"
              >
                Found {filteredUniversities.length} universit{filteredUniversities.length !== 1 ? 'ies' : 'y'}
              </motion.p>
            )}
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/partnered-colleges/${college.id}`}
                  className="group block h-full"
                >
                  <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br  from-blue-600 via-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* College Logo */}
                      <div className="mx-auto mb-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-white/20 group-hover:to-white/30 transition-all duration-500 group-hover:scale-110">
                        <span className="text-2xl font-black text-blue-700 group-hover:text-white transition-colors duration-500">
                          {college.short}
                        </span>
                      </div>

                      {/* College Name */}
                      <h3 className="text-center text-sm font-bold text-slate-800 leading-tight group-hover:text-white transition-colors duration-500">
                        {college.title.split("for")[0].trim()}
                      </h3>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white/90">Expanding Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Can't Find Your College?
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              We're constantly expanding our network. Contact us to learn how we can 
              help with transcript services from your university.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-xl shadow-white/20 hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Universities;
