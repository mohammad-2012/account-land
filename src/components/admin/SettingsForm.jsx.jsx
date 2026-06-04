import {
  FaTag,
  FaMoneyBillWave,
  FaTelegram,
  FaLink,
  FaPalette,
  FaCheck,
  FaCog,
} from "react-icons/fa";

export default function SettingsForm({ siteSettings, updateSiteSettings }) {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="px-4 py-3 border-b border-gray-200 sm:px-6 sm:py-4 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 dark:border-gray-700">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 sm:text-xl dark:text-white">
          <FaCog className="text-neon-cyan" />
          تنظیمات عمومی سایت
        </h2>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
          اطلاعات تماس و تنظیمات پایه فروشگاه
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaTag className="text-neon-cyan" /> نام سایت
            </label>
            <input
              type="text"
              value={siteSettings?.siteName || ""}
              onChange={(e) => updateSiteSettings({ siteName: e.target.value })}
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="مثال: اکانت لند"
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaMoneyBillWave className="text-neon-cyan" /> شماره تماس
            </label>
            <input
              type="text"
              value={siteSettings?.contactPhone || ""}
              onChange={(e) =>
                updateSiteSettings({ contactPhone: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="مثال: 09123456789"
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaTelegram className="text-neon-cyan" /> آیدی تلگرام
            </label>
            <input
              type="text"
              value={siteSettings?.contactTelegram || ""}
              onChange={(e) =>
                updateSiteSettings({ contactTelegram: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="@username"
            />
          </div>

          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaLink className="text-neon-cyan" /> ایمیل
            </label>
            <input
              type="email"
              value={siteSettings?.contactEmail || ""}
              onChange={(e) =>
                updateSiteSettings({ contactEmail: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="info@example.com"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaPalette className="text-neon-cyan" /> توضیحات سایت
            </label>
            <textarea
              value={siteSettings?.siteDescription || ""}
              onChange={(e) =>
                updateSiteSettings({ siteDescription: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              rows="3"
              placeholder="توضیحات متا برای سئو..."
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              🕐 ساعات کاری
            </label>
            <input
              type="text"
              value={siteSettings?.workingHours || ""}
              onChange={(e) =>
                updateSiteSettings({ workingHours: e.target.value })
              }
              className="w-full p-2 text-sm border rounded-lg sm:p-2.5 bg-white text-gray-800 focus:ring-2 focus:ring-neon-cyan dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="۲۴ ساعته"
            />
          </div>
        </div>

        <div className="p-3 mt-6 border border-green-200 rounded-xl sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-green-500/20">
              <FaCheck className="text-green-600 dark:text-green-400" />
            </div>
            <p className="text-xs text-green-600 sm:text-sm dark:text-green-400">
              تمام تغییرات به صورت خودکار ذخیره و در سایت اعمال می‌شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
