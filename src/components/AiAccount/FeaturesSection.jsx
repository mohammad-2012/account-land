import { FaGem, FaTelegramPlane, FaRobot } from "react-icons/fa";

const FeaturesSection = ({
  isGemini,
  isChatGPT,
  isTelegram,
  currentFeatures,
}) => {
  let title = "";
  let icon = null;

  if (isGemini) {
    title = "قابلیت‌های برتر Gemini Pro";
    icon = <FaGem className="text-neon-cyan" />;
  } else if (isChatGPT) {
    title = "ویژگی‌های ChatGPT Plus";
    icon = <FaRobot className="text-[#10a37f]" />;
  } else if (isTelegram) {
    title = "امکانات ویژه تلگرام پریمیوم";
    icon = <FaTelegramPlane className="text-[#0088cc]" />;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-heading mb-4 flex items-center gap-2 border-r-4 border-neon-cyan pr-3">
        {icon}
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:translate-x-1"
          >
            <div className="text-xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-heading text-sm sm:text-base">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
