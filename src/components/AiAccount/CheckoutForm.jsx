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
  const formRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("فرم خرید:", formData);
    alert("درخواست شما ثبت شد. برای ادامه خرید به تلگرام مراجعه کنید.");
  };

  if (!isVisible) return null;

  return (
    <div
      ref={formRef}
      className="w-full mt-6 sm:mt-8 animate-fadeInUp scroll-mt-24 px-4 sm:px-0"
      id="checkoutForm"
    >
      <div className="w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border-2 border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5">
        <div className="text-center mb-4 sm:mb-6">
          <h3
            style={{ color: "var(--neon-cyan)" }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
          >
            تکمیل درخواست خرید
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-2">
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
          />

          <NoticeBox />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
