import { useDarkMode } from "../context/DarkModeContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isDarkMode
            ? "rgba(1, 5, 12, 0.85)"
            : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(16px)",
          boxShadow: isDarkMode
            ? "0 0 30px rgba(0, 242, 255, 0.78), 0 1px 3px rgba(0,0,0,0.2)"
            : "0 0 30px rgba(0, 180, 216, 0.71), 0 1px 3px rgba(0,0,0,0.05)",
          borderBottom: `1px solid ${isDarkMode ? "rgba(0, 242, 255, 0.2)" : "rgba(0, 180, 216, 0.3)"}`,
        }}
      >
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl md:px-6 md:py-4">
          <Logo />

          <div className="items-center hidden gap-2 md:flex">
            <NavLinks />
            <ThemeToggle />
            <Link
              to="/admin-login"
              className="relative px-4 py-2 text-sm font-medium text-gray-500 transition-all duration-300 rounded-lg dark:text-gray-400 hover:text-neon-cyan dark:hover:text-neon-cyan after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-cyan after:to-neon-purple after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              ورود ادمین
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}
