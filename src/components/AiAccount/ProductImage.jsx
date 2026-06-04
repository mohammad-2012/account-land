const ProductImage = ({ product }) => {
  const getProductIcon = () => {
    if (product.category === "ai") {
      return (
        <svg
          className="w-32 h-32"
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
          className="w-32 h-32"
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
        className="w-32 h-32"
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

  const getIconColor = () => {
    if (product.category === "ai") return "text-purple-500";
    if (product.category === "telegram") return "text-blue-500";
    return "text-neon-cyan";
  };

  return (
    <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
        <div className={`${getIconColor()}`}>{getProductIcon()}</div>
      </div>
    </div>
  );
};

export default ProductImage;
