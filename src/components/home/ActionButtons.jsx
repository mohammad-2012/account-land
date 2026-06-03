import { Link } from "react-router-dom";

export default function ActionButtons({ isMobile }) {
  return (
    <div
      className={`${isMobile ? "relative mt-4" : "absolute bottom-8"} left-1/2 transform -translate-x-1/2 z-10 flex flex-col sm:flex-row gap-3 w-full px-4 sm:px-0 sm:w-auto`}
    >
      <Link
        to="/ai-accounts"
        className="group relative px-5 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
          color: "#fff",
          boxShadow: "0 0 20px var(--neon-cyan)",
        }}
      >
        <span className="relative z-10">AI مشاهده اکانت‌های </span>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-all duration-300" />
      </Link>
      <Link
        to="/premium-telegram"
        className="group relative px-5 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--neon-blue), var(--neon-cyan))",
          color: "#fff",
          boxShadow: "0 0 20px var(--neon-blue)",
        }}
      >
        <span className="relative z-10">اکانت پریمیوم تلگرام</span>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-all duration-300" />
      </Link>
    </div>
  );
}
