import { useDarkModeShadow } from "../context/DarkModeShadow";
import FeaturesSection from "../components/about-us/FeaturesSection";
import ServicesSection from "../components/about-us/ServicesSection";
import HeroSection from "../components/about-us/HeroSection";
import MissionSection from "../components/about-us/MissionSection";
import CtaSection from "../components/about-us/CtaSection";

export default function AboutUs() {
  const { darkModeShadow, isDarkMode } = useDarkModeShadow();

  return (
    <div className="min-h-screen pb-2 pt-4" dir="rtl">
      <div
        className={`fixed inset-0 -z-10 transition-all duration-700 ${
          isDarkMode
            ? "bg-gradient-to-br from-[#01050c] via-[#0a0f1a] to-[#01050c]"
            : "bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff]"
        }`}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <HeroSection isDarkMode={isDarkMode} />
        <MissionSection
          isDarkMode={isDarkMode}
          darkModeShadow={darkModeShadow}
        />
        <FeaturesSection
          isDarkMode={isDarkMode}
          darkModeShadow={darkModeShadow}
        />
        <ServicesSection
          isDarkMode={isDarkMode}
          darkModeShadow={darkModeShadow}
        />
        <CtaSection isDarkMode={isDarkMode} darkModeShadow={darkModeShadow} />
      </div>
    </div>
  );
}
