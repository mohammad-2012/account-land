import { useDarkMode } from "../context/DarkModeContext";

export function useDarkModeShadow() {
  const { isDarkMode } = useDarkMode();

  const darkModeShadow = isDarkMode
    ? "0 0 30px rgba(0, 200, 220, 0.3), 0 0 15px rgba(0, 242, 255, 0.3), 0 0 5px rgba(0, 180, 216, 0.5)"
    : "0 3px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.6)";
  return { darkModeShadow, isDarkMode };
}
