import { FaPlus, FaSave, FaTimes, FaCheck, FaStar } from "react-icons/fa";

const iconOptions = [
  { name: "FaRobot", defaultColor: "#10a37f" },
  { name: "FaGoogle", defaultColor: "#4285f4" },
  { name: "FaTelegram", defaultColor: "#0088cc" },
  { name: "FaGem", defaultColor: "#eab308" },
  { name: "FaBolt", defaultColor: "#10b981" },
  { name: "FaTrophy", defaultColor: "#f97316" },
];

const categoryOptions = [
  { value: "ai", label: "اکانت هوش مصنوعی", icon: "🤖" },
  { value: "telegram", label: "اکانت تلگرام", icon: "📱" },
];

const colorOptions = [
  { value: "from-emerald-500 to-teal-500", label: "سبز زمردی" },
  { value: "from-blue-500 to-cyan-500", label: "آبی آسمانی" },
  { value: "from-purple-500 to-pink-500", label: "بنفش صورتی" },
  { value: "from-green-500 to-teal-500", label: "سبز فیروزه‌ای" },
  { value: "from-orange-500 to-red-500", label: "نارنجی قرمز" },
  { value: "from-indigo-500 to-purple-500", label: "نیلی بنفش" },
  { value: "from-pink-500 to-rose-500", label: "صورتی گلبهی" },
];

export default function ProductForm({
  newProduct,
  setNewProduct,
  featureInput,
  setFeatureInput,
  onAddFeature,
  onRemoveFeature,
  onSubmit,
  onCancel,
}) {
  return (
    <div className="mb-8 overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="px-4 py-3 border-b border-gray-200 sm:px-6 sm:py-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:border-gray-700">
        <h3 className="flex items-center gap-2 text-base font-bold text-gray-800 sm:text-lg dark:text-white">
          <FaPlus className="text-green-500" />
          افزودن محصول جدید
        </h3>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              نام محصول *
            </label>
            <input
              type="text"
              placeholder="مثال: ChatGPT Plus"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              قیمت (تومان) *
            </label>
            <input
              type="text"
              placeholder="مثال: ۵۸۰,۰۰۰"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              قیمت قدیمی
            </label>
            <input
              type="text"
              placeholder="مثال: ۷۹۰,۰۰۰"
              value={newProduct.oldPrice}
              onChange={(e) =>
                setNewProduct({ ...newProduct, oldPrice: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              بنر / برچسب
            </label>
            <input
              type="text"
              placeholder="مثال: پرفروش‌ترین"
              value={newProduct.badge}
              onChange={(e) =>
                setNewProduct({ ...newProduct, badge: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              دسته‌بندی
            </label>
            <select
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.icon} {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              رنگ گرادیان
            </label>
            <select
              value={newProduct.color}
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              {colorOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              آیکون محصول
            </label>
            <select
              value={newProduct.icon}
              onChange={(e) =>
                setNewProduct({ ...newProduct, icon: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              {iconOptions.map((opt) => (
                <option key={opt.name} value={opt.name}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              رنگ آیکون
            </label>
            <input
              type="color"
              value={newProduct.iconColor}
              onChange={(e) =>
                setNewProduct({ ...newProduct, iconColor: e.target.value })
              }
              className="w-full h-10 p-1 bg-white border rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              لینک خرید
            </label>
            <input
              type="text"
              placeholder="مثال: chatgpt-plus"
              value={newProduct.purchaseLink}
              onChange={(e) =>
                setNewProduct({ ...newProduct, purchaseLink: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div className="flex items-center gap-3 pt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newProduct.popular}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, popular: e.target.checked })
                }
                className="w-4 h-4 rounded text-neon-cyan focus:ring-neon-cyan"
              />
              <span className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                <FaStar className="text-yellow-500" /> محصول ویژه
              </span>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            توضیح کوتاه
          </label>
          <textarea
            placeholder="توضیح مختصر محصول..."
            value={newProduct.shortDesc}
            onChange={(e) =>
              setNewProduct({ ...newProduct, shortDesc: e.target.value })
            }
            className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
            rows="2"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            ویژگی‌های محصول
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="مثال: دسترسی به مدل GPT-4"
              className="flex-1 p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              onKeyPress={(e) => e.key === "Enter" && onAddFeature()}
            />
            <button
              onClick={onAddFeature}
              className="px-3 py-2 text-sm text-white transition-all rounded-lg sm:px-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              افزودن
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {newProduct.features.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-full sm:px-3 sm:py-1.5 sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <FaCheck className="text-xs text-green-500" />
                {feat}
                <button
                  onClick={() => onRemoveFeature(idx)}
                  className="text-red-400 hover:text-red-600"
                >
                  <FaTimes size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 mt-6 border-t border-gray-200 sm:flex-row dark:border-gray-700">
          <button
            onClick={onSubmit}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white transition-all rounded-lg shadow-md sm:px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <FaSave /> ذخیره محصول
          </button>
          <button
            onClick={onCancel}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 transition-all bg-gray-200 rounded-lg sm:px-6 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <FaTimes /> انصراف
          </button>
        </div>
      </div>
    </div>
  );
}
