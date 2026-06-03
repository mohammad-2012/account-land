import { FaTelegramPlane } from "react-icons/fa";

export default function BuyFromTelegram({ telegramLink, accountName }) {
  const getMessage = () => {
    const encodedMessage = encodeURIComponent(
      `سلام 👋\n\n` +
        `بنده اکانت ${accountName} رو می‌خوام فعالسازی کنم روی ایمیل شخصی خودم.\n\n` +
        `لطفا فرایند فعالسازی و خرید رو برام بگید.`,
    );
    return `${telegramLink}?text=${encodedMessage}`;
  };

  return (
    <a
      href={getMessage()}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 group/telegram relative overflow-visible"
      style={{
        background: "linear-gradient(135deg, #0088cc, #00a3e0)",
        color: "white",
        boxShadow: "0 4px 15px rgba(0, 136, 204, 0.3)",
      }}
    >
      <div className="absolute -top-3 -right-2 z-30 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg animate-bounce flex items-center gap-1 whitespace-nowrap">
        ⚡ پیشنهادی
      </div>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/telegram:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <FaTelegramPlane
        size={18}
        className="relative z-10 group-hover/telegram:scale-110 transition-transform duration-300"
      />
      <span className="relative z-10 text-sm group-hover/telegram:tracking-wider transition-all duration-300">
        خرید مستقیم از تلگرام
      </span>
    </a>
  );
}
