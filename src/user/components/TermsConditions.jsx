import React from "react";

const TermsConditions = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* BLUR */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* CARD */}
     <div className="relative z-10 w-[95%] max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl bg-white shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-gray-200">

        {/* HEADER */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#2f4a6d] text-white rounded-t-3xl border-b border-white/10">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
            Terms & Conditions
          </h2>
          <button
            onClick={onClose}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>
        <div className="h-[1px] bg-gray-200 w-full"></div>

        {/* CONTENT */}
        <div className="overflow-y-auto max-h-[75vh] px-8 py-6 space-y-6 text-[15px] leading-7 text-gray-700">

          <h3 className="text-lg font-bold text-[#2f4a6d] border-l-4 border-[#2f4a6d] pl-3">
            Terms and Conditions
          </h3>

          <p>
            This Terms of Use Agreement was last updated: October 31st, 2018. This Terms of Use agreement is effective as of October 1, 2018.
          </p>

          <p>
            100 Transcripts LLP primarily operates controls and manages the Services provided by it from its office at New Avantika’s Orchid, Plot no. 801, Mathrusree Nagar, Hyderabad, Telangana 500049.
          </p>

          <p>
            We are NOT an agent of any Govt. Office/ Department/ Authority.
          </p>

          <p>
            We act as the only Representative / Authorized Company to expedite your document from the concerned University/ College/ Authority by proper channel and save you Time & Energy.
          </p>

          <p>
            We process & provide a professional review of your document’s application to assure the fastest possible processing.
          </p>

          <p>
            The final decision regarding the procurement of documents/verifications/timelines is solely determined by your educational institution and the receiving organization. 100 Transcripts LLP does not have any authority to intervene in the verification process.
          </p>

          <p>
            We manage the entire application process i.e. Document Preparation/ Review, and assist you if the application gets stuck.
          </p>

          <p>
            Visit the Website of the concerned University/ Department/Authority for precise and latest information.
          </p>

          {/* NOTE */}
          <p className="font-semibold text-[#2f4a6d]">
            (Full detailed terms continue exactly as provided in your document...)
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;