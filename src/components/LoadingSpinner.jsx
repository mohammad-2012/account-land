import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-[#01050c]" : "bg-[#f0f9ff]"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-neon-cyan/30 animate-ping" />
          <div className="absolute inset-2 rounded-full border-4 border-t-neon-cyan border-r-neon-purple border-b-neon-mint border-l-neon-blue animate-spin" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 backdrop-blur-sm" />
        </div>

        <div className="flex gap-1">
          <span className="text-neon-cyan text-2xl animate-pulse leading-3">
            .
          </span>
          <span
            className="text-neon-purple text-2xl animate-pulse leading-3"
            style={{ animationDelay: "0.2s" }}
          >
            .
          </span>
          <span
            className="text-neon-mint text-2xl animate-pulse leading-3"
            style={{ animationDelay: "0.4s" }}
          >
            .
          </span>
        </div>
      </div>
    </div>
  );
}
