import {
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaUsersSlash,
} from "react-icons/fa";

const TrustBadges = () => {
  const badges = [
    {
      icon: <FaShieldAlt className="text-2xl sm:text-3xl" />,
      text: "گارانتی بازگشت وجه",
      desc: "تا ۷ روز ضمانت",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      glowColor: "#06b6d4",
    },
    {
      icon: <FaHeadset className="text-2xl sm:text-3xl" />,
      text: "پشتیبانی ۲۴ ساعته",
      desc: "همیشه در دسترس",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "#a855f7",
    },
    {
      icon: <FaCheckCircle className="text-2xl sm:text-3xl" />,
      text: "تضمین کیفیت",
      desc: "اصالت کالا",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
      glowColor: "#10b981",
    },
    {
      icon: <FaUsersSlash className="text-2xl sm:text-3xl" />,
      text: "کاملاً اختصاصی",
      desc: "غیر اشتراکی",
      bgGradient: "from-sky-500/20 to-teal-500/20",
      borderColor: "border-sky-500/30",
      glowColor: "#06b6d4",
    },
  ];

  return (
    <div className="mt-12 sm:mt-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {badges.map((item, idx) => (
          <div
            key={idx}
            className="group relative animate-fadeInUp"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} backdrop-blur-sm`}
              style={{
                boxShadow: `0 4px 15px rgba(0,0,0,0.1)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${item.glowColor}30, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${item.glowColor}20, ${item.glowColor}05)`,
                    color: item.glowColor,
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-heading mb-0.5 sm:mb-1">
                  {item.text}
                </h3>

                <p className="text-[9px] sm:text-[10px] md:text-[11px] text-muted opacity-70">
                  {item.desc}
                </p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 group-hover:h-1 transition-all duration-300 rounded-full mx-auto w-0 group-hover:w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.glowColor}, transparent)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
