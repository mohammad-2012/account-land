import { useState, useEffect, useRef } from "react";
import FormInput from "./FormInput";
import AccountTypeField from "./AccountTypeField";
import NoticeBox from "./NoticeBox";
import SubmitButton from "./SubmitButton";

const CheckoutForm = ({ product, isVisible }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    accountType: product?.name || "",
    phone: "",
    telegramId: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const formRef = useRef(null);

  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  useEffect(() => {
    if (isVisible && formRef.current) {
      const yOffset = -100;
      const y =
        formRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [isVisible]);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "لطفاً نام و نام خانوادگی خود را وارد کنید";
    }
    if (!formData.telegramId.trim()) {
      newErrors.telegramId = "لطفاً ایدی تلگرام خود را وارد کنید";
    }
    if (!formData.email.trim()) {
      newErrors.email = "لطفاً ایمیل خود را وارد کنید";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "لطفاً ایمیل معتبر وارد کنید";
    }
    return newErrors;
  };

  const sendToTelegram = async (data) => {
    const message =
      `🛍 *درخواست خرید جدید* 🛍\n\n` +
      `👤 *نام:* ${data.fullName}\n` +
      `📦 *نوع اکانت:* ${data.accountType}\n` +
      `📱 *موبایل:* ${data.phone || "وارد نشده"}\n` +
      `💬 *تلگرام:* ${data.telegramId}\n` +
      `✉️ *ایمیل:* ${data.email}\n` +
      `🕐 *زمان:* ${new Date().toLocaleString("fa-IR")}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      const result = await response.json();
      return result.ok;
    } catch (error) {
      console.error("خطا در ارسال به تلگرام:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showNotification("لطفاً تمام فیلدهای required را پر کنید", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const sent = await sendToTelegram(formData);
      if (sent) {
        console.log("فرم خرید:", formData);
        showNotification(
          "✅ درخواست شما با موفقیت ثبت شد! به زودی در تلگرام به شما پیام داده خواهد شد. از انتخاب شما مچکریم.",
          "success",
        );
        setFormData({
          fullName: "",
          accountType: product?.name || "",
          phone: "",
          telegramId: "",
          email: "",
        });
      } else {
        showNotification(
          "❌ خطا در ثبت درخواست. لطفاً با وی پی ان دوباره تلاش کنید.",
          "error",
        );
      }
    } catch (error) {
      console.error(error);
      showNotification(
        "❌ خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={formRef}
      className="relative w-full px-4 mt-6 sm:mt-8 animate-fadeInUp scroll-mt-24 sm:px-0"
      id="checkoutForm"
    >
      {notification.show && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInUp ${
            notification.type === "success"
              ? "bg-gradient-to-r from-green-500 to-emerald-600"
              : "bg-gradient-to-r from-red-500 to-rose-600"
          } text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-sm font-bold text-sm sm:text-base`}
          style={{
            boxShadow:
              notification.type === "success"
                ? "0 0 20px rgba(34,197,94,0.5)"
                : "0 0 20px rgba(239,68,68,0.5)",
          }}
        >
          {notification.message}
        </div>
      )}

      <div className="w-full max-w-4xl p-4 mx-auto border-2 rounded-xl sm:rounded-2xl sm:p-6 backdrop-blur-sm border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5">
        <div className="mb-4 text-center sm:mb-6">
          <h3
            style={{ color: "var(--neon-cyan)" }}
            className="text-xl font-bold text-transparent sm:text-2xl bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text"
          >
            تکمیل درخواست خرید
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            لطفا اطلاعات خود را دقیق وارد کنید
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <FormInput
            type="text"
            name="fullName"
            label="نام و نام خانوادگی"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="مثال: محمد اکبری"
            icon="FaUser"
            required
          />

          <AccountTypeField value={formData.accountType} />

          <FormInput
            type="tel"
            name="phone"
            label="شماره موبایل"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="مثال: 09123456789"
            icon="FaPhone"
            optionalText="اختیاری"
          />

          <FormInput
            type="text"
            name="telegramId"
            label="آیدی تلگرام"
            value={formData.telegramId}
            onChange={handleChange}
            error={errors.telegramId}
            placeholder="مثال: @myusername"
            icon="FaTelegram"
            required
            inputClassName="text-left ltr"
          />

          <FormInput
            type="email"
            name="email"
            label="ایمیل جهت فعالسازی اشتراک"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="example@gmail.com"
            icon="FaEnvelope"
            required
            inputClassName="text-left ltr"
          />

          <NoticeBox />

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
