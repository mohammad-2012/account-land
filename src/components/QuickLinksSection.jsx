import { FiArrowRight } from "react-icons/fi";

const NavItems = [
  { name: "خانه", path: "/home" },
  { name: "درباره ما", path: "/about-us" },
  { name: "اکانت‌های AI", path: "/ai-accounts" },
  { name: "اکانت پریمیوم تلگرام", path: "/premium-telegram" },
  { name: "تماس با ما", path: "/contact" },
];

export default function QuickLinksSection({ currentPath, isDarkMode }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      className="text-right md:bg-transparent md:p-0 md:border-none md:shadow-none rounded-2xl p-5 transition-all duration-300"
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
          {NavItems.map((item, index) => {
            const isActive = currentPath === item.path;
            return (
              <li key={index}>
                <a
                  href={item.path}
                  className="text-base md:text-sm transition-all duration-300 flex items-center justify-between group py-2 px-3 rounded-lg md:rounded-xl w-full"
                  style={{
                    color: isActive
                      ? "var(--neon-cyan)"
                      : "var(--color-secondary)",
                    backgroundColor: isActive
                      ? isDarkMode
                        ? "rgba(0,242,255,0.1)"
                        : "rgba(0,180,216,0.05)"
                      : "transparent",
                    border: isActive ? "1px solid var(--neon-cyan)" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--neon-cyan)";
                      e.currentTarget.style.backgroundColor = isDarkMode
                        ? "rgba(0,242,255,0.05)"
                        : "rgba(0,180,216,0.03)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--color-secondary)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <FiArrowRight
                    className={`text-sm transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"} group-hover:opacity-100 group-hover:translate-x-0 hidden md:inline-block`}
                  />
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
