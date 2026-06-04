import { FaBoxes, FaCog } from "react-icons/fa";

export default function AdminTabs({ activeTab, setActiveTab, productsCount }) {
  const tabs = [
    {
      id: "products",
      label: "مدیریت محصولات",
      icon: FaBoxes,
      count: productsCount,
    },
    { id: "settings", label: "تنظیمات سایت", icon: FaCog, count: null },
  ];

  return (
    <div className="flex gap-1 p-1 mb-6 sm:gap-2 sm:p-1.5 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            activeTab === tab.id
              ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg scale-105"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <tab.icon />
          <span className="hidden sm:inline">{tab.label}</span>
          <span className="sm:hidden">
            {tab.id === "products" ? "محصولات" : "تنظیمات"}
          </span>
          {tab.count !== null && tab.count > 0 && (
            <span
              className={`px-1.5 py-0.5 text-xs rounded-full ${
                activeTab === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              }`}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
