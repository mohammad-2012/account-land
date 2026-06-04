import { useState, useRef } from "react";
import { FaShoppingCart, FaClock } from "react-icons/fa";
import { useDarkModeShadow } from "../../context/DarkModeShadow";
import InfoItem from "./InfoItem";
import BuyFromTelegram from "./BuyFromTelegram";
import CheckoutForm from "./CheckoutForm";

const PriceCard = ({ product, isGemini }) => {
  const { darkModeShadow, isDarkMode } = useDarkModeShadow();
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const telegramLink = "https://t.me/mohammad_dev_2012";

  const handleSiteBuy = () => {
    setShowForm(true);
    setTimeout(() => {
      if (formRef.current) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = formRef.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <>
      <div>
        <div
          className="sticky p-6 border rounded-2xl backdrop-blur-sm border-neon-cyan/20 top-24"
          style={{ boxShadow: darkModeShadow }}
        >
          <div className="mb-6 text-center">
            <div className="mb-2 text-sm text-muted">قیمت ویژه</div>
            <div className="text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text ">
              {product.price}
            </div>
            {isGemini && (
              <div className="mt-2">
                <span className="text-xs line-through text-muted">
                  ۱,۱۵۰,۰۰۰ تومان
                </span>
                <span className="mr-2 text-xs text-red-500">تخفیف ویژه</span>
              </div>
            )}
          </div>

          <div className="mb-6 space-y-3">
            <InfoItem
              icon="FaCheckCircle"
              text="فعال‌سازی روی ایمیل شخصی شما"
              colorClass="text-neon-cyan"
              hoverColorClass="group-hover:text-neon-cyan"
              bgClass="bg-neon-cyan/5"
            />
            <InfoItem
              icon="FaCheckCircle"
              text="تحویل سریع و آنی"
              colorClass="text-neon-cyan"
              hoverColorClass="group-hover:text-neon-cyan"
              bgClass="bg-neon-cyan/5"
            />
            <InfoItem
              icon="FaShieldAlt"
              text="گارانتی تعویض و پشتیبانی کامل"
              colorClass="text-neon-mint"
              hoverColorClass="group-hover:text-neon-mint"
              bgClass="bg-neon-mint/5"
            />
            <InfoItem
              icon="FaUsersSlash"
              text="این اکانت اختصاصی و برای یک فرد می باشد."
              colorClass="text-red-400"
              hoverColorClass="group-hover:text-red-400"
              bgClass="bg-red-500/5"
            />
          </div>

          <div className="space-y-3">
            <BuyFromTelegram
              telegramLink={telegramLink}
              accountName={product?.name}
            />

            <button
              onClick={handleSiteBuy}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 group/site relative overflow-hidden border-2 border-neon-cyan/40 hover:border-neon-cyan"
              style={{
                background: isDarkMode
                  ? "rgba(0, 242, 255, 0.05)"
                  : "rgba(8, 145, 178, 0.05)",
                color: isDarkMode ? "#00f2ff" : "#0891b2",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 translate-x-[-100%] group-hover/site:translate-x-[100%] transition-transform duration-500"></div>
              <FaShoppingCart size={16} className="relative z-10" />
              <span className="relative z-10">ادامه خرید با سایت</span>
            </button>
          </div>

          <div className="pt-4 mt-6 text-center border-t border-neon-cyan/20">
            <div className="flex items-center justify-center gap-1 text-xs text-muted">
              <FaClock className="text-neon-cyan" />
              <span>تحویل فوری پس از پرداخت</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={formRef} className="flex justify-center w-full mt-8">
        <div className="w-full max-w-4xl">
          <CheckoutForm product={product} isVisible={showForm} />
        </div>
      </div>
    </>
  );
};

export default PriceCard;
