import { FiClock, FiAward } from "react-icons/fi";

const WorkingHours = [
  { Icon: FiClock, label: "کل روز های هفته" },
  { Icon: FiAward, label: "پشتیبانی ۲۴ ساعته" },
];

export default function WorkingHoursSection({ isDarkMode }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const getBgColor = () => {
    if (!isMobile) return "transparent";
    return isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";
  };

  return (
    <div
      className="text-right md:bg-transparent md:p-0 md:border-none md:shadow-none rounded-2xl p-5 transition-all duration-300 flex flex-col h-full"
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
      <div className="space-y-4 md:space-y-4 flex-1">
        <h3
          className="text-xl md:text-xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 md:after:w-10 after:h-[2px] after:bg-gradient-to-l after:from-neon-cyan after:to-neon-purple after:rounded-full"
          style={{ color: "var(--color-heading)" }}
        >
          ساعات کاری
        </h3>
        <div className="space-y-3 md:space-y-3">
          {WorkingHours.map(({ Icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-end gap-3 md:gap-3 text-base md:text-sm transition-all duration-300 p-3 md:p-3 rounded-lg md:rounded-xl"
              style={{
                color: "var(--color-secondary)",
                backgroundColor: getBgColor(),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode
                  ? "rgba(0,242,255,0.1)"
                  : "rgba(0,180,216,0.05)";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = getBgColor();
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <span>{label}</span>
              <Icon className="text-neon-cyan" size={20} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-6 md:mt-8 p-4 md:p-4 rounded-xl text-center text-base md:text-sm transition-all duration-300 cursor-pointer overflow-hidden relative group"
        style={{
          backgroundColor: isDarkMode
            ? "rgba(0, 242, 255, 0.08)"
            : "rgba(0, 180, 216, 0.05)",
          border: `1px solid ${isDarkMode ? "rgba(0, 242, 255, 0.2)" : "rgba(0, 180, 216, 0.2)"}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--neon-cyan)";
          e.currentTarget.style.boxShadow = `0 0 20px ${isDarkMode ? "rgba(0,242,255,0.3)" : "rgba(0,180,216,0.2)"}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isDarkMode
            ? "rgba(0,242,255,0.2)"
            : "rgba(0,180,216,0.2)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <span className="text-neon-cyan text-2xl md:text-xl inline-block group-hover:scale-110 transition-transform duration-300">
          ✨
        </span>
        <span
          className="block mt-2 md:mt-2 font-medium text-base md:text-sm"
          style={{ color: "var(--color-heading)" }}
        >
          تضمین بهترین کیفیت و قیمت
        </span>
      </div>
    </div>
  );
}
