import { FiMail, FiMapPin, FiPhone, FiGlobe } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const ContactLinks = [
  {
    Icon: FaTelegram,
    href: "https://t.me/mohammad_dev_2012",
    label: "تلگرام",
    isLink: true,
  },
  { Icon: FiPhone, href: "tel:09148211044", label: "شماره تماس", isLink: true },
  {
    Icon: FiMail,
    href: "mailto:mohammad1391akbari0@gmail.com",
    label: "ایمیل",
    isLink: true,
  },
  {
    Icon: FiGlobe,
    href: "https://modev.xo.je",
    label: "سایت سازنده",
    isLink: true,
  },
  { Icon: FiMapPin, href: null, label: "ایران , اردبیل", isLink: false },
];

export default function ContactSection({ isDarkMode }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const getBgColor = () => {
    if (!isMobile) return "transparent";
    return isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";
  };

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
          ارتباط با ما
        </h3>
        <div className="space-y-3 md:space-y-3">
          {ContactLinks.map(({ Icon, href, label, isLink }, idx) => {
            const content = (
              <>
                <span className="text-base md:text-sm transition-colors duration-300">
                  {label}
                </span>
                <Icon
                  className="text-neon-cyan transition-all duration-300"
                  size={20}
                />
              </>
            );

            const commonProps = {
              key: idx,
              className:
                "flex items-center justify-end gap-3 md:gap-3 transition-all duration-300 p-3 md:p-3 rounded-lg md:rounded-xl w-full",
              style: {
                color: "var(--color-secondary)",
                backgroundColor: getBgColor(),
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.backgroundColor = isDarkMode
                  ? "rgba(0,242,255,0.1)"
                  : "rgba(0,180,216,0.05)";
                e.currentTarget.style.transform = "translateX(5px)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.backgroundColor = getBgColor();
                e.currentTarget.style.transform = "translateX(0)";
              },
            };

            if (isLink) {
              return (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...commonProps}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={idx} {...commonProps}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
