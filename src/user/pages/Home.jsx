import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import WhyChoose from "../components/WhyChoose";
import UniversitySearch from "../components/UniversitySearch";
import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";

import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <HeroSection />

      <WhoWeAre />

      <WhyChoose />

      <UniversitySearch />

      <Partners />

      <Reviews />

      <FAQ />

      {/* FLOATING WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send/?phone=%2B919941991402&text=Hi&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] group"
      >
        <div className="relative flex items-center justify-center">

          {/* PULSE */}
          <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-30 animate-ping"></span>

          {/* BUTTON */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 group-hover:scale-110">
            <FaWhatsapp size={30} />
          </div>

        </div>
      </a>
    </>
  );
};

export default Home;