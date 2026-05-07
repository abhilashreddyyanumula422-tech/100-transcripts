import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMapPin, FiExternalLink, FiPhone, FiMail, FiClock, FiAward, FiBook, FiUsers } from "react-icons/fi";

const AnnaUniversity = () => {
  const college = {
    name: "Anna University",
    shortName: "AU",
    type: "Public State University",
    established: "1978",
    location: "Chennai, Tamil Nadu",
    campus: "Urban, 185 acres",
    students: "50,000+",
    ranking: "NIRF Rank 14",
    accreditation: "NAAC 'A++'",
    website: "https://annauniv.edu",
    email: "registrar@annauniv.edu",
    phone: "+91-44-22357170",
    description: "Anna University is a premier technical university in Tamil Nadu, known for its excellence in engineering and technology education. It serves as an affiliating university for numerous engineering colleges across the state.",
    programs: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "MCA", "PhD", "Dual Degree"],
    departments: ["Computer Science", "Mechanical", "Civil", "Electrical", "Electronics", "Information Technology", "Automobile"],
    facilities: ["Central Library", "Research Centers", "Sports Complex", "Hostels", "Innovation Center", "Placement Cell"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Anna_University_chennai.jpg/800px-Anna_University_chennai.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Anna_University_Logo.svg/1200px-Anna_University_Logo.svg.png"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-900 to-green-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${college.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="absolute top-4 left-4 z-10">
          <Link
            to="/universities"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Universities
          </Link>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full p-4 shadow-2xl">
              <img 
                src={college.logo} 
                alt={college.shortName}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{college.name}</h1>
            <p className="text-xl text-white/90">{college.shortName} • {college.type}</p>
          </motion.div>
        </div>
      </div>

      {/* College Information */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FiBook className="w-6 h-6 text-green-600" />
                About {college.shortName}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {college.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{college.students}</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{college.established}</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{college.ranking}</div>
                  <div className="text-sm text-gray-600">Ranking</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{college.accreditation}</div>
                  <div className="text-sm text-gray-600">Accreditation</div>
                </div>
              </div>
            </motion.div>

            {/* Programs Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FiAward className="w-6 h-6 text-green-600" />
                Programs Offered
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {college.programs.map((program, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-center">
                    <span className="text-sm font-semibold text-green-700">{program}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Departments Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FiUsers className="w-6 h-6 text-green-600" />
                Departments
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {college.departments.map((dept, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">{dept}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Location</div>
                    <div className="text-sm text-gray-600">{college.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">{college.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Phone</div>
                    <div className="text-sm text-gray-600">{college.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiExternalLink className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Website</div>
                    <a 
                      href={college.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:text-green-700 underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Apply Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">Need Transcript Services?</h3>
              <p className="text-white/90 mb-4">Get your transcripts from {college.shortName} easily</p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Apply Now
                <FiExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnaUniversity;
