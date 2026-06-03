import { Link } from "react-router-dom";

const ProductNotFound = () => {
  return (
    <div
      className="min-h-screen pt-20 pb-12 flex items-center justify-center"
      dir="rtl"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-heading mb-4">
          محصولی یافت نشد
        </h1>
        <Link to="/ai-accounts" className="text-neon-cyan hover:underline">
          بازگشت به لیست محصولات
        </Link>
      </div>
    </div>
  );
};

export default ProductNotFound;
