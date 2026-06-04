import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

const defaultProducts = [
  {
    id: 1,
    category: "ai",
    name: "ChatGPT Plus",
    emoji: "🤖",
    price: "۵۸۰,۰۰۰",
    oldPrice: "۷۹۰,۰۰۰",
    badge: "پرفروش‌ترین",
    purchaseLink: "chatgpt-plus",
    shortDesc:
      "دسترسی به قدرتمندترین مدل هوش مصنوعی OpenAI با قابلیت‌های پیشرفته GPT-4",
    features: [
      "دسترسی به مدل GPT-4",
      "تولید تصویر با کیفیت تر",
      "تحلیل فایل‌های مختلف و بدون محدودیت",
      "سرعت پاسخگویی بالا",
      "پشتیبانی از اینترنت",
    ],
    color: "from-emerald-500 to-teal-500",
    popular: true,
    isActive: true,
  },
  {
    id: 2,
    category: "ai",
    name: "Google Gemini AI",
    emoji: "🔮",
    price: "۵۲۰,۰۰۰",
    oldPrice: "۶۹۰,۰۰۰",
    badge: "جدید و قدرتمند",
    purchaseLink: "gemini-pro",
    shortDesc:
      "پیشرفته‌ترین هوش مصنوعی گوگل با قابلیت تحلیل متن، تصویر، صدا و ویدیو",
    features: [
      "مدل Gemini Pro",
      "پشتیبانی از زبان فارسی",
      "تحلیل همزمان محتوا",
      "سرعت بالا در پاسخگویی",
      "اتصال به سرویس‌های گوگل",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
    isActive: true,
  },
  {
    id: 3,
    category: "telegram",
    name: "پریمیوم ۱ ماهه",
    emoji: "📱",
    price: "۱۲۹,۰۰۰",
    oldPrice: "۱۹۹,۰۰۰",
    badge: "اقتصادی",
    purchaseLink: "telegram-1month",
    shortDesc: "اشتراک یک ماهه تلگرام پریمیوم با تمام امکانات ویژه",
    features: [
      "نماد ویژه پریمیوم",
      "آپلود فایل تا ۴ گیگابایت",
      "دانلود سریع‌تر",
      "بدون تبلیغات",
      "کانال‌های خصوصی بیشتر",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
    isActive: true,
  },
  {
    id: 4,
    category: "telegram",
    name: "پریمیوم ۳ ماهه",
    emoji: "💎",
    price: "۳۴۹,۰۰۰",
    oldPrice: "۵۹۷,۰۰۰",
    badge: "پرفروش‌ترین",
    purchaseLink: "telegram-3month",
    shortDesc: "اشتراک سه ماهه تلگرام پریمیوم با ۵۰٪ تخفیف ویژه",
    features: [
      "تمام امکانات ۱ ماهه",
      "ذخیره‌سازی ابری ۴ گیگابایت",
      "۵۰ درصد تخفیف",
      "اولویت در پشتیبانی",
      "ترجمه همزمان پیام‌ها",
    ],
    color: "from-purple-500 to-pink-500",
    popular: true,
    isActive: true,
  },
  {
    id: 5,
    category: "telegram",
    name: "پریمیوم ۶ ماهه",
    emoji: "⚡",
    price: "۶۲۹,۰۰۰",
    oldPrice: "۱,۱۹۴,۰۰۰",
    badge: "اقتصادی‌ترین",
    purchaseLink: "telegram-6month",
    shortDesc: "اشتراک شش ماهه تلگرام پریمیوم با ۶۰٪ تخفیف فوق العاده",
    features: [
      "همه امکانات ۳ ماهه",
      "ذخیره‌سازی ابری ۸ گیگابایت",
      "۶۰ درصد تخفیف",
      "ایموجی‌های انحصاری",
      "مدیریت چندین اکانت",
    ],
    color: "from-green-500 to-teal-500",
    popular: false,
    isActive: true,
  },
  {
    id: 6,
    category: "telegram",
    name: "پریمیوم ۱ ساله",
    emoji: "🏆",
    price: "۹۹۹,۰۰۰",
    oldPrice: "۲,۳۸۸,۰۰۰",
    badge: "ویژه",
    purchaseLink: "telegram-1year",
    shortDesc: "اشتراک یک ساله تلگرام پریمیوم با ۷۰٪ تخفیف ویژه",
    features: [
      "همه امکانات کامل",
      "ذخیره‌سازی ابری ۱۲ گیگابایت",
      "۷۰ درصد تخفیف ویژه",
      "پشتیبانی VIP",
      "دسترسی زودهنگام به امکانات جدید",
    ],
    color: "from-orange-500 to-red-500",
    popular: false,
    isActive: true,
  },
];

const defaultSiteSettings = {
  siteName: "اکانت لند",
  siteDescription: "فروشگاه اکانت‌های پریمیوم",
  contactPhone: "09123456789",
  contactTelegram: "@account_land",
  contactEmail: "info@accountland.com",
  workingHours: "شنبه تا پنجشنبه ۹ تا ۱۸",
};

export function AdminProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("admin_products");
    if (saved) {
      return JSON.parse(saved);
    }
    return defaultProducts;
  });

  const [siteSettings, setSiteSettings] = useState(() => {
    const saved = localStorage.getItem("admin_site_settings");
    return saved ? JSON.parse(saved) : defaultSiteSettings;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("is_admin") === "true";
  });

  useEffect(() => {
    localStorage.setItem("admin_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("admin_site_settings", JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem("is_admin", isAdmin);
  }, [isAdmin]);

  const addProduct = (product) => {
    const newId = Math.max(...products.map((p) => p.id), 0) + 1;
    setProducts([...products, { ...product, id: newId, isActive: true }]);
  };

  const updateProduct = (id, updatedData) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, ...updatedData } : p)),
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const toggleProductActive = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p)),
    );
  };

  const updateSiteSettings = (newSettings) => {
    setSiteSettings({ ...siteSettings, ...newSettings });
  };

  const adminLogin = (username, password) => {
    if (username === "modev2012" && password === "modev") {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdmin(false);
  };

  const activeProducts = products.filter((p) => p.isActive);
  const aiProducts = activeProducts.filter((p) => p.category === "ai");
  const telegramProducts = activeProducts.filter(
    (p) => p.category === "telegram",
  );

  return (
    <AdminContext.Provider
      value={{
        products: activeProducts,
        allProducts: products,
        aiProducts,
        telegramProducts,
        siteSettings,
        isAdmin,
        adminLogin,
        adminLogout,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProductActive,
        updateSiteSettings,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
