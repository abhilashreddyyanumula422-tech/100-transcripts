import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMapPin, FiExternalLink, FiPhone, FiMail, FiClock, FiAward, FiBook, FiUsers } from "react-icons/fi";

const VITUniversity = () => {
  const college = {
    name: "VIT University",
    shortName: "VIT",
    type: "Private Deemed University",
    established: "1984",
    location: "Vellore, Tamil Nadu",
    campus: "Urban, 725 acres",
    students: "35,000+",
    ranking: "NIRF Rank 12",
    accreditation: "NAAC 'A++'",
    website: "https://vit.ac.in",
    email: "admissions@vit.ac.in",
    phone: "+91-416-2243091",
    description: "VIT University is a premier private institution known for its world-class infrastructure and research excellence. It offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.",
    programs: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD", "B.Sc", "M.Sc", "BBA", "BCA"],
    departments: ["Computer Science", "Mechanical", "Electronics", "Biotechnology", "Management", "Applied Sciences"],
    facilities: ["Smart Campus", "Research Labs", "Sports Complex", "Hostels", "Innovation Center", "Library"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/VIT_University.jpg/800px-VIT_University.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/VIT_University_logo.png/1200px-VIT_University_logo.png"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-900 to-orange-700">
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
                <FiBook className="w-6 h-6 text-orange-600" />
                About {college.shortName}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {college.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{college.students}</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{college.established}</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{college.ranking}</div>
                  <div className="text-sm text-gray-600">Ranking</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{college.accreditation}</div>
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
                <FiAward className="w-6 h-6 text-orange-600" />
                Programs Offered
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {college.programs.map((program, index) => (
                  <div key={index} className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg text-center">
                    <span className="text-sm font-semibold text-orange-700">{program}</span>
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
                <FiUsers className="w-6 h-6 text-orange-600" />
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
                  <FiMapPin className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Location</div>
                    <div className="text-sm text-gray-600">{college.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">{college.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Phone</div>
                    <div className="text-sm text-gray-600">{college.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiExternalLink className="w-5 h-5 text-orange-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Website</div>
                    <a 
                      href={college.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-orange-600 hover:text-orange-700 underline"
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
              className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">Need Transcript Services?</h3>
              <p className="text-white/90 mb-4">Get your transcripts from {college.shortName} easily</p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
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

export default VITUniversity;
