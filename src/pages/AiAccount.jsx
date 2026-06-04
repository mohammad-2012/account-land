import { useParams } from "react-router-dom";
import { useDarkModeShadow } from "../context/DarkModeShadow";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import ProductNotFound from "../components/AiAccount/ProductNotFound";
import MainContent from "../components/AiAccount/MainContent";
import PriceCard from "../components/AiAccount/PriceCard";
import GlobalStyles from "../components/AiAccount/GlobalStyles";
import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaFileAlt,
  FaImage,
  FaLanguage,
  FaMicrophone,
  FaRocket,
  FaTelegramPlane,
  FaSmile,
  FaGem,
  FaUser,
  FaCheckCircle,
  FaComment,
  FaFolder,
  FaTrophy,
} from "react-icons/fa";

export default function AiAccount({ products }) {
  const { accountName } = useParams();
  const { isDarkMode } = useDarkModeShadow();

  const product = products.find((p) => p.purchaseLink === accountName);

  const geminiFeatures = [
    {
      icon: <FaBrain className="text-neon-cyan" />,
      title: "استدلال در سطح دکترا",
      desc: "حل مسائل علمی و منطقی با دقت ۹۰٪ به بالا",
    },
    {
      icon: <FaDatabase className="text-neon-purple" />,
      title: "حافظه ۲ میلیون توکن",
      desc: "تحلیل چندین کتاب یا ساعت‌ها ویدیو همزمان",
    },
    {
      icon: <FaChartLine className="text-neon-mint" />,
      title: "رابط کاربری پویا",
      desc: "ساخت ابزارهای تعاملی و نمودارهای زنده",
    },
    {
      icon: <FaMicrophone className="text-neon-cyan" />,
      title: "هوش چندوجهی بومی",
      desc: "درک لحن صدا و جزئیات نقشه‌های مهندسی",
    },
    {
      icon: <FaImage className="text-neon-purple" />,
      title: "تولید محتوای پیشرفته",
      desc: "تولید تصاویر با کیفیت بالا Nano Banana Pro",
    },
    {
      icon: <FaCode className="text-neon-mint" />,
      title: "Antigravity",
      desc: "کدنویسی، دیباگ و ساخت پروژه حرفه‌ای",
    },
  ];

  const chatFeatures = [
    {
      icon: <FaRocket className="text-neon-cyan" />,
      title: "پاسخ‌دهی سریع‌تر",
      desc: "سرعت بالا در تولید محتوا و پاسخگویی",
    },
    {
      icon: <FaBrain className="text-neon-purple" />,
      title: "مدل قدرتمند GPT-4",
      desc: "دسترسی به پیشرفته‌ترین مدل OpenAI",
    },
    {
      icon: <FaImage className="text-neon-mint" />,
      title: "تولید تصویر حرفه‌ای",
      desc: "ساخت تصاویر جذاب با کیفیت بالا",
    },
    {
      icon: <FaFileAlt className="text-neon-cyan" />,
      title: "تحلیل فایل‌ها",
      desc: "تحلیل PDF، Excel، Word و تصاویر",
    },
    {
      icon: <FaLanguage className="text-neon-purple" />,
      title: "پشتیبانی از فارسی",
      desc: "مکالمه روان به زبان فارسی",
    },
    {
      icon: <FaCode className="text-neon-mint" />,
      title: "برنامه‌نویسی پیشرفته",
      desc: "رفع اشکال و کدنویسی حرفه‌ای",
    },
  ];

  const telegramFeatures = [
    {
      icon: <FaTelegramPlane className="text-[#0088cc]" />,
      title: "نماد ویژه پریمیوم",
      desc: "نمایش علامت طلایی پریمیوم در کنار نام شما و پیام‌ها",
    },
    {
      icon: <FaGem className="text-yellow-500" />,
      title: "استیکرهای لوکس و انحصاری",
      desc: "دسترسی به مجموعه کامل استیکرهای خاص و لاکچری که فقط کاربران پریمیوم دارند",
    },
    {
      icon: <FaSmile className="text-purple-500" />,
      title: "اموجی‌های متحرک و ویژه",
      desc: "بیش از هزاران اموجی جدید، متحرک و انحصاری برای ابراز احساسات متفاوت",
    },
    {
      icon: <FaUser className="text-neon-cyan" />,
      title: "پروفایل رنگی و سفارشی",
      desc: "تغییر رنگ نام و متن پروفایل با طیف گسترده‌ای از رنگ‌های جذاب و شیک",
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: "تأیید دو مرحله‌ای پیشرفته",
      desc: "امنیت بیشتر با قابلیت قفل گذاری روی چت‌ها و تنظیمات پیشرفته حریم خصوصی",
    },
    {
      icon: <FaComment className="text-neon-mint" />,
      title: "پیام‌های پین شده نامحدود",
      desc: "پین کردن تعداد نامحدود پیام در هر چت و کانال",
    },
    {
      icon: <FaFolder className="text-blue-500" />,
      title: "ساخت آلبوم‌های اختصاصی",
      desc: "دسته‌بندی و مدیریت فایل‌ها و رسانه‌ها در آلبوم‌های شخصی",
    },
    {
      icon: <FaTrophy className="text-yellow-500" />,
      title: "نشان‌های افتخار",
      desc: "دریافت نشان‌های ویژه و افتخارآمیز در گروه‌ها و کانال‌های محبوب",
    },
  ];

  let currentFeatures = [];
  let isGemini = false;
  let isChatGPT = false;
  let isTelegram = false;

  if (product?.purchaseLink === "gemini-pro") {
    isGemini = true;
    currentFeatures = geminiFeatures;
  } else if (product?.purchaseLink === "chatgpt-plus") {
    isChatGPT = true;
    currentFeatures = chatFeatures;
  } else if (product?.purchaseLink?.includes("telegram")) {
    isTelegram = true;
    currentFeatures = telegramFeatures;
  }

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen pt-6 pb-4" dir="rtl">
      <Background isDarkMode={isDarkMode} />

      <div className="container max-w-5xl mx-auto">
        <BackButton />

        <div className="grid gap-8 lg:grid-cols-3">
          <MainContent
            product={product}
            isGemini={isGemini}
            isChatGPT={isChatGPT}
            isTelegram={isTelegram}
            currentFeatures={currentFeatures}
          />
          <PriceCard product={product} isGemini={isGemini} />
        </div>
      </div>

      <GlobalStyles />
    </div>
  );
}
