import { useDarkMode } from "../context/DarkModeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative button-53 flex items-center justify-center transition-all duration-500 overflow-hidden group/theme"
      style={{
        background:
          "linear-gradient(135deg, var(--color-cta), var(--color-accent))",
        color: "#000000",
        border: "none",
        padding: "0.5rem",
        fontSize: "0.85rem",
        fontWeight: "600",
        borderRadius: "0.5rem",
        width: "36px",
        height: "36px",
        boxShadow: `0 0 15px ${isDarkMode ? "var(--neon-cyan)" : "var(--neon-blue)"}`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/theme:translate-x-full transition-transform duration-700" />
      {isDarkMode ? (
        <FiSun
          size={16}
          className="animate-spin-slow"
          style={{ color: "#000000" }}
        />
      ) : (
        <FiMoon
          size={16}
          className="animate-bounce"
          style={{ color: "#000000" }}
        />
      )}
    </button>
  );
}
