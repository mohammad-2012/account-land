import { FaGem } from "react-icons/fa";

const PageHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 px-6 py-2 rounded-full mb-6 backdrop-blur-sm animate-fadeInDown">
        <FaGem className="text-neon-purple animate-pulse" />
        <span
          className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text "
          style={{ color: "var(--neon-cyan)" }}
        >
          ویژه و پریمیوم
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-heading animate-fadeInUp">
        اکانت‌های{" "}
        <span
          style={{ color: "var(--neon-cyan)" }}
          className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-mint bg-clip-text "
        >
          هوش مصنوعی
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto animate-fadeInUp animation-delay-150">
        بهترین اکانت‌های پریمیوم هوش مصنوعی با کیفیت عالی و قیمت مناسب
      </p>
    </div>
  );
};

export default PageHeader;
