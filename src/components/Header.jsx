import { useDarkMode } from "../context/DarkModeContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

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
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <Logo />

          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
            <ThemeToggle />
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
