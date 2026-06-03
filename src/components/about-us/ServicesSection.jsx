import { Link } from "react-router-dom";

export default function ServicesSection({ isDarkMode, darkModeShadow }) {
  const services = [
    { name: "چت جی پی تی پلاس", price: "پریمیوم", badge: "محبوب‌ترین" },
    { name: "تلگرام پریمیوم", price: "ماهیانه", badge: "پرطرفدار" },
    { name: "اکانت نتفلیکس", price: "4K اولترا اچ‌دی", badge: "بهترین ارزش" },
    { name: "اسپاتیفای پریمیوم", price: "فردی", badge: "جدید" },
    { name: "اکانت دیزنی پلاس", price: "سالانه", badge: "محدود" },
    { name: "یوتیوب پریمیوم", price: "خانوادگی", badge: "محبوب" },
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
          خدمات ما
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          ما طیف گسترده‌ای از اکانت‌های پریمیوم دیجیتال را با قیمت‌های رقابتی
          ارائه می‌دهیم
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl ${
              isDarkMode ? "bg-white/5" : "bg-black/5"
            } border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300`}
            style={{ boxShadow: darkModeShadow }}
          >
            <div className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 ">
              {service.badge}
            </div>
            <div className="text-left">
              <div className="font-bold text-heading">{service.name}</div>
              <div className="text-sm text-muted">{service.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/ai-accounts"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
          style={{
            background:
              "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
            color: isDarkMode ? "#01050c" : "#0a0f1a",
            boxShadow: "0 0 15px rgba(0, 242, 255, 0.3)",
          }}
        >
          مشاهده همه محصولات
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
