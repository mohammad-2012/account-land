// src/components/PageNotFound.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-br from-[#01050c] via-[#0a0f1a] to-[#01050c]"
            : "bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff]"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
        <div className="text-center">
          <div className="text-[160px] md:text-[200px] font-black leading-none select-none tracking-wide">
            <span className={isDark ? "text-white" : "text-gray-900"}>404</span>
          </div>

          <div className="mt-2 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-heading">
              Page Not Found
            </h1>

            <p className="text-base md:text-lg text-muted">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Link
            to="/"
            className="px-5 py-2 text-sm rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
              color: isDark ? "#01050c" : "#0a0f1a",
              boxShadow: "0 0 15px rgba(0, 242, 255, 0.3)",
            }}
          >
            Back to Home
          </Link>

          <Link
            to={-1}
            className={`px-5 py-2 text-sm rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 ${
              isDark
                ? "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                : "border-neon-blue text-neon-blue hover:bg-neon-blue/10"
            }`}
          >
            Go Back
          </Link>
        </div>

        <div className="absolute -bottom-10 left-0 right-0 text-center text-xs">
          <span className="text-muted">Error 404 • Resource Not Found</span>
        </div>
      </div>
    </div>
  );
}
