import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialLinks = [
  {
    Icon: FaTelegram,
    href: "https://t.me/mohammad_dev_2012",
    label: "Telegram",
  },
  { Icon: FaWhatsapp, href: "#", label: "Whatsapp" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function AboutSection({ isDarkMode }) {
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
          درباره ما
        </h3>
        <p
          className="text-base md:text-sm leading-relaxed"
          style={{ color: "var(--color-secondary)" }}
        >
          ارائه دهنده بهترین اکانت‌های پریمیوم و سرویس‌های هوش مصنوعی با بهترین
          کیفیت و پشتیبانی ۲۴ ساعته
        </p>
        <div className="flex gap-3 pt-2 md:pt-3">
          {SocialLinks.map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.05)",
                color: isDarkMode ? "#ffffff" : "#000000",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px var(--neon-cyan)";
                e.currentTarget.style.backgroundColor = isDarkMode
                  ? "rgba(0,242,255,0.2)"
                  : "rgba(0,180,216,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.backgroundColor = isDarkMode
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.05)";
              }}
            >
              <Icon size={24} className="md:w-[22px] md:h-[22px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
