import { FaRocket } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="mt-12 sm:mt-16 text-center animate-fadeInUp animation-delay-200">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-mint rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>

        <div className="relative bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-mint/10 backdrop-blur-md border border-neon-cyan/30 rounded-2xl px-4 sm:px-8 py-3 sm:py-5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <div className="relative">
              <FaRocket className="text-neon-cyan text-xl sm:text-2xl animate-rocket" />
              <div className="absolute -bottom-1 -right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-cyan rounded-full animate-ping"></div>
            </div>

            <div className="text-center" style={{ color: "var(--neon-cyan)" }}>
              <span className="text-sm sm:text-lg font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-mint bg-clip-text  ">
                اکانت‌های بیشتری به زودی اضافه خواهد شد...
              </span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-cyan rounded-full animate-pulse"></div>
                <span className="text-[10px] sm:text-xs text-muted">
                  در حال توسعه
                </span>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-purple rounded-full animate-pulse animation-delay-300"></div>
              </div>
            </div>

            <div className="relative">
              <FaRocket
                className="text-neon-purple text-xl sm:text-2xl animate-rocket animation-delay-500"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="absolute -bottom-1 -left-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-purple rounded-full animate-ping animation-delay-700"></div>
            </div>
          </div>

          <div className="flex justify-center gap-1 mt-2 sm:mt-3">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-cyan rounded-full animate-bounce-slow"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-purple rounded-full animate-bounce-slow animation-delay-150"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-mint rounded-full animate-bounce-slow animation-delay-300"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-ice rounded-full animate-bounce-slow animation-delay-450"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neon-cyan rounded-full animate-bounce-slow animation-delay-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
