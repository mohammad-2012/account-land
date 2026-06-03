import { useDarkModeShadow } from "../context/DarkModeShadow";
import Background from "../components/Background";
import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaGem,
  FaShoppingCart,
  FaSmile,
  FaUsers,
  FaMobileAlt,
  FaLock,
  FaUpload,
  FaDownload,
} from "react-icons/fa";

export default function PremiumTelegram({ products }) {
  const { darkModeShadow, isDarkMode } = useDarkModeShadow();

  const telegramProducts = products.filter((p) => p.category === "telegram");

  const benefits = [
    {
      icon: <FaUpload className="text-2xl" />,
      title: "آپلود سنگین",
      desc: "آپلود فایل تا ۴ گیگابایت",
    },
    {
      icon: <FaDownload className="text-2xl" />,
      title: "سرعت بالا",
      desc: "دانلود سریع و بدون محدودیت",
    },
    {
      icon: <FaSmile className="text-2xl" />,
      title: "اموجی اختصاصی",
      desc: "استیکرها و اموجی‌های ویژه",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "عضویت بیشتر",
      desc: "عضویت در کانال‌های خصوصی",
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "امنیت بالا",
      desc: "رمزگذاری پیشرفته",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "مولتی اکانت",
      desc: "مدیریت چندین اکانت",
    },
  ];

  const getDiscount = (price, oldPrice) => {
    if (!oldPrice) return 0;
    const priceNum = parseFloat(
      price.toString().replace(/,/g, "").replace(" تومان", ""),
    );
    const oldPriceNum = parseFloat(
      oldPrice.toString().replace(/,/g, "").replace(" تومان", ""),
    );
    if (isNaN(priceNum) || isNaN(oldPriceNum)) return 0;
    return Math.round((1 - priceNum / oldPriceNum) * 100);
  };

  return (
    <div className="min-h-screen pt-8" dir="rtl">
      <Background isDarkMode={isDarkMode} />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#0088cc] to-[#26a5e4] mb-5 shadow-2xl animate-pulse">
            <FaTelegram className="text-5xl text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0088cc] via-[#26a5e4] to-[#00aaff] bg-clip-text">
            تلگرام پریمیوم
          </h1>

          <p className="text-secondary text-lg max-w-2xl mx-auto">
            تجربه‌ای متفاوت از پیام‌رسان محبوب با امکانات ویژه و سرعت بی‌نظیر
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-[#26a5e4] mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="product-card text-center p-3 group">
              <div className="text-[var(--color-cta)] mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h4 className="text-sm font-bold text-heading">
                {benefit.title}
              </h4>
              <p className="text-xs text-muted">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {telegramProducts.map((product) => (
            <div
              key={product.id}
              className={`group animate-fadeInUp relative ${product.popular ? "transform scale-105 z-10" : ""}`}
              style={{ animationDelay: `${product.id * 100}ms` }}
            >
              <div
                className="rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden h-full relative"
                style={{ boxShadow: darkModeShadow }}
              >
                <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-[#0088cc] to-[#26a5e4] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <FaGem className="text-yellow-300 text-xs" />
                  {product.badge}
                </div>

                <div
                  className={`p-5 ${isDarkMode ? "bg-white/5" : "bg-white/80"} backdrop-blur-sm border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-200 rounded-2xl h-full flex flex-col relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-5 transition-all duration-300 pointer-events-none`}
                  ></div>

                  <div className="flex flex-col items-center mb-4">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center  text-3xl mb-4 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative before:absolute before:inset-0 before:rounded-full before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300 after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t  after:to-transparent`}
                    >
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-heading text-center">
                      {product.name}
                    </h2>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-[var(--color-cta)]">
                      {product.price}
                      <span className="text-sm text-muted"> تومان</span>
                    </div>

                    {product.oldPrice && (
                      <>
                        <div className="text-sm text-muted line-through">
                          {product.oldPrice} تومان
                        </div>

                        {getDiscount(product.price, product.oldPrice) > 0 && (
                          <div className="text-xs text-green-500 mt-1">
                            {getDiscount(product.price, product.oldPrice)}%
                            تخفیف
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="flex-grow mb-4 space-y-2">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 space-y-2">
                    <Link
                      to={`/checkout/${product.purchaseLink}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-95 group/site relative overflow-hidden bg-gradient-to-r from-[#0088cc] to-[#26a5e4] text-white text-sm shadow-lg hover:shadow-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/site:translate-x-[100%] transition-transform duration-300"></div>
                      <FaShoppingCart size={14} className="relative z-10" />
                      <span className="relative z-10">خرید اکانت پریمیوم</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="product-card text-center p-6">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
              <FaShieldAlt className="text-2xl text-blue-500" />
            </div>
            <h4 className="font-bold text-heading mb-2">امنیت بالا</h4>
            <p className="text-sm text-secondary">
              بدلیل فعالسازی اشتراک ها روی اکانت های خودتون این اشتراک ها از
              امنیت بالایی برخوردار هستند.
            </p>
          </div>
          <div className="product-card text-center p-6">
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
              <FaClock className="text-2xl text-green-500" />
            </div>
            <h4 className="font-bold text-heading mb-2">تحویل فوری</h4>
            <p className="text-sm text-secondary">
              بلافاصله پس از پرداخت، اکانت فعال می‌شود
            </p>
          </div>
          <div className="product-card text-center p-6">
            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
              <FaHeadset className="text-2xl text-purple-500" />
            </div>
            <h4 className="font-bold text-heading mb-2">پشتیبانی ۲۴ ساعته</h4>
            <p className="text-sm text-secondary">
              تیم پشتیبانی همیشه در دسترس شماست
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/support"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 bg-[var(--color-card)] border border-[var(--color-cta)] text-[var(--color-cta)] hover:bg-[var(--color-cta)] hover:text-white"
          >
            <FaHeadset />
            سوالی دارید؟ با پشتیبانی در میان بگذارید
          </Link>
        </div>
      </div>
    </div>
  );
}
