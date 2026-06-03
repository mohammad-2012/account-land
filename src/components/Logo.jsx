import { NavLink } from "react-router-dom";
import { RiRobot2Line } from "react-icons/ri";
import { useDarkMode } from "../context/DarkModeContext";

export default function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <NavLink to="/" className="relative group">
      {({ isActive }) => (
        <div className="flex items-center gap-2 md:gap-3 group-hover:translate-x-1 transition-transform duration-300">
          <div className="relative">
            <div
              className="relative p-2 md:p-2.5 rounded-full bg-gradient-to-br from-color-cta to-color-accent shadow-lg transition-all duration-500 group-hover:scale-110"
              style={{
                boxShadow: isActive
                  ? `0 0 30px var(--neon-cyan), 0 0 10px var(--color-cta)`
                  : `0 0 20px var(--color-cta)`,
                animation: "spin360 5s linear infinite",
                border: isActive ? `2px solid var(--neon-cyan)` : "none",
              }}
            >
              <RiRobot2Line
                size={20}
                className="md:w-6 md:h-6 drop-shadow-lg"
                style={{
                  color: isDarkMode ? "#ffffff" : "#000000",
                  filter: isDarkMode
                    ? "drop-shadow(0 0 5px rgba(0,255,255,0.8))"
                    : "none",
                  animation: "counterSpin 5s linear infinite",
                }}
              />
            </div>
            {isActive && (
              <div className="absolute -inset-1 rounded-full bg-neon-cyan opacity-30 blur-md animate-ping" />
            )}
          </div>
          <div className="relative">
            <h1
              className="text-lg md:text-2xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105"
              style={{
                color: isDarkMode ? "#ffffff" : "#000000",
                textShadow: isActive
                  ? "0 0 15px var(--neon-cyan)"
                  : isDarkMode
                    ? "0 0 10px rgba(255,255,255,0.5)"
                    : "none",
              }}
            >
              Account Land
            </h1>
            <div className="absolute -bottom-1 left-0 w-full h-[2px] overflow-hidden rounded-full">
              <div
                className="w-full h-full animate-slideLine rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), var(--neon-cyan), transparent)",
                }}
              />
            </div>
            <span
              className="absolute -bottom-1 left-0 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(to right, var(--neon-blue), var(--neon-cyan))",
                width: isActive ? "100%" : "0%",
                height: "2px",
                boxShadow: isActive ? "0 0 8px var(--neon-cyan)" : "none",
              }}
            />
          </div>
        </div>
      )}
    </NavLink>
  );
}
