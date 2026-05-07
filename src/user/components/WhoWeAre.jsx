import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Global Partnerships",
    description: "Official partner support for IEE, ECE, and SpanTran applications",
    icon: "🌍",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Expert Guidance",
    description: "Guidance for WES, IQAS, CES, and UK ENIC document processing",
    icon: "📋",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Certified Excellence",
    description: "ISO-certified service workflow with pan-India university coverage",
    icon: "✨",
    color: "from-cyan-500 to-blue-600",
  },
];

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-blue-600 bg-blue-50 rounded-full border-2 border-blue-200"
          >
            WHO WE ARE
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Trusted Partner for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Global Education
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            At <span className="font-bold text-blue-600">100 Transcripts LLP</span>, we've helped over 
            <span className="font-extrabold text-blue-600"> 17,000+ students</span> achieve their dreams with 
            fast, reliable, and secure transcript services across India.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "17K+", label: "Happy Students" },
            { value: "500+", label: "Universities" },
            { value: "99%", label: "Success Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Location Section with Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* gap-12 adds more space between the Map and the Text */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Map Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Visit Our Office</h3>
                    <p className="text-blue-100 text-sm">Hyderabad, Telangana, India</p>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 bg-white/20 rounded-full items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="overflow-hidden rounded-2xl border border-gray-200 mb-6">
                  <iframe
                    title="100 Transcripts LLP Location"
                    src="https://maps.google.com/maps?q=100%20Transcripts%20LLP%20Hyderabad&output=embed"
                    className="h-[250px] w-full border-0"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-gray-600 text-sm text-center sm:text-left">
                    100 Transcripts LLP, 3rd Floor, Sri Srinivasam, Plot No. 1133/1, Mathrusree Nagar, Hafeezpet
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.google.com/maps/place/100+Transcripts+LLP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all whitespace-nowrap"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Info (Middle Aligned with Extra Space) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col justify-center space-y-8 lg:pl-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Simplifying Academic Credentials for a{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Global Future
                  </span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Founded with the vision to streamline transcript procurement, 100 Transcripts LLP bridges students and institutions worldwide with secure, efficient document delivery—leveraging <span className="font-bold text-blue-600">15+ years of experience</span> in academic documentation and international credential evaluations.
                </p>
              </div>

              <div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all"
                >
                  Learn More About Us
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;