import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiMessageCircle,
  FiCpu,
  FiUsers,
} from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";

const navLinks = [
  { to: "/home", label: "خانه", icon: FiHome },
  { to: "/about-us", label: "درباره ما", icon: FiInfo },
  { to: "/ai-accounts", label: "AI اکانت‌های", icon: FiCpu },
  { to: "/premium-telegram", label: "اکانت پریمیوم تلگرام", icon: FiUsers },
  { to: "/support", label: "پشتیبانی", icon: FiMessageCircle },
];

export default function NavLinks() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {navLinks.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {({ isActive }) => (
            <div
              className={`relative group transition-all duration-300 ease-out ${
                isActive ? "scale-105" : "hover:scale-105"
              }`}
              style={{
                padding: "0.6rem 1.4rem",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
            >
              <div
                className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 group-hover:w-8 transition-all duration-300 ease-out"
                style={{
                  background: isDarkMode
                    ? "var(--neon-cyan)"
                    : "var(--neon-blue)",
                  borderRadius: "2px",
                }}
              />

              {isActive && (
                <>
                  <div
                    className="absolute top-0 right-0 h-[2px] w-full"
                    style={{
                      background: `linear-gradient(90deg, ${isDarkMode ? "var(--neon-cyan)" : "var(--neon-blue)"}, transparent)`,
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${isDarkMode ? "var(--neon-cyan)" : "var(--neon-blue)"})`,
                    }}
                  />
                </>
              )}

              <div
                className="absolute inset-0 rounded-xl transition-all duration-300"
                style={{
                  background: isActive
                    ? isDarkMode
                      ? "linear-gradient(135deg, rgba(0,242,255,0.12), rgba(168,85,247,0.08))"
                      : "linear-gradient(135deg, rgba(0,180,216,0.08), rgba(0,242,255,0.04))"
                    : "transparent",
                  opacity: isActive ? 1 : 0,
                }}
              />

              <div
                className="relative flex items-center gap-2.5 transition-all duration-300"
                style={{
                  color: isActive
                    ? "var(--neon-cyan)"
                    : isDarkMode
                      ? "rgba(255, 255, 255, 0.741)"
                      : "rgba(0,0,0,0.6)",
                }}
              >
                <link.icon
                  size={16}
                  className={`transition-all duration-300 ${
                    isActive ? "text-neon-cyan" : "group-hover:text-neon-cyan"
                  }`}
                  style={{
                    filter: isActive
                      ? "drop-shadow(0 0 4px var(--neon-cyan))"
                      : "none",
                  }}
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  {link.label}
                </span>
              </div>

              {isActive && (
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: `0 0 10px ${isDarkMode ? "rgba(0,242,255,0.2)" : "rgba(0,180,216,0.15)"}`,
                  }}
                />
              )}

              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: isDarkMode
                    ? "radial-gradient(circle at center, rgba(0,242,255,0.04) 0%, transparent 70%)"
                    : "radial-gradient(circle at center, rgba(0,180,216,0.03) 0%, transparent 70%)",
                }}
              />
            </div>
          )}
        </NavLink>
      ))}
    </>
  );
}
