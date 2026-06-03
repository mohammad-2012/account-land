import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./components/AppLayout";
import LoadingSpinner from "./components/LoadingSpinner";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import {
  FaRobot,
  FaGoogle,
  FaTrophy,
  FaBolt,
  FaGem,
  FaTelegram,
} from "react-icons/fa";

import chatgptPlusImg from "/public/images/chatgpt-plus.png";
import googleGeminiImg from "/public/images/google-ai-gemini.jpg";
import telegramPremiumImg from "/public/Images/telegram-premium.jpg";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AiAccounts = lazy(() => import("./pages/AiAccounts"));
const AiAccount = lazy(() => import("./pages/AiAccount"));
const Support = lazy(() => import("./pages/Support"));
const PremiumTelegram = lazy(() => import("./pages/PremiumTelegram"));

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const products = [
    {
      id: 1,
      category: "ai",
      name: "ChatGPT Plus",
      icon: <FaRobot className="text-5xl" style={{ color: "#10a37f" }} />,
      image: chatgptPlusImg,
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
    },
    {
      id: 2,
      category: "ai",
      name: "Google Gemini AI",
      icon: <FaGoogle className="text-5xl" style={{ color: "#4285f4" }} />,
      image: googleGeminiImg,
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
    },
    {
      id: 3,
      category: "telegram",
      name: "پریمیوم ۱ ماهه",
      image: telegramPremiumImg,
      icon: <FaTelegram className="text-5xl" style={{ color: "#0088cc" }} />,
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
    },
    {
      id: 4,
      category: "telegram",
      name: "پریمیوم ۳ ماهه",
      image: telegramPremiumImg,
      icon: <FaGem className="text-5xl" style={{ color: "#eab308" }} />,
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
    },
    {
      id: 5,
      category: "telegram",
      name: "پریمیوم ۶ ماهه",
      image: telegramPremiumImg,
      icon: <FaBolt className="text-5xl" style={{ color: "#10b981" }} />,
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
    },
    {
      id: 6,
      category: "telegram",
      name: "پریمیوم ۱ ساله",
      image: telegramPremiumImg,
      icon: <FaTrophy className="text-5xl" style={{ color: "#f97316" }} />,
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
    },
  ];

  const aiProducts = products.filter((p) => p.category === "ai");

  return (
    <DarkModeProvider>
      <BrowserRouter basename="/account-land">
        <ScrollToTopOnNavigate />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="home" replace />} />

            <Route
              path="/home"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Home products={products} aiProducts={aiProducts} />
                </Suspense>
              }
            />

            <Route
              path="about-us"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <AboutUs />
                </Suspense>
              }
            />

            <Route
              path="ai-accounts"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <AiAccounts products={aiProducts} />
                </Suspense>
              }
            />

            <Route
              path="checkout/:accountName"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <AiAccount products={products} />
                </Suspense>
              }
            />

            <Route
              path="premium-telegram"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <PremiumTelegram products={products} />
                </Suspense>
              }
            />

            <Route
              path="support"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Support />
                </Suspense>
              }
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </DarkModeProvider>
  );
}
