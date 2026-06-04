import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiMessageCircle,
  FiCpu,
  FiUsers,
} from "react-icons/fi";

const navLinks = [
  { to: "/home", label: "خانه", icon: FiHome },
  { to: "/about-us", label: "درباره ما", icon: FiInfo },
  { to: "/ai-accounts", label: "AI اکانت‌های", icon: FiCpu },
  { to: "/premium-telegram", label: "اکانت پریمیوم تلگرام", icon: FiUsers },
  { to: "/support", label: "پشتیبانی", icon: FiMessageCircle },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative z-50 p-2 transition-all duration-300 rounded-lg md:hidden"
          style={{
            color: isDarkMode ? "var(--neon-cyan)" : "var(--neon-blue)",
          }}
        >
          <FiMenu size={28} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden transition-all duration-500 ease-in-out"
          style={{
            backgroundColor: isDarkMode ? "#01050c" : "#ffffff",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            animation: "slideIn 0.5s ease-in-out",
          }}
        >
          <style>
            {`
              @keyframes slideIn {
                from {
                  transform: translateX(100%);
                }
                to {
                  transform: translateX(0);
                }
              }
              
              @keyframes slideOut {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(100%);
                }
              }
            `}
          </style>

          <div className="absolute top-4 left-4 z-[102]">
            <button
              onClick={() => {
                const menuElement = document.querySelector(
                  ".mobile-menu-container",
                );
                if (menuElement) {
                  menuElement.style.animation = "slideOut 0.5s ease-in-out";
                  setTimeout(() => setIsOpen(false), 450);
                } else {
                  setIsOpen(false);
                }
              }}
              className="p-2 transition-all duration-300 rounded-lg"
              style={{
                color: isDarkMode ? "var(--neon-cyan)" : "var(--neon-blue)",
              }}
            >
              <FiX size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-3 p-4 mt-20 mobile-menu-container">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className="block"
              >
                {({ isActive }) => (
                  <div
                    className="flex items-center justify-end w-full gap-4 px-5 py-3 transition-all duration-300 rounded-xl"
                    style={{
                      backgroundColor: isActive
                        ? isDarkMode
                          ? "rgba(0, 242, 255, 0.15)"
                          : "rgba(0, 180, 216, 0.1)"
                        : "transparent",
                      color: isActive
                        ? "var(--neon-cyan)"
                        : "var(--color-secondary)",
                      borderLeft: isActive
                        ? `3px solid ${isDarkMode ? "var(--neon-cyan)" : "var(--neon-blue)"}`
                        : "3px solid transparent",
                      borderRight: "none",
                    }}
                  >
                    <span className="text-base font-semibold">
                      {link.label}
                    </span>
                    <link.icon size={22} />
                  </div>
                )}
              </NavLink>
            ))}

            <Link
              to="/admin-login"
              className="relative px-4 py-2 text-sm font-medium text-gray-500 transition-all duration-300 rounded-lg dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-cyan after:to-neon-purple after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              ورود ادمین
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
