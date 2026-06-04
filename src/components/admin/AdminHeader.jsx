import { FaBoxes, FaSignOutAlt } from "react-icons/fa";

export default function AdminHeader({ onLogout }) {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/80 dark:bg-gray-900/80 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 mx-auto sm:px-6 sm:py-4 max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center w-8 h-8 shadow-lg sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple">
            <FaBoxes className="text-base text-white sm:text-xl" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-transparent sm:text-xl bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text">
              پنل مدیریت
            </h1>
            <p className="hidden text-xs text-gray-500 sm:block dark:text-gray-400">
              مدیریت فروشگاه اکانت لند
            </p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-white transition-all shadow-md sm:gap-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 hover:shadow-lg"
        >
          <FaSignOutAlt />
          <span className="hidden sm:inline">خروج</span>
        </button>
      </div>
    </header>
  );
}
