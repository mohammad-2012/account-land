import { useDarkMode } from "../context/DarkModeContext";
import AboutSection from "./AboutSection";
import QuickLinksSection from "./QuickLinksSection";
import ContactSection from "./ContactSection";
import WorkingHoursSection from "./WorkingHoursSection";
import BottomBar from "./BottomBar";

export default function Footer() {
  const { isDarkMode } = useDarkMode();

  const getCurrentPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "";
  };

  const currentPath = getCurrentPath();

  return (
    <footer
      className="relative mt-20 transition-all duration-500"
      style={{
        backgroundColor: isDarkMode ? "#01050c" : "#ffffff",
        borderTop: `1px solid ${isDarkMode ? "rgba(0, 242, 255, 0.15)" : "rgba(0, 180, 216, 0.2)"}`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: isDarkMode
            ? "linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), var(--neon-cyan), transparent)"
            : "linear-gradient(90deg, transparent, var(--neon-blue), var(--neon-cyan), var(--neon-blue), transparent)",
          animation: "borderFlow 3s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          <AboutSection isDarkMode={isDarkMode} />
          <QuickLinksSection
            currentPath={currentPath}
            isDarkMode={isDarkMode}
          />
          <ContactSection isDarkMode={isDarkMode} />
          <WorkingHoursSection isDarkMode={isDarkMode} />
        </div>
        <BottomBar />
      </div>

      <style jsx>{`
        @keyframes borderFlow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
}
