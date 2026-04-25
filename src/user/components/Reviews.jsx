import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ravi Kumar",
    rating: 5,
    review:
      "Excellent service! The team handled my transcript process very smoothly and delivered on time.",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    review:
      "Very professional and responsive. They kept me updated throughout the process.",
  },
  {
    name: "Arjun Patel",
    rating: 5,
    review:
      "Fast processing and great support. Everything was completed perfectly.",
  },
  {
    name: "Meena Sharma",
    rating: 5,
    review:
      "Trustworthy service. The team guided me step by step.",
  },
  {
    name: "Karthik Reddy",
    rating: 5,
    review:
      "Amazing experience! Very smooth and hassle-free.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Reviews = () => {
  const scrollReviews = [...reviews, ...reviews];

  return (
    <section className="w-full overflow-hidden bg-white py-20">
      <div className="mx-auto mb-14 max-w-7xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[3px] w-12 bg-blue-600"></span>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Reviews
            </p>
            <span className="h-[3px] w-12 bg-blue-600"></span>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-[#2f4a6d] md:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Trusted by thousands of students and professionals across India for
            fast, reliable, and stress-free transcript support.
          </p>
        </motion.div>
      </div>

      <div className="relative flex">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex whitespace-nowrap py-4 animate-marquee"
        >
          {scrollReviews.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group mx-4 flex min-h-[220px] min-w-[290px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl md:min-w-[360px]"
            >
              <div>
                <div className="mb-4 flex items-center gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  ))}
                </div>

                <p className="whitespace-normal text-sm leading-7 text-gray-600 md:text-[15px]">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#2f4a6d]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
