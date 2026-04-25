import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { motion } from "framer-motion"; // ✅ ADD THIS

const faqs = [
  {
    question: "What services does 100Transcripts LLP provide?",
    answer:
      "100Transcripts LLP offers certified transcripts, secure E-Transcripts, credential evaluations, and verified degree certificates. They also provide courier delivery, application tracking, and internship opportunities—trusted by thousands across India and partnered with global agencies like WES, IEE, ECE, and TEC.",
  },
  {
    question: "Is the process secure and recognized?",
    answer:
      "Yes, the process is secure and widely recognized. 100 Transcripts LLP is ISO-certified and trusted by over 17,000+ applicants.",
  },
  {
    question: "Which evaluation agencies are supported?",
    answer:
      "We support IEE, ECE, SpanTran, AZICE, WES, IQAS, CES, and UK-NARIC.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Absolutely! Use the Track Application feature on the homepage.",
  },
  {
    question: "Can I choose electronic or physical transcripts?",
    answer:
      "Yes! Choose E-Transcripts or courier delivery.",
  },
  {
    question: "How do I apply for transcript services?",
    answer:
      "Click Apply → Upload Documents. Our team will guide you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 🔥 HEADING WITH MOTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[3px] bg-blue-600"></span>

            <p className="text-sm md:text-base font-bold uppercase text-blue-600 tracking-wider">
              FAQs
            </p>

            <span className="w-12 h-[3px] bg-blue-600"></span>
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4a6d]">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT SIDE WITH MOTION */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="lg:col-span-1 lg:sticky lg:top-24 h-fit"
>
            <div className="mt-0 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition">

  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
    <MessageCircle size={22} />
  </div>

  <h4 className="text-xl font-semibold text-[#2f4a6d] mb-3">
    Need Help?
  </h4>

  <p className="text-gray-500 text-sm mb-6">
    Our support team is ready to guide you through the transcript process step by step.
  </p>

  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-medium text-white">
    <MessageCircle size={18} />
    Contact Support
  </button>

</div>
          </motion.div>

          {/* RIGHT SIDE FAQ WITH STAGGER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="lg:col-span-2 space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`border rounded-3xl transition-all duration-300 ${
                    isOpen
                      ? "border-blue-600 bg-blue-50/30"
                      : "border-gray-200 bg-white hover:border-blue-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span
                      className={`text-lg font-semibold ${
                        isOpen ? "text-blue-700" : "text-[#2f4a6d]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`p-1 rounded-full ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      <div className="h-px w-full bg-gray-200 mb-4"></div>
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;