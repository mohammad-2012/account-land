export default function HeroSection() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-heading">
        شریک قابل اعتماد شما برای
        <span
          className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-mint bg-clip-text text-transparent block text-3xl md:text-4xl lg:text-5xl my-6"
          style={{ color: "var(--neon-cyan)" }}
        >
          اکانت‌های دیجیتال پریمیوم
        </span>
      </h1>

      <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto pt-4">
        ما یک تیم حرفه‌ای هستیم که متعهد به ارائه اکانت‌های دیجیتال با کیفیت
        بالا، تحویل فوری و پشتیبانی عالی هستیم
      </p>
    </div>
  );
}
