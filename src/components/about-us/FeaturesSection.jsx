export default function FeaturesSection({ isDarkMode, darkModeShadow }) {
  const features = [
    {
      icon: "🎯",
      title: "ضمانت کیفیت",
      desc: "همه اکانت‌ها قبل از تحویل تست و تایید می‌شوند",
    },
    {
      icon: "⚡",
      title: "تحویل فوری",
      desc: "دریافت اکانت بلافاصله پس از پرداخت",
    },
    {
      icon: "🔒",
      title: "پرداخت امن",
      desc: "روش‌های پرداخت امن و رمزنگاری شده",
    },
    {
      icon: "💎",
      title: "پشتیبانی حرفه‌ای",
      desc: "پشتیبانی ۲۴ ساعته برای تمام نیازهای شما",
    },
    { icon: "🔄", title: "گارانتی تعویض", desc: "ضمانت تعویض اکانت‌های معیوب" },
    {
      icon: "⭐",
      title: "بهترین قیمت‌ها",
      desc: "قیمت‌های رقابتی با کیفیت عالی",
    },
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
          چه چیزی ما را متفاوت می‌کند
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          ما فراتر از انتظارات عمل می‌کنیم تا بهترین تجربه را برای شما فراهم
          کنیم
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
              isDarkMode
                ? "bg-white/5 hover:bg-white/10"
                : "bg-black/5 hover:bg-black/10"
            } border border-neon-cyan/20 hover:border-neon-cyan/50`}
            style={{ boxShadow: darkModeShadow }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-heading mb-2">
              {feature.title}
            </h3>
            <p className="text-muted text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
