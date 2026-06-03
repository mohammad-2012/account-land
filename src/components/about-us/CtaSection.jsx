import { Link } from "react-router-dom";

export default function CtaSection({ isDarkMode, darkModeShadow }) {
  return (
    <div
      className={`rounded-3xl p-8 md:p-12 text-center ${
        isDarkMode
          ? "bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10"
          : "bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5"
      }`}
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">
        آماده شروع هستید؟
      </h2>
      <p className="text-muted mb-6 max-w-2xl mx-auto">
        به هزاران مشتری راضی بپیوندید و همین امروز اکانت پریمیوم خود را دریافت
        کنید
      </p>
      <Link
        to="/ai-accounts"
        className="inline-block px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95"
        style={{
          background:
            "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
          color: isDarkMode ? "#01050c" : "#0a0f1a",
          boxShadow: "0 0 20px rgba(0, 242, 255, 0.3)",
        }}
      >
        خرید
      </Link>
    </div>
  );
}
