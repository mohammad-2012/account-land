import React, { useState } from "react";

const colorMap = {
  "from-emerald-500 to-teal-500":
    "bg-gradient-to-r from-emerald-500 to-teal-500",
  "from-blue-500 to-cyan-500": "bg-gradient-to-r from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500": "bg-gradient-to-r from-purple-500 to-pink-500",
  "from-green-500 to-teal-500": "bg-gradient-to-r from-green-500 to-teal-500",
  "from-orange-500 to-red-500": "bg-gradient-to-r from-orange-500 to-red-500",
  "from-indigo-500 to-purple-500":
    "bg-gradient-to-r from-indigo-500 to-purple-500",
  "from-pink-500 to-rose-500": "bg-gradient-to-r from-pink-500 to-rose-500",
};

const iconOptions = [
  { name: "🤖", value: "🤖", label: "ربات" },
  { name: "🔮", value: "🔮", label: "کریستال" },
  { name: "📱", value: "📱", label: "موبایل" },
  { name: "💎", value: "💎", label: "الماس" },
  { name: "⚡", value: "⚡", label: "صاعقه" },
  { name: "🏆", value: "🏆", label: "جام" },
  { name: "🎯", value: "🎯", label: "هدف" },
  { name: "⭐", value: "⭐", label: "ستاره" },
  { name: "🛒", value: "🛒", label: "سبد خرید" },
  { name: "🎁", value: "🎁", label: "هدیه" },
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

const getColorGradient = (colorValue) => {
  return colorMap[colorValue] || "bg-gradient-to-r from-blue-500 to-cyan-500";
};

const getCategoryLabel = (category) => {
  if (category === "ai") return "اکانت هوش مصنوعی";
  if (category === "telegram") return "اکانت تلگرام";
  return category;
};

const ProductIcon = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8"
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v18"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeSlashIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const SaveIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
    />
  </svg>
);

const TimesIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="inline w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function ProductCard({
  product,
  isEditing,
  onEdit,
  onUpdate,
  onCancel,
  onToggleActive,
  onDelete,
}) {
  const [featureInput, setFeatureInput] = useState("");
  const [editData, setEditData] = useState(product);

  React.useEffect(() => {
    setEditData(product);
  }, [product]);

  const handleChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
    onEdit({ ...editData, [field]: value });
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      const newFeatures = [...(editData.features || []), featureInput.trim()];
      handleChange("features", newFeatures);
      setFeatureInput("");
    }
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = editData.features.filter((_, i) => i !== index);
    handleChange("features", newFeatures);
  };

  if (isEditing) {
    return (
      <div className="p-4 space-y-4 bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-2xl dark:border-gray-700 sm:p-6">
        <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">
          ویرایش محصول
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              نام محصول *
            </label>
            <input
              value={editData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="نام محصول"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              قیمت (تومان) *
            </label>
            <input
              value={editData.price || ""}
              onChange={(e) => handleChange("price", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="قیمت"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              قیمت قدیمی
            </label>
            <input
              value={editData.oldPrice || ""}
              onChange={(e) => handleChange("oldPrice", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="قیمت قدیمی"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              بنر / برچسب
            </label>
            <input
              value={editData.badge || ""}
              onChange={(e) => handleChange("badge", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="مثال: پرفروش‌ترین"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              دسته‌بندی
            </label>
            <select
              value={editData.category || "ai"}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.icon} {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              رنگ گرادیان
            </label>
            <select
              value={editData.color || "from-blue-500 to-cyan-500"}
              onChange={(e) => handleChange("color", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              {colorOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              آیکون محصول
            </label>
            <select
              value={editData.emoji || "📦"}
              onChange={(e) => handleChange("emoji", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              {iconOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.name} - {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              لینک خرید
            </label>
            <input
              value={editData.purchaseLink || ""}
              onChange={(e) => handleChange("purchaseLink", e.target.value)}
              className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="مثال: chatgpt-plus"
            />
          </div>
          <div className="flex items-center pt-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editData.popular || false}
                onChange={(e) => handleChange("popular", e.target.checked)}
                className="w-4 h-4 rounded text-neon-cyan focus:ring-neon-cyan"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                محصول ویژه / محبوب
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            توضیح کوتاه
          </label>
          <textarea
            value={editData.shortDesc || ""}
            onChange={(e) => handleChange("shortDesc", e.target.value)}
            className="w-full p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
            rows="2"
            placeholder="توضیح مختصر محصول..."
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            ویژگی‌های محصول
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="مثال: دسترسی به مدل GPT-4"
              className="flex-1 p-2 text-sm text-gray-800 bg-white border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
              onKeyPress={(e) => e.key === "Enter" && handleAddFeature()}
            />
            <button
              onClick={handleAddFeature}
              className="px-4 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              افزودن
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {editData.features?.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >
                {feat}
                <button
                  onClick={() => handleRemoveFeature(idx)}
                  className="text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 sm:flex-row dark:border-gray-700">
          <button
            onClick={() => onUpdate(editData)}
            className="flex items-center justify-center gap-2 px-6 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <SaveIcon /> ذخیره تغییرات
          </button>
          <button
            onClick={onCancel}
            className="flex items-center justify-center gap-2 px-6 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <TimesIcon /> انصراف
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-md group dark:bg-gray-800 rounded-2xl hover:shadow-xl dark:border-gray-700">
      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${getColorGradient(product.color)} flex items-center justify-center shadow-md flex-shrink-0 text-2xl`}
            >
              {product.emoji || "📦"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <h3 className="text-base font-bold text-gray-800 sm:text-lg dark:text-white">
                  {product.name}
                </h3>
                {product.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-yellow-500 to-orange-500">
                    {product.badge}
                  </span>
                )}
                {product.popular && (
                  <span className="px-2 py-0.5 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full dark:bg-yellow-900/30 dark:text-yellow-400">
                    <StarIcon /> ویژه
                  </span>
                )}
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                  {getCategoryLabel(product.category)}
                </span>
              </div>
              <p className="max-w-md mt-1 text-xs text-gray-500 line-clamp-2 sm:text-sm dark:text-gray-400">
                {product.shortDesc?.slice(0, 60)}...
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1 sm:gap-3 sm:mt-2">
                <span className="text-sm font-bold sm:text-lg text-neon-cyan">
                  {product.price} تومان
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through sm:text-sm">
                    {product.oldPrice} تومان
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onToggleActive(product.id)}
              className={`p-2 rounded-xl transition-all ${product.isActive ? "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20" : "bg-green-500/10 text-green-600 hover:bg-green-500/20"}`}
              title={product.isActive ? "غیرفعال کردن" : "فعال کردن"}
            >
              {product.isActive ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
            <button
              onClick={() => onEdit(product)}
              className="p-2 text-blue-600 transition-all bg-blue-500/10 rounded-xl hover:bg-blue-500/20"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => {
                if (confirm(`آیا از حذف "${product.name}" مطمئن هستید؟`))
                  onDelete(product.id);
              }}
              className="p-2 text-red-600 transition-all bg-red-500/10 rounded-xl hover:bg-red-500/20"
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
