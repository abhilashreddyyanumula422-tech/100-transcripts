import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiMapPin, FiExternalLink, FiPhone, FiMail, FiClock, FiAward, FiBook, FiUsers } from "react-icons/fi";

const CollegeDetail = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  // College data with detailed information
  const collegesData = {
    "jntu-hyderabad": {
      id: "jntu-hyderabad",
      name: "Jawaharlal Nehru Technological University Hyderabad",
      shortName: "JNTUH",
      type: "Public State University",
      established: "1972",
      location: "Hyderabad, Telangana",
      campus: "Urban, 220 acres",
      students: "35,000+",
      ranking: "NIRF Rank 42",
      accreditation: "NAAC 'A++'",
      website: "https://jntuh.ac.in",
      email: "registrar@jntuh.ac.in",
      phone: "+91-40-23156111",
      description: "Jawaharlal Nehru Technological University Hyderabad is a premier public university focusing on engineering and technology education. It is one of the oldest and largest technological universities in India.",
      programs: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD"],
      departments: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical", "Chemical"],
      facilities: ["Digital Library", "Research Centers", "Sports Complex", "Hostels", "Cafeteria"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jntuh_campus.jpg/800px-Jntuh_campus.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jntuh_logo.png/1200px-Jntuh_logo.png"
    },
    "osmania-university": {
      id: "osmania-university",
      name: "Osmania University",
      shortName: "OU",
      type: "Public State University",
      established: "1918",
      location: "Hyderabad, Telangana",
      campus: "Urban, 1300 acres",
      students: "300,000+",
      ranking: "NIRF Rank 73",
      accreditation: "NAAC 'A+'",
      website: "https://osmania.ac.in",
      email: "registrar@osmania.ac.in",
      phone: "+91-40-27098010",
      description: "Osmania University is one of the oldest universities in India, established in 1918. It is known for its rich heritage and academic excellence across various disciplines.",
      programs: ["BA", "BSc", "BCom", "B.Tech", "MA", "MSc", "MCom", "MTech", "MBA", "PhD"],
      departments: ["Arts", "Science", "Commerce", "Engineering", "Management", "Law"],
      facilities: ["Central Library", "Research Labs", "Sports Facilities", "Hostels", "Health Center"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osmania_University_Campus.jpg/800px-Osmania_University_Campus.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osmania_University_logo.svg/1200px-Osmania_University_logo.svg.png"
    },
    "university-hyderabad": {
      id: "university-hyderabad",
      name: "University of Hyderabad",
      shortName: "UoH",
      type: "Central University",
      established: "1974",
      location: "Hyderabad, Telangana",
      campus: "Suburban, 2300 acres",
      students: "5,000+",
      ranking: "NIRF Rank 7",
      accreditation: "NAAC 'A++'",
      website: "https://uohyd.ac.in",
      email: "registrar@uohyd.ac.in",
      phone: "+91-40-23132100",
      description: "University of Hyderabad is a premier central university known for its research excellence and interdisciplinary approach to education.",
      programs: ["MA", "MSc", "MTech", "MBA", "MCA", "PhD"],
      departments: ["Computer Science", "Physics", "Chemistry", "Mathematics", "Biology", "Economics"],
      facilities: ["Advanced Research Labs", "Central Library", "Sports Complex", "Hostels", "Healthcare"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Uoh_hyderabad_campus.jpg/800px-Uoh_hyderabad_campus.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Uoh_logo.svg/1200px-Uoh_logo.svg.png"
    },
    "anna-university": {
      id: "anna-university",
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
      description: "Anna University is a premier technical university in Tamil Nadu, known for its excellence in engineering and technology education.",
      programs: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "MCA", "PhD"],
      departments: ["Computer Science", "Mechanical", "Civil", "Electrical", "Electronics", "Information Technology"],
      facilities: ["Central Library", "Research Centers", "Sports Complex", "Hostels", "Innovation Center"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Anna_University_chennai.jpg/800px-Anna_University_chennai.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Anna_University_Logo.svg/1200px-Anna_University_Logo.svg.png"
    },
    "vit-university": {
      id: "vit-university",
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
      description: "VIT University is a premier private institution known for its world-class infrastructure and research excellence.",
      programs: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD", "B.Sc", "M.Sc"],
      departments: ["Computer Science", "Mechanical", "Electronics", "Biotechnology", "Management"],
      facilities: ["Smart Campus", "Research Labs", "Sports Complex", "Hostels", "Innovation Center"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/VIT_University.jpg/800px-VIT_University.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/VIT_University_logo.png/1200px-VIT_University_logo.png"
    },
    "iit-madras": {
      id: "iit-madras",
      name: "Indian Institute of Technology Madras",
      shortName: "IITM",
      type: "Institute of National Importance",
      established: "1959",
      location: "Chennai, Tamil Nadu",
      campus: "Urban, 620 acres",
      students: "10,000+",
      ranking: "NIRF Rank 1",
      accreditation: "NAAC 'A++'",
      website: "https://iitm.ac.in",
      email: "registrar@iitm.ac.in",
      phone: "+91-44-22578000",
      description: "IIT Madras is one of the premier engineering institutions in India, known for its academic excellence and research contributions.",
      programs: ["B.Tech", "M.Tech", "M.Sc", "MBA", "PhD", "Dual Degree"],
      departments: ["Computer Science", "Mechanical", "Electrical", "Civil", "Aerospace", "Chemical"],
      facilities: ["Advanced Research Labs", "Central Library", "Sports Complex", "Hostels", "Innovation Center"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/IIT_Madras.jpg/800px-IIT_Madras.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/IITM_logo.png/1200px-IITM_logo.png"
    }
  };

  useEffect(() => {
    // Simulate loading college data
    setTimeout(() => {
      const collegeData = collegesData[collegeId];
      setCollege(collegeData);
      setLoading(false);
    }, 500);
  }, [collegeId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading college details...</p>
        </div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">College Not Found</h2>
          <p className="text-gray-600 mb-6">The college you're looking for doesn't exist.</p>
          <Link 
            to="/universities"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Universities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${college.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Link
            to="/universities"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Universities
          </Link>
        </div>

        {/* College Logo and Name */}
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
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <span class="text-3xl font-bold text-blue-600">${college.shortName}</span>
                    </div>
                  `;
                }}
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
                <FiBook className="w-6 h-6 text-blue-600" />
                About {college.shortName}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {college.description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{college.students}</div>
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
                <FiAward className="w-6 h-6 text-blue-600" />
                Programs Offered
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {college.programs.map((program, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-center">
                    <span className="text-sm font-semibold text-blue-700">{program}</span>
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
                <FiUsers className="w-6 h-6 text-blue-600" />
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
                  <FiMapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Location</div>
                    <div className="text-sm text-gray-600">{college.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">{college.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Phone</div>
                    <div className="text-sm text-gray-600">{college.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiExternalLink className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Website</div>
                    <a 
                      href={college.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Campus Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Campus Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Campus Size</div>
                    <div className="text-sm text-gray-600">{college.campus}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiClock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Type</div>
                    <div className="text-sm text-gray-600">{college.type}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Facilities</h3>
              <div className="space-y-2">
                {college.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Apply Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">Need Transcript Services?</h3>
              <p className="text-white/90 mb-4">Get your transcripts from {college.shortName} easily</p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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

export default CollegeDetail;
