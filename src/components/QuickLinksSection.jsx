import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavItems = [
  { name: "خانه", path: "/home" },
  { name: "درباره ما", path: "/about-us" },
  { name: "اکانت‌های AI", path: "/ai-accounts" },
  { name: "اکانت پریمیوم تلگرام", path: "/premium-telegram" },
  { name: "تماس با ما", path: "/contact" },
];

export default function QuickLinksSection({ isDarkMode }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      className="p-5 text-right transition-all duration-300 md:bg-transparent md:p-0 md:border-none md:shadow-none rounded-2xl"
      style={{
        backgroundColor: isMobile
          ? isDarkMode
            ? "rgba(255,255,255,0.03)"
            : "rgba(0,0,0,0.02)"
          : "transparent",
        border: isMobile
          ? `1px solid ${isDarkMode ? "rgba(0,242,255,0.1)" : "rgba(0,180,216,0.1)"}`
          : "none",
        boxShadow: isMobile
          ? isDarkMode
            ? "0 0 20px rgba(0, 180, 216, 0.482), 0 0 5px rgba(72, 202, 228, 0.445)"
            : "0 4px 12px rgba(0, 0, 0, 0.163)"
          : "none",
      }}
    >
      <div className="space-y-4 md:space-y-4">
        <h3
          className="text-xl md:text-xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 md:after:w-10 after:h-[2px] after:bg-gradient-to-l after:from-neon-cyan after:to-neon-purple after:rounded-full"
          style={{ color: "var(--color-heading)" }}
        >
          لینک‌های سریع
        </h3>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-1">
          {NavItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between w-full px-3 py-2 text-base transition-all duration-300 rounded-lg md:text-sm group md:rounded-xl ${
                    isActive
                      ? "text-neon-cyan bg-neon-cyan/10 border border-neon-cyan font-bold"
                      : "text-secondary hover:text-neon-cyan hover:bg-neon-cyan/5"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <FiArrowRight
                      className={`text-sm transition-all duration-300 hidden md:inline-block ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
