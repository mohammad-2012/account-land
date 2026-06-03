import { FaStar } from "react-icons/fa";

const ProductHeader = ({ product }) => {
  return (
    <div className="flex items-center gap-4 mb-6 flex-wrap">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold text-heading">{product.name}</h1>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${product.id === 1 ? "from-orange-500 to-red-500" : "from-blue-500 to-cyan-500"} text-white flex items-center gap-1`}
          >
            <FaStar className="text-yellow-300 text-xs" />
            {product.badge}
          </span>
        </div>
        <p className="text-muted">{product.shortDesc}</p>
      </div>
    </div>
  );
};

export default ProductHeader;
