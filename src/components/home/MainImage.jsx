import { FaTelegramPlane } from "react-icons/fa";

export default function MainImage({ isMobile }) {
  return (
    <div className="relative group cursor-pointer flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />

      <div
        className={`absolute left-1/2 transform -translate-x-1/2 z-20 ${isMobile ? "top-0" : "top-20"} animate-float-telegram`}
      >
        <FaTelegramPlane
          size={isMobile ? 32 : 40}
          className="text-neon-cyan"
          style={{ filter: "drop-shadow(0 0 5px var(--neon-cyan))" }}
        />
      </div>

      <img
        src="/public/Images/account-land-image.webp"
        alt="Account Land"
        className={`relative object-contain drop-shadow-2xl ${
          isMobile
            ? "w-[280px] h-[280px]"
            : "w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px]"
        }`}
        style={{
          filter: "drop-shadow(0 0 20px var(--neon-cyan))",
        }}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/650x650/0891b2/ffffff?text=Account+Land";
        }}
      />

      {!isMobile && (
        <>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full animate-ping opacity-50" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-ping opacity-50 delay-700" />
        </>
      )}
    </div>
  );
}
