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

  return (
    <div className="group animate-fadeInUp">
      <div
        className="rounded-2xl transition-all duration-200 hover:transform hover:-translate-y-1 overflow-hidden relative h-full"
        style={{ boxShadow: darkModeShadow }}
      >
        <div
          className={`absolute top-3 right-3 z-20 bg-gradient-to-r ${product.color || "from-blue-500 to-cyan-500"} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}
        >
          <FaGem className="text-yellow-300 text-xs" />
          {product.badge}
        </div>

        <div
          className={`p-5 ${isDarkMode ? "bg-white/5" : "bg-white/80"} backdrop-blur-sm border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-200 rounded-2xl h-full flex flex-col relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-purple/0 to-neon-mint/0 group-hover:from-neon-cyan/5 group-hover:via-neon-purple/5 group-hover:to-neon-mint/5 transition-all duration-300 pointer-events-none"></div>

          <div className="relative mb-4 overflow-hidden rounded-xl h-48">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
              <div className="text-6xl">{product.icon}</div>
            </div>
          </div>

          <div className="text-center mb-3">
            <h2 className="text-xl font-bold text-heading">{product.name}</h2>
            <p className="text-xs text-muted leading-relaxed mt-1">
              {product.shortDesc}
            </p>
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
                <div className="text-xs text-green-500 mt-1">
                  {discount}% تخفیف ویژه
                </div>
              </>
            )}
          </div>

          <div className="flex-grow mb-4 space-y-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                <span className="text-secondary">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <div className="text-xs text-muted text-center pt-1">
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
