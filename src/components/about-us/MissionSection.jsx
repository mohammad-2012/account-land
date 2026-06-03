export default function MissionSection({ isDarkMode, darkModeShadow }) {
  const featuresList = [
    {
      icon: "✨",
      text: "اکانت‌های اورجینال و تضمینی",
      color: "text-neon-cyan",
    },
    { icon: "⚡", text: "تحویل آنی و خودکار", color: "text-neon-purple" },
    { icon: "🎯", text: "بهترین قیمت در بازار", color: "text-neon-ice" },
    { icon: "💎", text: "اکانت‌های پریمیوم و VIP", color: "text-neon-cyan" },
    {
      icon: "🎁",
      text: "هدیه و تخفیف برای مشتریان ویژه",
      color: "text-neon-mint",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur-3xl opacity-20" />
        <div
          className={`relative rounded-2xl p-8 backdrop-blur-sm ${
            isDarkMode ? "bg-white/5" : "bg-black/5"
          }`}
          style={{ boxShadow: darkModeShadow }}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-heading mb-4">
              چرا ما را انتخاب کنید؟
            </h3>
            <ul className="space-y-3">
              {featuresList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-3 text-muted"
                >
                  <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                  <span className="flex-1 text-right">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 backdrop-blur-sm border border-neon-cyan/30 text-heading">
          رسالت ما
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-heading">
          دسترسی پریمیوم برای همه
        </h2>
        <p className="text-muted leading-relaxed">
          ما از ابتدای فعالیت با یک چشم‌انداز ساده شروع به کار کردیم: ارائه
          دسترسی مقرون‌به‌صرفه به سرویس‌های پریمیوم دیجیتال بدون افت کیفیت یا
          امنیت.
        </p>
        <p className="text-muted leading-relaxed">
          تیم ما خستگی‌ناپذیر کار می‌کند تا اطمینان حاصل کند هر اکانتی که تحویل
          می‌دهیم اصیل، کاملاً کاربردی و همراه با ضمانت رضایت شماست. ما معتقدیم
          تجربه پریمیوم دیجیتال باید برای همه قابل دسترس باشد.
        </p>
      </div>
    </div>
  );
}
