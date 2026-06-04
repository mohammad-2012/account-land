import { Link } from "react-router-dom";
import { FaShoppingCart, FaGem, FaCheckCircle } from "react-icons/fa";

const ProductCard = ({ product, darkModeShadow, isDarkMode }) => {
  let discount = 0;

  if (product.oldPrice) {
    const priceNum = parseFloat(
      product.price.toString().replace(/,/g, "").replace(" تومان", ""),
    );
    const oldPriceNum = parseFloat(
      product.oldPrice.toString().replace(/,/g, "").replace(" تومان", ""),
    );
    discount = Math.round((1 - priceNum / oldPriceNum) * 100);
  }

  const getProductIcon = () => {
    if (product.category === "ai") {
      return (
        <svg
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    }
    if (product.category === "telegram") {
      return (
        <svg
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14l-4-4m0 0l4-4m-4 4h8"
          />
        </svg>
      );
    }
    return (
      <svg
        className="w-20 h-20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    );
  };

  return (
    <div className="group animate-fadeInUp">
      <div
        className="relative h-full overflow-hidden transition-all duration-200 rounded-2xl hover:transform hover:-translate-y-1"
        style={{ boxShadow: darkModeShadow }}
      >
        <div
          className={`absolute top-3 right-3 z-20 bg-gradient-to-r ${product.color || "from-blue-500 to-cyan-500"} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}
        >
          <FaGem className="text-xs text-yellow-300" />
          {product.badge}
        </div>

        <div
          className={`p-5 ${isDarkMode ? "bg-white/5" : "bg-white/80"} backdrop-blur-sm border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-200 rounded-2xl h-full flex flex-col relative overflow-hidden`}
        >
          <div className="absolute inset-0 transition-all duration-300 pointer-events-none bg-gradient-to-r from-neon-cyan/0 via-neon-purple/0 to-neon-mint/0 group-hover:from-neon-cyan/5 group-hover:via-neon-purple/5 group-hover:to-neon-mint/5"></div>

          <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
              <div
                className={`text-6xl ${product.category === "ai" ? "text-purple-500" : "text-blue-500"}`}
              >
                {getProductIcon()}
              </div>
            </div>
          </div>

          <div className="mb-3 text-center">
            <h2 className="text-xl font-bold text-heading">{product.name}</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              {product.shortDesc}
            </p>
          </div>

          <div className="mb-4 text-center">
            <div className="text-3xl font-bold text-[var(--color-cta)]">
              {product.price}
              <span className="text-sm text-muted"> تومان</span>
            </div>
            {product.oldPrice && (
              <>
                <div className="text-sm line-through text-muted">
                  {product.oldPrice} تومان
                </div>
                <div className="mt-1 text-xs text-green-500">
                  {discount}% تخفیف ویژه
                </div>
              </>
            )}
          </div>

          <div className="flex-grow mb-4 space-y-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="flex-shrink-0 text-xs text-green-500" />
                <span className="text-secondary">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <div className="pt-1 text-xs text-center text-muted">
                +{product.features.length - 3} امکانات دیگر
              </div>
            )}
          </div>

          <div className="mt-2">
            <Link
              to={`/checkout/${product.purchaseLink}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-95 group/site relative overflow-hidden border border-neon-cyan/40 hover:border-neon-cyan text-sm"
              style={{
                background: isDarkMode
                  ? "rgba(0, 242, 255, 0.05)"
                  : "rgba(8, 145, 178, 0.05)",
                color: isDarkMode ? "#00f2ff" : "#0891b2",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 translate-x-[-100%] group-hover/site:translate-x-[100%] transition-transform duration-300"></div>
              <FaShoppingCart size={14} className="relative z-10" />
              <span className="relative z-10">مشاهده بقیه امکانات و خرید</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
